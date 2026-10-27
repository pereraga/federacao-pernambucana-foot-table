import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

const syncPairs = [
  {
    source: path.join(repoRoot, 'admin.html'),
    targets: [
      path.join(repoRoot, 'php', 'admin.php'),
      'C:/Users/PC/Desktop/federacao-foot-table/php/admin.php',
      'C:/Users/PC/Desktop/admin.html',
      'C:/Users/PC/Desktop/php/admin.php'
    ]
  },
  {
    source: path.join(repoRoot, 'login.html'),
    targets: [
      path.join(repoRoot, 'php', 'login.php'),
      'C:/Users/PC/Desktop/federacao-foot-table/php/login.php',
      'C:/Users/PC/Desktop/login.html',
      'C:/Users/PC/Desktop/php/login.php'
    ]
  },
  {
    source: path.join(repoRoot, 'index.html'),
    targets: [
      path.join(repoRoot, 'php', 'index.php'),
      'C:/Users/PC/Desktop/federacao-foot-table/php/index.php',
      'C:/Users/PC/Desktop/index.html',
      'C:/Users/PC/Desktop/php/index.php'
    ]
  },
  {
    source: path.join(repoRoot, 'assets', 'carteira_template.js'),
    targets: [
      path.join(repoRoot, 'carteira_template.js'),
      path.join(repoRoot, 'php', 'carteira_template.js'),
      path.join(repoRoot, 'php', 'assets', 'carteira_template.js'),
      'C:/Users/PC/Desktop/carteira_template.js',
      'C:/Users/PC/Desktop/assets/carteira_template.js',
      'C:/Users/PC/Desktop/federacao-foot-table/carteira_template.js',
      'C:/Users/PC/Desktop/federacao-foot-table/php/carteira_template.js',
      'C:/Users/PC/Desktop/federacao-foot-table/php/assets/carteira_template.js',
      'C:/Users/PC/Desktop/php/carteira_template.js',
      'C:/Users/PC/Desktop/php/assets/carteira_template.js'
    ]
  },
  {
    source: path.join(repoRoot, 'assets', 'Carteira_Atleta_HD.png'),
    targets: [
      path.join(repoRoot, 'Carteira_Atleta_HD.png'),
      path.join(repoRoot, 'php', 'Carteira_Atleta_HD.png'),
      path.join(repoRoot, 'php', 'assets', 'Carteira_Atleta_HD.png'),
      'C:/Users/PC/Desktop/Carteira_Atleta_HD.png',
      'C:/Users/PC/Desktop/assets/Carteira_Atleta_HD.png',
      'C:/Users/PC/Desktop/federacao-foot-table/Carteira_Atleta_HD.png',
      'C:/Users/PC/Desktop/federacao-foot-table/php/Carteira_Atleta_HD.png',
      'C:/Users/PC/Desktop/federacao-foot-table/php/assets/Carteira_Atleta_HD.png',
      'C:/Users/PC/Desktop/php/Carteira_Atleta_HD.png',
      'C:/Users/PC/Desktop/php/assets/Carteira_Atleta_HD.png'
    ]
  },
  {
    source: path.join(repoRoot, 'assets', 'Carteira_Atleta_Template_1050x662.svg'),
    targets: [
      path.join(repoRoot, 'Carteira_Atleta_Template_1050x662.svg'),
      path.join(repoRoot, 'php', 'Carteira_Atleta_Template_1050x662.svg'),
      path.join(repoRoot, 'php', 'assets', 'Carteira_Atleta_Template_1050x662.svg'),
      'C:/Users/PC/Desktop/Carteira_Atleta_Template_1050x662.svg',
      'C:/Users/PC/Desktop/assets/Carteira_Atleta_Template_1050x662.svg',
      'C:/Users/PC/Desktop/federacao-foot-table/Carteira_Atleta_Template_1050x662.svg',
      'C:/Users/PC/Desktop/federacao-foot-table/php/Carteira_Atleta_Template_1050x662.svg',
      'C:/Users/PC/Desktop/federacao-foot-table/php/assets/Carteira_Atleta_Template_1050x662.svg',
      'C:/Users/PC/Desktop/php/Carteira_Atleta_Template_1050x662.svg',
      'C:/Users/PC/Desktop/php/assets/Carteira_Atleta_Template_1050x662.svg'
    ]
  },
  {
    source: path.join(repoRoot, 'assets', 'assinatura_diretor.png'),
    targets: [
      path.join(repoRoot, 'assinatura_diretor.png'),
      path.join(repoRoot, 'php', 'assets', 'assinatura_diretor.png'),
      'C:/Users/PC/Desktop/assinatura_diretor.png',
      'C:/Users/PC/Desktop/assets/assinatura_diretor.png',
      'C:/Users/PC/Desktop/federacao-foot-table/php/assets/assinatura_diretor.png',
      'C:/Users/PC/Desktop/php/assets/assinatura_diretor.png'
    ]
  },
  {
    source: path.join(repoRoot, 'assets', 'qrcode.min.js'),
    targets: [
      path.join(repoRoot, 'qrcode.min.js'),
      path.join(repoRoot, 'php', 'assets', 'qrcode.min.js'),
      'C:/Users/PC/Desktop/qrcode.min.js',
      'C:/Users/PC/Desktop/assets/qrcode.min.js',
      'C:/Users/PC/Desktop/federacao-foot-table/php/assets/qrcode.min.js',
      'C:/Users/PC/Desktop/php/assets/qrcode.min.js'
    ]
  }
];

// 1. Sincroniza arquivos de código e arte chave
for (const pair of syncPairs) {
  if (!fs.existsSync(pair.source)) {
    console.warn(`Source file not found: ${pair.source}`);
    continue;
  }
  const content = fs.readFileSync(pair.source);
  for (const target of pair.targets) {
    try {
      const targetDir = path.dirname(target);
      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }
      fs.writeFileSync(target, content);
      console.log(`✔ Synced mirror: ${target}`);
    } catch (err) {
      console.warn(`✖ Failed to sync ${target}:`, err.message);
    }
  }
}

// 2. Sincroniza espelho completo de toda a pasta assets para o Desktop e PHP
const assetsSourceDir = path.join(repoRoot, 'assets');
const targetAssetsDirs = [
  'C:/Users/PC/Desktop/assets',
  'C:/Users/PC/Desktop/php/assets',
  path.join(repoRoot, 'php', 'assets')
];

if (fs.existsSync(assetsSourceDir)) {
  const assetFiles = fs.readdirSync(assetsSourceDir);
  for (const tDir of targetAssetsDirs) {
    try {
      if (!fs.existsSync(tDir)) {
        fs.mkdirSync(tDir, { recursive: true });
      }
      for (const f of assetFiles) {
        const sPath = path.join(assetsSourceDir, f);
        if (fs.statSync(sPath).isFile()) {
          const dPath = path.join(tDir, f);
          fs.copyFileSync(sPath, dPath);
        }
      }
      console.log(`✔ Complete assets folder mirrored to: ${tDir}`);
    } catch (err) {
      console.warn(`✖ Failed mirroring assets to ${tDir}:`, err.message);
    }
  }
}

console.log('All mirrors synchronized successfully.');
