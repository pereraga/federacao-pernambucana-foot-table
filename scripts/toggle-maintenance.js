import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const middlewarePath = path.join(rootDir, 'middleware.ts');

const arg = (process.argv[2] || '').toLowerCase();
const enableMaintenance = arg !== 'off' && arg !== 'disable' && arg !== 'reativar';

let content = fs.readFileSync(middlewarePath, 'utf-8');

if (enableMaintenance) {
  content = content.replace(
    /export const MAINTENANCE_MODE = (true|false);/g,
    'export const MAINTENANCE_MODE = true;'
  );
  fs.writeFileSync(middlewarePath, content, 'utf-8');
  console.log('------------------------------------------------------------');
  console.log(' [OK] MODO MANUTENÇÃO ATIVADO!');
  console.log(' - Site online (Vercel): OFFLINE temporário (Aviso 503)');
  console.log(' - Localhost (127.0.0.1:3000): 100% LIBERADO para testes');
  console.log('------------------------------------------------------------');
} else {
  content = content.replace(
    /export const MAINTENANCE_MODE = (true|false);/g,
    'export const MAINTENANCE_MODE = false;'
  );
  fs.writeFileSync(middlewarePath, content, 'utf-8');
  console.log('------------------------------------------------------------');
  console.log(' [OK] MODO MANUTENÇÃO DESATIVADO!');
  console.log(' - Site online (Vercel): REATIVADO e online para o público!');
  console.log('------------------------------------------------------------');
}
