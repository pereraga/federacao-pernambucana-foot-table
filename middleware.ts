import { getSessionFromCookieHeader } from './api/lib/session.js';

// Rotas restritas que exigem sessão administrativa válida
const RESTRICTED_ROUTES = ['/admin', '/admin.html', '/painel', '/api/gestao'];

export const config = {
  matcher: ['/admin', '/admin.html', '/painel', '/api/gestao', '/api/gestao/:path*'],
};

export default function middleware(request: Request) {
  const url = new URL(request.url);
  const pathname = url.pathname.toLowerCase();

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

  // 1. Verificação de rotas restritas (/admin, /painel, /api/gestao)
  const isRestricted = RESTRICTED_ROUTES.some((route) => pathname === route || pathname.startsWith(route + '/'));

  if (isRestricted) {
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
  }

  // 2. Libera a requisição com o cabeçalho de continuação Edge
  securityHeaders.set('x-middleware-next', '1');
  return new Response(null, {
    status: 200,
    headers: securityHeaders,
  });
}
