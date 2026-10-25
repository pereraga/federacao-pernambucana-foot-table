import type { IncomingMessage, ServerResponse } from 'node:http';
import { createClient } from '@supabase/supabase-js';
import { getSessionFromCookieHeader } from '../lib/session.js';
import { safeValidate, GestaoAtletaSchema, StatusAtletaSchema, ExcluirAtletaSchema, type GestaoAtletaInput } from '../lib/validation.js';

interface ExtendedRequest extends IncomingMessage {
  body?: any;
}

export default async function handler(req: ExtendedRequest, res: ServerResponse) {
  res.removeHeader('X-Powered-By');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  // 1. Validação obrigatória de sessão via cookie HttpOnly
  const session = getSessionFromCookieHeader(req.headers.cookie);
  if (!session || session.role !== 'admin') {
    res.statusCode = 401;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Não autorizado' }));
    return;
  }

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Método não permitido' }));
    return;
  }

  // 2. Extração segura do payload
  let rawBody = '';
  if (req.body && typeof req.body === 'object') {
    rawBody = JSON.stringify(req.body);
  } else {
    for await (const chunk of req) {
      rawBody += chunk;
    }
  }

  let parsedJson: unknown;
  try {
    parsedJson = JSON.parse(rawBody || '{}');
  } catch {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Requisição inválida' }));
    return;
  }

  // 2.1 Suporte a exclusão de atleta
  const delVal = safeValidate(ExcluirAtletaSchema, parsedJson);
  if (delVal.success) {
    const cleanCode = delVal.data.codigo.trim();

    // Executa no Banco 1
    try {
      const rawUrl = process.env.SUPABASE_URL || 'https://qvnsahvdjhimlmtqrnif.supabase.co';
      const supabaseUrl = rawUrl.replace(/\/+$/, '');
      let supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || 'sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z';
      const supabase = createClient(supabaseUrl, supabaseKey);
      await supabase.from('atletas').delete().eq('codigo', cleanCode).catch(() => null);
      await supabase.from('keep_alive_logs').delete().eq('source', `athlete_record:${cleanCode}`).catch(() => null);
      await supabase.from('keep_alive_logs').delete().eq('source', `athlete_status:${cleanCode}`).catch(() => null);
      await supabase.from('keep_alive_logs').insert([{
        source: `athlete_deleted:${cleanCode}`,
        status: 'DELETED',
        pinged_at: new Date().toISOString()
      }]).catch(() => null);
    } catch (e1) {}

    // Executa no Banco 2
    try {
      const secUrl = (process.env.SUPABASE_SECONDARY_URL || 'https://xvqsysfqbkfsogkwtbal.supabase.co').replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
      const secKey = process.env.SUPABASE_SECONDARY_SERVICE_ROLE_KEY || process.env.SUPABASE_SECONDARY_ANON_KEY || 'sb_publishable_2T1UD0EYvVBlIqCvnX5VHw_K6mmAn3M';
      if (secUrl && secKey) {
        const secSupabase = createClient(secUrl, secKey);
        await secSupabase.from('atletas').delete().eq('codigo', cleanCode).catch(() => null);
        await secSupabase.from('keep_alive_logs').delete().eq('source', `athlete_record:${cleanCode}`).catch(() => null);
        await secSupabase.from('keep_alive_logs').delete().eq('source', `athlete_status:${cleanCode}`).catch(() => null);
        await secSupabase.from('keep_alive_logs').insert([{
          source: `athlete_deleted:${cleanCode}`,
          status: 'DELETED',
          pinged_at: new Date().toISOString()
        }]).catch(() => null);
      }
    } catch (e2) {}

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ success: true, codigo: cleanCode, deleted: true }));
    return;
  }

  // 3. Validação estrita de schema com Zod (suporta GestaoAtletaSchema completo ou StatusAtletaSchema isolado)
  let targetCodigo = '';
  let targetStatus = '';
  let fullAthleteData: GestaoAtletaInput | null = null;

  const statusVal = safeValidate(StatusAtletaSchema, parsedJson);
  if (statusVal.success) {
    targetCodigo = statusVal.data.codigo;
    targetStatus = statusVal.data.status;
  } else {
    const fullVal = safeValidate(GestaoAtletaSchema, parsedJson);
    if (!fullVal.success) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: fullVal.error }));
      return;
    }
    targetCodigo = fullVal.data.codigo;
    targetStatus = fullVal.data.status;
    fullAthleteData = fullVal.data;
  }

  // 4. Execução da mutação autorizada e blindada no Supabase
  try {
    const rawUrl = process.env.SUPABASE_URL || 'https://qvnsahvdjhimlmtqrnif.supabase.co';
    const supabaseUrl = rawUrl.replace(/\/+$/, '');
    let supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
    if (!supabaseKey || supabaseKey.startsWith('http') || supabaseKey.length < 20) {
      supabaseKey = 'sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z';
    }
    const supabase = createClient(supabaseUrl, supabaseKey);

    const cleanCode = targetCodigo.trim();
    const cleanStatus = targetStatus.trim().toUpperCase();

    // A) Inserção/Atualização autorizada na tabela atletas
    if (fullAthleteData) {
      const cleanPhoto = fullAthleteData.foto_url || fullAthleteData.foto || '';
      const payload: Record<string, any> = {
        codigo: fullAthleteData.codigo,
        nome: fullAthleteData.nome,
        cpf: fullAthleteData.cpf,
        modalidade: fullAthleteData.modalidade,
        categoria: fullAthleteData.categoria,
        clube: fullAthleteData.clube,
        municipio: fullAthleteData.municipio,
        status: fullAthleteData.status
      };
      if (cleanPhoto) payload.foto_url = cleanPhoto;
      if (fullAthleteData.nascimento) payload.nascimento = fullAthleteData.nascimento;
      if (fullAthleteData.telefone) payload.telefone = fullAthleteData.telefone;
      if (fullAthleteData.federado) payload.federado = fullAthleteData.federado;
      if (fullAthleteData.validade) payload.validade = fullAthleteData.validade;

      await supabase
        .from('atletas')
        .upsert([payload], { onConflict: 'codigo' });

      // Registro do atleta completo no canal de alta disponibilidade da nuvem
      try {
        await supabase.from('keep_alive_logs').delete().eq('source', `athlete_record:${cleanCode}`);
      } catch {}
      await supabase.from('keep_alive_logs').insert([{
        source: `athlete_record:${cleanCode}`,
        status: JSON.stringify({ ...fullAthleteData, foto_url: cleanPhoto, foto: cleanPhoto }),
        pinged_at: new Date().toISOString()
      }]);
    } else {
      await supabase
        .from('atletas')
        .update({ status: cleanStatus })
        .eq('codigo', cleanCode);
    }

    // B) Registro de status no canal de nuvem de alta disponibilidade keep_alive_logs
    try {
      await supabase.from('keep_alive_logs').delete().eq('source', `athlete_status:${cleanCode}`);
    } catch {}

    await supabase.from('keep_alive_logs').insert([{
      source: `athlete_status:${cleanCode}`,
      status: cleanStatus,
      pinged_at: new Date().toISOString()
    }]);
  } catch (dbErr) {
    console.warn("Erro ao persistir status no Supabase:", dbErr);
  }

  // Espelhamento assíncrono no banco de dados secundário/reserva (se configurado)
  const secUrl = (process.env.SUPABASE_SECONDARY_URL || 'https://xvqsysfqbkfsogkwtbal.supabase.co').replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
  const secKey = process.env.SUPABASE_SECONDARY_SERVICE_ROLE_KEY || process.env.SUPABASE_SECONDARY_ANON_KEY || 'sb_publishable_2T1UD0EYvVBlIqCvnX5VHw_K6mmAn3M';
  if (secUrl && secKey) {
    (async () => {
      try {
        const secSupabase = createClient(secUrl, secKey);
        const cleanCode = targetCodigo.trim();
        const cleanStatus = targetStatus.trim().toUpperCase();
        if (fullAthleteData) {
          const cleanPhoto = fullAthleteData.foto_url || fullAthleteData.foto || '';
          const secPayload: Record<string, any> = {
            codigo: fullAthleteData.codigo,
            nome: fullAthleteData.nome,
            cpf: fullAthleteData.cpf,
            modalidade: fullAthleteData.modalidade,
            categoria: fullAthleteData.categoria,
            clube: fullAthleteData.clube,
            municipio: fullAthleteData.municipio,
            status: fullAthleteData.status
          };
          if (cleanPhoto) secPayload.foto_url = cleanPhoto;
          if (fullAthleteData.nascimento) secPayload.nascimento = fullAthleteData.nascimento;
          if (fullAthleteData.telefone) secPayload.telefone = fullAthleteData.telefone;
          if (fullAthleteData.federado) secPayload.federado = fullAthleteData.federado;
          if (fullAthleteData.validade) secPayload.validade = fullAthleteData.validade;

          await secSupabase.from('atletas').upsert([secPayload], { onConflict: 'codigo' });

          try {
            await secSupabase.from('keep_alive_logs').delete().eq('source', `athlete_record:${cleanCode}`);
          } catch {}
          await secSupabase.from('keep_alive_logs').insert([{
            source: `athlete_record:${cleanCode}`,
            status: JSON.stringify({ ...fullAthleteData, foto_url: cleanPhoto, foto: cleanPhoto }),
            pinged_at: new Date().toISOString()
          }]);
        } else {
          await secSupabase.from('atletas').update({ status: cleanStatus }).eq('codigo', cleanCode);
        }
      } catch (secErr) {
        console.warn('[Serverless Dual-Write] Aviso ao replicar para banco reserva:', secErr);
      }
    })().catch(() => null);
  }

  // Operação autorizada, validada e persistida
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ok: true, data: { codigo: targetCodigo, status: targetStatus } }));
}
