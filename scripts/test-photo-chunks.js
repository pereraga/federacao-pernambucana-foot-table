import assert from 'node:assert';
import { createClient } from '@supabase/supabase-js';

console.log('=== TESTE DE VALIDAÇÃO: COMPILAÇÃO, FRACIONAMENTO E MONTAGEM DE FOTOS (DUAL-DB) ===');

const DB1_URL = 'https://qvnsahvdjhimlmtqrnif.supabase.co';
const DB1_KEY = 'sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z';
const DB2_URL = 'https://xvqsysfqbkfsogkwtbal.supabase.co';
const DB2_KEY = 'sb_publishable_2T1UD0EYvVBlIqCvnX5VHw_K6mmAn3M';

const db1 = createClient(DB1_URL, DB1_KEY);
const db2 = createClient(DB2_URL, DB2_KEY);

// Simulação de foto em alta definição base64 (25.000 caracteres)
const fakeFullPhoto = 'data:image/jpeg;base64,' + 'A'.repeat(25000);
const testCode = '777888';
const CHUNK_SIZE = 8000;

// 1. Fracionamento em partes (chunks)
const chunks = [];
for (let i = 0; i < fakeFullPhoto.length; i += CHUNK_SIZE) {
  chunks.push(fakeFullPhoto.substring(i, i + CHUNK_SIZE));
}
assert(chunks.length === 4, 'Deveria criar 4 frações de 8000 caracteres');
console.log('✔ PASS: Foto fracionada em', chunks.length, 'frações com sucesso');

// 2. Gravação das frações no Banco 1 e Banco 2
const chunkRows = chunks.map((c, idx) => ({
  source: `athlete_photo_chunk:${testCode}:${idx}:${chunks.length}`,
  status: c,
  pinged_at: new Date().toISOString()
}));

async function runDualTest() {
  // Limpeza prévia
  await db1.from('keep_alive_logs').delete().like('source', `athlete_photo_chunk:${testCode}:%`);
  await db2.from('keep_alive_logs').delete().like('source', `athlete_photo_chunk:${testCode}:%`);

  // Inserção no DB1
  const ins1 = await db1.from('keep_alive_logs').insert(chunkRows);
  assert(!ins1.error, 'DB1 deve aceitar inserção de frações');
  console.log('✔ PASS: Frações gravadas no Banco 1 (keep_alive_logs)');

  // Inserção no DB2
  const ins2 = await db2.from('keep_alive_logs').insert(chunkRows);
  assert(!ins2.error, 'DB2 deve aceitar inserção de frações');
  console.log('✔ PASS: Frações gravadas no Banco 2 (keep_alive_logs)');

  // 3. Montagem da foto por completo a partir do Banco 1
  const { data: resDb1 } = await db1
    .from('keep_alive_logs')
    .select('source, status')
    .like('source', `athlete_photo_chunk:${testCode}:%`)
    .order('source', { ascending: true });

  assert(resDb1 && resDb1.length === 4, 'DB1 deve retornar as 4 frações');
  resDb1.sort((a, b) => {
    const idxA = parseInt(a.source.split(':')[2], 10);
    const idxB = parseInt(b.source.split(':')[2], 10);
    return idxA - idxB;
  });
  const assembledDb1 = resDb1.map(c => c.status).join('');
  assert.strictEqual(assembledDb1, fakeFullPhoto, 'Foto montada do DB1 deve ser 100% idêntica à original');
  console.log('✔ PASS: Foto montada por completo a partir das frações do Banco 1 (100% idêntica)');

  // 4. Montagem da foto por completo com failover para o Banco 2
  const { data: resDb2 } = await db2
    .from('keep_alive_logs')
    .select('source, status')
    .like('source', `athlete_photo_chunk:${testCode}:%`)
    .order('source', { ascending: true });

  assert(resDb2 && resDb2.length === 4, 'DB2 deve retornar as 4 frações');
  resDb2.sort((a, b) => {
    const idxA = parseInt(a.source.split(':')[2], 10);
    const idxB = parseInt(b.source.split(':')[2], 10);
    return idxA - idxB;
  });
  const assembledDb2 = resDb2.map(c => c.status).join('');
  assert.strictEqual(assembledDb2, fakeFullPhoto, 'Foto montada do DB2 deve ser 100% idêntica à original');
  console.log('✔ PASS: Foto montada por completo em failover a partir das frações do Banco 2');

  // Limpeza final
  await db1.from('keep_alive_logs').delete().like('source', `athlete_photo_chunk:${testCode}:%`);
  await db2.from('keep_alive_logs').delete().like('source', `athlete_photo_chunk:${testCode}:%`);

  console.log('=== TODOS OS TESTES DE COMPILAÇÃO E MONTAGEM FORAM APROVADOS COM 100%! ===');
}

runDualTest().catch(err => {
  console.error('Falha no teste:', err);
  process.exit(1);
});
