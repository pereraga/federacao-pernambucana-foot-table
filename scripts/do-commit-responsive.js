import { execSync } from 'node:child_process';

const cwd = 'C:/Users/PC/Desktop/federacao-foot-table';
console.log(execSync('git add -A', { cwd }).toString());
console.log(execSync('git commit -m "feat(ui): responsividade mobile e tablet, padronizacao de botoes e restricao de visualizacao por cargo"', { cwd }).toString());
console.log(execSync('git push origin main', { cwd }).toString());
console.log(execSync('git push fpeft main', { cwd }).toString());
console.log('Successfully committed and pushed to origin and fpeft!');
