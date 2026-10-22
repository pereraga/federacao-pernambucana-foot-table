import type { IncomingMessage, ServerResponse } from 'node:http';
import { getSessionFromCookieHeader } from '../lib/session.js';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.removeHeader('X-Powered-By');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  const cookieHeader = req.headers.cookie;
  const session = getSessionFromCookieHeader(cookieHeader);

  if (!session) {
    res.statusCode = 401;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({ error: 'Não autorizado' }));
    return;
  }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ok: true, role: session.role }));
}
