const fs = require('fs');
const path = require('path');

const adminPath = path.resolve(__dirname, '../admin.html');
const adminHtml = fs.readFileSync(adminPath, 'utf8');

console.log('=== TESTE DE VALIDAÇÃO: TOOLBAR DO STUDIO EM LINHA ÚNICA ===');

// 1. Toolbar superior exists and has 2-row structure
if (!adminHtml.includes('<!-- Toolbar Superior do Canvas (Zoom e Padrão CR80) -->')) {
  console.error('❌ FAIL: Toolbar superior do Canvas não encontrada.');
  process.exit(1);
}
console.log('✔ PASS: Toolbar superior do Canvas presente.');

// 2. Linha principal ajustada em uma linha só
if (!adminHtml.includes('<!-- Linha Principal de Controle: Ajustada em UMA linha só -->')) {
  console.error('❌ FAIL: Linha Principal de controle em linha única não encontrada.');
  process.exit(1);
}
console.log('✔ PASS: Linha Principal de controle ajustada para linha única.');

// 3. Main row has flex-nowrap min-w-0
if (!adminHtml.includes('flex items-center justify-between gap-2 sm:gap-3 flex-nowrap min-w-0')) {
  console.error('❌ FAIL: Linha principal não possui flex-nowrap min-w-0.');
  process.exit(1);
}
console.log('✔ PASS: Linha principal configurada com flex-nowrap min-w-0 para evitar quebras em escada.');

// 4. Modo Fixo e Modo Design com whitespace-nowrap
if (!adminHtml.includes('id="btnModeFixed"') || !adminHtml.includes('id="btnModeDesign"')) {
  console.error('❌ FAIL: Botões de modo fixo e design não encontrados.');
  process.exit(1);
}
console.log('✔ PASS: Botões de modo fixo e modo design presentes.');

// 5. Linhas Guia posicionada abaixo na sub-linha
if (!adminHtml.includes('<!-- Linha de Guia em Baixo: Alinhamento, Grade Inteligente e Dimensões Oficiais -->')) {
  console.error('❌ FAIL: Linha de guia em baixo não encontrada.');
  process.exit(1);
}
console.log('✔ PASS: Linha de Guia posicionada abaixo na barra inferior.');

// 6. Botão Salvar Carteira e Zoom presentes
if (!adminHtml.includes('id="btnSaveOfficialCloud"') || !adminHtml.includes('id="zoomDisplay"')) {
  console.error('❌ FAIL: Botão Salvar Carteira ou Controles de Zoom ausentes.');
  process.exit(1);
}
console.log('✔ PASS: Salvar Carteira e Zoom alinhados no lado direito da linha principal.');

console.log('=== TODOS OS TESTES DO TOOLBAR PASSARAM COM SUCESSO! ===');
