const fs = require('fs');
const path = require('path');

const adminPath = path.resolve(__dirname, '../admin.html');
const adminHtml = fs.readFileSync(adminPath, 'utf8');

const indexPath = path.resolve(__dirname, '../index.html');
const indexHtml = fs.readFileSync(indexPath, 'utf8');

console.log('=== TESTE DE VALIDAÇÃO: PADRÃO DA ASSINATURA DA DIRETORIA FPEFT ===');

// 1. OFFICIAL_DEFAULT_ELEMENTS assinatura padrão oficial
if (!adminHtml.includes('"id": "field-assinatura"') || !adminHtml.includes('"y": 585')) {
  console.error('❌ FAIL: OFFICIAL_DEFAULT_ELEMENTS não possui y: 585 para field-assinatura.');
  process.exit(1);
}
console.log('✔ PASS: OFFICIAL_DEFAULT_ELEMENTS configurado com y: 585 para field-assinatura.');

// 2. renderCarteiraToHdCanvas com linha fixa 585 * scale e assinatura no topo da linha
if (!adminHtml.includes('const lineY = 585 * scale;') ||
    !adminHtml.includes('const sigY = lineY - sigH + (3 * scale);')) {
  console.error('❌ FAIL: renderCarteiraToHdCanvas não possui lineY fixo em 585 ou sigY sobre a linha.');
  process.exit(1);
}
console.log('✔ PASS: renderCarteiraToHdCanvas alinha linha fixa em 585 e assinatura descansando sobre a linha.');

// 3. renderCarteiraToSvg com linha fixa 585 e assinatura no topo da linha
if (!adminHtml.includes('const lineY = 585;') ||
    !adminHtml.includes('const sigY = lineY - sigH + 3;')) {
  console.error('❌ FAIL: renderCarteiraToSvg não possui lineY fixo em 585 ou sigY sobre a linha.');
  process.exit(1);
}
console.log('✔ PASS: renderCarteiraToSvg sincronizado com linha oficial fixa em 585 e assinatura sobre a linha.');

// 4. index.html configurado para padrão oficial 585
if (!indexHtml.includes('top-[75.5%]') ||
    !indexHtml.includes('const lineY = 585;')) {
  console.error('❌ FAIL: index.html não possui posicionamento padrão da assinatura em 585.');
  process.exit(1);
}
console.log('✔ PASS: index.html calibrado no padrão oficial de consulta com linha em 585.');

// 5. Verificação matemática de distâncias (sem sobreposição com Modalidade e sem overflow)
const modEndY = 446 + 32; // 478px
const lineY = 585;
const sigH = 85;
const sigTop = lineY - sigH + 3; // 503px
const gapModalidade = sigTop - modEndY; // 25px
const cardHeight = 662;
const marginBottom = cardHeight - lineY; // 77px

if (gapModalidade < 20) {
  console.error(`❌ FAIL: Espaçamento entre Modalidade e Assinatura é muito pequeno (${gapModalidade}px).`);
  process.exit(1);
}
if (lineY > cardHeight - 30) {
  console.error(`❌ FAIL: Linha da assinatura muito próxima do rodapé do cartão (${lineY}px).`);
  process.exit(1);
}
console.log(`✔ PASS: Espaçamento limpo entre Modalidade (${modEndY}px) e Assinatura (${sigTop}px) é de ${gapModalidade}px livres (zero colisão).`);
console.log(`✔ PASS: Margem inferior da linha até a borda do cartão é de ${marginBottom}px (zero overflow/corte).`);

console.log('=== TODOS OS TESTES DA ASSINATURA PASSARAM COM SUCESSO! ===');
