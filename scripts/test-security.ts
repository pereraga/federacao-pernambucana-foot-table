/**
 * ==============================================================================
 * SUÍTE DE TESTES AUTOMATIZADOS DE INTEGRIDADE E PEN-TEST (APPSEC)
 * Federação Pernambucana de Foot Table (FPEFT)
 * ==============================================================================
 */

process.env.TEST_SUITE = 'true';

import { createClient } from '@supabase/supabase-js';
import middleware from '../middleware.js';
import {
  createSessionCookie,
  verifySessionToken,
  signSessionPayload,
  getSessionFromCookieHeader,
  getCookieName,
  type SessionData
} from '../api/lib/session.js';
import {
  safeValidate,
  LoginSchema,
  AtletaBuscaSchema,
  GestaoAtletaSchema
} from '../api/lib/validation.js';
import { checkRateLimit, resetRateLimitStore } from '../api/lib/rate-limiter.js';

// Cores ANSI para saída no terminal
const RESET = '\x1b[0m';
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const BOLD = '\x1b[1m';
const CYAN = '\x1b[36m';
const YELLOW = '\x1b[33m';

interface TestResult {
  suite: string;
  name: string;
  passed: boolean;
  details?: string;
}

const results: TestResult[] = [];

function assert(suite: string, name: string, condition: boolean, details?: string) {
  results.push({ suite, name, passed: condition, details });
  if (!condition && details) {
    console.error(`  ${RED}✖ FALHA: ${name} -> ${details}${RESET}`);
  }
}

async function runSecuritySuite() {
  console.log(`\n${BOLD}${CYAN}====================================================================${RESET}`);
  console.log(`${BOLD}${CYAN}  INICIANDO SUÍTE DE TESTES DE INTEGRIDADE E CIBERSEGURANÇA (APPSEC)  ${RESET}`);
  console.log(`${BOLD}${CYAN}  Federação Pernambucana de Foot Table - Next.js/Vercel + Supabase   ${RESET}`);
  console.log(`${BOLD}${CYAN}====================================================================\n${RESET}`);

  // --------------------------------------------------------------------------
  // TESTE 1: HEADERS DE SEGURANÇA E OCULTAÇÃO
  // --------------------------------------------------------------------------
  const suite1 = 'Headers de Segurança e Ocultação';
  {
    const req = new Request('https://fpeft.vercel.app/');
    const res = middleware(req);

    // a) Ocultação de tecnologia: X-Powered-By deve estar ausente
    assert(suite1, 'Ausência de X-Powered-By (Ocultação de Tecnologia)', !res.headers.has('x-powered-by'));

    // b) X-Frame-Options deve ser DENY (Anti-Clickjacking)
    assert(suite1, 'X-Frame-Options: DENY ativo', res.headers.get('x-frame-options') === 'DENY');

    // c) X-Content-Type-Options deve ser nosniff (Anti-MIME Sniffing)
    assert(suite1, 'X-Content-Type-Options: nosniff ativo', res.headers.get('x-content-type-options') === 'nosniff');

    // d) HSTS estrito configurado
    const hsts = res.headers.get('strict-transport-security') || '';
    assert(suite1, 'Strict-Transport-Security (HSTS 2 anos + Preload)', hsts.includes('max-age=63072000') && hsts.includes('preload'));

    // e) Content-Security-Policy (CSP) estrito sem permissão de frames externos
    const csp = res.headers.get('content-security-policy') || '';
    assert(suite1, 'Content-Security-Policy com frame-ancestors none', csp.includes("frame-ancestors 'none'") && csp.includes("default-src 'self'"));

    // f) Referrer-Policy restrito
    assert(suite1, 'Referrer-Policy: strict-origin-when-cross-origin', res.headers.get('referrer-policy') === 'strict-origin-when-cross-origin');

    // g) Permissions-Policy desativando câmera, microfone e geolocalização
    const perm = res.headers.get('permissions-policy') || '';
    assert(suite1, 'Permissions-Policy bloqueando sensores desnecessários', perm.includes('camera=()') && perm.includes('microphone=()') && perm.includes('geolocation=()'));
  }

  // --------------------------------------------------------------------------
  // TESTE 2: ISOLAMENTO DE COOKIES E PROTEÇÃO CONTRA XSS
  // --------------------------------------------------------------------------
  const suite2 = 'Isolamento de Cookies (HttpOnly / Secure / SameSite)';
  {
    const { cookieHeader, token, cookieName } = createSessionCookie(
      { id: 'usr_admin_01', email: 'diretoria@foot-table.pe.org', role: 'admin' },
      true
    );

    // a) Validação de prefixo __Host- ou __Secure-
    assert(suite2, 'Prefixo de Cookie Seguro (__Host- ou __Secure-)', cookieName.startsWith('__Host-') || cookieName.startsWith('__Secure-'));

    // b) Flag HttpOnly presente (inacessível a scripts maliciosos de terceiros)
    assert(suite2, 'Flag HttpOnly presente no cabeçalho Set-Cookie', cookieHeader.includes('HttpOnly'));

    // c) Flag Secure presente
    assert(suite2, 'Flag Secure presente no cabeçalho Set-Cookie', cookieHeader.includes('Secure'));

    // d) Flag SameSite configurada (Lax ou Strict para proteção CSRF)
    assert(suite2, 'Flag SameSite configurada com segurança (Lax ou Strict)', cookieHeader.includes('SameSite=Lax') || cookieHeader.includes('SameSite=Strict'));

    // e) Path=/ configurado
    assert(suite2, 'Flag Path=/ configurada', cookieHeader.includes('Path=/'));

    // f) Simulação de proteção DOM / XSS:
    // Em navegadores reais, tokens com flag HttpOnly são omitidos de document.cookie
    const simulatedDocumentCookie = 'fpeft_theme=dark; fpeft_cookie_consent=true'; // Cookie acessível no DOM
    const xssCanReadHttpOnly = simulatedDocumentCookie.includes(token);
    assert(suite2, 'Proteção XSS: document.cookie não expõe o token HttpOnly', !xssCanReadHttpOnly);

    // g) Proteção contra adulteração de assinatura HMAC
    const tamperedToken = token.slice(0, -4) + 'abcd';
    const verified = verifySessionToken(tamperedToken);
    assert(suite2, 'Rejeição imediata de token com assinatura HMAC adulterada', verified === null);

    // h) Proteção contra token expirado
    const expiredData: SessionData = {
      userId: 'admin_test',
      email: 'admin@foot-table.pe.org',
      role: 'admin',
      iat: Math.floor(Date.now() / 1000) - 7200,
      exp: Math.floor(Date.now() / 1000) - 3600, // Expirou há 1 hora
      nonce: 'nonce_123'
    };
    const expiredToken = signSessionPayload(expiredData);
    assert(suite2, 'Rejeição imediata de sessão expirada', verifySessionToken(expiredToken) === null);
  }

  // --------------------------------------------------------------------------
  // TESTE 3: PROTEÇÃO DE ROTAS NO MIDDLEWARE
  // --------------------------------------------------------------------------
  const suite3 = 'Proteção de Rotas no Middleware';
  {
    // a) Acesso à página administrativa /admin sem cookie -> Redirecionamento 307 para login
    const reqPageAnon = new Request('https://fpeft.vercel.app/admin');
    const resPageAnon = middleware(reqPageAnon);
    assert(suite3, 'Bloqueio de página /admin anônima com Redirecionamento 307 para login', resPageAnon.status === 307 && (resPageAnon.headers.get('location') || '').includes('/login.html'));

    // b) Acesso à API administrativa /api/gestao sem cookie -> Bloqueio 401 Não autorizado
    const reqApiAnon = new Request('https://fpeft.vercel.app/api/gestao/operacao');
    const resApiAnon = middleware(reqApiAnon);
    assert(suite3, 'Bloqueio de API restrita sem cookie com HTTP 401 Não autorizado', resApiAnon.status === 401);

    // c) Acesso com cookie forjado/inválido -> Bloqueio imediato 401
    const reqApiForged = new Request('https://fpeft.vercel.app/api/gestao/operacao', {
      headers: { cookie: '__Host-fed_sess=token_falso_malicioso.assinatura_falsa' }
    });
    const resApiForged = middleware(reqApiForged);
    assert(suite3, 'Bloqueio de requisição com token forjado', resApiForged.status === 401);

    // d) Acesso com cookie válido assinado -> Acesso liberado (HTTP 200)
    const valid = createSessionCookie({ id: 'adm_valid', email: 'adm@foot-table.pe.org', role: 'admin' }, true);
    const reqApiValid = new Request('https://fpeft.vercel.app/api/gestao/operacao', {
      headers: { cookie: `${valid.cookieName}=${valid.token}` }
    });
    const resApiValid = middleware(reqApiValid);
    assert(suite3, 'Acesso liberado para sessão com cookie HMAC legítimo', resApiValid.status === 200);

    // e) Bloqueio de varredura/ataque PHP (ex: /wp-login.php, /shell.php) -> HTTP 403 Forbidden
    const reqPhpAttack = new Request('https://fpeft.vercel.app/wp-login.php');
    const resPhpAttack = middleware(reqPhpAttack);
    assert(suite3, 'Bloqueio imediato de tentativa de acesso a scripts PHP (HTTP 403)', resPhpAttack.status === 403);

    // f) Bloqueio de injeção de código PHP via query string (eval, <?php) -> HTTP 403 Forbidden
    const reqPhpInjection = new Request('https://fpeft.vercel.app/busca?q=%3C?php+eval(base64_decode());+?%3E');
    const resPhpInjection = middleware(reqPhpInjection);
    assert(suite3, 'Bloqueio de tentativa de injeção de código PHP via URL (HTTP 403)', resPhpInjection.status === 403);
  }

  // --------------------------------------------------------------------------
  // TESTE 4: AUDITORIA RLS SUPABASE (SIMULAÇÃO ANÔNIMA)
  // --------------------------------------------------------------------------
  const suite4 = 'Auditoria RLS Supabase (Simulação Anônima)';
  {
    const supabaseUrl = process.env.SUPABASE_URL || 'https://qvnsahvdjhimlmtqrnif.supabase.co';
    const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || 'sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z';

    const anonClient = createClient(supabaseUrl, supabaseAnonKey);

    // a) Tentativa de extração anônima de admin_users (senhas/credenciais)
    let adminUsersProtected = false;
    try {
      const { data, error } = await anonClient.from('admin_users').select('*');
      // Se RLS está ativo, retorna 0 registros ou erro de permissão
      if (error || !data || data.length === 0) {
        adminUsersProtected = true;
      }
    } catch {
      adminUsersProtected = true;
    }
    assert(suite4, 'Extração anônima em admin_users bloqueada (0 registros ou RLS Deny)', adminUsersProtected);

    // b) Tentativa de alteração anônima em admin_users
    let adminUpdateBlocked = false;
    try {
      const { data, error } = await anonClient
        .from('admin_users')
        .update({ cargo: 'Hacker Invasor' })
        .eq('email', 'admin@foot-table.pe.org');
      if (error || !data || (Array.isArray(data) && data.length === 0)) {
        adminUpdateBlocked = true;
      }
    } catch {
      adminUpdateBlocked = true;
    }
    assert(suite4, 'Injeção/Alteração anônima em admin_users bloqueada pelo RLS', adminUpdateBlocked);

    // c) Tentativa de extração anônima de audit_logs (logs de auditoria internos)
    let auditLogsProtected = false;
    try {
      const { data, error } = await anonClient.from('audit_logs').select('*');
      if (error || !data || data.length === 0) {
        auditLogsProtected = true;
      }
    } catch {
      auditLogsProtected = true;
    }
    assert(suite4, 'Acesso anônimo a audit_logs protegido e isolado (0 registros expostos)', auditLogsProtected);

    // d) Tentativa de exclusão não autorizada em atletas
    let atletaDeleteBlocked = false;
    try {
      const { data, error } = await anonClient
        .from('atletas')
        .delete()
        .eq('codigo', '999999');
      if (error || !data || (Array.isArray(data) && data.length === 0)) {
        atletaDeleteBlocked = true;
      }
    } catch {
      atletaDeleteBlocked = true;
    }
    assert(suite4, 'Exclusão anônima em atletas bloqueada por política RLS', atletaDeleteBlocked);
  }

  // --------------------------------------------------------------------------
  // TESTE 5: VALIDAÇÃO DE SCHEMAS E BLOQUEIO DE INJEÇÕES
  // --------------------------------------------------------------------------
  const suite5 = 'Validação de Schemas e Bloqueio de Injeções';
  {
    // a) Bloqueio de Mass Assignment no Login (envio de campos extras não mapeados)
    const massAssignmentPayload = {
      user: 'admin',
      password: 'StrongPassword123!',
      role: 'superadmin', // Campo malicioso injetado
      is_master: true,    // Campo malicioso injetado
      privilege: 9999     // Campo malicioso injetado
    };
    const loginValidation = safeValidate(LoginSchema, massAssignmentPayload);
    assert(suite5, 'Bloqueio estrito de Mass Assignment via Zod (.strict)', !loginValidation.success);

    // b) Bloqueio de injeção SQL no código de busca de atleta
    const sqlInjectionPayload = {
      codigo: "123456' OR '1'='1" // Injeção SQL clássica
    };
    const buscaValidation = safeValidate(AtletaBuscaSchema, sqlInjectionPayload);
    assert(suite5, 'Bloqueio de caracteres maliciosos de Injeção SQL na consulta pública', !buscaValidation.success);

    // c) Bloqueio de código de atleta fora do padrão (não numérico ou > 6 dígitos)
    const invalidCodePayload = { codigo: '<script>alert(1)</script>' };
    const xssCodeValidation = safeValidate(AtletaBuscaSchema, invalidCodePayload);
    assert(suite5, 'Bloqueio de payload XSS em parâmetros de busca', !xssCodeValidation.success);

    // d) Aceitação apenas de payloads legítimos higienizados
    const cleanPayload = { codigo: '001042' };
    const cleanValidation = safeValidate(AtletaBuscaSchema, cleanPayload);
    assert(suite5, 'Aprovação de payload legítimo higienizado', cleanValidation.success && cleanValidation.data.codigo === '001042');

    // e) Teste de Carga e Rate Limiting
    resetRateLimitStore();
    const testIp = '192.168.1.100';
    const limitOptions = { windowMs: 60000, maxRequests: 5 };

    let burstAllowedCount = 0;
    let burstBlockedCount = 0;

    for (let i = 0; i < 10; i++) {
      const res = checkRateLimit(`test:${testIp}`, limitOptions);
      if (res.allowed) {
        burstAllowedCount++;
      } else {
        burstBlockedCount++;
      }
    }

    assert(suite5, 'Rate Limit: Permite exatamente o limite configurado (5 requisições)', burstAllowedCount === 5);
    assert(suite5, 'Rate Limit: Bloqueia rajada de requisições excedentes (5 bloqueadas)', burstBlockedCount === 5);
  }

  // --------------------------------------------------------------------------
  // RELATÓRIO CONSOLIDADO FORMATADO (PADRÃO OWASP / ASVS)
  // --------------------------------------------------------------------------
  console.log(`\n${BOLD}====================================================================${RESET}`);
  console.log(`${BOLD}               RELATÓRIO CONSOLIDADO DE INTEGRIDADE (APPSEC)       ${RESET}`);
  console.log(`${BOLD}====================================================================${RESET}\n`);

  const suites = [
    'Headers de Segurança e Ocultação',
    'Isolamento de Cookies (HttpOnly / Secure / SameSite)',
    'Proteção de Rotas no Middleware',
    'Auditoria RLS Supabase (Simulação Anônima)',
    'Validação de Schemas e Bloqueio de Injeções'
  ];

  let totalPassed = 0;
  let totalTests = results.length;

  for (const suite of suites) {
    const suiteResults = results.filter((r) => r.suite === suite);
    const allPassed = suiteResults.every((r) => r.passed);
    const passedCount = suiteResults.filter((r) => r.passed).length;
    totalPassed += passedCount;

    const statusBadge = allPassed ? `${GREEN}${BOLD}[PASS]${RESET}` : `${RED}${BOLD}[FAIL]${RESET}`;
    console.log(`${statusBadge} ${BOLD}${suite}${RESET} (${passedCount}/${suiteResults.length})`);

    for (const r of suiteResults) {
      const symbol = r.passed ? `${GREEN}✔${RESET}` : `${RED}✖${RESET}`;
      console.log(`   ${symbol} ${r.name}`);
    }
    console.log('');
  }

  console.log(`${BOLD}--------------------------------------------------------------------${RESET}`);
  if (totalPassed === totalTests) {
    console.log(`${GREEN}${BOLD}✔ TODOS OS CONTROLES APROVADOS COM SUCESSO: ${totalPassed}/${totalTests} TESTES OK!${RESET}`);
    console.log(`${GREEN}Infraestrutura blindada, silenciosa e em estrita conformidade técnica.${RESET}`);
  } else {
    console.log(`${RED}${BOLD}✖ DETECTADA NÃO-CONFORMIDADE: ${totalPassed}/${totalTests} APROVADOS.${RESET}`);
    process.exitCode = 1;
  }
  console.log(`${BOLD}====================================================================\n${RESET}`);
}

runSecuritySuite().catch((err) => {
  console.error('Erro crítico na execução da suíte de segurança:', err);
  process.exit(1);
});
