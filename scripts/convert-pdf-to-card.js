import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { spawn } from 'node:child_process';

const PORT = 8989;
const PDF_PATH = 'C:/Users/PC/Desktop/Carteira Atleta.pdf';
const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const ARTIFACTS_DIR = 'C:/Users/PC/.gemini/antigravity/brain/fd21e61d-e9a9-4f46-9d78-e9849817531c';

if (!fs.existsSync(PDF_PATH)) {
  console.error('ERRO: Arquivo não encontrado:', PDF_PATH);
  process.exit(1);
}

const pdfBytes = fs.readFileSync(PDF_PATH);
const pdfBase64 = pdfBytes.toString('base64');
console.log(`Lido ${PDF_PATH} (${pdfBytes.length} bytes, base64 length: ${pdfBase64.length})`);

let chromeProcess = null;

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Render Card PDF</title>
</head>
<body style="margin:0; background:#000;">
  <div id="status" style="color:white; font-family:sans-serif; padding:20px;">Carregando PDF.js...</div>
  <script type="module">
    import * as pdfjsLib from '/pdfjs/pdf.min.mjs';
    pdfjsLib.GlobalWorkerOptions.workerSrc = '/pdfjs/pdf.worker.min.mjs';

    async function logMsg(msg) {
      document.getElementById('status').textContent = msg;
      await fetch('/log', { method: 'POST', body: msg });
    }

    async function render() {
      try {
        await logMsg('Decodificando base64 do PDF...');
        const binaryString = atob(${JSON.stringify(pdfBase64)});
        const len = binaryString.length;
        const bytes = new Uint8Array(len);
        for (let i = 0; i < len; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }

        await logMsg('Abrindo documento com PDF.js...');
        const loadingTask = pdfjsLib.getDocument({ data: bytes });
        const pdf = await loadingTask.promise;
        await logMsg('Obtendo Página 1...');
        const page = await pdf.getPage(1);

        // 1. Renderizar versão padrão 1050x662 (CR80)
        const unscaledViewport = page.getViewport({ scale: 1 });
        const scaleX = 1050 / unscaledViewport.width;
        const scaleY = 662 / unscaledViewport.height;

        await logMsg('Renderizando canvas 1050x662...');
        const canvas1050 = document.createElement('canvas');
        canvas1050.width = 1050;
        canvas1050.height = 662;
        const ctx1050 = canvas1050.getContext('2d', { alpha: false });
        ctx1050.imageSmoothingEnabled = true;
        ctx1050.imageSmoothingQuality = 'high';

        const viewport1050 = page.getViewport({ scale: Math.max(scaleX, scaleY) });
        const renderContext1050 = {
          canvasContext: ctx1050,
          viewport: viewport1050,
          transform: [scaleX, 0, 0, scaleY, 0, 0]
        };
        await page.render(renderContext1050).promise;
        const dataUrl1050 = canvas1050.toDataURL('image/png');

        // 2. Renderizar versão HD 2100x1324 (Ultra Alta Resolução 300 DPI)
        await logMsg('Renderizando canvas HD 2100x1324...');
        const canvasHD = document.createElement('canvas');
        canvasHD.width = 2100;
        canvasHD.height = 1324;
        const ctxHD = canvasHD.getContext('2d', { alpha: false });
        ctxHD.imageSmoothingEnabled = true;
        ctxHD.imageSmoothingQuality = 'high';

        const scaleX_HD = 2100 / unscaledViewport.width;
        const scaleY_HD = 1324 / unscaledViewport.height;
        const viewportHD = page.getViewport({ scale: Math.max(scaleX_HD, scaleY_HD) });
        const renderContextHD = {
          canvasContext: ctxHD,
          viewport: viewportHD,
          transform: [scaleX_HD, 0, 0, scaleY_HD, 0, 0]
        };
        await page.render(renderContextHD).promise;
        const dataUrlHD = canvasHD.toDataURL('image/png');

        await logMsg('Enviando dados gerados para /save...');
        await fetch('/save', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            dataUrl1050,
            dataUrlHD,
            originalWidth: unscaledViewport.width,
            originalHeight: unscaledViewport.height
          })
        });

        document.getElementById('status').textContent = 'CONCLUÍDO COM SUCESSO!';
      } catch (err) {
        console.error(err);
        await fetch('/error', {
          method: 'POST',
          headers: { 'Content-Type': 'text/plain' },
          body: String(err && err.stack ? err.stack : err)
        });
      }
    }

    render();
  </script>
</body>
</html>`);
  } else if (req.url.startsWith('/pdfjs/')) {
    const filename = path.basename(req.url);
    const filePath = path.join('node_modules', 'pdfjs-dist', 'legacy', 'build', filename);
    if (fs.existsSync(filePath)) {
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  } else if (req.url === '/log' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      console.log('BROWSER LOG:', body);
      res.writeHead(200);
      res.end('OK');
    });
  } else if (req.url === '/save' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      try {
        const payload = JSON.parse(body);
        const { dataUrl1050, dataUrlHD, originalWidth, originalHeight } = payload;
        console.log(`Dimensões originais do PDF: ${originalWidth} x ${originalHeight}`);

        const buf1050 = Buffer.from(dataUrl1050.replace(/^data:image\/png;base64,/, ''), 'base64');
        const bufHD = Buffer.from(dataUrlHD.replace(/^data:image\/png;base64,/, ''), 'base64');

        // Salvar em assets/
        fs.writeFileSync('assets/Carteira_Atleta_1050x662.png', buf1050);
        fs.writeFileSync('assets/Carteira_Atleta_HD.png', bufHD);
        fs.writeFileSync('Carteira_Atleta_HD.png', bufHD);
        fs.copyFileSync(PDF_PATH, 'assets/Carteira Atleta.pdf');

        // Salvar também no diretório de artefatos para visualização
        const artifactPath = path.join(ARTIFACTS_DIR, 'nova_carteira_atleta_renderizada.png');
        try {
          fs.writeFileSync(artifactPath, buf1050);
          console.log(`Salvo artefato de visualização em: ${artifactPath}`);
        } catch (e) {
          console.warn('Erro ao salvar no diretório de artefatos:', e.message);
        }

        // Gerar SVG que embute o PNG de alta resolução com bordas arredondadas CR80
        const svgContent = `<svg id="fpeftSvgTemplate" width="1050" height="662" viewBox="0 0 1050 662" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="cardRoundedClip">
      <rect width="1050" height="662" rx="34" />
    </clipPath>
  </defs>
  <g clip-path="url(#cardRoundedClip)">
    <image width="1050" height="662" preserveAspectRatio="none" href="${dataUrlHD}" xlink:href="${dataUrlHD}" />
  </g>
</svg>`;

        fs.writeFileSync('assets/Carteira_Atleta_Template_1050x662.svg', svgContent, 'utf8');
        fs.writeFileSync('Carteira_Atleta_Template_1050x662.svg', svgContent, 'utf8');

        // Gerar assets/carteira_template.js e php/assets/carteira_template.js
        const jsContent = `/* Template Oficial FPEFT CR80 gerado a partir de Carteira Atleta.pdf */
window.OFFICIAL_FPEFT_SVG_TEMPLATE = ${JSON.stringify(svgContent)};
window.OFFICIAL_FPEFT_BG_DATA_URL = ${JSON.stringify(dataUrlHD)};
`;
        fs.writeFileSync('assets/carteira_template.js', jsContent, 'utf8');
        fs.writeFileSync('carteira_template.js', jsContent, 'utf8');

        console.log('✔ Carteira Atleta_1050x662.png gerada com sucesso! (' + buf1050.length + ' bytes)');
        console.log('✔ Carteira_Atleta_HD.png gerada com sucesso! (' + bufHD.length + ' bytes)');
        console.log('✔ Carteira_Atleta_Template_1050x662.svg atualizada!');
        console.log('✔ carteira_template.js atualizado com nova arte vetorial fiel!');

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ success: true }));

        setTimeout(() => {
          console.log('Finalizando processo e servidor.');
          if (chromeProcess) {
            try { chromeProcess.kill(); } catch (e) {}
          }
          server.close();
          process.exit(0);
        }, 1000);
      } catch (err) {
        console.error('Erro ao processar /save:', err);
        res.writeHead(500);
        res.end(err.message);
      }
    });
  } else if (req.url === '/error' && req.method === 'POST') {
    let body = '';
    req.on('data', chunk => body += chunk);
    req.on('end', () => {
      console.error('ERRO RECEBIDO DO NAVEGADOR:\n', body);
      res.writeHead(200);
      res.end('OK');
      if (chromeProcess) {
        try { chromeProcess.kill(); } catch (e) {}
      }
      server.close();
      process.exit(1);
    });
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

server.listen(PORT, () => {
  console.log(`Servidor de renderização ouvindo em http://localhost:${PORT}/`);
  const chromeArgs = [
    '--headless=new',
    '--disable-gpu',
    '--no-sandbox',
    '--disable-dev-shm-usage',
    `http://localhost:${PORT}/`
  ];
  console.log('Iniciando Chrome headless...');
  chromeProcess = spawn(CHROME_PATH, chromeArgs, { stdio: 'inherit' });
  chromeProcess.on('error', (err) => {
    console.error('Falha ao iniciar Chrome:', err);
  });
});
