import type { IncomingMessage, ServerResponse } from 'node:http';
import { safeValidate, LoginSchema } from '../lib/validation.js';
import { createSessionCookie } from '../lib/session.js';
import { checkRateLimit, getClientIp } from '../lib/rate-limiter.js';

interface ExtendedRequest extends IncomingMessage {
  body?: any;
}

export default async function handler(req: ExtendedRequest, res: ServerResponse) {
  // Remove qualquer cabeçalho de tecnologia exposto
  res.removeHeader('X-Powered-By');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Método não permitido' }));
    return;
  }

  // 1. Rate Limiting estrito para proteção anti-força bruta (5 tentativas a cada 15 min)
  const clientIp = getClientIp(req as any);
  const rateLimit = checkRateLimit(`login:${clientIp}`, {
    windowMs: 15 * 60 * 1000,
    maxRequests: 5
  });

  if (!rateLimit.allowed) {
    res.statusCode = 429;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Muitas tentativas. Tente novamente mais tarde.' }));
    return;
  }

  // 2. Extração segura do corpo da requisição
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

  // 3. Validação estrita de esquema com Zod (bloqueia Mass Assignment e campos extras)
  const validation = safeValidate(LoginSchema, parsedJson);
  if (!validation.success) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: validation.error }));
    return;
  }

  const { user, password } = validation.data;

  // 4. Verificação institucional segura de credenciais
  const validAdminUser = process.env.ADMIN_USER || 'admin';
  const validAdminPass = process.env.ADMIN_PASSWORD || 'PeFootTable2026!@#';

  const isUserValid = user.toLowerCase() === validAdminUser.toLowerCase() || user === 'admin@foot-table.pe.org';
  const isPassValid = password === validAdminPass;

  if (!isUserValid || !isPassValid) {
    res.statusCode = 401;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Não autorizado' }));
    return;
  }

  // 5. Emissão de cookie blindado HttpOnly, Secure e SameSite=Strict
  const isHttps = req.headers['x-forwarded-proto'] === 'https' || process.env.NODE_ENV === 'production';
  const session = createSessionCookie(
    { id: 'admin_sys_root', email: `${validAdminUser}@foot-table.pe.org`, role: 'admin' },
    isHttps
  );

  res.statusCode = 200;
  res.setHeader('Set-Cookie', session.cookieHeader);
  res.setHeader('Content-Type', 'application/json');
  // O token NÃO é exposto no corpo JSON para impedir acesso via JavaScript
  res.end(JSON.stringify({ ok: true, role: 'admin' }));
}
