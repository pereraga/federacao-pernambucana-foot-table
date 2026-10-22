import crypto from 'node:crypto';

// Segredo de assinatura de sessão - em produção deve vir de variável de ambiente segura
const SESSION_SECRET = process.env.SESSION_SECRET || process.env.AUTH_SECRET || 'fpeft_sec_sess_key_993b4f8d2e1a7c5b6e4d0a2f1c8e5d3b';
const SESSION_MAX_AGE = 8 * 60 * 60; // 8 horas em segundos

export interface SessionData {
  userId: string;
  email: string;
  role: 'admin' | 'operador' | 'leitor';
  iat: number;
  exp: number;
  nonce: string;
}

/**
 * Determina o nome do cookie blindado conforme as diretrizes OWASP:
 * __Host- exige HTTPS, Path=/ e sem subdomínio permissivo.
 */
export function getCookieName(isHttps: boolean = true): string {
  if (process.env.NODE_ENV === 'production' || isHttps) {
    return '__Host-fed_sess';
  }
  return '__Secure-fed_sess';
}

/**
 * Assina um payload com HMAC-SHA256 e codifica em base64url
 */
export function signSessionPayload(data: SessionData): string {
  const jsonStr = JSON.stringify(data);
  const payloadBase64 = Buffer.from(jsonStr, 'utf-8').toString('base64url');
  const hmac = crypto.createHmac('sha256', SESSION_SECRET);
  hmac.update(payloadBase64);
  const signature = hmac.digest('base64url');
  return `${payloadBase64}.${signature}`;
}

/**
 * Valida a integridade e expiração de um token de sessão com tempo constante
 */
export function verifySessionToken(token: string): SessionData | null {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 2) return null;

  const [payloadBase64, signature] = parts;
  if (!payloadBase64 || !signature) return null;

  try {
    const expectedHmac = crypto.createHmac('sha256', SESSION_SECRET);
    expectedHmac.update(payloadBase64);
    const expectedSignature = expectedHmac.digest('base64url');

    const sigBuf = Buffer.from(signature, 'utf-8');
    const expBuf = Buffer.from(expectedSignature, 'utf-8');

    if (sigBuf.length !== expBuf.length) return null;
    if (!crypto.timingSafeEqual(sigBuf, expBuf)) return null;

    const jsonStr = Buffer.from(payloadBase64, 'base64url').toString('utf-8');
    const data: SessionData = JSON.parse(jsonStr);

    const now = Math.floor(Date.now() / 1000);
    if (data.exp <= now) {
      return null; // Sessão expirada
    }

    return data;
  } catch {
    return null;
  }
}

/**
 * Cria o cabeçalho Set-Cookie formatado com flags restritas HttpOnly, Secure e SameSite
 */
export function createSessionCookie(
  user: { id: string; email: string; role?: 'admin' | 'operador' | 'leitor' },
  isHttps: boolean = true
): { cookieHeader: string; token: string; cookieName: string } {
  const now = Math.floor(Date.now() / 1000);
  const sessionData: SessionData = {
    userId: user.id,
    email: user.email,
    role: user.role || 'admin',
    iat: now,
    exp: now + SESSION_MAX_AGE,
    nonce: crypto.randomBytes(16).toString('hex')
  };

  const token = signSessionPayload(sessionData);
  const cookieName = getCookieName(isHttps);

  const parts = [
    `${cookieName}=${token}`,
    'Path=/',
    'HttpOnly',
    'SameSite=Strict',
    `Max-Age=${SESSION_MAX_AGE}`
  ];

  if (isHttps || process.env.NODE_ENV === 'production') {
    parts.push('Secure');
  }

  return {
    cookieHeader: parts.join('; '),
    token,
    cookieName
  };
}

/**
 * Cria o cabeçalho Set-Cookie para destruição imediata de sessão
 */
export function createLogoutCookie(isHttps: boolean = true): string {
  const cookieName = getCookieName(isHttps);
  const parts = [
    `${cookieName}=`,
    'Path=/',
    'HttpOnly',
    'SameSite=Strict',
    'Max-Age=0',
    'Expires=Thu, 01 Jan 1970 00:00:00 GMT'
  ];

  if (isHttps || process.env.NODE_ENV === 'production') {
    parts.push('Secure');
  }

  return parts.join('; ');
}

/**
 * Extrai e valida a sessão a partir do cabeçalho Cookie de uma requisição
 */
export function getSessionFromCookieHeader(cookieHeader?: string | null): SessionData | null {
  if (!cookieHeader) return null;

  // Busca __Host-fed_sess, __Secure-fed_sess ou fed_sess
  const match = cookieHeader.match(/(?:__Host-fed_sess|__Secure-fed_sess|fed_sess)=([^;]+)/);
  if (!match || !match[1]) return null;

  return verifySessionToken(match[1].trim());
}
