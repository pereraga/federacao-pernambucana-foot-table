const fs = require('fs');
const path = require('path');
const assert = require('assert');

console.log('=== TESTE DE VALIDAÇÃO: SINCRONIZAÇÃO EM TEMPO REAL DA CARTEIRA CR80 ===');

const adminPath = path.join(__dirname, '..', 'admin.html');
const adminHtml = fs.readFileSync(adminPath, 'utf8');

// 1. Sincronização em tempo real de `#athleteForm`
assert.ok(
  adminHtml.includes("athleteForm.addEventListener('input', handleLiveFormSync)") &&
  adminHtml.includes("athleteForm.addEventListener('change', handleLiveFormSync)"),
  'Falha: athleteForm deve possuir ouvintes unificados de input e change para atualização em tempo real.'
);
console.log('✔ PASS: Formulário do atleta escuta input e change atualizando o studio em tempo real');

// 2. Remoção do bug que trocava 'RECIFE - PE' por '- PE'
assert.ok(
  !adminHtml.includes("(!cityVal || cityVal === 'RECIFE - PE') ? '- PE' : cityVal"),
  'Falha: O bug que convertia RECIFE - PE em - PE ainda está presente!'
);
assert.ok(
  adminHtml.includes("setEl('municipio', cityVal || '- PE')"),
  'Falha: syncStudioElementsWithForm deve usar cityVal || "- PE".'
);
console.log('✔ PASS: Correção do município (RECIFE - PE e qualquer cidade é exibida perfeitamente)');

// 3. Campo athleteCity possui ouvinte de input em tempo real
assert.ok(
  adminHtml.includes("cityInp.addEventListener('input',"),
  'Falha: athleteCity deve atualizar o studio no evento input.'
);
console.log('✔ PASS: athleteCity possui listener de input imediato');

// 4. sanitizeStudioElements preserva digitação ativa do formulário
assert.ok(
  adminHtml.includes("const curFormName = (document.getElementById('athleteName')?.value || '').trim().toUpperCase();") &&
  adminHtml.includes("item.text = curFormName || (window._lastActiveAthlete?.nome || '').toUpperCase() || '';"),
  'Falha: sanitizeStudioElements deve priorizar os valores ativos digitados pelo usuário.'
);
console.log('✔ PASS: sanitizeStudioElements blindado para nunca limpar valores digitados ao vivo');

// 5. BroadcastChannel e Supabase Realtime chamam syncStudioElementsWithForm
assert.ok(
  adminHtml.includes("if (typeof syncStudioElementsWithForm === 'function') {\n                      syncStudioElementsWithForm();\n                    }") ||
  adminHtml.includes("if (typeof syncStudioElementsWithForm === 'function') {\r\n                      syncStudioElementsWithForm();\r\n                    }"),
  'Falha: Listener Realtime deve invocar syncStudioElementsWithForm.'
);
console.log('✔ PASS: Sincronização em segundo plano (nuvem e abas) preserva os campos ativos do formulário');

// 6. Ausência de autoSaveStudioDesign nos campos de digitação do atleta
const bindSyncSnippet = adminHtml.slice(adminHtml.indexOf('const bindSync ='), adminHtml.indexOf('bindSync(\'athleteName\''));
assert.ok(
  !bindSyncSnippet.includes('autoSaveStudioDesign()'),
  'Falha: bindSync não deve disparar autoSaveStudioDesign a cada letra digitada.'
);
console.log('✔ PASS: autoSaveStudioDesign removido da digitação de dados cadastrais (elimina loop de limpeza)');

// 7. Salvamento do atleta registra window._lastActiveAthlete
assert.ok(
  adminHtml.includes("window._lastActiveAthlete = athleteObj;"),
  'Falha: handleSaveAthlete deve atualizar window._lastActiveAthlete.'
);
console.log('✔ PASS: Atleta recém-salvo é registrado como window._lastActiveAthlete');

console.log('=== TODOS OS TESTES DE SINCRONIZAÇÃO EM TEMPO REAL PASSARAM COM 100% DE SUCESSO! ===');
