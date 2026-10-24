import { createClient } from '@supabase/supabase-js';

const url = 'https://qvnsahvdjhimlmtqrnif.supabase.co';
const key = 'sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z';

const supabase = createClient(url, key);

async function check() {
  try {
    const { data, error, count } = await supabase.from('atletas').select('*', { count: 'exact' });
    console.log('Error:', error);
    console.log('Total count in Supabase atletas:', count);
    if (data) {
      console.log(`Found ${data.length} athletes in database:`);
      for (const a of data) {
        console.log(`- Codigo: [${a.codigo}] | Nome: [${a.nome}] | Status: [${a.status}] | Foto: [${a.foto_url ? 'TEM FOTO (' + a.foto_url.slice(0, 30) + '...)' : 'SEM FOTO'}] | Categoria: [${a.categoria}] | Clube: [${a.clube || a.modalidade}] | Criado em: [${a.created_at}]`);
      }
    }

    // Also check other tables where athletes might have been saved
    const { data: keepLogs } = await supabase.from('keep_alive_logs').select('*').like('source', '%atleta%').limit(10);
    console.log('\nKeep alive logs with atleta:', keepLogs?.length || 0);
  } catch (err) {
    console.error('Catch error:', err);
  }
}

check();
