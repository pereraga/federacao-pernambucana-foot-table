import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const action = (process.argv[2] || '').toLowerCase();
const isDisable = action === 'desabilitar' || action === 'off' || action === 'down' || action === 'derrubar';

const indexHtmlPath = path.join(rootDir, 'index.html');
const indexOrigPath = path.join(rootDir, 'index.original.html');
const manutencaoPath = path.join(rootDir, 'manutencao.html');
const vercelJsonPath = path.join(rootDir, 'vercel.json');
const middlewarePath = path.join(rootDir, 'middleware.ts');

const timestamp = new Date().toISOString();

async function updateDatabaseStatus(status) {
  try {
    const { createClient } = await import('@supabase/supabase-js');
    const db1 = createClient('https://qvnsahvdjhimlmtqrnif.supabase.co', 'sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z');
    const db2 = createClient('https://xvqsysfqbkfsogkwtbal.supabase.co', 'sb_publishable_2T1UD0EYvVBlIqCvnX5VHw_K6mmAn3M');

    await Promise.allSettled([
      db1.from('configuracoes').upsert([{ chave: 'site_status', valor: status, updated_at: timestamp }], { onConflict: 'chave' }),
      db2.from('configuracoes').upsert([{ chave: 'site_status', valor: status, updated_at: timestamp }], { onConflict: 'chave' })
    ]);
  } catch (e) {
    // Falha de rede não impede o deploy do Vercel
  }
}

if (isDisable) {
  console.log('============================================================');
  console.log(' DERRUBANDO O SITE EXCLUSIVO: https://fpeft.vercel.app/');
  console.log('============================================================');

  // 1. Salva cópia de segurança de index.html se ainda não existir
  if (fs.existsSync(indexHtmlPath)) {
    const curIndex = fs.readFileSync(indexHtmlPath, 'utf-8');
    if (!curIndex.includes('Portal Temporariamente Indisponível')) {
      fs.writeFileSync(indexOrigPath, curIndex, 'utf-8');
    }
  }

  // 2. Substitui index.html pelo conteúdo de manutenção
  if (fs.existsSync(manutencaoPath)) {
    const manutencaoHtml = fs.readFileSync(manutencaoPath, 'utf-8');
    fs.writeFileSync(indexHtmlPath, manutencaoHtml, 'utf-8');
  }

  // 3. Atualiza vercel.json com redirecionamento forçado para /manutencao.html
  if (fs.existsSync(vercelJsonPath)) {
    try {
      const vJson = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf-8'));
      vJson.redirects = [
        {
          source: '/php/(.*)',
          destination: '/manutencao.html',
          permanent: false
        },
        {
          source: '/((?!manutencao\\.html|assets/).*)',
          destination: '/manutencao.html',
          permanent: false
        }
      ];
      fs.writeFileSync(vercelJsonPath, JSON.stringify(vJson, null, 2), 'utf-8');
    } catch (err) {
      console.error('Erro ao atualizar vercel.json:', err);
    }
  }

  // 4. Ativa modo manutenção em middleware.ts
  if (fs.existsSync(middlewarePath)) {
    let mw = fs.readFileSync(middlewarePath, 'utf-8');
    mw = mw.replace(/export const MAINTENANCE_MODE = (true|false)(;.*)?/g, `export const MAINTENANCE_MODE = true; // status: DESABILITADO em ${timestamp}`);
    fs.writeFileSync(middlewarePath, mw, 'utf-8');
  }

  // 5. Registra status no banco de dados (sem alterar atletas)
  await updateDatabaseStatus('desabilitado');

  console.log(' - index.html: ALTERADO para tela de manutenção');
  console.log(' - vercel.json: REDIRECIONAMENTO ATIVADO (qualquer rota -> manutenção)');
  console.log(' - middleware.ts: MAINTENANCE_MODE = true');
  console.log(' - Supabase: status marcado como "desabilitado"');
  console.log('============================================================');
  console.log(' [OK] CONFIGURAÇÃO CONCLUÍDA: https://fpeft.vercel.app/ está pronto para ser publicado como DESABILITADO.');
  console.log('============================================================');
} else {
  console.log('============================================================');
  console.log(' REATIVANDO O SITE EXCLUSIVO: https://fpeft.vercel.app/');
  console.log('============================================================');

  // 1. Restaura index.html a partir de index.original.html
  if (fs.existsSync(indexOrigPath)) {
    const originalHtml = fs.readFileSync(indexOrigPath, 'utf-8');
    fs.writeFileSync(indexHtmlPath, originalHtml, 'utf-8');
    try { fs.unlinkSync(indexOrigPath); } catch {}
  }

  // 2. Restaura vercel.json (remove o redirecionamento de manutenção)
  if (fs.existsSync(vercelJsonPath)) {
    try {
      const vJson = JSON.parse(fs.readFileSync(vercelJsonPath, 'utf-8'));
      vJson.redirects = [
        {
          source: '/php/(.*)',
          destination: '/',
          permanent: false
        }
      ];
      fs.writeFileSync(vercelJsonPath, JSON.stringify(vJson, null, 2), 'utf-8');
    } catch (err) {
      console.error('Erro ao restaurar vercel.json:', err);
    }
  }

  // 3. Desativa modo manutenção em middleware.ts
  if (fs.existsSync(middlewarePath)) {
    let mw = fs.readFileSync(middlewarePath, 'utf-8');
    mw = mw.replace(/export const MAINTENANCE_MODE = (true|false)(;.*)?/g, `export const MAINTENANCE_MODE = false; // status: HABILITADO em ${timestamp}`);
    fs.writeFileSync(middlewarePath, mw, 'utf-8');
  }

  // 4. Registra status no banco de dados (sem alterar atletas)
  await updateDatabaseStatus('habilitado');

  console.log(' - index.html: RESTAURADO para o portal oficial original');
  console.log(' - vercel.json: REDIRECIONAMENTOS DE MANUTENÇÃO REMOVIDOS');
  console.log(' - middleware.ts: MAINTENANCE_MODE = false');
  console.log(' - Supabase: status marcado como "habilitado"');
  console.log('============================================================');
  console.log(' [OK] O site https://fpeft.vercel.app/ está pronto para ser publicado ONLINE.');
  console.log('============================================================');
}
