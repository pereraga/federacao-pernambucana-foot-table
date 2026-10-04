export default async function handler(req, res) {
  const supabaseUrl = (process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '').replace(/\/$/, '');
  const supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

  if (!supabaseUrl || !supabaseKey) {
    return res.status(200).json({
      hasUrl: !!supabaseUrl,
      hasKey: !!supabaseKey,
      message: 'Credenciais ausentes nas variáveis de ambiente da Vercel'
    });
  }

  // Verificar formato da chave (sem vazar a chave inteira)
  const keyLength = supabaseKey.length;
  const keyPrefix = supabaseKey.substring(0, 10);
  const keySuffix = supabaseKey.substring(supabaseKey.length - 5);
  const hasDotsAtEnd = supabaseKey.endsWith('...');

  try {
    // 1. Testa rota de atletas
    const atletasResp = await fetch(`${supabaseUrl}/rest/v1/atletas?select=*&limit=1`, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      }
    });
    const atletasBody = await atletasResp.text();

    // 2. Testa rota de admin_users
    const adminResp = await fetch(`${supabaseUrl}/rest/v1/admin_users?select=*&limit=1`, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      }
    });
    const adminBody = await adminResp.text();

    return res.status(200).json({
      url: supabaseUrl,
      keyLength,
      keyPrefix,
      keySuffix,
      hasDotsAtEnd,
      atletas: {
        status: atletasResp.status,
        statusText: atletasResp.statusText,
        body: atletasBody
      },
      admin_users: {
        status: adminResp.status,
        statusText: adminResp.statusText,
        body: adminBody
      }
    });
  } catch (err) {
    return res.status(500).json({
      error: err.message
    });
  }
}
