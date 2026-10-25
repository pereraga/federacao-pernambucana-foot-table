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
  },
  {
    source: 'C:/Users/PC/Desktop/federacao-foot-table/index.html',
    targets: [
      'C:/Users/PC/Desktop/federacao-foot-table/php/index.php',
      'C:/Users/PC/Desktop/index.html',
      'C:/Users/PC/Desktop/php/index.php'
    ]
  },
  {
    source: 'C:/Users/PC/Desktop/federacao-foot-table/assets/carteira_template.js',
    targets: [
      'C:/Users/PC/Desktop/assets/carteira_template.js',
      'C:/Users/PC/Desktop/federacao-foot-table/carteira_template.js',
      'C:/Users/PC/Desktop/federacao-foot-table/php/carteira_template.js',
      'C:/Users/PC/Desktop/federacao-foot-table/php/assets/carteira_template.js',
      'C:/Users/PC/Desktop/php/carteira_template.js',
      'C:/Users/PC/Desktop/php/assets/carteira_template.js'
    ]
  },
  {
    source: 'C:/Users/PC/Desktop/federacao-foot-table/assets/Carteira_Atleta_HD.png',
    targets: [
      'C:/Users/PC/Desktop/assets/Carteira_Atleta_HD.png',
      'C:/Users/PC/Desktop/federacao-foot-table/Carteira_Atleta_HD.png',
      'C:/Users/PC/Desktop/federacao-foot-table/php/assets/Carteira_Atleta_HD.png',
      'C:/Users/PC/Desktop/php/assets/Carteira_Atleta_HD.png'
    ]
  },
  {
    source: 'C:/Users/PC/Desktop/federacao-foot-table/assets/Carteira_Atleta_1050x662.png',
    targets: [
      'C:/Users/PC/Desktop/assets/Carteira_Atleta_1050x662.png',
      'C:/Users/PC/Desktop/federacao-foot-table/php/assets/Carteira_Atleta_1050x662.png',
      'C:/Users/PC/Desktop/php/assets/Carteira_Atleta_1050x662.png'
    ]
  },
  {
    source: 'C:/Users/PC/Desktop/federacao-foot-table/assets/Carteira_Atleta_Template_1050x662.svg',
    targets: [
      'C:/Users/PC/Desktop/assets/Carteira_Atleta_Template_1050x662.svg',
      'C:/Users/PC/Desktop/federacao-foot-table/Carteira_Atleta_Template_1050x662.svg',
      'C:/Users/PC/Desktop/federacao-foot-table/php/assets/Carteira_Atleta_Template_1050x662.svg',
      'C:/Users/PC/Desktop/php/assets/Carteira_Atleta_Template_1050x662.svg'
    ]
  },
  {
    source: 'C:/Users/PC/Desktop/federacao-foot-table/assets/Carteira Atleta.pdf',
    targets: [
      'C:/Users/PC/Desktop/federacao-foot-table/php/assets/Carteira Atleta.pdf',
      'C:/Users/PC/Desktop/php/assets/Carteira Atleta.pdf'
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
