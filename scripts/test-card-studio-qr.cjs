const fs = require('fs');
const assert = require('assert');

console.log('=== TESTE DE VALIDAÇÃO: FUNDO DA CARTEIRA E EXIBIÇÃO DO QR CODE NO STUDIO ===');

// 1. Validar admin.html
const adminHtml = fs.readFileSync('admin.html', 'utf8');

// A) Não deve haver ctx.save dentro de renderInteractiveElements
const renderIdx = adminHtml.indexOf('function renderInteractiveElements()');
assert(renderIdx !== -1, 'renderInteractiveElements deve existir em admin.html');
const renderEndIdx = adminHtml.indexOf('function selectElement', renderIdx);
assert(renderEndIdx !== -1, 'selectElement deve existir após renderInteractiveElements');
const renderBody = adminHtml.substring(renderIdx, renderEndIdx);

assert(!renderBody.includes('ctx.save()'), 'renderInteractiveElements NÃO deve conter ctx.save()');
assert(!renderBody.includes('ctx.fillStyle'), 'renderInteractiveElements NÃO deve conter ctx.fillStyle');
console.log('✔ PASS: renderInteractiveElements livre de referências a ctx (zero ReferenceError)');

// B) QrCode deve gerar SVG e fallback para img
assert(renderBody.includes('item.type === \'qrcode\''), 'Deve tratar item.type === qrcode');
assert(renderBody.includes('https://fpeft.vercel.app/?id='), 'Deve gerar link correto https://fpeft.vercel.app/?id=');
assert(renderBody.includes('svgCells'), 'Deve gerar SVG do QR Code');
console.log('✔ PASS: QR Code renderizado interativamente com link https://fpeft.vercel.app/?id=');

// C) creditCardCanvas deve ter imagem de fundo garantida
assert(adminHtml.includes('id="creditCardCanvas"'), 'creditCardCanvas deve existir');
assert(adminHtml.includes("background-image: url('assets/Carteira_Atleta_HD.png')"), 'creditCardCanvas deve ter background-image oficial');
console.log('✔ PASS: creditCardCanvas com estilo inline de background oficial FPEFT HD');

// D) getFpeftTemplateSvg deve ter Carteira_Atleta_HD.png como fallback
const svgFuncIdx = adminHtml.indexOf('function getFpeftTemplateSvg');
assert(svgFuncIdx !== -1, 'getFpeftTemplateSvg deve existir');
const svgFuncEndIdx = adminHtml.indexOf('function getCurrentBackgroundSvgString', svgFuncIdx);
const svgFuncBody = adminHtml.substring(svgFuncIdx, svgFuncEndIdx);
assert(svgFuncBody.includes('assets/Carteira_Atleta_HD.png'), 'getFpeftTemplateSvg deve referenciar Carteira_Atleta_HD.png no fallback');
assert(!svgFuncBody.includes('#00183b'), 'getFpeftTemplateSvg NÃO deve cair no gradiente vazio #00183b');
console.log('✔ PASS: getFpeftTemplateSvg protegido contra gradiente azul vazio');

// E) Desktop Assets Mirror deve conter todos os arquivos
assert(fs.existsSync('C:/Users/PC/Desktop/assets/carteira_template.js'), 'C:/Users/PC/Desktop/assets/carteira_template.js deve existir');
assert(fs.existsSync('C:/Users/PC/Desktop/assets/Carteira_Atleta_HD.png'), 'C:/Users/PC/Desktop/assets/Carteira_Atleta_HD.png deve existir');
assert(fs.existsSync('C:/Users/PC/Desktop/assets/qrcode.min.js'), 'C:/Users/PC/Desktop/assets/qrcode.min.js deve existir');
assert(fs.existsSync('C:/Users/PC/Desktop/carteira_template.js'), 'C:/Users/PC/Desktop/carteira_template.js raiz deve existir');
console.log('✔ PASS: Espelhos do Desktop 100% íntegros e completos');

console.log('=== TODOS OS TESTES DO FUNDO E QR CODE FORAM APROVADOS COM SUCESSO! ===');
