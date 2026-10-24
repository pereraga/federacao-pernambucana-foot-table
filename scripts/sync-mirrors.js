import fs from 'node:fs';

const syncPairs = [
  {
    source: 'C:/Users/PC/Desktop/federacao-foot-table/admin.html',
    targets: [
      'C:/Users/PC/Desktop/federacao-foot-table/php/admin.php',
      'C:/Users/PC/Desktop/admin.html',
      'C:/Users/PC/Desktop/php/admin.php'
    ]
  },
  {
    source: 'C:/Users/PC/Desktop/federacao-foot-table/login.html',
    targets: [
      'C:/Users/PC/Desktop/federacao-foot-table/php/login.php',
      'C:/Users/PC/Desktop/login.html',
      'C:/Users/PC/Desktop/php/login.php'
    ]
  }
];

for (const pair of syncPairs) {
  const content = fs.readFileSync(pair.source, 'utf8');
  for (const target of pair.targets) {
    try {
      fs.writeFileSync(target, content, 'utf8');
      console.log(`✔ Synced mirror: ${target}`);
    } catch (err) {
      console.warn(`✖ Failed to sync ${target}:`, err.message);
    }
  }
}

console.log('All mirrors synchronized successfully.');
