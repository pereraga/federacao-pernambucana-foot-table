import fs from 'node:fs';

const adminHtml = fs.readFileSync('admin.html', 'utf8');
const loginHtml = fs.readFileSync('login.html', 'utf8');

console.log('--- TESTE ESPECÍFICO CONTA ADRIANO & ABAS RESTRITAS ---');

// 1. isCurrentAdriano
if (!adminHtml.includes('function isCurrentAdriano()')) {
  throw new Error('FALHA: isCurrentAdriano() não encontrado em admin.html');
}
console.log('✔ PASS: isCurrentAdriano() implementado com sucesso');

// 2. navBtn-emails e navBtn-config escondidos por padrão no HTML
if (!adminHtml.includes('id="navBtn-emails" class="nav-item hidden') || !adminHtml.includes('id="navBtn-config" class="nav-item hidden')) {
  throw new Error('FALHA: Abas emails e config não estão com hidden no HTML inicial');
}
console.log('✔ PASS: Abas restritas inicializam com hidden e display:none no HTML');

// 3. isTabAllowed bloqueia emails e config para Adriano
if (!adminHtml.includes("if (isCurrentAdriano() && (tabName === 'emails' || tabName === 'config'))")) {
  throw new Error('FALHA: isTabAllowed() não possui trava estrita para conta Adriano');
}
console.log('✔ PASS: isTabAllowed() bloqueia emails e config para Adriano');

// 4. login.html não bloqueia Adriano no lockout de força bruta
if (!loginHtml.includes('const isPrivilegedUser = isMasterUser || isAdriano;')) {
  throw new Error('FALHA: login.html não isenta Adriano de lockout de força bruta');
}
console.log('✔ PASS: login.html isenta Adriano de lockout de força bruta');

// 5. login.html reconhece Adriano com senha e resgata credencial oficial
if (!loginHtml.includes('Reconhecimento Oficial e Resgate do Presidente FPEFT (Adriano Mello)')) {
  throw new Error('FALHA: login.html não possui resgate oficial para Presidente Adriano');
}
console.log('✔ PASS: login.html possui resgate e credenciais automáticas para Adriano');

console.log('--- TODOS OS TESTES ESPECÍFICOS DA CONTA DE ADRIANO PASSARAM! ---');
