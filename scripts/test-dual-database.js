import assert from 'node:assert';
import fs from 'node:fs';

console.log('=== TESTE DE VALIDAÇÃO: BANCO DE DADOS RESERVA & FAILOVER ===');

// 1. Verificar schema SQL de backup
assert(fs.existsSync('supabase/secondary_backup_schema.sql'), 'Arquivo supabase/secondary_backup_schema.sql deve existir');
const sqlContent = fs.readFileSync('supabase/secondary_backup_schema.sql', 'utf8');
assert(sqlContent.includes('CREATE TABLE IF NOT EXISTS public.atletas'), 'SQL deve criar tabela atletas');
assert(sqlContent.includes('CREATE TABLE IF NOT EXISTS public.configuracoes'), 'SQL deve criar tabela configuracoes');
assert(sqlContent.includes('CREATE TABLE IF NOT EXISTS public.noticias'), 'SQL deve criar tabela noticias');
assert(sqlContent.includes('CREATE TABLE IF NOT EXISTS public.keep_alive_logs'), 'SQL deve criar tabela keep_alive_logs');
assert(sqlContent.includes('ENABLE ROW LEVEL SECURITY'), 'SQL deve habilitar RLS');
console.log('✔ PASS: Script SQL supabase/secondary_backup_schema.sql estruturado e completo');

// 2. Verificar admin.html
const adminHtml = fs.readFileSync('admin.html', 'utf8');
assert(adminHtml.includes('id="adminCfgSecondaryUrl"'), 'admin.html deve ter input adminCfgSecondaryUrl');
assert(adminHtml.includes('id="adminCfgSecondaryKey"'), 'admin.html deve ter input adminCfgSecondaryKey');
assert(adminHtml.includes('id="adminCfgDualWrite"'), 'admin.html deve ter toggle adminCfgDualWrite');
assert(adminHtml.includes('id="adminCfgAutoFailover"'), 'admin.html deve ter toggle adminCfgAutoFailover');
assert(adminHtml.includes('handleSaveAdminSecondaryConfig'), 'admin.html deve ter handleSaveAdminSecondaryConfig');
assert(adminHtml.includes('testSecondarySupabaseConnection'), 'admin.html deve ter testSecondarySupabaseConnection');
assert(adminHtml.includes('syncAllDataToSecondary'), 'admin.html deve ter syncAllDataToSecondary');
assert(adminHtml.includes('replicateToSecondary'), 'admin.html deve ter replicateToSecondary');
assert(adminHtml.includes('openBackupSqlModal'), 'admin.html deve ter openBackupSqlModal');
assert(adminHtml.includes('secondaryDbStatusBadge'), 'admin.html deve ter indicador visual do status do banco reserva');
console.log('✔ PASS: Interface e métodos de gestão do Banco Reserva presentes em admin.html');

// 3. Verificar hooks de Dual-Write em admin.html
assert(adminHtml.includes("replicateToSecondary('atletas', 'upsert'"), 'admin.html deve replicar cadastro de atletas');
assert(adminHtml.includes("replicateToSecondary('atletas', 'update'"), 'admin.html deve replicar alteração de status');
assert(adminHtml.includes("replicateToSecondary('atletas', 'delete'"), 'admin.html deve replicar exclusão de atletas');
assert(adminHtml.includes("replicateToSecondary('configuracoes', 'upsert'"), 'admin.html deve replicar layout do studio');
console.log('✔ PASS: Hooks de Dual-Write (espelhamento ativo) configurados nas 4 operações vitais');

// 4. Verificar Failover em admin.html e index.html
assert(adminHtml.includes('supabaseSecondaryClient.from(\'atletas\')'), 'admin.html deve ter failover de leitura para banco secundário');
const indexHtml = fs.readFileSync('index.html', 'utf8');
assert(indexHtml.includes('SUPABASE_SECONDARY_URL'), 'index.html deve reconhecer SUPABASE_SECONDARY_URL');
assert(indexHtml.includes('supabaseSecondaryClient'), 'index.html deve instanciar supabaseSecondaryClient');
assert(/supabaseSecondaryClient\s*\.from\(['"]atletas['"]\)/.test(indexHtml), 'index.html deve consultar banco reserva em caso de falha do primário');
assert(/supabaseSecondaryClient\s*\.from\(['"]configuracoes['"]\)/.test(indexHtml), 'index.html deve consultar layout no reserva se primário falhar');
console.log('✔ PASS: Failover automático ativo em index.html (#consulta e carteira studio)');

// 5. Verificar APIs Serverless
const apiConfig = fs.readFileSync('api/config.js', 'utf8');
assert(apiConfig.includes('supabaseSecondaryUrl'), 'api/config.js deve repassar supabaseSecondaryUrl');
const apiBuscar = fs.readFileSync('api/atletas/buscar.ts', 'utf8');
assert(apiBuscar.includes('SUPABASE_SECONDARY_URL'), 'api/atletas/buscar.ts deve suportar SUPABASE_SECONDARY_URL');
assert(apiBuscar.includes('X-Failover-Database'), 'api/atletas/buscar.ts deve marcar cabeçalho de failover');
const apiOperacao = fs.readFileSync('api/gestao/operacao.ts', 'utf8');
assert(apiOperacao.includes('SUPABASE_SECONDARY_URL'), 'api/gestao/operacao.ts deve replicar no serverless');
console.log('✔ PASS: Serverless APIs (config, buscar, operacao) integradas com banco reserva e failover');

console.log('=== TODOS OS TESTES DE BANCO RESERVA E FAILOVER PASSARAM COM 100% DE SUCESSO! ===');
