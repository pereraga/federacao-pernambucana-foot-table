import { safeValidate, StatusAtletaSchema, GestaoAtletaSchema } from '../api/lib/validation.js';

console.log("=== TESTE DE VALIDAÇÃO DE HOMOLOGAÇÃO E STATUS ===");

// 1. Testa StatusAtletaSchema com HOMOLOGADO
const val1 = safeValidate(StatusAtletaSchema, { codigo: '548608', status: 'HOMOLOGADO' });
if (!val1.success || val1.data.status !== 'HOMOLOGADO') {
  console.error("FAIL: StatusAtletaSchema rejeitou payload válido", val1);
  process.exit(1);
}
console.log("✔ PASS: StatusAtletaSchema aprovou homologação de 548608 como HOMOLOGADO");

// 2. Testa StatusAtletaSchema com DESABILITADO
const val2 = safeValidate(StatusAtletaSchema, { codigo: '548608', status: 'DESABILITADO' });
if (!val2.success || val2.data.status !== 'DESABILITADO') {
  console.error("FAIL: StatusAtletaSchema rejeitou DESABILITADO", val2);
  process.exit(1);
}
console.log("✔ PASS: StatusAtletaSchema aprovou status DESABILITADO");

// 3. Testa bloqueio de injeção em StatusAtletaSchema
const valInject = safeValidate(StatusAtletaSchema, { codigo: "548608'; DROP TABLE--", status: 'HOMOLOGADO' });
if (valInject.success) {
  console.error("FAIL: Injeção não foi bloqueada!");
  process.exit(1);
}
console.log("✔ PASS: Tentativa de injeção no código bloqueada com sucesso");

// 4. Testa bloqueio de status inválido
const valInvalidStatus = safeValidate(StatusAtletaSchema, { codigo: "548608", status: 'HACKED' });
if (valInvalidStatus.success) {
  console.error("FAIL: Status inválido não foi bloqueado!");
  process.exit(1);
}
console.log("✔ PASS: Status arbitrário não permitido bloqueado com sucesso");

// 5. Simula a lógica de resolução de effectiveStatus no admin.html
function resolveEffectiveStatus(dStatus, localStatus, cloudStatus) {
  const rawDbStatus = (dStatus && String(dStatus).trim()) ? dStatus.trim().toUpperCase() : 'PENDENTE';
  let effectiveStatus = rawDbStatus;

  // 1. Prioridade máxima: canal de status em nuvem de alta disponibilidade (keep_alive_logs)
  if (cloudStatus) {
    effectiveStatus = cloudStatus;
  }
  // 2. Preserva status deliberado homologado ou desabilitado caso o registro Supabase ainda esteja PENDENTE
  else if (localStatus && localStatus !== 'PENDENTE' && rawDbStatus === 'PENDENTE') {
    effectiveStatus = localStatus;
  }
  return effectiveStatus;
}

// Caso 1: Supabase atletas tem PENDENTE, mas canal de nuvem tem HOMOLOGADO
const res1 = resolveEffectiveStatus('PENDENTE', 'HOMOLOGADO', 'HOMOLOGADO');
if (res1 !== 'HOMOLOGADO') {
  console.error("FAIL: Caso 1 falhou, retornou:", res1);
  process.exit(1);
}
console.log("✔ PASS: Caso 1 (Canal de Nuvem HOMOLOGADO) prevaleceu sobre PENDENTE do banco");

// Caso 2: Supabase atletas tem PENDENTE, local tem HOMOLOGADO (aguardando sync)
const res2 = resolveEffectiveStatus('PENDENTE', 'HOMOLOGADO', null);
if (res2 !== 'HOMOLOGADO') {
  console.error("FAIL: Caso 2 falhou, retornou:", res2);
  process.exit(1);
}
console.log("✔ PASS: Caso 2 (Ação Local HOMOLOGADO) preservado contra PENDENTE");

// Caso 3: Atleta recém-criado sem ação de homologação
const res3 = resolveEffectiveStatus('PENDENTE', null, null);
if (res3 !== 'PENDENTE') {
  console.error("FAIL: Caso 3 falhou, retornou:", res3);
  process.exit(1);
}
console.log("✔ PASS: Caso 3 (Novo Atleta) permanece PENDENTE");

console.log("=== TODOS OS 7 TESTES DE HOMOLOGAÇÃO PASSARAM COM SUCESSO! ===");
