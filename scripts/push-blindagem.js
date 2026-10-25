import { execSync } from 'node:child_process';

console.log('Adicionando arquivos...');
execSync('git add -A', { stdio: 'inherit' });

console.log('Criando commit...');
execSync('git commit -m "feat: blindagem do banco de dados, sincronizacao direta via Vercel e protecao de atletas"', { stdio: 'inherit' });

console.log('Push origin main...');
execSync('git push origin main', { stdio: 'inherit' });

console.log('Push fpeft main...');
execSync('git push fpeft main', { stdio: 'inherit' });

console.log('Pronto!');
