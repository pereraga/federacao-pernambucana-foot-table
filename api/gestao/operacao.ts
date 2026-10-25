import type { IncomingMessage, ServerResponse } from 'node:http';
import { createClient } from '@supabase/supabase-js';
import { getSessionFromCookieHeader } from '../lib/session.js';
import { safeValidate, GestaoAtletaSchema, StatusAtletaSchema } from '../lib/validation.js';

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

  // 3. Validação estrita de schema com Zod (suporta GestaoAtletaSchema completo ou StatusAtletaSchema isolado)
  let targetCodigo = '';
  let targetStatus = '';

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

    // A) Atualização direta na tabela atletas
    await supabase
      .from('atletas')
      .update({ status: cleanStatus })
      .eq('codigo', cleanCode);

    // B) Registro no canal de nuvem de alta disponibilidade keep_alive_logs
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

  // Operação autorizada, validada e persistida
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ok: true, data: { codigo: targetCodigo, status: targetStatus } }));
}
