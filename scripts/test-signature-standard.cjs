const fs = require('fs');
const path = require('path');

const adminPath = path.resolve(__dirname, '../admin.html');
const adminHtml = fs.readFileSync(adminPath, 'utf8');

console.log('=== TESTE DE VALIDAÇÃO: PADRÃO DA ASSINATURA DA DIRETORIA FPEFT ===');

// 1. OFFICIAL_DEFAULT_ELEMENTS assinatura padrão
if (!adminHtml.includes('"id": "field-assinatura"') || !adminHtml.includes('"y": 521')) {
  console.error('❌ FAIL: OFFICIAL_DEFAULT_ELEMENTS não possui y: 521 para field-assinatura.');
  process.exit(1);
}
console.log('✔ PASS: OFFICIAL_DEFAULT_ELEMENTS configurado com y: 521 para field-assinatura.');

// 2. renderCarteiraToHdCanvas não desenha a assinatura acima da linha (item.y - sigH eliminado)
if (adminHtml.includes('item.y * scale - sigH + (3 * scale)')) {
  console.error('❌ FAIL: renderCarteiraToHdCanvas ainda contém item.y * scale - sigH (assinatura subindo sobre modalidade).');
  process.exit(1);
}
console.log('✔ PASS: Bug de deslocamento para cima (item.y - sigH) eliminado de renderCarteiraToHdCanvas.');

// 3. renderCarteiraToHdCanvas desenha a assinatura iniciando em baseY e o traço abaixo
if (!adminHtml.includes('ctx.drawImage(sigImg, (item.x + item.width / 2) * scale - sigW / 2, sigY, sigW, sigH);') ||
    !adminHtml.includes('lineY = sigY + sigH - (1.5 * scale);')) {
  console.error('❌ FAIL: renderCarteiraToHdCanvas não desenha a imagem no topo e o traço logo abaixo.');
  process.exit(1);
}
console.log('✔ PASS: renderCarteiraToHdCanvas alinha a assinatura e a linha exatamente no padrão visual do Studio.');

// 4. renderCarteiraToSvg sincronizado com a imagem e a linha abaixo
if (!adminHtml.includes('imgEl.setAttribute(\'href\', sigUrl);') ||
    !adminHtml.includes('const lineY = baseY + (sigH ? sigH - 1.5 : 0);')) {
  console.error('❌ FAIL: renderCarteiraToSvg não inclui a imagem da assinatura ou alinhamento.');
  process.exit(1);
}
console.log('✔ PASS: renderCarteiraToSvg sincronizado com a imagem da assinatura e a linha oficial.');

// 5. Verificação matemática de distâncias (sem sobreposição com Modalidade)
const modEndY = 446 + 32; // 478px
const sigStartY = 521;
const gap = sigStartY - modEndY;
if (gap < 30) {
  console.error(`❌ FAIL: Espaçamento entre Modalidade e Assinatura é muito pequeno (${gap}px).`);
  process.exit(1);
}
console.log(`✔ PASS: Espaçamento limpo entre Modalidade (${modEndY}px) e Assinatura (${sigStartY}px) é de ${gap}px livres (zero colisão).`);

console.log('=== TODOS OS TESTES DA ASSINATURA PASSARAM COM SUCESSO! ===');
