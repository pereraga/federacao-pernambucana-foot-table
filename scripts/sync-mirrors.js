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
      'C:/Users/PC/Desktop/assets/carteira_template.js',
      'C:/Users/PC/Desktop/federacao-foot-table/carteira_template.js',
      'C:/Users/PC/Desktop/federacao-foot-table/php/carteira_template.js',
      'C:/Users/PC/Desktop/federacao-foot-table/php/assets/carteira_template.js',
      'C:/Users/PC/Desktop/php/carteira_template.js',
      'C:/Users/PC/Desktop/php/assets/carteira_template.js'
    ]
  }
];

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
        continue;
      }
      fs.writeFileSync(target, content);
      console.log(`✔ Synced mirror: ${target}`);
    } catch (err) {
      console.warn(`✖ Failed to sync ${target}:`, err.message);
    }
  }
}

console.log('All mirrors synchronized successfully.');
