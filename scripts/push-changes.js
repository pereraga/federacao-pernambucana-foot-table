import { execSync } from 'node:child_process';

console.log('Adicionando arquivos ao git...');
execSync('git add -A', { stdio: 'inherit' });

console.log('Realizando commit...');
execSync('git commit -m "feat(camera): inverter camera para padrao espelho e alternador horizontal"', { stdio: 'inherit' });

console.log('Enviando para origin main...');
execSync('git push origin main', { stdio: 'inherit' });

console.log('Enviando para fpeft main...');
execSync('git push fpeft main', { stdio: 'inherit' });

console.log('Concluído com sucesso!');
