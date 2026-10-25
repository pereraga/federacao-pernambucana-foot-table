import { execSync } from 'node:child_process';

console.log('Adicionando arquivos...');
execSync('git add -A', { stdio: 'inherit' });

console.log('Criando commit...');
execSync('git commit -m "fix(auth): remover bloqueios no login e ocultar abas tecnicas para conta de Adriano"', { stdio: 'inherit' });

console.log('Enviando para origin main...');
execSync('git push origin main', { stdio: 'inherit' });

console.log('Enviando para fpeft main...');
execSync('git push fpeft main', { stdio: 'inherit' });

console.log('Finalizado com sucesso!');
