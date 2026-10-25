import type { IncomingMessage, ServerResponse } from 'node:http';
import { createClient } from '@supabase/supabase-js';
import { safeValidate, AtletaBuscaSchema } from '../lib/validation.js';
import { checkRateLimit, getClientIp } from '../lib/rate-limiter.js';

function maskCpfFirst3(cpf?: string | null): string {
  const digits = String(cpf || '').replace(/\D/g, '');
  if (digits.length >= 3) {
    return `${digits.slice(0, 3)}.***.***-**`;
  }
  return '***.***.***-**';
}


// Função auxiliar para montagem de foto por completo a partir das frações (chunks) gravadas no banco
async function assemblePhotoFromChunks(supabaseClient: any, code: string, fallbackUrl: string, secondaryClient?: any): Promise<string> {
  if (!code) return fallbackUrl || '';

  // 1. Tenta recuperar do cliente primário
  if (supabaseClient) {
    try {
      const { data: chunks } = await supabaseClient
        .from('keep_alive_logs')
        .select('source, status')
        .like('source', `athlete_photo_chunk:${code}:%`)
        .order('source', { ascending: true });

      if (chunks && Array.isArray(chunks) && chunks.length > 0) {
        chunks.sort((a: any, b: any) => {
          const idxA = parseInt((a.source || '').split(':')[2] || '0', 10);
          const idxB = parseInt((b.source || '').split(':')[2] || '0', 10);
          return idxA - idxB;
        });
        const assembled = chunks.map((c: any) => c.status).join('');
        if (assembled.startsWith('data:image/')) {
          return assembled;
        }
      }
    } catch (err) {}
  }

  // 2. Se não encontrou no primário, tenta recuperar do cliente secundário
  if (secondaryClient) {
    try {
      const { data: secChunks } = await secondaryClient
        .from('keep_alive_logs')
        .select('source, status')
        .like('source', `athlete_photo_chunk:${code}:%`)
        .order('source', { ascending: true });

      if (secChunks && Array.isArray(secChunks) && secChunks.length > 0) {
        secChunks.sort((a: any, b: any) => {
          const idxA = parseInt((a.source || '').split(':')[2] || '0', 10);
          const idxB = parseInt((b.source || '').split(':')[2] || '0', 10);
          return idxA - idxB;
        });
        const assembled = secChunks.map((c: any) => c.status).join('');
        if (assembled.startsWith('data:image/')) {
          return assembled;
        }
      }
    } catch (err2) {}
  }

  return fallbackUrl || '';
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.removeHeader('X-Powered-By');
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');

  // Rate Limiting por IP para busca pública (evita raspagem e enumeração em massa)
  const clientIp = getClientIp(req as any);
  const rateLimit = checkRateLimit(`search:${clientIp}`, {
    windowMs: 60 * 1000,
    maxRequests: 30
  });

  if (!rateLimit.allowed) {
    res.statusCode = 429;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Muitas tentativas. Tente novamente mais tarde.' }));
    return;
  }

  const url = new URL(req.url || '/', `http://${req.headers.host || 'localhost'}`);
  const codigo = url.searchParams.get('codigo') || '';

  const validation = safeValidate(AtletaBuscaSchema, { codigo });
  if (!validation.success) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Requisição inválida' }));
    return;
  }

  const cleanCode = validation.data.codigo;

  // Bloqueio imediato para atletas excluídos do sistema
  if (['548608', '331296'].includes(cleanCode)) {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Atleta não encontrado' }));
    return;
  }

  // Consulta somente leitura diretamente no banco de dados Supabase na nuvem (Dual Database com Failover Automático)
  try {
    const rawUrl = process.env.SUPABASE_URL || 'https://qvnsahvdjhimlmtqrnif.supabase.co';
    const supabaseUrl = rawUrl.replace(/\/+$/, '');
    let supabaseKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const secUrl = (process.env.SUPABASE_SECONDARY_URL || 'https://xvqsysfqbkfsogkwtbal.supabase.co').replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
    const secKey = process.env.SUPABASE_SECONDARY_ANON_KEY || 'sb_publishable_2T1UD0EYvVBlIqCvnX5VHw_K6mmAn3M';
    const secSupabase = (secUrl && secKey) ? createClient(secUrl, secKey) : null;

    let athleteFound: any = null;
    let isFailover = false;

    // 1. Tenta buscar no Banco 1 (atletas)
    try {
      const { data, error } = await supabase
        .from('atletas')
        .select('codigo, nome, status, categoria, modalidade, municipio, cpf, foto_url')
        .eq('codigo', cleanCode)
        .maybeSingle();

      if (!error && data) {
        athleteFound = data;
      }
    } catch (e1) {}

    // 1.1 Se não encontrou no Banco 1, consulta Banco 2 (atletas)
    if (!athleteFound && secSupabase) {
      try {
        const { data: secData, error: secError } = await secSupabase
          .from('atletas')
          .select('codigo, nome, status, categoria, modalidade, municipio, cpf, foto_url')
          .eq('codigo', cleanCode)
          .maybeSingle();

        if (!secError && secData) {
          athleteFound = secData;
          isFailover = true;
        }
      } catch (eSec) {}
    }

    // 1.2 Se encontrou na tabela atletas (seja Banco 1 ou Banco 2)
    if (athleteFound) {
      // Verifica se o atleta foi marcado como excluído
      try {
        const { data: delLog } = await supabase
          .from('keep_alive_logs')
          .select('status')
          .eq('source', `athlete_deleted:${cleanCode}`)
          .limit(1)
          .maybeSingle();
        if (delLog && delLog.status === 'DELETED') {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: 'Atleta não encontrado' }));
          return;
        }
      } catch {}

      let finalStatus = (athleteFound.status || 'PENDENTE').toUpperCase().trim();
      if (finalStatus === 'PENDENTE') {
        try {
          const { data: statusLog } = await supabase
            .from('keep_alive_logs')
            .select('status')
            .eq('source', `athlete_status:${cleanCode}`)
            .order('pinged_at', { ascending: false })
            .limit(1)
            .maybeSingle();
          if (statusLog && statusLog.status) {
            finalStatus = String(statusLog.status).toUpperCase().trim();
          }
        } catch {}
      }

      const cpfMascarado = maskCpfFirst3(athleteFound.cpf);
      const rawFoto = (athleteFound.foto_url && !athleteFound.foto_url.includes('unsplash.com')) ? athleteFound.foto_url : '';
      const assembledFoto = await assemblePhotoFromChunks(supabase, cleanCode, rawFoto, secSupabase);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      if (isFailover) {
        res.setHeader('X-Failover-Database', 'secondary');
      }
      res.end(JSON.stringify({
        ok: true,
        atleta: {
          codigo: athleteFound.codigo,
          nome: athleteFound.nome,
          categoria: athleteFound.categoria || 'ASPIRANTE',
          modalidade: athleteFound.modalidade || 'SOLO (INDIVIDUAL)',
          municipio: athleteFound.municipio || 'RECIFE - PE',
          status: finalStatus,
          foto_url: assembledFoto || rawFoto,
          foto_compacta: rawFoto,
          cpf_mascarado: cpfMascarado
        }
      }));
      return;
    }

    // 2. Consulta canal de nuvem de alta disponibilidade em Banco 1 (keep_alive_logs)
    const { data: recordLog } = await supabase
      .from('keep_alive_logs')
      .select('status')
      .eq('source', `athlete_record:${cleanCode}`)
      .order('pinged_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (recordLog && recordLog.status) {
      try {
        const parsed = typeof recordLog.status === 'string' ? JSON.parse(recordLog.status) : recordLog.status;
        let recStatus = (parsed.status || 'PENDENTE').toUpperCase().trim();

        const { data: statusLog } = await supabase
          .from('keep_alive_logs')
          .select('status')
          .eq('source', `athlete_status:${cleanCode}`)
          .order('pinged_at', { ascending: false })
          .limit(1)
          .maybeSingle();
        if (statusLog && statusLog.status) {
          recStatus = String(statusLog.status).toUpperCase().trim();
        }

        const cpfMascarado = maskCpfFirst3(parsed.cpf);
        const rawFoto = (parsed.foto_url && !parsed.foto_url.includes('unsplash.com')) ? parsed.foto_url : (parsed.foto || '');
        const assembledFoto = await assemblePhotoFromChunks(supabase, cleanCode, rawFoto, secSupabase);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify({
          ok: true,
          atleta: {
            codigo: parsed.codigo || cleanCode,
            nome: parsed.nome || 'Atleta Oficial',
            categoria: parsed.categoria || 'ASPIRANTE',
            modalidade: parsed.modalidade || 'SOLO (INDIVIDUAL)',
            municipio: parsed.municipio || 'RECIFE - PE',
            status: recStatus,
            foto_url: assembledFoto || rawFoto,
            foto_compacta: rawFoto,
            cpf_mascarado: cpfMascarado
          }
        }));
        return;
      } catch {}
    }

    // 2.1 Consulta canal de nuvem de alta disponibilidade em Banco 2 (keep_alive_logs)
    if (secSupabase) {
      try {
        const { data: secRecordLog } = await secSupabase
          .from('keep_alive_logs')
          .select('status')
          .eq('source', `athlete_record:${cleanCode}`)
          .order('pinged_at', { ascending: false })
          .limit(1)
          .maybeSingle();

        if (secRecordLog && secRecordLog.status) {
          const parsedSec = typeof secRecordLog.status === 'string' ? JSON.parse(secRecordLog.status) : secRecordLog.status;
          let recStatusSec = (parsedSec.status || 'PENDENTE').toUpperCase().trim();
          const cpfMascarado = maskCpfFirst3(parsedSec.cpf);
          const rawFotoSec = (parsedSec.foto_url && !parsedSec.foto_url.includes('unsplash.com')) ? parsedSec.foto_url : (parsedSec.foto || '');
          const assembledFotoSec = await assemblePhotoFromChunks(supabase, cleanCode, rawFotoSec, secSupabase);

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('X-Failover-Database', 'secondary');
          res.end(JSON.stringify({
            ok: true,
            atleta: {
              codigo: parsedSec.codigo || cleanCode,
              nome: parsedSec.nome || 'Atleta Oficial',
              categoria: parsedSec.categoria || 'ASPIRANTE',
              modalidade: parsedSec.modalidade || 'SOLO (INDIVIDUAL)',
              municipio: parsedSec.municipio || 'RECIFE - PE',
              status: recStatusSec,
              foto_url: assembledFotoSec || rawFotoSec,
              foto_compacta: rawFotoSec,
              cpf_mascarado: cpfMascarado
            }
          }));
          return;
        }
      } catch {}
    }
  } catch (err) {
    // Falha de rede ou timeout no Supabase primário: tenta failover no banco de dados reserva
    const secUrl = (process.env.SUPABASE_SECONDARY_URL || 'https://xvqsysfqbkfsogkwtbal.supabase.co').replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
    const secKey = process.env.SUPABASE_SECONDARY_ANON_KEY || 'sb_publishable_2T1UD0EYvVBlIqCvnX5VHw_K6mmAn3M';

    if (secUrl && secKey) {
      try {
        const secSupabase = createClient(secUrl, secKey);
        const { data: secData, error: secError } = await secSupabase
          .from('atletas')
          .select('codigo, nome, status, categoria, modalidade, municipio, cpf, foto_url')
          .eq('codigo', cleanCode)
          .maybeSingle();

        if (!secError && secData) {
          const finalStatus = (secData.status || 'PENDENTE').toUpperCase().trim();
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.setHeader('X-Failover-Database', 'secondary');
          res.end(JSON.stringify({
            ok: true,
            atleta: {
              codigo: secData.codigo,
              nome: secData.nome,
              status: finalStatus,
              categoria: secData.categoria || 'AMADOR',
              modalidade: secData.modalidade || 'SOLO (INDIVIDUAL)',
              municipio: secData.municipio || 'RECIFE / PE',
              foto_url: (secData.foto_url && !secData.foto_url.includes('unsplash.com')) ? secData.foto_url : '',
              cpf_mascarado: maskCpfFirst3(secData.cpf)
            }
          }));
          return;
        }
      } catch (secErr) {
        console.warn('Falha também no banco reserva:', secErr);
      }
    }
  }

  // Resposta padrão caso o atleta não seja localizado ou banco esteja inacessível
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    ok: true,
    atleta: {
      codigo: cleanCode,
      cpf_mascarado: '***.***.***-**',
      status: 'PENDENTE'
    }
  }));
}
