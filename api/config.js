export default async function handler(req, res) {
  // Edge Caching da Vercel: responde diretamente dos nós globais da CDN sem acionar execuções serverless
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate=604800');
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

  const supabaseSecondaryUrl = process.env.SUPABASE_SECONDARY_URL || process.env.NEXT_PUBLIC_SUPABASE_SECONDARY_URL || "https://xvqsysfqbkfsogkwtbal.supabase.co";
  let supabaseSecondaryKey = process.env.SUPABASE_SECONDARY_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_SECONDARY_ANON_KEY || "sb_publishable_2T1UD0EYvVBlIqCvnX5VHw_K6mmAn3M";

  return res.status(200).json({
    supabaseUrl,
    supabaseAnonKey: supabaseKey,
    hasValidKey: !!(supabaseKey && supabaseKey.length >= 20 && !supabaseKey.startsWith('http')),
    supabaseSecondaryUrl,
    supabaseSecondaryAnonKey: supabaseSecondaryKey,
    hasSecondaryKey: !!(supabaseSecondaryKey && supabaseSecondaryKey.length >= 20 && !supabaseSecondaryKey.startsWith('http'))
  });
}
