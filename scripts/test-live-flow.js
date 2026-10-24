async function testFlow() {
  const loginRes = await fetch('https://fpeft.vercel.app/api/auth/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: 'gabrielacessor@foot-table.pe.org', password: 'admin' })
  });
  console.log('1. /api/auth/login status:', loginRes.status);
  const rawCookie = loginRes.headers.get('set-cookie') || '';
  const cookieVal = rawCookie.split(';')[0];
  console.log('2. Session Cookie:', cookieVal ? 'ACQUIRED' : 'MISSING');

  const adminRes = await fetch('https://fpeft.vercel.app/admin.html', {
    headers: { 'Cookie': cookieVal }
  });
  console.log('3. Accessing /admin.html with session status:', adminRes.status);
  if (adminRes.status === 200) {
    console.log('✔ Full login and admin access verified successfully in production!');
  } else {
    console.error('✖ Admin access failed:', adminRes.status);
  }
}

testFlow();
