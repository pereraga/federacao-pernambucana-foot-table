export default async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "https://qvnsahvdjhimlmtqrnif.supabase.co";
  let supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "";

  // Se a chave na Vercel estiver vazia ou for a URL antiga por engano, usar a chave pública oficial
  if (!supabaseKey || supabaseKey.startsWith('http')) {
    supabaseKey = "sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z";
  }

  return res.status(200).json({
    supabaseUrl,
    supabaseAnonKey: supabaseKey,
    hasValidKey: !!(supabaseKey && supabaseKey.length >= 20 && !supabaseKey.startsWith('http'))
  });
}
