import fs from 'node:fs';

const files = ['admin.html', 'login.html', 'index.html', 'noticias.html', 'seguranca.html'];
let totalErrors = 0;

for (const f of files) {
  try {
    const html = fs.readFileSync(f, 'utf8');
    const scriptMatches = html.match(/<script[\s\S]*?<\/script>/gi) || [];
    let idx = 0;
    for (const s of scriptMatches) {
      idx++;
      if (s.includes('src=')) continue;
      const code = s.replace(/<script[^>]*>|<\/script>/gi, '');
      try {
        new Function(code);
      } catch (err) {
        console.error(`✖ ERROR in ${f} (script #${idx}): ${err.message}`);
        totalErrors++;
      }
    }
  } catch (e) {
    console.error(`Error reading ${f}:`, e.message);
    totalErrors++;
  }
}

if (totalErrors === 0) {
  console.log('✔ All HTML script blocks parsed without syntax errors!');
} else {
  console.log(`✖ Total script syntax errors found: ${totalErrors}`);
}
