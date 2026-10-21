// ========================================================
// VERCEL SERVERLESS FUNCTION: SUPABASE KEEP-ALIVE (ANTI-AFK)
// Executado diariamente via Vercel Cron para manter o
// banco de dados do Supabase 100% ativo (sem pausar por inatividade)
// e realizar limpeza automática de logs antigos.
// ========================================================

export default async function handler(req, res) {
  // Evitar qualquer cache no ping diário
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.VITE_SUPABASE_URL || "https://qvnsahvdjhimlmtqrnif.supabase.co";
  let supabaseKey = process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || "sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z";

  if (!supabaseKey || supabaseKey.startsWith('http')) {
    supabaseKey = "sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z";
  }

  if (!supabaseUrl || !supabaseKey) {
    return res.status(200).json({
      status: 'warning',
      message: 'Credenciais Supabase não configuradas.',
      timestamp: new Date().toISOString()
    });
  }

  try {
    const cleanUrl = supabaseUrl.replace(/\/$/, '');

    // 1. Executa leitura na tabela de keep_alive_logs ou atletas (pesquisa no banco)
    const selectResponse = await fetch(`${cleanUrl}/rest/v1/keep_alive_logs?select=id,pinged_at&limit=1`, {
      method: 'GET',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json'
      }
    });

    // 2. Insere um novo registro de pulso/ping no banco de dados
    const insertResponse = await fetch(`${cleanUrl}/rest/v1/keep_alive_logs`, {
      method: 'POST',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=minimal'
      },
      body: JSON.stringify({
        source: 'vercel_cron_keep_alive',
        status: 'active',
        pinged_at: new Date().toISOString()
      })
    });

    // 3. Autolimpeza periódica: remove logs com mais de 15 dias para manter o banco leve (< 1 MB)
    try {
      const fifteenDaysAgo = new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString();
      await fetch(`${cleanUrl}/rest/v1/keep_alive_logs?pinged_at=lt.${fifteenDaysAgo}`, {
        method: 'DELETE',
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`,
          'Content-Type': 'application/json'
        }
      });
    } catch (cleanErr) {
      // Ignora erro de limpeza se tabela não suportar delete anônimo
    }

    const isSuccess = selectResponse.ok || insertResponse.ok;

    return res.status(200).json({
      success: isSuccess,
      status: 'active',
      database: 'Supabase mantido ativo e otimizado com sucesso!',
      readStatus: selectResponse.status,
      writeStatus: insertResponse.status,
      timestamp: new Date().toISOString()
    });
  } catch (error) {
    console.error('Erro no ping keep-alive Supabase:', error);
    return res.status(500).json({
      success: false,
      error: error.message,
      timestamp: new Date().toISOString()
    });
  }
}
