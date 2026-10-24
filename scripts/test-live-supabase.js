import { createClient } from '@supabase/supabase-js';

const url = 'https://qvnsahvdjhimlmtqrnif.supabase.co';
const key = 'sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z';

console.log('Testing Supabase project connection...');
console.log('URL:', url);

const supabase = createClient(url, key);

async function test() {
  const t0 = Date.now();
  try {
    const res = await supabase.from('atletas').select('codigo, nome, status').limit(3);
    console.log('Response time:', Date.now() - t0, 'ms');
    console.log('HTTP Status:', res.status, res.statusText);
    if (res.error) {
      console.log('Supabase Error:', res.error);
    } else {
      console.log('Query Success! Atletas returned:', res.data?.length);
      console.log(res.data);
    }
  } catch (err) {
    console.log('Network/Fetch catch error:', err);
  }
}

test();
