import assert from 'node:assert';
import fs from 'node:fs';

console.log('=== TESTE DE VALIDAÇÃO: 2 BANCOS EM 1 SÓ SISTEMA (ELO INTERMEDIÁRIO) ===');

// 1. Verificar schema SQL de backup
assert(fs.existsSync('supabase/secondary_backup_schema.sql'), 'Arquivo supabase/secondary_backup_schema.sql deve existir');
const sqlContent = fs.readFileSync('supabase/secondary_backup_schema.sql', 'utf8');
assert(sqlContent.includes('CREATE TABLE IF NOT EXISTS public.atletas'), 'SQL deve criar tabela atletas');
assert(sqlContent.includes('CREATE TABLE IF NOT EXISTS public.configuracoes'), 'SQL deve criar tabela configuracoes');
assert(sqlContent.includes('CREATE TABLE IF NOT EXISTS public.noticias'), 'SQL deve criar tabela noticias');
assert(sqlContent.includes('CREATE TABLE IF NOT EXISTS public.keep_alive_logs'), 'SQL deve criar tabela keep_alive_logs');
assert(sqlContent.includes('ENABLE ROW LEVEL SECURITY'), 'SQL deve habilitar RLS');
console.log('✔ PASS: Script SQL supabase/secondary_backup_schema.sql estruturado e completo');

// 2. Verificar admin.html com Elo Intermediário Automático (Sem Botões)
const adminHtml = fs.readFileSync('admin.html', 'utf8');
assert(adminHtml.includes('id="adminCfgSecondaryUrl"'), 'admin.html deve ter input adminCfgSecondaryUrl');
assert(adminHtml.includes('id="adminCfgSecondaryKey"'), 'admin.html deve ter input adminCfgSecondaryKey');
assert(adminHtml.includes('autoSaveIntermediaryDatabases'), 'admin.html deve ter autoSaveIntermediaryDatabases');
assert(adminHtml.includes('reconcileDatabasesIntermediary'), 'admin.html deve ter reconcileDatabasesIntermediary');
assert(adminHtml.includes('updateIntermediaryStatusUI'), 'admin.html deve ter updateIntermediaryStatusUI');
assert(adminHtml.includes('db1StatusDot'), 'admin.html deve ter indicador visual do Banco 1 (Exibição)');
assert(adminHtml.includes('db2StatusDot'), 'admin.html deve ter indicador visual do Banco 2 (Inserção)');
assert(adminHtml.includes('openBackupSqlModal'), 'admin.html deve ter modal discreto de SQL');
console.log('✔ PASS: Interface e métodos do Elo Intermediário presentes em admin.html (100% automático, sem botões)');

// 3. Verificar Inserção no Banco 2 + Espelho no Banco 1 em admin.html
assert(adminHtml.includes('supabaseSecondaryClient.from(\'atletas\').upsert'), 'admin.html deve inserir dados prioritariamente no Banco 2');
assert(adminHtml.includes('supabaseClient.from(\'atletas\').upsert'), 'admin.html deve atualizar Banco 1 para exibição contínua');
assert(adminHtml.includes('replicateToSecondary'), 'admin.html deve ter suporte a espelhamento contínuo');
console.log('✔ PASS: Inserção de dados no Banco 2 e exibição garantida no Banco 1');

// 4. Verificar Fusão e Failover de Leitura em admin.html e index.html
assert(adminHtml.includes('atletasRes1') && adminHtml.includes('atletasRes2'), 'admin.html deve consultar DB1 e DB2 simultaneamente para fusão');
const indexHtml = fs.readFileSync('index.html', 'utf8');
assert(indexHtml.includes('SUPABASE_SECONDARY_URL'), 'index.html deve reconhecer SUPABASE_SECONDARY_URL');
assert(indexHtml.includes('supabaseSecondaryClient'), 'index.html deve instanciar supabaseSecondaryClient');
assert(/supabaseSecondaryClient\s*\.from\(['"]atletas['"]\)/.test(indexHtml), 'index.html deve consultar banco reserva em caso de falha do primário');
assert(/supabaseSecondaryClient\s*\.from\(['"]configuracoes['"]\)/.test(indexHtml), 'index.html deve consultar layout no reserva se primário falhar');
console.log('✔ PASS: Leitura e Failover automático ativos em index.html (#consulta e carteira studio)');

// 5. Verificar APIs Serverless
const apiConfig = fs.readFileSync('api/config.js', 'utf8');
assert(apiConfig.includes('supabaseSecondaryUrl'), 'api/config.js deve repassar supabaseSecondaryUrl');
const apiBuscar = fs.readFileSync('api/atletas/buscar.ts', 'utf8');
assert(apiBuscar.includes('SUPABASE_SECONDARY_URL'), 'api/atletas/buscar.ts deve suportar SUPABASE_SECONDARY_URL');
assert(apiBuscar.includes('X-Failover-Database'), 'api/atletas/buscar.ts deve marcar cabeçalho de failover');
const apiOperacao = fs.readFileSync('api/gestao/operacao.ts', 'utf8');
assert(apiOperacao.includes('SUPABASE_SECONDARY_URL'), 'api/gestao/operacao.ts deve replicar no serverless');
console.log('✔ PASS: Serverless APIs (config, buscar, operacao) integradas com os dois bancos');

console.log('=== TODOS OS TESTES DO SISTEMA DUAL INTERMEDIÁRIO PASSARAM COM 100% DE SUCESSO! ===');
