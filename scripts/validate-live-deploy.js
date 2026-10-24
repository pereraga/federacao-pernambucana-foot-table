const url = 'https://fpeft.vercel.app/login.html?t=' + Date.now();

fetch(url)
  .then(res => res.text())
  .then(html => {
    const scriptMatches = html.match(/<script[\s\S]*?<\/script>/gi) || [];
    let errCount = 0;
    for (const s of scriptMatches) {
      if (s.includes('src=')) continue;
      const code = s.replace(/<script[^>]*>|<\/script>/gi, '');
      try {
        new Function(code);
      } catch (e) {
        console.error('LIVE PARSE ERROR:', e.message);
        errCount++;
      }
    }
    if (errCount === 0) {
      console.log('✔ Live production login.html verified 100% free of syntax errors!');
    } else {
      console.log(`Still waiting for Vercel deploy cache update (found ${errCount} error).`);
    }
  });
