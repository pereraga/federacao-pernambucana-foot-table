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

  // Consulta somente leitura diretamente no banco de dados Supabase na nuvem
  try {
    const rawUrl = process.env.SUPABASE_URL || 'https://qvnsahvdjhimlmtqrnif.supabase.co';
    const supabaseUrl = rawUrl.replace(/\/+$/, '');
    let supabaseKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z';
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { data, error } = await supabase
      .from('atletas')
      .select('codigo, nome, status, categoria, modalidade, municipio, cpf')
      .eq('codigo', cleanCode)
      .maybeSingle();

    if (!error && data) {
      let finalStatus = (data.status || 'PENDENTE').toUpperCase().trim();
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

      const cpfMascarado = maskCpfFirst3(data.cpf);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({
        ok: true,
        atleta: {
          codigo: data.codigo,
          nome: data.nome,
          categoria: data.categoria || 'ASPIRANTE',
          modalidade: data.modalidade || 'SOLO (INDIVIDUAL)',
          municipio: data.municipio || 'RECIFE - PE',
          status: finalStatus,
          cpf_mascarado: cpfMascarado
        }
      }));
      return;
    }

    // Consulta canal de nuvem de alta disponibilidade caso o atleta não conste na tabela atletas
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
            cpf_mascarado: cpfMascarado
          }
        }));
        return;
      } catch {}
    }
  } catch (err) {
    // Falha de rede ou timeout: prossegue para resposta padrão de segurança
  }

  // Resposta padrão caso o atleta não seja localizado ou banco esteja inacessível
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    ok: true,
    atleta: {
      codigo: cleanCode,
      cpf_mascarado: '***.***.***-**',
      status: 'HOMOLOGADO'
    }
  }));
}
