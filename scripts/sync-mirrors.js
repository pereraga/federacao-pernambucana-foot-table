import fs from 'node:fs';

const sourcePath = 'C:/Users/PC/Desktop/federacao-foot-table/admin.html';
const content = fs.readFileSync(sourcePath, 'utf8');

const targets = [
  'C:/Users/PC/Desktop/federacao-foot-table/php/admin.php',
  'C:/Users/PC/Desktop/admin.html',
  'C:/Users/PC/Desktop/php/admin.php'
];

for (const target of targets) {
  try {
    fs.writeFileSync(target, content, 'utf8');
    console.log(`✔ Synced mirror: ${target}`);
  } catch (err) {
    console.warn(`✖ Failed to sync ${target}:`, err.message);
  }
}

console.log('Mirror synchronization complete.');
