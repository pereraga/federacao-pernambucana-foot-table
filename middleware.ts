import { getSessionFromCookieHeader } from './api/lib/session.js';

// ==============================================================================
// CONTROLE DE DISPONIBILIDADE DO PORTAL (MANUTENÇÃO vs ONLINE)
// - true:  Derruba o site em produção temporariamente (exibe tela oficial 503).
//          O ambiente local (localhost / 127.0.0.1) continua 100% liberado!
// - false: Portal ativo e online para todo o público.
// ==============================================================================
export const MAINTENANCE_MODE = true;

// Rotas restritas que exigem sessão administrativa válida
const RESTRICTED_ROUTES = ['/admin', '/admin.html', '/painel', '/api/gestao'];

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
};

const MAINTENANCE_HTML = `<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Portal Temporariamente Indisponível | FPEFT</title>
  <link rel="icon" type="image/png" href="/assets/images/logo-federacao.png">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Oswald:wght@500;700&display=swap" rel="stylesheet">
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body {
      background: radial-gradient(circle at 50% 20%, #0d1629 0%, #05080e 100%);
      color: #cbd5e1;
      font-family: 'Montserrat', sans-serif;
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 24px;
    }
    .card {
      background: #080d1a;
      border: 1px solid #1c273e;
      border-radius: 24px;
      max-width: 520px;
      width: 100%;
      padding: 40px 32px;
      text-align: center;
      box-shadow: 0 25px 60px rgba(0,0,0,0.85);
      position: relative;
      overflow: hidden;
    }
    .stripe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: linear-gradient(90deg, #0044cc 0%, #0044cc 40%, #f5b800 40%, #f5b800 70%, #d32f2f 70%, #d32f2f 100%);
    }
    .logo-container {
      width: 88px;
      height: 88px;
      margin: 0 auto 20px auto;
      border-radius: 50%;
      background: #06173a;
      border: 2px solid #f5b800;
      box-shadow: 0 0 25px rgba(245,184,0,0.3);
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .logo-container img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: 50%;
      pointer-events: none;
      user-select: none;
    }
    .badge {
      display: inline-block;
      font-family: 'Oswald', sans-serif;
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #f5b800;
      background: rgba(245,184,0,0.1);
      border: 1px solid rgba(245,184,0,0.3);
      padding: 4px 14px;
      border-radius: 9999px;
      margin-bottom: 16px;
    }
    h1 {
      font-family: 'Oswald', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: #ffffff;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-bottom: 12px;
      line-height: 1.2;
    }
    p {
      font-size: 13px;
      line-height: 1.6;
      color: #94a3b8;
      margin-bottom: 24px;
    }
    .info-box {
      background: #0b1222;
      border: 1px solid #162035;
      border-radius: 14px;
      padding: 16px;
      font-size: 12px;
      color: #64748b;
      margin-bottom: 20px;
      line-height: 1.5;
    }
    .footer-text {
      font-size: 11px;
      color: #475569;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: 600;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="stripe"></div>
    <div class="logo-container">
      <img src="/assets/images/logo-federacao.png" alt="Federação Pernambucana de Foot Table">
    </div>
    <span class="badge">Aviso Institucional</span>
    <h1>Portal Temporariamente Indisponível</h1>
    <p>A Federação Pernambucana de Foot Table informa que nossos serviços e portais digitais encontram-se temporariamente suspensos para manutenção técnica programada e evolução dos sistemas.</p>
    <div class="info-box">
      As operações normais e consultas públicas retornarão em breve.<br>
      Agradecemos a compreensão de todos os atletas e filiados.
    </div>
    <div class="footer-text">
      Federação Pernambucana de Foot Table • FPEFT
    </div>
  </div>
</body>
</html>`;

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname.toLowerCase();
  const hostname = url.hostname.toLowerCase();
  const isLocalhost = hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '::1';
  const isTest = process.env.TEST_SUITE === 'true';

  // Cabeçalhos de Segurança Estritos (Defense-in-Depth)
  const securityHeaders = new Headers();
  securityHeaders.set('X-Content-Type-Options', 'nosniff');
  securityHeaders.set('X-Frame-Options', 'DENY');
  securityHeaders.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  securityHeaders.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload');
  securityHeaders.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()');
  securityHeaders.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://cdn.tailwindcss.com https://cdnjs.cloudflare.com https://cdn.jsdelivr.net; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://cdnjs.cloudflare.com; font-src 'self' data: https://fonts.gstatic.com https://cdnjs.cloudflare.com; img-src 'self' data: blob: https:; connect-src 'self' https://*.supabase.co wss://*.supabase.co https://*.vercel.app; frame-ancestors 'none';"
  );

  // Ocultação obrigatória: nunca expor cabeçalhos de identificação de tecnologia
  securityHeaders.delete('X-Powered-By');
  securityHeaders.delete('x-powered-by');
  securityHeaders.delete('Server');

  // Liberação imediata e total para desenvolvimento local (localhost)
  if (isLocalhost) {
    securityHeaders.set('x-middleware-next', '1');
    return new Response(null, {
      status: 200,
      headers: securityHeaders,
    });
  }

  // Libera ativos estáticos (imagens, estilos, scripts) mesmo em manutenção
  if (pathname.startsWith('/assets/')) {
    securityHeaders.set('x-middleware-next', '1');
    return new Response(null, {
      status: 200,
      headers: securityHeaders,
    });
  }

  // 1. MODO DE MANUTENÇÃO ATIVO:
  // Se estiver ativado e NÃO for localhost (nem ambiente de teste),
  // bloqueia o acesso externo com a página institucional 503
  if (MAINTENANCE_MODE && !isLocalhost && !isTest) {
    securityHeaders.set('Content-Type', 'text/html; charset=utf-8');
    securityHeaders.set('Retry-After', '3600');
    return new Response(MAINTENANCE_HTML, {
      status: 503,
      headers: securityHeaders,
    });
  }

  // 2. Verificação de rotas restritas (/admin, /painel, /api/gestao)
  const isRestricted = RESTRICTED_ROUTES.some((route) => pathname === route || pathname.startsWith(route + '/'));

  if (isRestricted) {
    try {
      const cookieHeader = request.headers.get('cookie');
      const session = getSessionFromCookieHeader(cookieHeader);

      // Se não autenticado ou sem perfil de administrador
      if (!session || session.role !== 'admin') {
        // Bloqueio genérico silencioso para APIs (401 Não autorizado)
        if (pathname.startsWith('/api/')) {
          securityHeaders.set('Content-Type', 'application/json');
          return new Response(JSON.stringify({ error: 'Não autorizado' }), {
            status: 401,
            headers: securityHeaders,
          });
        }

        // Redirecionamento seguro para tela de login em rotas de páginas
        const loginUrl = new URL('/login.html', request.url);
        return Response.redirect(loginUrl, 307);
      }
    } catch {
      // Em caso de falha de parsing no Edge Runtime, redireciona para login com segurança
      const loginUrl = new URL('/login.html', request.url);
      return Response.redirect(loginUrl, 307);
    }
  }

  // 3. Libera a requisição com o cabeçalho de continuação Edge
  securityHeaders.set('x-middleware-next', '1');
  return new Response(null, {
    status: 200,
    headers: securityHeaders,
  });
}
