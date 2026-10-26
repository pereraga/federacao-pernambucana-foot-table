import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const indexHtml = fs.readFileSync(path.join(ROOT_DIR, 'index.html'), 'utf8').replace(/\r\n/g, '\n');

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    process.exit(1);
  }
  console.log(`✔ PASS: ${message}`);
}

console.log('=== TESTE DE VALIDAÇÃO: BLOQUEIO DE DOWNLOAD DA CARTEIRA POR CPF ===');

// 1. Verificação dos elementos de interface
assert(indexHtml.includes('id="modalCpfDownloadGate"'), 'Modal de bloqueio por CPF presente no HTML');
assert(indexHtml.includes('id="inputCpfDownloadGate"'), 'Campo de input de CPF presente no modal');
assert(indexHtml.includes('id="cpfGateAthleteName"'), 'Exibição de nome do atleta no modal');
assert(indexHtml.includes('id="cpfGateAthleteCode"'), 'Exibição de código do atleta no modal');
assert(indexHtml.includes('id="cpfGateFeedback"'), 'Área de feedback/erro de CPF presente');
assert(indexHtml.includes('id="btnConfirmCpfDownload"'), 'Botão de confirmação de CPF presente');
assert(indexHtml.includes('id="cardDownloadLockNotice"'), 'Aviso visual de proteção por CPF presente');

// 2. Verificação das funções de controle
assert(indexHtml.includes('function openCpfDownloadGateModal('), 'Função openCpfDownloadGateModal implementada');
assert(indexHtml.includes('function closeCpfDownloadGateModal('), 'Função closeCpfDownloadGateModal implementada');
assert(indexHtml.includes('function confirmCpfAndUnlockDownload('), 'Função confirmCpfAndUnlockDownload implementada');
assert(indexHtml.includes('function isDownloadUnlockedForCurrentAthlete('), 'Função isDownloadUnlockedForCurrentAthlete implementada');
assert(indexHtml.includes('function validateCpfChecksum('), 'Função validateCpfChecksum implementada');
assert(indexHtml.includes('function formatCpfMask('), 'Função formatCpfMask implementada');

// 3. Verificação do bloqueio nos botões de extração
assert(indexHtml.includes("if (!isDownloadUnlockedForCurrentAthlete()) {\n        openCpfDownloadGateModal('png');"), 'Download PNG bloqueado sem autenticação prévia de CPF');
assert(indexHtml.includes("if (!isDownloadUnlockedForCurrentAthlete()) {\n        openCpfDownloadGateModal('print');"), 'Impressão PDF bloqueada sem autenticação prévia de CPF');

// 4. Verificação de re-bloqueio em nova busca
assert(indexHtml.includes('_isAthleteDownloadUnlocked = false;') && indexHtml.includes('_unlockedAthleteCode = null;'), 'Busca pública reseta o desbloqueio para novos atletas');

// 5. Verificação da blindagem de exibição do CPF público (apenas os 3 primeiros dígitos visíveis)
assert(indexHtml.includes("digits.slice(0, 3)}.***.***-**"), 'Função maskCpf exibe apenas os 3 primeiros dígitos do CPF');

// 6. Verificação da ocultação da data de nascimento (exibição apenas do ano de nascimento)
assert(indexHtml.includes('function extractBirthYear(dateStr)'), 'Função extractBirthYear implementada em index.html');
assert(indexHtml.includes("document.getElementById('cardBadgeBirth').textContent = extractBirthYear(athlete.nascimento);"), 'Carteira exibe apenas o ano de nascimento do atleta');
assert(indexHtml.includes('>Ano Nasc.</span>'), 'Label da carteira atualizado para Ano Nasc.');

console.log('=== TODOS OS 16 TESTES DO BLOQUEIO DE CPF E PRIVACIDADE FORAM APROVADOS COM SUCESSO! ===');
