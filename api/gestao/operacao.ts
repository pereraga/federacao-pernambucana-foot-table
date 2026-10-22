import type { IncomingMessage, ServerResponse } from 'node:http';
import { getSessionFromCookieHeader } from '../lib/session.js';
import { safeValidate, GestaoAtletaSchema } from '../lib/validation.js';

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

  // 3. Validação estrita de schema com Zod (bloqueia injeção e Mass Assignment)
  const validation = safeValidate(GestaoAtletaSchema, parsedJson);
  if (!validation.success) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: validation.error }));
    return;
  }

  // Operação autorizada e validada
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ok: true, data: { codigo: validation.data.codigo, status: validation.data.status } }));
}
