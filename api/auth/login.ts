import type { IncomingMessage, ServerResponse } from 'node:http';
import { createClient } from '@supabase/supabase-js';
import { safeValidate, LoginSchema } from '../lib/validation.js';
import { createSessionCookie } from '../lib/session.js';
import { checkRateLimit, getClientIp } from '../lib/rate-limiter.js';

interface ExtendedRequest extends IncomingMessage {
  body?: any;
}

// Contas e credenciais institucionais aceitas no servidor
const INSTITUTIONAL_ACCOUNTS: Record<string, string[]> = {
  'gabrielacessor@foot-table.pe.org': ['admin', 'PeFootTable2026!@#', '123456'],
  'gabrielacessor@foot-table.pe.gov.br': ['admin', 'PeFootTable2026!@#', '123456'],
  'gabrielacessor': ['admin', 'PeFootTable2026!@#', '123456'],
  'adrianomelo@foot-table.pe.org': ['admin', 'PeFootTable2026!@#', '123456'],
  'adrianomelofpeft@foot-table.pe.org': ['admin', 'PeFootTable2026!@#', '123456'],
  'adrianomelo': ['admin', 'PeFootTable2026!@#', '123456'],
  'admin': ['admin', 'PeFootTable2026!@#', process.env.ADMIN_PASSWORD || 'PeFootTable2026!@#'],
  'admin@foot-table.pe.org': ['admin', 'PeFootTable2026!@#', process.env.ADMIN_PASSWORD || 'PeFootTable2026!@#'],
};

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

  // 1. Rate Limiting flexível (20 tentativas a cada 10 min por IP)
  const clientIp = getClientIp(req as any);
  const rateLimit = checkRateLimit(`login:${clientIp}`, {
    windowMs: 10 * 60 * 1000,
    maxRequests: 20
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

  // 3. Validação estrita de esquema com Zod
  const validation = safeValidate(LoginSchema, parsedJson);
  if (!validation.success) {
    res.statusCode = 400;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: validation.error }));
    return;
  }

  const { user, password } = validation.data;
  const userLower = user.toLowerCase().trim();
  const normUser = userLower.includes('@') ? userLower : `${userLower}@foot-table.pe.org`;

  let isAuthenticated = false;
  let effectiveEmail = normUser;
  let adminId = 'admin_sys_root';

  // 4. Verificação em contas institucionais padrão
  const allowedPasswords = INSTITUTIONAL_ACCOUNTS[userLower] || INSTITUTIONAL_ACCOUNTS[normUser];
  if (allowedPasswords && allowedPasswords.includes(password)) {
    isAuthenticated = true;
    effectiveEmail = normUser;
  }

  // Se senha mestre de ambiente estiver definida
  if (!isAuthenticated && process.env.ADMIN_PASSWORD && password === process.env.ADMIN_PASSWORD) {
    if (userLower === 'admin' || userLower === (process.env.ADMIN_USER || 'admin').toLowerCase()) {
      isAuthenticated = true;
      effectiveEmail = `${userLower}@foot-table.pe.org`;
    }
  }

  // 5. Fallback via Supabase RPC / admin_users
  if (!isAuthenticated) {
    try {
      const supabaseUrl = process.env.SUPABASE_URL || 'https://qvnsahvdjhimlmtqrnif.supabase.co';
      const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || 'sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z';
      const supabase = createClient(supabaseUrl, supabaseKey);

      const { data, error } = await supabase.rpc('autenticar_gestor_institucional', {
        p_email: normUser,
        p_senha_plana: password
      });

      if (!error && data && data.success) {
        isAuthenticated = true;
        effectiveEmail = data.user?.email || normUser;
        adminId = data.user?.id || 'admin_db_user';
      }
    } catch {
      // Ignora erro de rede e mantém resultado
    }
  }

  if (!isAuthenticated) {
    res.statusCode = 401;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Credenciais inválidas' }));
    return;
  }

  // 6. Emissão de cookie blindado HttpOnly, Secure e SameSite=Strict
  const isHttps = req.headers['x-forwarded-proto'] === 'https' || process.env.NODE_ENV === 'production';
  const session = createSessionCookie(
    { id: adminId, email: effectiveEmail, role: 'admin' },
    isHttps
  );

  res.statusCode = 200;
  res.setHeader('Set-Cookie', session.cookieHeader);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ok: true, role: 'admin', user: effectiveEmail }));
}
