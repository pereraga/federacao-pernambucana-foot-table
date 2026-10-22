import type { IncomingMessage, ServerResponse } from 'node:http';
import { safeValidate, AtletaBuscaSchema } from '../lib/validation.js';
import { checkRateLimit, getClientIp } from '../lib/rate-limiter.js';

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

  // Resposta simulada higienizada com mascaramento obrigatório de CPF
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify({
    ok: true,
    atleta: {
      codigo: validation.data.codigo,
      cpf_mascarado: '***.XXX.XXX-**',
      status: 'HOMOLOGADO'
    }
  }));
}
