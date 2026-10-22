import type { IncomingMessage, ServerResponse } from 'node:http';
import { createLogoutCookie } from '../lib/session.js';

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  res.removeHeader('X-Powered-By');
  res.setHeader('X-Content-Type-Options', 'nosniff');

  const isHttps = req.headers['x-forwarded-proto'] === 'https' || process.env.NODE_ENV === 'production';
  const logoutCookie = createLogoutCookie(isHttps);

  res.statusCode = 200;
  res.setHeader('Set-Cookie', logoutCookie);
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({ ok: true }));
}
