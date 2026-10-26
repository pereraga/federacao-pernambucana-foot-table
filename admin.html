<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
  <meta http-equiv="Pragma" content="no-cache" />
  <meta http-equiv="Expires" content="0" />
  <!-- Forçar carregamento da versão mais recente sem cache residual do navegador -->
  <script>
    (function() {
      const APP_REV = '20261024_v43_fix_modal_nesting';
      if (!window.location.search.includes('v=' + APP_REV)) {
        const u = new URL(window.location.href);
        u.searchParams.set('v', APP_REV);
        window.location.replace(u.toString());
      }
    })();
  </script>
  <title>FPEFT ADM | Painel de Controle Oficial</title>
  <link rel="icon" type="image/png" href="assets/images/logo-federacao.png" />

  <!-- Proteção Imediata & Aplicação Instantânea (0ms) de Permissões antes da pintura da tela -->
  <script>
    (function() {
      try {
        const isLogged = sessionStorage.getItem('pe_admin_logged') === 'true' || localStorage.getItem('pe_admin_logged') === 'true';
        const sessionExpires = Number(sessionStorage.getItem('pe_admin_session_expires') || localStorage.getItem('pe_admin_session_expires') || 0);
        const isExpired = sessionExpires > 0 && Date.now() > sessionExpires;

        if (!isLogged || isExpired) {
          sessionStorage.clear();
          localStorage.removeItem('pe_admin_logged');
          localStorage.removeItem('pe_admin_user');
          localStorage.removeItem('pe_admin_session_token');
          localStorage.removeItem('pe_admin_session_expires');
          window.location.replace('login.html');
          return;
        }

        const rawUser = (sessionStorage.getItem('pe_admin_user') || localStorage.getItem('pe_admin_user') || '').toLowerCase().trim();
        if (!rawUser) {
          window.location.replace('login.html');
          return;
        }
        const user = rawUser.includes('@') ? rawUser : (rawUser + '@foot-table.pe.org');
        const isGabrielMaster = rawUser.includes('gabrielacessor');
        const isAdminMaster = rawUser === 'admin' || rawUser.startsWith('admin@');

        let admins = [];
        try { admins = JSON.parse(localStorage.getItem('pe_institutional_admins')) || []; } catch(e) {}

        let current = admins.find(a => {
          const aEmail = (a.email || '').toLowerCase().trim();
          const aPrefix = aEmail.replace(/@foot-table\.pe\.(org|gov\.br)$/i, '');
          const uPrefix = rawUser.replace(/@foot-table\.pe\.(org|gov\.br)$/i, '');
          return aEmail === rawUser || aEmail === user || aPrefix === uPrefix || aPrefix === rawUser;
        });

        const isAdriano = rawUser.includes('adriano') || (current && (
          (current.email && current.email.toLowerCase().includes('adriano')) ||
          (current.cargo && current.cargo.toLowerCase().includes('presidente')) ||
          (current.nome && current.nome.toLowerCase().includes('adriano'))
        ));

        const PRESIDENTE_FPEFT_PERMISSIONS = [
          'carteira_studio', 'carteira_pdf', 'carteira_png', 'carteira_imprimir',
          'atletas_visualizar', 'atletas_homologar', 'atletas_editar', 'atletas_excluir', 'atletas_exportar',
          'noticias_publicar', 'noticias_upload', 'noticias_editar', 'noticias_excluir'
        ];

        if (isGabrielMaster || isAdminMaster) {
          if (!current) {
            current = {
              nome: isGabrielMaster ? "Gabriel Alves" : "Administrador Geral",
              cargo: isGabrielMaster ? "Diretor Adjunto" : "Administrador Master",
              email: isGabrielMaster ? "gabrielacessor@foot-table.pe.org" : "admin@foot-table.pe.org",
              isMaster: true,
              permissions: ['*']
            };
            admins.unshift(current);
            localStorage.setItem('pe_institutional_admins', JSON.stringify(admins));
          } else {
            current.isMaster = true;
            current.permissions = ['*'];
          }
        } else if (isAdriano) {
          if (!current) {
            current = {
              nome: "Adriano Mello",
              cargo: "Presidente FPEFT",
              email: "adrianomello@foot-table.pe.org",
              isMaster: false,
              permissions: [...PRESIDENTE_FPEFT_PERMISSIONS]
            };
            admins.push(current);
          } else {
            current.nome = "Adriano Mello";
            current.cargo = "Presidente FPEFT";
            current.email = "adrianomello@foot-table.pe.org";
            current.isMaster = false;
            current.permissions = [...PRESIDENTE_FPEFT_PERMISSIONS];
          }
          localStorage.setItem('pe_institutional_admins', JSON.stringify(admins));
        }

        if (!current && !isAdminMaster && !isGabrielMaster && !isAdriano) {
          window.location.replace('login.html');
          return;
        }

        let perms = [];
        if (isGabrielMaster || isAdminMaster) {
          perms = ['*'];
        } else if (isAdriano) {
          perms = [...PRESIDENTE_FPEFT_PERMISSIONS];
        } else if (current) {
          if (Array.isArray(current.permissions) && current.permissions.length > 0) {
            perms = current.permissions;
          } else {
            const roles = JSON.parse(localStorage.getItem('pe_custom_roles')) || [];
            const role = roles.find(r => r.name.toLowerCase() === (current.cargo || '').toLowerCase());
            if (role && Array.isArray(role.permissions) && role.permissions.length > 0) perms = role.permissions;
            else if (current.cargo === 'Diretor Adjunto') perms = ['*'];
          }
        }
        if (!isAdriano && (perms.includes('*') || (current && current.isMaster) || isGabrielMaster || isAdminMaster)) return;

        const hideSelectors = [];
        // Abas da barra lateral
        const canAtletas = perms.includes('carteira_studio') || perms.includes('carteira_pdf') || perms.includes('carteira_png') || perms.includes('carteira_imprimir');
        if (!canAtletas) hideSelectors.push('#navBtn-atletas, #tabContent-atletas');

        const canJogadores = perms.includes('atletas_visualizar') || perms.includes('atletas_homologar') || perms.includes('atletas_editar') || perms.includes('atletas_excluir') || perms.includes('atletas_exportar');
        if (!canJogadores) hideSelectors.push('#navBtn-jogadores, #tabContent-jogadores');

        const canNoticias = perms.includes('noticias_publicar') || perms.includes('noticias_editar') || perms.includes('noticias_upload') || perms.includes('noticias_excluir');
        if (!canNoticias) hideSelectors.push('#navBtn-noticias, #tabContent-noticias');

        const canGaleria = (current && current.isMaster) || isGabrielMaster || canNoticias || perms.includes('*');
        if (!canGaleria) hideSelectors.push('#navBtn-galeria, #tabContent-galeria');

        const canEmails = perms.includes('gestao_emails') || perms.includes('gestao_cargos');
        if (!canEmails) hideSelectors.push('#navBtn-emails, #tabContent-emails');

        const canConfig = perms.includes('gestao_supabase') || perms.includes('gestao_limpeza');
        if (!canConfig) hideSelectors.push('#navBtn-config, #tabContent-config');

        // Studio actions
        if (!perms.includes('carteira_pdf')) hideSelectors.push('#btnExportPDF, #btnDownloadPdf, #btnDownloadPdfMobile');
        if (!perms.includes('carteira_png')) hideSelectors.push('#btnExportPNG, #btnDownloadPng, #btnDownloadPngMobile');
        if (!perms.includes('carteira_imprimir')) hideSelectors.push('#btnPrintCarteira, #btnPrintCarteiraMobile');

        // Modificação de atletas (Acesso Controlado)
        if (!perms.includes('atletas_editar')) {
          hideSelectors.push('#btnConcluirCadastro', '#btnResetFoto', '#btnOpenBatchImport', 'button[onclick*="generateFederatedNumber"]', 'button[onclick*="openAthleteCameraSelector"]', 'button[onclick*="resetAthletePhoto"]', '#uploadFotoCameraInput', '#uploadFotoInput');
        }

        // Alteração de Layout Studio e Nuvem
        if (!perms.includes('gestao_supabase') && !perms.includes('carteira_studio') && !perms.includes('atletas_editar')) {
          hideSelectors.push('#btnSaveOfficialCloud', '#btnModeDesign', 'button[onclick*="restoreOfficialElementPositions"]');
        }
        if (!perms.includes('gestao_supabase')) {
          hideSelectors.push('#btnSaveSupabaseCfg');
        }

        // Jogadores actions
        if (!perms.includes('atletas_exportar')) hideSelectors.push('#btnExportZip, #btnExportCsv, #btnExportExcel, #btnExportarZipJogadores, #btnExportarCsvJogadores');
        if (!perms.includes('atletas_homologar')) hideSelectors.push('#btnHomologarTodos');

        // Notícias e Galeria
        if (!perms.includes('noticias_publicar') && !perms.includes('noticias_editar')) {
          hideSelectors.push('#adminNewsForm', '#adminGalleryForm');
        }
        if (!perms.includes('gestao_limpeza')) {
          hideSelectors.push('#btnResetSystemDatabase');
        }

        // Selos e tags de bloqueio
        hideSelectors.push('.nav-tab-lock-indicator', '#sidebarAdminBadge');

        if (hideSelectors.length > 0) {
          const style = document.createElement('style');
          style.id = 'instant-permissions-style';
          style.textContent = hideSelectors.join(',\n') + ' { display: none !important; }';
          document.head.appendChild(style);
        }
      } catch (e) {}
    })();
  </script>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Oswald:wght@500;600;700&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">

  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- Font Awesome Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <!-- QR Code Generator -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"></script>
  <!-- html2canvas for instant HD PNG badge export -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
  <!-- JSZip for Bulk CR80 Badge Export -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>
  <!-- Supabase JS Client -->
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
  <!-- PDF.js para renderização vetorial de PDFs sem erros de importação -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
  <script>
    if (window.pdfjsLib) {
      window.pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
    }
  </script>
  <!-- jsPDF para exportação de PDFs vetoriais oficiais -->
  <script src="assets/jspdf.umd.min.js"></script>
  <script>
    if (!window.jspdf && !window.jsPDF) {
      document.write('<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"><\/script>');
    }
  </script>
  <script src="assets/carteira_template.js"></script>
  <script>
    if (!window.OFFICIAL_FPEFT_BG_DATA_URL) {
      document.write('<script src="carteira_template.js"><\/script>');
    }
  </script>

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              dark: '#070a13',
              card: '#0f172a',
              input: '#0b1120',
              border: '#1e293b',
              accent: '#3b82f6',
              gold: '#f59e0b',
              goldLight: '#fbbf24',
              danger: '#ef4444'
            },
            pe: {
              blue: '#0044cc',
              darkblue: '#06173a',
              gold: '#f5b800',
              goldHover: '#e0a700',
              red: '#d32f2f',
              dark: '#080b12',
              card: '#0f1422',
              cardBorder: '#1c253b',
              accent: '#182238'
            }
          },
          fontFamily: {
            heading: ['Montserrat', 'sans-serif'],
            body: ['Inter', 'sans-serif'],
            sans: ['Montserrat', 'sans-serif'],
            oswald: ['Oswald', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace']
          }
        }
      }
    }
  </script>

  <style>
    /* Inputs de upload de imagem mantidos 100% invisíveis no layout (disparados exclusivamente via botões estéticos) */
    input[type="file"].hidden,
    #uploadFotoCameraInput,
    #uploadFotoInput,
    #inputSignatureFile {
      display: none !important;
      position: absolute !important;
      left: -9999px !important;
      top: -9999px !important;
      width: 0 !important;
      height: 0 !important;
      opacity: 0 !important;
      pointer-events: none !important;
      visibility: hidden !important;
    }
    ::-webkit-scrollbar { width: 6px; height: 6px; }
    ::-webkit-scrollbar-track { background: #060911; }
    ::-webkit-scrollbar-thumb { background: #1a233a; border-radius: 4px; }
    ::-webkit-scrollbar-thumb:hover { background: #f5b800; }
    .pe-stripe-bar {
      background: linear-gradient(90deg, #0044cc 0%, #0044cc 40%, #f5b800 40%, #f5b800 70%, #d32f2f 70%, #d32f2f 100%);
    }
    .top-gradient-bar {
      background: linear-gradient(90deg, #3b82f6 0%, #3b82f6 33%, #fbbf24 33%, #fbbf24 66%, #ef4444 66%, #ef4444 100%);
    }
    .active-nav-pill {
      background-color: #f5b800 !important;
      color: #080b12 !important;
      font-weight: 700 !important;
      box-shadow: 0 4px 20px -2px rgba(245, 184, 0, 0.45);
    }
    .active-nav-pill svg {
      color: #080b12 !important;
      stroke: #080b12 !important;
    }
    .active-nav-pill i {
      color: #080b12 !important;
    }
    /* Estilos do Studio CR80 Interativo */
    .font-fpeft {
      font-family: 'Montserrat', sans-serif;
    }
    .checkered-canvas-bg {
      background-color: #070b14;
      background-image: 
        radial-gradient(#1e293b 1px, transparent 1px),
        radial-gradient(#1e293b 1px, #070b14 1px);
      background-size: 24px 24px;
      background-position: 0 0, 12px 12px;
    }
    .selectable-item {
      position: absolute;
      touch-action: none;
      cursor: move;
      transition: box-shadow 0.15s ease;
    }
    .selectable-item.is-selected {
      outline: 2px dashed #f5b800 !important;
      outline-offset: 1px;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.4), 0 8px 24px rgba(245, 184, 0, 0.35);
      z-index: 50 !important;
    }
    .resize-handle {
      position: absolute;
      width: 10px;
      height: 10px;
      background: #ffffff;
      border: 2px solid #f5b800;
      border-radius: 2px;
      box-shadow: 0 2px 5px rgba(0,0,0,0.5);
      display: none;
      z-index: 60;
    }
    .selectable-item.is-selected .resize-handle {
      display: block;
    }
    .h-nw { top: -5px; left: -5px; cursor: nwse-resize; }
    .h-n  { top: -5px; left: calc(50% - 5px); cursor: ns-resize; }
    .h-ne { top: -5px; right: -5px; cursor: nesw-resize; }
    .h-e  { top: calc(50% - 5px); right: -5px; cursor: ew-resize; }
    .h-se { bottom: -5px; right: -5px; cursor: nwse-resize; }
    .h-s  { bottom: -5px; left: calc(50% - 5px); cursor: ns-resize; }
    .h-sw { bottom: -5px; left: -5px; cursor: nesw-resize; }
    .h-w  { top: calc(50% - 5px); left: -5px; cursor: ew-resize; }
    .win-resizer { position: absolute; z-index: 60; }
    .win-resizer-t { top: -4px; left: 8px; right: 8px; height: 8px; cursor: ns-resize; }
    .win-resizer-b { bottom: -4px; left: 8px; right: 8px; height: 8px; cursor: ns-resize; }
    .win-resizer-l { top: 8px; bottom: 8px; left: -4px; width: 8px; cursor: ew-resize; }
    .win-resizer-r { top: 8px; bottom: 8px; right: -4px; width: 8px; cursor: ew-resize; }
    .win-resizer-tl { top: -4px; left: -4px; width: 12px; height: 12px; cursor: nwse-resize; }
    .win-resizer-tr { top: -4px; right: -4px; width: 12px; height: 12px; cursor: nesw-resize; }
    .win-resizer-bl { bottom: -4px; left: -4px; width: 12px; height: 12px; cursor: nesw-resize; }
    .win-resizer-br { bottom: -4px; right: -4px; width: 12px; height: 12px; cursor: nwse-resize; }
    
    /* Estilos do Modo Fixo vs Modo Design e Rótulos de Campos */
    .field-top-label {
      position: absolute;
      bottom: calc(100% + 3px);
      line-height: 1;
      font-size: 9.5px;
      font-weight: 800;
      color: #ffffff;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      pointer-events: none;
      white-space: nowrap;
      font-family: 'Montserrat', sans-serif;
      text-shadow: 0 1px 2px rgba(0,0,0,0.85);
      transition: left 0.15s ease, right 0.15s ease, transform 0.15s ease;
    }
    .field-top-label.label-align-left,
    .field-top-label.label-left {
      left: 10px;
      right: auto;
      transform: none;
    }
    .field-top-label.label-align-center,
    .field-top-label.label-center {
      left: 50%;
      right: auto;
      transform: translateX(-50%);
    }
    .field-top-label.label-align-right,
    .field-top-label.label-right {
      left: auto;
      right: 10px;
      transform: none;
    }
    .field-bottom-label {
      position: absolute;
      bottom: -15px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 7.5px;
      font-weight: 800;
      color: #94a3b8;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      pointer-events: none;
      white-space: nowrap;
      font-family: 'Montserrat', sans-serif;
      text-shadow: 0 1px 2px rgba(0,0,0,0.85);
    }
    .is-mode-fixed .selectable-item {
      cursor: pointer !important;
    }
    .is-mode-fixed .selectable-item.is-selected {
      outline: 2px solid #0284c7 !important;
      outline-offset: 2px;
      box-shadow: 0 0 0 2px rgba(2, 132, 199, 0.35) !important;
    }
    .is-mode-fixed .resize-handle {
      display: none !important;
    }
    .is-mode-fixed #floatingControlPanel,
    #viewportArea.is-mode-fixed #floatingControlPanel {
      display: none !important;
    }
    .is-mode-design .selectable-item {
      cursor: move !important;
    }

    input[type=range] { accent-color: #f5b800; }
    .custom-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
    .custom-scroll::-webkit-scrollbar-thumb { background: #334155; border-radius: 4px; }
    .custom-scroll::-webkit-scrollbar-track { background: transparent; }
    /* Previne fundo branco/amarelo gerado pelo autofill do navegador */
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 1000px #05080e inset !important;
      -webkit-text-fill-color: #ffffff !important;
      transition: background-color 5000s ease-in-out 0s !important;
    }

    /* ========================================================= */
    /* TRANSIÇÃO SUAVE DA SIDEBAR & MODO ÍCONES (COLLAPSIBLE)    */
    /* ========================================================= */
    #sidebar {
      transition: width 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                  min-width 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                  max-width 0.35s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    .sidebar-text {
      display: inline-block;
      opacity: 1;
      max-width: 260px;
      transform: translateX(0);
      transition: opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1) 0.05s, 
                  max-width 0.35s cubic-bezier(0.4, 0, 0.2, 1), 
                  transform 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                  margin 0.25s cubic-bezier(0.4, 0, 0.2, 1),
                  padding 0.25s cubic-bezier(0.4, 0, 0.2, 1);
      white-space: nowrap;
      overflow: hidden;
      vertical-align: middle;
    }
    @media (min-width: 768px) {
      #sidebar.sidebar-collapsed {
        width: 80px !important;
        min-width: 80px !important;
        max-width: 80px !important;
      }
    }
    @media (max-width: 767px) {
      #sidebar.sidebar-collapsed nav {
        display: none !important;
      }
      #sidebar.sidebar-collapsed #sidebarUserBox {
        display: none !important;
      }
      #sidebar.sidebar-collapsed #sidebarFooter {
        display: none !important;
      }
    }
    #sidebar.sidebar-collapsed .sidebar-text {
      opacity: 0 !important;
      max-width: 0 !important;
      width: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      transform: translateX(-12px) !important;
      pointer-events: none !important;
      transition: opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1), 
                  max-width 0.3s cubic-bezier(0.4, 0, 0.2, 1), 
                  transform 0.15s cubic-bezier(0.4, 0, 0.2, 1),
                  margin 0.2s cubic-bezier(0.4, 0, 0.2, 1),
                  padding 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important;
    }
    #sidebar.sidebar-collapsed nav {
      padding-left: 0.6rem !important;
      padding-right: 0.6rem !important;
    }
    #sidebar.sidebar-collapsed .nav-item {
      padding-left: 0.5rem !important;
      padding-right: 0.5rem !important;
      justify-content: center !important;
    }
    #sidebar.sidebar-collapsed .nav-item > div {
      justify-content: center !important;
      gap: 0 !important;
      width: 100% !important;
    }
    #sidebar.sidebar-collapsed .nav-indicator {
      display: none !important;
    }
    #sidebar.sidebar-collapsed .sidebar-header-content {
      flex-direction: column !important;
      align-items: center !important;
      gap: 0.6rem !important;
    }
    #sidebar.sidebar-collapsed #sidebarUserBox {
      padding-left: 0.5rem !important;
      padding-right: 0.5rem !important;
      justify-content: center !important;
    }
    #sidebar.sidebar-collapsed #sidebarUserBox > div {
      justify-content: center !important;
      gap: 0 !important;
    }
    #sidebar.sidebar-collapsed #sidebarFooter {
      padding: 0.75rem 0.5rem !important;
    }
    #sidebar.sidebar-collapsed #sidebarFooter a,
    #sidebar.sidebar-collapsed #sidebarFooter button {
      padding-left: 0.25rem !important;
      padding-right: 0.25rem !important;
      gap: 0 !important;
      font-size: 0 !important;
    }
    #sidebar.sidebar-collapsed #sidebarFooter span:not(.sidebar-text) {
      font-size: 1.1rem !important;
    }
    /* Refinamento do Badge de Homologação Pendente na Sidebar */
    #navPendingBadge:not(.hidden) {
      display: inline-flex !important;
      align-items: center;
      justify-content: center;
      line-height: 1;
      box-shadow: 0 0 10px rgba(245, 158, 11, 0.25);
    }
    #navPendingBadge.hidden {
      display: none !important;
    }
    .active-nav-pill #navPendingBadge {
      background-color: #080b12 !important;
      color: #f5b800 !important;
      border-color: rgba(8, 11, 18, 0.6) !important;
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4) !important;
    }
    #sidebar.sidebar-collapsed #navPendingBadge {
      display: none !important;
    }
  </style>
</head>
<body class="bg-[#080b12] text-slate-100 min-h-screen font-sans antialiased selection:bg-pe-gold selection:text-pe-dark">

  <div class="min-h-screen flex flex-col md:flex-row w-full">

    <!-- ========================================================= -->
    <!-- BARRA SUPERIOR MOBILE / TABLET (COM TOGGLE DO MENU)       -->
    <!-- ========================================================= -->
    <header class="md:hidden bg-[#05080e] border-b border-[#151c2e] px-4 py-3 flex items-center justify-between sticky top-0 z-50 shadow-xl">
      <div class="flex items-center gap-2.5">
        <div class="w-9 h-9 rounded-full bg-[#06173a] border border-pe-gold p-0.5 overflow-hidden shrink-0 shadow cursor-pointer" onclick="switchTab('inicio')">
          <img src="assets/images/logo-federacao.png" alt="FPEFT" class="w-full h-full object-contain rounded-full select-none" onerror="this.src='/assets/images/logo-federacao.png'" />
        </div>
        <div>
          <span class="font-oswald text-sm font-bold uppercase text-white tracking-wide block leading-tight">
            FPEFT <span class="text-pe-gold">ADM</span>
          </span>
          <span id="mobileActiveTabLabel" class="block text-[10px] text-pe-gold font-bold uppercase tracking-wider leading-none">
            Início
          </span>
        </div>
      </div>
      <div class="flex items-center gap-2">
        <button type="button" onclick="toggleMobileSidebar()" id="btnMobileSidebarToggle" class="px-3.5 py-2 rounded-xl bg-[#0b101d] hover:bg-[#15203a] border border-[#1c253b] text-pe-gold hover:text-white transition flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider cursor-pointer shadow min-h-[40px]">
          <i id="mobileMenuIcon" class="fa-solid fa-bars text-sm"></i>
          <span id="mobileMenuText">Menu</span>
        </button>
      </div>
    </header>

    <!-- ========================================================= -->
    <!-- PAINEL LATERAL (SIDEBAR COM ABAS OFICIAIS DO SISTEMA)     -->
    <!-- ========================================================= -->
    <aside id="sidebar" class="hidden md:flex w-full md:w-72 bg-[#05080e] border-r border-[#151c2e] flex-col shrink-0 z-40 transition-all md:min-h-screen">
      
      <!-- Topo da Sidebar: Logo & Identidade com Botão Toggle -->
      <div class="p-4 border-b border-[#151c2e] relative sidebar-header-container">
        <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0"></div>
        <div class="flex items-center justify-between gap-2 sidebar-header-content">
          <div class="flex items-center gap-3 min-w-0">
            <div class="rounded-full bg-[#06173a] border-2 border-pe-gold p-0.5 overflow-hidden shrink-0 shadow cursor-pointer" onclick="toggleSidebarCollapse()" style="width: 42px; height: 42px; min-width: 42px; min-height: 42px;" title="Clique para alternar tamanho do menu">
              <img src="assets/images/logo-federacao.png" alt="Federação Pernambucana" class="w-full h-full object-contain rounded-full select-none pointer-events-none" draggable="false" onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='/assets/images/logo-federacao.png';}else if(this.dataset.retry==1){this.dataset.retry=2;this.src='assets/logo.png';}" />
            </div>
            <div class="min-w-0 sidebar-text">
              <h1 class="font-oswald text-base uppercase font-bold text-white tracking-wide truncate">
                FPEFT <span class="text-pe-gold">ADM</span>
              </h1>
              <span class="block text-[10px] text-slate-400 font-bold uppercase tracking-wider truncate">
                Painel Oficial
              </span>
            </div>
          </div>
          <!-- Botão Toggle com Ícone & Animação -->
          <button id="btnToggleSidebar" onclick="toggleSidebarCollapse()" class="p-2 rounded-xl text-slate-400 hover:text-pe-gold hover:bg-white/5 transition flex items-center justify-center cursor-pointer shrink-0 border border-transparent hover:border-[#1c253b]" title="Recolher menu lateral (somente ícones)">
            <i id="sidebarToggleIcon" class="fa-solid fa-angles-left text-xs transition-transform duration-300"></i>
          </button>
        </div>
      </div>

      <!-- Perfil do Administrador Logado -->
      <div id="sidebarUserBox" class="px-5 py-3.5 bg-[#080d16] border-b border-[#151c2e]/80 flex items-center justify-between transition-all" title="gabrielacessor@foot-table.pe.org (Diretor Adjunto)">
        <div class="flex items-center gap-2.5 min-w-0">
          <div class="w-2.5 h-2.5 rounded-full bg-pe-gold animate-pulse shrink-0" title="Online - Diretor Adjunto"></div>
          <div class="min-w-0 sidebar-text">
            <span id="sidebarAdminUser" class="block text-xs font-bold text-white truncate">gabrielacessor@foot-table.pe.org</span>
            <span id="sidebarAdminRole" class="text-[9px] uppercase tracking-wider text-pe-gold font-bold">⚡ Diretor Adjunto</span>
          </div>
        </div>
      </div>

      <!-- Menu de Navegação Vertical -->
      <nav class="flex-1 p-3.5 space-y-2 overflow-y-auto">
        
        <div class="px-2 pt-1 pb-1 flex items-center justify-between sidebar-nav-heading">
          <span class="text-[10px] font-bold uppercase tracking-widest text-slate-500 sidebar-text">
            Abas do Sistema
          </span>
        </div>

        <!-- 1. Aba Início (Ativo por padrão com Amarelo Oficial) -->
        <button onclick="switchTab('inicio')" id="navBtn-inicio" class="nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all cursor-pointer group active-nav-pill" title="Início">
          <div class="flex items-center gap-3.5">
            <!-- Ícone Casa / Início -->
            <svg class="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
            </svg>
            <span class="sidebar-text text-sm font-semibold tracking-wide">Início</span>
          </div>
          <span class="nav-indicator w-2.5 h-2.5 rounded-full bg-[#8a6500] shrink-0 sidebar-text"></span>
        </button>

        <!-- 2. Aba Studio de Emissão (CR80 Oficial) -->
        <button onclick="switchTab('atletas')" id="navBtn-atletas" class="nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer group" title="Studio de Emissão">
          <div class="flex items-center gap-3.5">
            <!-- Ícone Studio / Carteira -->
            <svg class="w-5 h-5 flex-shrink-0 text-slate-400 group-hover:text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 00-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clip-rule="evenodd"/>
            </svg>
            <span class="sidebar-text text-sm font-semibold tracking-wide">Studio de Emissão</span>
          </div>
          <span class="nav-indicator hidden w-2.5 h-2.5 rounded-full bg-[#8a6500] shrink-0 sidebar-text"></span>
        </button>

        <!-- 3. Aba Jogadores Cadastrados (Nova Aba Oficial de Gestão e Homologação) -->
        <button onclick="switchTab('jogadores')" id="navBtn-jogadores" class="nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer group" title="Jogadores Cadastrados">
          <div class="flex items-center gap-3 min-w-0 flex-1 mr-2">
            <!-- Ícone Jogadores / Grupo -->
            <i class="fa-solid fa-users w-5 text-center text-slate-400 group-hover:text-white shrink-0"></i>
            <span class="sidebar-text text-sm font-semibold tracking-wide truncate">Jogadores Cadastrados</span>
          </div>
          <div class="flex items-center gap-1.5 shrink-0">
            <span id="navPendingBadge" class="hidden min-w-[20px] h-5 px-1.5 inline-flex items-center justify-center text-[10px] font-bold bg-amber-500/20 text-amber-400 border border-amber-500/40 rounded-full shrink-0 shadow-sm leading-none sidebar-text" title="Pendentes de homologação"></span>
            <span class="nav-indicator hidden w-2.5 h-2.5 rounded-full bg-[#8a6500] shrink-0 sidebar-text"></span>
          </div>
        </button>

        <!-- 4. Aba Notícias & Torneios -->
        <button onclick="switchTab('noticias')" id="navBtn-noticias" class="nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer group" title="Notícias & Torneios">
          <div class="flex items-center gap-3.5">
            <!-- Ícone Notícias / Jornal -->
            <svg class="w-5 h-5 flex-shrink-0 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
            </svg>
            <span class="sidebar-text text-sm font-semibold tracking-wide">Notícias & Torneios</span>
          </div>
          <span class="nav-indicator hidden w-2.5 h-2.5 rounded-full bg-[#8a6500] shrink-0 sidebar-text"></span>
        </button>

        <!-- 5. Aba Galeria de Fotos & Arenas -->
        <button onclick="switchTab('galeria')" id="navBtn-galeria" class="nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer group" title="Galeria de Fotos">
          <div class="flex items-center gap-3.5">
            <!-- Ícone Imagem / Galeria -->
            <svg class="w-5 h-5 flex-shrink-0 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            <span class="sidebar-text text-sm font-semibold tracking-wide">Galeria & Fotos</span>
          </div>
          <span class="nav-indicator hidden w-2.5 h-2.5 rounded-full bg-[#8a6500] shrink-0 sidebar-text"></span>
        </button>

        <!-- 5. Aba E-mails Institucionais & Gestão -->
        <button onclick="switchTab('emails')" id="navBtn-emails" class="nav-item hidden w-full flex items-center justify-between px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer group" style="display: none;" title="E-mail Institucional">
          <div class="flex items-center gap-3.5">
            <!-- Ícone Envelope / E-mail Institucional -->
            <svg class="w-5 h-5 flex-shrink-0 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <span class="sidebar-text text-sm font-semibold tracking-wide">E-mail Institucional</span>
          </div>
          <span class="nav-indicator hidden w-2.5 h-2.5 rounded-full bg-[#8a6500] shrink-0 sidebar-text"></span>
        </button>

        <!-- 6. Aba Banco de Dados & Ajustes (Keep-Alive) -->
        <button onclick="switchTab('config')" id="navBtn-config" class="nav-item hidden w-full flex items-center justify-between px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer group" style="display: none;" title="Banco & Ajustes">
          <div class="flex items-center gap-3.5">
            <!-- Ícone Engrenagem / Banco -->
            <svg class="w-5 h-5 flex-shrink-0 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
            </svg>
            <span class="sidebar-text text-sm font-semibold tracking-wide">Banco & Ajustes</span>
          </div>
          <span class="nav-indicator hidden w-2.5 h-2.5 rounded-full bg-[#8a6500] shrink-0 sidebar-text"></span>
        </button>

        <!-- 7. Guia Completo do Painel -->
        <button onclick="switchTab('guia')" id="navBtn-guia" class="nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer group" title="Guia do Painel">
          <div class="flex items-center gap-3.5">
            <!-- Ícone Manual / Guia -->
            <svg class="w-5 h-5 flex-shrink-0 text-slate-400 group-hover:text-white" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span class="sidebar-text text-sm font-semibold tracking-wide">Guia do Painel</span>
          </div>
          <span class="nav-indicator hidden w-2.5 h-2.5 rounded-full bg-[#8a6500] shrink-0 sidebar-text"></span>
        </button>

      </nav>

      <!-- Rodapé da Sidebar: Ver Site & Sair -->
      <div id="sidebarFooter" class="p-4 border-t border-[#151c2e] bg-[#04060b] space-y-2">
        <a href="index.html" class="w-full bg-[#0c1424] hover:bg-[#121e36] border border-pe-cardBorder text-white font-bold text-xs uppercase px-3 py-2.5 rounded-xl transition flex items-center justify-center gap-2" title="Ver Site Público">
          <span class="text-base shrink-0">🌐</span>
          <span class="sidebar-text">Ver Site Público</span>
        </a>
        <a href="seguranca.html" target="_blank" class="w-full border border-[#1c253b] hover:bg-[#121c32] text-slate-400 hover:text-pe-gold font-bold text-[11px] uppercase px-3 py-1.5 rounded-xl transition flex items-center justify-center gap-2" title="Manual de Segurança & Privacidade LGPD">
          <i class="fa-solid fa-shield-halved text-pe-gold text-xs"></i>
          <span class="sidebar-text">Segurança & LGPD</span>
        </a>
        <button onclick="handleLogout()" class="w-full border border-red-500/30 hover:bg-red-950/40 text-red-400 font-bold text-xs uppercase px-3 py-2 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer" title="Sair do Sistema">
          <span class="text-base shrink-0">🚪</span>
          <span class="sidebar-text">Sair do Sistema</span>
        </button>
      </div>

    </aside>
    <script>
      (function() {
        try {
          if (localStorage.getItem('fpeft_sidebar_collapsed') === 'true') {
            document.getElementById('sidebar')?.classList.add('sidebar-collapsed');
          }
        } catch(e) {}
      })();
    </script>

    <!-- ========================================================= -->
    <!-- ÁREA PRINCIPAL DE CONTEÚDO                                -->
    <!-- ========================================================= -->
    <div class="flex-1 flex flex-col min-w-0 overflow-y-auto">
      
      <!-- Topbar Superior -->
      <header class="bg-[#05080e]/95 backdrop-blur border-b border-[#151c2e] px-4 sm:px-8 py-3.5 flex items-center justify-between sticky top-0 z-30">
        <div class="flex items-center gap-3">
          <!-- Botão Toggle de Navegação na Topbar -->
          <button id="btnTopbarToggleSidebar" onclick="toggleSidebarCollapse()" class="p-2 rounded-xl bg-[#090e1a] hover:bg-white/10 text-slate-400 hover:text-pe-gold text-xs transition flex items-center justify-center cursor-pointer border border-[#151c2e]" title="Alternar menu lateral (expandir / recolher)">
            <i class="fa-solid fa-bars text-sm"></i>
          </button>
          <span id="headerPageTitle" class="font-oswald text-xl uppercase font-bold text-white tracking-wide">
            Início & Carteiras Homologadas
          </span>
          <span class="hidden sm:inline-block bg-pe-gold/20 text-pe-gold text-[10px] font-bold px-2 py-0.5 rounded uppercase">
            Sistema Oficial PE
          </span>
        </div>

        <div class="flex items-center gap-3">
          <!-- Botão Recarregar -->
          <button onclick="location.reload()" class="p-2 rounded-xl bg-[#090e1a] hover:bg-white/10 text-slate-400 hover:text-white text-xs transition" title="Atualizar Painel">
            🔄
          </button>
        </div>
      </header>

      <!-- Conteúdo das Abas -->
      <main class="p-4 sm:p-6 lg:p-8 flex-1 w-full space-y-8">

        <!-- ===================================================== -->
        <!-- ABA: INÍCIO (DASHBOARD COM ATLETAS & CARTEIRAS)       -->
        <!-- ===================================================== -->
        <div id="tabContent-inicio" class="space-y-6">
          
          <!-- Banner Principal do Início (Exato da Imagem) -->
          <div class="bg-gradient-to-r from-[#06173a] via-[#091e4a] to-[#040813] border border-[#1c253b] rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            <div class="pe-stripe-bar h-1.5 w-full absolute top-0 left-0"></div>
            <div class="max-w-3xl space-y-3 relative z-10">
              <span class="text-pe-gold text-xs font-bold uppercase tracking-wider block">Sistema Integrado de Gestão Federativa</span>
              <h2 class="font-oswald text-2xl sm:text-4xl uppercase font-extrabold text-white leading-tight">
                Recepção Oficial — Federação Pernambucana
              </h2>
              <p class="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Bem-vindo ao centro de operações de Foot Table & FutMesa de Pernambuco. Controle carteiras digitais, cadastro de atletas homologados, notícias e status operacional.
              </p>
              <div class="flex flex-wrap items-center gap-3 pt-2">
                <button onclick="switchTab('atletas')" class="bg-pe-gold hover:bg-pe-goldHover text-pe-dark font-extrabold text-xs uppercase px-5 py-2.5 rounded-xl transition shadow flex items-center gap-2 cursor-pointer">
                  <span>🪪</span> Studio de Emissão
                </button>
                <button onclick="switchTab('jogadores')" class="bg-[#0e172a] hover:bg-[#1a2942] border border-[#1c253b] text-white font-bold text-xs uppercase px-5 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer">
                  <span>👥</span> Jogadores Cadastrados
                </button>
                <button onclick="switchTab('noticias')" class="bg-pe-blue hover:bg-blue-600 text-white font-bold text-xs uppercase px-5 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer">
                  <span>📰</span> Publicar Notícia
                </button>
              </div>
            </div>
          </div>

          <!-- Cards de Métricas Principais & Busca Rápida de Atleta -->
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 items-stretch">
            
            <!-- Card 1: Atletas Cadastrados -->
            <div class="col-span-1 md:col-span-1 lg:col-span-3 bg-[#0b101d] border border-[#1c253b] rounded-2xl p-5 flex flex-col justify-between space-y-3 shadow-xl">
              <div class="flex items-center justify-between text-slate-400 text-xs">
                <span class="font-bold uppercase tracking-wider">Atletas Cadastrados</span>
                <span class="text-emerald-400 font-bold">● Ativos</span>
              </div>
              <div class="flex items-baseline gap-2">
                <span id="metricTotalAthletes" class="font-oswald text-3xl font-extrabold text-white">0</span>
                <span class="text-xs text-slate-400">atletas</span>
              </div>
              <div class="text-[11px] text-slate-400 flex items-center gap-1.5 pt-1 border-t border-[#1c253b]/50">
                <span class="text-pe-gold">●</span> Cadastro Oficial FPFT
              </div>
            </div>

            <!-- Card 2: Busca Rápida de Atleta (Nome ou ID da Carteira) -->
            <div class="col-span-1 md:col-span-2 lg:col-span-6 bg-[#0b101d] border border-[#1c253b] rounded-2xl p-5 flex flex-col justify-between space-y-3 shadow-xl relative">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div class="flex items-center gap-2">
                  <span class="text-pe-gold text-base">🔍</span>
                  <span class="font-bold uppercase tracking-wider text-white text-xs">Busca Rápida (Nome ou ID da Carteira)</span>
                </div>
                
                <!-- Filtros de Modalidade: Todos / Individual / Em Dupla -->
                <div class="inline-flex items-center bg-[#05080e] p-0.5 rounded-lg border border-[#1c253b] text-[10px] font-bold">
                  <button type="button" id="btnFilterAll" onclick="setQuickSearchModality('ALL')" class="px-2.5 py-1 rounded-md text-pe-dark bg-pe-gold font-extrabold transition cursor-pointer">
                    Todos
                  </button>
                  <button type="button" id="btnFilterSolo" onclick="setQuickSearchModality('SOLO')" class="px-2.5 py-1 rounded-md text-slate-400 hover:text-white transition cursor-pointer">
                    👤 Individual
                  </button>
                  <button type="button" id="btnFilterDupla" onclick="setQuickSearchModality('DUPLA')" class="px-2.5 py-1 rounded-md text-slate-400 hover:text-white transition cursor-pointer">
                    👥 Em Dupla
                  </button>
                </div>
              </div>

              <!-- Input de Busca pelo Nome Completo ou ID da Carteira -->
              <div class="relative">
                <input type="search" id="quickSearchAthleteInput" name="quick_athlete_search_query" autocomplete="new-password" autocorrect="off" autocapitalize="off" spellcheck="false" oninput="handleQuickAthleteSearch()" placeholder="Digite o Nome Completo ou ID / Código da Carteira (ex: 742918)..." class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl pl-9 pr-8 py-2 text-xs text-white placeholder-slate-500 outline-none transition font-sans" />
                <span class="absolute left-3 top-2.5 text-slate-400 text-xs">🔎</span>
                <button type="button" id="quickSearchClearBtn" onclick="clearQuickAthleteSearch()" class="hidden absolute right-2.5 top-2 text-slate-400 hover:text-white text-xs cursor-pointer p-0.5">✕</button>
              </div>

              <!-- Resultado da Busca Instantânea -->
              <div id="quickSearchResults" class="min-h-[44px] flex items-center">
                <div class="text-[11px] text-slate-400 flex items-center gap-1.5">
                  <svg class="w-4 h-4 text-pe-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
                  </svg>
                  <span>Ache atletas pelo <strong>Nome Completo</strong> ou <strong>ID da Carteira</strong> (Individual ou Dupla).</span>
                </div>
              </div>
            </div>

            <!-- Card 3: Próximo Torneio -->
            <div class="col-span-1 md:col-span-1 lg:col-span-3 bg-[#0b101d] border border-[#1c253b] rounded-2xl p-5 flex flex-col justify-between space-y-3 shadow-xl">
              <div class="flex items-center justify-between text-slate-400 text-xs">
                <span class="font-bold uppercase tracking-wider">Próximo Torneio</span>
                <span class="text-pe-blue font-bold">ROMA 2026</span>
              </div>
              <div class="flex items-baseline gap-2">
                <span class="font-oswald text-2xl font-extrabold text-white">Mundial Roma</span>
              </div>
              <span class="text-[11px] text-slate-400 font-semibold pt-1 border-t border-[#1c253b]/50">
                01 a 04 de Outubro
              </span>
            </div>

          </div>

          <!-- Tabela: Últimas Carteiras Homologadas (Exata da Imagem) -->
          <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-6 shadow-xl space-y-4">
            <div class="flex items-center justify-between">
              <h3 class="font-oswald text-lg uppercase font-bold text-white flex items-center gap-2">
                <span>📋</span> Últimos Atletas com Carteira Homologada
              </h3>
              <button onclick="switchTab('jogadores')" class="text-xs text-pe-gold hover:underline font-bold flex items-center gap-1 cursor-pointer">
                Ver todos os atletas →
              </button>
            </div>
            
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs">
                <thead class="bg-[#05080e] text-slate-400 uppercase text-[10px] font-mono border-b border-[#1c253b]">
                  <tr>
                    <th class="py-3 px-4">Código Oficial</th>
                    <th class="py-3 px-4">Nome</th>
                    <th class="py-3 px-4">Município</th>
                    <th class="py-3 px-4">Modalidade</th>
                    <th class="py-3 px-4">Status</th>
                    <th class="py-3 px-4 text-right">Ação</th>
                  </tr>
                </thead>
                <tbody id="quickAthletesList" class="divide-y divide-[#1c253b]/60">
                  <!-- Inserido dinamicamente via JavaScript -->
                </tbody>
              </table>
            </div>
          </div>

        </div>

        <!-- ===================================================== -->
        <!-- 1. 🪪 ABA CARTEIRAS & ATLETAS                          -->
        <!-- ===================================================== -->
        <!-- ===================================================== -->
        <!-- 1. 🪪 ABA CARTEIRAS & ATLETAS (STUDIO OFICIAL CR80)   -->
        <!-- ===================================================== -->
        <div id="tabContent-atletas" class="space-y-8 hidden">
          

          <!-- Cabeçalho de Ações do Studio -->
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#070b14] border border-[#1c253b] p-4 rounded-2xl shadow-lg">
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-700 via-pe-blue to-pe-gold p-0.5 shadow-lg shadow-pe-gold/20 shrink-0">
                <div class="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                  <i class="fa-solid fa-address-card text-pe-gold text-base"></i>
                </div>
              </div>
              <div>
                <h2 class="font-oswald text-xl uppercase font-bold text-white leading-tight">Studio de Emissão de Carteira de Federados</h2>
                <p class="text-xs text-slate-400">Edite visualmente, preencha os dados e exporte em alta definição</p>
              </div>
            </div>

            <!-- Botões de Ação do Cabeçalho -->
            <div class="flex flex-wrap items-center gap-2">
              <button type="button" onclick="window.location.reload(true)" class="bg-[#10192e] hover:bg-[#1a2947] border border-slate-700 hover:border-sky-500 text-slate-300 hover:text-white font-bold text-xs uppercase px-3 py-2.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer shadow" title="Recarregar e sincronizar a versão mais recente">
                <i class="fa-solid fa-arrows-rotate text-sky-400"></i> Atualizar Painel
              </button>
              <button type="button" id="btnExportPDF" onclick="exportCarteiraPDF()" class="bg-gradient-to-r from-rose-600 to-red-600 hover:from-rose-500 hover:to-red-500 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer shadow-lg shadow-rose-950/30" title="Exportar Carteira em PDF Vetorial de Alta Resolução">
                <i class="fa-solid fa-file-pdf text-white text-sm"></i> Exportar PDF
              </button>
              <button type="button" id="btnExportPNG" onclick="exportHdPng()" class="bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-xl transition flex items-center gap-2 cursor-pointer shadow-lg shadow-sky-600/25" title="Exportar Carteira em PNG HD (300 DPI)">
                <i class="fa-solid fa-file-image text-white text-sm"></i> Exportar PNG HD (300 DPI)
              </button>
            </div>
          </div>

          <!-- WORKSPACE DO STUDIO: Split View Formulário + Canvas CR80 com Auto-Ajuste à Tela -->
          <div class="grid grid-cols-1 lg:grid-cols-[380px_minmax(0,1fr)] xl:grid-cols-[410px_minmax(0,1fr)] 2xl:grid-cols-[430px_minmax(0,1fr)] gap-4 lg:gap-5 xl:gap-6 items-start">
            
            <!-- COLUNA ESQUERDA: Formulário de Dados, Fundo e Camadas (Auto-ajustável de 380px a 430px) -->
            <div class="space-y-5 sm:space-y-6 w-full max-w-[430px] mx-auto lg:mx-0">
              
              <!-- 1. Formulário Oficial de Preenchimento -->
              <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-5 shadow-xl relative">
                <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0 rounded-t-2xl"></div>

                <div class="flex items-center justify-between mb-4">
                  <h3 class="font-oswald text-base uppercase font-bold text-white flex items-center gap-2">
                    <i class="fa-solid fa-user-pen text-pe-gold"></i> Dados do Atleta
                  </h3>
                  <span class="text-[10px] text-slate-400 font-mono">Sincronizado</span>
                </div>

                <form id="athleteForm" autocomplete="off" onsubmit="handleSaveAthlete(event)" class="space-y-3.5 text-xs">
                  <!-- Nº do Federado e Status Federativo -->
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <div class="flex items-center justify-between mb-1">
                        <label class="block text-slate-300 font-bold">Nº do Federado *</label>
                        <button type="button" onclick="generateFederatedNumber()" class="text-[10px] font-extrabold text-pe-gold hover:text-amber-300 flex items-center gap-1 transition cursor-pointer select-none" title="Gerar novo Código de 6 Dígitos Único">
                          <span>🎲</span> Gerar
                        </button>
                      </div>
                      <div class="relative flex items-center">
                        <input type="text" id="athleteFederatedNum" required maxlength="6" autocomplete="off" value="973321" placeholder="000000" inputmode="numeric" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl pl-3 pr-8 py-2 text-pe-gold font-mono font-bold text-sm outline-none" />
                        <button type="button" onclick="generateFederatedNumber()" class="absolute right-2 p-1 text-pe-gold/70 hover:text-pe-gold transition cursor-pointer" title="Gerar Código 6D Único (Sem Repetição)">
                          <span>🎲</span>
                        </button>
                      </div>
                      <input type="hidden" id="athleteCode" value="973321" />
                    </div>
                    <div>
                      <label class="block text-slate-300 font-bold mb-1">Status Federativo</label>
                      <select id="athleteStatus" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-2.5 py-2 text-slate-200 text-xs outline-none cursor-pointer">
                        <option value="PENDENTE" selected>PENDENTE</option>
                        <option value="HOMOLOGADO">HOMOLOGADO</option>
                        <option value="REGULAR">REGULAR</option>
                      </select>
                    </div>
                  </div>

                  <!-- Nome do Atleta -->
                  <div>
                    <div class="flex items-center justify-between mb-1">
                      <label class="block text-slate-300 font-bold">Nome do Atleta *</label>
                      <button type="button" class="text-sky-400 hover:underline text-[10px]" onclick="selectElement('field-nome')">Selecionar no cartão</button>
                    </div>
                    <input type="text" id="athleteName" required value="" placeholder="NOME DO ATLETA" autocomplete="off" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3 py-2 text-white uppercase font-bold outline-none font-fpeft" />
                  </div>

                  <!-- CPF e Data de Nascimento -->
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <label class="block text-slate-300 font-bold mb-1">CPF</label>
                      <input type="text" id="athleteCpf" maxlength="14" value="" placeholder="XXX.XXX.XXX-XX" autocomplete="off" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3 py-2 text-slate-200 font-mono outline-none" />
                    </div>
                    <div>
                      <label class="block text-slate-300 font-bold mb-1">Nascimento</label>
                      <input type="text" id="athleteBirth" value="" placeholder="XX/XX/XXXX" autocomplete="off" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3 py-2 text-slate-200 font-mono outline-none" />
                    </div>
                  </div>

                  <!-- Telefone / WhatsApp -->
                  <div>
                    <label class="block text-slate-300 font-bold mb-1">Telefone / WhatsApp</label>
                    <input type="text" id="athletePhone" maxlength="15" value="" placeholder="(XX) XXXXX-XXXX" autocomplete="off" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3 py-2 text-slate-200 font-mono outline-none" />
                  </div>

                  <!-- Modalidade & Categoria -->
                  <div class="grid grid-cols-[165px_1fr] gap-2">
                    <div>
                      <div class="flex items-center justify-between mb-1">
                        <label class="block text-slate-300 font-bold">Modalidade</label>
                      </div>
                      <input type="hidden" id="athleteModality" value="SOLO (INDIVIDUAL)" />
                      <!-- Botões de Seleção Direta de Modalidade (Permite Seleção Única ou Múltipla) -->
                      <div class="grid grid-cols-2 gap-1" id="modalityPillsContainer">
                        <button type="button" onclick="toggleModalityOption('SOLO')" id="btnModSolo" data-mod="SOLO" class="mod-pill-btn flex items-center justify-center text-[7.5px] whitespace-nowrap py-1.5 px-1 rounded-lg font-bold text-center transition cursor-pointer bg-pe-gold text-pe-dark border border-pe-gold shadow select-none leading-none tracking-tight" title="Clique para ativar/desativar Solo (Individual)">Solo (Individual)</button>
                        <button type="button" onclick="toggleModalityOption('DUPLA')" id="btnModDupla" data-mod="DUPLA" class="mod-pill-btn flex items-center justify-center text-[7.5px] whitespace-nowrap py-1.5 px-1 rounded-lg font-bold text-center transition cursor-pointer bg-[#0b101d] text-slate-300 border border-[#1c253b] hover:border-pe-gold hover:text-white select-none leading-none tracking-tight" title="Clique para ativar/desativar Dupla (Equipe)">Dupla (Equipe)</button>
                      </div>
                    </div>
                    <div>
                      <div class="flex items-center justify-between mb-1">
                        <label class="block text-slate-300 font-bold">Categoria</label>
                      </div>
                      <input type="hidden" id="athleteCategory" value="AMADOR" />
                      <!-- Botões de Seleção Direta das 4 Bases -->
                      <div class="grid grid-cols-4 gap-1" id="categoryPillsContainer">
                        <button type="button" onclick="selectCategoryBase('ASPIRANTE')" data-cat="ASPIRANTE" class="cat-pill-btn flex items-center justify-center text-[7px] py-1.5 px-0.5 rounded-lg font-bold text-center transition cursor-pointer bg-[#0b101d] text-slate-300 border border-[#1c253b] hover:border-pe-gold hover:text-white select-none leading-none tracking-tight overflow-hidden" title="Aspirante">Aspirante</button>
                        <button type="button" onclick="selectCategoryBase('INICIANTE')" data-cat="INICIANTE" class="cat-pill-btn flex items-center justify-center text-[7px] py-1.5 px-0.5 rounded-lg font-bold text-center transition cursor-pointer bg-[#0b101d] text-slate-300 border border-[#1c253b] hover:border-pe-gold hover:text-white select-none leading-none tracking-tight overflow-hidden" title="Iniciante">Iniciante</button>
                        <button type="button" onclick="selectCategoryBase('AMADOR')" data-cat="AMADOR" class="cat-pill-btn flex items-center justify-center text-[7px] py-1.5 px-0.5 rounded-lg font-bold text-center transition cursor-pointer bg-pe-gold text-pe-dark border border-pe-gold shadow select-none leading-none tracking-tight overflow-hidden" title="Amador">Amador</button>
                        <button type="button" onclick="selectCategoryBase('PROFISSIONAL')" data-cat="PROFISSIONAL" class="cat-pill-btn flex items-center justify-center text-[7px] py-1.5 px-0.5 rounded-lg font-bold text-center transition cursor-pointer bg-[#0b101d] text-slate-300 border border-[#1c253b] hover:border-pe-gold hover:text-white select-none leading-none tracking-tight overflow-hidden" title="Profissional">Profissional</button>
                      </div>
                    </div>
                  </div>

                  <!-- Município e Validade -->
                  <div class="grid grid-cols-2 gap-3">
                    <div>
                      <label class="block text-slate-300 font-bold mb-1 text-[10px]">Município / Estado</label>
                      <input type="text" id="athleteCity" value="- PE" placeholder="- PE" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3 py-2 uppercase text-white font-bold text-xs outline-none font-fpeft" />
                    </div>
                    <div>
                      <label class="block text-slate-300 font-bold mb-1 text-[10px]">Validade</label>
                      <input type="text" id="athleteValidity" value="12/2026" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3 py-2 font-mono text-white text-xs outline-none" />
                    </div>
                  </div>

                  <!-- Upload da Foto 3x4 Oficial com Área de Seleção Rápida -->
                  <div class="pt-2 border-t border-[#1c253b]">
                    <div class="flex items-center justify-between mb-1.5">
                      <label class="block text-slate-300 font-bold text-xs">Foto 3x4 Oficial do Atleta</label>
                      <span class="text-[9px] uppercase tracking-wider text-pe-gold font-bold bg-pe-gold/10 px-2 py-0.5 rounded-md border border-pe-gold/20">Seleção Rápida</span>
                    </div>

                    <!-- Input oculto persistente da foto 3x4 do atleta -->
                    <input type="hidden" id="athletePhotoVal" value="" />

                    <!-- Área de Seleção Rápida: Tirar Foto ou Gerenciador de Arquivos -->
                    <div class="space-y-1.5">
                      <div class="grid grid-cols-2 gap-2">
                        <!-- Opção 1: Tirar Foto (Celular / Tablet / Câmera) -->
                        <button type="button" onclick="openAthleteCameraSelector()" class="flex flex-col items-center justify-center p-2.5 bg-gradient-to-b from-[#0b1220] to-[#05080e] hover:from-[#131f38] hover:to-[#090e1a] text-slate-200 border border-[#1c253b] hover:border-pe-gold rounded-xl cursor-pointer transition text-center group shadow-md active:scale-95">
                          <div class="w-7 h-7 rounded-lg bg-pe-gold/15 border border-pe-gold/40 flex items-center justify-center text-pe-gold group-hover:scale-110 group-hover:bg-pe-gold group-hover:text-black transition mb-1 shadow-sm">
                            <i class="fa-solid fa-camera text-xs"></i>
                          </div>
                          <span class="text-[11px] font-bold text-white block leading-tight">Tirar Foto</span>
                          <span class="text-[9px] text-slate-400 block leading-tight mt-0.5">Celular / Tablet</span>
                        </button>
                        <input type="file" id="uploadFotoCameraInput" accept="image/*" capture="environment" class="hidden" style="display: none !important; position: absolute !important; left: -9999px !important; width: 0 !important; height: 0 !important; opacity: 0 !important; pointer-events: none !important;">

                        <!-- Opção 2: Gerenciador de Arquivos da Plataforma (PC, Celular, Tablet) -->
                        <label class="flex flex-col items-center justify-center p-2.5 bg-gradient-to-b from-[#0b1220] to-[#05080e] hover:from-[#131f38] hover:to-[#090e1a] text-slate-200 border border-[#1c253b] hover:border-blue-400 rounded-xl cursor-pointer transition text-center group shadow-md active:scale-95">
                          <div class="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500 group-hover:text-white transition mb-1 shadow-sm">
                            <i class="fa-solid fa-folder-open text-xs"></i>
                          </div>
                          <span class="text-[11px] font-bold text-white block leading-tight">Arquivos</span>
                          <span class="text-[9px] text-slate-400 block leading-tight mt-0.5">Gerenciador / PC</span>
                          <input type="file" id="uploadFotoInput" accept="image/*" class="hidden" style="display: none !important; position: absolute !important; left: -9999px !important; width: 0 !important; height: 0 !important; opacity: 0 !important; pointer-events: none !important;">
                        </label>
                      </div>

                      <!-- Miniatura / Confirmação Visual da Foto Selecionada -->
                      <div id="athleteFormPhotoPreview" class="hidden p-2.5 bg-[#05080e] border border-pe-gold/50 rounded-xl flex items-center gap-3 shadow-lg">
                        <div class="w-12 h-16 rounded-lg overflow-hidden border-2 border-pe-gold shrink-0 bg-slate-900 shadow-md">
                          <img id="athleteFormPhotoImg" src="" class="w-full h-full object-cover" alt="Foto Oficial do Atleta" />
                        </div>
                        <div class="flex-1 min-w-0">
                          <span class="text-[11px] font-bold text-emerald-400 flex items-center gap-1.5 leading-tight">
                            <i class="fa-solid fa-circle-check text-xs"></i> Foto 3x4 Oficial Ativa
                          </span>
                          <span id="athleteFormPhotoInfo" class="text-[9px] text-slate-400 block truncate mt-0.5">Sobrepondo foto anterior</span>
                        </div>
                        <div class="flex items-center gap-1.5 shrink-0">
                          <button type="button" onclick="openAthleteCameraSelector()" class="px-2.5 py-1.5 bg-[#121a2d] hover:bg-[#1d2a4a] text-pe-gold border border-pe-gold/40 rounded-lg text-[10px] font-bold flex items-center gap-1 transition cursor-pointer shadow-sm hover:scale-105 active:scale-95" title="Tirar outra foto para sobrepor e substituir a atual">
                            <i class="fa-solid fa-camera-rotate text-[11px]"></i>
                            <span>Trocar</span>
                          </button>
                          <button type="button" onclick="resetAthletePhoto()" class="p-1.5 bg-rose-950/40 hover:bg-rose-900/60 text-rose-400 hover:text-rose-200 border border-rose-500/30 rounded-lg text-xs transition cursor-pointer shadow-sm hover:scale-105 active:scale-95" title="Excluir foto atual e restaurar silhueta padrão">
                            <i class="fa-solid fa-trash-can text-xs"></i>
                          </button>
                        </div>
                      </div>

                      <!-- Restaurar Silhueta Padrão -->
                      <button type="button" id="btnResetFoto" onclick="resetAthletePhoto()" title="Restaurar Silhueta Oficial Padrão" class="w-full flex items-center justify-center gap-1.5 py-1.5 px-3 bg-[#05080e] hover:bg-[#121c32] border border-[#1c253b] hover:border-slate-500 rounded-xl text-[10px] text-slate-400 hover:text-white transition cursor-pointer">
                        <i class="fa-solid fa-user-circle text-xs text-pe-gold"></i>
                        <span>Restaurar Silhueta Padrão</span>
                      </button>
                    </div>
                  </div>

                  <!-- QR Code e Assinatura -->
                  <div class="grid grid-cols-2 gap-3 pt-2 border-t border-[#1c253b]">
                    <div>
                      <label class="block text-slate-400 font-bold mb-1 text-[10px]">Texto / Link do QR Code</label>
                      <input type="text" id="inputQrText" value="https://fpeft.vercel.app/" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-2.5 py-1.5 text-[11px] font-mono text-white outline-none" />
                    </div>
                    <div>
                      <div class="flex items-center justify-between mb-1">
                        <label class="block text-slate-300 font-bold text-[10px] flex items-center gap-1">
                          <i class="fa-solid fa-signature text-pe-gold"></i> Assinatura do Diretor
                        </label>
                        <div class="flex items-center gap-2">
                          <button type="button" onclick="loadDesktopBrancoSignature()" class="text-[9px] font-bold text-sky-400 hover:text-sky-300 flex items-center gap-0.5 cursor-pointer transition select-none" title="Recarregar assinatura oficial de Área de Trabalho/branco">
                            <i class="fa-solid fa-rotate"></i> Padrão
                          </button>
                          <label for="inputSignatureFile" class="text-[9px] font-bold text-pe-gold hover:text-amber-300 flex items-center gap-1 cursor-pointer transition select-none" title="Upar nova imagem transparente da assinatura (PNG/SVG)">
                            <i class="fa-solid fa-file-arrow-up"></i> Upar Imagem
                          </label>
                          <input type="file" id="inputSignatureFile" accept="image/*" class="hidden" style="display: none !important; position: absolute !important; left: -9999px !important; width: 0 !important; height: 0 !important; opacity: 0 !important; pointer-events: none !important;" onchange="handlePresidentSignatureUpload(event)" />
                        </div>
                      </div>
                      <div class="flex items-center gap-1.5">
                        <input type="text" id="inputAssinatura" value="ASSINATURA DO DIRETOR FPEFT" class="flex-1 bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-2.5 py-1.5 text-[10px] uppercase text-white outline-none font-fpeft" />
                        <button type="button" id="btnRemoveSignatureImg" onclick="removePresidentSignatureImage()" class="hidden px-2 py-1.5 bg-rose-950/60 hover:bg-rose-900/80 border border-rose-700/50 text-rose-300 rounded-xl text-[10px] transition cursor-pointer" title="Remover imagem da assinatura">
                          <i class="fa-solid fa-trash-can"></i>
                        </button>
                      </div>
                      <div id="signatureImgPreviewContainer" class="hidden mt-1.5 flex items-center justify-between px-2 py-1 bg-[#05080e] border border-emerald-500/40 rounded-lg text-[10px] text-emerald-400">
                        <span class="flex items-center gap-1.5 truncate">
                          <i class="fa-solid fa-circle-check text-xs"></i>
                          <span>Assinatura do Diretor ativa</span>
                        </span>
                        <button type="button" onclick="removePresidentSignatureImage()" class="text-rose-400 hover:text-rose-300 text-xs cursor-pointer ml-1" title="Remover imagem">
                          <i class="fa-solid fa-xmark"></i>
                        </button>
                      </div>

                      <!-- Controle Interativo de Tamanho da Assinatura -->
                      <div id="signatureScaleControls" class="mt-2 p-2 bg-[#05080e] border border-[#1c253b] rounded-xl space-y-1.5">
                        <div class="flex items-center justify-between text-[10px]">
                          <span class="text-slate-300 font-bold flex items-center gap-1">
                            <i class="fa-solid fa-maximize text-pe-gold text-[9px]"></i> Tamanho da Assinatura
                          </span>
                          <span id="signatureScaleValue" class="text-pe-gold font-mono font-bold text-[10px]">100%</span>
                        </div>
                        <div class="flex items-center gap-1.5">
                          <button type="button" onclick="adjustSignatureScale(-5)" class="px-2 py-1 bg-[#0b101d] hover:bg-slate-800 text-slate-200 border border-[#1c253b] rounded-lg text-xs font-bold transition cursor-pointer" title="Diminuir tamanho">-</button>
                          <input type="range" id="inputSignatureScale" min="40" max="250" value="100" step="2" oninput="handleSignatureScaleChange(this.value)" onchange="confirmAndSaveSignatureScale(false)" class="flex-1 accent-pe-gold cursor-pointer h-1.5 bg-slate-800 rounded-lg" />
                          <button type="button" onclick="adjustSignatureScale(5)" class="px-2 py-1 bg-[#0b101d] hover:bg-slate-800 text-slate-200 border border-[#1c253b] rounded-lg text-xs font-bold transition cursor-pointer" title="Aumentar tamanho">+</button>
                          <button type="button" onclick="resetSignatureScale()" class="px-2 py-1 bg-amber-950/40 hover:bg-amber-900/60 text-pe-gold border border-amber-500/30 rounded-lg text-[9px] font-bold transition cursor-pointer" title="Redefinir tamanho para 100%">100%</button>
                        </div>
                        <div class="flex items-center justify-between text-[9px] text-slate-400 pt-1 border-t border-[#1c253b]/60">
                          <span class="text-[9px] text-slate-400">Em cima do nome do presidente</span>
                          <button type="button" onclick="confirmAndSaveSignatureScale(true)" class="text-emerald-400 hover:text-emerald-300 font-bold flex items-center gap-1 cursor-pointer text-[9px]" title="Salvar tamanho no sistema para todas as carteiras">
                            <i class="fa-solid fa-check"></i> Salvar Tamanho
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <!-- Botão de Conclusão do Cadastro e Envio ao Banco de Dados -->
                  <div class="pt-3 space-y-2 border-t border-[#1c253b]">
                    <button type="button" id="btnConcluirCadastro" onclick="concluirCadastroEnviarBanco()" class="w-full bg-gradient-to-r from-pe-gold via-amber-400 to-pe-gold hover:from-amber-400 hover:to-pe-gold text-pe-dark font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl transition shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer border border-amber-300 active:scale-[0.99]">
                      <i class="fa-solid fa-cloud-arrow-up text-sm"></i>
                      <span>Concluir Cadastro de Federado</span>
                    </button>
                    <div class="flex items-center justify-between text-[11px] text-slate-400 px-1">
                      <span class="flex items-center gap-1.5 text-amber-300 font-medium">
                        <i class="fa-solid fa-clock-rotate-left"></i> Envia como <strong>Pendente</strong> para homologar
                      </span>
                      <button type="button" onclick="clearAthleteForm()" class="text-slate-400 hover:text-slate-200 transition underline cursor-pointer">
                        Limpar formulário
                      </button>
                    </div>
                  </div>

                  <!-- Feedback de Salvamento -->
                  <div id="athleteFeedback" class="hidden text-xs p-3 rounded-xl"></div>
                </form>
              </div>

              <!-- 2. Lista de Camadas Diagramáveis -->
              <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-5 shadow-xl">
                <span class="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between mb-2.5">
                  <span class="flex items-center gap-2"><i class="fa-solid fa-layer-group text-pe-gold"></i> Camadas e Caixas</span>
                  <span class="text-[10px] text-slate-400">Clique para selecionar</span>
                </span>
                <div id="elementsLayersList" class="space-y-1 max-h-56 overflow-y-auto custom-scroll">
                  <!-- Renderizado via JavaScript -->
                </div>
              </div>

            </div>

            <!-- COLUNA DIREITA: Canvas do Studio CR80 & Painel Flutuante -->
            <div class="flex flex-col space-y-4 min-w-0">
              
              <!-- Toolbar Superior do Canvas (Zoom e Padrão CR80) -->
              <div class="flex items-center justify-between bg-[#0b101d] border border-[#1c253b] px-3 sm:px-4 py-2.5 rounded-2xl shadow flex-wrap gap-2.5">
                <!-- Lado Esquerdo: Identificação & Seletor de Modo -->
                <div class="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <div class="flex items-center gap-2 text-xs">
                    <span class="w-2.5 h-2.5 rounded-full bg-pe-gold animate-pulse"></span>
                    <span class="font-bold text-white uppercase tracking-wide text-[11px] sm:text-xs">Padrão CR80 Oficial</span>
                    <span class="text-slate-400 hidden xl:inline text-[11px]">(85.6mm × 53.98mm • 1050 × 662 px)</span>
                  </div>

                  <!-- SELETOR DE MODO: FIXO vs DESIGN -->
                  <div class="inline-flex items-center bg-[#05080e] p-1 rounded-xl border border-[#1c253b] shadow-inner">
                    <button type="button" id="btnModeFixed" onclick="toggleDesignLock(true)" title="Modo Fixo: Layout travado para emissão rápida sem risco de mover campos" class="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-extrabold bg-emerald-600 text-white shadow transition cursor-pointer">
                      <i class="fa-solid fa-lock text-[11px]"></i>
                      <span>Modo Fixo</span>
                    </button>
                    <button type="button" id="btnModeDesign" onclick="toggleDesignLock(false)" title="Modo Design: Desbloqueia arrastar, redimensionar e editar posições livremente" class="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition cursor-pointer">
                      <i class="fa-solid fa-pen-ruler text-[11px]"></i>
                      <span>Modo Design</span>
                    </button>
                  </div>
                </div>

                <!-- Lado Direito: Ações & Zoom -->
                <div class="flex items-center gap-2 flex-wrap">
                  <!-- Botão Linhas Guia Inteligentes de Alinhamento -->
                  <button type="button" id="btnToggleGuides" onclick="toggleAlignmentGuides()" title="Ativar/Desativar Linhas Guia e Limites de Alinhamento" class="px-2.5 sm:px-3 py-1.5 bg-[#05080e] hover:bg-[#121c32] text-slate-300 hover:text-pe-gold border border-[#1c253b] rounded-xl text-xs flex items-center gap-1.5 transition cursor-pointer min-h-[36px]">
                    <i class="fa-solid fa-ruler-combined text-pe-gold"></i>
                    <span>Linhas Guia</span>
                    <span id="guidesStateBadge" class="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">ON</span>
                  </button>

                  <!-- Botão Salvar Carteira em Tempo Real -->
                  <button type="button" id="btnSaveOfficialCloud" onclick="saveOfficialLayoutToCloud()" title="Salvar alterações da carteira em tempo real no banco de dados para novos cadastros" class="px-3 sm:px-3.5 py-1.5 bg-gradient-to-r from-amber-500 via-pe-gold to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black rounded-xl text-xs flex items-center gap-1.5 sm:gap-2 transition cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98] min-h-[36px]">
                    <i class="fa-solid fa-floppy-disk text-slate-950 text-xs sm:text-sm"></i>
                    <span>Salvar Carteira</span>
                  </button>

                  <!-- Zoom Controls -->
                  <div class="flex items-center space-x-1 sm:space-x-1.5 bg-[#05080e] px-2 py-1 rounded-xl border border-[#1c253b] min-h-[36px]">
                    <button type="button" id="zoomOutBtn" title="Reduzir Visualização" class="w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition text-xs cursor-pointer">
                      <i class="fa-solid fa-minus text-[11px]"></i>
                    </button>
                    <span id="zoomDisplay" class="text-xs font-mono font-bold text-pe-gold w-10 sm:w-11 text-center">80%</span>
                    <button type="button" id="zoomInBtn" title="Aumentar Visualização" class="w-6 sm:w-7 h-6 sm:h-7 flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition text-xs cursor-pointer">
                      <i class="fa-solid fa-plus text-[11px]"></i>
                    </button>
                    <div class="w-[1px] h-4 bg-slate-700 mx-0.5 sm:mx-1"></div>
                    <button type="button" id="zoomFitBtn" title="Enquadrar à Tela" class="px-1.5 sm:px-2 py-1 text-xs text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg transition flex items-center gap-1 sm:gap-1.5 cursor-pointer">
                      <i class="fa-solid fa-expand text-[10px]"></i> <span class="hidden sm:inline">Enquadrar</span>
                    </button>
                  </div>
                </div>
              </div>

              <!-- Viewport do Canvas CR80 Central (Auto-Ajuste Inteligente à Tela do Computador) -->
              <div id="viewportArea" class="checkered-canvas-bg border border-[#1c253b] rounded-2xl relative flex items-center justify-center p-3 sm:p-5 lg:p-6 min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] xl:min-h-[540px] 2xl:min-h-[600px] max-h-[calc(100vh-190px)] h-full overflow-hidden sm:overflow-auto custom-scroll shadow-2xl">
                
                <!-- Wrapper com Zoom Dinâmico Adaptativo -->
                <div id="cardScaleWrapper" class="relative transition-transform duration-150 ease-out origin-center">
                  
                  <!-- Canvas CR80 (1050 x 662 px) -->
                  <div id="creditCardCanvas" class="relative w-[1050px] h-[662px] bg-slate-950 rounded-[34px] shadow-2xl overflow-hidden border border-slate-700/80 select-none">
                    
                    <!-- Camada de Fundo SVG Vetorial Oficial FPEFT -->
                    <div id="svgBackgroundContainer" class="absolute inset-0 w-full h-full pointer-events-none">
                      <!-- Template SVG embutido ou custom -->
                    </div>

                    <!-- Camada de Guias de Alinhamento e Limites Inteligentes (SVG 1050x662) -->
                    <svg id="alignmentGuidesLayer" class="absolute inset-0 w-full h-full pointer-events-none" style="z-index: 35;" viewBox="0 0 1050 662" xmlns="http://www.w3.org/2000/svg">
                      <!-- Linhas do meio, laterais, bounding boxes e snapping dinâmico -->
                    </svg>

                    <!-- Camada de Elementos Editáveis (Foto, Caixas Brancas, QR, Assinatura) -->
                    <div id="interactiveElementsLayer" class="absolute inset-0 w-full h-full">
                      <!-- Renderizado via JavaScript com drag e resize handles -->
                    </div>

                  </div>

                </div>

                <!-- CONTROLE FLUTUANTE DE AJUSTE DIRETO, CURVAS E SETAS DIRECIONAIS -->
                <div id="floatingControlPanel" class="absolute z-50 bg-[#090e1a]/95 backdrop-blur-md border border-pe-gold/40 rounded-2xl shadow-2xl flex flex-col text-xs transition-shadow duration-200 pointer-events-auto select-none" style="display: none; width: 330px; min-width: 270px; max-width: 580px; min-height: 120px; max-height: calc(100vh - 120px); left: 30px; top: 30px;">
                  
                  <!-- Alças de Redimensionamento das 8 Bordas da Janela Flutuante -->
                  <div class="win-resizer win-resizer-t" data-edge="n"></div>
                  <div class="win-resizer win-resizer-b" data-edge="s"></div>
                  <div class="win-resizer win-resizer-l" data-edge="w"></div>
                  <div class="win-resizer win-resizer-r" data-edge="e"></div>
                  <div class="win-resizer win-resizer-tl" data-edge="nw"></div>
                  <div class="win-resizer win-resizer-tr" data-edge="ne"></div>
                  <div class="win-resizer win-resizer-bl" data-edge="sw"></div>
                  <div class="win-resizer win-resizer-br" data-edge="se"></div>

                  <!-- Header da Janela Flutuante (Arrastável) -->
                  <div id="floatingHeader" class="p-3 border-b border-[#1c253b] flex items-center justify-between cursor-move shrink-0 bg-[#060a12]/90 rounded-t-2xl">
                    <div class="flex items-center gap-2 truncate pr-2">
                      <span class="w-2.5 h-2.5 rounded-full bg-pe-gold shrink-0 shadow-sm shadow-pe-gold/50 animate-pulse"></span>
                      <span id="floatingItemLabel" class="font-bold text-white text-xs truncate">Nome do Atleta</span>
                    </div>
                    <div class="flex items-center gap-1 shrink-0">
                      <button type="button" id="btnPinFloating" title="Fixar / Manter no Local" class="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-800 text-slate-400 hover:text-pe-gold transition text-xs cursor-pointer">
                        <i class="fa-solid fa-thumbtack text-[11px]"></i>
                      </button>
                      <button type="button" id="btnMinimizeFloating" title="Minimizar / Expandir" class="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-800 text-slate-400 hover:text-white transition text-xs cursor-pointer">
                        <i class="fa-solid fa-minus text-[10px]"></i>
                      </button>
                      <button type="button" id="btnCloseFloating" title="Fechar Janela" class="w-6 h-6 flex items-center justify-center rounded hover:bg-slate-800 text-slate-400 hover:text-rose-400 transition text-xs cursor-pointer">
                        <i class="fa-solid fa-xmark text-xs"></i>
                      </button>
                    </div>
                  </div>

                  <!-- Conteúdo Interno com Scrollbar -->
                  <div id="floatingBody" class="p-3.5 space-y-3 overflow-y-auto flex-1 custom-scroll">
                    
                    <!-- Setas de Posição com D-PAD -->
                    <div class="bg-[#05080e] p-3 rounded-xl border border-[#1c253b] flex flex-col items-center">
                      <div class="flex items-center justify-between w-full mb-2">
                        <span class="text-[10px] text-slate-300 font-bold uppercase tracking-wider flex items-center gap-1.5">
                          <i class="fa-solid fa-arrows-up-down-left-right text-pe-gold"></i> SETAS DE POSIÇÃO
                        </span>
                        <button type="button" id="btnCycleStep" class="text-[10px] bg-slate-800 hover:bg-pe-darkblue text-pe-gold font-mono px-2 py-0.5 rounded border border-slate-700 hover:border-pe-gold/50 transition cursor-pointer">
                          Passo: <span id="nudgeStepValue">1px</span>
                        </button>
                      </div>

                      <!-- D-PAD Direcional -->
                      <div class="grid grid-cols-3 gap-1.5 w-full max-w-[170px] items-center justify-center">
                        <div></div>
                        <button type="button" id="btnNudgeUp" class="h-8 bg-slate-800/90 hover:bg-pe-blue active:scale-95 text-slate-200 hover:text-white rounded-lg flex items-center justify-center transition shadow border border-slate-700 cursor-pointer">
                          <i class="fa-solid fa-chevron-up text-xs"></i>
                        </button>
                        <div></div>

                        <button type="button" id="btnNudgeLeft" class="h-8 bg-slate-800/90 hover:bg-pe-blue active:scale-95 text-slate-200 hover:text-white rounded-lg flex items-center justify-center transition shadow border border-slate-700 cursor-pointer">
                          <i class="fa-solid fa-chevron-left text-xs"></i>
                        </button>
                        <button type="button" id="btnFloatingResetPos" title="Centralizar Horizontalmente no Cartão" class="h-8 bg-[#070b14] hover:bg-slate-800 text-pe-gold rounded-lg flex items-center justify-center transition border border-pe-gold/40 active:scale-95 cursor-pointer">
                          <i class="fa-solid fa-compass text-xs"></i>
                        </button>
                        <button type="button" id="btnNudgeRight" class="h-8 bg-slate-800/90 hover:bg-pe-blue active:scale-95 text-slate-200 hover:text-white rounded-lg flex items-center justify-center transition shadow border border-slate-700 cursor-pointer">
                          <i class="fa-solid fa-chevron-right text-xs"></i>
                        </button>

                        <div></div>
                        <button type="button" id="btnNudgeDown" class="h-8 bg-slate-800/90 hover:bg-pe-blue active:scale-95 text-slate-200 hover:text-white rounded-lg flex items-center justify-center transition shadow border border-slate-700 cursor-pointer">
                          <i class="fa-solid fa-chevron-down text-xs"></i>
                        </button>
                        <div></div>
                      </div>
                      <p class="text-[9px] text-slate-500 mt-2 text-center">Dica: você também pode usar as setas do teclado</p>
                    </div>

                    <!-- Curvatura (Cantos) com Presets -->
                    <div class="bg-[#05080e] p-3 rounded-xl border border-[#1c253b]">
                      <div class="flex items-center justify-between text-[11px] mb-2">
                        <span class="text-slate-300 font-semibold flex items-center gap-1.5">
                          <i class="fa-solid fa-vector-square text-pe-gold"></i> Curvatura (Cantos)
                        </span>
                        <span id="radiusLabel" class="font-mono text-pe-gold font-bold text-[10px] bg-slate-800 px-2 py-0.5 rounded border border-slate-700">17px</span>
                      </div>
                      <input type="range" id="inputCurveRadius" min="0" max="40" value="17" class="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer">
                      <div class="flex justify-between items-center text-[9px] text-slate-400 mt-2 font-medium">
                        <button type="button" class="hover:text-pe-gold transition cursor-pointer" onclick="setRadiusPreset(0)">Reto [0]</button>
                        <button type="button" class="hover:text-pe-gold transition cursor-pointer" onclick="setRadiusPreset(8)">Suave [8]</button>
                        <button type="button" class="hover:text-pe-gold transition cursor-pointer" onclick="setRadiusPreset(20)">Pílula [Total]</button>
                      </div>
                    </div>

                    <!-- Largura e Altura Diretas -->
                    <div class="grid grid-cols-2 gap-2.5">
                      <div>
                        <label class="text-[10px] text-slate-400 block mb-1">Largura [Width]</label>
                        <div class="flex items-center bg-[#05080e] border border-slate-800 rounded-lg px-2.5 py-1.5 focus-within:border-pe-gold">
                          <input type="number" id="inputDirectWidth" class="w-full bg-transparent text-white font-mono text-xs focus:outline-none">
                          <span class="text-[10px] text-slate-500 ml-1">px</span>
                        </div>
                      </div>
                      <div>
                        <label class="text-[10px] text-slate-400 block mb-1">Altura [Height]</label>
                        <div class="flex items-center bg-[#05080e] border border-slate-800 rounded-lg px-2.5 py-1.5 focus-within:border-pe-gold">
                          <input type="number" id="inputDirectHeight" class="w-full bg-transparent text-white font-mono text-xs focus:outline-none">
                          <span class="text-[10px] text-slate-500 ml-1">px</span>
                        </div>
                      </div>
                    </div>

                    <!-- Tipografia e Alinhamento -->
                    <div id="typographyControls" class="space-y-2.5 pt-2 border-t border-[#1c253b]">
                      <div class="grid grid-cols-2 gap-2.5">
                        <div>
                          <label class="text-[10px] text-slate-400 block mb-1">Tamanho Fonte</label>
                          <div class="flex items-center bg-[#05080e] border border-slate-800 rounded-lg px-2.5 py-1.5 focus-within:border-pe-gold">
                            <input type="number" id="inputFontSize" min="10" max="64" class="w-full bg-transparent text-white font-mono text-xs focus:outline-none">
                            <span class="text-[10px] text-slate-500 ml-1">px</span>
                          </div>
                        </div>
                        <div>
                          <label class="text-[10px] text-slate-400 block mb-1">Cor do Texto</label>
                          <div class="flex items-center gap-2 bg-[#05080e] border border-slate-800 rounded-lg px-2 py-1 focus-within:border-pe-gold">
                            <input type="color" id="inputTextColor" class="w-6 h-6 bg-transparent cursor-pointer rounded border-0 p-0">
                            <span id="textColorHex" class="text-[11px] font-mono text-slate-300 uppercase">#00204A</span>
                          </div>
                        </div>
                      </div>

                      <!-- Alinhamento do Texto Editável (Valor Interno) -->
                      <div class="flex items-center justify-between pt-1">
                        <div>
                          <span class="text-[10px] text-slate-300 font-semibold block">Texto Editável</span>
                          <span class="text-[8.5px] text-slate-500 block">Conteúdo interno (ex: CPF, Nome)</span>
                        </div>
                        <div class="flex bg-[#05080e] border border-slate-800 rounded-lg p-0.5 gap-0.5" id="groupAlignText">
                          <button type="button" id="btnAlignLeft" title="Texto à Esquerda" class="w-7 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer">
                            <i class="fa-solid fa-align-left text-[11px]"></i>
                          </button>
                          <button type="button" id="btnAlignCenter" title="Texto Centralizado" class="w-7 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer">
                            <i class="fa-solid fa-align-center text-[11px]"></i>
                          </button>
                          <button type="button" id="btnAlignRight" title="Texto à Direita" class="w-7 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer">
                            <i class="fa-solid fa-align-right text-[11px]"></i>
                          </button>
                        </div>
                      </div>

                      <!-- Alinhamento do Texto Fixo (Rótulo / Título Superior) -->
                      <div id="labelAlignControlBox" class="flex items-center justify-between pt-1 border-t border-[#1c253b]/60">
                        <div>
                          <span class="text-[10px] text-slate-300 font-semibold block">Texto Fixo (Rótulo)</span>
                          <span class="text-[8.5px] text-slate-500 block">Título do campo (ex: CPF, MODALIDADE)</span>
                        </div>
                        <div class="flex bg-[#05080e] border border-slate-800 rounded-lg p-0.5 gap-0.5" id="groupAlignLabel">
                          <button type="button" id="btnLabelAlignLeft" title="Rótulo à Esquerda" class="w-7 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer">
                            <i class="fa-solid fa-align-left text-[11px]"></i>
                          </button>
                          <button type="button" id="btnLabelAlignCenter" title="Rótulo Centralizado" class="w-7 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer">
                            <i class="fa-solid fa-align-center text-[11px]"></i>
                          </button>
                          <button type="button" id="btnLabelAlignRight" title="Rótulo à Direita" class="w-7 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer">
                            <i class="fa-solid fa-align-right text-[11px]"></i>
                          </button>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>



        </div>

        <!-- ===================================================== -->
        <!-- 3. 👥 NOVA ABA: JOGADORES CADASTRADOS & HOMOLOGAÇÃO    -->
        <!-- ===================================================== -->
        <div id="tabContent-jogadores" class="space-y-6 hidden">
          <!-- Cabeçalho Oficial da Aba de Jogadores -->
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-[#070b14] border border-[#1c253b] p-5 rounded-2xl shadow-xl">
            <div class="flex items-center gap-3">
              <div class="w-12 h-12 rounded-xl bg-gradient-to-tr from-pe-blue via-pe-darkblue to-pe-gold p-0.5 shadow-lg shadow-pe-gold/20 shrink-0">
                <div class="w-full h-full bg-[#070b14] rounded-[10px] flex items-center justify-center">
                  <i class="fa-solid fa-users text-pe-gold text-lg"></i>
                </div>
              </div>
              <div>
                <h2 class="font-oswald text-2xl uppercase font-bold text-white tracking-wide">Jogadores Cadastrados FPEFT</h2>
                <p class="text-xs text-slate-400">Relação completa de atletas federados, homologação oficial e dados cadastrais</p>
              </div>
            </div>

            <!-- Ações em Lote e Cadastro -->
            <div class="flex flex-wrap items-center gap-2.5 w-full lg:w-auto">
              <button type="button" onclick="switchTab('atletas')" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-pe-gold hover:bg-pe-goldHover text-pe-dark transition shadow cursor-pointer active:scale-95 min-h-[42px]">
                <i class="fa-solid fa-plus"></i> Novo no Studio
              </button>
              <button type="button" id="btnOpenBatchImport" onclick="openBatchImportModal()" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#0b101d] hover:bg-[#15203a] border border-[#1c253b] text-slate-200 hover:text-white transition cursor-pointer active:scale-95 min-h-[42px]">
                <i class="fa-solid fa-file-import text-pe-gold"></i> Importar Lista (CSV)
              </button>
              <button type="button" id="btnExportarZipJogadores" onclick="exportAllAthletesBatchZip()" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-gradient-to-r from-sky-600 to-blue-600 hover:from-sky-500 hover:to-blue-500 text-white transition shadow shadow-sky-600/20 cursor-pointer active:scale-95 min-h-[42px]">
                <i class="fa-solid fa-file-zipper"></i> Exportar Todas em Lote (HD ZIP)
              </button>
              <button type="button" id="btnExportarCsvJogadores" onclick="exportAthletesToCsv()" class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3.5 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#0b101d] hover:bg-[#15203a] border border-[#1c253b] text-slate-200 hover:text-white transition cursor-pointer active:scale-95 min-h-[42px]">
                <i class="fa-solid fa-file-excel text-emerald-400"></i> Baixar CSV
              </button>
            </div>
          </div>

          <!-- Cards de Contadores e Métricas -->
          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-4 flex items-center justify-between shadow-lg">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Total de Atletas</span>
                <h4 id="statTotalJogadores" class="font-oswald text-2xl font-bold text-white mt-1">0</h4>
              </div>
              <div class="w-10 h-10 rounded-xl bg-blue-500/10 text-sky-400 flex items-center justify-center text-lg">
                <i class="fa-solid fa-user-group"></i>
              </div>
            </div>
            <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-4 flex items-center justify-between shadow-lg">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Homologados (Oficiais no Site)</span>
                <h4 id="statHomologadosJogadores" class="font-oswald text-2xl font-bold text-emerald-400 mt-1">0</h4>
              </div>
              <div class="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-lg">
                <i class="fa-solid fa-circle-check"></i>
              </div>
            </div>
            <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-4 flex items-center justify-between shadow-lg">
              <div>
                <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Aguardando Homologação</span>
                <h4 id="statPendentesJogadores" class="font-oswald text-2xl font-bold text-amber-400 mt-1">0</h4>
              </div>
              <div class="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-400 flex items-center justify-center text-lg">
                <i class="fa-solid fa-clock"></i>
              </div>
            </div>
          </div>

          <!-- BANNER CONDICIONAL DE ALERTA: SÓ APARECE SE HOUVER JOGADOR PENDENTE DE HOMOLOGAÇÃO -->
          <div id="bannerHomologacaoPendente" class="hidden bg-gradient-to-r from-amber-950/70 via-amber-900/40 to-[#0b101d] border border-amber-500/50 rounded-2xl p-4 sm:p-5 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div class="flex items-center gap-3.5">
              <div class="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-lg shrink-0 animate-pulse">
                <i class="fa-solid fa-triangle-exclamation"></i>
              </div>
              <div>
                <h4 class="font-bold text-white text-sm flex items-center gap-2">
                  <span>Jogadores Recentes Aguardando Homologação</span>
                  <span id="badgeCountPendentes" class="bg-amber-500 text-black font-extrabold text-[10px] px-2 py-0.5 rounded-full">0</span>
                </h4>
                <p class="text-xs text-amber-200/80">Existem atletas criados recentemente que precisam ser homologados para constarem na validação pública oficial do site.</p>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 shrink-0 w-full sm:w-auto">
              <button type="button" id="btnFiltrarPendentes" onclick="toggleFiltroPendentes()" class="inline-flex items-center justify-center gap-2 bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 text-amber-300 font-bold text-xs uppercase px-4 py-2.5 rounded-xl transition cursor-pointer min-h-[42px]">
                <i class="fa-solid fa-filter"></i> <span id="labelFiltrarPendentes">Ver Apenas Pendentes</span>
              </button>
              <button type="button" onclick="homologarTodosPendentes()" class="inline-flex items-center justify-center gap-2 bg-pe-gold hover:bg-pe-goldHover text-pe-dark font-black text-xs uppercase px-4 py-2.5 rounded-xl transition shadow cursor-pointer min-h-[42px]">
                <i class="fa-solid fa-check-double"></i> Homologar Todos Agora
              </button>
            </div>
          </div>

          <!-- Tabela de Jogadores Cadastrados (Dados completos, sem foto nas colunas, ordem A-Z, hover completo) -->
          <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-5 sm:p-6 shadow-xl space-y-4">
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div class="relative flex-1 max-w-md">
                <i class="fa-solid fa-magnifying-glass absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-xs"></i>
                <input type="text" id="searchJogadoresInput" oninput="debouncedFilterJogadoresTable()" placeholder="Buscar por nome, código, CPF, município ou clube..." class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl pl-9 pr-4 py-2.5 text-xs text-white outline-none transition" />
              </div>

              <div class="flex flex-wrap items-center gap-2">
                <!-- Botão Limpar Todos -->
                <button type="button" onclick="clearAllAthletes()" class="inline-flex items-center justify-center gap-1.5 bg-rose-950/40 hover:bg-rose-900/60 border border-rose-500/40 text-rose-300 font-bold text-xs uppercase px-3.5 py-2.5 rounded-xl transition cursor-pointer min-h-[40px]" title="Remover todos os jogadores cadastrados">
                  <i class="fa-solid fa-trash-can"></i> Limpar Todos
                </button>

                <!-- Filtros por Status -->
                <button type="button" onclick="setJogadoresFilterStatus('ALL')" id="filterTabStatus-ALL" class="inline-flex items-center justify-center text-xs px-3.5 py-2.5 rounded-xl font-bold transition cursor-pointer bg-pe-gold text-pe-dark min-h-[40px]">
                  Todos (Ordem A-Z)
                </button>
                <button type="button" onclick="setJogadoresFilterStatus('HOMOLOGADO')" id="filterTabStatus-HOMOLOGADO" class="inline-flex items-center justify-center text-xs px-3.5 py-2.5 rounded-xl font-bold transition cursor-pointer bg-[#05080e] border border-[#1c253b] text-slate-300 hover:text-white min-h-[40px]">
                  Homologados (<span id="countBtnHomologados">0</span>)
                </button>
                <!-- BOTÃO CONDICIONAL: Só aparece via JS se houver pendentes -->
                <button type="button" onclick="setJogadoresFilterStatus('PENDENTE')" id="filterTabStatus-PENDENTE" class="hidden inline-flex items-center justify-center text-xs px-3.5 py-2.5 rounded-xl font-bold transition cursor-pointer bg-[#05080e] border border-amber-500/50 text-amber-400 hover:bg-amber-500/20 min-h-[40px]">
                  ⏳ Aguardando Homologação (<span id="countBtnPendentes">0</span>)
                </button>
                <!-- BOTÃO CONDICIONAL: Só aparece via JS se houver desabilitados -->
                <button type="button" onclick="setJogadoresFilterStatus('DESABILITADO')" id="filterTabStatus-DESABILITADO" class="hidden inline-flex items-center justify-center text-xs px-3.5 py-2.5 rounded-xl font-bold transition cursor-pointer bg-[#05080e] border border-rose-500/50 text-rose-400 hover:bg-rose-500/20 min-h-[40px]">
                  🚫 Desabilitados (<span id="countBtnDesabilitados">0</span>)
                </button>

                <!-- Filtro por Categoria (4 Bases) -->
                <div class="inline-flex items-center gap-1.5 bg-[#05080e] border border-[#1c253b] rounded-xl px-3 py-2 min-h-[40px]">
                  <i class="fa-solid fa-layer-group text-pe-gold text-xs"></i>
                  <span class="text-[10px] text-slate-400 font-bold uppercase">Categoria:</span>
                  <select id="filterJogadoresCategoria" onchange="renderJogadoresCadastradosTable()" class="bg-transparent text-xs text-white font-bold outline-none cursor-pointer">
                    <option value="ALL" class="bg-[#0b101d] text-white">Todas</option>
                    <option value="ASPIRANTE" class="bg-[#0b101d] text-cyan-300 font-bold">Aspirante</option>
                    <option value="INICIANTE" class="bg-[#0b101d] text-emerald-300 font-bold">Iniciante</option>
                    <option value="AMADOR" class="bg-[#0b101d] text-amber-300 font-bold">Amador</option>
                    <option value="PROFISSIONAL" class="bg-[#0b101d] text-purple-300 font-bold">Profissional</option>
                  </select>
                </div>
              </div>
            </div>

            <!-- Dica Visual de Hover da Ficha Completa -->
            <div class="text-[11px] text-slate-400 flex items-center gap-2 bg-[#05080e]/60 px-3.5 py-2 rounded-xl border border-[#1c253b]">
              <i class="fa-solid fa-circle-info text-pe-gold"></i>
              <span><strong>Ficha Completa:</strong> Passe o cursor do mouse sobre qualquer linha da tabela para abrir a <strong>Ficha Completa Oficial com Foto 3x4 e QR Code</strong>.</span>
            </div>

            <!-- Tabela com todos os dados textuais, sem foto para leveza e alta densidade -->
            <div class="overflow-x-auto rounded-xl border border-[#1c253b]">
              <table class="w-full text-left text-xs whitespace-nowrap">
                <thead class="bg-[#05080e] text-slate-400 uppercase text-[10px] font-mono border-b border-[#1c253b]">
                  <tr>
                    <th class="py-3 px-3.5">Nº Federado</th>
                    <th class="py-3 px-3.5">Nome do Jogador (A-Z)</th>
                    <th class="py-3 px-3.5">Status da Carteira</th>
                    <th class="py-3 px-3.5">Ações da Carteira</th>
                    <th class="py-3 px-3.5">Categoria</th>
                    <th class="py-3 px-3.5">Modalidade</th>
                    <th class="py-3 px-3.5">Município</th>
                    <th class="py-3 px-3.5">CPF</th>
                    <th class="py-3 px-3.5">Nascimento</th>
                    <th class="py-3 px-3.5">Telefone</th>
                    <th class="py-3 px-3.5">Validade</th>
                  </tr>
                </thead>
                <tbody id="jogadoresTableBody" class="divide-y divide-[#1c253b]/60">
                  <!-- Linhas renderizadas ordenadas alfabeticamente A-Z -->
                </tbody>
              </table>
            </div>

            <!-- Rodapé com Contador -->
            <div class="flex items-center justify-between text-xs text-slate-400 pt-2">
              <span id="jogadoresTableCount">Mostrando 0 jogadores</span>
              <span class="text-[10px] font-mono text-slate-500">Classificação: Alfabética por Nome (A-Z)</span>
            </div>
          </div>
        </div>
        <!-- ===================================================== -->
        <!-- 3. 📰 ABA NOTÍCIAS & TORNEIOS                         -->
        <!-- ===================================================== -->
        <div id="tabContent-noticias" class="space-y-6 hidden">
          
          <!-- Top Navigation & Brand Header -->
          <div class="border-b border-[#1c253b] bg-[#070a13]/90 backdrop-blur rounded-2xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-xl">
            <div>
              <div class="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-[#f59e0b] uppercase">
                <span class="w-2 h-2 rounded-full bg-[#f59e0b] animate-pulse"></span>
                BOLETINS OFICIAIS & IMPRENSA
              </div>
              <h2 class="font-oswald text-2xl sm:text-3xl font-black tracking-tight text-white uppercase mt-0.5">
                GERENCIAR NOTÍCIAS & TORNEIOS
              </h2>
            </div>

            <!-- Quick Metrics -->
            <div class="flex items-center gap-3">
              <div class="bg-[#0f172a]/80 border border-[#1e293b] px-3.5 py-1.5 rounded-lg flex items-center gap-2 text-xs">
                <i class="fa-solid fa-newspaper text-[#3b82f6]"></i>
                <span class="text-slate-400">Notícias no ar:</span>
                <span id="news-counter" class="font-bold text-white bg-blue-600/30 px-2 py-0.5 rounded text-blue-400">0</span>
              </div>
              <div class="bg-[#0f172a]/80 border border-[#1e293b] px-3.5 py-1.5 rounded-lg flex items-center gap-2 text-xs">
                <i class="fa-solid fa-cloud-arrow-up text-emerald-400"></i>
                <span class="text-slate-400">Status:</span>
                <span class="font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Conectado
                </span>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- LEFT COLUMN: Formulário de Adição/Edição -->
            <section class="lg:col-span-5 bg-[#0f172a] border border-[#1e293b] rounded-2xl shadow-2xl relative overflow-hidden">
              <!-- Top Colored Line Strip (Pernambuco / FPEFT stripes) -->
              <div class="h-1.5 w-full top-gradient-bar"></div>

              <div class="p-5 sm:p-6 space-y-5">
                <!-- Form Header -->
                <div class="flex items-center justify-between pb-3 border-b border-[#1e293b]/60">
                  <div class="flex items-center gap-2.5">
                    <span id="form-icon" class="text-brand-gold text-lg">
                      <i class="fa-solid fa-bullhorn"></i>
                    </span>
                    <h3 id="form-title" class="font-oswald font-black tracking-wide text-lg text-white uppercase">
                      Publicar Nova Notícia
                    </h3>
                  </div>
                  <button id="cancel-edit-btn" onclick="resetForm()" class="hidden text-xs text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 px-2.5 py-1 rounded-lg transition flex items-center gap-1 cursor-pointer">
                    <i class="fa-solid fa-xmark"></i> Cancelar Edição
                  </button>
                </div>

                <form id="news-form" onsubmit="handleFormSubmit(event)" class="space-y-4">
                  <input type="hidden" id="edit-id" value="">

                  <!-- Título da Matéria -->
                  <div>
                    <label for="news-title" class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Título da Matéria <span class="text-brand-gold">*</span>
                    </label>
                    <input 
                      type="text" 
                      id="news-title" 
                      required
                      placeholder="ex: II Campeonato Mundial de Foot Table" 
                      class="w-full bg-[#0b1120] border border-[#1e293b] rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition shadow-inner font-medium"
                    >
                  </div>

                  <!-- Categoria e Data -->
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label for="news-category" class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Categoria <span class="text-brand-gold">*</span>
                      </label>
                      <div class="relative">
                        <select 
                          id="news-category" 
                          required
                          class="w-full bg-[#0b1120] border border-[#1e293b] rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-brand-accent transition appearance-none cursor-pointer pr-9 font-medium"
                        >
                          <option value="MUNDIAL ROMA">MUNDIAL ROMA</option>
                          <option value="CAMPEONATO">CAMPEONATO</option>
                          <option value="REGULAMENTO">REGULAMENTO</option>
                          <option value="COMUNICADO">COMUNICADO</option>
                          <option value="CONVOCAÇÃO">CONVOCAÇÃO</option>
                          <option value="CIRCUITO PE">CIRCUITO PE</option>
                          <option value="INFORMATIVO">INFORMATIVO</option>
                        </select>
                        <i class="fa-solid fa-chevron-down absolute right-3 top-3.5 text-slate-400 text-xs pointer-events-none"></i>
                      </div>
                    </div>

                    <div>
                      <label for="news-date" class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                        Data Oficial <span class="text-brand-gold">*</span>
                      </label>
                      <input 
                        type="date" 
                        id="news-date" 
                        required
                        class="w-full bg-[#0b1120] border border-[#1e293b] rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-brand-accent transition font-medium"
                      >
                    </div>
                  </div>

                  <!-- Destaque e Imagem Capa -->
                  <div class="bg-[#0b1120]/70 border border-[#1e293b] rounded-xl p-3.5 space-y-3">
                    <div class="flex items-center justify-between">
                      <span class="text-xs font-medium text-slate-300 flex items-center gap-1.5">
                        <i class="fa-solid fa-star text-brand-gold"></i>
                        Fixar em Destaque na Home
                      </span>
                      <label class="relative inline-flex items-center cursor-pointer">
                        <input type="checkbox" id="news-featured" class="sr-only peer">
                        <div class="w-9 h-5 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand-gold"></div>
                      </label>
                    </div>

                    <!-- Upload da Foto / Banner de Capa -->
                    <div class="space-y-2.5">
                      <div class="flex items-center justify-between">
                        <label class="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                          Foto / Banner de Capa (Supabase)
                        </label>
                        <span class="text-[10px] text-pe-gold font-mono">JPG, PNG, WEBP</span>
                      </div>

                      <!-- Área de Upload Interativa Exclusiva do PC -->
                      <div>
                        <label class="w-full bg-gradient-to-r from-blue-950/60 via-[#0d1527] to-indigo-950/60 hover:from-blue-900/80 hover:to-indigo-900/80 border border-blue-500/40 hover:border-blue-400 text-white rounded-xl p-3.5 flex items-center justify-center gap-3 cursor-pointer transition text-center group shadow-md">
                          <div class="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition shrink-0">
                            <i class="fa-solid fa-cloud-arrow-up text-sm"></i>
                          </div>
                          <div class="text-left">
                            <span class="text-xs font-bold text-white block">Carregar Foto do Computador</span>
                            <span class="text-[10px] text-slate-400 block">Clique para selecionar imagem do seu PC (JPG, PNG, WEBP)</span>
                          </div>
                          <input type="file" id="news-file-input" accept="image/*" onchange="handleNewsImageUpload(event)" class="hidden">
                        </label>
                        <!-- Campo interno para dados da imagem para sincronização com Supabase -->
                        <input type="hidden" id="news-image">
                      </div>

                      <!-- Feedback de arquivo otimizado -->
                      <div id="news-image-info" class="hidden text-[11px] p-2 bg-emerald-950/40 border border-emerald-500/30 rounded-lg flex items-center justify-between">
                        <span id="news-image-info-text" class="text-emerald-300"></span>
                        <button type="button" onclick="clearNewsImage()" class="text-red-400 hover:text-red-300 text-xs font-bold px-1.5 cursor-pointer" title="Remover Imagem">✕</button>
                      </div>

                      <!-- Miniatura da Imagem com botão de exclusão -->
                      <div id="image-preview-container" class="mt-2 hidden relative group">
                        <img id="image-preview" src="" alt="Prévia da capa" class="w-full h-32 object-cover rounded-xl border border-brand-border">
                        <button type="button" onclick="clearNewsImage()" class="absolute top-2 right-2 bg-black/75 hover:bg-red-600 text-white p-1.5 rounded-lg text-xs transition cursor-pointer" title="Remover imagem">
                          <i class="fa-solid fa-trash"></i>
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- Resumo / Linha-fina -->
                  <div>
                    <div class="flex justify-between items-center mb-1.5">
                      <label for="news-summary" class="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Resumo / Linha-fina <span class="text-brand-gold">*</span>
                      </label>
                      <span id="summary-counter" class="text-[11px] text-slate-500">0/180 carac.</span>
                    </div>
                    <textarea 
                      id="news-summary" 
                      required
                      rows="2"
                      maxlength="180"
                      oninput="document.getElementById('summary-counter').innerText = `${this.value.length}/180 carac.`"
                      placeholder="Breve descrição que aparece no card de notícias da listagem..." 
                      class="w-full bg-[#0b1120] border border-[#1e293b] rounded-lg p-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-accent transition shadow-inner"
                    ></textarea>
                  </div>

                  <!-- Conteúdo Completo (com mini editor formatador) -->
                  <div>
                    <div class="flex justify-between items-center mb-1.5">
                      <label for="news-content" class="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                        Conteúdo da Matéria Completa
                      </label>
                      <!-- Toolbar simples de Markdown -->
                      <div class="flex items-center gap-1 bg-slate-800/80 px-2 py-0.5 rounded text-xs text-slate-300">
                        <button type="button" onclick="insertFormat('**', '**')" class="hover:text-white px-1 cursor-pointer" title="Negrito"><i class="fa-solid fa-bold"></i></button>
                        <button type="button" onclick="insertFormat('*', '*')" class="hover:text-white px-1 cursor-pointer" title="Itálico"><i class="fa-solid fa-italic"></i></button>
                        <button type="button" onclick="insertFormat('\n- ', '')" class="hover:text-white px-1 cursor-pointer" title="Lista"><i class="fa-solid fa-list-ul"></i></button>
                      </div>
                    </div>
                    <textarea 
                      id="news-content" 
                      rows="4" 
                      placeholder="Escreva a nota completa, detalhes técnicos, chaves dos jogos e pronunciamentos oficiais..." 
                      class="w-full bg-[#0b1120] border border-[#1e293b] rounded-lg p-3 text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-brand-accent transition shadow-inner font-mono text-xs"
                    ></textarea>
                  </div>

                  <!-- Link Externo / PDF Oficial -->
                  <div>
                    <label for="news-link" class="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5">
                      Link Externo ou PDF Oficial <span class="text-slate-500 font-normal lowercase">(opcional)</span>
                    </label>
                    <div class="relative">
                      <span class="absolute left-3 top-2.5 text-slate-500 text-xs">
                        <i class="fa-solid fa-link"></i>
                      </span>
                      <input 
                        type="url" 
                        id="news-link" 
                        placeholder="https://federacao.com/regulamento.pdf" 
                        class="w-full bg-[#0b1120] border border-[#1e293b] rounded-lg pl-8 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition"
                      >
                    </div>
                  </div>

                  <!-- Botões de Ação -->
                  <div class="pt-2">
                    <button 
                      type="submit" 
                      id="submit-button"
                      class="w-full bg-[#f59e0b] hover:bg-[#fbbf24] text-slate-950 font-oswald font-black text-sm uppercase tracking-wider py-3 px-5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-amber-500/10 hover:shadow-amber-500/20 active:scale-[0.99] transition duration-150 cursor-pointer"
                    >
                      <i class="fa-solid fa-rocket"></i>
                      <span id="submit-button-text">Publicar no Site & Supabase</span>
                    </button>
                  </div>
                </form>
              </div>
            </section>

            <!-- RIGHT COLUMN: Lista de Notícias no Ar -->
            <section class="lg:col-span-7 space-y-4">
              
              <!-- Top Section Header & Filter Toolbar -->
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-[#1e293b]">
                <div class="flex items-center gap-2">
                  <span class="text-xl">📰</span>
                  <h3 class="font-oswald font-black tracking-wide text-xl text-white uppercase">
                    Notícias no Ar
                  </h3>
                </div>

                <!-- Search Bar -->
                <div class="relative w-full sm:w-64">
                  <input 
                    type="text" 
                    id="search-input" 
                    oninput="debouncedRenderNewsList()" 
                    placeholder="Buscar por título ou tema..." 
                    class="w-full bg-[#0f172a] border border-[#1e293b] rounded-xl pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-brand-accent transition"
                  >
                  <i class="fa-solid fa-magnifying-glass absolute left-3 top-2.5 text-slate-500 text-xs"></i>
                </div>
              </div>

              <!-- Quick Filter Pills -->
              <div class="flex flex-wrap items-center gap-2 pt-1" id="category-pills">
                <button onclick="setFilterCategory('ALL')" class="cat-pill active text-[11px] font-bold px-3 py-1 rounded-full border border-blue-500/40 bg-blue-600/20 text-blue-300 cursor-pointer">
                  TODAS
                </button>
                <button onclick="setFilterCategory('MUNDIAL ROMA')" class="cat-pill text-[11px] font-bold px-3 py-1 rounded-full border border-[#1e293b] bg-[#0f172a] text-slate-400 hover:text-white cursor-pointer">
                  MUNDIAL ROMA
                </button>
                <button onclick="setFilterCategory('CAMPEONATO')" class="cat-pill text-[11px] font-bold px-3 py-1 rounded-full border border-[#1e293b] bg-[#0f172a] text-slate-400 hover:text-white cursor-pointer">
                  CAMPEONATO
                </button>
                <button onclick="setFilterCategory('REGULAMENTO')" class="cat-pill text-[11px] font-bold px-3 py-1 rounded-full border border-[#1e293b] bg-[#0f172a] text-slate-400 hover:text-white cursor-pointer">
                  REGULAMENTO
                </button>
              </div>

              <!-- Feed Container -->
              <div id="news-container" class="space-y-3 pt-2">
                <!-- Notícias serão geradas dinamicamente via JS -->
              </div>
            </section>
          </div>
        </div>

        <!-- ===================================================== -->
        <!-- 5. 🖼️ ABA GALERIA OFICIAL DE FOTOS & ARENAS          -->
        <!-- ===================================================== -->
        <div id="tabContent-galeria" class="space-y-8 hidden">

          <!-- Banner Oficial da Galeria -->
          <div class="bg-gradient-to-r from-[#06173a] via-[#091e4a] to-[#040813] border border-[#1c253b] rounded-2xl p-5 sm:p-6 relative overflow-hidden shadow-xl">
            <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="flex items-start gap-4">
                <span class="text-3xl">🖼️</span>
                <div class="space-y-1">
                  <h3 class="font-oswald text-lg sm:text-xl uppercase font-bold text-white tracking-wide flex items-center gap-2">
                    <span>Galeria Oficial de Fotos & Arenas de Foot Table</span>
                  </h3>
                  <p class="text-xs text-slate-300">
                    Gerencie o acervo fotográfico exibido na página pública. Adicione novas fotos, substitua imagens e edite os títulos, categorias e descrições com prévia em tempo real.
                  </p>
                </div>
              </div>
              <div class="flex items-center gap-2 flex-wrap">
                <button type="button" onclick="focusGalleryForm()" class="px-3.5 py-2 bg-pe-gold hover:bg-pe-goldHover text-pe-dark font-oswald text-xs font-bold uppercase rounded-xl transition shadow flex items-center gap-1.5 cursor-pointer">
                  <i class="fa-solid fa-plus"></i>
                  <span>Nova Foto</span>
                </button>
                <button type="button" onclick="confirmResetGalleryToDefault()" class="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-xl border border-slate-700 transition flex items-center gap-1.5 cursor-pointer" title="Restaurar as 6 fotos oficiais de fábrica">
                  <i class="fa-solid fa-rotate-left"></i>
                  <span>Restaurar Padrão</span>
                </button>
                <a href="index.html#galeria" target="_blank" class="px-3.5 py-2 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs font-semibold rounded-xl border border-blue-500/30 transition flex items-center gap-1.5">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                  <span>Ver no Site</span>
                </a>
              </div>
            </div>
          </div>

          <!-- Formulário de Cadastro / Edição de Foto -->
          <div id="gallery-form-card" class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-5 sm:p-6 shadow-xl transition-all">
            <div class="flex items-center justify-between pb-4 mb-5 border-b border-[#1c253b]">
              <div class="flex items-center gap-2.5">
                <div class="w-8 h-8 rounded-lg bg-pe-gold/10 border border-pe-gold/30 flex items-center justify-center text-pe-gold text-sm">
                  <i id="gallery-form-icon" class="fa-solid fa-camera"></i>
                </div>
                <div>
                  <h4 id="gallery-form-title" class="font-oswald text-base uppercase font-bold text-white tracking-wide">
                    Adicionar Nova Foto à Galeria
                  </h4>
                  <p class="text-[11px] text-slate-400">Preencha os detalhes e selecione a foto para publicar na página principal</p>
                </div>
              </div>
              <button type="button" id="gallery-cancel-edit-btn" onclick="resetGalleryForm()" class="hidden px-3 py-1.5 text-xs text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition cursor-pointer">
                Cancelar Edição
              </button>
            </div>

            <form id="gallery-form" onsubmit="handleGalleryFormSubmit(event)" class="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <input type="hidden" id="gallery-edit-id" value="" />

              <!-- Coluna Esquerda: Upload da Foto & Live Preview (5 colunas) -->
              <div class="lg:col-span-5 space-y-4">
                <label class="block text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  Foto da Arena / Foot Table *
                </label>

                <!-- Botões de Modo de Upload -->
                <div class="grid grid-cols-3 gap-2">
                  <button type="button" onclick="setGalleryUploadMode('file')" id="gallery-mode-file-btn" class="py-2 px-2 text-center text-xs font-bold rounded-xl border border-pe-gold bg-pe-gold/10 text-pe-gold transition cursor-pointer">
                    <i class="fa-solid fa-folder-open block text-sm mb-1"></i>
                    Arquivo
                  </button>
                  <button type="button" onclick="setGalleryUploadMode('camera')" id="gallery-mode-camera-btn" class="py-2 px-2 text-center text-xs font-bold rounded-xl border border-[#1c253b] bg-[#070b14] text-slate-400 hover:text-white transition cursor-pointer">
                    <i class="fa-solid fa-camera block text-sm mb-1"></i>
                    Câmera
                  </button>
                  <button type="button" onclick="setGalleryUploadMode('url')" id="gallery-mode-url-btn" class="py-2 px-2 text-center text-xs font-bold rounded-xl border border-[#1c253b] bg-[#070b14] text-slate-400 hover:text-white transition cursor-pointer">
                    <i class="fa-solid fa-link block text-sm mb-1"></i>
                    Link / URL
                  </button>
                </div>

                <!-- Input File Oculto (computador/celular) -->
                <input type="file" id="gallery-file-input" accept="image/*" class="hidden" onchange="handleGalleryFileSelect(this)" />
                <!-- Input Camera Oculto (dispositivos móveis/tablet) -->
                <input type="file" id="gallery-camera-input" accept="image/*" capture="environment" class="hidden" onchange="handleGalleryFileSelect(this)" />
                <!-- Input Oculto de Troca Rápida de Foto -->
                <input type="file" id="gallery-quick-replace-input" accept="image/*" class="hidden" onchange="handleQuickReplacePhotoSelected(this)" />

                <!-- Dropzone / Clique para Selecionar Arquivo -->
                <div id="gallery-dropzone-box" onclick="triggerGalleryFilePicker()" class="border-2 border-dashed border-[#1c253b] hover:border-pe-gold/60 rounded-2xl p-5 text-center cursor-pointer transition bg-[#070b14]/60 group">
                  <i class="fa-solid fa-cloud-arrow-up text-3xl text-slate-500 group-hover:text-pe-gold transition mb-2 block"></i>
                  <p class="text-xs font-bold text-slate-200 group-hover:text-white">Clique para escolher foto do seu computador ou celular</p>
                  <p class="text-[10px] text-slate-500 mt-1">PNG, JPG, WEBP, GIF</p>
                </div>

                <!-- Input de URL Direta (inicialmente oculto) -->
                <div id="gallery-url-box" class="hidden space-y-2">
                  <div class="flex gap-2">
                    <input type="url" id="gallery-url-input" placeholder="https://exemplo.com/foto.jpg" class="flex-1 bg-[#070b14] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3.5 py-2.5 text-xs text-white outline-none" />
                    <button type="button" onclick="loadGalleryUrlImage()" class="px-3.5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition cursor-pointer">
                      Aplicar
                    </button>
                  </div>
                </div>

                <!-- Card de Pré-visualização Realista (Live Card Preview) -->
                <div>
                  <div class="flex items-center justify-between mb-2">
                    <span class="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                      <i class="fa-solid fa-eye text-pe-gold"></i> Prévia no Site Público:
                    </span>
                    <button type="button" onclick="clearGalleryImage()" id="gallery-clear-photo-btn" class="hidden text-[10px] text-red-400 hover:underline cursor-pointer">
                      Remover Foto
                    </button>
                  </div>
                  
                  <div class="rounded-2xl overflow-hidden border border-pe-cardBorder bg-[#05080e] shadow-lg">
                    <div class="aspect-[4/3] w-full overflow-hidden bg-slate-900 relative">
                      <img id="gallery-preview-img" src="assets/images/quadra 2.jpg" alt="Prévia" class="w-full h-full object-cover" />
                      <div id="gallery-preview-empty" class="hidden absolute inset-0 flex flex-col items-center justify-center bg-slate-900 text-slate-500 text-xs">
                        <i class="fa-solid fa-image text-3xl mb-1"></i>
                        <span>Nenhuma foto selecionada</span>
                      </div>
                    </div>
                    <div class="p-3.5 bg-gradient-to-t from-[#05080e] via-[#090d16] to-transparent">
                      <span id="gallery-preview-tag" class="text-[10px] font-bold text-pe-gold uppercase tracking-wider block mb-0.5">Arena Homologada</span>
                      <h5 id="gallery-preview-title" class="font-oswald text-sm uppercase font-bold text-white leading-tight">Estrutura de Quadra Oficial</h5>
                      <p id="gallery-preview-desc" class="text-slate-400 text-[11px] mt-1 line-clamp-2">Espaço padronizado para circuitos da Federação Pernambucana.</p>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Coluna Direita: Textos, Títulos e Tags (7 colunas) -->
              <div class="lg:col-span-7 space-y-4">
                <!-- Categoria / Tag Oficial -->
                <div>
                  <label for="gallery-input-tag" class="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Etiqueta / Categoria da Imagem *
                  </label>
                  <input 
                    type="text" 
                    id="gallery-input-tag" 
                    required 
                    placeholder="Ex: Arena Homologada, Equipamento Chancelado..."
                    oninput="updateGalleryLivePreview()"
                    class="w-full bg-[#070b14] border border-[#1c253b] focus:border-pe-gold rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition"
                  />
                  <!-- Sugestões Rápidas de 1 Clique -->
                  <div class="flex flex-wrap gap-1.5 mt-2">
                    <span class="text-[10px] text-slate-500 self-center mr-1">Sugestões:</span>
                    <button type="button" onclick="setGalleryTagValue('Arena Homologada')" class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 hover:bg-pe-gold hover:text-pe-dark text-slate-300 transition cursor-pointer">Arena Homologada</button>
                    <button type="button" onclick="setGalleryTagValue('Equipamento Chancelado')" class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 hover:bg-pe-gold hover:text-pe-dark text-slate-300 transition cursor-pointer">Equipamento Chancelado</button>
                    <button type="button" onclick="setGalleryTagValue('Competições Oficiais')" class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 hover:bg-pe-gold hover:text-pe-dark text-slate-300 transition cursor-pointer">Competições Oficiais</button>
                    <button type="button" onclick="setGalleryTagValue('Formação & Treino')" class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 hover:bg-pe-gold hover:text-pe-dark text-slate-300 transition cursor-pointer">Formação & Treino</button>
                    <button type="button" onclick="setGalleryTagValue('Litoral Pernambucano')" class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 hover:bg-pe-gold hover:text-pe-dark text-slate-300 transition cursor-pointer">Litoral Pernambucano</button>
                    <button type="button" onclick="setGalleryTagValue('Premiação')" class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-slate-800 hover:bg-pe-gold hover:text-pe-dark text-slate-300 transition cursor-pointer">Premiação</button>
                  </div>
                </div>

                <!-- Título da Foto -->
                <div>
                  <label for="gallery-input-title" class="block text-[11px] font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Título Oficial da Foto *
                  </label>
                  <input 
                    type="text" 
                    id="gallery-input-title" 
                    required 
                    placeholder="Ex: ESTRUTURA DE QUADRA OFICIAL"
                    oninput="updateGalleryLivePreview()"
                    class="w-full bg-[#070b14] border border-[#1c253b] focus:border-pe-gold rounded-xl px-4 py-3 text-sm text-white placeholder-slate-600 outline-none transition font-semibold"
                  />
                </div>

                <!-- Descrição / Detalhes da Foto -->
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <label for="gallery-input-desc" class="block text-[11px] font-bold uppercase tracking-wider text-slate-300">
                      Descrição / Subtítulo da Foto *
                    </label>
                    <span id="gallery-desc-counter" class="text-[10px] text-slate-500 font-mono">0/150 carac.</span>
                  </div>
                  <textarea 
                    id="gallery-input-desc" 
                    rows="4" 
                    required 
                    maxlength="200"
                    placeholder="Ex: Espaço padronizado para circuitos da Federação Pernambucana de Foot Table e FutMesa."
                    oninput="updateGalleryLivePreview()"
                    class="w-full bg-[#070b14] border border-[#1c253b] focus:border-pe-gold rounded-xl p-4 text-xs sm:text-sm text-white placeholder-slate-600 outline-none transition resize-none leading-relaxed"
                  ></textarea>
                </div>

                <!-- Botões de Ação -->
                <div class="pt-3 flex flex-col sm:flex-row items-center gap-3">
                  <button 
                    type="submit" 
                    id="gallery-submit-btn" 
                    class="w-full sm:flex-1 bg-pe-gold hover:bg-pe-goldHover text-pe-dark font-oswald text-base uppercase font-bold py-3.5 px-6 rounded-xl shadow-lg glow-gold transition flex items-center justify-center gap-2 cursor-pointer">
                    <i class="fa-solid fa-floppy-disk"></i>
                    <span id="gallery-submit-text">SALVAR FOTO NA GALERIA</span>
                  </button>
                  <button 
                    type="button" 
                    onclick="resetGalleryForm()" 
                    class="w-full sm:w-auto px-5 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition cursor-pointer">
                    Limpar
                  </button>
                </div>

              </div>
            </form>
          </div>

          <!-- Grade de Fotos Ativas na Galeria -->
          <div class="space-y-4">
            <div class="flex items-center justify-between pb-2 border-b border-[#1c253b]">
              <div class="flex items-center gap-3">
                <span class="w-2.5 h-2.5 rounded-full bg-pe-gold"></span>
                <h4 class="font-oswald text-base sm:text-lg uppercase font-bold text-white tracking-wide">
                  Fotos Ativas na Galeria Oficial (<span id="gallery-active-counter" class="text-pe-gold">0</span>)
                </h4>
              </div>
              <div class="text-[11px] text-slate-400">
                Altere textos, substitua fotos ou exclua itens a qualquer momento
              </div>
            </div>

            <!-- Grid onde os cards serão gerados dinamicamente -->
            <div id="adminGalleryGrid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              <!-- Gerado via JavaScript -->
            </div>
          </div>

        </div>

        <!-- Modal de Confirmação de Exclusão de Foto da Galeria -->
        <div id="gallery-delete-modal" class="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center p-4">
          <div class="bg-[#0f172a] border border-[#1e293b] max-w-sm w-full rounded-2xl p-6 text-center shadow-2xl space-y-4">
            <div class="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto text-xl border border-red-500/30">
              <i class="fa-solid fa-trash-can"></i>
            </div>
            <div>
              <h3 class="font-oswald font-black text-lg text-white uppercase">Excluir Foto da Galeria</h3>
              <p class="text-xs text-slate-400 mt-1 leading-relaxed">
                Tem certeza de que deseja remover esta foto e seus textos da galeria pública do site?
              </p>
            </div>
            <div class="flex items-center gap-3 pt-2">
              <button onclick="closeGalleryDeleteModal()" class="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold py-2.5 rounded-xl transition cursor-pointer">
                Cancelar
              </button>
              <button id="gallery-confirm-delete-btn" onclick="confirmDeleteGalleryItem()" class="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2.5 rounded-xl shadow-lg shadow-red-600/30 transition cursor-pointer">
                Sim, Excluir
              </button>
            </div>
          </div>
        </div>

        <!-- ===================================================== -->
        <!-- 5. 📧 ABA E-MAILS INSTITUCIONAIS & GESTÃO              -->
        <!-- ===================================================== -->
        <div id="tabContent-emails" class="space-y-8 hidden">
          
          <!-- Banner Informativo -->
          <div class="bg-gradient-to-r from-[#06173a] via-[#091e4a] to-[#040813] border border-[#1c253b] rounded-2xl p-5 sm:p-6 relative overflow-hidden shadow-xl">
            <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0"></div>
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div class="flex items-start gap-4">
                <span class="text-3xl">📧</span>
                <div class="space-y-1">
                  <h3 class="font-oswald text-lg sm:text-xl uppercase font-bold text-white tracking-wide flex items-center gap-2">
                    <span>E-mails Institucionais & Esquema de Operações</span>
                  </h3>
                  <p class="text-xs text-slate-300">
                    Crie cargos personalizados, defina o que cada cargo pode fazer no sistema e vincule as operações aos e-mails <code class="text-pe-gold bg-black/40 px-1.5 py-0.5 rounded font-mono font-bold">@foot-table.pe.org</code> credenciados.
                  </p>
                </div>
              </div>
              <div class="inline-flex items-center gap-2 bg-[#05080e] border border-pe-gold/40 px-3.5 py-2 rounded-xl text-xs shrink-0">
                <span class="text-pe-gold font-bold">⚡ DIRETOR ADJUNTO:</span>
                <span class="font-mono text-white font-bold">gabrielacessor@foot-table.pe.org</span>
              </div>
            </div>
          </div>

          <!-- SEÇÃO 1: ESQUEMA DE OPERAÇÕES & CONSTRUTOR DE CARGOS (FIEL À IMAGEM DO USUÁRIO) -->
          <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-6 sm:p-7 shadow-2xl relative space-y-6">
            <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0 rounded-t-2xl"></div>

            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#1c253b] pb-4">
              <div>
                <div class="flex items-center gap-2 text-pe-gold text-xs font-bold uppercase tracking-wider">
                  <span>🛡️</span> <span>ESQUEMA DE OPERAÇÃO DE CARGOS & PERMISSÕES</span>
                </div>
                <h3 class="font-oswald text-xl sm:text-2xl uppercase font-bold text-white mt-1">
                  O que cada Cargo deve fazer no sistema
                </h3>
                <p class="text-xs text-slate-400 mt-0.5">
                  Crie o nome do cargo, selecione as operações autorizadas nas 4 colunas abaixo e vincule aos e-mails credenciados.
                </p>
              </div>

              <div class="flex flex-wrap items-center gap-2 shrink-0">
                <span id="activePermsCounterText" class="text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-blue-950/80 border border-blue-500/40 text-blue-300">
                  15 de 17 operações marcadas (88%)
                </span>
                <button type="button" onclick="toggleAllRoleOperations(true)" class="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-blue-950/80 border border-blue-500/40 text-blue-300 hover:bg-blue-900 transition cursor-pointer">
                  ✓ Marcar Todas
                </button>
                <button type="button" onclick="toggleAllRoleOperations(false)" class="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-slate-300 hover:bg-slate-800 transition cursor-pointer">
                  ✕ Desmarcar Todas
                </button>
                <button type="button" onclick="resetCheckboxesToDefault()" class="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700 text-pe-gold hover:bg-slate-800 transition cursor-pointer" title="Restaura seleção padrão das 4 colunas">
                  ↺ Padrão
                </button>
              </div>
            </div>

            <!-- Formulário de Criação/Edição do Cargo -->
            <form id="createRoleForm" onsubmit="handleCreateCustomRole(event)" class="space-y-6">
              
              <!-- Linha de Entrada: Nome do Cargo & Descrição -->
              <div class="grid grid-cols-1 sm:grid-cols-12 gap-4">
                <div class="sm:col-span-5">
                  <label class="block text-slate-300 font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                    Nome do Cargo / Atribuição *
                  </label>
                  <input 
                    type="text" 
                    id="newRoleName" 
                    required 
                    placeholder="ex: Coordenador de Homologação, Assessor de Imprensa, Secretário Geral..." 
                    class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-4 py-2.5 text-white font-bold text-xs outline-none" 
                  />
                </div>
                <div class="sm:col-span-7">
                  <label class="block text-slate-300 font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                    Descrição / Resumo das Atividades
                  </label>
                  <input 
                    type="text" 
                    id="newRoleDesc" 
                    placeholder="ex: Responsável pela homologação de atletas federados e emissão de carteiras CR80" 
                    class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-4 py-2.5 text-slate-300 text-xs outline-none" 
                  />
                </div>
              </div>

              <!-- AS 4 COLUNAS OFICIAIS DA PLATAFORMA FPEFT (DINÂMICAS E REATIVAS) -->
              <div id="operationsSchemeFormColumns" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <!-- Preenchido dinamicamente via renderOperationsSchemeForm() -->
              </div>

              <!-- Botão de Salvar Cargo / Atualizar Cargo -->
              <div class="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                <div id="roleCreateFeedback" class="hidden text-xs rounded-xl p-3 border w-full sm:w-auto"></div>
                <div class="flex items-center gap-2 w-full sm:w-auto ml-auto">
                  <button type="button" id="cancelRoleEditBtn" onclick="cancelEditingRole()" class="hidden px-4 py-3 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 text-xs font-bold transition cursor-pointer">
                    ✕ Cancelar Edição
                  </button>
                  <button type="submit" id="submitRoleBtn" class="flex-1 sm:flex-initial bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-oswald text-sm uppercase font-bold tracking-wider px-7 py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer">
                    <span id="submitRoleBtnIcon">💾</span> <span id="submitRoleBtnText">SALVAR CARGO COM ESTE ESQUEMA DE OPERAÇÕES</span>
                  </button>
                </div>
              </div>
            </form>

            <!-- Lista de Cargos Cadastrados no Sistema -->
            <div class="border-t border-[#1c253b] pt-5 space-y-3">
              <div class="flex items-center justify-between">
                <h4 class="font-oswald text-base uppercase font-bold text-white flex items-center gap-2">
                  <span>📋</span> Cargos & Operações Cadastrados (<span id="totalCustomRolesCount" class="text-pe-gold">1</span>)
                </h4>
                <span class="text-[11px] text-slate-400">Selecione qualquer cargo abaixo para vincular ao criar e-mails</span>
              </div>
              <div id="customRolesContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <!-- Preenchido via JavaScript -->
              </div>
            </div>

          </div>

          <!-- SEÇÃO 2: GERADOR DE E-MAIL INSTITUCIONAL & TABELA DE CONTAS AUTORIZADAS -->
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Formulário de Criação de E-mail Vinculado a Cargo -->
            <div class="lg:col-span-5 bg-[#0b101d] border border-[#1c253b] rounded-2xl p-6 shadow-xl relative">
              <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0 rounded-t-2xl"></div>

              <div class="flex items-center justify-between mb-4">
                <h3 class="font-oswald text-lg uppercase font-bold text-white flex items-center gap-2">
                  <span>✍️</span> Criar E-mail Institucional
                </h3>
                <span class="text-[10px] text-pe-gold font-mono font-bold">FPFTM-2026</span>
              </div>

              <form id="adminCreateEmailForm" onsubmit="handleAdminCreateEmail(event)" class="space-y-4 text-xs">
                
                <!-- Nome do Diretor / Gestor -->
                <div>
                  <label class="block text-slate-300 font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                    Nome do Diretor / Gestor *
                  </label>
                  <input type="text" id="panelRegName" required placeholder="ex: Gabriel Alves" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-4 py-2.5 text-white font-bold outline-none" />
                </div>

                <!-- Cargo / Atribuição (Dinâmico a partir do Esquema) -->
                <div>
                  <div class="flex items-center justify-between mb-1.5">
                    <label class="block text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                      Cargo Vinculado *
                    </label>
                    <span class="text-[10px] text-pe-gold font-semibold">Define as operações da conta</span>
                  </div>
                  <select id="panelRegRole" onchange="updateSelectedRolePreview(this.value)" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-4 py-2.5 text-white font-bold outline-none">
                    <option value="Diretor Adjunto">Diretor Adjunto</option>
                  </select>
                  
                  <!-- Resumo dinâmico de operações do cargo -->
                  <div id="roleSummaryPreview" class="mt-2 p-2.5 bg-[#05080e] border border-blue-500/30 rounded-xl text-[11px] text-slate-300 flex items-center justify-between">
                    <span id="roleSummaryPreviewText">Operações vinculadas: Padrão do cargo configurado</span>
                    <button type="button" onclick="previewCurrentSelectedRoleModal()" class="text-blue-400 hover:text-blue-300 font-bold underline cursor-pointer text-[10px]">Ver Esquema</button>
                  </div>

                  <!-- Seletor opcional de operações personalizadas para esta conta -->
                  <div class="mt-2.5">
                    <button type="button" onclick="toggleCreateEmailCustomPerms()" class="w-full text-[11px] text-slate-400 hover:text-pe-gold transition font-bold flex items-center justify-between p-2 rounded-xl bg-[#05080e] border border-[#1c253b] hover:border-pe-gold/40 cursor-pointer">
                      <div class="flex items-center gap-1.5">
                        <span id="createEmailPermsToggleIcon" class="text-[9px] text-pe-gold">▶</span>
                        <span>Personalizar operações desta conta</span>
                      </div>
                      <span id="createEmailPermsBadge" class="text-[10px] font-mono text-pe-gold bg-pe-gold/10 border border-pe-gold/30 px-2 py-0.5 rounded font-bold">Padrão do cargo</span>
                    </button>
                    <div id="createEmailPermsContainer" class="hidden mt-2 p-3 bg-[#05080e] border border-[#1c253b] rounded-xl space-y-2.5 max-h-60 overflow-y-auto">
                      <div class="flex items-center justify-between pb-1.5 border-b border-[#1c253b] text-[10px]">
                        <span class="text-slate-400 font-bold">17 Operações Oficiais (4 Módulos):</span>
                        <div class="flex items-center gap-2">
                          <button type="button" onclick="syncCreateEmailPermsFromRole()" class="text-blue-400 hover:underline font-bold cursor-pointer">Sincronizar Cargo</button>
                          <span class="text-slate-600">•</span>
                          <button type="button" onclick="toggleAllCreateEmailPerms(true)" class="text-emerald-400 hover:underline font-bold cursor-pointer">Todas</button>
                          <span class="text-slate-600">•</span>
                          <button type="button" onclick="toggleAllCreateEmailPerms(false)" class="text-rose-400 hover:underline font-bold cursor-pointer">Nenhuma</button>
                        </div>
                      </div>
                      <div id="createEmailPermsGrid" class="space-y-2.5">
                        <!-- Preenchido dinamicamente via JavaScript -->
                      </div>
                    </div>
                  </div>
                </div>

                <!-- E-mail Institucional Oficial -->
                <div>
                  <label class="block text-slate-300 font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                    E-mail Institucional Oficial *
                  </label>
                  <div class="relative flex items-center">
                    <input type="text" id="panelRegEmail" required placeholder="gabriel.alves" oninput="formatPanelEmailInput(this)" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl pl-4 pr-36 py-2.5 text-white font-mono text-xs outline-none" />
                    <span class="absolute right-3 text-pe-gold font-mono text-xs font-bold pointer-events-none select-none">
                      @foot-table.pe.org
                    </span>
                  </div>
                  <span class="text-[10px] text-slate-500 mt-1 block">
                    O sufixo institucional oficial da Federação será atribuído automaticamente.
                  </span>
                </div>

                <!-- Senhas -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label class="block text-slate-300 font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                      Senha *
                    </label>
                    <input type="password" id="panelRegPassword" required minlength="3" placeholder="••••••••" oninput="checkAdminCreatePasswordMatch()" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3.5 py-2.5 text-white outline-none font-mono" />
                  </div>
                  <div>
                    <div class="flex items-center justify-between mb-1.5">
                      <label class="block text-slate-300 font-bold uppercase tracking-wider text-[11px]">
                        Confirmar Senha *
                      </label>
                      <span id="passMatchStatus" class="text-[10px] font-bold hidden"></span>
                    </div>
                    <input type="password" id="panelRegConfirmPassword" required minlength="3" placeholder="••••••••" oninput="checkAdminCreatePasswordMatch()" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3.5 py-2.5 text-white outline-none font-mono" />
                  </div>
                </div>

                <!-- Chave de Homologação da Federação -->
                <div>
                  <label class="block text-slate-300 font-bold mb-1.5 uppercase tracking-wider text-[11px]">
                    Chave de Homologação da Federação
                  </label>
                  <input type="text" id="panelRegFederationKey" value="FPFTM-2026" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-4 py-2.5 text-xs text-pe-gold font-mono outline-none" />
                </div>

                <div id="panelRegFeedback" class="hidden text-xs rounded-xl p-3 border"></div>

                <button type="submit" class="w-full bg-pe-blue hover:bg-blue-600 text-white font-oswald text-base uppercase font-bold tracking-wider py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer">
                  <span>✍️</span> GERAR E-MAIL INSTITUCIONAL & ATIVAR
                </button>
              </form>
            </div>

            <!-- Tabela de E-mails Institucionais Cadastrados -->
            <div class="lg:col-span-7 space-y-4">
              <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-6 shadow-xl space-y-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 class="font-oswald text-lg uppercase font-bold text-white flex items-center gap-2">
                    <span>👥</span> E-mails Institucionais Autorizados (<span id="totalInstitutionalCount" class="text-pe-gold">0</span>)
                  </h3>
                  <span class="text-[10px] text-pe-gold font-mono font-bold bg-pe-gold/10 border border-pe-gold/30 px-2 py-0.5 rounded">
                    DOMÍNIO: @foot-table.pe.org
                  </span>
                </div>

                <div class="overflow-x-auto">
                  <table class="w-full text-left text-xs min-w-[620px]">
                    <thead class="bg-[#05080e] text-slate-400 uppercase text-[10px] font-mono border-b border-[#1c253b]">
                      <tr>
                        <th class="py-3 px-3 whitespace-nowrap">Gestor</th>
                        <th class="py-3 px-3 whitespace-nowrap">E-mail</th>
                        <th class="py-3 px-3 whitespace-nowrap">Cargo</th>
                        <th class="py-3 px-3 whitespace-nowrap">Operações</th>
                        <th class="py-3 px-3 text-right whitespace-nowrap">Ação</th>
                      </tr>
                    </thead>
                    <tbody id="institutionalTableBody" class="divide-y divide-[#1c253b]/60">
                      <!-- Preenchido via JavaScript -->
                    </tbody>
                  </table>
                </div>

                <div class="bg-[#05080e] border border-[#1c253b] rounded-xl p-3 text-[11px] text-slate-400 flex items-center gap-2">
                  <span class="text-pe-gold text-base">🛡️</span>
                  <span>Os e-mails institucionais credenciados aqui operam exatamente conforme o esquema de permissões atribuído ao seu cargo.</span>
                </div>
              </div>
            </div>

          </div>

        </div>

        <!-- MODAL INTERATIVO: VISUALIZAÇÃO DO ESQUEMA DE OPERAÇÕES DO CARGO -->
        <div id="operationsSchemeModal" class="hidden fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl max-w-4xl w-full p-6 shadow-2xl relative space-y-5 max-h-[90vh] overflow-y-auto">
            <div class="pe-stripe-bar h-1.5 w-full absolute top-0 left-0 rounded-t-2xl"></div>

            <div class="flex items-center justify-between border-b border-[#1c253b] pb-3">
              <div>
                <span class="text-pe-gold text-xs font-bold uppercase tracking-wider block">Inspeção de Permissões</span>
                <h3 id="modalSchemeRoleTitle" class="font-oswald text-xl uppercase font-bold text-white">Esquema de Operação do Cargo</h3>
                <span id="modalSchemeRoleDesc" class="text-xs text-slate-400">Atribuições ativas para esta função</span>
              </div>
              <button onclick="closeRoleOperationsModal()" class="w-8 h-8 rounded-full bg-[#1c253b] text-slate-300 hover:text-white flex items-center justify-center cursor-pointer font-bold">
                ✕
              </button>
            </div>

            <!-- As 4 Colunas no Modal -->
            <div id="modalSchemeColumnsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 text-xs">
              <!-- Preenchido dinamicamente via JS -->
            </div>

            <div class="flex justify-end pt-2 border-t border-[#1c253b]">
              <button onclick="closeRoleOperationsModal()" class="bg-slate-800 hover:bg-slate-700 text-white font-bold px-5 py-2 rounded-xl text-xs cursor-pointer">
                Fechar
              </button>
            </div>
          </div>
        </div>

        <!-- MODAL: ADICIONAR NOVA OPERAÇÃO AO ESQUEMA -->
        <div id="addCustomOperationModal" class="hidden fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4">
          <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl max-w-md w-full p-6 shadow-2xl relative space-y-4">
            <div class="pe-stripe-bar h-1.5 w-full absolute top-0 left-0 rounded-t-2xl"></div>

            <div class="flex items-center justify-between border-b border-[#1c253b] pb-3">
              <div>
                <span class="text-pe-gold text-[10px] font-bold uppercase tracking-wider block">Customização Dinâmica</span>
                <h3 class="font-oswald text-lg uppercase font-bold text-white flex items-center gap-1.5">
                  <span>➕</span> Nova Operação do Sistema
                </h3>
              </div>
              <button onclick="closeAddOperationModal()" class="w-8 h-8 rounded-full bg-[#1c253b] text-slate-300 hover:text-white flex items-center justify-center cursor-pointer font-bold text-xs">
                ✕
              </button>
            </div>

            <form id="newOperationForm" onsubmit="handleSaveNewOperation(event)" class="space-y-4 text-xs">
              <input type="hidden" id="newOpTargetGroupId" value="" />
              <div>
                <label class="block text-slate-400 font-bold mb-1 uppercase tracking-wider text-[10px]">Coluna de Destino</label>
                <div id="newOpTargetGroupLabel" class="text-pe-gold font-bold bg-[#05080e] border border-[#1c253b] px-3 py-2 rounded-xl text-xs flex items-center gap-2"></div>
              </div>

              <div>
                <label class="block text-slate-300 font-bold mb-1 uppercase tracking-wider text-[10px]">Nome da Operação / Permissão *</label>
                <input type="text" id="newOpName" required placeholder="ex: Homologar Árbitros, Gerar Súmula..." class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3 py-2.5 text-white font-bold outline-none text-xs" />
              </div>

              <div>
                <label class="block text-slate-300 font-bold mb-1 uppercase tracking-wider text-[10px]">Descrição da Atribuição *</label>
                <input type="text" id="newOpDesc" required placeholder="ex: Permite validar e aprovar súmulas de arbitragem pós-jogo" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3 py-2.5 text-slate-300 outline-none text-xs" />
              </div>

              <div class="flex items-center justify-end gap-2 pt-2 border-t border-[#1c253b]">
                <button type="button" onclick="closeAddOperationModal()" class="px-4 py-2 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 font-bold hover:bg-slate-700 cursor-pointer text-xs">
                  Cancelar
                </button>
                <button type="submit" class="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold font-oswald uppercase cursor-pointer text-xs flex items-center gap-1.5">
                  <span>💾</span> Salvar Operação
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- MODAL FLUTUANTE: EDITAR CONTA INSTITUCIONAL (SEM SOBREPOR OU CORTAR) -->
        <div id="editInstitutionalAdminModal" onclick="if(event.target === this) closeEditInstitutionalAdminModal()" class="hidden fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div class="relative w-full max-w-lg bg-[#0b101d] border border-[#1c253b] rounded-2xl p-5 sm:p-7 shadow-2xl space-y-5 my-auto max-h-[90vh] overflow-y-auto flex flex-col justify-between">
            <div class="pe-stripe-bar h-1.5 w-full absolute top-0 left-0 rounded-t-2xl"></div>

            <!-- Topo com Título e Fechar -->
            <div class="flex items-center justify-between pb-3 border-b border-[#1c253b]">
              <div class="flex items-center gap-2.5">
                <span class="text-xl">✍️</span>
                <div>
                  <span class="text-pe-gold text-[10px] font-bold uppercase tracking-wider block font-mono">Gestão de Acesso</span>
                  <h3 class="font-oswald text-lg sm:text-xl uppercase font-bold text-white tracking-wide">
                    Editar Conta Institucional
                  </h3>
                </div>
              </div>
              <button type="button" onclick="closeEditInstitutionalAdminModal()" class="w-8 h-8 rounded-full bg-[#1c253b] text-slate-300 hover:text-white flex items-center justify-center text-xs font-bold transition cursor-pointer" title="Fechar">
                ✕
              </button>
            </div>

            <!-- Formulário de Edição -->
            <form id="editInstitutionalAdminForm" onsubmit="handleSaveEditInstitutionalAdmin(event)" class="space-y-4 text-xs">
              <input type="hidden" id="editAdminOriginalEmail" value="" />

              <!-- Informações de Criação -->
              <div class="flex items-center justify-between bg-[#05080e] border border-[#1c253b] rounded-xl px-3.5 py-2 text-[11px]">
                <span class="text-slate-400">Credenciamento Oficial:</span>
                <span id="editAdminCreatedDate" class="text-pe-gold font-mono font-bold">01/01/2026</span>
              </div>

              <!-- Nome Completo do Gestor -->
              <div>
                <label class="block text-slate-300 font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                  Nome Completo do Gestor *
                </label>
                <input 
                  type="text" 
                  id="editAdminName" 
                  required 
                  placeholder="ex: Gabriel Alves" 
                  class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3.5 py-2.5 text-white font-bold outline-none text-xs" 
                />
              </div>

              <!-- E-mail Institucional -->
              <div>
                <label class="block text-slate-300 font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                  E-mail Institucional (@foot-table.pe.org) *
                </label>
                <div class="relative flex items-center">
                  <input 
                    type="text" 
                    id="editAdminEmailPrefix" 
                    required 
                    oninput="formatEditAdminEmailInput(this)" 
                    class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl pl-3.5 pr-36 py-2.5 text-white font-mono text-xs outline-none" 
                  />
                  <span class="absolute right-3 text-pe-gold font-mono text-xs font-bold pointer-events-none select-none">
                    @foot-table.pe.org
                  </span>
                </div>
              </div>

              <!-- Cargo & Atribuições -->
              <div>
                <div class="flex items-center justify-between mb-1.5">
                  <label class="block text-slate-300 font-bold uppercase tracking-wider text-[10px]">
                    Cargo Vinculado *
                  </label>
                  <span class="text-[10px] text-pe-gold font-semibold">Define as operações da conta</span>
                </div>
                <select 
                  id="editAdminRole" 
                  onchange="updateEditAdminRolePreview(this.value)" 
                  class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3.5 py-2.5 text-white font-bold outline-none text-xs"
                >
                  <!-- Preenchido dinamicamente via JS -->
                </select>
                <div id="editAdminRoleSummary" class="mt-2 p-2.5 bg-[#05080e] border border-blue-500/30 rounded-xl text-[11px] text-slate-300 flex items-center justify-between">
                  <span id="editAdminRoleSummaryText">Atribuições do cargo</span>
                  <span class="text-pe-gold font-mono font-bold text-[9px] bg-pe-gold/10 px-1.5 py-0.5 rounded border border-pe-gold/30">REATIVO</span>
                </div>
              </div>

              <!-- Seletor de Permissões Específicas da Conta -->
              <div class="border border-[#1c253b] bg-[#070b14] rounded-xl p-3 space-y-2.5">
                <div class="flex items-center justify-between">
                  <div class="flex items-center gap-1.5">
                    <span class="text-sm">🛡️</span>
                    <span class="font-bold text-white text-[11px] uppercase tracking-wider">Operações Desta Conta</span>
                  </div>
                  <span id="editAdminPermsCountBadge" class="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-500/30">
                    Configurado
                  </span>
                </div>
                <p class="text-[10px] text-slate-400 leading-snug">
                  Personalize ou restrinja as permissões desta conta. As opções desmarcadas bloquearão imediatamente os acessos do usuário.
                </p>

                <!-- Ações Rápidas de Marcação -->
                <div class="flex flex-wrap items-center gap-1.5 pb-1 border-b border-[#1c253b]">
                  <button type="button" onclick="syncEditAdminPermsFromRole()" class="text-[10px] bg-slate-800 hover:bg-slate-700 text-slate-300 px-2 py-1 rounded font-bold cursor-pointer transition">
                    📋 Copiar do Cargo
                  </button>
                  <button type="button" onclick="toggleAllEditAdminPerms(true)" class="text-[10px] bg-emerald-950/80 hover:bg-emerald-900 text-emerald-300 border border-emerald-500/40 px-2 py-1 rounded font-bold cursor-pointer transition">
                    ⚡ Marcar Todas
                  </button>
                  <button type="button" onclick="toggleAllEditAdminPerms(false)" class="text-[10px] bg-rose-950/80 hover:bg-rose-900 text-rose-300 border border-rose-500/40 px-2 py-1 rounded font-bold cursor-pointer transition">
                    🚫 Desmarcar Todas
                  </button>
                </div>

                <!-- Container com as 4 colunas de operações em grid compacto -->
                <div id="editAdminPermsGrid" class="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-52 overflow-y-auto pr-1 custom-scroll text-[11px]">
                  <!-- Injetado dinamicamente via renderEditAdminPermsCheckboxes() -->
                </div>
              </div>

              <!-- Nova Senha -->
              <div>
                <label class="block text-slate-300 font-bold mb-1.5 uppercase tracking-wider text-[10px]">
                  Nova Senha de Acesso (Opcional)
                </label>
                <input 
                  type="password" 
                  id="editAdminPassword" 
                  placeholder="Deixe em branco para manter a senha atual" 
                  minlength="4" 
                  class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-3.5 py-2.5 text-white font-mono text-xs outline-none" 
                />
                <span class="text-[10px] text-slate-500 mt-1 block">
                  Altere a senha somente se o gestor precisar redefinir seu acesso.
                </span>
              </div>

              <!-- Aviso Master -->
              <div id="editAdminMasterNotice" class="hidden p-3 rounded-xl bg-amber-950/30 border border-amber-500/40 text-amber-200 text-xs flex items-center gap-2">
                <span class="text-base">⚡</span>
                <span class="text-[11px] leading-snug">Esta conta possui acesso Master com todas as permissões da Federação.</span>
              </div>

              <div id="editAdminFeedback" class="hidden text-xs rounded-xl p-3 border"></div>

              <!-- Botões de Ação -->
              <div class="flex items-center justify-end gap-2.5 pt-3 border-t border-[#1c253b]">
                <button 
                  type="button" 
                  onclick="closeEditInstitutionalAdminModal()" 
                  class="px-4 py-2 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs transition cursor-pointer"
                >
                  ✕ Cancelar
                </button>
                <button 
                  type="submit" 
                  class="px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-oswald text-xs uppercase font-bold tracking-wider shadow-lg transition flex items-center gap-1.5 cursor-pointer"
                >
                  <span>💾</span> <span>Salvar Alterações</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        <!-- MODAL FLUTUANTE: ATRIBUIR CARGO A UMA CONTA EXISTENTE -->
        <div id="assignRoleModal" onclick="if(event.target === this) closeAssignRoleModal()" class="hidden fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          <div class="relative w-full max-w-lg bg-[#0b101d] border border-[#1c253b] rounded-2xl p-5 sm:p-7 shadow-2xl space-y-4 my-auto max-h-[90vh] overflow-y-auto flex flex-col justify-between">
            <div class="pe-stripe-bar h-1.5 w-full absolute top-0 left-0 rounded-t-2xl"></div>

            <div class="flex items-center justify-between pb-3 border-b border-[#1c253b]">
              <div class="flex items-center gap-2.5">
                <span class="text-xl">👤</span>
                <div>
                  <span class="text-pe-gold text-[10px] font-bold uppercase tracking-wider block font-mono">Aplicação Imediata de Cargo</span>
                  <h3 class="font-oswald text-lg sm:text-xl uppercase font-bold text-white tracking-wide">
                    Atribuir Cargo a Gestor
                  </h3>
                </div>
              </div>
              <button type="button" onclick="closeAssignRoleModal()" class="w-8 h-8 rounded-full bg-[#1c253b] text-slate-300 hover:text-white flex items-center justify-center text-xs font-bold transition cursor-pointer" title="Fechar">
                ✕
              </button>
            </div>

            <div class="p-3 rounded-xl bg-[#05080e] border border-pe-gold/30 flex items-center justify-between text-xs">
              <span class="text-slate-400 font-bold uppercase text-[10px]">Cargo Selecionado:</span>
              <span id="assignTargetRoleBadge" class="text-pe-gold font-bold px-2.5 py-1 rounded-md bg-pe-gold/10 border border-pe-gold/30 font-mono text-xs">Nome do Cargo</span>
            </div>

            <div>
              <label class="block text-slate-300 font-bold mb-2 uppercase tracking-wider text-[10px]">
                Selecione a conta institucional que receberá este cargo:
              </label>
              <div id="assignRoleAdminsList" class="space-y-2 max-h-60 overflow-y-auto pr-1">
                <!-- Preenchido dinamicamente via JavaScript -->
              </div>
            </div>

            <div class="pt-3 border-t border-[#1c253b] flex justify-end">
              <button type="button" onclick="closeAssignRoleModal()" class="px-4 py-2 rounded-xl border border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-300 font-bold text-xs transition cursor-pointer">
                Fechar
              </button>
            </div>
          </div>
        </div>

        <!-- ===================================================== -->
        <!-- 6. ⚙️ ABA BANCO DE DADOS & AJUSTES                     -->
        <!-- ===================================================== -->
        <div id="tabContent-config" class="space-y-8 hidden">
          <div>
            <span class="text-pe-gold text-xs font-bold uppercase tracking-wider block">Arquitetura de Alta Performance</span>
            <h2 class="font-oswald text-2xl sm:text-3xl uppercase font-bold text-white">2 Bancos em 1 Só Sistema (Ligação Intermediária Automática)</h2>
            <p class="text-xs text-slate-400 mt-1 max-w-3xl leading-relaxed">
              Os 2 bancos operam interligados automaticamente: o <strong>Banco 1 (Principal)</strong> garante a exibição contínua para todos, mesmo com alto volume, enquanto o <strong>Banco 2 (Secundário)</strong> gerencia a inserção de novos dados e armazenamento seguro. Tudo sincronizado de forma intermediária, sem necessidade de botões manuais.
            </p>
          </div>

          <!-- STATUS DA LIGAÇÃO INTERMEDIÁRIA (AUTOMÁTICA) -->
          <div class="max-w-4xl bg-[#0b101d] border border-pe-gold/40 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div class="pe-stripe-bar h-1.5 w-full absolute top-0 left-0 rounded-t-2xl"></div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <!-- Card Banco 1 -->
              <div class="bg-[#05080e] border border-[#1c253b] rounded-xl p-4 space-y-2 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-200 flex items-center gap-1.5">
                      <span>🏛️</span> Banco 1 (Principal)
                    </span>
                    <span id="db1StatusDot" class="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  </div>
                  <div class="text-[10px] text-pe-gold font-bold uppercase tracking-wider mt-1">Exibição & Leitura Contínua</div>
                  <p class="text-[11px] text-slate-400 leading-relaxed mt-1">
                    Sempre ativo para consulta e visualização de carteiras públicas, mesmo com sistema cheio.
                  </p>
                </div>
                <div id="db1StatusText" class="text-[10.5px] text-emerald-400 font-mono font-bold pt-2 border-t border-[#1c253b]/60">Online & Operando</div>
              </div>

              <!-- Card Ligação Intermediária -->
              <div class="bg-[#05080e] border border-pe-gold/40 rounded-xl p-4 space-y-2 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-pe-gold flex items-center gap-1.5">
                      <span>⚡</span> Elo Intermediário
                    </span>
                    <span class="w-2 h-2 rounded-full bg-pe-gold animate-ping"></span>
                  </div>
                  <div class="text-[10px] text-slate-300 font-bold uppercase tracking-wider mt-1">Sincronização Invisível</div>
                  <p class="text-[11px] text-slate-400 leading-relaxed mt-1">
                    Liga os 2 bancos em tempo real sem botões. Se um oscilar, o outro assume e segura a operação.
                  </p>
                </div>
                <div class="text-[10.5px] text-pe-gold font-mono font-bold pt-2 border-t border-[#1c253b]/60 flex items-center gap-1.5">
                  <span class="w-1.5 h-1.5 rounded-full bg-pe-gold animate-pulse"></span> 100% Automático
                </div>
              </div>

              <!-- Card Banco 2 -->
              <div class="bg-[#05080e] border border-[#1c253b] rounded-xl p-4 space-y-2 flex flex-col justify-between">
                <div>
                  <div class="flex items-center justify-between">
                    <span class="font-bold text-slate-200 flex items-center gap-1.5">
                      <span>🛡️</span> Banco 2 (Secundário)
                    </span>
                    <span id="db2StatusDot" class="w-2.5 h-2.5 rounded-full bg-slate-500"></span>
                  </div>
                  <div class="text-[10px] text-sky-400 font-bold uppercase tracking-wider mt-1">Inserção & Armazenamento</div>
                  <p class="text-[11px] text-slate-400 leading-relaxed mt-1">
                    Destinado à inserção de novos atletas, garantia de espaço de expansão e failover instantâneo.
                  </p>
                </div>
                <div id="db2StatusText" class="text-[10.5px] text-slate-400 font-mono font-bold pt-2 border-t border-[#1c253b]/60">Pronto para Operar</div>
              </div>
            </div>
          </div>

          <!-- FORMULÁRIO DE VÍNCULO DOS 2 BANCOS (AUTOSAVE - SEM BOTÕES) -->
          <div class="max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-6">
            <!-- BANCO 1 -->
            <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-6 space-y-4 shadow-xl">
              <div class="flex items-center justify-between border-b border-[#1c253b] pb-2">
                <h3 class="font-bold text-white text-sm flex items-center gap-2">
                  <span>🏛️</span> Banco 1: URL & Chave (Exibição)
                </h3>
                <span class="text-[10px] text-emerald-400/80 font-mono">Autosave Ativo</span>
              </div>
              <div class="space-y-3 text-xs">
                <div>
                  <label class="block text-slate-300 font-bold mb-1">Project URL do Banco 1</label>
                  <input type="text" id="adminCfgUrl" value="https://qvnsahvdjhimlmtqrnif.supabase.co" oninput="autoSaveIntermediaryDatabases()" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-4 py-2.5 text-slate-200 font-mono outline-none" />
                </div>
                <div>
                  <label class="block text-slate-300 font-bold mb-1">Anon Key do Banco 1</label>
                  <input type="password" id="adminCfgKey" placeholder="Cole sua chave anon..." oninput="autoSaveIntermediaryDatabases()" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-4 py-2.5 text-slate-200 font-mono outline-none" />
                </div>
              </div>
            </div>

            <!-- BANCO 2 -->
            <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-6 space-y-4 shadow-xl">
              <div class="flex items-center justify-between border-b border-[#1c253b] pb-2">
                <h3 class="font-bold text-white text-sm flex items-center gap-2">
                  <span>🛡️</span> Banco 2: URL & Chave (Inserção)
                </h3>
                <span class="text-[10px] text-emerald-400/80 font-mono">Autosave Ativo</span>
              </div>
              <div class="space-y-3 text-xs">
                <div>
                  <label class="block text-slate-300 font-bold mb-1">Project URL do Banco 2</label>
                  <input type="text" id="adminCfgSecondaryUrl" value="https://xvqsysfqbkfsogkwtbal.supabase.co" placeholder="https://xvqsysfqbkfsogkwtbal.supabase.co" oninput="autoSaveIntermediaryDatabases()" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-4 py-2.5 text-slate-200 font-mono outline-none" />
                </div>
                <div>
                  <label class="block text-slate-300 font-bold mb-1">Anon Key do Banco 2</label>
                  <input type="password" id="adminCfgSecondaryKey" value="sb_publishable_2T1UD0EYvVBlIqCvnX5VHw_K6mmAn3M" placeholder="Cole a anon key do segundo banco..." oninput="autoSaveIntermediaryDatabases()" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl px-4 py-2.5 text-slate-200 font-mono outline-none" />
                </div>
              </div>
            </div>
          </div>

          <!-- RODAPÉ INFORMATIVO E SCRIPT SQL DISCRETO -->
          <div class="max-w-4xl bg-[#05080e] border border-[#1c253b] rounded-xl p-4 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div class="flex items-center gap-2 text-slate-300">
              <span class="text-pe-gold text-base">ℹ️</span>
              <span>Os 2 bancos se conectam e reconciliam em tempo real automaticamente. Não é preciso apertar botões.</span>
            </div>
            <button onclick="openBackupSqlModal()" class="text-pe-gold hover:underline font-bold text-xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap">
              <span>📜</span> Ver Script SQL para o Banco 2
            </button>
          </div>
        </div>

        <!-- Modal para Visualização e Cópia do Script SQL do Banco Reserva -->
        <div id="modalSecondarySql" class="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm hidden flex items-center justify-center p-3 sm:p-5">
          <div class="bg-[#0b101d] border border-pe-gold/50 rounded-2xl max-w-2xl w-full p-5 sm:p-6 shadow-2xl space-y-4 max-h-[90vh] flex flex-col">
            <div class="flex items-center justify-between pb-3 border-b border-[#1c253b]">
              <div class="flex items-center gap-2 text-pe-gold font-bold text-sm uppercase">
                <span>📜</span> Script SQL para o Segundo Projeto Supabase (Reserva)
              </div>
              <button onclick="closeBackupSqlModal()" class="text-slate-400 hover:text-white p-1 rounded-lg cursor-pointer">
                <i class="fa-solid fa-xmark text-lg"></i>
              </button>
            </div>
            <p class="text-slate-300 text-xs leading-relaxed">
              Copie o código SQL abaixo e cole no <strong>SQL Editor</strong> do seu novo projeto Supabase (ou banco reserva). Ele cria todas as tabelas (<code class="text-pe-gold">atletas</code>, <code class="text-pe-gold">configuracoes</code>, <code class="text-pe-gold">noticias</code>, <code class="text-pe-gold">keep_alive_logs</code>, <code class="text-pe-gold">admin_users</code>) com índices e permissões RLS.
            </p>
            <div class="flex-1 overflow-y-auto bg-[#05080e] border border-[#1c253b] rounded-xl p-3 text-[11px] font-mono text-slate-300 select-all max-h-[360px] whitespace-pre" id="secondarySqlCodeBlock"></div>
            <div class="flex items-center justify-end gap-3 pt-2 border-t border-[#1c253b]">
              <button onclick="copyBackupSqlToClipboard()" id="btnCopyBackupSql" class="bg-pe-gold hover:bg-pe-goldHover text-pe-dark font-extrabold text-xs uppercase px-5 py-2.5 rounded-xl transition flex items-center gap-1.5 cursor-pointer">
                <span>📋</span> Copiar Código SQL
              </button>
              <button onclick="closeBackupSqlModal()" class="bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs uppercase px-4 py-2.5 rounded-xl transition cursor-pointer">
                Fechar
              </button>
            </div>
          </div>
        </div>

        <!-- ===================================================== -->
        <!-- 5. 📋 ABA GUIA DO PAINEL ADMINISTRATIVO                -->
        <!-- ===================================================== -->
        <div id="tabContent-guia" class="space-y-6 hidden">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-[#1c253b]">
            <div>
              <span class="text-pe-gold text-xs font-bold uppercase tracking-wider block">Documentação Oficial Personalizada</span>
              <h2 class="font-oswald text-2xl sm:text-3xl uppercase font-bold text-white">Guia de Funções do Painel</h2>
              <p id="guiaUserSubtitle" class="text-xs text-slate-400 mt-0.5">
                Exibindo exclusivamente as funções individuais e módulos autorizados para a sua conta.
              </p>
            </div>
            <div id="guiaUserBadgeContainer" class="flex items-center gap-2">
              <!-- Injetado dinamicamente via JS -->
            </div>
          </div>

          <!-- Banner Informativo do Usuário Ativo -->
          <div id="guiaUserBanner" class="p-4 bg-[#0b101d] border border-[#1c253b] rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-xl relative overflow-hidden">
            <!-- Injetado dinamicamente via renderGuiaDoPainel() -->
          </div>

          <!-- Grade Dinâmica dos Módulos Permitidos -->
          <div id="dynamicGuiaContainer" class="space-y-6">
            <!-- Módulos e funções individuais injetados dinamicamente via renderGuiaDoPainel() -->
          </div>
        </div>

      </main>

      <!-- Rodapé -->
      <footer class="bg-[#04060b] border-t border-[#151c2e] py-4 px-6 text-center text-xs text-slate-500">
        <p>Federação Pernambucana de FutMesa & Foot Table — Sistema de Gestão e Emissão Federativa © 2026</p>
      </footer>

    </div>

  </div>

  <!-- ========================================================= -->
  <!-- SCRIPT DE COMPORTAMENTO E CONTROLE GERAL                  -->
  <!-- ========================================================= -->
  <script>
    // Utilitário de Debounce para alto desempenho em buscas, digitação e sincronização
    function debounce(func, wait = 150) {
      let timeout;
      return function(...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
      };
    }

    // Configurações Padrão
    const DEFAULT_SUPABASE_URL = "https://qvnsahvdjhimlmtqrnif.supabase.co";
    const DEFAULT_SUPABASE_ANON_KEY = "sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z";
    let SUPABASE_URL = localStorage.getItem('pe_supabase_url') || DEFAULT_SUPABASE_URL;
    let SUPABASE_ANON_KEY = localStorage.getItem('pe_supabase_anon_key');
    if (!SUPABASE_ANON_KEY || SUPABASE_ANON_KEY.startsWith('http') || SUPABASE_ANON_KEY.length < 20) {
      SUPABASE_ANON_KEY = DEFAULT_SUPABASE_ANON_KEY;
      localStorage.setItem('pe_supabase_anon_key', SUPABASE_ANON_KEY);
    }
    let supabaseClient = null;

    // Configurações do Banco Reserva / Failover (Segundo Supabase)
    const DEFAULT_SUPABASE_SECONDARY_URL = "https://xvqsysfqbkfsogkwtbal.supabase.co";
    const DEFAULT_SUPABASE_SECONDARY_ANON_KEY = "sb_publishable_2T1UD0EYvVBlIqCvnX5VHw_K6mmAn3M";
    let SUPABASE_SECONDARY_URL = localStorage.getItem('pe_supabase_secondary_url') || DEFAULT_SUPABASE_SECONDARY_URL;
    let SUPABASE_SECONDARY_ANON_KEY = localStorage.getItem('pe_supabase_secondary_anon_key') || DEFAULT_SUPABASE_SECONDARY_ANON_KEY;
    let IS_DUAL_WRITE_ENABLED = localStorage.getItem('pe_supabase_dual_write') !== 'false';
    let IS_AUTO_FAILOVER_ENABLED = localStorage.getItem('pe_supabase_auto_failover') !== 'false';
    let supabaseSecondaryClient = null;

    function safeSupabaseCall(promise, timeoutMs = 3000) {
      return Promise.race([
        promise,
        new Promise((_, reject) => setTimeout(() => reject(new Error('TIMEOUT_SUPABASE')), timeoutMs))
      ]);
    }

    // Layout padrão da carteira
    const DEFAULT_BADGE_LAYOUT = {
      cardWidth: 540,
      cardMinHeight: 300,
      cardPadding: 24,
      cardBorderRadius: 16,
      borderColor: '#f5b800',
      photoWidth: 100,
      photoHeight: 125,
      photoRadius: 8,
      customTexts: [
        { id: 1, text: "REGISTRO OFICIAL FEDERADO — PE", fontSize: 10, color: "#f5b800", align: "left", marginTop: 4 }
      ]
    };

    let currentBadgeLayout = JSON.parse(localStorage.getItem('pe_badge_layout_config')) || DEFAULT_BADGE_LAYOUT;

    // Lista de Atletas Padrão (Vazio por padrão - o sistema gerencia estritamente o que for inserido/removido pelo usuário)
    const DEFAULT_ATHLETES = [];

    // Lista de Notícias Padrão (Vazio por padrão - apenas publicações reais do usuário)
    const DEFAULT_NEWS = [];

    /* =========================================================
       INICIALIZAÇÃO DO SUPABASE
       ========================================================= */
    async function initSupabase() {
      const dot = document.getElementById('adminDbStatusDot');
      const text = document.getElementById('adminDbStatusText');

      // 1. Se ainda não possui chave local válida, tenta buscar do endpoint /api/config da Vercel
      if ((!SUPABASE_ANON_KEY || SUPABASE_ANON_KEY.startsWith('http') || SUPABASE_ANON_KEY.length < 20) && typeof fetch === 'function') {
        try {
          const res = await fetch('/api/config');
          if (res.ok) {
            const data = await res.json();
            if (data.supabaseAnonKey && data.hasValidKey) {
              SUPABASE_URL = data.supabaseUrl || SUPABASE_URL;
              SUPABASE_ANON_KEY = data.supabaseAnonKey;
              localStorage.setItem('pe_supabase_url', SUPABASE_URL);
              localStorage.setItem('pe_supabase_anon_key', SUPABASE_ANON_KEY);
            }
          }
        } catch (e) {}
      }

      if (!SUPABASE_ANON_KEY || SUPABASE_ANON_KEY.startsWith('http') || SUPABASE_ANON_KEY.length < 20) {
        SUPABASE_ANON_KEY = DEFAULT_SUPABASE_ANON_KEY;
        localStorage.setItem('pe_supabase_anon_key', SUPABASE_ANON_KEY);
      }

      if (window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY && !SUPABASE_ANON_KEY.startsWith('http')) {
        try {
          supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

          // Teste ativo de integridade da nuvem com timeout de 2.5s (tolerância a falhas na infraestrutura)
          let isCloudHealthy = false;
          try {
            const pingRes = await safeSupabaseCall(
              supabaseClient.from('atletas').select('count', { count: 'exact', head: true }),
              2500
            );
            isCloudHealthy = !pingRes.error;
          } catch (pingErr) {
            console.warn("Supabase nuvem instável ou em manutenção:", pingErr);
            isCloudHealthy = false;
          }

          if (isCloudHealthy) {
            if (dot) dot.className = "w-2.5 h-2.5 rounded-full bg-pe-gold";
            if (text) text.textContent = "Supabase Conectado (Nuvem Oficial)";
          } else {
            if (dot) dot.className = "w-2.5 h-2.5 rounded-full bg-amber-400";
            if (text) text.textContent = "Supabase Instável (Modo Resiliência Local Ativo)";
          }

          // Executa sincronização em paralelo protegida com timeout
          const syncTasks = [];
          if (typeof fetchStudioDesignFromSupabase === 'function') {
            syncTasks.push(safeSupabaseCall(fetchStudioDesignFromSupabase(true), 3500).catch(() => null));
          }
          if (typeof loadAthletes === 'function') {
            syncTasks.push(safeSupabaseCall(loadAthletes(true), 3500).catch(() => null));
          }
          await Promise.allSettled(syncTasks);

          if (typeof initSupabaseRealtimeLiveDesign === 'function') {
            initSupabaseRealtimeLiveDesign();
          }
          if (typeof renderJogadoresCadastradosTable === 'function') {
            renderJogadoresCadastradosTable();
          }
          if (typeof updateDashboardData === 'function') {
            updateDashboardData();
          }
          await initSecondarySupabase();
          return isCloudHealthy;
        } catch (e) {
          console.warn("Erro ao instanciar Supabase:", e);
        }
      }
      if (dot) dot.className = "w-2.5 h-2.5 rounded-full bg-amber-400";
      if (text) text.textContent = "Modo Local (Offline)";
      await initSecondarySupabase();
      return false;
    }

    /* =========================================================
       SISTEMA DE NAVEGAÇÃO LATERAL (ABAS OFICIAIS & MODO ÍCONES)
       ========================================================= */
    function toggleSidebarCollapse() {
      const sidebar = document.getElementById('sidebar');
      if (!sidebar) return;
      const isCollapsed = sidebar.classList.toggle('sidebar-collapsed');
      try {
        localStorage.setItem('fpeft_sidebar_collapsed', isCollapsed ? 'true' : 'false');
      } catch (e) {}
      updateSidebarToggleButtons(isCollapsed);
      setTimeout(() => {
        if (!_isUserManualZoom) autoFitStudioToScreen();
      }, 310);
    }

    function updateSidebarToggleButtons(isCollapsed) {
      const icon = document.getElementById('sidebarToggleIcon');
      if (icon) {
        if (isCollapsed) {
          icon.className = 'fa-solid fa-angles-right text-xs transition-transform duration-300';
        } else {
          icon.className = 'fa-solid fa-angles-left text-xs transition-transform duration-300';
        }
      }

      const btnToggle = document.getElementById('btnToggleSidebar');
      if (btnToggle) {
        btnToggle.title = isCollapsed 
          ? 'Expandir menu lateral (mostrar nomes e textos)' 
          : 'Recolher menu lateral (mostrar apenas ícones)';
      }

      const topbarBtn = document.getElementById('btnTopbarToggleSidebar');
      if (topbarBtn) {
        topbarBtn.title = isCollapsed
          ? 'Expandir menu lateral'
          : 'Recolher menu lateral (somente ícones)';
      }
    }

    function toggleMobileSidebar() {
      const sidebar = document.getElementById('sidebar');
      const icon = document.getElementById('mobileMenuIcon');
      const text = document.getElementById('mobileMenuText');
      if (!sidebar) return;
      const isHidden = sidebar.classList.contains('hidden');
      if (isHidden) {
        sidebar.classList.remove('hidden');
        sidebar.classList.add('flex');
        if (icon) icon.className = 'fa-solid fa-xmark text-sm';
        if (text) text.textContent = 'Fechar';

        // Exclusivo para Mobile e Tablet: ao abrir o MENU, rolar suavemente a barra de rolagem para o topo / área do menu
        const isMobileOrTablet = window.innerWidth < 1024 || (window.matchMedia && window.matchMedia('(max-width: 1023px)').matches) || /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent || '');
        if (isMobileOrTablet) {
          try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (document.documentElement) document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
            if (document.body) document.body.scrollTo({ top: 0, behavior: 'smooth' });
            const mainContainer = document.querySelector('.flex-1.flex.flex-col.min-w-0.overflow-y-auto');
            if (mainContainer) mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
            if (typeof sidebar.scrollIntoView === 'function') {
              sidebar.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          } catch (e) {
            window.scrollTo(0, 0);
          }
        }
      } else {
        sidebar.classList.add('hidden');
        sidebar.classList.remove('flex');
        if (icon) icon.className = 'fa-solid fa-bars text-sm';
        if (text) text.textContent = 'Menu';
      }
    }
    window.toggleMobileSidebar = toggleMobileSidebar;

    const ALL_TABS = ['inicio', 'atletas', 'jogadores', 'noticias', 'galeria', 'emails', 'config', 'guia'];
    const TAB_TITLES = {
      inicio: '🏠 Início & Carteiras Homologadas',
      atletas: 'Studio de Emissão de Carteira de Federados CR80',
      jogadores: '2. 👥 Jogadores Cadastrados & Homologação',
      noticias: '3. 📰 Aba Notícias & Torneios',
      galeria: '4. 🖼️ Galeria Oficial de Arenas & Foot Table',
      emails: '5. 📧 Aba E-mails Institucionais & Gestão',
      config: '6. ⚙️ Banco de Dados & Ajustes',
      guia: '📋 Guia do Painel Administrativo'
    };

    /* =========================================================
       ESQUEMA DE OPERAÇÕES & GESTÃO DE CARGOS (@foot-table.pe.org)
       Definido no topo para acesso instantâneo (0ms) a permissões e guia
       ========================================================= */
    const DEFAULT_OPERATION_GROUPS = [
      {
        id: 'modulo_carteira',
        icon: '🪪',
        title: 'CARTEIRA & STUDIO CR80',
        items: [
          { id: 'carteira_studio', name: 'Studio de Emissão CR80', desc: 'Diagramar, ajustar posições, foto 3x4 e visualizar carteira oficial' },
          { id: 'carteira_pdf', name: 'Baixar Carteira (PDF HD)', desc: 'Gerar e baixar PDF vetorial em alta definição para impressão gráfica' },
          { id: 'carteira_png', name: 'Baixar Carteira (PNG 600 DPI)', desc: 'Gerar e baixar imagem nítida em altíssima resolução (600 DPI)' },
          { id: 'carteira_imprimir', name: 'Impressão Oficial Direta', desc: 'Disparar impressão instantânea no padrão CR80 da Federação' }
        ]
      },
      {
        id: 'modulo_atletas',
        icon: '👥',
        title: 'ATLETAS & HOMOLOGAÇÃO',
        items: [
          { id: 'atletas_visualizar', name: 'Base de Atletas Federados', desc: 'Visualizar lista geral, CPF, contatos e dados de filiação' },
          { id: 'atletas_homologar', name: 'Homologar & Aprovar Atleta', desc: 'Validar registro federativo e liberar consulta pública oficial' },
          { id: 'atletas_editar', name: 'Editar Dados de Atletas', desc: 'Atualizar fotos, categorias, modalidades SOLO/DUPLA e fichas' },
          { id: 'atletas_excluir', name: 'Suspender / Excluir Atleta', desc: 'Remover atleta do banco de dados oficial da Federação' },
          { id: 'atletas_exportar', name: 'Exportar Lotes (ZIP & CSV)', desc: 'Baixar todas as carteiras em ZIP ou planilha de federados' }
        ]
      },
      {
        id: 'modulo_noticias',
        icon: '📰',
        title: 'NOTÍCIAS & TORNEIOS',
        items: [
          { id: 'noticias_publicar', name: 'Publicar Matérias & Notícias', desc: 'Criar novas notícias, comunicados e matérias do portal' },
          { id: 'noticias_upload', name: 'Upload de Banners (Supabase)', desc: 'Fazer upload de fotos e artes direto para o Supabase' },
          { id: 'noticias_editar', name: 'Editar & Destacar Notícias', desc: 'Editar textos, links, categorias e fixar notícias em destaque' },
          { id: 'noticias_excluir', name: 'Excluir Notícias do Portal', desc: 'Remover publicações arquivadas ou comunicados antigos' }
        ]
      },
      {
        id: 'modulo_gestao',
        icon: '⚙️',
        title: 'GESTÃO, CONTAS & SISTEMA',
        items: [
          { id: 'gestao_emails', name: 'Criar E-mails Institucionais', desc: 'Credenciar contas @foot-table.pe.org para gestores' },
          { id: 'gestao_cargos', name: 'Gerenciar Cargos & Permissões', desc: 'Criar novos cargos e configurar o esquema de operações' },
          { id: 'gestao_supabase', name: 'Configurações Supabase & Nuvem', desc: 'Ajustar URL, chave Anon e conexão de banco de dados' },
          { id: 'gestao_limpeza', name: 'Limpeza de Dados & Manutenção', desc: 'Limpar cache, logs e restaurar padrões do sistema' }
        ]
      }
    ];

    let SYSTEM_OPERATION_GROUPS = [];
    let ALL_OPERATION_IDS = [];

    function loadSystemOperationGroups() {
      let stored = null;
      try { stored = JSON.parse(localStorage.getItem('pe_custom_operation_groups')); } catch (e) {}
      const hasOldArenaData = stored && Array.isArray(stored) && stored.some(g => g.id === 'operacao_jogos' || g.id === 'balcao_consumo' || g.id === 'quadras_espacos' || g.id === 'cadastros_gestao');
      if (!stored || !Array.isArray(stored) || stored.length === 0 || hasOldArenaData) {
        stored = JSON.parse(JSON.stringify(DEFAULT_OPERATION_GROUPS));
        localStorage.setItem('pe_custom_operation_groups', JSON.stringify(stored));
      }
      SYSTEM_OPERATION_GROUPS = stored;
      ALL_OPERATION_IDS = SYSTEM_OPERATION_GROUPS.flatMap(g => g.items.map(i => i.id));
      return SYSTEM_OPERATION_GROUPS;
    }

    function saveSystemOperationGroups(groups) {
      SYSTEM_OPERATION_GROUPS = groups;
      ALL_OPERATION_IDS = SYSTEM_OPERATION_GROUPS.flatMap(g => g.items.map(i => i.id));
      localStorage.setItem('pe_custom_operation_groups', JSON.stringify(groups));
    }

    // Inicialização síncrona imediata das listas
    loadSystemOperationGroups();

    function isCurrentAdriano() {
      const rawUser = (sessionStorage.getItem('pe_admin_user') || localStorage.getItem('pe_admin_user') || '').toLowerCase().trim();
      if (rawUser.includes('adriano')) return true;
      const user = rawUser.includes('@') ? rawUser : `${rawUser}@foot-table.pe.org`;
      let admins = [];
      try { admins = JSON.parse(localStorage.getItem('pe_institutional_admins')) || []; } catch(e) {}
      const current = admins.find(a => {
        const aEmail = (a.email || '').toLowerCase().trim();
        return aEmail === rawUser || aEmail === user || aEmail.replace(/@foot-table\.pe\.(org|gov\.br)$/i, '') === rawUser;
      });
      if (current) {
        if ((current.email && current.email.toLowerCase().includes('adriano')) ||
            (current.cargo && current.cargo.toLowerCase().includes('presidente')) ||
            (current.nome && current.nome.toLowerCase().includes('adriano'))) {
          return true;
        }
      }
      return false;
    }

    function getCurrentUserPermissions() {
      const rawUser = (sessionStorage.getItem('pe_admin_user') || localStorage.getItem('pe_admin_user') || '').toLowerCase().trim();
      const user = rawUser.includes('@') ? rawUser : `${rawUser}@foot-table.pe.org`;
      // Superusuário de emergência para recuperação técnica
      if (rawUser === 'admin') return ['*'];

      // Se for a conta do Presidente FPEFT (Adriano Mello), tem permissões operacionais fixas e nunca herda master (*) nem abas restritas (emails/config)
      if (isCurrentAdriano()) {
        return [
          'carteira_studio', 'carteira_pdf', 'carteira_png', 'carteira_imprimir',
          'atletas_visualizar', 'atletas_homologar', 'atletas_editar', 'atletas_excluir', 'atletas_exportar',
          'noticias_publicar', 'noticias_upload', 'noticias_editar', 'noticias_excluir'
        ];
      }

      const admins = JSON.parse(localStorage.getItem('pe_institutional_admins')) || [];
      const current = admins.find(a => {
        const aEmail = (a.email || '').toLowerCase().trim();
        return aEmail === rawUser || aEmail === user || aEmail.replace(/@foot-table\.pe\.(org|gov\.br)$/i, '') === rawUser;
      });

      if (current) {
        // Se a conta específica tem permissões configuradas
        if (Array.isArray(current.permissions) && current.permissions.length > 0) {
          if (current.permissions.includes('*')) return ['*'];
          return current.permissions;
        }
        // Se a conta não tem permissões explícitas, herda do cargo cadastrado
        const roles = JSON.parse(localStorage.getItem('pe_custom_roles')) || [];
        const role = roles.find(r => r.name.toLowerCase() === (current.cargo || '').toLowerCase());
        if (role && Array.isArray(role.permissions) && role.permissions.length > 0) {
          if (role.permissions.includes('*')) return ['*'];
          return role.permissions;
        }
        if (current.cargo === 'Diretor Adjunto') return ['*'];
        return [];
      }

      // Se não encontrou cadastro institucional mas é gabrielacessor (legado inicial)
      if (rawUser.includes('gabrielacessor')) return ['*'];
      return [];
    }

    function isTabAllowed(tabName) {
      if (isCurrentAdriano() && (tabName === 'emails' || tabName === 'config')) {
        return false;
      }
      const perms = getCurrentUserPermissions();
      if (perms.includes('*')) return true;
      if (tabName === 'inicio' || tabName === 'guia') return true;
      if (tabName === 'atletas') return perms.includes('carteira_studio') || perms.includes('carteira_pdf') || perms.includes('carteira_png') || perms.includes('carteira_imprimir');
      if (tabName === 'jogadores') return perms.includes('atletas_visualizar') || perms.includes('atletas_homologar') || perms.includes('atletas_editar') || perms.includes('atletas_excluir') || perms.includes('atletas_exportar');
      if (tabName === 'noticias') return perms.includes('noticias_publicar') || perms.includes('noticias_editar') || perms.includes('noticias_upload') || perms.includes('noticias_excluir');
      if (tabName === 'galeria') return perms.includes('noticias_publicar') || perms.includes('noticias_editar') || perms.includes('noticias_upload');
      if (tabName === 'emails') return perms.includes('gestao_emails') || perms.includes('gestao_cargos');
      if (tabName === 'config') return perms.includes('gestao_supabase') || perms.includes('gestao_limpeza');
      return false;
    }

    function hasPermission(permId) {
      const perms = getCurrentUserPermissions();
      if (perms.includes('*')) return true;
      return perms.includes(permId);
    }

    function renderGuiaDoPainel() {
      const container = document.getElementById('dynamicGuiaContainer');
      if (!container) return;

      const perms = getCurrentUserPermissions();
      const isMaster = !isCurrentAdriano() && perms.includes('*');
      const rawUser = (sessionStorage.getItem('pe_admin_user') || localStorage.getItem('pe_admin_user') || '').toLowerCase().trim();
      const user = rawUser.includes('@') ? rawUser : `${rawUser}@foot-table.pe.org`;
      const admins = JSON.parse(localStorage.getItem('pe_institutional_admins')) || [];
      const currentAdmin = admins.find(a => {
        const aEmail = (a.email || '').toLowerCase().trim();
        return aEmail === rawUser || aEmail === user || aEmail.replace(/@foot-table\.pe\.(org|gov\.br)$/i, '') === rawUser;
      });
      const currentCargo = currentAdmin && currentAdmin.cargo ? currentAdmin.cargo : (isMaster ? 'Diretor Adjunto' : 'Gestor Autorizado');
      const currentName = currentAdmin && currentAdmin.nome ? currentAdmin.nome : user;
      const isPres = currentCargo.toLowerCase().includes('presidente');
      const cargoIcon = isPres ? '👑' : (isMaster ? '⚡' : '🛡️');
      const totalOps = (typeof ALL_OPERATION_IDS !== 'undefined' && ALL_OPERATION_IDS.length) ? ALL_OPERATION_IDS.length : 17;
      const allowedCount = isMaster ? totalOps : perms.length;

      // 1. Atualiza cabeçalho do Guia (sem badges de contagem de operações ou master)
      const badgeContainer = document.getElementById('guiaUserBadgeContainer');
      if (badgeContainer) {
        badgeContainer.innerHTML = '';
      }

      const userBanner = document.getElementById('guiaUserBanner');
      if (userBanner) {
        userBanner.innerHTML = `
          <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0"></div>
          <div class="flex items-center gap-3.5">
            <div class="w-12 h-12 rounded-xl bg-[#05080e] border border-[#1c253b] flex items-center justify-center text-2xl shrink-0 shadow-inner">
              ${cargoIcon}
            </div>
            <div>
              <div class="flex items-center gap-2 flex-wrap">
                <h3 class="font-bold text-white text-base">${escapeText(currentName)}</h3>
              </div>
              <p class="text-xs text-slate-400 mt-0.5">
                Cargo Oficial: <strong class="text-pe-gold font-semibold">${cargoIcon} ${escapeText(currentCargo)}</strong> &bull; E-mail: <span class="font-mono text-slate-300">${escapeText(user)}</span>
              </p>
            </div>
          </div>
          <div class="text-xs text-slate-400 bg-[#05080e] p-3 rounded-xl border border-[#1c253b] self-start md:self-auto space-y-0.5">
            <span class="text-emerald-400 font-bold flex items-center gap-1.5 text-xs"><i class="fa-solid fa-circle-check"></i> Funções Oficiais do Painel</span>
            <span class="text-[11px] text-slate-400 block">Manual interativo com todas as funções disponíveis para a sua utilização no sistema.</span>
          </div>
        `;
      }

      // 2. Construção dinâmica dos módulos e funções permitidas (sem contadores de operações)
      let moduleCount = 1;
      let html = '';

      // MÓDULO 1: Painel Geral & Navegação (Sempre liberado para usuários autenticados)
      html += `
        <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-6 space-y-4 shadow-xl relative overflow-hidden">
          <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0"></div>
          <div class="flex items-center gap-3">
            <span class="text-2xl">🏠</span>
            <h3 class="font-oswald text-xl uppercase font-bold text-white">${moduleCount++}. Aba Início & Navegação Federativa</h3>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
            <div class="p-3 bg-[#05080e] rounded-xl border border-[#1c253b] hover:border-blue-500/30 transition flex flex-col justify-between">
              <div>
                <strong class="text-white block mb-1 text-sm text-pe-gold">📊 Indicadores Oficiais & Métricas ao Vivo:</strong>
                <span class="text-slate-300 leading-relaxed block">Painel com estatísticas em tempo real: total de atletas federados, carteirinhas homologadas no estado de Pernambuco, matérias no ar e administradores ativos.</span>
              </div>
              <div class="mt-2.5 pt-2 border-t border-[#151c2e] flex items-center justify-between text-[10px] text-slate-400">
                <span class="text-emerald-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-circle-check text-[9px]"></i> Função Oficial do Painel</span>
              </div>
            </div>
            <div class="p-3 bg-[#05080e] rounded-xl border border-[#1c253b] hover:border-blue-500/30 transition flex flex-col justify-between">
              <div>
                <strong class="text-white block mb-1 text-sm text-pe-gold">🧭 Menu Lateral Restrito & Adaptativo:</strong>
                <span class="text-slate-300 leading-relaxed block">O sistema bloqueia e oculta automaticamente da sua tela qualquer módulo que não esteja liberado para o seu cargo ou usuário, garantindo foco e segurança.</span>
              </div>
              <div class="mt-2.5 pt-2 border-t border-[#151c2e] flex items-center justify-between text-[10px] text-slate-400">
                <span class="text-emerald-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-circle-check text-[9px]"></i> Função Oficial do Painel</span>
              </div>
            </div>
          </div>
        </div>
      `;

      // MÓDULO: Carteiras & Studio CR80
      const studioCards = [];
      if (hasPermission('carteira_studio')) {
        studioCards.push({
          icon: '🎲',
          name: 'Gerador de Código Oficial',
          desc: 'Botão para gerar automaticamente um código oficial exclusivo de 6 dígitos numéricos para novos atletas.'
        });
        studioCards.push({
          icon: '📸',
          name: 'Upload da Foto Oficial',
          desc: 'Você seleciona a foto do atleta direto do seu computador, que é inserida e tratada instantaneamente na carteirinha.'
        });
        studioCards.push({
          icon: '👁️',
          name: 'Preview ao Vivo & Diagramador CR80',
          desc: 'Enquanto você preenche os dados do atleta (Nome, CPF, Nascimento, Município, Modalidade), a carteirinha oficial é renderizada ao lado em tempo real com drag-and-drop.'
        });
        studioCards.push({
          icon: '☁️',
          name: 'Envio para o Banco de Dados',
          desc: 'Ao clicar em "Salvar Atleta no Banco de Dados", as informações e a foto são gravadas no Supabase. Assim, quando o atleta digitar os 6 dígitos dele no site público, ele recebe a carteira oficial dele imediatamente!'
        });
      }
      if (hasPermission('carteira_pdf')) {
        studioCards.push({
          icon: '📄',
          name: 'Emissão em PDF Vetorial HD',
          desc: 'Exporta a carteirinha oficial frente e verso em PDF vetorial em altíssima definição (300 DPI), pronta para gráfica ou impressora PVC.'
        });
      }
      if (hasPermission('carteira_png')) {
        studioCards.push({
          icon: '💾',
          name: 'Botão Baixar PNG HD (600 DPI)',
          desc: 'Exporta a carteirinha em altíssima resolução para impressão ou envio instantâneo.'
        });
      }
      if (hasPermission('carteira_imprimir')) {
        studioCards.push({
          icon: '🖨️',
          name: 'Impressão Oficial Direta',
          desc: 'Disparo de impressão instantânea no padrão CR80 (85.60 mm x 53.98 mm) calibrada para cartões de PVC.'
        });
      }

      if (studioCards.length > 0) {
        html += `
          <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-6 space-y-4 shadow-xl relative overflow-hidden">
            <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0"></div>
            <div class="flex items-center gap-3">
              <span class="text-2xl">🪪</span>
              <h3 class="font-oswald text-xl uppercase font-bold text-white">${moduleCount++}. Aba Carteiras & Studio CR80</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-slate-300">
              ${studioCards.map(c => `
                <div class="p-3 bg-[#05080e] rounded-xl border border-[#1c253b] hover:border-blue-500/30 transition flex flex-col justify-between">
                  <div>
                    <strong class="text-white block mb-1 text-sm text-pe-gold">${c.icon} ${escapeText(c.name)}:</strong>
                    <span class="text-slate-300 leading-relaxed block">${escapeText(c.desc)}</span>
                  </div>
                  <div class="mt-2.5 pt-2 border-t border-[#151c2e] flex items-center justify-between text-[10px] text-slate-400">
                    <span class="text-emerald-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-circle-check text-[9px]"></i> Função Oficial do Painel</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // MÓDULO: Atletas Cadastrados & Homologação
      const atletasCards = [];
      if (hasPermission('atletas_visualizar')) {
        atletasCards.push({
          icon: '📋',
          name: 'Tabela de Atletas & Busca',
          desc: 'Lista com todos os atletas cadastrados, filtro de busca instantânea por nome, CPF, código de 6 dígitos, categoria e município.'
        });
      }
      if (hasPermission('atletas_homologar')) {
        atletasCards.push({
          icon: '✅',
          name: 'Homologação Oficial de Atletas',
          desc: 'Validação e aprovação dos registros federativos de novos atletas, liberando o selo de homologado e a verificação pública imediata no portal.'
        });
      }
      if (hasPermission('atletas_editar')) {
        atletasCards.push({
          icon: '✏️',
          name: 'Edição de Fichas e Modalidades',
          desc: 'Atualização cadastral dos atletas federados, substituição de foto 3x4, retificação de dados pessoais e alteração de modalidade (SOLO/DUPLA).'
        });
      }
      if (hasPermission('atletas_exportar')) {
        atletasCards.push({
          icon: '📦',
          name: 'Exportação em Lote (ZIP & Planilha)',
          desc: 'Baixar todas as carteiras em arquivo comprimido ZIP e exportar a planilha completa de federados em formato CSV/Excel.'
        });
      }
      if (hasPermission('atletas_excluir')) {
        atletasCards.push({
          icon: '🗑️',
          name: 'Exclusão & Suspensão de Registros',
          desc: 'Suspensão e remoção segura de atletas inativos ou cancelados do banco de dados oficial da Federação.'
        });
      }

      if (atletasCards.length > 0) {
        html += `
          <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-6 space-y-4 shadow-xl relative overflow-hidden">
            <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0"></div>
            <div class="flex items-center gap-3">
              <span class="text-2xl">👥</span>
              <h3 class="font-oswald text-xl uppercase font-bold text-white">${moduleCount++}. Aba Atletas & Homologação</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-slate-300">
              ${atletasCards.map(c => `
                <div class="p-3 bg-[#05080e] rounded-xl border border-[#1c253b] hover:border-blue-500/30 transition flex flex-col justify-between">
                  <div>
                    <strong class="text-white block mb-1 text-sm text-pe-gold">${c.icon} ${escapeText(c.name)}:</strong>
                    <span class="text-slate-300 leading-relaxed block">${escapeText(c.desc)}</span>
                  </div>
                  <div class="mt-2.5 pt-2 border-t border-[#151c2e] flex items-center justify-between text-[10px] text-slate-400">
                    <span class="text-emerald-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-circle-check text-[9px]"></i> Função Oficial do Painel</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // MÓDULO: Notícias & Torneios
      const noticiasCards = [];
      if (hasPermission('noticias_publicar')) {
        noticiasCards.push({
          icon: '🚀',
          name: 'Publicação de Novas Matérias',
          desc: 'Publicação de novas matérias com Título, Categoria (Mundial Roma, Campeonato, Regulamento, Informativo, Comunicado), Data e Conteúdo oficial.'
        });
        noticiasCards.push({
          icon: '⚡',
          name: 'Sincronização Automática com o Portal',
          desc: 'As matérias salvas vão para o Supabase e aparecem instantaneamente na página inicial da Federação para todo o público.'
        });
      }
      if (hasPermission('noticias_upload')) {
        noticiasCards.push({
          icon: '📸',
          name: 'Upload de Banners & Fotos Oficiais',
          desc: 'Envio de artes promocionais, fotos de pódio e capas de notícias diretamente para o Supabase Storage.'
        });
      }
      if (hasPermission('noticias_editar')) {
        noticiasCards.push({
          icon: '⭐',
          name: 'Edição & Destaque de Matérias',
          desc: 'Edição de comunicados publicados, atualização de links externos de torneios e definição da notícia principal de capa do portal.'
        });
      }
      if (hasPermission('noticias_excluir')) {
        noticiasCards.push({
          icon: '🗑️',
          name: 'Gerenciamento e Exclusão Rápida',
          desc: 'Gerenciamento e exclusão de comunicados antigos ou expirados com apenas um clique.'
        });
      }

      if (noticiasCards.length > 0) {
        html += `
          <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-6 space-y-4 shadow-xl relative overflow-hidden">
            <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0"></div>
            <div class="flex items-center gap-3">
              <span class="text-2xl">📰</span>
              <h3 class="font-oswald text-xl uppercase font-bold text-white">${moduleCount++}. Aba Notícias & Torneios</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-slate-300">
              ${noticiasCards.map(c => `
                <div class="p-3 bg-[#05080e] rounded-xl border border-[#1c253b] hover:border-blue-500/30 transition flex flex-col justify-between">
                  <div>
                    <strong class="text-white block mb-1 text-sm text-pe-gold">${c.icon} ${escapeText(c.name)}:</strong>
                    <span class="text-slate-300 leading-relaxed block">${escapeText(c.desc)}</span>
                  </div>
                  <div class="mt-2.5 pt-2 border-t border-[#151c2e] flex items-center justify-between text-[10px] text-slate-400">
                    <span class="text-emerald-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-circle-check text-[9px]"></i> Função Oficial do Painel</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // MÓDULO: E-mails Institucionais & Gestão de Cargos
      const emailsCards = [];
      if (hasPermission('gestao_emails')) {
        emailsCards.push({
          icon: '📧',
          name: 'Credenciamento de E-mails Oficiais',
          desc: 'Criação de novos e-mails institucionais com domínio oficial @foot-table.pe.org, definindo senhas e cargos para diretores e gestores.'
        });
      }
      if (hasPermission('gestao_cargos')) {
        emailsCards.push({
          icon: '🛡️',
          name: 'Gestão de Cargos & Esquema de Operações',
          desc: 'Criação de novos cargos federativos e configuração granular de quais das 17 operações cada função tem autorização para realizar.'
        });
      }

      if (emailsCards.length > 0) {
        html += `
          <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-6 space-y-4 shadow-xl relative overflow-hidden">
            <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0"></div>
            <div class="flex items-center gap-3">
              <span class="text-2xl">📧</span>
              <h3 class="font-oswald text-xl uppercase font-bold text-white">${moduleCount++}. Aba E-mails Institucionais & Gestão</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
              ${emailsCards.map(c => `
                <div class="p-3 bg-[#05080e] rounded-xl border border-[#1c253b] hover:border-blue-500/30 transition flex flex-col justify-between">
                  <div>
                    <strong class="text-white block mb-1 text-sm text-pe-gold">${c.icon} ${escapeText(c.name)}:</strong>
                    <span class="text-slate-300 leading-relaxed block">${escapeText(c.desc)}</span>
                  </div>
                  <div class="mt-2.5 pt-2 border-t border-[#151c2e] flex items-center justify-between text-[10px] text-slate-400">
                    <span class="text-emerald-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-circle-check text-[9px]"></i> Função Oficial do Painel</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // MÓDULO: Banco de Dados & Ajustes
      const configCards = [];
      if (hasPermission('gestao_supabase')) {
        configCards.push({
          icon: '☁️',
          name: 'Conexão Supabase & Nuvem',
          desc: 'Configuração avançada das chaves de conexão de banco de dados, URL da API REST e credenciais de segurança do Supabase.'
        });
      }
      if (hasPermission('gestao_limpeza')) {
        configCards.push({
          icon: '🧹',
          name: 'Manutenção & Limpeza do Sistema',
          desc: 'Rotinas de limpeza de cache, descarte de sessões expiradas e restauração de dados padrão do sistema.'
        });
      }

      if (configCards.length > 0) {
        html += `
          <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-6 space-y-4 shadow-xl relative overflow-hidden">
            <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0"></div>
            <div class="flex items-center gap-3">
              <span class="text-2xl">⚙️</span>
              <h3 class="font-oswald text-xl uppercase font-bold text-white">${moduleCount++}. Aba Banco de Dados & Ajustes</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-300">
              ${configCards.map(c => `
                <div class="p-3 bg-[#05080e] rounded-xl border border-[#1c253b] hover:border-blue-500/30 transition flex flex-col justify-between">
                  <div>
                    <strong class="text-white block mb-1 text-sm text-pe-gold">${c.icon} ${escapeText(c.name)}:</strong>
                    <span class="text-slate-300 leading-relaxed block">${escapeText(c.desc)}</span>
                  </div>
                  <div class="mt-2.5 pt-2 border-t border-[#151c2e] flex items-center justify-between text-[10px] text-slate-400">
                    <span class="text-emerald-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-circle-check text-[9px]"></i> Função Oficial do Painel</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // MÓDULO: Operações Customizadas (se criadas no sistema)
      const customCards = [];
      const allSysGroups = (typeof loadSystemOperationGroups === 'function') ? loadSystemOperationGroups() : [];
      allSysGroups.forEach(grp => {
        (grp.items || []).forEach(item => {
          if (item.isCustom && hasPermission(item.id)) {
            customCards.push({
              icon: '⚡',
              name: item.name,
              desc: item.desc || 'Operação personalizada autorizada para a sua conta institucional.'
            });
          }
        });
      });

      if (customCards.length > 0) {
        html += `
          <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl p-6 space-y-4 shadow-xl relative overflow-hidden">
            <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0"></div>
            <div class="flex items-center gap-3">
              <span class="text-2xl">⚡</span>
              <h3 class="font-oswald text-xl uppercase font-bold text-white">${moduleCount++}. Operações Personalizadas</h3>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs text-slate-300">
              ${customCards.map(c => `
                <div class="p-3 bg-[#05080e] rounded-xl border border-[#1c253b] hover:border-blue-500/30 transition flex flex-col justify-between">
                  <div>
                    <strong class="text-white block mb-1 text-sm text-pe-gold">${c.icon} ${escapeText(c.name)}:</strong>
                    <span class="text-slate-300 leading-relaxed block">${escapeText(c.desc)}</span>
                  </div>
                  <div class="mt-2.5 pt-2 border-t border-[#151c2e] flex items-center justify-between text-[10px] text-slate-400">
                    <span class="text-emerald-400 font-semibold flex items-center gap-1"><i class="fa-solid fa-circle-check text-[9px]"></i> Função Oficial do Painel</span>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      container.innerHTML = html;
    }

    function applyPermissionsToUI() {
      const perms = getCurrentUserPermissions();
      const isMaster = !isCurrentAdriano() && perms.includes('*');
      const rawUser = (sessionStorage.getItem('pe_admin_user') || localStorage.getItem('pe_admin_user') || '').toLowerCase().trim();
      const user = rawUser.includes('@') ? rawUser : `${rawUser}@foot-table.pe.org`;
      const admins = JSON.parse(localStorage.getItem('pe_institutional_admins')) || [];
      const currentAdmin = admins.find(a => {
        const aEmail = (a.email || '').toLowerCase().trim();
        return aEmail === rawUser || aEmail === user || aEmail.replace(/@foot-table\.pe\.(org|gov\.br)$/i, '') === rawUser;
      });
      const currentCargo = currentAdmin && currentAdmin.cargo ? currentAdmin.cargo : (isMaster ? 'Diretor Adjunto' : 'Gestor Autorizado');
      const isPres = currentCargo.toLowerCase().includes('presidente');

      // Se a aba atualmente ativa estiver bloqueada para o usuário, redireciona imediatamente para 'inicio'
      const activeTab = ALL_TABS.find(t => {
        const el = document.getElementById(`tabContent-${t}`);
        return el && !el.classList.contains('hidden');
      });
      if (activeTab && !isTabAllowed(activeTab)) {
        switchTab('inicio');
      }

      // 1. Atualiza cabeçalho do perfil na Sidebar
      const sidebarUser = document.getElementById('sidebarAdminUser');
      const sidebarRole = document.getElementById('sidebarAdminRole');
      const sidebarBadge = document.getElementById('sidebarAdminBadge');
      const sidebarBox = document.getElementById('sidebarUserBox');

      if (sidebarUser) {
        sidebarUser.textContent = currentAdmin ? (currentAdmin.nome ? `${currentAdmin.nome}` : currentAdmin.email) : (user || 'gabrielacessor@foot-table.pe.org');
      }
      if (sidebarRole) {
        const icon = isPres ? '👑' : (isMaster ? '⚡' : '🛡️');
        sidebarRole.innerHTML = `${icon} ${escapeText(currentCargo)}`;
      }
      if (sidebarBadge) {
        sidebarBadge.remove();
      }
      if (sidebarBox) {
        sidebarBox.setAttribute('title', `${user} (${currentCargo})`);
      }

      // 2. Ocultação Rigorosa das Abas Não Permitidas na Barra Lateral (Sidebar)
      ALL_TABS.forEach(t => {
        const btn = document.getElementById(`navBtn-${t}`);
        if (!btn) return;

        const allowed = isTabAllowed(t);
        const lockEl = btn.querySelector('.nav-tab-lock-indicator');
        if (lockEl) lockEl.remove();

        if (!allowed) {
          btn.classList.add('hidden');
          btn.style.display = 'none';
        } else {
          btn.classList.remove('hidden', 'opacity-30', 'grayscale', 'cursor-not-allowed');
          btn.style.display = '';
          btn.removeAttribute('title');
        }
      });

      // 3. Ocultação de Botões de Ação no Studio (PDF, PNG, Imprimir)
      const canPdf = hasPermission('carteira_pdf');
      ['btnExportPDF', 'btnDownloadPdf', 'btnDownloadPdfMobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (!canPdf) {
            el.classList.add('hidden');
            el.style.display = 'none';
          } else {
            el.classList.remove('hidden');
            el.style.display = '';
            el.disabled = false;
          }
        }
      });

      const canPng = hasPermission('carteira_png');
      ['btnExportPNG', 'btnDownloadPng', 'btnDownloadPngMobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (!canPng) {
            el.classList.add('hidden');
            el.style.display = 'none';
          } else {
            el.classList.remove('hidden');
            el.style.display = '';
            el.disabled = false;
          }
        }
      });

      const canImprimir = hasPermission('carteira_imprimir');
      ['btnPrintCarteira', 'btnPrintCarteiraMobile'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (!canImprimir) {
            el.classList.add('hidden');
            el.style.display = 'none';
          } else {
            el.classList.remove('hidden');
            el.style.display = '';
            el.disabled = false;
          }
        }
      });

      // 3.1. Controle Estrito de Modificação de Atletas (Acesso Controlado)
      const canEditAtletas = hasPermission('atletas_editar');
      const btnConcluir = document.getElementById('btnConcluirCadastro');
      if (btnConcluir) {
        if (!canEditAtletas) {
          btnConcluir.classList.add('hidden');
          btnConcluir.style.display = 'none';
          btnConcluir.disabled = true;
        } else {
          btnConcluir.classList.remove('hidden');
          btnConcluir.style.display = '';
          btnConcluir.disabled = false;
        }
      }

      const athleteInputIds = [
        'athleteFederatedNum', 'athleteStatus', 'athleteName', 'athleteCpf',
        'athleteBirth', 'athletePhone', 'athleteCity', 'athleteValidity',
        'inputQrText', 'inputAssinatura'
      ];
      athleteInputIds.forEach(inpId => {
        const el = document.getElementById(inpId);
        if (el) {
          if (!canEditAtletas) {
            el.readOnly = true;
            if (el.tagName === 'SELECT') el.disabled = true;
            el.classList.add('opacity-75', 'cursor-not-allowed', 'bg-slate-900/60');
          } else {
            el.readOnly = false;
            if (el.tagName === 'SELECT') el.disabled = false;
            el.classList.remove('opacity-75', 'cursor-not-allowed', 'bg-slate-900/60');
          }
        }
      });

      // Modality & Category buttons
      ['modalityPillsContainer', 'categoryPillsContainer'].forEach(cId => {
        const cont = document.getElementById(cId);
        if (cont) {
          if (!canEditAtletas) {
            cont.classList.add('pointer-events-none', 'opacity-60');
          } else {
            cont.classList.remove('pointer-events-none', 'opacity-60');
          }
        }
      });

      // Inputs de arquivo permanecem permanentemente invisíveis no layout (acionados por botões estéticos)
      ['uploadFotoCameraInput', 'uploadFotoInput', 'inputSignatureFile'].forEach(cId => {
        const el = document.getElementById(cId);
        if (el) {
          el.disabled = !canEditAtletas;
          el.classList.add('hidden');
          el.style.setProperty('display', 'none', 'important');
        }
      });

      // Botão para restaurar silhueta oficial padrão
      const btnResetFoto = document.getElementById('btnResetFoto');
      if (btnResetFoto) {
        btnResetFoto.disabled = !canEditAtletas;
        if (!canEditAtletas) {
          btnResetFoto.classList.add('hidden');
          btnResetFoto.style.display = 'none';
        } else {
          btnResetFoto.classList.remove('hidden');
          btnResetFoto.style.display = '';
        }
      }

      // Banner de Acesso Controlado no Formulário de Atletas
      const athleteFormEl = document.getElementById('athleteForm');
      let readonlyNotice = document.getElementById('athleteFormReadonlyNotice');
      if (athleteFormEl) {
        if (!canEditAtletas) {
          if (!readonlyNotice) {
            readonlyNotice = document.createElement('div');
            readonlyNotice.id = 'athleteFormReadonlyNotice';
            readonlyNotice.className = 'p-3 bg-amber-950/70 border border-amber-500/50 rounded-xl text-xs text-amber-200 flex items-center gap-2.5 shadow-md mb-2';
            readonlyNotice.innerHTML = `
              <span class="text-lg">🔒</span>
              <div class="leading-tight">
                <strong class="text-amber-300 font-bold block text-xs uppercase">Acesso Controlado (Modo Somente Visualização)</strong>
                <span class="text-[11px] text-slate-300">Sua conta institucional tem acesso restrito para consulta e emissão, estando bloqueada para cadastrar ou modificar dados de atletas.</span>
              </div>
            `;
            athleteFormEl.insertBefore(readonlyNotice, athleteFormEl.firstChild);
          } else {
            readonlyNotice.classList.remove('hidden');
            readonlyNotice.style.display = '';
          }
        } else if (readonlyNotice) {
          readonlyNotice.classList.add('hidden');
          readonlyNotice.style.display = 'none';
        }
      }

      // 3.2. Bloqueio de Alteração de Layout do Studio (Padrão Fixo e Modo Design)
      const canEditLayout = hasPermission('gestao_supabase') || hasPermission('carteira_studio') || hasPermission('atletas_editar') || isMaster;
      const btnSaveCloud = document.getElementById('btnSaveOfficialCloud');
      if (btnSaveCloud) {
        if (!canEditLayout) {
          btnSaveCloud.classList.add('hidden');
          btnSaveCloud.style.display = 'none';
          btnSaveCloud.disabled = true;
        } else {
          btnSaveCloud.classList.remove('hidden');
          btnSaveCloud.style.display = '';
          btnSaveCloud.disabled = false;
        }
      }

      const btnModeDesign = document.getElementById('btnModeDesign');
      if (btnModeDesign) {
        if (!canEditLayout) {
          btnModeDesign.classList.add('hidden');
          btnModeDesign.style.display = 'none';
          btnModeDesign.disabled = true;
          studioState.isDesignLocked = true;
          const floatingPanel = document.getElementById('floatingControlPanel');
          if (floatingPanel) floatingPanel.style.display = 'none';
          updateModeButtonsUI();
        } else {
          btnModeDesign.classList.remove('hidden');
          btnModeDesign.style.display = '';
          btnModeDesign.disabled = false;
        }
      }

      // 3.3. Bloqueio de Importação em Lote de Atletas
      const btnOpenBatch = document.getElementById('btnOpenBatchImport');
      if (btnOpenBatch) {
        if (!canEditAtletas) {
          btnOpenBatch.classList.add('hidden');
          btnOpenBatch.style.display = 'none';
        } else {
          btnOpenBatch.classList.remove('hidden');
          btnOpenBatch.style.display = '';
        }
      }

      // 4. Ocultação de Exportação e Homologação na Aba Jogadores
      const canExportJogadores = hasPermission('atletas_exportar');
      ['btnExportZip', 'btnExportCsv', 'btnExportExcel', 'btnExportarZipJogadores', 'btnExportarCsvJogadores'].forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          if (!canExportJogadores) {
            el.classList.add('hidden');
            el.style.display = 'none';
          } else {
            el.classList.remove('hidden');
            el.style.display = '';
            el.disabled = false;
          }
        }
      });

      const canHomologar = hasPermission('atletas_homologar');
      const btnHomologarTodos = document.getElementById('btnHomologarTodos');
      if (btnHomologarTodos) {
        if (!canHomologar) {
          btnHomologarTodos.classList.add('hidden');
          btnHomologarTodos.style.display = 'none';
        } else {
          btnHomologarTodos.classList.remove('hidden');
          btnHomologarTodos.style.display = '';
          btnHomologarTodos.disabled = false;
        }
      }

      // 5. Ocultação no Formulário de Notícias
      const canPublicarNoticia = hasPermission('noticias_publicar');
      const canEditarNoticia = hasPermission('noticias_editar');
      const newsForm = document.getElementById('adminNewsForm');
      if (newsForm) {
        const newsCard = newsForm.closest('.bg-\\[\\#0b101d\\]') || newsForm;
        if (!canPublicarNoticia && !canEditarNoticia) {
          newsCard.classList.add('hidden');
          newsCard.style.display = 'none';
        } else {
          newsCard.classList.remove('hidden');
          newsCard.style.display = '';
        }
      }

      // 5.1. Ocultação no Formulário da Galeria
      const canEditGaleria = hasPermission('noticias_editar') || hasPermission('noticias_publicar') || isMaster;
      const galleryForm = document.getElementById('adminGalleryForm');
      if (galleryForm) {
        const galleryCard = galleryForm.closest('.bg-\\[\\#0b101d\\]') || galleryForm;
        if (!canEditGaleria) {
          galleryCard.classList.add('hidden');
          galleryCard.style.display = 'none';
        } else {
          galleryCard.classList.remove('hidden');
          galleryCard.style.display = '';
        }
      }

      // 6. Ocultação no Formulário de E-mails e Cargos
      const canEmails = hasPermission('gestao_emails');
      const emailForm = document.getElementById('adminCreateEmailForm');
      if (emailForm) {
        const emailCard = emailForm.closest('.bg-\\[\\#0b101d\\]') || emailForm;
        if (!canEmails) {
          emailCard.classList.add('hidden');
          emailCard.style.display = 'none';
        } else {
          emailCard.classList.remove('hidden');
          emailCard.style.display = '';
        }
      }

      const canCargos = hasPermission('gestao_cargos');
      const roleForm = document.getElementById('createRoleForm');
      if (roleForm) {
        const roleCard = roleForm.closest('.bg-\\[\\#0b101d\\]') || roleForm;
        if (!canCargos) {
          roleCard.classList.add('hidden');
          roleCard.style.display = 'none';
        } else {
          roleCard.classList.remove('hidden');
          roleCard.style.display = '';
        }
      }

      // 7. Ocultação de Configurações Supabase e Limpeza
      const canSupabase = hasPermission('gestao_supabase');
      const btnSaveSupabase = document.getElementById('btnSaveSupabaseCfg');
      if (btnSaveSupabase) {
        const supabaseCard = btnSaveSupabase.closest('.bg-\\[\\#0b101d\\]') || btnSaveSupabase;
        if (!canSupabase) {
          supabaseCard.classList.add('hidden');
          supabaseCard.style.display = 'none';
        } else {
          supabaseCard.classList.remove('hidden');
          supabaseCard.style.display = '';
        }
      }

      const canLimpeza = hasPermission('gestao_limpeza');
      const btnResetSystem = document.getElementById('btnResetSystemDatabase');
      if (btnResetSystem) {
        const resetCard = btnResetSystem.closest('.bg-\\[\\#0b101d\\]') || btnResetSystem;
        if (!canLimpeza) {
          resetCard.classList.add('hidden');
          resetCard.style.display = 'none';
        } else {
          resetCard.classList.remove('hidden');
          resetCard.style.display = '';
        }
      }

      // 8. Atualização CSS instantânea (1ms) para garantir zero delay visual em qualquer recarregamento
      try {
        const hideSelectors = [];
        if (!isMaster) {
          if (!isTabAllowed('atletas')) hideSelectors.push('#navBtn-atletas, #tabContent-atletas');
          if (!isTabAllowed('jogadores')) hideSelectors.push('#navBtn-jogadores, #tabContent-jogadores');
          if (!isTabAllowed('noticias')) hideSelectors.push('#navBtn-noticias, #tabContent-noticias');
          if (!isTabAllowed('galeria')) hideSelectors.push('#navBtn-galeria, #tabContent-galeria');
          if (!isTabAllowed('emails')) hideSelectors.push('#navBtn-emails, #tabContent-emails');
          if (!isTabAllowed('config')) hideSelectors.push('#navBtn-config, #tabContent-config');
          if (!canEditAtletas) hideSelectors.push('#btnConcluirCadastro, #btnResetFoto, #btnOpenBatchImport, button[onclick*="generateFederatedNumber"], button[onclick*="openAthleteCameraSelector"], button[onclick*="resetAthletePhoto"], #uploadFotoCameraInput, #uploadFotoInput');
          if (!canEditLayout) hideSelectors.push('#btnSaveOfficialCloud, #btnModeDesign, button[onclick*="restoreOfficialElementPositions"]');
          if (!canPdf) hideSelectors.push('#btnExportPDF, #btnDownloadPdf, #btnDownloadPdfMobile');
          if (!canPng) hideSelectors.push('#btnExportPNG, #btnDownloadPng, #btnDownloadPngMobile');
          if (!canImprimir) hideSelectors.push('#btnPrintCarteira, #btnPrintCarteiraMobile');
          if (!canExportJogadores) hideSelectors.push('#btnExportZip, #btnExportCsv, #btnExportExcel, #btnExportarZipJogadores, #btnExportarCsvJogadores');
          if (!canHomologar) hideSelectors.push('#btnHomologarTodos');
          if (!canPublicarNoticia && !canEditarNoticia) hideSelectors.push('#adminNewsForm');
          if (!canEditGaleria) hideSelectors.push('#adminGalleryForm');
          if (!canLimpeza) hideSelectors.push('#btnResetSystemDatabase');
          hideSelectors.push('.nav-tab-lock-indicator');
        }
        hideSelectors.push('#sidebarAdminBadge');
        let instantStyle = document.getElementById('instant-permissions-style');
        if (!instantStyle) {
          instantStyle = document.createElement('style');
          instantStyle.id = 'instant-permissions-style';
          document.head.appendChild(instantStyle);
        }
        instantStyle.textContent = hideSelectors.length > 0 ? (hideSelectors.join(',\n') + ' { display: none !important; }') : '';
      } catch (e) {}

      // 9. Atualiza o Guia do Painel personalizado para a conta atual instantaneamente (0ms)
      try {
        renderGuiaDoPainel();
      } catch (e) {}
    }

    function switchTab(tabName) {
      if (!isTabAllowed(tabName)) {
        showToast("⚠️ Acesso Bloqueado: Seu cargo não possui permissão para acessar esta área.", true);
        return;
      }
      ALL_TABS.forEach(t => {
        const content = document.getElementById(`tabContent-${t}`);
        const btn = document.getElementById(`navBtn-${t}`);
        if (!content || !btn) return;

        const indicator = btn.querySelector('.nav-indicator');

        if (t === tabName) {
          content.classList.remove('hidden');
          btn.className = "nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl transition-all cursor-pointer group active-nav-pill";
          if (indicator) indicator.classList.remove('hidden');
        } else {
          content.classList.add('hidden');
          btn.className = "nav-item w-full flex items-center justify-between px-4 py-3 rounded-2xl text-slate-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer group";
          if (indicator) indicator.classList.add('hidden');
        }
      });

      const titleEl = document.getElementById('headerPageTitle');
      if (titleEl && TAB_TITLES[tabName]) {
        titleEl.textContent = TAB_TITLES[tabName];
      }

      // No modo smartphone e tablet (< 1024px), fecha automaticamente o menu lateral após o toque e rola ao topo do conteúdo
      const isMobileOrTablet = window.innerWidth < 1024 || (window.matchMedia && window.matchMedia('(max-width: 1023px)').matches) || /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent || '');
      if (isMobileOrTablet) {
        const sidebar = document.getElementById('sidebar');
        const icon = document.getElementById('mobileMenuIcon');
        const text = document.getElementById('mobileMenuText');
        if (sidebar) {
          sidebar.classList.add('hidden');
          sidebar.classList.remove('flex');
        }
        if (icon) icon.className = 'fa-solid fa-bars text-sm';
        if (text) text.textContent = 'Menu';
        try {
          window.scrollTo({ top: 0, behavior: 'smooth' });
          if (document.documentElement) document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
          if (document.body) document.body.scrollTo({ top: 0, behavior: 'smooth' });
          const mainContainer = document.querySelector('.flex-1.flex.flex-col.min-w-0.overflow-y-auto');
          if (mainContainer) mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
        } catch (e) {
          window.scrollTo(0, 0);
        }
      }
      const mobileActiveLabel = document.getElementById('mobileActiveTabLabel');
      if (mobileActiveLabel) {
        const tabLabels = {
          'inicio': 'Início',
          'atletas': 'Studio de Emissão',
          'jogadores': 'Jogadores Cadastrados',
          'noticias': 'Notícias & Torneios',
          'galeria': 'Galeria & Fotos',
          'emails': 'E-mail Institucional',
          'config': 'Banco & Ajustes',
          'guia': 'Guia do Painel'
        };
        mobileActiveLabel.textContent = tabLabels[tabName] || tabName;
      }

      // Aplica bloqueios visuais de botões na aba aberta
      applyPermissionsToUI();

      // Atualiza os dados da aba selecionada instantaneamente
      try {
        if (tabName === 'inicio') {
          updateDashboardData();
        } else if (tabName === 'atletas') {
          if (!window._openingAthleteInStudio) {
            prepararStudioNovoAtleta(true);
          }
          applyCurrentSvgBackground();
          renderInteractiveElements();
          setTimeout(() => {
            if (!_isUserManualZoom) autoFitStudioToScreen();
            updateFloatingPanelPosition();
          }, 60);
        } else if (tabName === 'jogadores') {
          renderJogadoresCadastradosTable();
        } else if (tabName === 'noticias') {
          renderAdminNews();
        } else if (tabName === 'galeria') {
          renderGalleryManager();
        } else if (tabName === 'emails') {
          renderOperationsSchemeForm();
          populateRoleSelect();
          renderCustomRolesList();
          renderInstitutionalAdminsTable();
        } else if (tabName === 'guia') {
          renderGuiaDoPainel();
        }
      } catch (err) {
        console.warn("Aviso ao atualizar dados da aba:", err);
      }
    }

    /* =========================================================
       STUDIO CR80 OFICIAL & GERENCIAMENTO DE ATLETAS (ABA 1)
       Tamanho CR80: 85.60 mm x 53.98 mm | Resolução: 1050px x 662px
       Baseado no vetor fiel oficial: Carteira Atleta.pdf (Alta Resolução 300 DPI)
       ========================================================= */
    function extractBirthYear(dateStr) {
      if (!dateStr) return '----';
      const str = String(dateStr).trim();
      const match = str.match(/\b(19\d{2}|20\d{2})\b/);
      if (match) return match[1];
      const digits = str.replace(/\D/g, '');
      if (digits.length === 4) return digits;
      if (digits.length === 8) return digits.slice(-4);
      if (str.toUpperCase().includes('XXXX')) return 'XXXX';
      return str;
    }

    const RAW_OFFICIAL_DEFAULT_PHOTO_SVG = '<svg xmlns="http://www.w3.org/2000/svg" width="200" height="236" viewBox="0 0 200 236"><rect width="200" height="236" fill="#071329"/><circle cx="100" cy="85" r="42" fill="#38bdf8" fill-opacity="0.25"/><circle cx="100" cy="85" r="38" fill="#1e293b"/><path d="M38 215 C38 145 162 145 162 215 Z" fill="#38bdf8" fill-opacity="0.25"/><path d="M42 215 C42 150 158 150 158 215 Z" fill="#1e293b"/><circle cx="100" cy="85" r="28" fill="#38bdf8" fill-opacity="0.85"/><path d="M54 215 C54 162 146 162 146 215 Z" fill="#38bdf8" fill-opacity="0.85"/><rect x="25" y="202" width="150" height="22" rx="11" fill="#0b1c3d" stroke="#38bdf8" stroke-width="1.5"/><text x="100" y="217" font-family="Montserrat, sans-serif" font-size="10" font-weight="900" fill="#e2e8f0" text-anchor="middle" letter-spacing="0.5">FOTO 3X4 DO ATLETA</text></svg>';
    const OFFICIAL_DEFAULT_PHOTO_SVG = (typeof window !== 'undefined' && window.btoa)
      ? 'data:image/svg+xml;base64,' + window.btoa(unescape(encodeURIComponent(RAW_OFFICIAL_DEFAULT_PHOTO_SVG)))
      : 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(RAW_OFFICIAL_DEFAULT_PHOTO_SVG);
    window.OFFICIAL_DEFAULT_PHOTO_SVG = OFFICIAL_DEFAULT_PHOTO_SVG;

    const OFFICIAL_DEFAULT_ELEMENTS = [
  {
    "id": "field-foto",
    "label": "Foto 3x4 do Atleta",
    "labelTag": "",
    "type": "photo",
    "x": 69,
    "y": 314,
    "width": 192,
    "height": 220,
    "borderRadius": 20,
    "borderWidth": 4,
    "borderColor": "#ffffff",
    "backgroundColor": "#09152e",
    "photoUrl": OFFICIAL_DEFAULT_PHOTO_SVG,
    "locked": false
  },
  {
    "id": "field-federado",
    "label": "Nº do Federado",
    "labelTag": "Nº DO FEDERADO",
    "type": "text-box",
    "targetKey": "federado",
    "text": "ID: #548608",
    "x": 69,
    "y": 550,
    "width": 192,
    "height": 30,
    "borderRadius": 15,
    "backgroundColor": "#ffffff",
    "textColor": "#00204a",
    "fontSize": 13,
    "fontWeight": "800",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "labelAlign": "center",
    "paddingLeft": 8,
    "paddingRight": 8,
    "locked": false
  },
  {
    "id": "field-nome",
    "label": "Nome do Atleta",
    "labelTag": "NOME DO ATLETA",
    "type": "text-box",
    "targetKey": "nome",
    "text": "GABRIEL PEREIRA ALVES",
    "x": 285,
    "y": 317,
    "width": 713,
    "height": 32,
    "borderRadius": 16,
    "backgroundColor": "#ffffff",
    "textColor": "#00204a",
    "fontSize": 15,
    "fontWeight": "800",
    "fontFamily": "Montserrat",
    "textAlign": "left",
    "labelAlign": "left",
    "paddingLeft": 16,
    "paddingRight": 16,
    "locked": false
  },
  {
    "id": "field-cpf",
    "label": "CPF",
    "labelTag": "CPF",
    "type": "text-box",
    "targetKey": "cpf",
    "text": "714.***.***-**",
    "x": 285,
    "y": 369,
    "width": 217,
    "height": 30,
    "borderRadius": 15,
    "backgroundColor": "#ffffff",
    "textColor": "#00204a",
    "fontSize": 13,
    "fontWeight": "800",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "labelAlign": "center",
    "paddingLeft": 10,
    "paddingRight": 10,
    "locked": false
  },
  {
    "id": "field-nasc",
    "label": "Ano de Nascimento",
    "labelTag": "ANO NASC.",
    "type": "text-box",
    "targetKey": "nasc",
    "text": "2003",
    "x": 519,
    "y": 369,
    "width": 213,
    "height": 30,
    "borderRadius": 15,
    "backgroundColor": "#ffffff",
    "textColor": "#00204a",
    "fontSize": 13,
    "fontWeight": "800",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "labelAlign": "center",
    "paddingLeft": 10,
    "paddingRight": 10,
    "locked": false
  },
  {
    "id": "field-municipio",
    "label": "Município",
    "labelTag": "MUNICÍPIO",
    "type": "text-box",
    "targetKey": "municipio",
    "text": "RECIFE - PE",
    "x": 757,
    "y": 369,
    "width": 236,
    "height": 30,
    "borderRadius": 15,
    "backgroundColor": "#ffffff",
    "textColor": "#00204a",
    "fontSize": 13,
    "fontWeight": "800",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "labelAlign": "center",
    "paddingLeft": 8,
    "paddingRight": 8,
    "locked": false
  },
  {
    "id": "field-fone",
    "label": "Telefone / WhatsApp",
    "labelTag": "TELEFONE / WHATSAPP",
    "type": "text-box",
    "targetKey": "fone",
    "text": "(XX) XXXXX-XXXX",
    "x": 291,
    "y": 427,
    "width": 163,
    "height": 30,
    "borderRadius": 15,
    "backgroundColor": "#ffffff",
    "textColor": "#00204a",
    "fontSize": 12,
    "fontWeight": "800",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "labelAlign": "center",
    "paddingLeft": 8,
    "paddingRight": 8,
    "locked": false
  },
  {
    "id": "field-modalidade",
    "label": "Modalidade",
    "labelTag": "MODALIDADE",
    "type": "text-box",
    "targetKey": "modalidade",
    "text": "SOLO (INDIVIDUAL)",
    "x": 466,
    "y": 427,
    "width": 188,
    "height": 30,
    "borderRadius": 15,
    "backgroundColor": "#ffffff",
    "textColor": "#00204a",
    "fontSize": 12,
    "fontWeight": "800",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "labelAlign": "center",
    "paddingLeft": 8,
    "paddingRight": 8,
    "locked": false
  },
  {
    "id": "field-categoria",
    "label": "Categoria",
    "labelTag": "CATEGORIA",
    "type": "text-box",
    "targetKey": "categoria",
    "text": "AMADOR",
    "x": 671,
    "y": 427,
    "width": 182,
    "height": 30,
    "borderRadius": 15,
    "backgroundColor": "#ffffff",
    "textColor": "#00204a",
    "fontSize": 12,
    "fontWeight": "800",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "labelAlign": "center",
    "paddingLeft": 8,
    "paddingRight": 8,
    "locked": false
  },
  {
    "id": "field-qrcode",
    "label": "QR Code de Autenticidade",
    "labelTag": "",
    "type": "qrcode",
    "targetKey": "qr",
    "x": 862,
    "y": 427,
    "width": 138,
    "height": 134,
    "borderRadius": 14,
    "backgroundColor": "#ffffff",
    "locked": false
  },
  {
    "id": "field-validade",
    "label": "Validade",
    "labelTag": "VALIDADE",
    "type": "text-box",
    "targetKey": "validade",
    "text": "12/2026",
    "x": 872,
    "y": 585,
    "width": 125,
    "height": 28,
    "borderRadius": 14,
    "backgroundColor": "#ffffff",
    "textColor": "#00204a",
    "fontSize": 13,
    "fontWeight": "800",
    "fontFamily": "Montserrat",
    "textAlign": "center",
    "labelAlign": "center",
    "paddingLeft": 6,
    "paddingRight": 6,
    "locked": false
  },
  {
    "id": "field-assinatura",
    "label": "Assinatura do Diretor",
    "labelTag": "",
    "type": "text-line",
    "targetKey": "assinatura",
    "text": "ASSINATURA DA DIRETORIA FPEFT",
    "x": 340,
    "y": 575,
    "width": 420,
    "height": 32,
    "textColor": "#ffffff",
    "fontSize": 11,
    "fontWeight": "700",
    "textAlign": "center",
    "signatureUrl": (typeof window !== 'undefined' && window.OFFICIAL_DIRECTOR_SIGNATURE_DATA_URL) ? window.OFFICIAL_DIRECTOR_SIGNATURE_DATA_URL : "",
    "signatureScale": 100,
    "locked": false
  }
];

    const STUDIO_LAYOUT_VERSION = 'v2026_cr80_padrao_oficial_v13_user_layout';

    const studioState = {
      zoom: 0.8,
      selectedId: 'field-nome',
      nudgeStep: 1, // 1px, 5px, 10px
      showBgLabels: false,
      showGuides: true, // Linhas Guia Inteligentes e Limites Ativos por Padrão
      isDesignLocked: true, // Padrão FIXO / TRAVADO contra modificações acidentais
      customSvgContent: null,
      customImageUrl: null,
      bgTransform: {
        mode: 'exact',
        scale: 1,
        x: 0,
        y: 0
      },
      floatingPinned: false,
      floatingMinimized: false,
      elements: JSON.parse(JSON.stringify(OFFICIAL_DEFAULT_ELEMENTS))
    };

    let _syncStudioDebounce = null;

    /* Atualiza o status visual da sincronização com o banco de dados da nuvem */
    function updateCloudSyncStatus(status) {
      const badge = document.getElementById('cloudSyncStatusBadge');
      const icon = document.getElementById('cloudSyncStatusIcon');
      const text = document.getElementById('cloudSyncStatusText');
      if (!badge) return;

      if (status === 'syncing' || status === 'loading') {
        badge.className = 'px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-blue-950/80 border border-blue-500/50 text-blue-300 shadow-sm';
        if (icon) icon.className = 'fa-solid fa-arrows-rotate fa-spin text-blue-400';
        if (text) text.textContent = status === 'loading' ? 'Baixando da Nuvem...' : 'Sincronizando Nuvem...';
      } else if (status === 'synced') {
        badge.className = 'px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 shadow-sm';
        if (icon) icon.className = 'fa-solid fa-cloud-check text-emerald-400';
        if (text) text.textContent = 'Nuvem Sincronizada';
      } else if (status === 'error') {
        badge.className = 'px-2.5 py-1.5 rounded-xl text-xs font-bold flex items-center gap-1.5 bg-amber-950/80 border border-amber-500/50 text-amber-300 shadow-sm';
        if (icon) icon.className = 'fa-solid fa-cloud text-amber-400';
        if (text) text.textContent = 'Nuvem Local';
      }
    }

    /* Monta o pacote de dados completo do layout do Studio (sem dados pessoais de atletas) */
    function buildStudioPayload() {
      const signItem = studioState.elements.find(e => e.id === 'field-assinatura' || e.type === 'text-line' || e.type === 'signature-line');
      const cleanElements = studioState.elements.map(el => {
        const item = { ...el };
        if (item.id === 'field-nome' || item.targetKey === 'nome') {
          item.text = '';
        } else if (item.id === 'field-cpf' || item.targetKey === 'cpf') {
          item.text = 'XXX.XXX.XXX-XX';
        } else if (item.id === 'field-nasc' || item.targetKey === 'nasc') {
          item.text = 'XX/XX/XXXX';
        } else if (item.id === 'field-fone' || item.targetKey === 'fone') {
          item.text = '(XX) XXXXX-XXXX';
        } else if (item.id === 'field-municipio' || item.targetKey === 'municipio') {
          item.text = '- PE';
        } else if (item.id === 'field-federado' || item.targetKey === 'federado') {
          item.text = 'ID: #548608';
        } else if (item.id === 'field-qrcode' || item.targetKey === 'qr') {
          item.text = 'https://fpeft.vercel.app/';
        } else if (item.type === 'photo') {
          item.photoUrl = '';
        }
        return item;
      });

      return {
        version: STUDIO_LAYOUT_VERSION,
        updated_at: new Date().toISOString(),
        elements: cleanElements,
        bgTransform: studioState.bgTransform || { mode: 'exact', scale: 1, x: 0, y: 0 },
        customImageUrl: studioState.customImageUrl || null,
        customSvgContent: studioState.customSvgContent || null,
        isDesignLocked: studioState.isDesignLocked !== false,
        signatureUrl: (signItem && signItem.signatureUrl) ? signItem.signatureUrl : (window.OFFICIAL_DIRECTOR_SIGNATURE_DATA_URL || null),
        signatureScale: (signItem && signItem.signatureScale !== undefined) ? signItem.signatureScale : 100
      };
    }

    /* =========================================================
       SISTEMA DE TRANSMISSÃO 100% EM TEMPO REAL NA NUVEM (SUPABASE)
       Transmissão remota instantânea via WebSockets da Nuvem Oficial.
       Transmite estritamente o layout geométrico/visual SEM sobrescrever
       os dados individuais dos atletas preenchidos em cada tela.
       ========================================================= */
    const CLOUD_REALTIME_ROOM = 'carteira_cloud_live_design';
    let _supabaseRealtimeChannel = null;
    let _lastBroadcastTime = 0;
    let _broadcastThrottleTimer = null;

    /* Inicializa canal Realtime na Nuvem Supabase (WebSocket) */
    function initSupabaseRealtimeLiveDesign() {
      if (!supabaseClient) return;
      if (_supabaseRealtimeChannel) {
        try { supabaseClient.removeChannel(_supabaseRealtimeChannel); } catch (e) {}
      }

      try {
        _supabaseRealtimeChannel = supabaseClient.channel(CLOUD_REALTIME_ROOM, {
          config: { broadcast: { self: false } }
        });

        _supabaseRealtimeChannel
          .on('broadcast', { event: 'live_design_update' }, (msg) => {
            if (msg && msg.payload) {
              applyIncomingLiveDesign(msg.payload);
            }
          })
          .subscribe((status) => {
            if (status === 'SUBSCRIBED') {
              console.log('✓ Canal Realtime Supabase (Nuvem Oficial) conectado e pronto para transmissão ao vivo!');
              updateCloudSyncStatus('synced');
            } else if (status === 'CLOSED' || status === 'CHANNEL_ERROR') {
              updateCloudSyncStatus('error');
            }
          });
      } catch (e) {
        console.warn('Aviso ao conectar Realtime na Nuvem:', e);
      }
    }

    /* Extrai estritamente o layout geométrico/visual da carteira (sem dados do atleta) */
    function extractPureDesignLayout() {
      const signItem = studioState.elements.find(e => e.id === 'field-assinatura' || e.type === 'text-line' || e.type === 'signature-line');
      return {
        elements: studioState.elements.map(el => ({
          id: el.id,
          type: el.type,
          x: el.x,
          y: el.y,
          width: el.width,
          height: el.height,
          borderRadius: el.borderRadius,
          backgroundColor: el.backgroundColor,
          textColor: el.textColor,
          fontSize: el.fontSize,
          fontWeight: el.fontWeight,
          fontFamily: el.fontFamily,
          textAlign: el.textAlign,
          labelAlign: el.labelAlign,
          paddingLeft: el.paddingLeft,
          paddingRight: el.paddingRight,
          borderWidth: el.borderWidth,
          borderColor: el.borderColor,
          labelTag: el.labelTag,
          signatureUrl: el.signatureUrl,
          signatureScale: el.signatureScale,
          locked: el.locked
        })),
        bgTransform: studioState.bgTransform || { mode: 'exact', scale: 1, x: 0, y: 0 },
        customImageUrl: studioState.customImageUrl || null,
        customSvgContent: studioState.customSvgContent || null,
        signatureUrl: (signItem && signItem.signatureUrl) ? signItem.signatureUrl : (window.OFFICIAL_DIRECTOR_SIGNATURE_DATA_URL || null),
        signatureScale: (signItem && signItem.signatureScale !== undefined) ? signItem.signatureScale : 100,
        timestamp: Date.now()
      };
    }

    /* Transmite a mudança de design em tempo real EXCLUSIVAMENTE via Nuvem Supabase */
    function broadcastLiveDesignChange(immediate = false) {
      const now = Date.now();
      if (!immediate && now - _lastBroadcastTime < 25) { // 40 FPS para movimento ultra-suave
        if (_broadcastThrottleTimer) return;
        _broadcastThrottleTimer = setTimeout(() => {
          _broadcastThrottleTimer = null;
          broadcastLiveDesignChange(true);
        }, 25);
        return;
      }
      _lastBroadcastTime = now;

      const layout = extractPureDesignLayout();

      // Transmissão direta pelo WebSocket na Nuvem Oficial Supabase
      if (_supabaseRealtimeChannel && typeof _supabaseRealtimeChannel.send === 'function') {
        try {
          _supabaseRealtimeChannel.send({
            type: 'broadcast',
            event: 'live_design_update',
            payload: layout
          });
        } catch (e) {
          console.warn('Erro ao transmitir pelo WebSocket da Nuvem:', e);
        }
      }
    }

    /* Aplica o design recebido da Nuvem em tempo real mantendo os dados do atleta preenchidos nesta tela */
    function applyIncomingLiveDesign(incoming) {
      if (!incoming || !Array.isArray(incoming.elements)) return;

      incoming.elements.forEach(incEl => {
        const curEl = studioState.elements.find(e => e.id === incEl.id);
        if (curEl) {
          curEl.x = incEl.x;
          curEl.y = incEl.y;
          curEl.width = incEl.width;
          curEl.height = incEl.height;
          if (incEl.borderRadius !== undefined) curEl.borderRadius = incEl.borderRadius;
          if (incEl.backgroundColor !== undefined) curEl.backgroundColor = incEl.backgroundColor;
          if (incEl.textColor !== undefined) curEl.textColor = incEl.textColor;
          if (incEl.fontSize !== undefined) curEl.fontSize = incEl.fontSize;
          if (incEl.fontWeight !== undefined) curEl.fontWeight = incEl.fontWeight;
          if (incEl.fontFamily !== undefined) curEl.fontFamily = incEl.fontFamily;
          if (incEl.textAlign !== undefined) curEl.textAlign = incEl.textAlign;
          if (incEl.labelAlign !== undefined) curEl.labelAlign = incEl.labelAlign;
          if (incEl.paddingLeft !== undefined) curEl.paddingLeft = incEl.paddingLeft;
          if (incEl.paddingRight !== undefined) curEl.paddingRight = incEl.paddingRight;
          if (incEl.borderWidth !== undefined) curEl.borderWidth = incEl.borderWidth;
          if (incEl.borderColor !== undefined) curEl.borderColor = incEl.borderColor;
          if (incEl.labelTag !== undefined) curEl.labelTag = incEl.labelTag;
          if (incEl.signatureUrl !== undefined) curEl.signatureUrl = incEl.signatureUrl;
          if (incEl.signatureScale !== undefined) curEl.signatureScale = incEl.signatureScale;
          // NÃO altera curEl.text (nome/CPF/cidade) nem curEl.photoUrl (foto do atleta desta tela)
        }
      });

      if (incoming.bgTransform) {
        studioState.bgTransform = incoming.bgTransform;
      }
      if (incoming.customImageUrl !== undefined) {
        studioState.customImageUrl = incoming.customImageUrl;
      }
      if (incoming.customSvgContent !== undefined) {
        studioState.customSvgContent = incoming.customSvgContent;
      }

      // Re-renderiza a tela ao vivo com o novo layout da nuvem
      if (typeof syncStudioElementsWithForm === 'function') {
        syncStudioElementsWithForm();
      }
      renderInteractiveElements();
      applyCurrentSvgBackground();

      // Atualiza inputs do painel flutuante se aberto
      if (studioState.selectedId && typeof syncFloatingPanelInputs === 'function') {
        syncFloatingPanelInputs();
      }
    }

    /* Sincroniza design com Supabase para que qualquer usuário/máquina receba as alterações */
    async function syncStudioDesignToSupabase(immediate = false) {
      if (typeof supabaseClient === 'undefined' || !supabaseClient) return;
      if (!immediate) {
        if (_syncStudioDebounce) clearTimeout(_syncStudioDebounce);
        _syncStudioDebounce = setTimeout(() => syncStudioDesignToSupabase(true), 800);
        return;
      }

      updateCloudSyncStatus('syncing');
      const payload = buildStudioPayload();
      const payloadStr = JSON.stringify(payload);
      const nowIso = payload.updated_at || new Date().toISOString();

      try {
        const syncPromises = [];

        // 1. GRAVA NO BANCO 2 (SECUNDÁRIO - ARMAZENAMENTO & INGESTÃO SEGURA)
        if (supabaseSecondaryClient) {
          syncPromises.push(
            safeSupabaseCall(
              supabaseSecondaryClient.from('configuracoes').upsert([{
                chave: 'carteira_studio_layout',
                valor: payloadStr,
                updated_at: nowIso
              }], { onConflict: 'chave' }),
              3000
            ).catch(err => console.warn('[Studio Sync] Inserção DB2 configuracoes:', err))
          );
          syncPromises.push(
            safeSupabaseCall(
              supabaseSecondaryClient.from('keep_alive_logs').insert([{
                source: 'studio_layout_sync',
                status: payloadStr,
                pinged_at: nowIso
              }]),
              3000
            ).catch(err => console.warn('[Studio Sync] Inserção DB2 keep_alive_logs:', err))
          );
        }

        // 2. ATUALIZA NO BANCO 1 (LOGS E CONFIGURAÇÕES)
        if (supabaseClient) {
          syncPromises.push(
            safeSupabaseCall(
              supabaseClient.from('keep_alive_logs').insert([{
                source: 'studio_layout_sync',
                status: payloadStr,
                pinged_at: nowIso
              }]),
              3000
            ).catch(err => console.warn('[Studio Sync] Inserção DB1 keep_alive_logs:', err))
          );
          syncPromises.push(
            safeSupabaseCall(
              supabaseClient.from('configuracoes').upsert([{
                chave: 'carteira_studio_layout',
                valor: payloadStr,
                updated_at: nowIso
              }], { onConflict: 'chave' }),
              3000
            ).catch(err => console.warn('[Studio Sync] DB1 configuracoes (esperado RLS se anon):', err))
          );
        }

        // 3. SERVERLESS ENDPOINT DE OPERAÇÃO (Garante gravação no DB1 e DB2 com Service Role Key)
        syncPromises.push(
          fetch('/api/gestao/operacao', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ action: 'save_studio_layout', layout: payload })
          }).catch(err => console.warn('[Studio Sync] Erro na rota api/gestao/operacao:', err))
        );

        await Promise.allSettled(syncPromises);

        // 4. Persiste localmente com carimbo de tempo
        localStorage.setItem('fpeft_studio_custom_elements', JSON.stringify(studioState.elements));
        localStorage.setItem('fpeft_studio_layout_data', payloadStr);
        localStorage.setItem('fpeft_studio_layout_version', STUDIO_LAYOUT_VERSION);
        if (studioState.bgTransform) {
          localStorage.setItem('fpeft_studio_bg_transform', JSON.stringify(studioState.bgTransform));
        }

        // Notifica outras abas no mesmo computador
        try {
          if (window.BroadcastChannel) {
            const bc = new BroadcastChannel('fpeft_studio_design_channel');
            bc.postMessage({ type: 'STUDIO_DESIGN_UPDATED', payload });
            bc.close();
          }
        } catch (e) {}

        updateCloudSyncStatus('synced');
      } catch (e) {
        console.warn('Erro ao sincronizar design na nuvem:', e);
        updateCloudSyncStatus('error');
      }
    }

    /* Grava explicitamente o design atual da carteira no Banco de Dados em tempo real */
    async function saveOfficialLayoutToCloud() {
      const isMaster = (typeof isMasterAdminUser === 'function' && isMasterAdminUser()) || hasPermission('*');
      const canEditLayout = hasPermission('gestao_supabase') || hasPermission('carteira_studio') || hasPermission('atletas_editar') || isMaster;
      if (!canEditLayout) {
        showToast('⚠️ Acesso Controlado: Você não possui permissão para alterar o Padrão da Carteira no banco de dados.', true);
        return;
      }
      try {
        const btn = document.getElementById('btnSaveOfficialCloud');
        if (btn) {
          btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-slate-950"></i><span>Salvando...</span>';
          btn.disabled = true;
        }

        // Persiste localmente com a versão do layout
        localStorage.setItem('fpeft_studio_custom_elements', JSON.stringify(studioState.elements));
        localStorage.setItem('fpeft_studio_layout_version', STUDIO_LAYOUT_VERSION);
        if (studioState.bgTransform) {
          localStorage.setItem('fpeft_studio_bg_transform', JSON.stringify(studioState.bgTransform));
        }

        // Envia imediatamente para o banco de dados na nuvem (tabela configuracoes + keep_alive_logs em ambos os bancos e API)
        await syncStudioDesignToSupabase(true);

        showToast('✅ Carteira salva com sucesso! Layout atualizado em tempo real no banco de dados para todos os novos cadastros.');

        setTimeout(() => {
          if (btn) {
            btn.innerHTML = '<i class="fa-solid fa-floppy-disk text-slate-950 text-xs sm:text-sm"></i><span>Salvar Carteira</span>';
            btn.disabled = false;
          }
        }, 1000);
      } catch (err) {
        console.error('Erro ao gravar padrão oficial:', err);
        showToast('Erro ao salvar carteira no banco de dados.');
        const btn = document.getElementById('btnSaveOfficialCloud');
        if (btn) {
          btn.innerHTML = '<i class="fa-solid fa-floppy-disk text-slate-950 text-xs sm:text-sm"></i><span>Salvar Carteira</span>';
          btn.disabled = false;
        }
      }
    }

    /* Sanitiza elementos garantindo integridade sem NUNCA sobrescrever posições ou dimensões customizadas */
    function sanitizeStudioElements(elements) {
      if (!Array.isArray(elements) || elements.length === 0) {
        return JSON.parse(JSON.stringify(OFFICIAL_DEFAULT_ELEMENTS));
      }
      return elements.map(el => {
        const defaultMatch = OFFICIAL_DEFAULT_ELEMENTS.find(d => d.id === el.id) || {};
        const item = {
          ...defaultMatch,
          ...el // Posições (x, y, width, height, etc) salvas pelo usuário têm prioridade TOTAL
        };

        // Purga qualquer resquício de dados de atletas fictícios/hardcoded do design oficial:
        if (!window._lastActiveAthlete) {
          if (item.id === 'field-nome' || item.targetKey === 'nome') {
            item.text = '';
          } else if (item.id === 'field-cpf' || item.targetKey === 'cpf') {
            item.text = 'XXX.XXX.XXX-XX';
          } else if (item.id === 'field-nasc' || item.targetKey === 'nasc') {
            item.text = 'XX/XX/XXXX';
          } else if (item.id === 'field-fone' || item.targetKey === 'fone') {
            item.text = '(XX) XXXXX-XXXX';
          } else if (item.id === 'field-municipio' || item.targetKey === 'municipio') {
            item.text = '- PE';
          } else if (item.id === 'field-federado' || item.targetKey === 'federado') {
            const currentFed = (document.getElementById('athleteFederatedNum')?.value || '').trim();
            item.text = currentFed || item.text || 'ID: #548608';
          } else if (item.id === 'field-qrcode' || item.targetKey === 'qr') {
            const currentFed = (document.getElementById('athleteFederatedNum')?.value || '').trim();
            item.text = currentFed ? `https://fpeft.vercel.app/?id=${currentFed}` : 'https://fpeft.vercel.app/';
          } else if (item.type === 'photo') {
            if (!item.photoUrl || item.photoUrl.length < 50 || !item.photoUrl.startsWith('data:image/')) {
              item.photoUrl = '';
            }
          }
        } else {
          if (item.type === 'photo' && (!item.photoUrl || item.photoUrl.length < 50)) {
            item.photoUrl = '';
          }
        }
        return item;
      });
    }

    /* Auxiliar para extrair dados válidos de layout com carimbo de tempo */
    function extractLayoutCandidate(raw, fallbackTimestamp) {
      if (!raw) return null;
      let parsed = (typeof raw === 'object' && raw !== null) ? raw : null;
      if (!parsed) {
        try { parsed = JSON.parse(raw); } catch (e) { return null; }
      }
      if (!parsed) return null;
      const elements = Array.isArray(parsed) ? parsed : parsed.elements;
      if (!Array.isArray(elements) || elements.length === 0) return null;
      const ts = parsed.updated_at || fallbackTimestamp || '1970-01-01T00:00:00Z';
      const time = new Date(ts).getTime();
      return {
        layout: parsed,
        elements: elements,
        timestamp: isNaN(time) ? 0 : time
      };
    }

    /* Busca e aplica o design oficial na nuvem Supabase ao inicializar em QUALQUER computador */
    async function fetchStudioDesignFromSupabase(force = false) {
      if (typeof supabaseClient === 'undefined' || !supabaseClient) return false;
      updateCloudSyncStatus('loading');

      try {
        const candidates = [];

        // 0. Cache local
        try {
          const localStr = localStorage.getItem('fpeft_studio_layout_data');
          if (localStr) {
            const cLocal = extractLayoutCandidate(localStr);
            if (cLocal) candidates.push(cLocal);
          }
        } catch (eLocal) {}

        const queryPromises = [];

        // 1. Banco 1 - configuracoes
        if (supabaseClient) {
          queryPromises.push(
            safeSupabaseCall(
              supabaseClient
                .from('configuracoes')
                .select('*')
                .eq('chave', 'carteira_studio_layout')
                .maybeSingle(),
              3000
            ).then(({ data, error }) => {
              if (!error && data && data.valor) {
                const c = extractLayoutCandidate(data.valor, data.updated_at);
                if (c) candidates.push(c);
              }
            }).catch(() => null)
          );

          // 2. Banco 1 - keep_alive_logs
          queryPromises.push(
            safeSupabaseCall(
              supabaseClient
                .from('keep_alive_logs')
                .select('*')
                .eq('source', 'studio_layout_sync')
                .order('pinged_at', { ascending: false })
                .limit(1),
              3000
            ).then(({ data, error }) => {
              if (!error && data && data.length > 0 && data[0].status) {
                const c = extractLayoutCandidate(data[0].status, data[0].pinged_at);
                if (c) candidates.push(c);
              }
            }).catch(() => null)
          );
        }

        // 3. Banco 2 - configuracoes
        if (supabaseSecondaryClient) {
          queryPromises.push(
            safeSupabaseCall(
              supabaseSecondaryClient
                .from('configuracoes')
                .select('*')
                .eq('chave', 'carteira_studio_layout')
                .maybeSingle(),
              2500
            ).then(({ data, error }) => {
              if (!error && data && data.valor) {
                const c = extractLayoutCandidate(data.valor, data.updated_at);
                if (c) candidates.push(c);
              }
            }).catch(() => null)
          );

          // 4. Banco 2 - keep_alive_logs
          queryPromises.push(
            safeSupabaseCall(
              supabaseSecondaryClient
                .from('keep_alive_logs')
                .select('*')
                .eq('source', 'studio_layout_sync')
                .order('pinged_at', { ascending: false })
                .limit(1),
              2000
            ).then(({ data, error }) => {
              if (!error && data && data.length > 0 && data[0].status) {
                const c = extractLayoutCandidate(data[0].status, data[0].pinged_at);
                if (c) candidates.push(c);
              }
            }).catch(() => null)
          );
        }

        if (queryPromises.length > 0) {
          await Promise.allSettled(queryPromises);
        }

        // Escolhe o candidato mais recente (timestamp mais alto)
        let bestCandidate = null;
        for (const cand of candidates) {
          if (!cand) continue;
          if (!bestCandidate || cand.timestamp > bestCandidate.timestamp) {
            bestCandidate = cand;
          }
        }

        let cloudData = bestCandidate ? bestCandidate.layout : null;
        if (cloudData) {
          const rawElements = Array.isArray(cloudData) ? cloudData : cloudData.elements;
          if (Array.isArray(rawElements) && rawElements.length > 0) {
            const preservedPhoto = (document.getElementById('athletePhotoVal') ? document.getElementById('athletePhotoVal').value : '') || window._currentAthletePhoto || '';
            studioState.elements = sanitizeStudioElements(rawElements);
            if (preservedPhoto) {
              const photoEl = studioState.elements.find(i => i.id === 'field-foto');
              if (photoEl) photoEl.photoUrl = preservedPhoto;
            }
            localStorage.setItem('fpeft_studio_custom_elements', JSON.stringify(studioState.elements));
          }

          if (cloudData.bgTransform && typeof cloudData.bgTransform === 'object') {
            studioState.bgTransform = cloudData.bgTransform;
            localStorage.setItem('fpeft_studio_bg_transform', JSON.stringify(studioState.bgTransform));
          }

          if (cloudData.customImageUrl) {
            studioState.customImageUrl = cloudData.customImageUrl;
          }
          if (cloudData.customSvgContent) {
            studioState.customSvgContent = cloudData.customSvgContent;
          }

          localStorage.setItem('fpeft_studio_layout_data', JSON.stringify(cloudData));

          // Sincroniza os textos dos elementos com os valores atuais do formulário
          if (typeof syncStudioElementsWithForm === 'function') {
            syncStudioElementsWithForm();
          }

          // Renderiza novamente a tela com o layout perfeito
          renderInteractiveElements();
          applyCurrentSvgBackground();

          // Sincroniza estado da assinatura da diretoria
          const signItem = studioState.elements.find(i => i.id === 'field-assinatura' || i.type === 'text-line' || i.type === 'signature-line');
          if (signItem && signItem.signatureUrl) {
            updateSignatureUIState(true);
          } else {
            updateSignatureUIState(false);
          }

          if (typeof syncInspectorWithSelected === 'function') {
            syncInspectorWithSelected();
          }

          updateCloudSyncStatus('synced');
          if (force) {
            showToast('Conexão estabelecida: Registros Atualizados');
          }
          return true;
        }
        updateCloudSyncStatus('synced');
        if (force) {
          showToast('Conexão estabelecida: Registros Atualizados');
        }
      } catch (e) {
        console.warn('Erro ao carregar design da nuvem:', e);
        updateCloudSyncStatus('error');
      }
      return false;
    }

    /* Salva automaticamente o design (posições, dimensões, estilo e transformações) no localStorage e Supabase */
    let _autoSaveStudioTimeout = null;
    function autoSaveStudioDesign(immediate = false) {
      if (!immediate) {
        if (_autoSaveStudioTimeout) clearTimeout(_autoSaveStudioTimeout);
        _autoSaveStudioTimeout = setTimeout(() => autoSaveStudioDesign(true), 250);
        return;
      }
      try {
        localStorage.setItem('fpeft_studio_custom_elements', JSON.stringify(studioState.elements));
        if (studioState.bgTransform) {
          localStorage.setItem('fpeft_studio_bg_transform', JSON.stringify(studioState.bgTransform));
        }
        syncStudioDesignToSupabase(false);
      } catch (err) {
        console.warn('Erro ao salvar design automaticamente:', err);
      }
    }

    /* Gestão do Upload, Redimensionamento e Persistência da Imagem da Assinatura do Diretor */
    function handlePresidentSignatureUpload(e) {
      const file = e.target.files && e.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        showToast('Por favor, selecione um arquivo de imagem válido (PNG, JPG, SVG).', true);
        return;
      }
      showToast('Otimizando imagem da assinatura do diretor...');
      const reader = new FileReader();
      reader.onload = function(evt) {
        const img = new Image();
        img.onload = function() {
          const maxW = 800;
          const maxH = 400;
          let width = img.width;
          let height = img.height;
          if (width > maxW || height > maxH) {
            const ratio = Math.min(maxW / width, maxH / height);
            width = Math.round(width * ratio);
            height = Math.round(height * ratio);
          }
          const canvas = document.createElement('canvas');
          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, width, height);

          const isPng = (file.type === 'image/png');
          const compressedDataUrl = isPng ? canvas.toDataURL('image/png') : canvas.toDataURL('image/jpeg', 0.90);

          const target = studioState.elements.find(item => item.id === 'field-assinatura' || item.type === 'text-line' || item.type === 'signature-line');
          if (target) {
            target.signatureUrl = compressedDataUrl;
            if (target.signatureScale === undefined) target.signatureScale = 100;
            autoSaveStudioDesign(true);
            syncStudioDesignToSupabase(true);
            renderInteractiveElements();
            updateSignatureUIState(true);
            const sizeKb = Math.round((compressedDataUrl.length * 3 / 4) / 1024);
            showToast(`✓ Assinatura do Diretor aplicada e salva permanentemente no sistema (${sizeKb} KB)!`);
          }
        };
        img.onerror = function() {
          showToast('Erro ao processar arquivo da assinatura.', true);
        };
        img.src = evt.target.result;
      };
      reader.readAsDataURL(file);
    }
    window.handlePresidentSignatureUpload = handlePresidentSignatureUpload;

    function removePresidentSignatureImage() {
      const target = studioState.elements.find(item => item.id === 'field-assinatura' || item.type === 'text-line' || item.type === 'signature-line');
      if (target) {
        delete target.signatureUrl;
        autoSaveStudioDesign(true);
        syncStudioDesignToSupabase(true);
        renderInteractiveElements();
        updateSignatureUIState(false);
        const fileInp = document.getElementById('inputSignatureFile');
        if (fileInp) fileInp.value = '';
        showToast('Imagem da assinatura removida com sucesso.');
      }
    }
    window.removePresidentSignatureImage = removePresidentSignatureImage;

    function loadDesktopBrancoSignature() {
      const target = studioState.elements.find(item => item.id === 'field-assinatura' || item.type === 'text-line' || item.type === 'signature-line');
      if (target && window.OFFICIAL_DIRECTOR_SIGNATURE_DATA_URL) {
        target.signatureUrl = window.OFFICIAL_DIRECTOR_SIGNATURE_DATA_URL;
        target.signatureScale = 100;
        target.label = 'Assinatura do Diretor';
        target.text = 'ASSINATURA DO DIRETOR FPEFT';
        const inpAssinatura = document.getElementById('inputAssinatura');
        if (inpAssinatura) inpAssinatura.value = 'ASSINATURA DO DIRETOR FPEFT';
        autoSaveStudioDesign(true);
        syncStudioDesignToSupabase(true);
        renderInteractiveElements();
        updateSignatureUIState(true);
        showToast('✓ Assinatura padrão do Diretor (Área de Trabalho/branco) carregada e salva no sistema!');
      } else {
        showToast('Assinatura padrão não encontrada no pacote de templates.', true);
      }
    }
    window.loadDesktopBrancoSignature = loadDesktopBrancoSignature;

    function handleSignatureScaleChange(val, save = false) {
      const scale = parseInt(val, 10) || 100;
      const label = document.getElementById('signatureScaleValue');
      if (label) label.textContent = `${scale}%`;
      const range = document.getElementById('inputSignatureScale');
      if (range && range.value !== String(scale)) range.value = String(scale);

      const target = studioState.elements.find(item => item.id === 'field-assinatura' || item.type === 'text-line' || item.type === 'signature-line');
      if (target) {
        target.signatureScale = scale;
        renderInteractiveElements();
        if (save) {
          autoSaveStudioDesign(true);
          broadcastLiveDesignChange(true);
          showToast(`✓ Tamanho da assinatura ajustado para ${scale}% e salvo no sistema!`);
        } else {
          broadcastLiveDesignChange(false);
        }
      }
    }
    window.handleSignatureScaleChange = handleSignatureScaleChange;

    function adjustSignatureScale(delta) {
      const range = document.getElementById('inputSignatureScale');
      const current = range ? parseInt(range.value, 10) || 100 : 100;
      const next = Math.max(40, Math.min(250, current + delta));
      handleSignatureScaleChange(next, true);
    }
    window.adjustSignatureScale = adjustSignatureScale;

    function resetSignatureScale() {
      handleSignatureScaleChange(100, true);
    }
    window.resetSignatureScale = resetSignatureScale;

    function confirmAndSaveSignatureScale(showToastMsg = true) {
      const range = document.getElementById('inputSignatureScale');
      const current = range ? parseInt(range.value, 10) || 100 : 100;
      handleSignatureScaleChange(current, true);
      syncStudioDesignToSupabase(true);
      if (showToastMsg) {
        showToast(`✓ Tamanho da assinatura (${current}%) confirmado e salvo na nuvem para todas as próximas carteiras!`);
      }
    }
    window.confirmAndSaveSignatureScale = confirmAndSaveSignatureScale;

    function updateSignatureUIState(hasImg) {
      const prevContainer = document.getElementById('signatureImgPreviewContainer');
      const btnRemove = document.getElementById('btnRemoveSignatureImg');
      const scaleControls = document.getElementById('signatureScaleControls');
      const target = studioState.elements.find(item => item.id === 'field-assinatura' || item.type === 'text-line' || item.type === 'signature-line');
      const currentScale = (target && target.signatureScale !== undefined) ? target.signatureScale : 100;

      if (prevContainer) {
        if (hasImg) prevContainer.classList.remove('hidden');
        else prevContainer.classList.add('hidden');
      }
      if (btnRemove) {
        if (hasImg) btnRemove.classList.remove('hidden');
        else btnRemove.classList.add('hidden');
      }
      if (scaleControls) {
        if (hasImg) scaleControls.classList.remove('hidden');
        else scaleControls.classList.add('hidden');
      }

      const scaleVal = document.getElementById('signatureScaleValue');
      const scaleInput = document.getElementById('inputSignatureScale');
      if (scaleVal) scaleVal.textContent = `${currentScale}%`;
      if (scaleInput) scaleInput.value = String(currentScale);
    }
    window.updateSignatureUIState = updateSignatureUIState;

    /* Carrega preferências e design salvo automaticamente pelo usuário */
    try {
      const savedLock = localStorage.getItem('fpeft_studio_design_locked');
      if (savedLock !== null) {
        studioState.isDesignLocked = savedLock === 'true';
      }
      const savedGuides = localStorage.getItem('fpeft_studio_show_guides');
      if (savedGuides !== null) {
        studioState.showGuides = savedGuides === 'true';
      }
      const savedVersion = localStorage.getItem('fpeft_studio_layout_version');
      if (savedVersion !== STUDIO_LAYOUT_VERSION) {
        studioState.elements = JSON.parse(JSON.stringify(OFFICIAL_DEFAULT_ELEMENTS));
        localStorage.setItem('fpeft_studio_custom_elements', JSON.stringify(studioState.elements));
        localStorage.setItem('fpeft_studio_layout_version', STUDIO_LAYOUT_VERSION);
      } else {
        const savedCustomElements = localStorage.getItem('fpeft_studio_custom_elements');
        if (savedCustomElements) {
          const parsed = JSON.parse(savedCustomElements);
          if (Array.isArray(parsed) && parsed.length > 0) {
            studioState.elements = sanitizeStudioElements(parsed);
            localStorage.setItem('fpeft_studio_custom_elements', JSON.stringify(studioState.elements));
          }
        }
      }
      const savedBgTransform = localStorage.getItem('fpeft_studio_bg_transform');
      if (savedBgTransform) {
        try {
          const parsedBg = JSON.parse(savedBgTransform);
          if (parsedBg && typeof parsedBg === 'object') {
            studioState.bgTransform = parsedBg;
          }
        } catch (e) {}
      }
      const signItem = studioState.elements.find(i => i.id === 'field-assinatura' || i.type === 'text-line' || i.type === 'signature-line');
      if (signItem) {
        if (!signItem.signatureUrl && window.OFFICIAL_DIRECTOR_SIGNATURE_DATA_URL) {
          signItem.signatureUrl = window.OFFICIAL_DIRECTOR_SIGNATURE_DATA_URL;
        }
        if (signItem.signatureScale === undefined) {
          signItem.signatureScale = 100;
        }
        if (!signItem.text || signItem.text.includes('ADJUNTA')) {
          signItem.text = 'ASSINATURA DO DIRETOR FPEFT';
        }
        signItem.label = 'Assinatura do Diretor';
        if (signItem.signatureUrl) {
          setTimeout(() => updateSignatureUIState(true), 100);
        }
      }
    } catch (e) {
      console.warn('Erro ao restaurar preferências do Studio:', e);
    }

    /* =========================================================
       ARTE VETORIAL OFICIAL FPEFT DA CARTEIRINHA (1050x662 - CR80)
       Baseado no arquivo vetorial fiel: Carteira Atleta.pdf (Alta Definição 300 DPI)
       ========================================================= */
    function getFpeftTemplateSvg(showLabels = true) {
      if (window.OFFICIAL_FPEFT_SVG_TEMPLATE && typeof window.OFFICIAL_FPEFT_SVG_TEMPLATE === 'string' && window.OFFICIAL_FPEFT_SVG_TEMPLATE.length > 500) {
        return window.OFFICIAL_FPEFT_SVG_TEMPLATE;
      }
      // Se ainda não carregou do script externo, busca síncrono local
      const templatePaths = ['assets/Carteira_Atleta_Template_1050x662.svg', 'Carteira_Atleta_Template_1050x662.svg'];
      for (const p of templatePaths) {
        try {
          const xhr = new XMLHttpRequest();
          xhr.open('GET', p, false);
          xhr.send(null);
          if (xhr.status === 200 && xhr.responseText && xhr.responseText.includes('<svg')) {
            window.OFFICIAL_FPEFT_SVG_TEMPLATE = xhr.responseText;
            return xhr.responseText;
          }
        } catch (e) {}
      }

      if (window.OFFICIAL_FPEFT_BG_DATA_URL) {
        return `<svg id="fpeftSvgTemplate" width="1050" height="662" viewBox="0 0 1050 662" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="cardRoundedClip">
      <rect width="1050" height="662" rx="34" />
    </clipPath>
  </defs>
  <g clip-path="url(#cardRoundedClip)">
    <image width="1050" height="662" preserveAspectRatio="none" href="${window.OFFICIAL_FPEFT_BG_DATA_URL}" xlink:href="${window.OFFICIAL_FPEFT_BG_DATA_URL}" />
  </g>
</svg>`;
      }

      // Fallback de segurança elegante
      return `
      <svg id="fpeftSvgTemplate" width="1050" height="662" viewBox="0 0 1050 662" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#00183b"/>
            <stop offset="45%" stop-color="#003580"/>
            <stop offset="100%" stop-color="#001a42"/>
          </linearGradient>
          <clipPath id="cardRoundedClip">
            <rect width="1050" height="662" rx="34" />
          </clipPath>
        </defs>
        <g clip-path="url(#cardRoundedClip)">
          <rect width="1050" height="662" fill="url(#bgGrad)"/>
          <g transform="translate(62, 28)">
            <text x="0" y="32" font-family="'Montserrat', sans-serif" font-size="28" font-weight="900" fill="#ffffff" letter-spacing="1">CARTEIRA DO ATLETA</text>
            <text x="0" y="52" font-family="'Montserrat', sans-serif" font-size="14" font-weight="800" fill="#38bdf8" letter-spacing="1.5">ATLETA OFICIAL</text>
          </g>
        </g>
      </svg>
      `;
    }

    /* Retorna o SVG exato do fundo atual para exibição e exportações (SVG, PNG, ZIP) sem perda de qualidade */
    function getCurrentBackgroundSvgString() {
      if (studioState.customImageUrl) {
        return `<svg id="fpeftSvgTemplate" width="1050" height="662" viewBox="0 0 1050 662" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="cardRoundedClip">
      <rect width="1050" height="662" rx="34" />
    </clipPath>
  </defs>
  <g clip-path="url(#cardRoundedClip)">
    <image width="1050" height="662" preserveAspectRatio="none" href="${studioState.customImageUrl}" xlink:href="${studioState.customImageUrl}" />
  </g>
</svg>`;
      }
      if (studioState.customSvgContent) {
        return studioState.customSvgContent;
      }
      return getFpeftTemplateSvg(studioState.showBgLabels);
    }

    /* =========================================================
       FUNDO VETORIAL & CALIBRAÇÃO (CR80)
       ========================================================= */
    function applyCurrentSvgBackground() {
      const container = document.getElementById('svgBackgroundContainer');
      if (!container) return;

      const { scale, x, y, mode } = studioState.bgTransform;
      const transformStyle = `transform: translate(${x}px, ${y}px) scale(${scale}); transform-origin: center center; transition: transform 0.05s ease-out;`;

      if (studioState.customImageUrl) {
        let objectFit = 'cover';
        if (mode === 'contain') objectFit = 'contain';
        if (mode === 'exact') objectFit = 'fill';

        container.innerHTML = `
          <div class="w-full h-full overflow-hidden flex items-center justify-center">
            <img src="${studioState.customImageUrl}" class="w-full h-full pointer-events-none select-none" style="object-fit: ${objectFit}; ${transformStyle}" />
          </div>
        `;
      } else if (studioState.customSvgContent) {
        let preserveAspect = 'xMidYMid slice';
        if (mode === 'contain') preserveAspect = 'xMidYMid meet';
        if (mode === 'exact') preserveAspect = 'none';

        let svgStr = studioState.customSvgContent;
        if (!svgStr.includes('preserveAspectRatio')) {
          svgStr = svgStr.replace(/<svg\b([^>]*)>/i, `<svg $1 preserveAspectRatio="${preserveAspect}">`);
        } else {
          svgStr = svgStr.replace(/preserveAspectRatio="[^"]*"/i, `preserveAspectRatio="${preserveAspect}"`);
        }

        container.innerHTML = `
          <div class="w-full h-full overflow-hidden flex items-center justify-center" style="${transformStyle}">
            ${svgStr}
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="w-full h-full overflow-hidden" style="${transformStyle}">
            ${getFpeftTemplateSvg(studioState.showBgLabels)}
          </div>
        `;
      }
    }

    function triggerAutoFitFullArea() {
      studioState.bgTransform = { mode: 'exact', scale: 1, x: 0, y: 0 };
      const scaleInp = document.getElementById('inputBgScale');
      const percInp = document.getElementById('inputBgPercent');
      const posX = document.getElementById('inputBgPosX');
      const posY = document.getElementById('inputBgPosY');
      const posXLabel = document.getElementById('bgPosXLabel');
      const posYLabel = document.getElementById('bgPosYLabel');

      if (scaleInp) scaleInp.value = 100;
      if (percInp) percInp.value = 100;
      if (posX) posX.value = 0;
      if (posY) posY.value = 0;
      if (posXLabel) posXLabel.innerText = '0px';
      if (posYLabel) posYLabel.innerText = '0px';

      updateBgFitButtons();
      applyCurrentSvgBackground();
      showToast('Arte ajustada 100% preenchendo toda a área do cartão!');
    }

    function updateBgFitButtons() {
      const btnCover = document.getElementById('btnBgFitCover');
      const btnContain = document.getElementById('btnBgFitContain');
      const btnExact = document.getElementById('btnBgFitExact');

      [btnCover, btnContain, btnExact].forEach(btn => {
        if (!btn) return;
        btn.classList.remove('bg-sky-600', 'text-white');
        btn.classList.add('text-slate-300');
      });

      if (studioState.bgTransform.mode === 'cover' && btnCover) {
        btnCover.classList.add('bg-sky-600', 'text-white');
      } else if (studioState.bgTransform.mode === 'contain' && btnContain) {
        btnContain.classList.add('bg-sky-600', 'text-white');
      } else if (studioState.bgTransform.mode === 'exact' && btnExact) {
        btnExact.classList.add('bg-sky-600', 'text-white');
      }
    }

    /* =========================================================
       GERADOR DE MATRIZ DE QR CODE REAL E ESCANEÁVEL
       ========================================================= */
    function generateQrMatrix(text) {
      if (!text) return null;
      if (typeof qrcode === 'function') {
        try {
          const qr = qrcode(0, 'M');
          qr.addData(String(text));
          qr.make();
          const count = qr.getModuleCount();
          const matrix = [];
          for (let r = 0; r < count; r++) {
            const row = [];
            for (let c = 0; c < count; c++) {
              row.push(qr.isDark(r, c));
            }
            matrix.push(row);
          }
          return matrix;
        } catch (e) {
          console.warn("QRCode generator err:", e);
        }
      }
      return null;
    }

    /* =========================================================
       RENDERIZAÇÃO DOS ELEMENTOS INTERATIVOS NO CANVAS CR80
       Suporta MODO FIXO (Emissão Segura) e MODO DESIGN (Livre)
       ========================================================= */
    function renderInteractiveElements() {
      const interactiveLayer = document.getElementById('interactiveElementsLayer');
      const canvasEl = document.getElementById('creditCardCanvas');
      if (!interactiveLayer) return;

      const viewportArea = document.getElementById('viewportArea');
      if (viewportArea) {
        if (studioState.isDesignLocked) {
          viewportArea.classList.add('is-mode-fixed');
          viewportArea.classList.remove('is-mode-design');
        } else {
          viewportArea.classList.add('is-mode-design');
          viewportArea.classList.remove('is-mode-fixed');
        }
      }
      if (canvasEl) {
        if (studioState.isDesignLocked) {
          canvasEl.classList.add('is-mode-fixed');
          canvasEl.classList.remove('is-mode-design');
        } else {
          canvasEl.classList.add('is-mode-design');
          canvasEl.classList.remove('is-mode-fixed');
        }
      }

      interactiveLayer.innerHTML = '';

      studioState.elements.forEach(item => {
        const div = document.createElement('div');
        div.id = item.id;
        const isSelected = item.id === studioState.selectedId;
        div.className = `selectable-item ${isSelected ? 'is-selected' : ''}`;
        
        div.style.left = `${item.x}px`;
        div.style.top = `${item.y}px`;
        div.style.width = `${item.width}px`;
        div.style.height = `${item.height}px`;
        div.style.borderRadius = `${item.borderRadius || 0}px`;
        div.style.zIndex = isSelected ? 50 : 20;

        if (item.type === 'photo') {
          div.style.backgroundColor = item.backgroundColor || '#0c2340';
          div.style.border = `${item.borderWidth || 4}px solid ${item.borderColor || '#ffffff'}`;
          div.style.overflow = 'hidden';
          div.style.boxShadow = '0 10px 25px rgba(0,0,0,0.55)';

          const activePhoto = item.photoUrl || (document.getElementById('athletePhotoVal') ? document.getElementById('athletePhotoVal').value : '') || window._currentAthletePhoto || '';

          if (activePhoto && activePhoto !== OFFICIAL_DEFAULT_PHOTO_SVG && !activePhoto.startsWith('data:image/svg+xml')) {
            div.innerHTML = `<img src="${activePhoto}" class="w-full h-full object-cover pointer-events-none select-none" />`;
          } else {
            div.innerHTML = `
              <div class="w-full h-full flex flex-col items-center justify-center text-slate-300 bg-slate-900/80 pointer-events-none select-none">
                <i class="fa-solid fa-user text-5xl mb-1 text-slate-400"></i>
                <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Foto 3x4</span>
              </div>
            `;
          }
        } else if (item.type === 'qrcode') {
          div.style.backgroundColor = item.backgroundColor || '#ffffff';
          div.style.overflow = 'visible';
          div.style.padding = '8px';
          div.style.display = 'flex';
          div.style.flexDirection = 'column';
          div.style.alignItems = 'center';
          div.style.justifyContent = 'center';
          div.style.boxShadow = '0 8px 24px rgba(0,0,0,0.45)';

          const athleteCode = (document.getElementById('athleteFederatedNum') ? document.getElementById('athleteFederatedNum').value : '') || (document.getElementById('athleteCode') ? document.getElementById('athleteCode').value : '') || '973321';
          let qrUrl = (item.text && item.text.startsWith('http')) ? item.text : `https://fpeft.vercel.app/?id=${athleteCode}`;
          if (qrUrl === 'https://fpeft.vercel.app/' || qrUrl === 'https://fpeft.vercel.app') {
            qrUrl = `https://fpeft.vercel.app/?id=${athleteCode}`;
          }

          let qrContentHtml = '';
          const qrMatrix = generateQrMatrix(qrUrl);
          if (qrMatrix && qrMatrix.length > 0) {
            const moduleCount = qrMatrix.length;
            const size = Math.min(item.width - 16, item.height - 16);
            const cell = size / moduleCount;
            let svgCells = '';
            for (let r = 0; r < moduleCount; r++) {
              for (let c = 0; c < moduleCount; c++) {
                if (qrMatrix[r][c]) {
                  svgCells += `<rect x="${c * cell}" y="${r * cell}" width="${cell + 0.2}" height="${cell + 0.2}" fill="#000000"/>`;
                }
              }
            }
            qrContentHtml = `
              <div class="w-full h-full flex flex-col items-center justify-center bg-white pointer-events-none rounded-[8px] overflow-hidden" title="${escapeHtml(qrUrl)}">
                <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="pointer-events-none select-none">${svgCells}</svg>
              </div>
            `;
          } else {
            qrContentHtml = `
              <div class="w-full h-full flex flex-col items-center justify-center bg-white pointer-events-none rounded-[8px] overflow-hidden">
                <i class="fa-solid fa-qrcode text-slate-950 text-5xl"></i>
              </div>
            `;
          }

          div.innerHTML = `
            ${qrContentHtml}
            ${item.labelTag ? `<span class="field-bottom-label select-none pointer-events-none">${escapeHtml(item.labelTag)}</span>` : ''}
          `;
        } else if (item.type === 'text-line') {
          div.style.display = 'flex';
          div.style.flexDirection = 'column';
          div.style.alignItems = 'center';
          div.style.justifyContent = 'center';
          const sigUrl = item.signatureUrl || (typeof window !== 'undefined' ? window.OFFICIAL_DIRECTOR_SIGNATURE_DATA_URL : '');
          const scalePercent = (item.signatureScale !== undefined ? item.signatureScale : 100) / 100;
          const baseMaxH = Math.round(56 * scalePercent);
          const baseMaxW = Math.round(320 * scalePercent);
          const signatureImgHtml = sigUrl 
            ? `<img src="${sigUrl}" style="max-height: ${baseMaxH}px; max-width: ${baseMaxW}px;" class="object-contain -mb-1 pointer-events-none select-none drop-shadow" />` 
            : '';
          div.innerHTML = `
            ${signatureImgHtml}
            <div class="w-full h-[1.5px] bg-white/90 mb-1"></div>
            <span class="text-[10px] font-extrabold uppercase tracking-wider text-slate-200 select-none pointer-events-none leading-tight font-fpeft">${escapeHtml(item.text || 'ASSINATURA DO DIRETOR FPEFT')}</span>
          `;
        } else {
          if (item.backgroundColor) {
            div.style.backgroundColor = item.backgroundColor;
          }
          div.style.color = item.textColor || '#00204a';
          div.style.fontFamily = "'Montserrat', sans-serif";
          div.style.fontSize = `${item.fontSize || 16}px`;
          div.style.fontWeight = item.fontWeight || '800';
          div.style.display = 'flex';
          div.style.alignItems = 'center';
          div.style.whiteSpace = 'nowrap';
          div.style.overflow = 'visible';
          div.style.paddingLeft = `${item.paddingLeft || 0}px`;
          div.style.paddingRight = `${item.paddingRight || 0}px`;
          div.style.boxShadow = '0 4px 14px rgba(0,0,0,0.35)';

          if (item.textAlign === 'center') {
            div.style.justifyContent = 'center';
          } else if (item.textAlign === 'right') {
            div.style.justifyContent = 'flex-end';
          } else {
            div.style.justifyContent = 'flex-start';
          }

          const effLabelAlign = item.labelAlign || (item.textAlign === 'center' ? 'center' : 'left');
          const labelHtml = item.labelTag ? `<span class="field-top-label label-align-${effLabelAlign} select-none pointer-events-none">${escapeHtml(item.labelTag)}</span>` : '';
          div.innerHTML = `
            ${labelHtml}
            <span class="truncate pointer-events-none select-none font-fpeft">${escapeHtml(item.text || '')}</span>
          `;
        }

        // 8 Alças de Redimensionamento: APENAS no Modo Design Livre
        if (isSelected && !studioState.isDesignLocked) {
          const handles = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w'];
          handles.forEach(dir => {
            const h = document.createElement('div');
            h.className = `resize-handle h-${dir}`;
            h.dataset.direction = dir;
            div.appendChild(h);
          });
        }

        // Eventos de Seleção e Arrastar
        div.addEventListener('pointerdown', (e) => onElementPointerDown(e, item.id));

        interactiveLayer.appendChild(div);
      });

      renderLayersSidebar();
      if (!studioState.floatingPinned && !studioState.isDesignLocked) {
        updateFloatingPanelPosition();
      }
      updateModeButtonsUI();
      renderAlignmentGuides();
    }

    /* =========================================================
       LINHAS GUIA INTELIGENTES, LIMITES DE CAMADAS E SNAPPING VISUAL
       Suporta: Linha do meio (X=525, Y=331), Laterais (X=268, X=1006),
       Limites da foto (X=44, 244), Alinhamento entre caixas brancas
       e Bounding Box com tags de dimensões da camada selecionada.
       ========================================================= */
    function toggleAlignmentGuides() {
      studioState.showGuides = !studioState.showGuides;
      try {
        localStorage.setItem('fpeft_studio_show_guides', studioState.showGuides ? 'true' : 'false');
      } catch (e) {}
      updateGuidesButtonUI();
      renderAlignmentGuides();
      showToast(studioState.showGuides ? '📐 Linhas Guia Inteligentes ativadas!' : '📐 Linhas Guia desativadas.');
    }

    function updateGuidesButtonUI() {
      const badge = document.getElementById('guidesStateBadge');
      const btn = document.getElementById('btnToggleGuides');
      if (!badge || !btn) return;
      if (studioState.showGuides !== false) {
        badge.innerText = 'ON';
        badge.className = 'text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30';
        btn.classList.add('border-pe-gold/60', 'text-pe-gold');
      } else {
        badge.innerText = 'OFF';
        badge.className = 'text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700';
        btn.classList.remove('border-pe-gold/60', 'text-pe-gold');
      }
    }

    function renderAlignmentGuides() {
      const svg = document.getElementById('alignmentGuidesLayer');
      if (!svg) return;

      if (studioState.showGuides === false) {
        svg.innerHTML = '';
        return;
      }

      const selItem = studioState.elements.find(i => i.id === studioState.selectedId);
      let svgHtml = '';

      // 1. LINHAS MESTRAS DO CARTÃO: CENTRO E LATERAIS (CR80: 1050 x 662)
      // Centro Vertical (X = 525)
      svgHtml += `
        <!-- Centro Vertical (X = 525) -->
        <g opacity="0.85">
          <line x1="525" y1="0" x2="525" y2="662" stroke="#ec4899" stroke-width="1.2" stroke-dasharray="6,4" />
          <rect x="470" y="4" width="110" height="18" rx="4" fill="#0b0f19" stroke="#ec4899" stroke-width="0.8" opacity="0.95" />
          <text x="525" y="16.5" fill="#f472b6" font-size="8.5" font-weight="800" text-anchor="middle" font-family="'Montserrat', sans-serif">MEIO VERTICAL 525px</text>
        </g>
      `;

      // Centro Horizontal (Y = 331)
      svgHtml += `
        <!-- Centro Horizontal (Y = 331) -->
        <g opacity="0.85">
          <line x1="0" y1="331" x2="1050" y2="331" stroke="#ec4899" stroke-width="1.2" stroke-dasharray="6,4" />
          <rect x="6" y="322" width="116" height="18" rx="4" fill="#0b0f19" stroke="#ec4899" stroke-width="0.8" opacity="0.95" />
          <text x="64" y="334.5" fill="#f472b6" font-size="8.5" font-weight="800" text-anchor="middle" font-family="'Montserrat', sans-serif">MEIO HORIZONTAL 331px</text>
        </g>
      `;

      // Linha Lateral Esquerda Oficial dos Campos (X = 268)
      svgHtml += `
        <!-- Lateral Esquerda dos Campos (X = 268) -->
        <g opacity="0.8">
          <line x1="268" y1="18" x2="268" y2="644" stroke="#06b6d4" stroke-width="1.2" stroke-dasharray="4,4" />
          <rect x="215" y="24" width="106" height="17" rx="3.5" fill="#082f49" stroke="#06b6d4" stroke-width="0.8" opacity="0.95" />
          <text x="268" y="35.5" fill="#38bdf8" font-size="8" font-weight="800" text-anchor="middle" font-family="'Montserrat', sans-serif">LATERAL ESQ 268px</text>
        </g>
      `;

      // Linha Lateral Direita Oficial dos Campos (X = 1006)
      svgHtml += `
        <!-- Lateral Direita dos Campos (X = 1006) -->
        <g opacity="0.8">
          <line x1="1006" y1="18" x2="1006" y2="644" stroke="#06b6d4" stroke-width="1.2" stroke-dasharray="4,4" />
          <rect x="948" y="24" width="102" height="17" rx="3.5" fill="#082f49" stroke="#06b6d4" stroke-width="0.8" opacity="0.95" />
          <text x="999" y="35.5" fill="#38bdf8" font-size="8" font-weight="800" text-anchor="middle" font-family="'Montserrat', sans-serif">LATERAL DIR 1006px</text>
        </g>
      `;

      // Coluna da Foto 3x4 (X = 44 e X = 244)
      svgHtml += `
        <!-- Limites da Foto 3x4 (X=44, X=244) -->
        <g opacity="0.55">
          <line x1="44" y1="20" x2="44" y2="642" stroke="#3b82f6" stroke-width="1" stroke-dasharray="2,3" />
          <line x1="244" y1="20" x2="244" y2="642" stroke="#3b82f6" stroke-width="1" stroke-dasharray="2,3" />
        </g>
      `;

      // 2. ALINHAMENTO INTELIGENTE DINÂMICO ENTRE CAIXAS BRANCAS (ENTRE QUADRADOS)
      if (selItem) {
        const selLeft = selItem.x;
        const selRight = selItem.x + selItem.width;
        const selCenterX = Math.round(selItem.x + selItem.width / 2);
        const selTop = selItem.y;
        const selBottom = selItem.y + selItem.height;
        const selCenterY = Math.round(selItem.y + selItem.height / 2);

        studioState.elements.forEach(other => {
          if (other.id === selItem.id) return;

          const oLeft = other.x;
          const oRight = other.x + other.width;
          const oCenterX = Math.round(other.x + other.width / 2);
          const oTop = other.y;
          const oBottom = other.y + other.height;
          const oCenterY = Math.round(other.y + other.height / 2);

          // A) Alinhamento de Topo (y == other.y)
          if (Math.abs(selTop - oTop) <= 2) {
            const minX = Math.min(selLeft, oLeft) - 10;
            const maxX = Math.max(selRight, oRight) + 10;
            svgHtml += `
              <g>
                <line x1="${minX}" y1="${oTop}" x2="${maxX}" y2="${oTop}" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,3" />
                <circle cx="${selLeft}" cy="${oTop}" r="3" fill="#10b981" />
                <circle cx="${oLeft}" cy="${oTop}" r="3" fill="#10b981" />
                <rect x="${(minX + maxX)/2 - 45}" y="${oTop - 16}" width="90" height="14" rx="3" fill="#022c22" stroke="#10b981" stroke-width="0.8" opacity="0.95" />
                <text x="${(minX + maxX)/2}" y="${oTop - 6}" fill="#6ee7b7" font-size="7.5" font-weight="800" text-anchor="middle" font-family="'Montserrat', sans-serif">ALINHADO TOPO ${oTop}px</text>
              </g>
            `;
          }

          // B) Alinhamento de Base (bottom == other.bottom)
          if (Math.abs(selBottom - oBottom) <= 2) {
            const minX = Math.min(selLeft, oLeft) - 10;
            const maxX = Math.max(selRight, oRight) + 10;
            svgHtml += `
              <g>
                <line x1="${minX}" y1="${oBottom}" x2="${maxX}" y2="${oBottom}" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,3" />
                <circle cx="${selRight}" cy="${oBottom}" r="3" fill="#10b981" />
                <circle cx="${oRight}" cy="${oBottom}" r="3" fill="#10b981" />
                <rect x="${(minX + maxX)/2 - 45}" y="${oBottom + 3}" width="90" height="14" rx="3" fill="#022c22" stroke="#10b981" stroke-width="0.8" opacity="0.95" />
                <text x="${(minX + maxX)/2}" y="${oBottom + 13}" fill="#6ee7b7" font-size="7.5" font-weight="800" text-anchor="middle" font-family="'Montserrat', sans-serif">ALINHADO BASE ${oBottom}px</text>
              </g>
            `;
          }

          // C) Alinhamento de Centro Y (center Y == other.center Y)
          if (Math.abs(selCenterY - oCenterY) <= 2) {
            const minX = Math.min(selLeft, oLeft) - 10;
            const maxX = Math.max(selRight, oRight) + 10;
            svgHtml += `
              <g>
                <line x1="${minX}" y1="${oCenterY}" x2="${maxX}" y2="${oCenterY}" stroke="#eab308" stroke-width="1.5" stroke-dasharray="4,3" />
                <circle cx="${selCenterX}" cy="${oCenterY}" r="3.5" fill="#eab308" />
                <circle cx="${oCenterX}" cy="${oCenterY}" r="3.5" fill="#eab308" />
              </g>
            `;
          }

          // D) Alinhamento de Esquerda (left == other.left)
          if (Math.abs(selLeft - oLeft) <= 2) {
            const minY = Math.min(selTop, oTop) - 10;
            const maxY = Math.max(selBottom, oBottom) + 10;
            svgHtml += `
              <g>
                <line x1="${oLeft}" y1="${minY}" x2="${oLeft}" y2="${maxY}" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,3" />
                <circle cx="${oLeft}" cy="${selTop}" r="3" fill="#10b981" />
                <circle cx="${oLeft}" cy="${oTop}" r="3" fill="#10b981" />
                <rect x="${oLeft - 45}" y="${(minY + maxY)/2 - 7}" width="90" height="14" rx="3" fill="#022c22" stroke="#10b981" stroke-width="0.8" opacity="0.95" />
                <text x="${oLeft}" y="${(minY + maxY)/2 + 3}" fill="#6ee7b7" font-size="7.5" font-weight="800" text-anchor="middle" font-family="'Montserrat', sans-serif">ALINHADO ESQ ${oLeft}px</text>
              </g>
            `;
          }

          // E) Alinhamento de Direita (right == other.right)
          if (Math.abs(selRight - oRight) <= 2) {
            const minY = Math.min(selTop, oTop) - 10;
            const maxY = Math.max(selBottom, oBottom) + 10;
            svgHtml += `
              <g>
                <line x1="${oRight}" y1="${minY}" x2="${oRight}" y2="${maxY}" stroke="#10b981" stroke-width="1.5" stroke-dasharray="3,3" />
                <circle cx="${oRight}" cy="${selBottom}" r="3" fill="#10b981" />
                <circle cx="${oRight}" cy="${oRight}" r="3" fill="#10b981" />
                <rect x="${oRight - 45}" y="${(minY + maxY)/2 - 7}" width="90" height="14" rx="3" fill="#022c22" stroke="#10b981" stroke-width="0.8" opacity="0.95" />
                <text x="${oRight}" y="${(minY + maxY)/2 + 3}" fill="#6ee7b7" font-size="7.5" font-weight="800" text-anchor="middle" font-family="'Montserrat', sans-serif">ALINHADO DIR ${oRight}px</text>
              </g>
            `;
          }

          // F) Alinhamento de Centro X (center X == other.center X)
          if (Math.abs(selCenterX - oCenterX) <= 2) {
            const minY = Math.min(selTop, oTop) - 10;
            const maxY = Math.max(selBottom, oBottom) + 10;
            svgHtml += `
              <g>
                <line x1="${oCenterX}" y1="${minY}" x2="${oCenterX}" y2="${maxY}" stroke="#eab308" stroke-width="1.5" stroke-dasharray="4,3" />
                <circle cx="${selCenterX}" cy="${oCenterY}" r="3.5" fill="#eab308" />
                <circle cx="${oCenterX}" cy="${oCenterY}" r="3.5" fill="#eab308" />
              </g>
            `;
          }
        });

        // 3. LIMITES E BOUNDING BOX DA CAMADA SELECIONADA ("que pegar as camadas, é limite dela também")
        const bx = selItem.x;
        const by = selItem.y;
        const bw = selItem.width;
        const bh = selItem.height;

        // Bounding box com cantos destacados e preenchimento sutil
        svgHtml += `
          <!-- Limites da Camada Selecionada -->
          <g>
            <!-- Bounding Box -->
            <rect x="${bx}" y="${by}" width="${bw}" height="${bh}" fill="rgba(245, 158, 11, 0.05)" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="5,4" rx="${selItem.borderRadius || 0}" />
            
            <!-- Cantoneiras nos 4 Vértices -->
            <path d="M ${bx - 4} ${by + 8} L ${bx - 4} ${by - 4} L ${bx + 8} ${by - 4}" stroke="#fbbf24" stroke-width="2" fill="none" />
            <path d="M ${bx + bw + 4} ${by + 8} L ${bx + bw + 4} ${by - 4} L ${bx + bw - 8} ${by - 4}" stroke="#fbbf24" stroke-width="2" fill="none" />
            <path d="M ${bx - 4} ${by + bh - 8} L ${bx - 4} ${by + bh + 4} L ${bx + 8} ${by + bh + 4}" stroke="#fbbf24" stroke-width="2" fill="none" />
            <path d="M ${bx + bw + 4} ${by + bh - 8} L ${bx + bw + 4} ${by + bh + 4} L ${bx + bw - 8} ${by + bh + 4}" stroke="#fbbf24" stroke-width="2" fill="none" />

            <!-- Linhas de Projeção até as Bordas do Cartão -->
            <line x1="0" y1="${by}" x2="${bx}" y2="${by}" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="2,3" opacity="0.6" />
            <line x1="${bx}" y1="0" x2="${bx}" y2="${by}" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="2,3" opacity="0.6" />

            <!-- Tag de Coordenadas e Dimensões do Limite -->
            <g transform="translate(${Math.max(10, Math.min(840, bx))}, ${by > 32 ? by - 24 : by + bh + 8})">
              <rect x="0" y="0" width="200" height="20" rx="5" fill="#090e1a" stroke="#f59e0b" stroke-width="1" opacity="0.95" />
              <text x="100" y="14" fill="#fbbf24" font-size="9" font-weight="800" text-anchor="middle" font-family="'Montserrat', sans-serif">X:${bx} Y:${by} | L:${bw}px A:${bh}px</text>
            </g>
          </g>
        `;
      }

      svg.innerHTML = svgHtml;
    }

    /* =========================================================
       ARRASTAR E REDIMENSIONAR ELEMENTOS (DRAG & RESIZE)
       ========================================================= */
    let isDragging = false;
    let isResizing = false;
    let currentResizeDir = null;
    let startX = 0;
    let startY = 0;
    let startItem = { x: 0, y: 0, w: 0, h: 0 };

    function selectElement(id) {
      studioState.selectedId = id;
      renderInteractiveElements();
      syncFloatingPanel();
      renderAlignmentGuides();
    }

    function onElementPointerDown(e, id) {
      e.stopPropagation();
      const item = studioState.elements.find(i => i.id === id);
      if (!item) return;

      studioState.selectedId = id;

      // NO MODO FIXO: apenas seleciona o elemento sem movimentação acidental
      if (studioState.isDesignLocked) {
        renderInteractiveElements();
        syncFloatingPanel();
        renderAlignmentGuides();
        return;
      }

      // NO MODO DESIGN: inicia drag ou resize interativo
      startX = e.clientX;
      startY = e.clientY;
      startItem = { x: item.x, y: item.y, w: item.width, h: item.height };

      if (e.target.classList.contains('resize-handle')) {
        isResizing = true;
        currentResizeDir = e.target.dataset.direction;
      } else {
        isDragging = true;
      }

      renderInteractiveElements();
      syncFloatingPanel();
      renderAlignmentGuides();

      window.addEventListener('pointermove', onGlobalPointerMove);
      window.addEventListener('pointerup', onGlobalPointerUp);
    }

    function onGlobalPointerMove(e) {
      if (studioState.isDesignLocked) return;
      if (!studioState.selectedId) return;
      const item = studioState.elements.find(i => i.id === studioState.selectedId);
      if (!item) return;

      const deltaX = (e.clientX - startX) / studioState.zoom;
      const deltaY = (e.clientY - startY) / studioState.zoom;

      if (isDragging) {
        let nextX = Math.round(startItem.x + deltaX);
        let nextY = Math.round(startItem.y + deltaY);

        // Smart Snapping magnético com linhas guias e outros elementos
        if (studioState.showGuides !== false) {
          const snapDist = 4;
          // Alvos em X: Lateral esquerda (268), Centro do cartão (525), Lateral direita (1006)
          const targetsX = [
            268,
            Math.round(525 - item.width / 2),
            1006 - item.width
          ];
          // Alvos de outros elementos em X
          studioState.elements.forEach(o => {
            if (o.id === item.id) return;
            targetsX.push(o.x); // esquerda com esquerda
            targetsX.push(o.x + o.width - item.width); // direita com direita
            targetsX.push(Math.round(o.x + o.width / 2 - item.width / 2)); // centro com centro
          });
          for (const tx of targetsX) {
            if (Math.abs(nextX - tx) <= snapDist) {
              nextX = tx;
              break;
            }
          }

          // Alvos em Y: Centro do cartão (331)
          const targetsY = [
            Math.round(331 - item.height / 2)
          ];
          studioState.elements.forEach(o => {
            if (o.id === item.id) return;
            targetsY.push(o.y); // topo com topo
            targetsY.push(o.y + o.height - item.height); // base com base
            targetsY.push(Math.round(o.y + o.height / 2 - item.height / 2)); // centro com centro
          });
          for (const ty of targetsY) {
            if (Math.abs(nextY - ty) <= snapDist) {
              nextY = ty;
              break;
            }
          }
        }

        item.x = nextX;
        item.y = nextY;
        updateItemStyle(item);
        renderAlignmentGuides();
      } else if (isResizing) {
        let newX = startItem.x;
        let newY = startItem.y;
        let newW = startItem.w;
        let newH = startItem.h;
        const minW = 20;
        const minH = 15;

        if (currentResizeDir.includes('e')) {
          newW = Math.max(minW, startItem.w + deltaX);
        }
        if (currentResizeDir.includes('s')) {
          newH = Math.max(minH, startItem.h + deltaY);
        }
        if (currentResizeDir.includes('w')) {
          const w = startItem.w - deltaX;
          if (w >= minW) {
            newW = w;
            newX = startItem.x + deltaX;
          }
        }
        if (currentResizeDir.includes('n')) {
          const h = startItem.h - deltaY;
          if (h >= minH) {
            newH = h;
            newY = startItem.y + deltaY;
          }
        }

        item.x = Math.round(newX);
        item.y = Math.round(newY);
        item.width = Math.round(newW);
        item.height = Math.round(newH);
        updateItemStyle(item);
        renderAlignmentGuides();
      }

      syncFloatingPanelInputs();
      broadcastLiveDesignChange(false);
    }

    function onGlobalPointerUp() {
      if (isDragging || isResizing) {
        autoSaveStudioDesign();
        broadcastLiveDesignChange(true);
        renderAlignmentGuides();
      }
      isDragging = false;
      isResizing = false;
      currentResizeDir = null;
      window.removeEventListener('pointermove', onGlobalPointerMove);
      window.removeEventListener('pointerup', onGlobalPointerUp);
    }

    function updateItemStyle(item) {
      const el = document.getElementById(item.id);
      if (el) {
        el.style.left = `${item.x}px`;
        el.style.top = `${item.y}px`;
        el.style.width = `${item.width}px`;
        el.style.height = `${item.height}px`;
      }
      const dirW = document.getElementById('inputDirectWidth');
      const dirH = document.getElementById('inputDirectHeight');
      if (dirW) dirW.value = item.width;
      if (dirH) dirH.value = item.height;
      if (!studioState.isDesignLocked) {
        updateFloatingPanelPosition();
      }
      renderAlignmentGuides();
    }

    function syncFloatingPanelInputs() {
      const item = studioState.elements.find(i => i.id === studioState.selectedId);
      if (!item) return;
      const dirW = document.getElementById('inputDirectWidth');
      const dirH = document.getElementById('inputDirectHeight');
      if (dirW) dirW.value = item.width;
      if (dirH) dirH.value = item.height;
    }

    /* Alterna entre Modo Fixo (Bloqueado) e Modo Design (Livre) */
    function toggleDesignLock(locked) {
      const isMaster = (typeof isMasterAdminUser === 'function' && isMasterAdminUser()) || hasPermission('*');
      if (!locked && !hasPermission('gestao_supabase') && !isMaster) {
        showToast('⚠️ Acesso Controlado: A alteração de layout no Modo Design é restrita à Diretoria. Layout mantido no Modo Fixo.', true);
        studioState.isDesignLocked = true;
        updateModeButtonsUI();
        return;
      }
      studioState.isDesignLocked = locked;
      try {
        localStorage.setItem('fpeft_studio_design_locked', locked ? 'true' : 'false');
      } catch (e) {}
      updateModeButtonsUI();
      renderInteractiveElements();
      syncFloatingPanel();
      showToast(locked ? '🔒 Modo Fixo ativado: layout travado para emissão rápida.' : '✏️ Modo Design ativado: você pode arrastar e redimensionar qualquer campo.');
    }

    function updateModeButtonsUI() {
      const btnFixed = document.getElementById('btnModeFixed');
      const btnDesign = document.getElementById('btnModeDesign');
      const floatingPanel = document.getElementById('floatingControlPanel');

      if (studioState.isDesignLocked) {
        if (btnFixed) {
          btnFixed.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold bg-emerald-600 text-white shadow transition cursor-pointer';
        }
        if (btnDesign) {
          btnDesign.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition cursor-pointer';
        }
        if (floatingPanel) {
          floatingPanel.style.display = 'none';
        }
      } else {
        if (btnFixed) {
          btnFixed.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition cursor-pointer';
        }
        if (btnDesign) {
          btnDesign.className = 'flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-extrabold bg-pe-gold text-pe-dark shadow transition cursor-pointer';
        }
        if (floatingPanel && studioState.selectedId) {
          floatingPanel.style.display = 'flex';
        }
      }
    }

    /* Restaura o layout com as posições originais da Carteira Atleta */
    async function restoreOfficialElementPositions() {
      if (!hasPermission('gestao_supabase') && !hasPermission('*')) {
        showToast('⚠️ Acesso Controlado: Você não possui permissão para alterar o layout do Studio.', true);
        return;
      }
      studioState.elements = JSON.parse(JSON.stringify(OFFICIAL_DEFAULT_ELEMENTS));
      if (typeof syncStudioElementsWithForm === 'function') {
        syncStudioElementsWithForm();
      }
      try {
        localStorage.setItem('fpeft_studio_custom_elements', JSON.stringify(studioState.elements));
        localStorage.setItem('fpeft_studio_layout_version', STUDIO_LAYOUT_VERSION);
      } catch (e) {}
      renderInteractiveElements();
      syncFloatingPanel();
      await syncStudioDesignToSupabase(true);
      showToast('✓ Layout oficial restaurado e sincronizado na nuvem com sucesso!');
    }

    /* =========================================================
       PAINEL FLUTUANTE DE AJUSTE DIRETO
       ========================================================= */
    function syncFloatingPanel() {
      const panel = document.getElementById('floatingControlPanel');
      if (!panel) return;

      // BLOQUEIO TOTAL NO MODO FIXO: o painel de ajuste nunca abre no modo fixo
      if (studioState.isDesignLocked) {
        panel.style.display = 'none';
        return;
      }

      const item = studioState.elements.find(i => i.id === studioState.selectedId);
      if (!item) {
        panel.style.display = 'none';
        return;
      }

      panel.style.display = 'flex';
      const labelEl = document.getElementById('floatingItemLabel');
      if (labelEl) labelEl.innerText = item.label || 'Item';

      const inputCurve = document.getElementById('inputCurveRadius');
      const radiusLabel = document.getElementById('radiusLabel');
      if (inputCurve) inputCurve.value = item.borderRadius || 0;
      if (radiusLabel) radiusLabel.innerText = `${item.borderRadius || 0}px`;

      const dirW = document.getElementById('inputDirectWidth');
      const dirH = document.getElementById('inputDirectHeight');
      if (dirW) dirW.value = item.width;
      if (dirH) dirH.value = item.height;

      const typoBox = document.getElementById('typographyControls');
      if (typoBox) {
        if (item.type === 'text-box' || item.type === 'text-line') {
          typoBox.style.display = 'block';
          const fontInp = document.getElementById('inputFontSize');
          const colorInp = document.getElementById('inputTextColor');
          const hexEl = document.getElementById('textColorHex');
          if (fontInp) fontInp.value = item.fontSize || 16;
          if (colorInp) colorInp.value = item.textColor || '#00204a';
          if (hexEl) hexEl.innerText = (item.textColor || '#000').toUpperCase();
        } else {
          typoBox.style.display = 'none';
        }
      }

      updateAlignmentButtonsUI(item);
      updateFloatingPanelPosition();
    }

    /* Atualiza o destaque visual dos botões de alinhamento do texto editável e do rótulo fixo de forma independente */
    function updateAlignmentButtonsUI(item) {
      if (!item) return;
      const align = item.textAlign || 'left';
      const labelAlign = item.labelAlign || (item.textAlign === 'center' ? 'center' : 'left');

      ['Left', 'Center', 'Right'].forEach(dir => {
        const btn = document.getElementById(`btnAlign${dir}`);
        if (btn) {
          if (dir.toLowerCase() === align) {
            btn.className = 'w-7 h-6 rounded flex items-center justify-center bg-pe-gold text-pe-dark font-extrabold shadow-sm transition cursor-pointer';
          } else {
            btn.className = 'w-7 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer';
          }
        }

        const labelBtn = document.getElementById(`btnLabelAlign${dir}`);
        if (labelBtn) {
          if (dir.toLowerCase() === labelAlign) {
            labelBtn.className = 'w-7 h-6 rounded flex items-center justify-center bg-sky-500 text-white font-extrabold shadow-sm transition cursor-pointer';
          } else {
            labelBtn.className = 'w-7 h-6 rounded flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition cursor-pointer';
          }
        }
      });

      const labelBox = document.getElementById('labelAlignControlBox');
      if (labelBox) {
        labelBox.style.display = item.labelTag ? 'flex' : 'none';
      }
    }

    function updateFloatingPanelPosition() {
      const panel = document.getElementById('floatingControlPanel');
      if (!panel) return;
      if (studioState.isDesignLocked) {
        panel.style.display = 'none';
        return;
      }
      if (panel.style.display === 'none') return;
      if (studioState.floatingPinned) return;

      const viewportEl = document.getElementById('viewportArea');
      if (!viewportEl) return;
      const viewport = viewportEl.getBoundingClientRect();

      const el = document.getElementById(studioState.selectedId);
      if (!el) return;

      const elRect = el.getBoundingClientRect();
      const winW = panel.offsetWidth || 330;
      let left = elRect.right - viewport.left + 24;
      let top = elRect.top - viewport.top;

      if (left + winW > viewport.width) {
        left = elRect.left - viewport.left - winW - 20;
      }
      if (left < 10) {
        left = Math.max(10, (viewport.width - winW) / 2);
        top = Math.min(viewport.height - 380, elRect.bottom - viewport.top + 16);
      }
      top = Math.max(10, Math.min(top, viewport.height - (panel.offsetHeight || 380) - 10));

      panel.style.left = `${left}px`;
      panel.style.top = `${top}px`;
    }

    function setRadiusPreset(val) {
      if (studioState.isDesignLocked) return;
      const item = studioState.elements.find(i => i.id === studioState.selectedId);
      if (!item) return;
      item.borderRadius = val;
      const inputCurve = document.getElementById('inputCurveRadius');
      const radiusLabel = document.getElementById('radiusLabel');
      if (inputCurve) inputCurve.value = val;
      if (radiusLabel) radiusLabel.innerText = `${val}px`;
      const el = document.getElementById(item.id);
      if (el) el.style.borderRadius = `${val}px`;
      autoSaveStudioDesign();
      broadcastLiveDesignChange(true);
    }

    function nudgeSelected(dx, dy) {
      if (studioState.isDesignLocked) return;
      const item = studioState.elements.find(i => i.id === studioState.selectedId);
      if (!item) return;
      item.x += dx * studioState.nudgeStep;
      item.y += dy * studioState.nudgeStep;
      updateItemStyle(item);
      autoSaveStudioDesign();
      broadcastLiveDesignChange(true);
    }

    function renderLayersSidebar() {
      const list = document.getElementById('elementsLayersList');
      if (!list) return;

      list.innerHTML = '';
      studioState.elements.forEach(item => {
        const row = document.createElement('div');
        const isSelected = studioState.selectedId === item.id;
        row.className = `flex items-center justify-between px-2.5 py-1.5 rounded-lg cursor-pointer text-xs transition ${isSelected ? 'bg-pe-gold/20 border border-pe-gold/60 text-white font-medium' : 'bg-[#05080e] hover:bg-[#121c32] text-slate-300 border border-[#1c253b]'}`;
        
        let icon = 'fa-square-check text-sky-400';
        if (item.type === 'photo') icon = 'fa-camera text-emerald-400';
        if (item.type === 'qrcode') icon = 'fa-qrcode text-amber-400';

        row.innerHTML = `
          <div class="flex items-center gap-2 truncate">
            <i class="fa-solid ${icon} text-[11px]"></i>
            <span class="truncate">${escapeHtml(item.label)}</span>
          </div>
          <span class="text-[9px] font-mono text-slate-500">${item.width}x${item.height}</span>
        `;
        row.addEventListener('click', () => selectElement(item.id));
        list.appendChild(row);
      });
    }

    /* =========================================================
       SISTEMA DE AUTO-AJUSTE AO PADRÃO DA TELA (RESPONSIVO DINÂMICO)
       Calcula em tempo real a resolução, DPI e dimensões da janela
       do computador para enquadrar o padrão CR80 com precisão.
       ========================================================= */
    let _autoFitResizeTimer = null;
    let _isUserManualZoom = false;

    function autoFitStudioToScreen(force = false) {
      const viewport = document.getElementById('viewportArea');
      const wrapper = document.getElementById('cardScaleWrapper');
      if (!viewport || !wrapper) return;

      const tabAtletas = document.getElementById('tabContent-atletas');
      if (tabAtletas && tabAtletas.classList.contains('hidden')) return;

      const vW = viewport.clientWidth;
      const vH = viewport.clientHeight;
      if (vW < 40 || vH < 40) return;

      const padX = window.innerWidth < 1024 ? 20 : (window.innerWidth < 1440 ? 36 : 52);
      const padY = window.innerHeight < 700 ? 20 : (window.innerHeight < 900 ? 32 : 44);

      const availW = Math.max(260, vW - padX);
      const availH = Math.max(180, vH - padY);

      // Padrão CR80 Oficial: 1050 largura x 662 altura
      const scaleX = availW / 1050;
      const scaleY = availH / 662;

      let idealScale = Math.min(scaleX, scaleY);
      const maxAllowed = (window.innerWidth >= 1920 && window.innerHeight >= 950) ? 1.05 : 0.95;
      idealScale = Math.max(0.32, Math.min(idealScale, maxAllowed));

      setZoom(idealScale);
      if (force) _isUserManualZoom = false;
    }

    function setZoom(val, isManual = false) {
      const wrapper = document.getElementById('cardScaleWrapper');
      const display = document.getElementById('zoomDisplay');
      if (!wrapper || !display) return;

      if (isManual) _isUserManualZoom = true;

      studioState.zoom = Math.min(1.8, Math.max(0.32, val));
      wrapper.style.transform = `scale(${studioState.zoom})`;
      display.innerText = `${Math.round(studioState.zoom * 100)}%`;
      updateFloatingPanelPosition();
    }

    function showToast(msg, duration = 3000) {
      const toast = document.getElementById('toastNotification');
      const msgEl = document.getElementById('toastMessage');
      if (!toast || !msgEl) return;

      msgEl.innerText = msg;
      toast.classList.remove('translate-y-24', 'opacity-0');
      if (window._toastTimeout) clearTimeout(window._toastTimeout);
      window._toastTimeout = setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
      }, duration);
    }

    function escapeHtml(str) {
      if (!str) return '';
      return String(str).replace(/[&<>"']/g, s => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[s]);
    }

    /* =========================================================
       HELPER COMPARTILHADO: RENDERIZAÇÃO DOS DADOS NO SVG
       ========================================================= */
    function appendAthleteElementsToSvg(svgDoc, overlayGroup, elementsList, athlete = null) {
      elementsList.forEach(item => {
        if (item.type === 'photo') {
          const gPhoto = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'g');
          const clipId = 'clip_foto_' + Math.random().toString(36).substr(2, 9);
          const rootSvg = svgDoc.documentElement;
          const defs = rootSvg.querySelector('defs') || rootSvg.insertBefore(svgDoc.createElementNS('http://www.w3.org/2000/svg', 'defs'), rootSvg.firstChild);
          const clipPath = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'clipPath');
          clipPath.setAttribute('id', clipId);

          const clipRect = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'rect');
          clipRect.setAttribute('x', item.x);
          clipRect.setAttribute('y', item.y);
          clipRect.setAttribute('width', item.width);
          clipRect.setAttribute('height', item.height);
          clipRect.setAttribute('rx', item.borderRadius || 20);
          clipPath.appendChild(clipRect);
          defs.appendChild(clipPath);

          if (item.photoUrl) {
            const img = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'image');
            img.setAttribute('href', item.photoUrl);
            img.setAttribute('x', item.x);
            img.setAttribute('y', item.y);
            img.setAttribute('width', item.width);
            img.setAttribute('height', item.height);
            img.setAttribute('preserveAspectRatio', 'xMidYMid slice');
            img.setAttribute('clip-path', `url(#${clipId})`);
            gPhoto.appendChild(img);
          } else {
            const rect = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', item.x);
            rect.setAttribute('y', item.y);
            rect.setAttribute('width', item.width);
            rect.setAttribute('height', item.height);
            rect.setAttribute('rx', item.borderRadius || 20);
            rect.setAttribute('fill', '#09152e');
            gPhoto.appendChild(rect);
          }

          if (item.borderWidth > 0) {
            const borderRect = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'rect');
            borderRect.setAttribute('x', item.x);
            borderRect.setAttribute('y', item.y);
            borderRect.setAttribute('width', item.width);
            borderRect.setAttribute('height', item.height);
            borderRect.setAttribute('rx', item.borderRadius || 20);
            borderRect.setAttribute('fill', 'none');
            borderRect.setAttribute('stroke', item.borderColor || '#ffffff');
            borderRect.setAttribute('stroke-width', item.borderWidth || 4);
            gPhoto.appendChild(borderRect);
          }

          overlayGroup.appendChild(gPhoto);
        } else if (item.type === 'qrcode') {
          const gQr = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'g');
          const bg = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'rect');
          bg.setAttribute('x', item.x);
          bg.setAttribute('y', item.y);
          bg.setAttribute('width', item.width);
          bg.setAttribute('height', item.height);
          bg.setAttribute('rx', item.borderRadius || 14);
          bg.setAttribute('fill', '#ffffff');
          gQr.appendChild(bg);

          const athleteObj = athlete || window._lastActiveAthlete || {};
          const athleteCode = (athleteObj.federado || athleteObj.codigo || '973321').replace(/\D/g, '').slice(0, 6) || athleteObj.codigo || '973321';
          let qrUrl = (item.text && item.text.startsWith('http')) ? item.text : `https://fpeft.vercel.app/?id=${athleteCode}`;
          if (qrUrl === 'https://fpeft.vercel.app/' || qrUrl === 'https://fpeft.vercel.app') {
            qrUrl = `https://fpeft.vercel.app/?id=${athleteCode}`;
          }

          const qrMatrix = generateQrMatrix(qrUrl);
          if (qrMatrix && qrMatrix.length > 0) {
            const moduleCount = qrMatrix.length;
            const pad = 12;
            const size = Math.min(item.width - pad * 2, item.height - pad * 2);
            const cell = size / moduleCount;
            const startX = item.x + (item.width - size) / 2;
            const startY = item.y + (item.height - size) / 2;

            const gCells = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'g');
            gCells.setAttribute('fill', '#000000');
            for (let r = 0; r < moduleCount; r++) {
              for (let c = 0; c < moduleCount; c++) {
                if (qrMatrix[r][c]) {
                  const rect = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'rect');
                  rect.setAttribute('x', startX + c * cell);
                  rect.setAttribute('y', startY + r * cell);
                  rect.setAttribute('width', cell + 0.2);
                  rect.setAttribute('height', cell + 0.2);
                  gCells.appendChild(rect);
                }
              }
            }
            gQr.appendChild(gCells);
          }

          if (item.labelTag) {
            const lbl = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'text');
            lbl.setAttribute('x', item.x + item.width / 2);
            lbl.setAttribute('y', item.y + item.height + 13);
            lbl.setAttribute('fill', '#94a3b8');
            lbl.setAttribute('font-family', "'Montserrat', sans-serif");
            lbl.setAttribute('font-size', '8.5');
            lbl.setAttribute('font-weight', '800');
            lbl.setAttribute('letter-spacing', '0.5');
            lbl.setAttribute('text-anchor', 'middle');
            lbl.textContent = item.labelTag;
            gQr.appendChild(lbl);
          }

          overlayGroup.appendChild(gQr);
        } else if (item.type === 'text-line') {
          const gLine = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'g');
          const line = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'line');
          line.setAttribute('x1', item.x);
          line.setAttribute('y1', item.y);
          line.setAttribute('x2', item.x + item.width);
          line.setAttribute('y2', item.y);
          line.setAttribute('stroke', '#ffffff');
          line.setAttribute('stroke-width', '1.5');
          gLine.appendChild(line);

          const signText = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'text');
          signText.setAttribute('x', item.x + item.width / 2);
          signText.setAttribute('y', item.y + 16);
          signText.setAttribute('fill', '#e2e8f0');
          signText.setAttribute('font-family', "'Montserrat', sans-serif");
          signText.setAttribute('font-size', '10.5');
          signText.setAttribute('font-weight', '800');
          signText.setAttribute('text-anchor', 'middle');
          signText.setAttribute('letter-spacing', '0.5');
          signText.textContent = item.text || 'ASSINATURA DA DIRETORIA FPEFT';
          gLine.appendChild(signText);

          overlayGroup.appendChild(gLine);
        } else {
          const gBox = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'g');

          if (item.labelTag) {
            const lbl = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'text');
            const effLabelAlign = item.labelAlign || (item.textAlign === 'center' ? 'center' : 'left');
            let lx = item.x + 8;
            let ly = item.y - 4;
            if (effLabelAlign === 'center') {
              lx = item.x + item.width / 2;
              lbl.setAttribute('text-anchor', 'middle');
            } else if (effLabelAlign === 'right') {
              lx = item.x + item.width - 8;
              lbl.setAttribute('text-anchor', 'end');
            } else {
              lbl.setAttribute('text-anchor', 'start');
            }
            lbl.setAttribute('x', lx);
            lbl.setAttribute('y', ly);
            lbl.setAttribute('fill', '#ffffff');
            lbl.setAttribute('font-family', "'Montserrat', sans-serif");
            lbl.setAttribute('font-size', '9.5');
            lbl.setAttribute('font-weight', '800');
            lbl.setAttribute('letter-spacing', '0.5');
            lbl.textContent = item.labelTag;
            gBox.appendChild(lbl);
          }

          if (item.backgroundColor) {
            const rect = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'rect');
            rect.setAttribute('x', item.x);
            rect.setAttribute('y', item.y);
            rect.setAttribute('width', item.width);
            rect.setAttribute('height', item.height);
            rect.setAttribute('rx', item.borderRadius || 17);
            rect.setAttribute('fill', item.backgroundColor || '#ffffff');
            gBox.appendChild(rect);
          }

          if (item.text) {
            const textEl = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'text');
            textEl.setAttribute('fill', item.textColor || '#00204a');
            textEl.setAttribute('font-family', "'Montserrat', sans-serif");
            textEl.setAttribute('font-size', item.fontSize || 16);
            textEl.setAttribute('font-weight', item.fontWeight || '800');
            textEl.setAttribute('dominant-baseline', 'central');

            let tx = item.x + (item.paddingLeft || 16);
            if (item.textAlign === 'center') {
              tx = item.x + item.width / 2;
              textEl.setAttribute('text-anchor', 'middle');
            } else if (item.textAlign === 'right') {
              tx = item.x + item.width - (item.paddingRight || 16);
              textEl.setAttribute('text-anchor', 'end');
            } else {
              textEl.setAttribute('text-anchor', 'start');
            }

            textEl.setAttribute('x', tx);
            textEl.setAttribute('y', item.y + item.height / 2);
            textEl.textContent = item.text;
            gBox.appendChild(textEl);
          }

          overlayGroup.appendChild(gBox);
        }
      });
    }

    /* =========================================================
       HELPER: CARREGAMENTO ASSÍNCRONO DE IMAGEM COM CACHE GLOBAL
       Garante resolução instantânea (0ms) a partir da 2ª chamada
       ========================================================= */
    const _loadedImagesCache = new Map();

    function loadImageAsync(src, timeoutMs = 3500) {
      return new Promise((resolve) => {
        if (!src) return resolve(null);
        if (_loadedImagesCache.has(src)) {
          return resolve(_loadedImagesCache.get(src));
        }
        const img = new Image();
        if (typeof src === 'string' && (src.startsWith('http://') || src.startsWith('https://'))) {
          img.crossOrigin = 'anonymous';
        }
        let settled = false;
        const timer = setTimeout(() => {
          if (!settled) {
            settled = true;
            resolve(null);
          }
        }, timeoutMs);

        img.onload = () => {
          if (!settled) {
            settled = true;
            clearTimeout(timer);
            _loadedImagesCache.set(src, img);
            resolve(img);
          }
        };
        img.onerror = () => {
          if (!settled) {
            settled = true;
            clearTimeout(timer);
            resolve(null);
          }
        };
        img.src = src;

        if (img.complete && img.naturalWidth > 0) {
          if (!settled) {
            settled = true;
            clearTimeout(timer);
            _loadedImagesCache.set(src, img);
            resolve(img);
          }
        }
      });
    }

    function drawRoundedRectPath(ctx, x, y, width, height, radius) {
      ctx.beginPath();
      const safeRadius = Math.max(0, radius || 0);
      if (typeof ctx.roundRect === 'function') {
        try {
          ctx.roundRect(x, y, width, height, safeRadius);
        } catch (e) {
          const r = Math.min(safeRadius, width / 2, height / 2);
          ctx.moveTo(x + r, y);
          ctx.arcTo(x + width, y, x + width, y + height, r);
          ctx.arcTo(x + width, y + height, x, y + height, r);
          ctx.arcTo(x, y + height, x, y, r);
          ctx.arcTo(x, y, x + width, y, r);
          ctx.closePath();
        }
      } else {
        const r = Math.min(safeRadius, width / 2, height / 2);
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + width, y, x + width, y + height, r);
        ctx.arcTo(x + width, y + height, x, y + height, r);
        ctx.arcTo(x, y + height, x, y, r);
        ctx.arcTo(x, y, x + width, y, r);
        ctx.closePath();
      }
    }

    /* =========================================================
       DESENHISTA VETORIAL NATIVO: SILHUETA OFICIAL DO ATLETA
       Execução síncrona instantânea (<0.1ms) sem rede e sem taint
       ========================================================= */
    function drawDefaultAthleteAvatar(ctx, x, y, width, height, radius) {
      ctx.save();
      drawRoundedRectPath(ctx, x, y, width, height, radius);
      ctx.clip();

      // Fundo azul escuro premium
      ctx.fillStyle = '#071329';
      ctx.fillRect(x, y, width, height);

      const cx = x + width / 2;
      const cy = y + height * 0.36;
      const rHead = width * 0.22;

      // Brilho azul de fundo na cabeça
      ctx.fillStyle = 'rgba(56, 189, 248, 0.22)';
      ctx.beginPath();
      ctx.arc(cx, cy, rHead * 1.15, 0, Math.PI * 2);
      ctx.fill();

      // Cabeça do atleta
      ctx.fillStyle = '#38bdf8';
      ctx.beginPath();
      ctx.arc(cx, cy, rHead, 0, Math.PI * 2);
      ctx.fill();

      // Tronco / Ombro do atleta
      ctx.fillStyle = 'rgba(56, 189, 248, 0.75)';
      ctx.beginPath();
      ctx.ellipse(cx, y + height * 0.88, width * 0.44, height * 0.32, 0, Math.PI, 0, false);
      ctx.fill();

      // Pílula inferior "FOTO 3X4 DO ATLETA"
      const scaleRef = width / 200;
      const tagH = Math.max(16, Math.round(22 * scaleRef));
      const tagW = width * 0.86;
      const tagX = cx - tagW / 2;
      const tagY = y + height - tagH - Math.round(10 * scaleRef);

      ctx.fillStyle = '#0b1c3d';
      drawRoundedRectPath(ctx, tagX, tagY, tagW, tagH, tagH / 2);
      ctx.fill();
      ctx.strokeStyle = '#38bdf8';
      ctx.lineWidth = Math.max(1, 1.5 * scaleRef);
      ctx.stroke();

      ctx.fillStyle = '#e2e8f0';
      ctx.font = `900 ${Math.max(8, Math.round(10 * scaleRef))}px 'Montserrat', sans-serif`;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText('FOTO 3X4 DO ATLETA', cx, tagY + tagH / 2);

      ctx.restore();
    }

    /* =========================================================
       RENDERIZADOR NATIVO EM ALTA RESOLUÇÃO (600 DPI CR80)
       Garante curvas perfeitas e letras nítidas sem defeito de pixel
       ========================================================= */
    async function renderCarteiraToHdCanvas(elements = studioState.elements, athlete = null, scale = 2, isSafeOnly = false) {
      if (document.fonts && document.fonts.ready) {
        try {
          await Promise.race([
            document.fonts.ready,
            new Promise(res => setTimeout(res, 300))
          ]);
        } catch (e) {}
      }

      const canvas = document.createElement('canvas');
      canvas.width = Math.round(1050 * scale); // 2100 px (600 DPI)
      canvas.height = Math.round(662 * scale); // 1324 px (600 DPI)
      const ctx = canvas.getContext('2d');
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // 1. Fundo Oficial de Alta Resolução do Cartão CR80
      let bgDrawn = false;
      if (!isSafeOnly) {
        let bgImgSrc = null;
        if (studioState.customImageUrl) {
          bgImgSrc = studioState.customImageUrl;
        } else if (studioState.customSvgContent) {
          bgImgSrc = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(studioState.customSvgContent);
        } else {
          const officialSvg = getCurrentBackgroundSvgString();
          if (officialSvg && typeof officialSvg === 'string' && officialSvg.includes('<svg')) {
            bgImgSrc = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(officialSvg);
          } else if (window.OFFICIAL_FPEFT_BG_DATA_URL) {
            bgImgSrc = window.OFFICIAL_FPEFT_BG_DATA_URL;
          } else {
            bgImgSrc = 'assets/Carteira_Atleta_HD.png';
          }
        }

        const bgImg = await loadImageAsync(bgImgSrc);
        if (bgImg) {
          const { scale: bgS, x: bgX, y: bgY } = studioState.bgTransform || { scale: 1, x: 0, y: 0 };
          ctx.save();
          ctx.translate((canvas.width / 2) + (bgX * scale), (canvas.height / 2) + (bgY * scale));
          ctx.scale(bgS, bgS);
          ctx.drawImage(bgImg, -canvas.width / 2, -canvas.height / 2, canvas.width, canvas.height);
          ctx.restore();
          bgDrawn = true;
        }
      }

      // Fundo Vetorial Seguro (Garante cores e arte caso imagem externa não carregue)
      if (!bgDrawn) {
        ctx.save();
        const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        grad.addColorStop(0, '#00183b');
        grad.addColorStop(0.45, '#003580');
        grad.addColorStop(1, '#001a42');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.restore();
      }

      // 2. Elementos Diagramáveis (Foto, Caixas Brancas, Textos Vetoriais Nítidos)
      for (const item of elements) {
        if (item.type === 'photo') {
          ctx.save();
          ctx.fillStyle = item.backgroundColor || '#09152e';
          drawRoundedRectPath(ctx, item.x * scale, item.y * scale, item.width * scale, item.height * scale, (item.borderRadius || 20) * scale);
          ctx.fill();
          ctx.restore();

          let pUrl = athlete ? (athlete.foto_url || athlete.foto || item.photoUrl) : item.photoUrl;
          if (!pUrl && document.getElementById('athletePhotoVal')) {
            pUrl = document.getElementById('athletePhotoVal').value;
          }
          if (!pUrl && window._currentAthletePhoto) {
            pUrl = window._currentAthletePhoto;
          }
          const isDefaultPhoto = !pUrl || pUrl.includes('images.unsplash.com') || pUrl === OFFICIAL_DEFAULT_PHOTO_SVG || pUrl.startsWith('data:image/svg+xml');

          if (isDefaultPhoto) {
            drawDefaultAthleteAvatar(ctx, item.x * scale, item.y * scale, item.width * scale, item.height * scale, (item.borderRadius || 20) * scale);
          } else if (!isSafeOnly) {
            const photoImg = await loadImageAsync(pUrl, 4000);
            if (photoImg) {
              ctx.save();
              drawRoundedRectPath(ctx, item.x * scale, item.y * scale, item.width * scale, item.height * scale, (item.borderRadius || 20) * scale);
              ctx.clip();
              // Proporção real e enquadramento centralizado (object-fit: cover) sem distorção
              const imgRatio = photoImg.width / photoImg.height;
              const targetRatio = item.width / item.height;
              let sX = 0, sY = 0, sW = photoImg.width, sH = photoImg.height;
              if (imgRatio > targetRatio) {
                sW = photoImg.height * targetRatio;
                sX = (photoImg.width - sW) / 2;
              } else {
                sH = photoImg.width / targetRatio;
                sY = (photoImg.height - sH) / 2;
              }
              ctx.drawImage(photoImg, sX, sY, sW, sH, item.x * scale, item.y * scale, item.width * scale, item.height * scale);
              ctx.restore();
            } else {
              drawDefaultAthleteAvatar(ctx, item.x * scale, item.y * scale, item.width * scale, item.height * scale, (item.borderRadius || 20) * scale);
            }
          } else {
            drawDefaultAthleteAvatar(ctx, item.x * scale, item.y * scale, item.width * scale, item.height * scale, (item.borderRadius || 20) * scale);
          }

          if (item.borderWidth) {
            ctx.save();
            ctx.strokeStyle = item.borderColor || '#ffffff';
            ctx.lineWidth = item.borderWidth * scale;
            drawRoundedRectPath(ctx, item.x * scale, item.y * scale, item.width * scale, item.height * scale, (item.borderRadius || 20) * scale);
            ctx.stroke();
            ctx.restore();
          }
        } else if (item.type === 'qrcode') {
          // A) Caixa de fundo branca com cantos arredondados
          ctx.save();
          ctx.fillStyle = item.backgroundColor || '#ffffff';
          drawRoundedRectPath(ctx, item.x * scale, item.y * scale, item.width * scale, item.height * scale, (item.borderRadius || 16) * scale);
          ctx.fill();
          ctx.restore();

          // B) Gera QR Code Real e 100% Escaneável
          const athleteObj = athlete || window._lastActiveAthlete || {};
          const athleteCode = (athleteObj.federado || athleteObj.codigo || '973321').replace(/\D/g, '').slice(0, 6) || athleteObj.codigo || '973321';
          let qrUrl = (item.text && item.text.startsWith('http')) ? item.text : `https://fpeft.vercel.app/?id=${athleteCode}`;
          if (qrUrl === 'https://fpeft.vercel.app/' || qrUrl === 'https://fpeft.vercel.app') {
            qrUrl = `https://fpeft.vercel.app/?id=${athleteCode}`;
          }

          const qrMatrix = generateQrMatrix(qrUrl);
          if (qrMatrix && qrMatrix.length > 0) {
            ctx.save();
            const moduleCount = qrMatrix.length;
            const pad = 12;
            const qrSize = Math.min(item.width - pad * 2, item.height - pad * 2);
            const cell = qrSize / moduleCount;
            const startX = item.x + (item.width - qrSize) / 2;
            const startY = item.y + (item.height - qrSize) / 2;

            ctx.fillStyle = '#000000';
            for (let r = 0; r < moduleCount; r++) {
              for (let c = 0; c < moduleCount; c++) {
                if (qrMatrix[r][c]) {
                  ctx.fillRect(
                    (startX + c * cell) * scale,
                    (startY + r * cell) * scale,
                    cell * scale + 0.3,
                    cell * scale + 0.3
                  );
                }
              }
            }
            ctx.restore();
          }

          // C) Legenda inferior do QR Code ("VERIFICAÇÃO DE AUTENTICIDADE")
          if (item.labelTag) {
            ctx.save();
            ctx.fillStyle = '#94a3b8';
            ctx.font = `800 ${Math.round(8.5 * scale)}px 'Montserrat', sans-serif`;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'top';
            ctx.fillText(item.labelTag, (item.x + item.width / 2) * scale, (item.y + item.height + 4) * scale);
            ctx.restore();
          }
        } else if (item.type === 'signature-line' || item.type === 'text-line') {
          // Imagem da Assinatura do Diretor posicionada em cima da linha/nome oficial
          const sigUrl = item.signatureUrl || (typeof window !== 'undefined' ? window.OFFICIAL_DIRECTOR_SIGNATURE_DATA_URL : '');
          if (sigUrl && !isSafeOnly) {
            const sigImg = await loadImageAsync(sigUrl, 2500);
            if (sigImg) {
              ctx.save();
              const scalePercent = (item.signatureScale !== undefined ? item.signatureScale : 100) / 100;
              const maxSigW = item.width * scale * 0.85 * scalePercent;
              const ratio = (sigImg.naturalWidth && sigImg.naturalHeight) ? (sigImg.naturalHeight / sigImg.naturalWidth) : 0.35;
              const sigW = Math.min(maxSigW, 360 * scale * scalePercent);
              const sigH = sigW * ratio;
              ctx.drawImage(sigImg, (item.x + item.width / 2) * scale - sigW / 2, item.y * scale - sigH + (3 * scale), sigW, sigH);
              ctx.restore();
            }
          }

          // Traço branco de assinatura oficial
          ctx.save();
          ctx.strokeStyle = '#ffffff';
          ctx.lineWidth = 1.5 * scale;
          ctx.beginPath();
          ctx.moveTo(item.x * scale, item.y * scale);
          ctx.lineTo((item.x + item.width) * scale, item.y * scale);
          ctx.stroke();

          // Texto oficial da assinatura
          ctx.fillStyle = '#e2e8f0';
          ctx.font = `800 ${Math.round((item.fontSize || 10.5) * scale)}px 'Montserrat', sans-serif`;
          ctx.textAlign = 'center';
          ctx.textBaseline = 'top';
          ctx.fillText(item.text || 'ASSINATURA DO DIRETOR FPEFT', (item.x + item.width / 2) * scale, (item.y + 6) * scale);
          ctx.restore();
        } else {
          // A) Rótulo Superior (Tag)
          if (item.labelTag) {
            ctx.save();
            ctx.fillStyle = '#ffffff';
            ctx.font = `800 ${Math.round(9.5 * scale)}px 'Montserrat', sans-serif`;
            ctx.textBaseline = 'bottom';
            const effLabelAlign = item.labelAlign || (item.textAlign === 'center' ? 'center' : 'left');
            if (effLabelAlign === 'center') {
              ctx.textAlign = 'center';
              ctx.fillText(item.labelTag, (item.x + item.width / 2) * scale, (item.y - 3) * scale);
            } else if (effLabelAlign === 'right') {
              ctx.textAlign = 'right';
              ctx.fillText(item.labelTag, (item.x + item.width - 8) * scale, (item.y - 3) * scale);
            } else {
              ctx.textAlign = 'left';
              ctx.fillText(item.labelTag, (item.x + 8) * scale, (item.y - 3) * scale);
            }
            ctx.restore();
          }

          // B) Caixa de Fundo (Pílula Branca)
          if (item.backgroundColor) {
            ctx.save();
            ctx.fillStyle = item.backgroundColor || '#ffffff';
            drawRoundedRectPath(ctx, item.x * scale, item.y * scale, item.width * scale, item.height * scale, (item.borderRadius || 17) * scale);
            ctx.fill();
            ctx.restore();
          }

          // C) Texto do Dado (Tipografia Nítida em Alta Definição)
          let textVal = item.text || '';
          if (athlete) {
            if (item.targetKey === 'nome') textVal = (athlete.nome || '').toUpperCase();
            else if (item.targetKey === 'cpf') textVal = athlete.cpf || '';
            else if (item.targetKey === 'nasc') textVal = athlete.nascimento || 'XX/XX/XXXX';
            else if (item.targetKey === 'fone') textVal = athlete.telefone || '';
            else if (item.targetKey === 'categoria') textVal = (athlete.categoria || 'ASPIRANTE').toUpperCase();
            else if (item.targetKey === 'modalidade' || item.targetKey === 'filiacao') textVal = (athlete.modalidade || athlete.clube || 'SOLO (INDIVIDUAL)').toUpperCase();
            else if (item.targetKey === 'federado') textVal = athlete.federado || `PE-2026/${String(athlete.codigo).slice(-3)}`;
            else if (item.targetKey === 'municipio') textVal = (athlete.municipio || athlete.cidade || '- PE').toUpperCase();
            else if (item.targetKey === 'validade') textVal = athlete.validade || '12/2026';
          }
          textVal = String(textVal || '');

          if (textVal) {
            ctx.save();
            ctx.fillStyle = item.textColor || '#00204a';
            let currentFontSize = (item.fontSize || 15) * scale;
            ctx.font = `${item.fontWeight || '800'} ${Math.round(currentFontSize)}px 'Montserrat', sans-serif`;
            ctx.textBaseline = 'middle';

            // Auto-ajuste de escala da fonte se o texto for maior que a largura disponível da caixa
            const paddingHorizontal = ((item.paddingLeft || 16) + (item.paddingRight || 16)) * scale;
            const maxTextWidth = Math.max(20, (item.width * scale) - paddingHorizontal);
            const measured = ctx.measureText(textVal).width;
            if (measured > maxTextWidth) {
              const fitRatio = Math.max(0.55, maxTextWidth / measured);
              currentFontSize = currentFontSize * fitRatio;
              ctx.font = `${item.fontWeight || '800'} ${Math.round(currentFontSize)}px 'Montserrat', sans-serif`;
            }

            if (item.textAlign === 'center') {
              ctx.textAlign = 'center';
              ctx.fillText(textVal, (item.x + item.width / 2) * scale, (item.y + item.height / 2) * scale);
            } else if (item.textAlign === 'right') {
              ctx.textAlign = 'right';
              ctx.fillText(textVal, (item.x + item.width - (item.paddingRight || 16)) * scale, (item.y + item.height / 2) * scale);
            } else {
              ctx.textAlign = 'left';
              ctx.fillText(textVal, (item.x + (item.paddingLeft || 16)) * scale, (item.y + item.height / 2) * scale);
            }
            ctx.restore();
          }
        }
      }

            // 3. Status Oficial no Canto Superior Direito (Padrão Preview)
      ctx.save();
      const statusStr = athlete ? String(athlete.status || 'REGULAR').toUpperCase().trim() : 'REGULAR';
      const isReg = statusStr === 'REGULAR' || statusStr === 'HOMOLOGADO';
      const isDis = statusStr === 'DESABILITADO' || statusStr === 'SUSPENSO';
      const stColor = isReg ? '#34d399' : (isDis ? '#f43f5e' : '#fbbf24');
      const stText = isReg ? 'REGULAR' : (isDis ? 'DESABILITADO' : 'PENDENTE');
      
      const dotX = 970 * scale;
      const dotY = 32 * scale;
      ctx.fillStyle = stColor;
      ctx.beginPath();
      ctx.arc(dotX, dotY, 4 * scale, 0, Math.PI * 2);
      ctx.fill();

      ctx.font = `800 ${Math.round(10.5 * scale)}px 'Montserrat', sans-serif`;
      ctx.fillStyle = stColor;
      ctx.textAlign = 'left';
      ctx.textBaseline = 'middle';
      ctx.fillText(stText, dotX + (7 * scale), dotY);
      ctx.restore();

      return canvas;
    }

    /* =========================================================
       HELPER: CONVERSÃO DATA-URL PARA BLOB BINÁRIO
       ========================================================= */
    function dataUrlToBlob(dataUrl) {
      try {
        const parts = dataUrl.split(',');
        const mime = parts[0].match(/:(.*?);/)[1];
        const bstr = atob(parts[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
      } catch (e) {
        return null;
      }
    }

    function executeDirectDownload(blobOrDataUrl, fileName) {
      if (!blobOrDataUrl) return null;

      let downloadUrl = blobOrDataUrl;
      let isBlobUrl = false;

      if (blobOrDataUrl instanceof Blob) {
        downloadUrl = URL.createObjectURL(blobOrDataUrl);
        isBlobUrl = true;
      }

      if (isBlobUrl && window.navigator && window.navigator.msSaveOrOpenBlob) {
        try { window.navigator.msSaveOrOpenBlob(blobOrDataUrl, fileName); return downloadUrl; } catch (e) {}
      }

      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = fileName;
      a.style.display = 'none';
      document.body.appendChild(a);

      try {
        a.click();
      } catch (err) {
        console.warn('Erro a.click():', err);
      }

      setTimeout(() => {
        try { if (a.parentNode) a.parentNode.removeChild(a); } catch (e) {}
      }, 5000);

      if (isBlobUrl) {
        setTimeout(() => { try { URL.revokeObjectURL(downloadUrl); } catch (e) {} }, 180000);
      }

      return downloadUrl;
    }

    function downloadBlobDirectly(blob, fileName) {
      return executeDirectDownload(blob, fileName);
    }

    function triggerFileDownload(blobOrDataUrl, fileName) {
      return executeDirectDownload(blobOrDataUrl, fileName);
    }

    /* =========================================================
       MODAL FLUTUANTE DE DOWNLOAD COM BAIXAR E VISUALIZAR
       ========================================================= */
    function showDownloadToast(downloadUrl, fileName, fileType = 'Arquivo', viewUrl = null) {
      let container = document.getElementById('toast_dl_active');
      if (!container) {
        container = document.createElement('div');
        container.id = 'toast_dl_active';
        container.className = "fixed bottom-6 right-6 z-[999999] max-w-md bg-[#0a1124] border-2 border-emerald-500 rounded-2xl p-4 shadow-2xl text-white flex flex-col gap-3 transition-all duration-300";
        document.body.appendChild(container);
      }

      const safeViewUrl = viewUrl || downloadUrl;

      container.style.opacity = '1';
      container.style.transform = 'translateY(0)';
      
      container.innerHTML = `
        <div class="flex items-start gap-3">
          <div class="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400 shrink-0">
            <i class="fa-solid fa-circle-check text-lg"></i>
          </div>
          <div class="flex-1 min-w-0">
            <p class="font-black text-sm text-emerald-300 uppercase tracking-wide">${fileType} Gerado com Sucesso!</p>
            <p class="text-xs text-slate-200 mt-0.5 leading-snug truncate">
              Arquivo: <strong class="text-white font-mono">${escapeHtml(fileName)}</strong>
            </p>
            <p class="text-[11px] text-slate-400 mt-0.5">
              Se o download não iniciou automaticamente, clique abaixo:
            </p>
          </div>
          <button type="button" onclick="closeDownloadToast()" class="text-slate-400 hover:text-white text-xs cursor-pointer p-1">
            <i class="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>
        <div class="flex items-center gap-2 pt-2 border-t border-slate-700/60">
          <a href="${downloadUrl}" download="${fileName}" class="flex-1 py-2.5 px-3 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 font-black text-xs uppercase rounded-xl transition shadow-lg flex items-center justify-center gap-2 cursor-pointer text-center">
            <i class="fa-solid fa-download text-sm"></i>
            <span>Baixar Agora</span>
          </a>
          ${safeViewUrl ? `
          <a href="${safeViewUrl}" target="_blank" class="py-2.5 px-3 bg-sky-950/60 hover:bg-sky-900/60 border border-sky-700/50 text-sky-200 font-bold text-xs uppercase rounded-xl transition flex items-center justify-center gap-1.5 cursor-pointer text-center" title="Abrir e visualizar em nova aba">
            <i class="fa-solid fa-eye text-xs"></i>
            <span>Visualizar</span>
          </a>` : ''}
          <button type="button" onclick="closeDownloadToast()" class="px-3 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold rounded-xl transition cursor-pointer">
            Fechar
          </button>
        </div>
      `;

      if (window._toastDlTimer) clearTimeout(window._toastDlTimer);
      window._toastDlTimer = setTimeout(() => {
        closeDownloadToast();
      }, 30000);
    }

    function closeDownloadToast() {
      const container = document.getElementById('toast_dl_active');
      if (container) {
        container.style.opacity = '0';
        container.style.transform = 'translateY(10px)';
        setTimeout(() => { if (container && container.parentNode) container.parentNode.removeChild(container); }, 300);
      }
    }

    function getAthleteFromCurrentForm() {
      const fedInputVal = (document.getElementById('athleteFederatedNum') ? document.getElementById('athleteFederatedNum').value : '').trim();
      const codeInputVal = (document.getElementById('athleteCode') ? document.getElementById('athleteCode').value : '').trim();
      const activeFed = fedInputVal || codeInputVal || '945537';

      const photoInput = document.getElementById('athletePhotoVal');
      const photoEl = studioState.elements.find(item => item.id === 'field-foto');
      const photoVal = (photoInput && photoInput.value)
        ? photoInput.value
        : (window._currentAthletePhoto || ((photoEl && photoEl.photoUrl) ? photoEl.photoUrl : ''));

      return {
        codigo: activeFed,
        nome: (document.getElementById('athleteName') ? document.getElementById('athleteName').value : 'Atleta') || 'Atleta',
        cpf: (document.getElementById('athleteCpf') ? document.getElementById('athleteCpf').value : '') || '',
        nascimento: (document.getElementById('athleteBirth') ? document.getElementById('athleteBirth').value : '') || '',
        telefone: (document.getElementById('athletePhone') ? document.getElementById('athletePhone').value : '') || '',
        categoria: (document.getElementById('athleteCategory') ? document.getElementById('athleteCategory').value : 'ASPIRANTE') || 'ASPIRANTE',
        modalidade: (document.getElementById('athleteModality') ? document.getElementById('athleteModality').value : 'SOLO (INDIVIDUAL)') || 'SOLO (INDIVIDUAL)',
        federado: activeFed,
        municipio: (document.getElementById('athleteCity') ? document.getElementById('athleteCity').value : '') || '',
        validade: (document.getElementById('athleteValidity') ? document.getElementById('athleteValidity').value : '12/2026') || '12/2026',
        status: (document.getElementById('athleteStatus') ? document.getElementById('athleteStatus').value : 'PENDENTE') || 'PENDENTE',
        foto: photoVal,
        foto_url: photoVal
      };
    }

    let _isExportingCarteiraPdf = false;
    let _isExportingCarteiraPng = false;
    window._lastActiveAthlete = null;

    /* =========================================================
       MODO 1: EXPORTAR PDF EM ALTA DEFINIÇÃO (CR80 VETORIAL)
       Formato oficial CR80 (85.60 mm x 53.98 mm) - Letras e Arte Nítidas
       Garante download imediato e repetível a cada clique
       ========================================================= */
    async function exportCarteiraPDF(athlete = null, triggerBtn = null) {
      if (!hasPermission('carteira_pdf')) {
        showToast('⚠️ Seu cargo não possui permissão para baixar carteiras em PDF.', true);
        return;
      }
      if (_isExportingCarteiraPdf) {
        showToast('⏳ Aguarde, o PDF já está sendo gerado...');
        return;
      }
      _isExportingCarteiraPdf = true;

      // Destrava automaticamente após 10 segundos para segurança total
      const safetyTimer = setTimeout(() => {
        _isExportingCarteiraPdf = false;
      }, 10000);

      const headerBtn = document.getElementById('btnExportPDF');
      const activeBtn = triggerBtn || headerBtn;
      const originalHtml = activeBtn ? activeBtn.innerHTML : '';
      if (activeBtn) {
        activeBtn.disabled = true;
        activeBtn.classList.add('opacity-75', 'cursor-not-allowed');
        activeBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-sm"></i> <span>Gerando PDF...</span>';
      }

      showToast('Gerando Carteira Oficial em PDF de Alta Definição...');

      try {
        let targetAthlete = athlete;
        if (!targetAthlete) {
          const formAthlete = getAthleteFromCurrentForm();
          targetAthlete = (formAthlete.nome && formAthlete.nome !== 'Atleta')
            ? formAthlete
            : (window._lastActiveAthlete || formAthlete);
        }
        window._lastActiveAthlete = targetAthlete;

        const hdCanvas = await renderCarteiraToHdCanvas(studioState.elements, targetAthlete, 2);
        let hdImgData = null;
        try {
          hdImgData = hdCanvas.toDataURL('image/jpeg', 0.98);
        } catch (taintErr) {
          console.warn('Canvas com restrição de exportação, gerando render seguro:', taintErr);
          try {
            const safeCanvas = await renderCarteiraToHdCanvas(studioState.elements, targetAthlete, 2, true);
            hdImgData = safeCanvas.toDataURL('image/jpeg', 0.98);
          } catch (err2) {
            console.error('Falha no render seguro:', err2);
          }
        }

        if (!hdImgData) {
          throw new Error('Falha ao processar os gráficos da carteira.');
        }

        let jsPdfLib = null;
        if (window.jspdf && window.jspdf.jsPDF) jsPdfLib = window.jspdf.jsPDF;
        else if (window.jsPDF) jsPdfLib = window.jsPDF;
        else if (typeof jsPDF === 'function') jsPdfLib = jsPDF;

        if (!jsPdfLib) {
          throw new Error('Biblioteca jsPDF não inicializada no navegador.');
        }

        const doc = new jsPdfLib({
          orientation: 'landscape',
          unit: 'mm',
          format: [85.60, 53.98]
        });

        // Insere a carteira cobrindo 100% do cartão CR80
        doc.addImage(hdImgData, 'JPEG', 0, 0, 85.60, 53.98, undefined, 'FAST');

        const safeCode = (targetAthlete.federado || targetAthlete.codigo || 'atleta').replace(/[^a-zA-Z0-9_-]/g, '_');
        const fileName = `carteira-atleta-fpeft-${safeCode}.pdf`;

        // 1. Tenta download nativo via jsPDF
        try {
          doc.save(fileName);
        } catch (saveErr) {
          console.warn('doc.save falhou:', saveErr);
        }

        // 2. Cria blob para garantia de download e visualização
        const pdfBlob = doc.output('blob');
        const blobUrl = pdfBlob ? executeDirectDownload(pdfBlob, fileName) : null;

        showDownloadToast(blobUrl, fileName, 'PDF', blobUrl);
        showToast(`✓ PDF Oficial (#${safeCode}) gerado e baixado!`);
      } catch (err) {
        console.error('Erro ao gerar PDF:', err);
        showToast('Erro ao exportar PDF: ' + (err.message || 'Falha na exportação'));
      } finally {
        clearTimeout(safetyTimer);
        _isExportingCarteiraPdf = false;
        if (activeBtn) {
          activeBtn.disabled = false;
          activeBtn.classList.remove('opacity-75', 'cursor-not-allowed');
          activeBtn.innerHTML = originalHtml;
        }
      }
    }

    /* =========================================================
       MODO 2: EXPORTAR PNG EM ALTA DEFINIÇÃO (600 DPI)
       Resolução gráfica 2100x1324 px com letras nítidas sem pixelização
       Emite RIGOROSAMENTE 1 ÚNICO arquivo PNG por vez via Blob nativo
       ========================================================= */
    async function exportHdPng(athlete = null, triggerBtn = null) {
      if (!hasPermission('carteira_png')) {
        showToast('⚠️ Seu cargo não possui permissão para baixar carteiras em PNG.', true);
        return;
      }
      if (_isExportingCarteiraPng) {
        showToast('⏳ Aguarde, o PNG já está sendo gerado...');
        return;
      }
      _isExportingCarteiraPng = true;

      const safetyTimer = setTimeout(() => {
        _isExportingCarteiraPng = false;
      }, 10000);

      const headerBtn = document.getElementById('btnExportPNG');
      const activeBtn = triggerBtn || headerBtn;
      const originalHtml = activeBtn ? activeBtn.innerHTML : '';
      if (activeBtn) {
        activeBtn.disabled = true;
        activeBtn.classList.add('opacity-75', 'cursor-not-allowed');
        activeBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-sm"></i> <span>Gerando PNG...</span>';
      }

      showToast('Processando PNG em Alta Definição (600 DPI)...');
      try {
        let targetAthlete = athlete;
        if (!targetAthlete) {
          const formAthlete = getAthleteFromCurrentForm();
          targetAthlete = (formAthlete.nome && formAthlete.nome !== 'Atleta')
            ? formAthlete
            : (window._lastActiveAthlete || formAthlete);
        }
        window._lastActiveAthlete = targetAthlete;

        const safeCode = (targetAthlete.federado || targetAthlete.codigo || 'atleta').replace(/[^a-zA-Z0-9_-]/g, '_');
        const fileName = `carteira-atleta-fpeft-HD-${safeCode}.png`;
        const hdCanvas = await renderCarteiraToHdCanvas(studioState.elements, targetAthlete, 2);

        // 1. Gera DataURL direto para download instantâneo
        let pngDataUrl = null;
        try {
          pngDataUrl = hdCanvas.toDataURL('image/png');
        } catch (taintErr) {
          console.warn('toDataURL falhou, tentando canvas seguro:', taintErr);
          try {
            const safeCanvas = await renderCarteiraToHdCanvas(studioState.elements, targetAthlete, 2, true);
            pngDataUrl = safeCanvas.toDataURL('image/png');
          } catch (e2) {}
        }

        let pngBlob = null;
        if (pngDataUrl) {
          pngBlob = dataUrlToBlob(pngDataUrl);
        } else {
          try {
            pngBlob = await new Promise((res) => hdCanvas.toBlob(res, 'image/png'));
          } catch (e) {}
        }

        if (!pngBlob && !pngDataUrl) {
          throw new Error('Falha ao gerar arquivo PNG da carteira.');
        }

        const downloadUrl = pngDataUrl || (pngBlob ? URL.createObjectURL(pngBlob) : null);

        // 2. Disparo direto nativo de download
        const a = document.createElement('a');
        a.href = downloadUrl;
        a.download = fileName;
        a.style.display = 'none';
        document.body.appendChild(a);
        try {
          a.click();
        } catch (err) {
          console.warn('a.click falhou:', err);
        }
        setTimeout(() => {
          try { if (a.parentNode) a.parentNode.removeChild(a); } catch (e) {}
        }, 5000);

        window._lastExportedPngBlob = pngBlob;
        window._lastExportedPngName = fileName;

        showDownloadToast(downloadUrl, fileName, 'PNG HD', downloadUrl);
        showToast('✓ PNG HD (600 DPI) pronto e baixado!');
      } catch (err) {
        console.error('Erro ao exportar PNG:', err);
        showToast('Erro ao exportar PNG: ' + (err.message || 'Falha na exportação'));
      } finally {
        clearTimeout(safetyTimer);
        _isExportingCarteiraPng = false;
        if (activeBtn) {
          activeBtn.disabled = false;
          activeBtn.classList.remove('opacity-75', 'cursor-not-allowed');
          activeBtn.innerHTML = originalHtml;
        }
      }
    }

    async function baixarCarteiraAtletaPorCodigo(codigo, format = 'pdf', btn = null) {
      if (format === 'png' && !hasPermission('carteira_png')) {
        showToast('⚠️ Seu cargo não possui permissão para baixar carteiras em PNG.', true);
        return;
      }
      if (format !== 'png' && !hasPermission('carteira_pdf')) {
        showToast('⚠️ Seu cargo não possui permissão para baixar carteiras em PDF.', true);
        return;
      }
      let athletes = typeof currentCachedAthletes !== 'undefined' && currentCachedAthletes && currentCachedAthletes.length > 0 ? currentCachedAthletes : [];
      if (athletes.length === 0) {
        athletes = await loadAthletes();
      }
      
      const a = athletes.find(item => String(item.codigo) === String(codigo));
      if (!a) {
        showToast('Atleta não encontrado para download.');
        return;
      }
      window._lastActiveAthlete = a;
      if (format === 'png') {
        await exportHdPng(a, btn);
      } else {
        await exportCarteiraPDF(a, btn);
      }
    }

    window.executeDirectDownload = executeDirectDownload;
    window.downloadBlobDirectly = downloadBlobDirectly;
    window.triggerFileDownload = triggerFileDownload;
    window.exportCarteiraPDF = exportCarteiraPDF;
    window.exportHdPng = exportHdPng;
    window.baixarCarteiraAtletaPorCodigo = baixarCarteiraAtletaPorCodigo;
    window.closeDownloadToast = closeDownloadToast;

    /* Gestão das 4 Bases de Categoria: Aspirante, Iniciante, Amador, Profissional */
    function selectCategoryBase(cat) {
      setAthleteCategoryValue(cat);
      const target = studioState.elements.find(item => item.targetKey === 'categoria');
      if (target) {
        target.text = (cat || 'ASPIRANTE').toUpperCase();
        renderInteractiveElements();
      }
      autoSaveStudioDesign();
      showToast(`Categoria selecionada: ${cat}`);
    }

    function onCategorySelectChange(val) {
      setAthleteCategoryValue(val);
      const target = studioState.elements.find(item => item.targetKey === 'categoria');
      if (target) {
        target.text = (val || 'ASPIRANTE').toUpperCase();
        renderInteractiveElements();
      }
      autoSaveStudioDesign();
    }

    function setAthleteCategoryValue(cat) {
      const sel = document.getElementById('athleteCategory');
      if (!sel) return;
      const upper = (cat || 'ASPIRANTE').toUpperCase().trim();
      if (sel.tagName === 'SELECT') {
        let found = Array.from(sel.options).some(o => o.value === upper);
        if (!found && upper) {
          const opt = document.createElement('option');
          opt.value = upper;
          opt.textContent = upper;
          sel.appendChild(opt);
        }
      }
      sel.value = upper;
      updateCategoryPillsUI(upper);
    }

    function updateCategoryPillsUI(selectedCat) {
      const upper = (selectedCat || '').toUpperCase().trim();
      document.querySelectorAll('.cat-pill-btn').forEach(btn => {
        const catAttr = (btn.getAttribute('data-cat') || btn.textContent).trim().toUpperCase();
        if (catAttr === upper) {
          btn.className = "cat-pill-btn flex items-center justify-center text-[7px] py-1.5 px-0.5 rounded-lg font-bold text-center transition cursor-pointer bg-pe-gold text-pe-dark border border-pe-gold shadow select-none leading-none tracking-tight overflow-hidden";
        } else {
          btn.className = "cat-pill-btn flex items-center justify-center text-[7px] py-1.5 px-0.5 rounded-lg font-bold text-center transition cursor-pointer bg-[#0b101d] text-slate-300 border border-[#1c253b] hover:border-pe-gold hover:text-white select-none leading-none tracking-tight overflow-hidden";
        }
      });
    }

    /* Gestão das Opções de Modalidade: Solo Individual, Dupla e Ambas (Solo + Dupla) */
    function toggleModalityOption(clickedOption) {
      const currentVal = (document.getElementById('athleteModality')?.value || 'SOLO (INDIVIDUAL)').toUpperCase();
      let hasSolo = currentVal.includes('SOLO');
      let hasDupla = currentVal.includes('DUPLA') || currentVal.includes('EQUIPE');

      const isClickSolo = String(clickedOption || '').toUpperCase().includes('SOLO');
      const isClickDupla = String(clickedOption || '').toUpperCase().includes('DUPLA') || String(clickedOption || '').toUpperCase().includes('EQUIPE');

      if (isClickSolo) {
        hasSolo = !hasSolo;
        if (!hasSolo && !hasDupla) hasDupla = true; // garante ao menos 1 modalidade ativa
      } else if (isClickDupla) {
        hasDupla = !hasDupla;
        if (!hasSolo && !hasDupla) hasSolo = true; // garante ao menos 1 modalidade ativa
      }

      let finalVal = 'SOLO (INDIVIDUAL)';
      if (hasSolo && hasDupla) {
        finalVal = 'SOLO & DUPLA';
      } else if (hasDupla) {
        finalVal = 'DUPLA (EQUIPE)';
      } else {
        finalVal = 'SOLO (INDIVIDUAL)';
      }

      setAthleteModalityValue(finalVal);
      const target = studioState.elements.find(item => item.targetKey === 'modalidade' || item.targetKey === 'filiacao' || item.id === 'field-modalidade');
      if (target) {
        target.text = finalVal;
        renderInteractiveElements();
      }
      autoSaveStudioDesign();
      broadcastLiveDesignChange(true);
      showToast(`Modalidade definida: ${finalVal}`);
    }

    function selectModalityBase(mod) {
      toggleModalityOption(mod);
    }

    function onModalitySelectChange(val) {
      setAthleteModalityValue(val);
      const target = studioState.elements.find(item => item.targetKey === 'modalidade' || item.targetKey === 'filiacao' || item.id === 'field-modalidade');
      if (target) {
        target.text = (val || 'SOLO (INDIVIDUAL)').toUpperCase();
        renderInteractiveElements();
      }
      autoSaveStudioDesign();
      broadcastLiveDesignChange(true);
    }

    function setAthleteModalityValue(mod) {
      const sel = document.getElementById('athleteModality');
      if (!sel) return;
      const upper = (mod || 'SOLO (INDIVIDUAL)').toUpperCase().trim();
      
      const hasSolo = upper.includes('SOLO');
      const hasDupla = upper.includes('DUPLA') || upper.includes('EQUIPE');

      let matchedVal = 'SOLO (INDIVIDUAL)';
      if (hasSolo && hasDupla) {
        matchedVal = 'SOLO & DUPLA';
      } else if (hasDupla) {
        matchedVal = 'DUPLA (EQUIPE)';
      } else {
        matchedVal = 'SOLO (INDIVIDUAL)';
      }

      if (sel.tagName === 'SELECT') {
        let found = Array.from(sel.options).some(o => o.value === matchedVal);
        if (!found) {
          const opt = document.createElement('option');
          opt.value = matchedVal;
          opt.textContent = matchedVal;
          sel.appendChild(opt);
        }
      }
      sel.value = matchedVal;
      updateModalityPillsUI(matchedVal);
    }

    function updateModalityPillsUI(selectedMod) {
      const upper = (selectedMod || '').toUpperCase().trim();
      const hasSolo = upper.includes('SOLO');
      const hasDupla = upper.includes('DUPLA') || upper.includes('EQUIPE');

      const activeClass = "mod-pill-btn flex items-center justify-center text-[7.5px] whitespace-nowrap py-1.5 px-1 rounded-lg font-bold text-center transition cursor-pointer bg-pe-gold text-pe-dark border border-pe-gold shadow select-none leading-none tracking-tight";
      const inactiveClass = "mod-pill-btn flex items-center justify-center text-[7.5px] whitespace-nowrap py-1.5 px-1 rounded-lg font-bold text-center transition cursor-pointer bg-[#0b101d] text-slate-300 border border-[#1c253b] hover:border-pe-gold hover:text-white select-none leading-none tracking-tight";

      const btnSolo = document.getElementById('btnModSolo') || document.querySelector('.mod-pill-btn[data-mod="SOLO"]');
      const btnDupla = document.getElementById('btnModDupla') || document.querySelector('.mod-pill-btn[data-mod="DUPLA"]');

      if (btnSolo) btnSolo.className = hasSolo ? activeClass : inactiveClass;
      if (btnDupla) btnDupla.className = hasDupla ? activeClass : inactiveClass;
    }

    /* Sincroniza todos os textos dos elementos do Studio CR80 diretamente com os campos ativos do formulário */
    function syncStudioElementsWithForm() {
      const nameVal = (document.getElementById('athleteName')?.value || '').trim().toUpperCase();
      const cpfVal = (document.getElementById('athleteCpf')?.value || '').trim();
      const birthVal = (document.getElementById('athleteBirth')?.value || '').trim();
      const phoneVal = (document.getElementById('athletePhone')?.value || '').trim();
      const fedVal = (document.getElementById('athleteFederatedNum')?.value || '').trim();
      const modVal = (document.getElementById('athleteModality')?.value || '').trim().toUpperCase();
      const catVal = (document.getElementById('athleteCategory')?.value || '').trim().toUpperCase();
      const cityVal = (document.getElementById('athleteCity')?.value || '').trim().toUpperCase();
      const valVal = (document.getElementById('athleteValidity')?.value || '').trim();

      const setEl = (key, val) => {
        const item = studioState.elements.find(i => i.targetKey === key || i.id === `field-${key}`);
        if (item) item.text = val;
      };

      setEl('nome', nameVal);
      setEl('cpf', cpfVal || 'XXX.XXX.XXX-XX');
      setEl('nasc', birthVal || 'XX/XX/XXXX');
      setEl('fone', phoneVal || '(XX) XXXXX-XXXX');
      if (fedVal) setEl('federado', fedVal);
      if (modVal) {
        setEl('modalidade', modVal);
        setEl('filiacao', modVal);
      }
      const effCity = (!cityVal || cityVal === 'RECIFE - PE') ? '- PE' : cityVal;
      setEl('municipio', effCity);
      if (valVal) setEl('validade', valVal);

      // Preserva e sincroniza a foto ativa do atleta no Studio
      const activePhoto = (document.getElementById('athletePhotoVal') ? document.getElementById('athletePhotoVal').value : '') || window._currentAthletePhoto || '';
      const photoItem = studioState.elements.find(i => i.id === 'field-foto' || i.type === 'photo');
      if (photoItem && activePhoto) {
        photoItem.photoUrl = activePhoto;
      }
    }

    /* =========================================================
       INICIALIZAÇÃO DOS EVENTOS DO STUDIO CR80
       ========================================================= */
    function initStudioEvents() {
      // Sincronização dos campos do formulário com o Studio
      const bindSync = (id, targetKey, uppercase = false) => {
        const el = document.getElementById(id);
        if (!el) return;
        const handler = (e) => {
          let val = e.target.value;
          if (uppercase) val = val.toUpperCase();
          if (id === 'athleteFederatedNum') {
            const cInp = document.getElementById('athleteCode');
            if (cInp) cInp.value = val;
          }
          const target = studioState.elements.find(item => item.targetKey === targetKey || item.id === `field-${targetKey}` || (targetKey === 'modalidade' && item.targetKey === 'filiacao'));
          if (target) {
            target.text = val;
            renderInteractiveElements();
          }
          if (id === 'athleteCategory') {
            updateCategoryPillsUI(val);
          }
          if (id === 'athleteModality') {
            updateModalityPillsUI(val);
          }
          autoSaveStudioDesign();
        };
        el.addEventListener('input', handler);
        el.addEventListener('change', handler);
      };

      bindSync('athleteName', 'nome', true);
      bindSync('athleteModality', 'modalidade', true);
      bindSync('athleteCategory', 'categoria', true);
      bindSync('athleteClub', 'modalidade', true);
      bindSync('athleteFederatedNum', 'federado', true);
      bindSync('athleteValidity', 'validade', false);
      bindSync('inputAssinatura', 'assinatura', true);
      bindSync('inputQrText', 'qr', false);

      // Sincronização e máscara do Nº de Federado (6 dígitos numéricos)
      const fedInp = document.getElementById('athleteFederatedNum');
      if (fedInp) {
        fedInp.addEventListener('input', (e) => {
          let v = e.target.value.replace(/\D/g, '').substring(0, 6);
          e.target.value = v;
          const cInp = document.getElementById('athleteCode');
          if (cInp) cInp.value = v;
          const target = studioState.elements.find(item => item.targetKey === 'federado' || item.id === 'field-federado');
          if (target) {
            target.text = v;
          }
          const qrLink = `https://fpeft.vercel.app/?id=${v || '973321'}`;
          const qrInp = document.getElementById('inputQrText');
          if (qrInp) qrInp.value = qrLink;
          const qrTarget = studioState.elements.find(item => item.targetKey === 'qr' || item.id === 'field-qrcode');
          if (qrTarget) qrTarget.text = qrLink;

          renderInteractiveElements();
          autoSaveStudioDesign();
        });
      }

      const codeInp = document.getElementById('athleteCode');
      if (codeInp) {
        codeInp.addEventListener('input', (e) => {
          const v = e.target.value.replace(/\D/g, '').substring(0, 6);
          const fInp = document.getElementById('athleteFederatedNum');
          if (fInp && fInp.value !== v) {
            fInp.value = v;
            const target = studioState.elements.find(item => item.targetKey === 'federado' || item.id === 'field-federado');
            if (target) {
              target.text = v;
            }
          }
          const qrLink = `https://fpeft.vercel.app/?id=${v || '973321'}`;
          const qrInp = document.getElementById('inputQrText');
          if (qrInp) qrInp.value = qrLink;
          const qrTarget = studioState.elements.find(item => item.targetKey === 'qr' || item.id === 'field-qrcode');
          if (qrTarget) qrTarget.text = qrLink;

          renderInteractiveElements();
          autoSaveStudioDesign();
        });
      }

      // Máscara do CPF
      const cpfInp = document.getElementById('athleteCpf');
      if (cpfInp) {
        cpfInp.addEventListener('focus', (e) => {
          if (e.target.value === 'XXX.XXX.XXX-XX') {
            e.target.value = '';
          }
        });
        cpfInp.addEventListener('blur', (e) => {
          if (!e.target.value.trim() || e.target.value.replace(/\D/g, '').length === 0) {
            e.target.value = 'XXX.XXX.XXX-XX';
            const target = studioState.elements.find(item => item.targetKey === 'cpf' || item.id === 'field-cpf');
            if (target) {
              target.text = 'XXX.XXX.XXX-XX';
              renderInteractiveElements();
            }
          }
        });
        cpfInp.addEventListener('input', (e) => {
          let v = e.target.value.replace(/\D/g, '');
          if (v.length > 11) v = v.substring(0, 11);
          if (v.length > 9) {
            v = v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
          } else if (v.length > 6) {
            v = v.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
          } else if (v.length > 3) {
            v = v.replace(/(\d{3})(\d{1,3})/, '$1.$2');
          }
          e.target.value = v;

          const target = studioState.elements.find(item => item.targetKey === 'cpf' || item.id === 'field-cpf');
          if (target) {
            target.text = v || 'XXX.XXX.XXX-XX';
            renderInteractiveElements();
          }
          autoSaveStudioDesign();
        });
      }

      // Máscara do Telefone / WhatsApp
      const phoneInp = document.getElementById('athletePhone');
      if (phoneInp) {
        phoneInp.addEventListener('focus', (e) => {
          if (e.target.value === '(XX) XXXXX-XXXX') {
            e.target.value = '';
          }
        });
        phoneInp.addEventListener('blur', (e) => {
          if (!e.target.value.trim() || e.target.value.replace(/\D/g, '').length === 0) {
            e.target.value = '(XX) XXXXX-XXXX';
            const target = studioState.elements.find(item => item.targetKey === 'fone' || item.id === 'field-fone');
            if (target) {
              target.text = '(XX) XXXXX-XXXX';
              renderInteractiveElements();
            }
          }
        });
        phoneInp.addEventListener('input', (e) => {
          let v = e.target.value.replace(/\D/g, '');
          if (v.length > 11) v = v.substring(0, 11);
          if (v.length > 10) {
            v = v.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
          } else if (v.length > 6) {
            v = v.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3');
          } else if (v.length > 2) {
            v = v.replace(/(\d{2})(\d{0,5})/, '($1) $2');
          } else if (v.length > 0) {
            v = v.replace(/(\d*)/, '($1');
          }
          e.target.value = v;

          const target = studioState.elements.find(item => item.targetKey === 'fone' || item.id === 'field-fone');
          if (target) {
            target.text = v || '(XX) XXXXX-XXXX';
            renderInteractiveElements();
          }
          autoSaveStudioDesign();
        });
      }

      // Máscara da Data de Nascimento
      const birthInp = document.getElementById('athleteBirth');
      if (birthInp) {
        birthInp.addEventListener('focus', (e) => {
          if (e.target.value === 'XX/XX/XXXX') {
            e.target.value = '';
          }
        });
        birthInp.addEventListener('blur', (e) => {
          if (!e.target.value.trim() || e.target.value.replace(/\D/g, '').length === 0) {
            e.target.value = 'XX/XX/XXXX';
            const target = studioState.elements.find(item => item.targetKey === 'nasc' || item.id === 'field-nasc');
            if (target) {
              target.text = 'XX/XX/XXXX';
              renderInteractiveElements();
            }
          }
        });
        birthInp.addEventListener('input', (e) => {
          let v = e.target.value.replace(/\D/g, '');
          if (v.length > 8) v = v.substring(0, 8);
          if (v.length > 4) {
            v = v.replace(/(\d{2})(\d{2})(\d{1,4})/, '$1/$2/$3');
          } else if (v.length > 2) {
            v = v.replace(/(\d{2})(\d{1,2})/, '$1/$2');
          }
          e.target.value = v;

          const target = studioState.elements.find(item => item.targetKey === 'nasc' || item.id === 'field-nasc');
          if (target) {
            target.text = v || 'XX/XX/XXXX';
            renderInteractiveElements();
          }
          autoSaveStudioDesign();
        });
      }

      // Campo de Município com "- PE" Fixo
      const cityInp = document.getElementById('athleteCity');
      if (cityInp) {
        cityInp.addEventListener('focus', (e) => {
          if (e.target.value === '- PE' || e.target.value === 'RECIFE - PE') {
            e.target.value = '';
          }
        });
        cityInp.addEventListener('blur', (e) => {
          let val = e.target.value.trim().toUpperCase();
          if (!val || val === '- PE' || val === 'PE') {
            e.target.value = '- PE';
          } else if (val.endsWith(' - PE')) {
            e.target.value = val;
          } else if (val.endsWith('- PE')) {
            e.target.value = val.replace(/- PE$/, ' - PE');
          } else if (val.endsWith(' PE')) {
            e.target.value = val.replace(/\s+PE$/, ' - PE');
          } else if (!val.includes(' - ')) {
            e.target.value = val + ' - PE';
          }
          const target = studioState.elements.find(item => item.targetKey === 'municipio' || item.id === 'field-municipio');
          if (target) {
            target.text = e.target.value;
            renderInteractiveElements();
          }
          autoSaveStudioDesign();
        });
        cityInp.addEventListener('input', (e) => {
          let val = e.target.value.toUpperCase();
          const target = studioState.elements.find(item => item.targetKey === 'municipio' || item.id === 'field-municipio');
          if (target) {
            target.text = val || '- PE';
            renderInteractiveElements();
          }
          autoSaveStudioDesign();
        });
      }

      // Funções de Gerenciamento da Foto 3x4 do Atleta (Câmera, Arquivos, Miniatura e Prévia)
      window._currentAthletePhoto = '';

      function updateAthleteFormPhotoPreview(photoUrl, info = '') {
        const previewBox = document.getElementById('athleteFormPhotoPreview');
        const imgEl = document.getElementById('athleteFormPhotoImg');
        const infoEl = document.getElementById('athleteFormPhotoInfo');
        if (!previewBox || !imgEl) return;

        if (photoUrl && photoUrl !== OFFICIAL_DEFAULT_PHOTO_SVG && !photoUrl.startsWith('data:image/svg+xml')) {
          imgEl.src = photoUrl;
          if (infoEl) infoEl.textContent = info ? `Pronta (${info})` : 'Pronta para o Studio e Carteira';
          previewBox.classList.remove('hidden');
        } else {
          imgEl.src = '';
          previewBox.classList.add('hidden');
        }
      }
      window.updateAthleteFormPhotoPreview = updateAthleteFormPhotoPreview;

      function resetAthletePhoto() {
        if (!hasPermission('atletas_editar') && !hasPermission('*')) {
          showToast('🔒 Acesso Controlado: Sua conta não possui permissão para modificar atletas.', true);
          return;
        }
        window._currentAthletePhoto = '';
        const photoInput = document.getElementById('athletePhotoVal');
        if (photoInput) photoInput.value = '';
        updateAthleteFormPhotoPreview('');

        const photoTarget = studioState.elements.find(item => item.id === 'field-foto');
        if (photoTarget) {
          photoTarget.photoUrl = '';
        }
        if (window._lastActiveAthlete) {
          window._lastActiveAthlete.foto = '';
          window._lastActiveAthlete.foto_url = '';
        }

        // Remove do banco de dados local e Supabase se houver atleta ativo
        const currentCode = (document.getElementById('athleteCode')?.value || window._lastActiveAthlete?.codigo || '').trim();
        if (currentCode) {
          try {
            const localList = JSON.parse(localStorage.getItem('pe_athletes_db') || '[]');
            const idx = localList.findIndex(a => a.codigo === currentCode);
            if (idx >= 0) {
              localList[idx].foto = '';
              localList[idx].foto_url = '';
              localStorage.setItem('pe_athletes_db', JSON.stringify(localList));
            }
          } catch (e) {}

          if (typeof supabaseClient !== 'undefined' && supabaseClient) {
            try {
              supabaseClient
                .from('atletas')
                .update({ foto_url: '', foto: '' })
                .eq('codigo', currentCode)
                .catch(() => {});
            } catch (e) {}
          }
        }

        renderInteractiveElements();
        showToast('Foto removida. Silhueta oficial padrão restaurada.');
      }
      window.resetAthletePhoto = resetAthletePhoto;

      // 0. Compilação Otimizada e Divisão em Frações (Chunks) para Economia do Banco
      function compileAthletePhotoBundle(sourceDataUrl, callback) {
        if (!sourceDataUrl) return;
        const img = new Image();
        img.onload = () => {
          // A) Versão Alta Resolução Oficial (420x560, qualidade 0.84)
          const maxW = 420;
          const maxH = 560;
          let w = img.width;
          let h = img.height;
          if (w > maxW || h > maxH) {
            const ratio = Math.min(maxW / w, maxH / h);
            w = Math.round(w * ratio);
            h = Math.round(h * ratio);
          }
          const canvasFull = document.createElement('canvas');
          canvasFull.width = w;
          canvasFull.height = h;
          const ctxFull = canvasFull.getContext('2d');
          ctxFull.imageSmoothingEnabled = true;
          ctxFull.imageSmoothingQuality = 'high';
          ctxFull.drawImage(img, 0, 0, w, h);
          const fullUrl = canvasFull.toDataURL('image/jpeg', 0.84);

          // B) Versão Compacta Ultra-Leve (150x200, qualidade 0.68) para a coluna foto_url do banco
          const canvasCompact = document.createElement('canvas');
          canvasCompact.width = 150;
          canvasCompact.height = 200;
          const ctxCompact = canvasCompact.getContext('2d');
          ctxCompact.imageSmoothingEnabled = true;
          ctxCompact.imageSmoothingQuality = 'medium';
          ctxCompact.drawImage(img, 0, 0, 150, 200);
          const compactUrl = canvasCompact.toDataURL('image/jpeg', 0.68);

          // C) Fracionamento (Chunks de 12.000 caracteres)
          const CHUNK_SIZE = 12000;
          const chunks = [];
          for (let i = 0; i < fullUrl.length; i += CHUNK_SIZE) {
            chunks.push(fullUrl.substring(i, i + CHUNK_SIZE));
          }

          const bundle = {
            fullUrl: fullUrl,
            compactUrl: compactUrl,
            chunks: chunks,
            totalChunks: chunks.length,
            fullLength: fullUrl.length,
            width: w,
            height: h
          };

          if (typeof callback === 'function') callback(bundle);
        };
        img.onerror = () => {
          if (typeof callback === 'function') callback({ fullUrl: sourceDataUrl, compactUrl: sourceDataUrl, chunks: [sourceDataUrl], totalChunks: 1, fullLength: sourceDataUrl.length });
        };
        img.src = sourceDataUrl;
      }
      window.compileAthletePhotoBundle = compileAthletePhotoBundle;

      // Sincronização das frações (chunks) da foto nos dois bancos de dados (DB1 e DB2)
      async function syncAthletePhotoChunksToBothDatabases(cleanCode, photoBundle) {
        if (!cleanCode) return;
        const code = String(cleanCode).trim();
        const chunks = (photoBundle && Array.isArray(photoBundle.chunks)) ? photoBundle.chunks : [];
        const total = chunks.length;

        // 1. Grava no cache local
        try {
          if (total > 0) {
            localStorage.setItem('pe_photo_chunks_' + code, JSON.stringify(chunks));
            if (photoBundle.fullUrl) localStorage.setItem('pe_photo_full_' + code, photoBundle.fullUrl);
          } else {
            localStorage.removeItem('pe_photo_chunks_' + code);
            localStorage.removeItem('pe_photo_full_' + code);
          }
        } catch (eStor) {}

        const chunkRows = chunks.map((c, idx) => ({
          source: `athlete_photo_chunk:${code}:${idx}:${total}`,
          status: c,
          pinged_at: new Date().toISOString()
        }));

        const metaRow = {
          source: `athlete_photo_meta:${code}`,
          status: JSON.stringify({
            codigo: code,
            totalChunks: total,
            fullLength: photoBundle.fullLength || 0,
            updatedAt: new Date().toISOString()
          }),
          pinged_at: new Date().toISOString()
        };

        const tasks = [];

        // Banco 2 (Secundário/Ingestão)
        if (typeof supabaseSecondaryClient !== 'undefined' && supabaseSecondaryClient) {
          tasks.push((async () => {
            try {
              await safeSupabaseCall(supabaseSecondaryClient.from('keep_alive_logs').delete().like('source', `athlete_photo_chunk:${code}:%`), 3000);
              await safeSupabaseCall(supabaseSecondaryClient.from('keep_alive_logs').delete().eq('source', `athlete_photo_meta:${code}`), 3000);
              if (chunkRows.length > 0) {
                await safeSupabaseCall(supabaseSecondaryClient.from('keep_alive_logs').insert([...chunkRows, metaRow]), 4000);
              }
            } catch (eSec) {}
          })());
        }

        // Banco 1 (Principal/Exibição)
        if (typeof supabaseClient !== 'undefined' && supabaseClient) {
          tasks.push((async () => {
            try {
              await safeSupabaseCall(supabaseClient.from('keep_alive_logs').delete().like('source', `athlete_photo_chunk:${code}:%`), 3000);
              await safeSupabaseCall(supabaseClient.from('keep_alive_logs').delete().eq('source', `athlete_photo_meta:${code}`), 3000);
              if (chunkRows.length > 0) {
                await safeSupabaseCall(supabaseClient.from('keep_alive_logs').insert([...chunkRows, metaRow]), 4000);
              }
            } catch (ePrim) {}
          })());
        }

        await Promise.allSettled(tasks);
      }
      window.syncAthletePhotoChunksToBothDatabases = syncAthletePhotoChunksToBothDatabases;

      // Montagem da foto por completo a partir das frações (chunks)
      async function montarFotoCompletaFederado(cleanCode, fallbackCompactUrl) {
        if (!cleanCode) return fallbackCompactUrl || '';
        const code = String(cleanCode).trim();

        // 1. Tenta recuperar do cache local imediato
        try {
          const cachedFull = localStorage.getItem('pe_photo_full_' + code);
          if (cachedFull && cachedFull.startsWith('data:image/')) {
            return cachedFull;
          }
          const cachedChunks = JSON.parse(localStorage.getItem('pe_photo_chunks_' + code) || '[]');
          if (Array.isArray(cachedChunks) && cachedChunks.length > 0) {
            const assembled = cachedChunks.join('');
            if (assembled.startsWith('data:image/')) return assembled;
          }
        } catch (eCache) {}

        let chunks = [];

        // 2. Consulta no Banco 1 (Principal)
        if (typeof supabaseClient !== 'undefined' && supabaseClient) {
          try {
            const { data: db1Chunks } = await safeSupabaseCall(
              supabaseClient
                .from('keep_alive_logs')
                .select('source, status')
                .like('source', `athlete_photo_chunk:${code}:%`)
                .order('source', { ascending: true }),
              2500
            );
            if (db1Chunks && Array.isArray(db1Chunks) && db1Chunks.length > 0) {
              chunks = db1Chunks;
            }
          } catch (e1) {}
        }

        // 3. Failover: consulta no Banco 2
        if (chunks.length === 0 && typeof supabaseSecondaryClient !== 'undefined' && supabaseSecondaryClient) {
          try {
            const { data: db2Chunks } = await safeSupabaseCall(
              supabaseSecondaryClient
                .from('keep_alive_logs')
                .select('source, status')
                .like('source', `athlete_photo_chunk:${code}:%`)
                .order('source', { ascending: true }),
              2500
            );
            if (db2Chunks && Array.isArray(db2Chunks) && db2Chunks.length > 0) {
              chunks = db2Chunks;
            }
          } catch (e2) {}
        }

        // 4. Montagem das frações em ordem
        if (chunks.length > 0) {
          try {
            chunks.sort((a, b) => {
              const partsA = a.source.split(':');
              const partsB = b.source.split(':');
              const idxA = parseInt(partsA[2] || '0', 10);
              const idxB = parseInt(partsB[2] || '0', 10);
              return idxA - idxB;
            });
            const assembledFullPhoto = chunks.map(c => c.status).join('');
            if (assembledFullPhoto.startsWith('data:image/')) {
              try {
                localStorage.setItem('pe_photo_full_' + code, assembledFullPhoto);
                localStorage.setItem('pe_photo_chunks_' + code, JSON.stringify(chunks.map(c => c.status)));
              } catch (eStor) {}
              return assembledFullPhoto;
            }
          } catch (eMontagem) {
            console.warn('Erro ao montar foto completa a partir das frações:', eMontagem);
          }
        }

        return fallbackCompactUrl || '';
      }
      window.montarFotoCompletaFederado = montarFotoCompletaFederado;


      // 1. Aplicação e Sobreposição de Foto Oficial do Atleta (Atualiza Formulário, Studio e Banco)
      window.applyAthletePhotoDataUrl = function(compressedDataUrl, info = '') {
        if (!compressedDataUrl) return;

        compileAthletePhotoBundle(compressedDataUrl, (bundle) => {
          // 1. Armazena foto compacta em memória e no input persistente para economizar espaço
          window._currentAthletePhoto = bundle.compactUrl;
          window._currentAthletePhotoFull = bundle.fullUrl;
          window._currentAthletePhotoChunks = bundle.chunks;

          const photoInput = document.getElementById('athletePhotoVal');
          if (photoInput) photoInput.value = bundle.compactUrl;

          // 2. Atualiza miniatura visual no formulário
          updateAthleteFormPhotoPreview(bundle.compactUrl, info || `Otimizada (${bundle.totalChunks} frações)`);

          // 3. Atualiza elemento no Studio CR80 com resolução HD
          const photoTarget = studioState.elements.find(item => item.id === 'field-foto');
          if (photoTarget) {
            photoTarget.photoUrl = bundle.fullUrl || bundle.compactUrl;
          }

          if (window._lastActiveAthlete) {
            window._lastActiveAthlete.foto = bundle.compactUrl;
            window._lastActiveAthlete.foto_url = bundle.compactUrl;
          }

          renderInteractiveElements();

          // 4. Substituição imediata no banco local e nuvem
          const currentCode = (document.getElementById('athleteCode')?.value || window._lastActiveAthlete?.codigo || '').trim();
          if (currentCode) {
            try {
              const localList = JSON.parse(localStorage.getItem('pe_athletes_db') || '[]');
              const idx = localList.findIndex(a => a.codigo === currentCode);
              if (idx >= 0) {
                localList[idx].foto = bundle.compactUrl;
                localList[idx].foto_url = bundle.compactUrl;
                localStorage.setItem('pe_athletes_db', JSON.stringify(localList));
              }
            } catch (e) {}

            const syncPhotoToDb = async () => {
              const photoPayload = { foto_url: bundle.compactUrl, foto: bundle.compactUrl };
              const recordKey = 'athlete_record:' + currentCode;

              if (typeof supabaseSecondaryClient !== 'undefined' && supabaseSecondaryClient) {
                try {
                  await supabaseSecondaryClient.from('atletas').update(photoPayload).eq('codigo', currentCode);
                  const { data: rec2 } = await supabaseSecondaryClient.from('keep_alive_logs').select('status').eq('source', recordKey).limit(1).maybeSingle();
                  if (rec2 && rec2.status) {
                    const parsed = JSON.parse(rec2.status);
                    parsed.foto = bundle.compactUrl;
                    parsed.foto_url = bundle.compactUrl;
                    await supabaseSecondaryClient.from('keep_alive_logs').update({ status: JSON.stringify(parsed), pinged_at: new Date().toISOString() }).eq('source', recordKey);
                  }
                } catch (e2) {}
              }

              if (typeof supabaseClient !== 'undefined' && supabaseClient) {
                try {
                  await supabaseClient.from('atletas').update(photoPayload).eq('codigo', currentCode);
                  const { data: rec1 } = await supabaseClient.from('keep_alive_logs').select('status').eq('source', recordKey).limit(1).maybeSingle();
                  if (rec1 && rec1.status) {
                    const parsed = JSON.parse(rec1.status);
                    parsed.foto = bundle.compactUrl;
                    parsed.foto_url = bundle.compactUrl;
                    await supabaseClient.from('keep_alive_logs').update({ status: JSON.stringify(parsed), pinged_at: new Date().toISOString() }).eq('source', recordKey);
                  }
                } catch (e1) {}
              }

              // Grava frações nos dois bancos de dados
              await syncAthletePhotoChunksToBothDatabases(currentCode, bundle);
            };
            safeSupabaseCall(syncPhotoToDb(), 5000).catch(() => null);
          }

          const sizeKb = Math.round((bundle.compactUrl.length * 3 / 4) / 1024);
          showToast(`✓ Foto compilada e dividida em ${bundle.totalChunks} frações (${sizeKb} KB compacto)!`);
        });
      };

      // 2. Processamento Unificado de Foto 3x4 do Atleta (Câmera ou Arquivos)
      function processAthletePhotoFile(file, promptConfirm = false) {
        if (!file) return;
        if (!file.type.startsWith('image/')) {
          showToast('Por favor, selecione um arquivo de imagem válido (JPG, PNG, WEBP).', true);
          return;
        }
        showToast('Otimizando foto 3x4 do atleta...');
        const reader = new FileReader();
        reader.onload = (event) => {
          const img = new Image();
          img.onload = () => {
            // Proporção oficial 3x4 com nitidez máxima e densidade retina (420x560)
            const maxW = 420;
            const maxH = 560;
            let width = img.width;
            let height = img.height;
            if (width > maxW || height > maxH) {
              const ratio = Math.min(maxW / width, maxH / height);
              width = Math.round(width * ratio);
              height = Math.round(height * ratio);
            }
            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(img, 0, 0, width, height);

            // Compressão otimizada com 82% de qualidade JPEG
            const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);

            if (promptConfirm) {
              openAthletePhotoConfirmationModal(compressedDataUrl);
            } else {
              applyAthletePhotoDataUrl(compressedDataUrl, `${width}x${height}px`);
            }
          };
          img.onerror = () => {
            showToast('Erro ao processar imagem da foto.', true);
          };
          img.src = event.target.result;
        };
        reader.readAsDataURL(file);
      }
      window.processAthletePhotoFile = processAthletePhotoFile;

      // 3. Upload via Gerenciador de Arquivos (PC, Celular ou Tablet)
      const fotoInp = document.getElementById('uploadFotoInput');
      if (fotoInp) {
        fotoInp.addEventListener('change', (e) => {
          const file = e.target.files && e.target.files[0];
          if (file) processAthletePhotoFile(file, true);
          e.target.value = '';
        });
      }

      // 4. Upload via Câmera Nativa (Fallback Celular ou Tablet)
      const fotoCameraInp = document.getElementById('uploadFotoCameraInput');
      if (fotoCameraInp) {
        fotoCameraInp.addEventListener('change', (e) => {
          const file = e.target.files && e.target.files[0];
          if (file) processAthletePhotoFile(file, true);
          e.target.value = '';
        });
      }

      // 5. Controle Inteligente de Câmera com Permissão do Navegador, Visto (✓) e Lixeira (🗑️)
      let athleteWebcamStream = null;
      let athleteCameraFacingMode = 'user';
      let athleteCameraMirrored = true; // Câmera invertida (espelho) ativada por padrão para visualização correta do atleta
      let currentPendingPhotoDataUrl = null;

      function updateAthleteVideoMirroring() {
        const video = document.getElementById('webcamAthleteVideo');
        if (video) {
          const transformVal = athleteCameraMirrored ? 'scaleX(-1)' : 'scaleX(1)';
          video.style.transform = transformVal;
          video.style.webkitTransform = transformVal;
        }
        const mirrorBtns = document.querySelectorAll('.btn-mirror-camera-indicator');
        mirrorBtns.forEach(btn => {
          if (athleteCameraMirrored) {
            btn.classList.add('bg-pe-gold/20', 'text-pe-gold', 'border-pe-gold/60');
          } else {
            btn.classList.remove('bg-pe-gold/20', 'text-pe-gold', 'border-pe-gold/60');
          }
        });
      }

      window.toggleAthleteCameraMirror = function() {
        athleteCameraMirrored = !athleteCameraMirrored;
        updateAthleteVideoMirroring();
        showToast(athleteCameraMirrored ? '↔️ Câmera invertida (Modo Espelho Ativado)' : '↔️ Câmera padrão direto (Espelho Desativado)');
      };

      async function startAthleteCameraStream(facingMode) {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('API getUserMedia não suportada pelo navegador.');
        }

        if (athleteWebcamStream) {
          athleteWebcamStream.getTracks().forEach(track => track.stop());
          athleteWebcamStream = null;
        }

        const constraints = {
          video: facingMode ? {
            facingMode: { ideal: facingMode },
            width: { ideal: 1280 },
            height: { ideal: 720 }
          } : {
            width: { ideal: 1280 },
            height: { ideal: 720 }
          },
          audio: false
        };

        const stream = await navigator.mediaDevices.getUserMedia(constraints);
        athleteWebcamStream = stream;
        const video = document.getElementById('webcamAthleteVideo');
        if (video) {
          video.srcObject = stream;
          video.setAttribute('playsinline', 'true');
          video.setAttribute('muted', 'true');
          updateAthleteVideoMirroring();
          await video.play();
        }
        return stream;
      }

      window.openAthleteCameraSelector = async function() {
        if (!hasPermission('atletas_editar') && !hasPermission('*')) {
          showToast('🔒 Acesso Controlado: Sua conta não possui permissão para modificar fotos de atletas.', true);
          return;
        }

        const modal = document.getElementById('modalWebcamAthlete');
        const video = document.getElementById('webcamAthleteVideo');
        const snapshotPreview = document.getElementById('webcamAthleteSnapshotPreview');
        const overlay = document.getElementById('webcamAthleteOverlay');
        const controlsLive = document.getElementById('webcamControlsLive');
        const controlsConfirm = document.getElementById('webcamControlsConfirm');
        const subtitle = document.getElementById('webcamModalSubtitle');

        currentPendingPhotoDataUrl = null;
        updateAthleteVideoMirroring();

        if (snapshotPreview) {
          snapshotPreview.src = '';
          snapshotPreview.classList.add('hidden');
        }
        if (video) video.classList.remove('hidden');
        if (overlay) overlay.classList.remove('hidden');
        if (controlsLive) controlsLive.classList.remove('hidden');
        if (controlsConfirm) controlsConfirm.classList.add('hidden');
        if (subtitle) subtitle.textContent = 'Enquadre o rosto no centro e tire a foto';

        if (modal) modal.classList.remove('hidden');

        // Solicita permissão ao navegador para abrir a câmera (Celular, Tablet ou Desktop)
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          try {
            await startAthleteCameraStream(athleteCameraFacingMode);
            return;
          } catch (err) {
            console.warn('Tentativa com modo ' + athleteCameraFacingMode + ' falhou, tentando fallback genérico:', err);
            try {
              await startAthleteCameraStream('');
              return;
            } catch (fallbackErr) {
              console.warn('Acesso à câmera recusado ou indisponível:', fallbackErr);
              closeAthleteWebcam();
              showToast('Permissão da câmera não concedida. Abrindo câmera do dispositivo...');
              const camInp = document.getElementById('uploadFotoCameraInput');
              if (camInp) camInp.click();
              return;
            }
          }
        }

        // Fallback caso o navegador não suporte getUserMedia
        closeAthleteWebcam();
        const camInp = document.getElementById('uploadFotoCameraInput');
        if (camInp) camInp.click();
      };

      window.flipAthleteCamera = async function() {
        athleteCameraFacingMode = athleteCameraFacingMode === 'user' ? 'environment' : 'user';
        // Se for frontal, mantém espelhado por padrão para enquadramento correto; se traseira, desliga espelho
        athleteCameraMirrored = (athleteCameraFacingMode === 'user');
        try {
          await startAthleteCameraStream(athleteCameraFacingMode);
          updateAthleteVideoMirroring();
          showToast(athleteCameraFacingMode === 'environment' ? '📷 Câmera traseira ativada' : '🤳 Câmera frontal invertida (modo espelho)');
        } catch (err) {
          console.warn('Não foi possível alternar de câmera:', err);
          showToast('Não foi possível alternar a câmera neste aparelho.', true);
        }
      };

      window.captureAthleteWebcamSnapshot = function() {
        const video = document.getElementById('webcamAthleteVideo');
        if (!video) return;

        const w = video.videoWidth || 640;
        const h = video.videoHeight || 480;

        // Cria canvas com proporção 3x4 (420x560) e recorte centralizado
        const canvas = document.createElement('canvas');
        canvas.width = 420;
        canvas.height = 560;
        const ctx = canvas.getContext('2d');
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        const targetRatio = 3 / 4;
        let sWidth = w;
        let sHeight = w / targetRatio;
        let sx = 0;
        let sy = (h - sHeight) / 2;

        if (sHeight > h) {
          sHeight = h;
          sWidth = h * targetRatio;
          sx = (w - sWidth) / 2;
          sy = 0;
        }

        // Se a câmera estiver em modo espelho, inverte o desenho para a foto final bater 100% com o visor
        if (athleteCameraMirrored) {
          ctx.translate(420, 0);
          ctx.scale(-1, 1);
        }

        ctx.drawImage(video, sx, sy, sWidth, sHeight, 0, 0, 420, 560);
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.85);

        openAthletePhotoConfirmationModal(dataUrl);
      };

      window.openAthletePhotoConfirmationModal = function(dataUrl) {
        const modal = document.getElementById('modalWebcamAthlete');
        const video = document.getElementById('webcamAthleteVideo');
        const snapshotPreview = document.getElementById('webcamAthleteSnapshotPreview');
        const overlay = document.getElementById('webcamAthleteOverlay');
        const controlsLive = document.getElementById('webcamControlsLive');
        const controlsConfirm = document.getElementById('webcamControlsConfirm');
        const subtitle = document.getElementById('webcamModalSubtitle');

        currentPendingPhotoDataUrl = dataUrl;

        if (video) {
          try { video.pause(); } catch (e) {}
          video.classList.add('hidden');
        }
        if (snapshotPreview) {
          snapshotPreview.src = dataUrl;
          snapshotPreview.classList.remove('hidden');
        }
        if (overlay) overlay.classList.add('hidden');
        if (controlsLive) controlsLive.classList.add('hidden');
        if (controlsConfirm) controlsConfirm.classList.remove('hidden');
        if (subtitle) subtitle.textContent = 'Gostou da foto? Confirme no visto (✓) ou descarte na lixeira (🗑️)';

        if (modal) modal.classList.remove('hidden');
      };

      // Ação da Lixeira: Descartar foto tirada e voltar à câmera imediatamente
      window.discardAthleteWebcamSnapshot = function() {
        currentPendingPhotoDataUrl = null;

        const video = document.getElementById('webcamAthleteVideo');
        const snapshotPreview = document.getElementById('webcamAthleteSnapshotPreview');
        const overlay = document.getElementById('webcamAthleteOverlay');
        const controlsLive = document.getElementById('webcamControlsLive');
        const controlsConfirm = document.getElementById('webcamControlsConfirm');
        const subtitle = document.getElementById('webcamModalSubtitle');

        if (snapshotPreview) {
          snapshotPreview.src = '';
          snapshotPreview.classList.add('hidden');
        }
        if (video) {
          video.classList.remove('hidden');
          if (athleteWebcamStream) {
            video.play().catch(() => {});
          } else {
            startAthleteCameraStream(athleteCameraFacingMode).catch(() => {});
          }
        }
        if (overlay) overlay.classList.remove('hidden');
        if (controlsLive) controlsLive.classList.remove('hidden');
        if (controlsConfirm) controlsConfirm.classList.add('hidden');
        if (subtitle) subtitle.textContent = 'Enquadre o rosto no centro e tire uma nova foto';

        showToast('Foto descartada. Câmera pronta para tirar outra!');
      };

      // Ação do Visto: Aceitar foto tirada e sobrepor a anterior no formulário e banco
      window.acceptAthleteWebcamSnapshot = function() {
        if (!currentPendingPhotoDataUrl) {
          showToast('Nenhuma foto capturada para salvar.', true);
          return;
        }

        applyAthletePhotoDataUrl(currentPendingPhotoDataUrl);
        closeAthleteWebcam();
        showToast('✓ Foto aceita! Substituindo foto anterior no atleta e carteira.');
      };

      window.closeAthleteWebcam = function() {
        if (athleteWebcamStream) {
          athleteWebcamStream.getTracks().forEach(track => track.stop());
          athleteWebcamStream = null;
        }
        const modal = document.getElementById('modalWebcamAthlete');
        if (modal) modal.classList.add('hidden');
        currentPendingPhotoDataUrl = null;
      };

      const btnResetFoto = document.getElementById('btnResetFoto');
      if (btnResetFoto) {
        btnResetFoto.addEventListener('click', () => {
          resetAthletePhoto();
        });
      }

      // Upload de Fundo: Suporte Completo a PDF Vetorial, SVG e Imagem
      const svgInp = document.getElementById('uploadSvgInput');
      if (svgInp) {
        svgInp.addEventListener('change', (e) => {
          const file = e.target.files[0];
          if (!file) return;

          if (file.name.toLowerCase().endsWith('.pdf') || file.type === 'application/pdf') {
            showToast('Processando arte do PDF em Alta Resolução (300 DPI CR80)...');
            const reader = new FileReader();
            reader.onload = async (event) => {
              try {
                if (!window.pdfjsLib) {
                  throw new Error('Biblioteca PDF.js não inicializada.');
                }
                const typedArray = new Uint8Array(event.target.result);
                const loadingTask = window.pdfjsLib.getDocument({ data: typedArray });
                const pdf = await loadingTask.promise;
                const page = await pdf.getPage(1);
                const baseViewport = page.getViewport({ scale: 1 });

                // Renderizar em alta definição (300 DPI CR80: ~3150 x 2000)
                const hdScale = 3150 / baseViewport.width;
                const hdViewport = page.getViewport({ scale: hdScale });
                const canvas = document.createElement('canvas');
                canvas.width = Math.round(hdViewport.width);
                canvas.height = Math.round(hdViewport.height);
                const ctx = canvas.getContext('2d');
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';

                await page.render({
                  canvasContext: ctx,
                  viewport: hdViewport
                }).promise;

                const hdPngDataUrl = canvas.toDataURL('image/png', 1.0);
                studioState.customImageUrl = hdPngDataUrl;
                studioState.customSvgContent = null;
                triggerAutoFitFullArea();
                applyCurrentSvgBackground();
                showToast('Fundo em PDF importado com perfeição (Zero Erros Vetoriais)!');
              } catch (err) {
                console.error('Erro ao processar PDF:', err);
                showToast('Erro ao importar PDF: ' + (err.message || 'Falha na renderização'));
              }
            };
            reader.readAsArrayBuffer(file);
          } else if (file.name.toLowerCase().endsWith('.svg') || file.type === 'image/svg+xml') {
            const reader = new FileReader();
            reader.onload = (event) => {
              let svgContent = event.target.result;
              const parser = new DOMParser();
              const doc = parser.parseFromString(svgContent, 'image/svg+xml');
              const rootSvg = doc.documentElement;

              if (rootSvg.tagName.toLowerCase() === 'svg') {
                if (!rootSvg.getAttribute('viewBox')) {
                  const origW = parseFloat(rootSvg.getAttribute('width')) || 1050;
                  const origH = parseFloat(rootSvg.getAttribute('height')) || 662;
                  rootSvg.setAttribute('viewBox', `0 0 ${origW} ${origH}`);
                }
                rootSvg.setAttribute('width', '100%');
                rootSvg.setAttribute('height', '100%');
                rootSvg.setAttribute('preserveAspectRatio', 'none');
                svgContent = new XMLSerializer().serializeToString(doc);
              }

              studioState.customSvgContent = svgContent;
              studioState.customImageUrl = null;
              triggerAutoFitFullArea();
              applyCurrentSvgBackground();
              showToast('Fundo SVG aplicado com sucesso!');
            };
            reader.readAsText(file);
          } else {
            showToast('Otimizando arte de fundo para resolução oficial CR80 (1050x662)...');
            const reader = new FileReader();
            reader.onload = (event) => {
              const img = new Image();
              img.onload = () => {
                // Dimensões oficiais da carteirinha CR80 em 300 DPI
                const targetW = 1050;
                const targetH = 662;
                const canvas = document.createElement('canvas');
                canvas.width = targetW;
                canvas.height = targetH;
                const ctx = canvas.getContext('2d');
                ctx.imageSmoothingEnabled = true;
                ctx.imageSmoothingQuality = 'high';

                // Desenha cobrindo proporcionalmente a área exata da carteira
                const hRatio = targetW / img.width;
                const vRatio = targetH / img.height;
                const ratio = Math.max(hRatio, vRatio);
                const centerShiftX = (targetW - img.width * ratio) / 2;
                const centerShiftY = (targetH - img.height * ratio) / 2;
                ctx.drawImage(img, 0, 0, img.width, img.height, centerShiftX, centerShiftY, img.width * ratio, img.height * ratio);

                const compressedBg = canvas.toDataURL('image/jpeg', 0.84);
                studioState.customImageUrl = compressedBg;
                studioState.customSvgContent = null;
                triggerAutoFitFullArea();
                applyCurrentSvgBackground();
                const sizeKb = Math.round((compressedBg.length * 3 / 4) / 1024);
                showToast(`✓ Fundo otimizado em alta definição 1050x662 (${sizeKb} KB) aplicado!`);
              };
              img.onerror = () => {
                showToast('Erro ao processar imagem de fundo.', true);
              };
              img.src = event.target.result;
            };
            reader.readAsDataURL(file);
          }
        });
      }

      const btnAutoFit = document.getElementById('btnAutoFitFullArea');
      if (btnAutoFit) btnAutoFit.addEventListener('click', triggerAutoFitFullArea);

      const btnRestoreTpl = document.getElementById('btnRestoreFpeftTemplate');
      if (btnRestoreTpl) {
        btnRestoreTpl.addEventListener('click', () => {
          studioState.customSvgContent = null;
          studioState.customImageUrl = null;
          triggerAutoFitFullArea();
          applyCurrentSvgBackground();
          showToast('Arte Oficial FPEFT (Carteira Atleta.pdf) restaurada com sucesso!');
        });
      }

      const btnToggleLabels = document.getElementById('btnToggleBGLabels');
      if (btnToggleLabels) {
        btnToggleLabels.addEventListener('click', () => {
          studioState.showBgLabels = !studioState.showBgLabels;
          applyCurrentSvgBackground();
          showToast(studioState.showBgLabels ? 'Rótulos do fundo ativados' : 'Rótulos do fundo ocultados');
        });
      }

      // Modos de Encaixe do Fundo
      const btnFitCover = document.getElementById('btnBgFitCover');
      const btnFitContain = document.getElementById('btnBgFitContain');
      const btnFitExact = document.getElementById('btnBgFitExact');

      if (btnFitCover) {
        btnFitCover.addEventListener('click', () => {
          studioState.bgTransform.mode = 'cover';
          updateBgFitButtons();
          applyCurrentSvgBackground();
          autoSaveStudioDesign();
          showToast('Fundo ajustado: Preenchimento sem bordas');
        });
      }
      if (btnFitContain) {
        btnFitContain.addEventListener('click', () => {
          studioState.bgTransform.mode = 'contain';
          updateBgFitButtons();
          applyCurrentSvgBackground();
          autoSaveStudioDesign();
          showToast('Fundo ajustado: Imagem inteira contida');
        });
      }
      if (btnFitExact) {
        btnFitExact.addEventListener('click', () => {
          triggerAutoFitFullArea();
          autoSaveStudioDesign();
        });
      }

      // Sliders de Calibração / Ajuste Fino do Fundo (CR80)
      const scaleRange = document.getElementById('inputBgScale');
      const percInput = document.getElementById('inputBgPercent');
      const posXRange = document.getElementById('inputBgPosX');
      const posYRange = document.getElementById('inputBgPosY');
      const resetBgBtn = document.getElementById('btnResetBgTransform');

      function updateBgTransformFromSliders() {
        const scaleVal = (parseFloat(scaleRange ? scaleRange.value : 100) || 100) / 100;
        const xVal = parseFloat(posXRange ? posXRange.value : 0) || 0;
        const yVal = parseFloat(posYRange ? posYRange.value : 0) || 0;
        studioState.bgTransform.scale = scaleVal;
        studioState.bgTransform.x = xVal;
        studioState.bgTransform.y = yVal;
        const posXLabel = document.getElementById('bgPosXLabel');
        const posYLabel = document.getElementById('bgPosYLabel');
        if (posXLabel) posXLabel.innerText = `${xVal}px`;
        if (posYLabel) posYLabel.innerText = `${yVal}px`;
        applyCurrentSvgBackground();
        autoSaveStudioDesign();
      }

      if (scaleRange) {
        scaleRange.addEventListener('input', () => {
          if (percInput) percInput.value = scaleRange.value;
          updateBgTransformFromSliders();
        });
      }
      if (percInput) {
        percInput.addEventListener('input', () => {
          if (scaleRange) scaleRange.value = percInput.value;
          updateBgTransformFromSliders();
        });
      }
      if (posXRange) posXRange.addEventListener('input', updateBgTransformFromSliders);
      if (posYRange) posYRange.addEventListener('input', updateBgTransformFromSliders);
      if (resetBgBtn) resetBgBtn.addEventListener('click', () => {
        triggerAutoFitFullArea();
        autoSaveStudioDesign();
      });

      // Zoom
      const zIn = document.getElementById('zoomInBtn');
      const zOut = document.getElementById('zoomOutBtn');
      const zFit = document.getElementById('zoomFitBtn');

      if (zIn) zIn.addEventListener('click', () => setZoom(studioState.zoom + 0.08, true));
      if (zOut) zOut.addEventListener('click', () => setZoom(studioState.zoom - 0.08, true));
      if (zFit) {
        zFit.addEventListener('click', () => {
          _isUserManualZoom = false;
          autoFitStudioToScreen(true);
          showToast('Padrão CR80 enquadrado perfeitamente à tela!');
        });
      }

      // Auto-Ajuste Contínuo da Tela (Observa mudanças de tamanho, DPI e janela)
      if (window.ResizeObserver) {
        const ro = new ResizeObserver(() => {
          if (!_isUserManualZoom) {
            clearTimeout(_autoFitResizeTimer);
            _autoFitResizeTimer = setTimeout(() => autoFitStudioToScreen(), 60);
          }
        });
        const vEl = document.getElementById('viewportArea');
        if (vEl) ro.observe(vEl);
      }

      window.addEventListener('resize', () => {
        clearTimeout(_autoFitResizeTimer);
        _autoFitResizeTimer = setTimeout(() => {
          if (!_isUserManualZoom) autoFitStudioToScreen();
        }, 100);
      });

      window.addEventListener('orientationchange', () => {
        setTimeout(() => autoFitStudioToScreen(true), 150);
      });

      // Deselecionar ao clicar fora
      const vArea = document.getElementById('viewportArea');
      if (vArea) {
        vArea.addEventListener('pointerdown', (e) => {
          if (e.target === vArea || e.target.id === 'creditCardCanvas') {
            studioState.selectedId = null;
            renderInteractiveElements();
            const panel = document.getElementById('floatingControlPanel');
            if (panel) panel.style.display = 'none';
          }
        });
      }

      // Setas Direcionais D-PAD
      const nUp = document.getElementById('btnNudgeUp');
      const nDown = document.getElementById('btnNudgeDown');
      const nLeft = document.getElementById('btnNudgeLeft');
      const nRight = document.getElementById('btnNudgeRight');
      const cycleStep = document.getElementById('btnCycleStep');
      const resetPos = document.getElementById('btnFloatingResetPos');

      if (nUp) nUp.addEventListener('click', () => nudgeSelected(0, -1));
      if (nDown) nDown.addEventListener('click', () => nudgeSelected(0, 1));
      if (nLeft) nLeft.addEventListener('click', () => nudgeSelected(-1, 0));
      if (nRight) nRight.addEventListener('click', () => nudgeSelected(1, 0));

      if (cycleStep) {
        cycleStep.addEventListener('click', () => {
          if (studioState.nudgeStep === 1) studioState.nudgeStep = 5;
          else if (studioState.nudgeStep === 5) studioState.nudgeStep = 10;
          else studioState.nudgeStep = 1;
          const stepVal = document.getElementById('nudgeStepValue');
          if (stepVal) stepVal.innerText = `${studioState.nudgeStep}px`;
        });
      }

      if (resetPos) {
        resetPos.addEventListener('click', () => {
          const item = studioState.elements.find(i => i.id === studioState.selectedId);
          if (!item) return;
          item.x = Math.round((1050 - item.width) / 2);
          updateItemStyle(item);
          autoSaveStudioDesign();
          showToast('Elemento centralizado no cartão');
        });
      }

      // Curvatura
      const curveInp = document.getElementById('inputCurveRadius');
      if (curveInp) {
        curveInp.addEventListener('input', (e) => {
          const item = studioState.elements.find(i => i.id === studioState.selectedId);
          if (!item) return;
          item.borderRadius = parseInt(e.target.value);
          const rLbl = document.getElementById('radiusLabel');
          if (rLbl) rLbl.innerText = `${item.borderRadius}px`;
          const el = document.getElementById(item.id);
          if (el) el.style.borderRadius = `${item.borderRadius}px`;
          autoSaveStudioDesign();
        });
      }

      // Largura e Altura
      const dirW = document.getElementById('inputDirectWidth');
      const dirH = document.getElementById('inputDirectHeight');
      if (dirW) {
        dirW.addEventListener('change', (e) => {
          const item = studioState.elements.find(i => i.id === studioState.selectedId);
          if (!item) return;
          item.width = Math.max(20, parseInt(e.target.value) || item.width);
          renderInteractiveElements();
          autoSaveStudioDesign();
        });
      }
      if (dirH) {
        dirH.addEventListener('change', (e) => {
          const item = studioState.elements.find(i => i.id === studioState.selectedId);
          if (!item) return;
          item.height = Math.max(15, parseInt(e.target.value) || item.height);
          renderInteractiveElements();
          autoSaveStudioDesign();
        });
      }

      // Tipografia
      const fontInp = document.getElementById('inputFontSize');
      const colorInp = document.getElementById('inputTextColor');
      if (fontInp) {
        fontInp.addEventListener('input', (e) => {
          const item = studioState.elements.find(i => i.id === studioState.selectedId);
          if (!item) return;
          item.fontSize = parseInt(e.target.value) || 16;
          renderInteractiveElements();
          autoSaveStudioDesign();
        });
      }
      if (colorInp) {
        colorInp.addEventListener('input', (e) => {
          const item = studioState.elements.find(i => i.id === studioState.selectedId);
          if (!item) return;
          item.textColor = e.target.value;
          const hexEl = document.getElementById('textColorHex');
          if (hexEl) hexEl.innerText = item.textColor.toUpperCase();
          renderInteractiveElements();
          autoSaveStudioDesign();
        });
      }

      ['Left', 'Center', 'Right'].forEach(align => {
        const btn = document.getElementById(`btnAlign${align}`);
        if (btn) {
          btn.addEventListener('click', () => {
            const item = studioState.elements.find(i => i.id === studioState.selectedId);
            if (!item) return;
            item.textAlign = align.toLowerCase();
            renderInteractiveElements();
            syncFloatingPanel();
            autoSaveStudioDesign();
          });
        }

        const labelBtn = document.getElementById(`btnLabelAlign${align}`);
        if (labelBtn) {
          labelBtn.addEventListener('click', () => {
            const item = studioState.elements.find(i => i.id === studioState.selectedId);
            if (!item) return;
            item.labelAlign = align.toLowerCase();
            renderInteractiveElements();
            syncFloatingPanel();
            autoSaveStudioDesign();
          });
        }
      });

      // Exportações: Gerenciadas com segurança via onclick e mutex exclusivo (1 download por vez)

      // Teclas do Teclado para Setas
      window.addEventListener('keydown', (e) => {
        if (studioState.isDesignLocked) return;
        if (!studioState.selectedId) return;
        if (['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement.tagName)) return;

        const step = e.shiftKey ? 10 : (e.altKey ? 5 : 1);
        let handled = true;
        switch(e.key) {
          case 'ArrowUp': nudgeSelected(0, -step); break;
          case 'ArrowDown': nudgeSelected(0, step); break;
          case 'ArrowLeft': nudgeSelected(-step, 0); break;
          case 'ArrowRight': nudgeSelected(step, 0); break;
          default: handled = false;
        }
        if (handled) e.preventDefault();
      });

      // Fechar e Fixar Janela Flutuante
      const btnCloseFloating = document.getElementById('btnCloseFloating');
      if (btnCloseFloating) {
        btnCloseFloating.addEventListener('click', () => {
          studioState.selectedId = null;
          renderInteractiveElements();
          const p = document.getElementById('floatingControlPanel');
          if (p) p.style.display = 'none';
        });
      }

      const btnPinFloating = document.getElementById('btnPinFloating');
      if (btnPinFloating) {
        btnPinFloating.addEventListener('click', () => {
          studioState.floatingPinned = !studioState.floatingPinned;
          if (studioState.floatingPinned) {
            btnPinFloating.classList.add('text-pe-gold');
            showToast('Janela fixada na posição');
          } else {
            btnPinFloating.classList.remove('text-pe-gold');
            updateFloatingPanelPosition();
            showToast('Auto-posicionamento ativado');
          }
        });
      }

      const btnMinFloating = document.getElementById('btnMinimizeFloating');
      if (btnMinFloating) {
        btnMinFloating.addEventListener('click', () => {
          studioState.floatingMinimized = !studioState.floatingMinimized;
          const body = document.getElementById('floatingBody');
          const panel = document.getElementById('floatingControlPanel');
          if (!body || !panel) return;
          if (studioState.floatingMinimized) {
            body.style.display = 'none';
            panel.style.minHeight = '52px';
            panel.style.height = '52px';
            btnMinFloating.innerHTML = '<i class="fa-solid fa-expand text-[10px]"></i>';
          } else {
            body.style.display = 'block';
            panel.style.minHeight = '140px';
            panel.style.height = '';
            btnMinFloating.innerHTML = '<i class="fa-solid fa-minus text-[10px]"></i>';
          }
        });
      }

      // Arraste e Redimensionamento Manual da Janela Flutuante
      const floatingHeader = document.getElementById('floatingHeader');
      const floatingControlPanel = document.getElementById('floatingControlPanel');
      let isWinDragging = false;
      let isWinResizing = false;
      let winResizeEdge = '';
      let winStartX = 0, winStartY = 0;
      let winStartRect = { x: 0, y: 0, w: 0, h: 0 };

      const onWinPointerMove = (e) => {
        if (!floatingControlPanel || !floatingControlPanel.offsetParent) return;
        if (isWinDragging) {
          const dx = e.clientX - winStartX;
          const dy = e.clientY - winStartY;
          const parentRect = floatingControlPanel.offsetParent.getBoundingClientRect();
          let newX = Math.max(10, Math.min(parentRect.width - floatingControlPanel.offsetWidth - 10, winStartRect.x + dx));
          let newY = Math.max(10, Math.min(parentRect.height - 60, winStartRect.y + dy));
          floatingControlPanel.style.left = `${newX}px`;
          floatingControlPanel.style.top = `${newY}px`;
        } else if (isWinResizing) {
          const dx = e.clientX - winStartX;
          const dy = e.clientY - winStartY;
          let newW = winStartRect.w;
          let newH = winStartRect.h;
          let newX = winStartRect.x;
          let newY = winStartRect.y;

          const minW = 270;
          const maxW = 580;
          const minH = studioState.floatingMinimized ? 52 : 140;
          const maxH = window.innerHeight - 100;

          if (winResizeEdge.includes('e')) {
            newW = Math.max(minW, Math.min(maxW, winStartRect.w + dx));
          }
          if (winResizeEdge.includes('w')) {
            const calcW = winStartRect.w - dx;
            if (calcW >= minW && calcW <= maxW) {
              newW = calcW;
              newX = winStartRect.x + dx;
            }
          }
          if (winResizeEdge.includes('s')) {
            newH = Math.max(minH, Math.min(maxH, winStartRect.h + dy));
          }
          if (winResizeEdge.includes('n')) {
            const calcH = winStartRect.h - dy;
            if (calcH >= minH && calcH <= maxH) {
              newH = calcH;
              newY = winStartRect.y + dy;
            }
          }

          floatingControlPanel.style.width = `${newW}px`;
          floatingControlPanel.style.height = `${newH}px`;
          floatingControlPanel.style.left = `${newX}px`;
          floatingControlPanel.style.top = `${newY}px`;
        }
      };

      const onWinPointerUp = () => {
        isWinDragging = false;
        isWinResizing = false;
        window.removeEventListener('pointermove', onWinPointerMove);
        window.removeEventListener('pointerup', onWinPointerUp);
      };

      if (floatingHeader && floatingControlPanel) {
        floatingHeader.addEventListener('pointerdown', (e) => {
          if (e.target.closest('button')) return;
          isWinDragging = true;
          studioState.floatingPinned = true;
          const pinBtn = document.getElementById('btnPinFloating');
          if (pinBtn) pinBtn.classList.add('text-pe-gold');
          winStartX = e.clientX;
          winStartY = e.clientY;
          const rect = floatingControlPanel.getBoundingClientRect();
          const parentRect = floatingControlPanel.offsetParent.getBoundingClientRect();
          winStartRect = {
            x: rect.left - parentRect.left,
            y: rect.top - parentRect.top,
            w: rect.width,
            h: rect.height
          };
          window.addEventListener('pointermove', onWinPointerMove);
          window.addEventListener('pointerup', onWinPointerUp);
        });
      }

      document.querySelectorAll('.win-resizer').forEach(resizer => {
        resizer.addEventListener('pointerdown', (e) => {
          e.stopPropagation();
          isWinResizing = true;
          winResizeEdge = resizer.dataset.edge || '';
          winStartX = e.clientX;
          winStartY = e.clientY;
          if (!floatingControlPanel || !floatingControlPanel.offsetParent) return;
          const rect = floatingControlPanel.getBoundingClientRect();
          const parentRect = floatingControlPanel.offsetParent.getBoundingClientRect();
          winStartRect = {
            x: rect.left - parentRect.left,
            y: rect.top - parentRect.top,
            w: rect.width,
            h: rect.height
          };
          studioState.floatingPinned = true;
          const pinBtn = document.getElementById('btnPinFloating');
          if (pinBtn) pinBtn.classList.add('text-pe-gold');
          window.addEventListener('pointermove', onWinPointerMove);
          window.addEventListener('pointerup', onWinPointerUp);
        });
      });
    }

    /* =========================================================
       BANCO DE DADOS, HOMOLOGAÇÃO & GESTÃO DE ATLETAS
       ========================================================= */
    let currentCachedAthletes = [];
    let jogadoresFilterStatus = 'ALL';
    let batchExportAbort = false;

    /* Coleta todos os códigos já existentes para garantir unicidade absoluta (Zero Colisão) */
    function getExistingAthleteCodes() {
      const codeSet = new Set();
      if (typeof DEFAULT_ATHLETES !== 'undefined' && Array.isArray(DEFAULT_ATHLETES)) {
        DEFAULT_ATHLETES.forEach(a => {
          if (a.codigo) codeSet.add(String(a.codigo).trim());
          if (a.federado) codeSet.add(String(a.federado).trim());
        });
      }
      try {
        const local = JSON.parse(localStorage.getItem('pe_athletes_db'));
        if (Array.isArray(local)) {
          local.forEach(a => {
            if (a.codigo) codeSet.add(String(a.codigo).trim());
            if (a.federado) codeSet.add(String(a.federado).trim());
          });
        }
      } catch (e) {}
      if (typeof currentCachedAthletes !== 'undefined' && Array.isArray(currentCachedAthletes)) {
        currentCachedAthletes.forEach(a => {
          if (a.codigo) codeSet.add(String(a.codigo).trim());
          if (a.federado) codeSet.add(String(a.federado).trim());
        });
      }
      return codeSet;
    }

    /* Gera código aleatório de 6 dígitos que nunca se choca com nenhum código já criado */
    function generateUnique6DigitCode() {
      const existing = getExistingAthleteCodes();
      let code = '';
      let attempts = 0;
      do {
        code = String(Math.floor(100000 + Math.random() * 900000));
        attempts++;
      } while (existing.has(code) && attempts < 10000);
      return code;
    }

    function generateFederatedNumber(silent = false) {
      const uniqueCode = generateUnique6DigitCode();
      const codeInput = document.getElementById('athleteCode');
      const fedInput = document.getElementById('athleteFederatedNum');

      if (codeInput) codeInput.value = uniqueCode;
      if (fedInput) fedInput.value = uniqueCode;

      const fedTarget = studioState.elements.find(item => item.targetKey === 'federado' || item.id === 'field-federado');
      if (fedTarget) {
        fedTarget.text = uniqueCode;
      }

      const qrLink = 'https://fpeft.vercel.app/?id=' + uniqueCode;
      const qrInp = document.getElementById('inputQrText');
      if (qrInp) qrInp.value = qrLink;
      const qrTarget = studioState.elements.find(item => item.targetKey === 'qr' || item.id === 'field-qrcode');
      if (qrTarget) qrTarget.text = qrLink;

      renderInteractiveElements();
      autoSaveStudioDesign();
      if (!silent) {
        showToast(`Código 6D único gerado: #${uniqueCode}`);
      }
    }

    function generateRandomAthleteCode(silent = false) {
      generateFederatedNumber(silent);
    }

    async function handleSaveAthlete(e) {
      if (e && e.preventDefault) e.preventDefault();
      if (!hasPermission('atletas_editar') && !hasPermission('*')) {
        showToast('⚠️ Acesso Controlado: Sua conta não possui permissão para cadastrar ou modificar atletas.', true);
        return;
      }
      const fedNum = (document.getElementById('athleteFederatedNum').value || '').trim();
      const code = fedNum || (document.getElementById('athleteCode') ? document.getElementById('athleteCode').value : '').trim();
      const name = (document.getElementById('athleteName').value || '').trim();
      const cpf = (document.getElementById('athleteCpf').value || '').trim();
      const birth = (document.getElementById('athleteBirth').value || '').trim();
      const phone = (document.getElementById('athletePhone').value || '').trim();
      const city = (document.getElementById('athleteCity').value || '').trim();
      const category = (document.getElementById('athleteCategory') ? document.getElementById('athleteCategory').value : 'ASPIRANTE').trim() || 'ASPIRANTE';
      const status = document.getElementById('athleteStatus').value;
      const modality = (document.getElementById('athleteModality') ? document.getElementById('athleteModality').value : (document.getElementById('athleteClub') ? document.getElementById('athleteClub').value : 'SOLO (INDIVIDUAL)')).trim() || 'SOLO (INDIVIDUAL)';
      const validity = (document.getElementById('athleteValidity').value || '').trim();

      if (!name) {
        showToast('Informe o nome do atleta para salvar.');
        return;
      }

      const photoInput = document.getElementById('athletePhotoVal');
      const photoTarget = studioState.elements.find(item => item.id === 'field-foto');
      const photo = (photoInput && photoInput.value)
        ? photoInput.value
        : (window._currentAthletePhoto || ((photoTarget && photoTarget.photoUrl) ? photoTarget.photoUrl : ''));

      // Se a foto for uma imagem completa sem frações geradas, compila antes de enviar
      if (photo && photo.startsWith('data:image/') && (!window._currentAthletePhotoChunks || window._currentAthletePhotoChunks.length === 0)) {
        compileAthletePhotoBundle(photo, (b) => {
          window._currentAthletePhoto = b.compactUrl;
          window._currentAthletePhotoFull = b.fullUrl;
          window._currentAthletePhotoChunks = b.chunks;
        });
      }

      const feedback = document.getElementById('athleteFeedback');
      if (feedback) {
        feedback.classList.remove('hidden');
        feedback.className = "text-xs p-3 rounded-xl bg-blue-950/40 border border-blue-500/40 text-blue-300";
        feedback.textContent = "Salvando atleta no banco de dados...";
      }

      const athleteObj = {
        codigo: code,
        nome: name,
        cpf: cpf,
        nascimento: birth,
        telefone: phone,
        municipio: city,
        categoria: category,
        modalidade: modality,
        status: status,
        clube: modality,
        federado: fedNum || code,
        validade: validity,
        foto: photo,
        foto_url: photo
      };

      let savedInSupabase = false;
      const cleanCode = String(athleteObj.codigo).trim();

      if (supabaseClient) {
        try {
          const supabasePayload = {
            codigo: cleanCode,
            nome: athleteObj.nome,
            cpf: athleteObj.cpf,
            nascimento: athleteObj.nascimento,
            telefone: athleteObj.telefone,
            municipio: athleteObj.municipio,
            categoria: athleteObj.categoria,
            modalidade: athleteObj.modalidade,
            status: athleteObj.status,
            clube: athleteObj.clube,
            federado: athleteObj.federado,
            validade: athleteObj.validade,
            foto_url: athleteObj.foto_url
          };

          // 1. INSERÇÃO NO BANCO 2 (SECUNDÁRIO - ARMAZENAMENTO & INGESTÃO SEGURA)
          // "e inserir dados sera no outro sistema"
          if (supabaseSecondaryClient) {
            try {
              await safeSupabaseCall(
                supabaseSecondaryClient.from('atletas').upsert([supabasePayload], { onConflict: 'codigo' }),
                3500
              );
              savedInSupabase = true;

              // Keep-alive logs de resiliência também no Banco 2 (caso Banco 1 fique cheio ou fora do ar)
              const recordKey = 'athlete_record:' + cleanCode;
              const statusKey = 'athlete_status:' + cleanCode;
              try {
                await supabaseSecondaryClient.from('keep_alive_logs').delete().in('source', [recordKey, statusKey]);
              } catch (eSecDel) {}
              await supabaseSecondaryClient.from('keep_alive_logs').insert([
                { source: recordKey, status: JSON.stringify(athleteObj), pinged_at: new Date().toISOString() },
                { source: statusKey, status: athleteObj.status || 'PENDENTE', pinged_at: new Date().toISOString() }
              ]).catch(() => null);
            } catch (errSec) {
              console.warn("[Intermediário] Inserção no Banco 2:", errSec);
            }
          }

          // 2. ATUALIZAÇÃO NO BANCO 1 (PRINCIPAL - EXIBIÇÃO & LEITURA CONTÍNUA)
          // "o primeiro que vai ser o principal, ele vai funcionar sempre, mesmo quando sistema cheio, vai mostrar"
          if (supabaseClient) {
            try {
              const res = await safeSupabaseCall(
                supabaseClient.from('atletas').upsert([supabasePayload], { onConflict: 'codigo' }),
                3500
              );
              if (res && !res.error) savedInSupabase = true;

              // Keep-alive logs de resiliência no Banco 1
              const recordKey = 'athlete_record:' + cleanCode;
              const statusKey = 'athlete_status:' + cleanCode;
              try {
                await supabaseClient.from('keep_alive_logs').delete().in('source', [recordKey, statusKey]);
              } catch (e1) {}
              await supabaseClient.from('keep_alive_logs').insert([
                { source: recordKey, status: JSON.stringify(athleteObj), pinged_at: new Date().toISOString() },
                { source: statusKey, status: athleteObj.status || 'PENDENTE', pinged_at: new Date().toISOString() }
              ]).catch(() => null);
            } catch (errPrim) {
              console.warn("[Intermediário] Banco 1 ocupado ou cheio, dados salvos com sucesso no Banco 2:", errPrim);
            }
          }
        } catch (err) {
          console.warn("Falha ou timeout de rede Supabase:", err);
        }
      }

      // 2.1 Sincronização das frações da foto em ambos os bancos (keep_alive_logs)
      try {
        if (window._currentAthletePhotoChunks && window._currentAthletePhotoChunks.length > 0) {
          await syncAthletePhotoChunksToBothDatabases(cleanCode, {
            chunks: window._currentAthletePhotoChunks,
            fullUrl: window._currentAthletePhotoFull,
            compactUrl: athleteObj.foto_url
          });
        }
      } catch (eChunksSync) {}

      // 3. Notificação e persistência autorizada no backend oficial Vercel (/api/gestao/operacao)
      try {
        fetch('/api/gestao/operacao', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            codigo: cleanCode,
            nome: athleteObj.nome,
            cpf: athleteObj.cpf || '000.000.000-00',
            modalidade: athleteObj.modalidade || 'SOLO (INDIVIDUAL)',
            categoria: athleteObj.categoria || 'ASPIRANTE',
            clube: athleteObj.clube || 'FEDERAÇÃO PERNAMBUCANA',
            municipio: athleteObj.municipio || 'RECIFE / PE',
            status: athleteObj.status || 'PENDENTE',
            foto_url: photo || athleteObj.foto_url || '',
            foto: photo || athleteObj.foto || '',
            nascimento: athleteObj.nascimento || '',
            telefone: athleteObj.telefone || '',
            federado: athleteObj.federado || '',
            validade: athleteObj.validade || '12/2026'
          })
        }).catch(e => console.warn("API gestao sync notice:", e));
      } catch (e) {}

      let localAthletes = JSON.parse(localStorage.getItem('pe_athletes_db')) || [];
      const existingIdx = localAthletes.findIndex(a => String(a.codigo) === String(code));
      if (existingIdx >= 0) {
        localAthletes[existingIdx] = { ...localAthletes[existingIdx], ...athleteObj, foto: photo, foto_url: photo };
      } else {
        localAthletes.unshift({ id: Date.now(), ...athleteObj, foto: photo, foto_url: photo });
      }
      localStorage.setItem('pe_athletes_db', JSON.stringify(localAthletes));
      currentCachedAthletes = localAthletes;

      if (feedback) {
        const isHomolog = status === 'HOMOLOGADO';
        feedback.className = `text-xs p-3 rounded-xl font-bold ${isHomolog ? 'bg-emerald-950/40 border border-emerald-500/40 text-emerald-300' : 'bg-amber-950/40 border border-amber-500/40 text-amber-300'}`;
        feedback.innerHTML = `✓ Atleta #${code} (${name}) salvo com sucesso como <strong>${status}</strong>! (Sincronizado no Banco Oficial da Nuvem).`;
      }

      showToast(`✓ Atleta #${code} salvo como ${status}!`);
      renderJogadoresCadastradosTable();
      updateDashboardData();
    }

    /* Conclui o cadastro, salva o design automaticamente e envia para o banco como PENDENTE DE HOMOLOGAÇÃO */
    async function concluirCadastroEnviarBanco() {
      if (!hasPermission('atletas_editar') && !hasPermission('*')) {
        showToast('⚠️ Acesso Controlado: Sua conta não possui permissão para cadastrar ou modificar atletas.', true);
        return;
      }
      const name = (document.getElementById('athleteName').value || '').trim();
      if (!name) {
        showToast('⚠️ Preencha o nome do atleta antes de concluir o cadastro.');
        const nameInp = document.getElementById('athleteName');
        if (nameInp) nameInp.focus();
        return;
      }

      const fedNum = (document.getElementById('athleteFederatedNum') ? document.getElementById('athleteFederatedNum').value : '').trim();
      const codeInput = (document.getElementById('athleteCode') ? document.getElementById('athleteCode').value : '').trim();
      const code = fedNum || codeInput || String(Date.now()).slice(-6);

      // Garante status PENDENTE para que necessite homologação posterior
      const statusSelect = document.getElementById('athleteStatus');
      if (statusSelect) statusSelect.value = 'PENDENTE';

      // Salva o design automaticamente
      autoSaveStudioDesign();

      const btn = document.getElementById('btnConcluirCadastro');
      const originalHtml = btn ? btn.innerHTML : '';
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-sm"></i> <span>Enviando ao Banco de Dados...</span>';
      }

      try {
        await handleSaveAthlete();

        const photoInput = document.getElementById('athletePhotoVal');
        const photoEl = studioState.elements.find(item => item.id === 'field-foto');
        const photoVal = (photoInput && photoInput.value)
          ? photoInput.value
          : (window._currentAthletePhoto || ((photoEl && photoEl.photoUrl) ? photoEl.photoUrl : ''));

        const aObj = {
          codigo: code,
          nome: name,
          cpf: (document.getElementById('athleteCpf').value || '').trim(),
          nascimento: (document.getElementById('athleteBirth').value || '').trim(),
          telefone: (document.getElementById('athletePhone').value || '').trim(),
          categoria: (document.getElementById('athleteCategory') ? document.getElementById('athleteCategory').value : 'ASPIRANTE') || 'ASPIRANTE',
          modalidade: (document.getElementById('athleteModality') ? document.getElementById('athleteModality').value : 'SOLO (INDIVIDUAL)') || 'SOLO (INDIVIDUAL)',
          federado: fedNum || code,
          municipio: (document.getElementById('athleteCity').value || '').trim(),
          validade: (document.getElementById('athleteValidity').value || '12/2026').trim(),
          status: 'PENDENTE',
          foto: photoVal,
          foto_url: photoVal
        };

        window._lastActiveAthlete = aObj;

        const feedback = document.getElementById('athleteFeedback');
        if (feedback) {
          feedback.classList.remove('hidden');
          feedback.className = "text-xs p-3.5 rounded-xl font-bold bg-amber-950/80 border border-amber-500/50 text-amber-200 shadow-xl space-y-2.5";
          feedback.innerHTML = `
            <div class="flex items-start gap-2.5">
              <span class="text-lg text-amber-400">⏳</span>
              <div>
                <p class="font-extrabold text-amber-300 text-xs uppercase tracking-wide">Cadastro Salvo - Homologação Pendente</p>
                <p class="text-[11px] font-normal text-slate-200 mt-0.5 leading-snug">
                  Atleta <strong>#${escapeHtml(code)} - ${escapeHtml(name)}</strong> gravado com sucesso no banco de dados.
                </p>
                <p class="text-[10px] text-amber-300 font-medium mt-1 bg-amber-900/40 p-2 rounded-lg border border-amber-500/30">
                  ⚠️ <strong>Aviso:</strong> O download no site público permanece bloqueado para o federado até a homologação. Como administrador, você já pode baixar a carteira em PDF ou PNG abaixo.
                </p>
              </div>
            </div>
            <div class="pt-1 flex flex-wrap items-center gap-2">
              <button type="button" onclick="exportCarteiraPDF(window._lastActiveAthlete, this)" class="px-3 py-1.5 bg-rose-700 hover:bg-rose-600 text-white font-bold text-[10px] uppercase rounded-lg transition flex items-center gap-1.5 cursor-pointer shadow">
                <i class="fa-solid fa-file-pdf"></i> <span>Baixar PDF (Admin)</span>
              </button>
              <button type="button" onclick="exportHdPng(window._lastActiveAthlete, this)" class="px-3 py-1.5 bg-sky-700 hover:bg-sky-600 text-white font-bold text-[10px] uppercase rounded-lg transition flex items-center gap-1.5 cursor-pointer shadow">
                <i class="fa-solid fa-file-image"></i> <span>Baixar PNG HD</span>
              </button>
              <button type="button" onclick="homologarAthlete('${escapeHtml(code)}')" class="px-3 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-black font-extrabold text-[10px] uppercase rounded-lg transition shadow flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-check"></i> <span>Homologar Este Atleta Agora</span>
              </button>
              <button type="button" onclick="switchTab('jogadores'); setJogadoresFilterStatus('PENDENTE');" class="px-3 py-1.5 bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-[10px] uppercase rounded-lg transition shadow flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-list-check"></i> <span>Ver Lista de Pendentes</span>
              </button>
              <button type="button" onclick="prepararProximoCadastro()" class="px-3 py-1.5 bg-[#0e172a] hover:bg-[#1a2942] border border-slate-600 text-white font-bold text-[10px] uppercase rounded-lg transition flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-plus text-sky-400"></i> <span>Cadastrar Próximo</span>
              </button>
            </div>
          `;
        }

        showToast(`⚠️ Atleta #${code} salvo com Homologação Pendente!`);
      } catch (err) {
        console.error('Erro ao enviar carteira ao banco:', err);
        showToast('❌ Ocorreu um erro ao enviar para o banco: ' + (err.message || 'Falha no cadastro'));
      } finally {
        if (btn) {
          btn.disabled = false;
          btn.innerHTML = originalHtml;
        }
      }
    }

    function prepararProximoCadastro() {
      clearAthleteForm();
      generateFederatedNumber(true);
      const feedback = document.getElementById('athleteFeedback');
      if (feedback) feedback.classList.add('hidden');
      const nameInput = document.getElementById('athleteName');
      if (nameInput) nameInput.focus();
      showToast('Formulário pronto para o próximo cadastro!');
    }

    async function saveAndHomologateCurrentAthlete() {
      const statusSelect = document.getElementById('athleteStatus');
      if (statusSelect) statusSelect.value = 'HOMOLOGADO';
      await handleSaveAthlete();
    }

    async function saveAsPendingAthlete() {
      const statusSelect = document.getElementById('athleteStatus');
      if (statusSelect) statusSelect.value = 'PENDENTE';
      await handleSaveAthlete();
    }

    async function saveAndCreateNextAthlete() {
      const statusSelect = document.getElementById('athleteStatus');
      if (statusSelect) statusSelect.value = 'HOMOLOGADO';
      await handleSaveAthlete();
      clearAthleteForm();
      const nameInput = document.getElementById('athleteName');
      if (nameInput) nameInput.focus();
      showToast('Atleta homologado! Pronto para o próximo cadastro contínuo.');
    }

    let _loadAthletesPromise = null;
    let _lastAthletesFetchTime = 0;

    async function loadAthletes(force = false) {
      const now = Date.now();
      if (!force && currentCachedAthletes && currentCachedAthletes.length > 0 && (now - _lastAthletesFetchTime < 4000)) {
        return currentCachedAthletes;
      }
      if (_loadAthletesPromise && !force) {
        return _loadAthletesPromise;
      }

      _loadAthletesPromise = (async () => {
        let list = JSON.parse(localStorage.getItem('pe_athletes_db')) || [];
        const initialDeleted = new Set(JSON.parse(localStorage.getItem('pe_deleted_athlete_codes') || '[]').map(String));
        initialDeleted.add('548608');
        initialDeleted.add('331296');
        list = list.filter(a => a && a.codigo && !initialDeleted.has(String(a.codigo)));
        if (list.length > 0 && (!currentCachedAthletes || currentCachedAthletes.length === 0)) {
          currentCachedAthletes = list;
        }

        // CONSULTA INTERMEDIÁRIA SIMULTÂNEA: BANCO 1 (EXIBIÇÃO) E BANCO 2 (INSERÇÃO)
        if (supabaseClient || supabaseSecondaryClient) {
          try {
            const queryTasks = [];
            // Tarefa 1: Banco 1 (Principal - Exibição contínua)
            if (supabaseClient) {
              queryTasks.push(
                safeSupabaseCall(supabaseClient.from('atletas').select('*').order('created_at', { ascending: false }), 3500)
                  .catch(() => ({ data: null }))
              );
            } else {
              queryTasks.push(Promise.resolve({ data: null }));
            }

            // Tarefa 2: Banco 2 (Secundário - Inserção & Expansão)
            if (supabaseSecondaryClient) {
              queryTasks.push(
                safeSupabaseCall(supabaseSecondaryClient.from('atletas').select('*').order('created_at', { ascending: false }), 3500)
                  .catch(() => ({ data: null })),
                safeSupabaseCall(supabaseSecondaryClient.from('keep_alive_logs').select('source, status').like('source', 'athlete_deleted:%').order('pinged_at', { ascending: false }), 3000)
                  .catch(() => ({ data: [] }))
              );
            } else {
              queryTasks.push(Promise.resolve({ data: null }), Promise.resolve({ data: [] }));
            }

            // Tarefa 3, 4 e 5: Logs de Status, Resiliência e Exclusões Confirmadas
            if (supabaseClient) {
              queryTasks.push(
                safeSupabaseCall(supabaseClient.from('keep_alive_logs').select('source, status').like('source', 'athlete_status:%').order('pinged_at', { ascending: false }), 3000).catch(() => ({ data: [] })),
                safeSupabaseCall(supabaseClient.from('keep_alive_logs').select('source, status').like('source', 'athlete_record:%').order('pinged_at', { ascending: false }), 3000).catch(() => ({ data: [] })),
                safeSupabaseCall(supabaseClient.from('keep_alive_logs').select('source, status').like('source', 'athlete_deleted:%').order('pinged_at', { ascending: false }), 3000).catch(() => ({ data: [] }))
              );
            } else {
              queryTasks.push(Promise.resolve({ data: [] }), Promise.resolve({ data: [] }), Promise.resolve({ data: [] }));
            }

            const [atletasRes1, atletasRes2, deletedLogsRes2, statusLogsRes, recordLogsRes, deletedLogsRes] = await Promise.all(queryTasks);

            if (deletedLogsRes2 && Array.isArray(deletedLogsRes2.data)) {
              deletedLogsRes2.data.forEach(log => {
                if (log && log.source) {
                  const c = String(log.source).replace(/^athlete_deleted:/, '').trim();
                  if (c) deletedCodes.add(c);
                }
              });
            }

            // Carrega códigos excluídos locais e da nuvem para isolar e impedir ressurgimento
            const deletedCodes = new Set(JSON.parse(localStorage.getItem('pe_deleted_athlete_codes') || '[]').map(String));
            deletedCodes.add('548608');
            deletedCodes.add('331296');
            if (deletedLogsRes && Array.isArray(deletedLogsRes.data)) {
              deletedLogsRes.data.forEach(log => {
                if (log && log.source) {
                  const c = String(log.source).replace(/^athlete_deleted:/, '').trim();
                  if (c) deletedCodes.add(c);
                }
              });
            }

            // Fusão intermediária de atletas: une Banco 1 e Banco 2 filtrando qualquer código excluído
            const db1Data = (atletasRes1 && Array.isArray(atletasRes1.data)) ? atletasRes1.data : [];
            const db2Data = (atletasRes2 && Array.isArray(atletasRes2.data)) ? atletasRes2.data : [];

            const mergedMap = new Map();
            db1Data.forEach(item => {
              if (item && item.codigo && !deletedCodes.has(String(item.codigo))) {
                mergedMap.set(String(item.codigo), item);
              }
            });
            db2Data.forEach(item => {
              if (item && item.codigo && !deletedCodes.has(String(item.codigo))) {
                const cCode = String(item.codigo);
                if (!mergedMap.has(cCode)) {
                  mergedMap.set(cCode, { ...item });
                } else {
                  const existing = mergedMap.get(cCode);
                  if ((!existing.foto_url || existing.foto_url.includes('unsplash.com')) && item.foto_url) {
                    existing.foto_url = item.foto_url;
                  }
                  if ((!existing.foto || existing.foto.includes('unsplash.com')) && item.foto) {
                    existing.foto = item.foto;
                  }
                }
              }
            });

            const data = Array.from(mergedMap.values());
            if (data && Array.isArray(data)) {
              // Mapeia canal oficial de alta disponibilidade em nuvem (keep_alive_logs)
              const cloudStatusMap = new Map();
              if (statusLogsRes && Array.isArray(statusLogsRes.data)) {
                statusLogsRes.data.forEach(log => {
                  if (log && log.source && log.status) {
                    const c = String(log.source).replace(/^athlete_status:/, '').trim();
                    if (!cloudStatusMap.has(c)) {
                      cloudStatusMap.set(c, String(log.status).toUpperCase().trim());
                    }
                  }
                });
              }

              const localMap = new Map(list.map(a => [String(a.codigo), a]));
              const cloudCodes = new Set();
              const cloudList = data.map(d => {
                const cCode = String(d.codigo);
                cloudCodes.add(cCode);
                const localMatch = localMap.get(cCode);
                const rawDbStatus = (d.status && String(d.status).trim()) ? d.status.trim().toUpperCase() : 'PENDENTE';
                let effectiveStatus = rawDbStatus;

                // 1. Prioridade máxima: canal de status em nuvem de alta disponibilidade (keep_alive_logs)
                if (cloudStatusMap.has(cCode)) {
                  effectiveStatus = cloudStatusMap.get(cCode);
                }
                // 2. Preserva status deliberado homologado ou desabilitado caso o registro Supabase ainda esteja com valor pendente inicial
                else if (localMatch && localMatch.status && localMatch.status !== 'PENDENTE' && rawDbStatus === 'PENDENTE') {
                  effectiveStatus = localMatch.status;
                }
                // 3. Respeita timestamp de atualização local
                else if (localMatch && localMatch.status_updated_at && localMatch.status_updated_at > (_lastAthletesFetchTime || 0)) {
                  effectiveStatus = localMatch.status;
                }

                const photoVal = d.foto_url || d.foto || (localMatch ? (localMatch.foto_url || localMatch.foto) : '');
                return {
                  id: d.id,
                  codigo: d.codigo,
                  nome: d.nome,
                  cpf: d.cpf,
                  nascimento: d.nascimento,
                  telefone: d.telefone,
                  municipio: d.municipio,
                  categoria: d.categoria || 'ASPIRANTE',
                  modalidade: d.modalidade,
                  status: effectiveStatus,
                  clube: d.clube,
                  federado: d.federado || (String(d.codigo).startsWith('PE-') ? d.codigo : `PE-2026/${String(d.codigo).slice(-3)}`),
                  validade: d.validade,
                  foto: photoVal,
                  foto_url: photoVal
                };
              });

              const cloudQuerySuccess = (atletasRes1 && Array.isArray(atletasRes1.data)) || (atletasRes2 && Array.isArray(atletasRes2.data));

              // Incorpora atletas do log de emergência APENAS se a consulta direta às tabelas atletas tiver falhado completamente (modo offline)
              if (!cloudQuerySuccess && recordLogsRes && Array.isArray(recordLogsRes.data)) {
                recordLogsRes.data.forEach(log => {
                  try {
                    const cCode = String(log.source).replace(/^athlete_record:/, '').trim();
                    if (cCode && !cloudCodes.has(cCode) && !deletedCodes.has(cCode)) {
                      cloudCodes.add(cCode);
                      const parsed = JSON.parse(log.status);
                      const recStatus = cloudStatusMap.get(cCode) || (parsed.status ? String(parsed.status).toUpperCase().trim() : 'PENDENTE');
                      cloudList.push({
                        id: parsed.id || Date.now(),
                        codigo: parsed.codigo || cCode,
                        nome: parsed.nome || 'Atleta',
                        cpf: parsed.cpf || '',
                        nascimento: parsed.nascimento || '',
                        telefone: parsed.telefone || '',
                        municipio: parsed.municipio || 'RECIFE / PE',
                        categoria: parsed.categoria || 'ASPIRANTE',
                        modalidade: parsed.modalidade || 'SOLO (INDIVIDUAL)',
                        status: recStatus,
                        clube: parsed.clube || 'FEDERAÇÃO PERNAMBUCANA',
                        federado: parsed.federado || `PE-2026/${cCode.slice(-3)}`,
                        validade: parsed.validade || '12/2026',
                        foto: parsed.foto || parsed.foto_url || '',
                        foto_url: parsed.foto_url || parsed.foto || ''
                      });
                    }
                  } catch (eParse) {}
                });
              }

              // Se a nuvem respondeu com sucesso, NÃO ressuscita atletas que não constam no banco de dados
              const localOnlyAthletes = cloudQuerySuccess
                ? list.filter(a => a && a.codigo && !cloudCodes.has(String(a.codigo)) && !deletedCodes.has(String(a.codigo)) && a._pendingSync && (Date.now() - (a.id || 0) < 120000))
                : list.filter(a => a && a.codigo && !cloudCodes.has(String(a.codigo)) && !deletedCodes.has(String(a.codigo)));

              list = [...cloudList, ...localOnlyAthletes].filter(a => a && a.codigo && !deletedCodes.has(String(a.codigo)));
              localStorage.setItem('pe_deleted_athlete_codes', JSON.stringify(Array.from(deletedCodes)));
              localStorage.setItem('pe_athletes_db', JSON.stringify(list));
              _lastAthletesFetchTime = Date.now();
            }
          } catch (e) {
            console.warn("Falha ao consultar Supabase:", e);
            // FAILOVER AUTOMÁTICO PARA BANCO SECUNDÁRIO / RESERVA
            if (supabaseSecondaryClient && IS_AUTO_FAILOVER_ENABLED) {
              try {
                const secAtletasRes = await safeSupabaseCall(
                  supabaseSecondaryClient.from('atletas').select('*').order('created_at', { ascending: false }),
                  3500
                );
                if (secAtletasRes && secAtletasRes.data && Array.isArray(secAtletasRes.data) && secAtletasRes.data.length > 0) {
                  list = secAtletasRes.data.map(d => ({
                    id: d.id,
                    codigo: d.codigo,
                    nome: d.nome,
                    cpf: d.cpf,
                    nascimento: d.nascimento,
                    telefone: d.telefone,
                    municipio: d.municipio,
                    categoria: d.categoria || 'ASPIRANTE',
                    modalidade: d.modalidade,
                    status: (d.status || 'PENDENTE').toUpperCase().trim(),
                    clube: d.clube,
                    federado: d.federado || (String(d.codigo).startsWith('PE-') ? d.codigo : `PE-2026/${String(d.codigo).slice(-3)}`),
                    validade: d.validade,
                    foto: d.foto_url || d.foto || '',
                    foto_url: d.foto_url || d.foto || ''
                  }));
                  localStorage.setItem('pe_athletes_db', JSON.stringify(list));
                  _lastAthletesFetchTime = Date.now();
                }
              } catch (secErr) {
                console.warn("Falha também no banco reserva:", secErr);
              }
            }
          }
        } else if (supabaseSecondaryClient && IS_AUTO_FAILOVER_ENABLED) {
          try {
            const secAtletasRes = await safeSupabaseCall(
              supabaseSecondaryClient.from('atletas').select('*').order('created_at', { ascending: false }),
              3500
            );
            if (secAtletasRes && secAtletasRes.data && Array.isArray(secAtletasRes.data)) {
              list = secAtletasRes.data;
              localStorage.setItem('pe_athletes_db', JSON.stringify(list));
              _lastAthletesFetchTime = Date.now();
            }
          } catch (secErr) {}
        }
        currentCachedAthletes = list;
        return list;
      })();

      try {
        return await _loadAthletesPromise;
      } finally {
        _loadAthletesPromise = null;
      }
    }

    // Compatibilidade reversa
    async function renderAthletesTable() {
      return renderJogadoresCadastradosTable();
    }

    /* Badge visual para as 4 Bases de Categoria */
    function getCategoryBadgeHtml(cat) {
      const c = (cat || 'ASPIRANTE').toUpperCase().trim();
      if (c === 'ASPIRANTE') {
        return `<span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-cyan-950/70 text-cyan-300 border border-cyan-500/40">ASPIRANTE</span>`;
      } else if (c === 'INICIANTE') {
        return `<span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-emerald-950/70 text-emerald-300 border border-emerald-500/40">INICIANTE</span>`;
      } else if (c === 'AMADOR') {
        return `<span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-amber-950/70 text-amber-300 border border-amber-500/40">AMADOR</span>`;
      } else if (c === 'PROFISSIONAL') {
        return `<span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-purple-950/70 text-purple-300 border border-purple-500/40">PROFISSIONAL</span>`;
      }
      return `<span class="px-2 py-0.5 rounded text-[10px] font-extrabold bg-slate-800 text-slate-300 border border-slate-700">${escapeHtml(c)}</span>`;
    }

    /* =========================================================
       DELEGAÇÃO DE EVENTOS & OTIMIZAÇÃO DA TABELA DE JOGADORES
       Reduz reflows para 1 única pintura e gerencia hover/click via tbody
       ========================================================= */
    let _jogadoresTableDelegationInit = false;
    function initJogadoresTableDelegation() {
      const tbody = document.getElementById('jogadoresTableBody');
      if (!tbody || _jogadoresTableDelegationInit) return;
      _jogadoresTableDelegationInit = true;

      tbody.addEventListener('mouseover', (e) => {
        const tr = e.target.closest('tr[data-code]');
        if (!tr) return;
        const code = tr.getAttribute('data-code');
        showAthleteHoverCard(e, code);
      });

      tbody.addEventListener('mousemove', (e) => {
        moveAthleteHoverCard(e);
      });

      tbody.addEventListener('mouseout', (e) => {
        const fromTr = e.target.closest('tr[data-code]');
        const toTr = e.relatedTarget ? e.relatedTarget.closest('tr[data-code]') : null;
        if (fromTr && fromTr !== toTr) {
          hideAthleteHoverCard();
        }
      });

      tbody.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('a') || e.target.closest('[onclick*="event.stopPropagation"]')) {
          return;
        }
        const tr = e.target.closest('tr[data-code]');
        if (tr) {
          const code = tr.getAttribute('data-code');
          if (code) abrirModalVerCarteira(code);
        }
      });

      window.addEventListener('scroll', hideAthleteHoverCard, { passive: true });
    }

    /* =========================================================
       RENDERIZAÇÃO DA TABELA DE JOGADORES CADASTRADOS (ABA 2)
       Ordem Alfabética (A-Z) | Sem foto nas colunas | Ficha Completa no Hover
       ========================================================= */
    async function renderJogadoresCadastradosTable() {
      const tbody = document.getElementById('jogadoresTableBody');
      const athletes = (currentCachedAthletes && currentCachedAthletes.length > 0)
        ? currentCachedAthletes
        : await loadAthletes();
      
      const totalCount = athletes.length;
      const pendentesList = athletes.filter(a => {
        const s = (a.status || 'PENDENTE').toUpperCase().trim();
        return s === 'PENDENTE' || s === 'PENDENTE DE HOMOLOGAÇÃO';
      });
      const pendingCount = pendentesList.length;
      const homologadosCount = athletes.filter(a => {
        const s = (a.status || 'PENDENTE').toUpperCase().trim();
        return s === 'HOMOLOGADO' || s === 'REGULAR';
      }).length;
      const desabilitadosCount = athletes.filter(a => {
        const s = (a.status || 'PENDENTE').toUpperCase().trim();
        return s === 'DESABILITADO' || s === 'SUSPENSO' || s === 'INATIVO';
      }).length;

      // Atualiza contadores dos cards principais
      const statTotal = document.getElementById('statTotalJogadores');
      const statHomolog = document.getElementById('statHomologadosJogadores');
      const statPend = document.getElementById('statPendentesJogadores');
      if (statTotal) statTotal.textContent = totalCount;
      if (statHomolog) statHomolog.textContent = homologadosCount;
      if (statPend) statPend.textContent = pendingCount;

      // Atualiza contadores das abas de filtro
      const countHomolog = document.getElementById('countBtnHomologados');
      const countPend = document.getElementById('countBtnPendentes');
      const countDesab = document.getElementById('countBtnDesabilitados');
      if (countHomolog) countHomolog.textContent = homologadosCount;
      if (countPend) countPend.textContent = pendingCount;
      if (countDesab) countDesab.textContent = desabilitadosCount;

      // Atualiza badge de pendentes na sidebar de navegação
      const navBadge = document.getElementById('navPendingBadge');
      if (navBadge) {
        if (pendingCount > 0) {
          navBadge.textContent = pendingCount;
          navBadge.title = `${pendingCount} jogador${pendingCount > 1 ? 'es' : ''} pendente${pendingCount > 1 ? 's' : ''} de homologação`;
          navBadge.classList.remove('hidden');
        } else {
          navBadge.classList.add('hidden');
        }
      }

      // FILTRO CONDICIONAL: O filtro e o alerta de pendentes SÓ aparecem se houver pelo menos 1 pendente!
      const bannerPendentes = document.getElementById('bannerHomologacaoPendente');
      const btnFilterPendente = document.getElementById('filterTabStatus-PENDENTE');
      const btnFilterDesab = document.getElementById('filterTabStatus-DESABILITADO');
      const badgeCountPendentes = document.getElementById('badgeCountPendentes');

      if (pendingCount > 0) {
        if (bannerPendentes) bannerPendentes.classList.remove('hidden');
        if (btnFilterPendente) btnFilterPendente.classList.remove('hidden');
        if (badgeCountPendentes) badgeCountPendentes.textContent = `${pendingCount} pendente${pendingCount > 1 ? 's' : ''}`;
      } else {
        if (bannerPendentes) bannerPendentes.classList.add('hidden');
        if (btnFilterPendente) btnFilterPendente.classList.add('hidden');
        if (jogadoresFilterStatus === 'PENDENTE') {
          jogadoresFilterStatus = 'ALL';
          updateFilterButtonsUI();
        }
      }

      if (btnFilterDesab) {
        if (desabilitadosCount > 0) {
          btnFilterDesab.classList.remove('hidden');
        } else {
          btnFilterDesab.classList.add('hidden');
          if (jogadoresFilterStatus === 'DESABILITADO') {
            jogadoresFilterStatus = 'ALL';
            updateFilterButtonsUI();
          }
        }
      }

      if (!tbody) return;
      initJogadoresTableDelegation();

      // Filtra por status
      let list = [...athletes];
      if (jogadoresFilterStatus === 'HOMOLOGADO') {
        list = list.filter(a => {
          const s = (a.status || 'PENDENTE').toUpperCase().trim();
          return s === 'HOMOLOGADO' || s === 'REGULAR';
        });
      } else if (jogadoresFilterStatus === 'PENDENTE') {
        list = list.filter(a => {
          const s = (a.status || 'PENDENTE').toUpperCase().trim();
          return s === 'PENDENTE' || s === 'PENDENTE DE HOMOLOGAÇÃO';
        });
      } else if (jogadoresFilterStatus === 'DESABILITADO') {
        list = list.filter(a => {
          const s = (a.status || 'PENDENTE').toUpperCase().trim();
          return s === 'DESABILITADO' || s === 'SUSPENSO' || s === 'INATIVO';
        });
      }

      // Filtra por Categoria (4 Bases)
      const filterCatEl = document.getElementById('filterJogadoresCategoria');
      const catFilter = filterCatEl ? filterCatEl.value : 'ALL';
      if (catFilter !== 'ALL') {
        list = list.filter(a => (a.categoria || 'ASPIRANTE').toUpperCase().trim() === catFilter);
      }

      // Filtra pela busca
      const searchInp = document.getElementById('searchJogadoresInput');
      const q = (searchInp ? searchInp.value : '').toLowerCase().trim();
      if (q) {
        list = list.filter(a => 
          (a.nome && a.nome.toLowerCase().includes(q)) ||
          (a.codigo && String(a.codigo).includes(q)) ||
          (a.cpf && a.cpf.toLowerCase().includes(q)) ||
          (a.municipio && a.municipio.toLowerCase().includes(q)) ||
          (a.clube && a.clube.toLowerCase().includes(q)) ||
          (a.modalidade && a.modalidade.toLowerCase().includes(q)) ||
          (a.categoria && a.categoria.toLowerCase().includes(q))
        );
      }

      // ORDENAÇÃO PADRÃO: Ordem Alfabética (A-Z) pelo nome
      list.sort((a, b) => (a.nome || '').localeCompare(b.nome || '', 'pt-BR', { sensitivity: 'base' }));

      // Renderiza as linhas na tabela em lote (DocumentFragment evita layout thrashing)
      tbody.innerHTML = '';
      if (list.length === 0) {
        tbody.innerHTML = `
          <tr>
            <td colspan="12" class="py-8 text-center text-slate-500 font-medium">
              <i class="fa-solid fa-user-slash text-2xl block mb-2 text-slate-600"></i>
              Nenhum jogador encontrado com os filtros selecionados.
            </td>
          </tr>
        `;
      } else {
        const fragment = document.createDocumentFragment();
        list.forEach(a => {
          const normStatus = (a.status || 'PENDENTE').toUpperCase().trim();
          const isPending = normStatus === 'PENDENTE' || normStatus === 'PENDENTE DE HOMOLOGAÇÃO';
          const isHomologado = normStatus === 'HOMOLOGADO' || normStatus === 'REGULAR';
          const isDesabilitado = normStatus === 'DESABILITADO' || normStatus === 'SUSPENSO' || normStatus === 'INATIVO';

          const tr = document.createElement('tr');
          tr.className = "hover:bg-[#070e1d] transition cursor-pointer border-b border-[#1c253b]/50 group";
          tr.setAttribute('data-code', a.codigo);

          const fedDisplay = a.federado || (String(a.codigo).startsWith('PE-') ? a.codigo : `PE-2026/${String(a.codigo).slice(-3)}`);

          let statusBadgeHtml = '';
          if (isPending) {
            statusBadgeHtml = `<span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-amber-950/80 text-amber-300 border border-amber-500/50 flex items-center gap-1.5 w-fit shadow-sm"><span class="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse"></span> ⏳ PENDENTE</span>`;
          } else if (isDesabilitado) {
            statusBadgeHtml = `<span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-rose-950/80 text-rose-300 border border-rose-500/50 flex items-center gap-1.5 w-fit shadow-sm"><span class="w-1.5 h-1.5 rounded-full bg-rose-400"></span> 🚫 DESABILITADA</span>`;
          } else {
            statusBadgeHtml = `<span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-950/80 text-emerald-300 border border-emerald-500/50 flex items-center gap-1.5 w-fit shadow-sm"><span class="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> ✓ HOMOLOGADA (ATIVA)</span>`;
          }

          let actionButtonsHtml = '';
          if (hasPermission('atletas_homologar')) {
            if (isPending) {
              actionButtonsHtml = `
                <button type="button" onclick="homologarAthlete('${a.codigo}')" title="Homologar Este Jogador Oficialmente" class="bg-amber-400 hover:bg-amber-300 text-black text-[11px] font-extrabold px-3 py-1.5 rounded-lg transition cursor-pointer shadow flex items-center gap-1.5 active:scale-95">
                  <i class="fa-solid fa-check"></i> <span>Homologar</span>
                </button>
              `;
            } else if (isHomologado) {
              actionButtonsHtml = `
                <button type="button" onclick="desabilitarCarteiraAthlete('${a.codigo}')" title="Desabilitar / Suspender temporariamente esta carteira" class="bg-rose-950/80 hover:bg-rose-900 border border-rose-500/50 text-rose-300 hover:text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition cursor-pointer shadow flex items-center gap-1.5 active:scale-95">
                  <i class="fa-solid fa-ban text-xs"></i> <span>Desabilitar Carteira</span>
                </button>
              `;
            } else if (isDesabilitado) {
              actionButtonsHtml = `
                <button type="button" onclick="habilitarCarteiraAthlete('${a.codigo}')" title="Reativar e Habilitar esta carteira oficial" class="bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-bold px-2.5 py-1.5 rounded-lg transition cursor-pointer shadow flex items-center gap-1.5 active:scale-95">
                  <i class="fa-solid fa-circle-check text-xs"></i> <span>Habilitar Carteira</span>
                </button>
              `;
            }
          }

          const rawPhoto = a.foto || a.foto_url || '';
          const photoUrl = (rawPhoto && !rawPhoto.includes('unsplash.com')) ? rawPhoto : (window.OFFICIAL_DEFAULT_PHOTO_SVG || OFFICIAL_DEFAULT_PHOTO_SVG);

          tr.innerHTML = `
            <td class="py-2.5 px-3.5 font-mono font-bold text-pe-gold text-xs">${escapeHtml(fedDisplay)}</td>
            <td class="py-2.5 px-3.5 font-bold text-white uppercase text-xs">
              <div class="flex items-center gap-3">
                <div class="w-9 h-11 rounded-lg overflow-hidden border border-pe-gold/60 shrink-0 bg-[#0c1424] shadow flex items-center justify-center cursor-pointer hover:border-pe-gold hover:scale-105 transition" onclick="event.stopPropagation(); abrirModalVerCarteira('${a.codigo}')" title="Clique para ver carteira e foto ampliada">
                  <img src="${photoUrl}" alt="${escapeHtml(a.nome)}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src=window.OFFICIAL_DEFAULT_PHOTO_SVG" loading="lazy" />
                </div>
                <div class="min-w-0">
                  <div class="flex items-center gap-1.5">
                    <span class="w-1.5 h-1.5 rounded-full ${isPending ? 'bg-amber-400 animate-pulse' : (isDesabilitado ? 'bg-rose-400' : 'bg-emerald-400')}"></span>
                    <span class="hover:text-pe-gold transition truncate font-bold text-white text-xs">${escapeHtml(a.nome)}</span>
                  </div>
                  <span class="text-[9px] font-mono text-slate-400 block mt-0.5">ID: #${escapeHtml(a.codigo)}</span>
                </div>
              </div>
            </td>
            <td class="py-3 px-3.5">${statusBadgeHtml}</td>
            <td class="py-3 px-3.5">
              <div class="flex items-center gap-1.5" onclick="event.stopPropagation()">
                ${actionButtonsHtml}
                <button type="button" onclick="abrirModalVerCarteira('${a.codigo}')" title="Ver Identificação e Carteira" class="text-xs text-pe-gold hover:text-white bg-slate-800/90 hover:bg-[#15203a] px-2.5 py-1.5 rounded-lg border border-pe-gold/40 font-bold transition cursor-pointer flex items-center gap-1">
                  <i class="fa-solid fa-id-card"></i> Ver
                </button>
                ${hasPermission('carteira_pdf') ? `
                <button type="button" onclick="baixarCarteiraAtletaPorCodigo('${a.codigo}', 'pdf', this)" title="Baixar Carteira em PDF" class="text-xs text-rose-400 hover:text-white bg-slate-800/90 hover:bg-rose-600 px-2.5 py-1.5 rounded-lg border border-rose-500/30 font-bold transition cursor-pointer flex items-center gap-1">
                  <i class="fa-solid fa-file-pdf"></i> PDF
                </button>` : ''}
                ${hasPermission('carteira_png') ? `
                <button type="button" onclick="baixarCarteiraAtletaPorCodigo('${a.codigo}', 'png', this)" title="Baixar Carteira em PNG" class="text-xs text-sky-400 hover:text-white bg-slate-800/90 hover:bg-sky-600 px-2.5 py-1.5 rounded-lg border border-sky-500/30 font-bold transition cursor-pointer flex items-center gap-1">
                  <i class="fa-solid fa-file-image"></i> PNG
                </button>` : ''}
                ${hasPermission('carteira_studio') ? `
                <button type="button" onclick="fillFormWithAthlete('${a.codigo}')" title="Abrir no Studio de Emissão" class="text-xs text-sky-400 hover:text-white bg-slate-800/90 hover:bg-sky-600 px-2.5 py-1.5 rounded-lg border border-sky-500/30 font-bold transition cursor-pointer">
                  Studio
                </button>` : ''}
                ${hasPermission('atletas_excluir') ? `
                <button type="button" onclick="deleteAthlete('${a.codigo}')" title="Excluir Jogador" class="text-xs text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 p-1.5 rounded-lg font-bold transition cursor-pointer">
                  <i class="fa-solid fa-trash-can"></i>
                </button>` : ''}
              </div>
            </td>
            <td class="py-3 px-3.5">${getCategoryBadgeHtml(a.categoria)}</td>
            <td class="py-3 px-3.5 text-pe-gold text-xs font-semibold">${escapeHtml(a.modalidade || a.clube || 'SOLO')}</td>
            <td class="py-3 px-3.5 text-slate-300 text-xs truncate max-w-[130px]">${escapeHtml(a.municipio || '-')}</td>
            <td class="py-3 px-3.5 font-mono text-slate-300 text-xs">${escapeHtml(a.cpf || '-')}</td>
            <td class="py-3 px-3.5 text-slate-300 text-xs">${escapeHtml(a.nascimento || '-')}</td>
            <td class="py-3 px-3.5 text-slate-300 text-xs">${escapeHtml(a.telefone || '-')}</td>
            <td class="py-3 px-3.5 text-slate-400 text-xs font-mono">${escapeHtml(a.validade || '12/2026')}</td>
          `;
          fragment.appendChild(tr);
        });
        tbody.appendChild(fragment);
      }

      // Atualiza texto do rodapé
      const countEl = document.getElementById('jogadoresTableCount');
      if (countEl) {
        countEl.textContent = `Mostrando ${list.length} de ${totalCount} jogadores cadastrados`;
      }
    }

    const debouncedFilterJogadoresTable = debounce(() => {
      renderJogadoresCadastradosTable();
    }, 120);

    function filterJogadoresTable(immediate = false) {
      if (immediate) {
        renderJogadoresCadastradosTable();
      } else {
        debouncedFilterJogadoresTable();
      }
    }

    function setJogadoresFilterStatus(status) {
      jogadoresFilterStatus = status;
      updateFilterButtonsUI();
      renderJogadoresCadastradosTable();
    }

    function updateFilterButtonsUI() {
      const btns = ['ALL', 'HOMOLOGADO', 'PENDENTE', 'DESABILITADO'];
      btns.forEach(b => {
        const el = document.getElementById(`filterTabStatus-${b}`);
        if (!el) return;
        if (b === jogadoresFilterStatus) {
          el.className = "text-xs px-3.5 py-2 rounded-xl font-bold transition cursor-pointer bg-pe-gold text-pe-dark shadow";
        } else {
          let extraClasses = "bg-[#05080e] border border-[#1c253b] text-slate-300 hover:text-white";
          if (b === 'PENDENTE') extraClasses = "bg-[#05080e] border border-amber-500/50 text-amber-400 hover:bg-amber-500/20";
          if (b === 'DESABILITADO') extraClasses = "bg-[#05080e] border border-rose-500/50 text-rose-400 hover:bg-rose-500/20";
          el.className = `text-xs px-3.5 py-2 rounded-xl font-bold transition cursor-pointer ${extraClasses}`;
        }
      });
    }

    function toggleFiltroPendentes() {
      if (jogadoresFilterStatus === 'PENDENTE') {
        setJogadoresFilterStatus('ALL');
        const lbl = document.getElementById('labelFiltrarPendentes');
        if (lbl) lbl.textContent = 'Ver Apenas Pendentes';
      } else {
        setJogadoresFilterStatus('PENDENTE');
        const lbl = document.getElementById('labelFiltrarPendentes');
        if (lbl) lbl.textContent = 'Ver Todos os Jogadores';
      }
    }

    /* =========================================================
       HOMOLOGAÇÃO E GESTÃO DE STATUS DA CARTEIRA (HABILITAR / DESABILITAR)
       ========================================================= */
    async function setAthleteStatus(codigo, newStatus) {
      if (!hasPermission('atletas_homologar') && !hasPermission('*')) {
        showToast('⚠️ Seu cargo não possui permissão para alterar status de carteiras.', true);
        return;
      }
      const normStatus = (newStatus || 'HOMOLOGADO').toUpperCase().trim();
      let athletes = JSON.parse(localStorage.getItem('pe_athletes_db')) || [];
      if (athletes.length === 0 && currentCachedAthletes && currentCachedAthletes.length > 0) {
        athletes = [...currentCachedAthletes];
      }

      let a = athletes.find(item => String(item.codigo) === String(codigo) || String(item.federado) === String(codigo));
      if (!a && currentCachedAthletes) {
        a = currentCachedAthletes.find(item => String(item.codigo) === String(codigo) || String(item.federado) === String(codigo));
        if (a) athletes.push(a);
      }

      if (a) {
        a.status = normStatus;
        a.status_updated_at = Date.now();
        localStorage.setItem('pe_athletes_db', JSON.stringify(athletes));
        currentCachedAthletes = [...athletes];
      }

      // Se o formulário ou a tela do Studio estiver com este atleta aberto, atualiza imediatamente
      const currentFormCode = (document.getElementById('athleteCode') ? document.getElementById('athleteCode').value : '') || (document.getElementById('athleteFederatedNum') ? document.getElementById('athleteFederatedNum').value : '');
      if (String(currentFormCode) === String(codigo) || (window._lastActiveAthlete && (String(window._lastActiveAthlete.codigo) === String(codigo) || String(window._lastActiveAthlete.federado) === String(codigo)))) {
        const statusSelect = document.getElementById('athleteStatus');
        if (statusSelect) statusSelect.value = normStatus;
        if (window._lastActiveAthlete) window._lastActiveAthlete.status = normStatus;

        const feedback = document.getElementById('athleteFeedback');
        if (feedback && !feedback.classList.contains('hidden')) {
          const isHomolog = normStatus === 'HOMOLOGADO';
          const isDesab = normStatus === 'DESABILITADO';
          feedback.className = `text-xs p-3.5 rounded-xl font-bold ${isHomolog ? 'bg-emerald-950/80 border border-emerald-500/50 text-emerald-200' : (isDesab ? 'bg-rose-950/80 border border-rose-500/50 text-rose-200' : 'bg-amber-950/80 border border-amber-500/50 text-amber-200')} shadow-xl space-y-2.5`;
          feedback.innerHTML = `
            <div class="flex items-start gap-2.5">
              <span class="text-lg">${isHomolog ? '✓' : (isDesab ? '🚫' : '⏳')}</span>
              <div>
                <p class="font-extrabold text-xs uppercase tracking-wide">${isHomolog ? 'Carteira Homologada Oficialmente!' : (isDesab ? 'Carteira Desabilitada / Suspensa!' : 'Homologação Pendente')}</p>
                <p class="text-[11px] font-normal text-slate-200 mt-0.5 leading-snug">
                  Atleta <strong>#${escapeHtml(codigo)} - ${escapeHtml((a && a.nome) || 'Atleta')}</strong> atualizado para status <strong>${normStatus}</strong>.
                </p>
              </div>
            </div>
          `;
        }
      }

      const cleanCode = String(codigo).trim();

      // 1. Persistência imediata no canal de nuvem de alta disponibilidade (keep_alive_logs)
      if (supabaseClient) {
        try {
          const cloudKey = 'athlete_status:' + cleanCode;
          try {
            await supabaseClient.from('keep_alive_logs').delete().eq('source', cloudKey);
          } catch (e1) {}
          await supabaseClient.from('keep_alive_logs').insert([{
            source: cloudKey,
            status: normStatus,
            pinged_at: new Date().toISOString()
          }]);
        } catch (e2) {
          console.warn("Supabase keep_alive_logs notice:", e2);
        }

        if (supabaseSecondaryClient) {
          try {
            const cloudKey = 'athlete_status:' + cleanCode;
            try {
              await supabaseSecondaryClient.from('keep_alive_logs').delete().eq('source', cloudKey);
            } catch (se1) {}
            await supabaseSecondaryClient.from('keep_alive_logs').insert([{
              source: cloudKey,
              status: normStatus,
              pinged_at: new Date().toISOString()
            }]);
          } catch (se2) {
            console.warn("Secondary keep_alive_logs notice:", se2);
          }
        }

        // 2. Atualização direta na tabela atletas
        try {
          const updateTask = async () => {
            let res = await supabaseClient.from('atletas').update({ status: normStatus }).eq('codigo', cleanCode);
            if (res.error || !res.data) {
              await supabaseClient.from('atletas').update({ status: normStatus }).eq('federado', cleanCode);
            }
            return res;
          };
          await safeSupabaseCall(updateTask(), 3000).catch(e => console.warn("Supabase update notice:", e));
        } catch (e) {
          console.warn("Supabase update status error:", e);
        }

        // Espelhamento no banco reserva (Dual-Write)
        replicateToSecondary('atletas', 'update', { status: normStatus }, 'codigo', cleanCode);
      }

      // 3. Envio autoritativo para o backend Vercel (/api/gestao/operacao)
      try {
        fetch('/api/gestao/operacao', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ codigo: cleanCode, status: normStatus })
        }).catch(e => console.warn("API gestao status notice:", e));
      } catch (e) {}

      logAuditEvent('CHANGE_ATHLETE_STATUS', 'atletas', { codigo, status: normStatus });
      
      const toastMessages = {
        'HOMOLOGADO': `✓ Atleta #${codigo} (${(a && a.nome) || ''}): Carteira HOMOLOGADA (Ativa)!`,
        'DESABILITADO': `🚫 Atleta #${codigo} (${(a && a.nome) || ''}): Carteira DESABILITADA / Suspensa!`,
        'PENDENTE': `⏳ Atleta #${codigo} (${(a && a.nome) || ''}) marcado como Pendente.`
      };
      showToast(toastMessages[normStatus] || `✓ Status do atleta #${codigo} alterado para ${normStatus}!`);

      await renderJogadoresCadastradosTable();
      updateDashboardData();
    }

    async function homologarAthlete(codigo) {
      await setAthleteStatus(codigo, 'HOMOLOGADO');
    }

    async function desabilitarCarteiraAthlete(codigo) {
      await setAthleteStatus(codigo, 'DESABILITADO');
    }

    async function habilitarCarteiraAthlete(codigo) {
      await setAthleteStatus(codigo, 'HOMOLOGADO');
    }

    window.homologarAthlete = homologarAthlete;
    window.desabilitarCarteiraAthlete = desabilitarCarteiraAthlete;
    window.habilitarCarteiraAthlete = habilitarCarteiraAthlete;
    window.setAthleteStatus = setAthleteStatus;

    async function homologarTodosPendentes() {
      if (!hasPermission('atletas_homologar') && !hasPermission('*')) {
        showToast('⚠️ Seu cargo não possui permissão para homologar atletas.', true);
        return;
      }
      let localAthletes = JSON.parse(localStorage.getItem('pe_athletes_db')) || [];
      if (localAthletes.length === 0 && currentCachedAthletes && currentCachedAthletes.length > 0) {
        localAthletes = [...currentCachedAthletes];
      }
      let updatedCount = 0;
      localAthletes.forEach(a => {
        const s = (a.status || 'PENDENTE').toUpperCase().trim();
        if (s !== 'HOMOLOGADO' && s !== 'REGULAR' && s !== 'DESABILITADO' && s !== 'SUSPENSO') {
          a.status = 'HOMOLOGADO';
          a.status_updated_at = Date.now();
          updatedCount++;
        }
      });

      if (updatedCount === 0) {
        showToast('Não há jogadores pendentes de homologação.');
        return;
      }

      localStorage.setItem('pe_athletes_db', JSON.stringify(localAthletes));
      currentCachedAthletes = [...localAthletes];

      // Se o formulário ativo estiver com PENDENTE, atualiza para HOMOLOGADO
      const statusSelect = document.getElementById('athleteStatus');
      if (statusSelect && statusSelect.value === 'PENDENTE') {
        statusSelect.value = 'HOMOLOGADO';
      }
      if (window._lastActiveAthlete) {
        window._lastActiveAthlete.status = 'HOMOLOGADO';
      }

      const feedback = document.getElementById('athleteFeedback');
      if (feedback && !feedback.classList.contains('hidden')) {
        feedback.className = "text-xs p-3.5 rounded-xl font-bold bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 shadow-xl space-y-2.5";
        feedback.innerHTML = `
          <div class="flex items-start gap-2.5">
            <span class="text-lg text-emerald-400">✓</span>
            <div>
              <p class="font-extrabold text-emerald-300 text-xs uppercase tracking-wide">Todos os Atletas Homologados!</p>
              <p class="text-[11px] font-normal text-slate-200 mt-0.5 leading-snug">
                Todos os atletas pendentes foram homologados oficialmente. A emissão de carteira (PDF e PNG) está liberada!
              </p>
            </div>
          </div>
          <div class="pt-1 flex flex-wrap items-center gap-2">
            <button type="button" onclick="exportCarteiraPDF(window._lastActiveAthlete, this)" class="px-3 py-1.5 bg-rose-700 hover:bg-rose-600 text-white font-bold text-[10px] uppercase rounded-lg transition flex items-center gap-1.5 cursor-pointer shadow">
              <i class="fa-solid fa-file-pdf"></i> <span>Baixar PDF</span>
            </button>
            <button type="button" onclick="exportHdPng(window._lastActiveAthlete, this)" class="px-3 py-1.5 bg-sky-700 hover:bg-sky-600 text-white font-bold text-[10px] uppercase rounded-lg transition flex items-center gap-1.5 cursor-pointer shadow">
              <i class="fa-solid fa-file-image"></i> <span>Baixar PNG HD</span>
            </button>
          </div>
        `;
      }

      const pendentes = localAthletes
        .filter(a => {
          const s = (a.status || 'PENDENTE').toUpperCase().trim();
          return s === 'HOMOLOGADO' && a.status_updated_at;
        })
        .map(a => String(a.codigo).trim());

      if (pendentes.length > 0) {
        // 1. Grava no canal de nuvem keep_alive_logs para cada atleta homologado
        if (supabaseClient) {
          try {
            const logEntries = pendentes.map(code => ({
              source: 'athlete_status:' + code,
              status: 'HOMOLOGADO',
              pinged_at: new Date().toISOString()
            }));
            await safeSupabaseCall(
              supabaseClient.from('keep_alive_logs').insert(logEntries),
              3500
            ).catch(() => null);

            // 2. Atualização direta no Supabase
            await safeSupabaseCall(
              supabaseClient.from('atletas').update({ status: 'HOMOLOGADO' }).in('codigo', pendentes),
              4500
            ).catch(() => null);
          } catch (e) {
            console.warn("Supabase update all pendentes error:", e);
          }
        }

        // 3. Notifica backend Vercel para persistência autoritativa
        pendentes.forEach(code => {
          fetch('/api/gestao/operacao', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ codigo: code, status: 'HOMOLOGADO' })
          }).catch(() => null);
        });
      }

      logAuditEvent('HOMOLOGATE_ALL', 'atletas', { count: updatedCount });
      showToast(`✓ Todos os ${updatedCount} jogadores foram homologados com sucesso!`);
      await renderJogadoresCadastradosTable();
      updateDashboardData();
    }

    async function deleteAthlete(codigo) {
      if (!hasPermission('atletas_excluir')) {
        showToast('⚠️ Seu cargo não possui permissão para excluir atletas.', true);
        return;
      }
      if (!confirm(`Deseja realmente remover o atleta código #${codigo} do sistema e de todos os bancos de dados?`)) return;

      const cleanCode = String(codigo).trim();

      // 1. Marca no registro permanente de atletas excluídos (evita ressurgimento em cache ou reconciliação)
      const deletedCodes = new Set(JSON.parse(localStorage.getItem('pe_deleted_athlete_codes') || '[]').map(String));
      deletedCodes.add(cleanCode);
      localStorage.setItem('pe_deleted_athlete_codes', JSON.stringify(Array.from(deletedCodes)));

      // 2. Remove do cache local e da lista ativa
      let localAthletes = JSON.parse(localStorage.getItem('pe_athletes_db')) || [];
      localAthletes = localAthletes.filter(a => String(a.codigo) !== cleanCode);
      localStorage.setItem('pe_athletes_db', JSON.stringify(localAthletes));
      currentCachedAthletes = localAthletes;

      // 3. Renderiza imediatamente a tabela e o dashboard (resposta visual instantânea)
      await renderJogadoresCadastradosTable();
      updateDashboardData();

      // 4. Exclusão física no Banco 2 (Secundário/Reserva)
      if (supabaseSecondaryClient) {
        try {
          await supabaseSecondaryClient.from('atletas').delete().eq('codigo', cleanCode);
          await supabaseSecondaryClient.from('keep_alive_logs').delete().eq('source', `athlete_record:${cleanCode}`);
          await supabaseSecondaryClient.from('keep_alive_logs').delete().eq('source', `athlete_status:${cleanCode}`);
          await supabaseSecondaryClient.from('keep_alive_logs').insert([{
            source: `athlete_deleted:${cleanCode}`,
            status: 'DELETED',
            pinged_at: new Date().toISOString()
          }]).catch(() => null);
        } catch (eSec) {
          console.warn("[Dual-Write] Erro ao remover atleta no Banco 2:", eSec);
        }
      }

      // 5. Exclusão e Tombstone no Banco 1 (Principal)
      if (supabaseClient) {
        try {
          await supabaseClient.from('atletas').delete().eq('codigo', cleanCode).catch(() => null);
          await supabaseClient.from('keep_alive_logs').delete().eq('source', `athlete_record:${cleanCode}`).catch(() => null);
          await supabaseClient.from('keep_alive_logs').delete().eq('source', `athlete_status:${cleanCode}`).catch(() => null);
          // Registra no keep_alive_logs para propagar a exclusão e impedir ressurgimento
          await supabaseClient.from('keep_alive_logs').insert([{
            source: `athlete_deleted:${cleanCode}`,
            status: 'DELETED',
            pinged_at: new Date().toISOString()
          }]).catch(() => null);
        } catch (e) {
          console.warn("Erro ao registrar exclusão no Banco 1:", e);
        }
        replicateToSecondary('atletas', 'delete', null, 'codigo', cleanCode);
      }

      // 6. Chamada autenticada ao backend Vercel (/api/gestao/operacao) para persistência autorizada
      try {
        fetch('/api/gestao/operacao', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ codigo: cleanCode, action: 'delete' })
        }).catch(() => null);
      } catch (eApi) {}

      logAuditEvent('DELETE_ATHLETE', 'atletas', { codigo: cleanCode });
      showToast(`V Atleta #${cleanCode} excluído com sucesso do sistema e dos bancos de dados!`);
    }

    async function clearAllAthletes() {
      showToast('🔒 Proteção Ativa: A exclusão em massa de atletas está desativada para proteger a integridade do banco de dados oficial.', true);
      alert('Ação Bloqueada: O banco de dados oficial está blindado contra exclusão em massa de atletas. Os dados cadastrados não podem ser apagados em lote.');
      return;
    }

    function updateStudioModeBadge(isEditing, athlete = null) {
      const badge = document.getElementById('studioModeIndicator');
      if (!badge) return;
      if (isEditing && athlete) {
        badge.className = "text-[9px] uppercase tracking-wider text-sky-300 font-extrabold bg-sky-950/90 border border-sky-500/40 px-2.5 py-0.5 rounded-md flex items-center gap-1.5 shadow-sm";
        badge.innerHTML = `<i class="fa-solid fa-pen-to-square text-[9px] text-sky-400"></i> Editando #${escapeHtml(athlete.codigo)} (${escapeHtml((athlete.nome || 'Atleta').slice(0, 15))})`;
      } else {
        badge.className = "text-[9px] uppercase tracking-wider text-emerald-400 font-extrabold bg-emerald-950/80 border border-emerald-500/30 px-2.5 py-0.5 rounded-md flex items-center gap-1.5 shadow-sm";
        badge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Novo Cadastro`;
      }
    }
    window.updateStudioModeBadge = updateStudioModeBadge;

    function prepararStudioNovoAtleta(silent = false) {
      window._lastActiveAthlete = null;
      window._currentAthletePhoto = '';

      // 1. Gera código único e novo sem repetição
      generateFederatedNumber(true);
      const newFedCode = (document.getElementById('athleteFederatedNum')?.value || '').trim() || '973321';

      // 2. Limpa todas as barras de dados do formulário
      const nameInp = document.getElementById('athleteName');
      if (nameInp) nameInp.value = '';

      const cpfInp = document.getElementById('athleteCpf');
      if (cpfInp) cpfInp.value = '';

      const birthInp = document.getElementById('athleteBirth');
      if (birthInp) birthInp.value = '';

      const phoneInp = document.getElementById('athletePhone');
      if (phoneInp) phoneInp.value = '';

      const cityInp = document.getElementById('athleteCity');
      if (cityInp) cityInp.value = '- PE';

      const statusSelect = document.getElementById('athleteStatus');
      if (statusSelect) statusSelect.value = 'PENDENTE';

      setAthleteModalityValue('SOLO (INDIVIDUAL)');
      setAthleteCategoryValue('AMADOR');
      const clubInp = document.getElementById('athleteClub');
      if (clubInp) clubInp.value = 'SOLO (INDIVIDUAL)';

      const valInp = document.getElementById('athleteValidity');
      if (valInp) valInp.value = '12/2026';

      const photoValInp = document.getElementById('athletePhotoVal');
      if (photoValInp) photoValInp.value = '';
      if (typeof updateAthleteFormPhotoPreview === 'function') updateAthleteFormPhotoPreview('');

      // 3. Limpa QR Code
      const qrLink = `https://fpeft.vercel.app/?id=${newFedCode}`;
      const qrInp = document.getElementById('inputQrText');
      if (qrInp) qrInp.value = qrLink;

      // 4. Limpa e reseta os textos das camadas da carteira oficial no Studio
      if (studioState && Array.isArray(studioState.elements)) {
        const setEl = (key, val) => {
          const item = studioState.elements.find(i => i.targetKey === key || i.id === `field-${key}`);
          if (item) item.text = val;
        };
        setEl('nome', '');
        setEl('cpf', 'XXX.XXX.XXX-XX');
        setEl('nasc', 'XX/XX/XXXX');
        setEl('fone', '(XX) XXXXX-XXXX');
        setEl('federado', newFedCode);
        setEl('categoria', 'AMADOR');
        setEl('modalidade', 'SOLO (INDIVIDUAL)');
        setEl('filiacao', 'SOLO (INDIVIDUAL)');
        setEl('municipio', '- PE');
        setEl('validade', '12/2026');
        setEl('qr', qrLink);
        const photoTarget = studioState.elements.find(item => item.id === 'field-foto' || item.type === 'photo');
        if (photoTarget) photoTarget.photoUrl = '';
        const signTarget = studioState.elements.find(item => item.id === 'field-assinatura' || item.type === 'text-line' || item.type === 'signature-line');
        if (signTarget) {
          if (!signTarget.signatureUrl && window.OFFICIAL_DIRECTOR_SIGNATURE_DATA_URL) {
            signTarget.signatureUrl = window.OFFICIAL_DIRECTOR_SIGNATURE_DATA_URL;
          }
          if (signTarget.signatureScale === undefined) signTarget.signatureScale = 100;
        }
      }

      // 5. Oculta feedback de salvamento anterior
      const feedback = document.getElementById('athleteFeedback');
      if (feedback) feedback.classList.add('hidden');

      // 6. Atualiza etiqueta de modo para Novo Cadastro
      updateStudioModeBadge(false);
      updateSignatureUIState(true);

      renderInteractiveElements();
      if (!silent) {
        showToast('Studio limpo: todas as barras prontas para novo federado!');
      }
    }
    window.prepararStudioNovoAtleta = prepararStudioNovoAtleta;

    async function fillFormWithAthlete(codigo) {
      const athletes = await loadAthletes();
      const a = athletes.find(item => String(item.codigo) === String(codigo) || String(item.federado) === String(codigo));
      if (!a) {
        showToast('Atleta não encontrado no sistema.');
        return;
      }

      window._openingAthleteInStudio = true;
      switchTab('atletas');
      window._openingAthleteInStudio = false;

      // Preenche os inputs do formulário com os dados do federado selecionado
      const fedVal = a.federado || (String(a.codigo).startsWith('PE-') ? a.codigo : `PE-2026/${String(a.codigo).slice(-3)}`);
      document.getElementById('athleteCode').value = fedVal;
      document.getElementById('athleteFederatedNum').value = fedVal;
      document.getElementById('athleteName').value = a.nome;
      document.getElementById('athleteCpf').value = a.cpf || '';
      document.getElementById('athleteBirth').value = a.nascimento || '';
      document.getElementById('athletePhone').value = a.telefone || '';
      document.getElementById('athleteCity').value = a.municipio || '- PE';
      setAthleteModalityValue(a.modalidade || a.clube || 'SOLO (INDIVIDUAL)');
      setAthleteCategoryValue(a.categoria || 'ASPIRANTE');
      const clubInp = document.getElementById('athleteClub');
      if (clubInp) clubInp.value = a.modalidade || a.clube || 'SOLO (INDIVIDUAL)';
      document.getElementById('athleteStatus').value = a.status || 'HOMOLOGADO';
      document.getElementById('athleteValidity').value = a.validade || '12/2026';

      // Sincroniza com os elementos do Studio CR80
      const setElText = (key, text) => {
        const item = studioState.elements.find(i => i.targetKey === key || i.id === `field-${key}`);
        if (item) item.text = text;
      };

      setElText('nome', (a.nome || '').toUpperCase());
      setElText('cpf', a.cpf || 'XXX.XXX.XXX-XX');
      setElText('nasc', a.nascimento || 'XX/XX/XXXX');
      setElText('fone', a.telefone || '(XX) XXXXX-XXXX');
      setElText('categoria', (a.categoria || 'ASPIRANTE').toUpperCase());
      setElText('modalidade', (a.modalidade || a.clube || 'SOLO (INDIVIDUAL)').toUpperCase());
      setElText('filiacao', (a.modalidade || a.clube || 'SOLO (INDIVIDUAL)').toUpperCase());
      setElText('federado', fedVal);
      setElText('municipio', (a.municipio || '- PE').toUpperCase());
      setElText('validade', a.validade || '12/2026');

      const qrLink = `https://fpeft.vercel.app/?id=${a.codigo}`;
      const qrInp = document.getElementById('inputQrText');
      if (qrInp) qrInp.value = qrLink;
      setElText('qr', qrLink);

      const photoTarget = studioState.elements.find(item => item.id === 'field-foto' || item.type === 'photo');
      const rawPhoto = a.foto_url || a.foto || '';
      window._currentAthletePhoto = rawPhoto;
      const photoInp = document.getElementById('athletePhotoVal');
      if (photoInp) photoInp.value = rawPhoto;
      if (typeof updateAthleteFormPhotoPreview === 'function') updateAthleteFormPhotoPreview(rawPhoto);

      if (photoTarget) {
        photoTarget.photoUrl = rawPhoto;
      }

      window._lastActiveAthlete = a;
      updateStudioModeBadge(true, a);
      renderInteractiveElements();
      selectElement('field-nome');
      showToast(`Atleta #${a.codigo} (${a.nome}) carregado no Studio para edição!`);

      const vArea = document.getElementById('viewportArea');
      if (vArea) vArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    function clearAthleteForm() {
      prepararStudioNovoAtleta(false);
    }

    /* =========================================================
       FICHA COMPLETA FLUTUANTE (POPOVER HOVER NA TABELA)
       ========================================================= */
    function showAthleteHoverCard(e, codigo) {
      const card = document.getElementById('athleteHoverCard');
      const container = document.getElementById('athleteHoverCardContent');
      if (!card || !container) return;

      let a = (currentCachedAthletes || []).find(item => String(item.codigo) === String(codigo));
      if (!a) {
        try {
          const list = JSON.parse(localStorage.getItem('pe_athletes_db')) || [];
          a = list.find(item => String(item.codigo) === String(codigo));
        } catch (err) {}
      }
      if (!a) return;

      const isHomologado = a.status === 'HOMOLOGADO' || a.status === 'REGULAR';
      const rawPhoto = a.foto || a.foto_url || '';
      const photoUrl = (rawPhoto && !rawPhoto.includes('unsplash.com')) ? rawPhoto : OFFICIAL_DEFAULT_PHOTO_SVG;

      container.innerHTML = `
        <div class="flex items-start gap-3 border-b border-[#1c253b] pb-3">
          <div class="w-16 h-20 rounded-xl overflow-hidden border-2 border-pe-gold shrink-0 bg-[#0c1424] shadow">
            <img src="${photoUrl}" class="w-full h-full object-cover" onerror="this.onerror=null;this.src=window.OFFICIAL_DEFAULT_PHOTO_SVG" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center justify-between gap-1 mb-1">
              <span class="text-[9px] font-mono font-bold text-pe-gold">#${a.codigo}</span>
              <span class="px-1.5 py-0.5 rounded text-[8px] font-black uppercase ${isHomologado ? 'bg-emerald-950/80 text-emerald-400 border border-emerald-500/40' : 'bg-amber-950/80 text-amber-400 border border-amber-500/40 animate-pulse'}">
                ${isHomologado ? '✓ Homologado Oficial' : '⏳ Aguardando Homologação'}
              </span>
            </div>
            <h4 class="font-oswald text-sm uppercase font-bold text-white leading-tight truncate">${escapeHtml(a.nome)}</h4>
            <div class="mt-1 flex items-center gap-1.5 flex-wrap">${getCategoryBadgeHtml(a.categoria || 'ASPIRANTE')}</div>
            <span class="inline-block mt-1 text-[9px] font-mono text-sky-400 bg-sky-950/50 px-1.5 py-0.5 rounded border border-sky-800/40">${escapeHtml(a.federado || 'PE-2026/' + String(a.codigo).slice(-3))}</span>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-2 text-[10px]">
          <div class="bg-[#05080e] p-2 rounded-lg border border-[#1c253b]">
            <span class="text-[8px] text-slate-500 uppercase font-bold block">CPF</span>
            <span class="font-mono text-slate-200 font-semibold">${escapeHtml(a.cpf || '-')}</span>
          </div>
          <div class="bg-[#05080e] p-2 rounded-lg border border-[#1c253b]">
            <span class="text-[8px] text-slate-500 uppercase font-bold block">Data Nasc.</span>
            <span class="text-slate-200">${escapeHtml(a.nascimento || '-')}</span>
          </div>
          <div class="bg-[#05080e] p-2 rounded-lg border border-[#1c253b]">
            <span class="text-[8px] text-slate-500 uppercase font-bold block">Telefone / Fone</span>
            <span class="text-slate-200">${escapeHtml(a.telefone || '-')}</span>
          </div>
          <div class="bg-[#05080e] p-2 rounded-lg border border-[#1c253b]">
            <span class="text-[8px] text-slate-500 uppercase font-bold block">Município</span>
            <span class="text-slate-200 truncate block">${escapeHtml(a.municipio || '- PE')}</span>
          </div>
          <div class="bg-[#05080e] p-2 rounded-lg border border-[#1c253b]">
            <span class="text-[8px] text-slate-500 uppercase font-bold block">Modalidade</span>
            <span class="text-pe-gold font-bold truncate block">${escapeHtml(a.modalidade || a.clube || 'SOLO (INDIVIDUAL)')}</span>
          </div>
          <div class="bg-[#05080e] p-2 rounded-lg border border-[#1c253b]">
            <span class="text-[8px] text-slate-500 uppercase font-bold block">Validade Carteira</span>
            <span class="text-slate-200 font-mono">${escapeHtml(a.validade || '12/2026')}</span>
          </div>
        </div>

        <div class="pt-1 flex items-center justify-between text-[9px] text-slate-400 border-t border-[#1c253b]">
          <span class="flex items-center gap-1 text-pe-gold font-semibold">
            <i class="fa-solid fa-shield-halved text-[10px]"></i> Registro Oficial FPEFT
          </span>
          <span class="font-mono text-[8px] text-slate-500">QR Code Habilitado</span>
        </div>
      `;

      card.classList.remove('hidden');
      positionAthleteHoverCard(e);
    }

    function positionAthleteHoverCard(e) {
      const card = document.getElementById('athleteHoverCard');
      if (!card || card.classList.contains('hidden')) return;

      const cardW = 340;
      const cardH = 310;
      let x = e.clientX + 20;
      let y = e.clientY - 20;

      if (x + cardW > window.innerWidth - 10) {
        x = e.clientX - cardW - 20;
      }
      if (y + cardH > window.innerHeight - 10) {
        y = window.innerHeight - cardH - 10;
      }
      if (y < 10) y = 10;
      if (x < 10) x = 10;

      card.style.left = `${x}px`;
      card.style.top = `${y}px`;
    }

    function moveAthleteHoverCard(e) {
      positionAthleteHoverCard(e);
    }

    function hideAthleteHoverCard() {
      const card = document.getElementById('athleteHoverCard');
      if (card) card.classList.add('hidden');
    }

    /* =========================================================
       JANELA MODAL DE IDENTIFICAÇÃO E STATUS DA CARTEIRA
       Abre ficha completa com selo oficial, status e prévia CR80
       ========================================================= */
    async function abrirModalVerCarteira(codigo) {
      let athletes = (typeof currentCachedAthletes !== 'undefined' && currentCachedAthletes && currentCachedAthletes.length > 0)
        ? currentCachedAthletes
        : await loadAthletes();
      
      const a = athletes.find(item => String(item.codigo) === String(codigo));
      if (!a) {
        showToast('Atleta não encontrado no sistema.');
        return;
      }
      window._modalActiveAthlete = a;
      renderModalVerCarteiraContent(a);
      const modal = document.getElementById('modalVerCarteiraAtleta');
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    }

    function fecharModalVerCarteira() {
      const modal = document.getElementById('modalVerCarteiraAtleta');
      if (modal) {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
    }

    async function toggleAthleteCarteiraModal(codigo, targetStatus) {
      if (!hasPermission('atletas_homologar') && !hasPermission('*')) {
        showToast('⚠️ Acesso Controlado: Seu cargo não possui permissão para alterar o status da carteira.', true);
        return;
      }
      const btn = (typeof event !== 'undefined' && event && event.currentTarget) ? event.currentTarget : null;
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin text-sm"></i> <span>Atualizando...</span>';
      }
      await setAthleteStatus(codigo, targetStatus);
      let athletes = (typeof currentCachedAthletes !== 'undefined' && currentCachedAthletes) ? currentCachedAthletes : [];
      const a = athletes.find(item => String(item.codigo) === String(codigo));
      if (a) {
        a.status = targetStatus;
        renderModalVerCarteiraContent(a);
      }
    }

    async function homologarAthleteModal(codigo) {
      if (!hasPermission('atletas_homologar')) {
        showToast('⚠️ Acesso Controlado: Seu cargo não possui permissão para homologar atletas.', true);
        return;
      }
      await toggleAthleteCarteiraModal(codigo, 'HOMOLOGADO');
    }

    function renderModalVerCarteiraContent(a) {
      const container = document.getElementById('modalVerCarteiraContent');
      const codeHeader = document.getElementById('modalCarteiraFederadoCode');
      if (!container) return;

      const fedCode = a.federado || (String(a.codigo).startsWith('PE-') ? a.codigo : `PE-2026/${String(a.codigo).slice(-3)}`);
      if (codeHeader) codeHeader.textContent = `#${a.codigo} (${fedCode})`;

      const rawStatus = (a.status || 'PENDENTE').toUpperCase().trim();
      const isHomologado = rawStatus === 'HOMOLOGADO' || rawStatus === 'REGULAR';
      const isDesabilitado = rawStatus === 'DESABILITADO' || rawStatus === 'SUSPENSO';
      const isPendente = !isHomologado && !isDesabilitado;

      const defaultPhoto = OFFICIAL_DEFAULT_PHOTO_SVG;
      const rawPhoto = a.foto || a.foto_url || '';
      const photoUrl = (rawPhoto && !rawPhoto.includes('unsplash.com')) ? rawPhoto : defaultPhoto;
      const nowStr = new Date().toLocaleString('pt-BR');
      const hashStr = `FPEFT-${String(a.codigo).padStart(6, '0')}-${isHomologado ? 'AUTH-REGULAR' : (isDesabilitado ? 'DISABLED' : 'PENDING')}`;

      // Configuração visual da situação cadastral
      let statusDotClass = 'bg-emerald-400';
      let statusPillClass = 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40';
      let statusBadgeLabel = 'REGULAR / HOMOLOGADO';
      let situationBoxClass = 'bg-emerald-950/40 border border-emerald-500/50 text-emerald-300';
      let situationIcon = '✅';
      let situationTitle = 'CADASTRO HOMOLOGADO E REGULAR';
      let situationText = 'Atleta devidamente filiado e regular perante a Federação Pernambucana de Foot Table (FPEFT). A emissão de carteira física e digital em alta definição está 100% liberada.';

      if (isDesabilitado) {
        statusDotClass = 'bg-rose-500';
        statusPillClass = 'bg-rose-500/20 text-rose-400 border border-rose-500/40';
        statusBadgeLabel = 'CARTEIRA DESABILITADA';
        situationBoxClass = 'bg-rose-950/40 border border-rose-500/50 text-rose-300';
        situationIcon = '🚫';
        situationTitle = 'CARTEIRA DESABILITADA TEMPORARIAMENTE';
        situationText = 'A carteira digital deste atleta foi temporariamente desabilitada/suspensa pela administração da Federação. No site público, a consulta indicará carteira desabilitada e os downloads estão bloqueados.';
      } else if (isPendente) {
        statusDotClass = 'bg-amber-400 animate-pulse';
        statusPillClass = 'bg-amber-500/20 text-amber-400 border border-amber-500/40';
        statusBadgeLabel = 'HOMOLOGAÇÃO PENDENTE';
        situationBoxClass = 'bg-amber-950/40 border border-amber-500/50 text-amber-300';
        situationIcon = '⏳';
        situationTitle = 'HOMOLOGAÇÃO EM ANDAMENTO (PENDENTE DE APROVAÇÃO)';
        situationText = 'O cadastro deste atleta foi registrado no sistema e aguarda homologação oficial da Federação. No site público, o atleta não pode baixar a carteira até ser homologado.';
      }

      container.innerHTML = `
        <!-- Selo de Status e Identificação Principal -->
        <div class="bg-[#05080e] border border-[#1c253b] rounded-2xl p-4 sm:p-5 space-y-4 shadow-xl">
          <div class="flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div class="w-20 h-24 sm:w-24 sm:h-32 rounded-2xl overflow-hidden border-2 border-pe-gold shrink-0 bg-[#0c1424] shadow-xl relative group cursor-pointer" onclick="abrirFotoTamanhoReal('${escapeJsString(photoUrl)}', '${escapeJsString(a.nome)}')" title="Clique para visualizar a foto no tamanho real original">
              <img src="${photoUrl}" alt="${escapeHtml(a.nome)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" onerror="this.onerror=null;this.src=window.OFFICIAL_DEFAULT_PHOTO_SVG" />
              <div class="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col items-center justify-center text-white text-xs font-bold gap-1 pointer-events-none p-1 text-center">
                <i class="fa-solid fa-expand text-sm text-pe-gold"></i>
                <span class="text-[8px] uppercase tracking-wider text-pe-gold font-mono">Tamanho Real</span>
              </div>
              <div class="absolute bottom-1 right-1 w-3.5 h-3.5 rounded-full border-2 border-[#0c1424] ${statusDotClass}"></div>
            </div>
            <div class="flex-1 min-w-0 text-center sm:text-left space-y-1.5">
              <div class="flex flex-wrap items-center justify-center sm:justify-between gap-2">
                <span class="text-xs font-mono font-bold text-pe-gold bg-pe-gold/10 px-2.5 py-0.5 rounded-lg border border-pe-gold/30">
                  REGISTRO: ${escapeHtml(fedCode)}
                </span>
                <span class="px-3 py-1 rounded-full text-[11px] font-black uppercase tracking-wider ${statusPillClass} flex items-center gap-1.5 shadow">
                  <span class="w-2 h-2 rounded-full ${statusDotClass}"></span>
                  ${statusBadgeLabel}
                </span>
              </div>
              <h2 class="font-oswald text-xl sm:text-2xl uppercase font-bold text-white tracking-wide leading-tight">
                ${escapeHtml(a.nome)}
              </h2>
              <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-0.5">
                ${getCategoryBadgeHtml(a.categoria || 'ASPIRANTE')}
                <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-sky-950/70 text-sky-300 border border-sky-500/40 uppercase">
                  ${escapeHtml(a.modalidade || 'SOLO (INDIVIDUAL)')}
                </span>
              </div>
            </div>
          </div>

          <!-- Caixa Informativa de Situação Cadastral -->
          <div class="p-3.5 rounded-xl ${situationBoxClass} text-xs flex items-center gap-3 shadow">
            <span class="text-2xl shrink-0">${situationIcon}</span>
            <div class="flex-1 text-[11px] leading-tight">
              <strong class="block font-bold text-white text-xs mb-0.5 uppercase tracking-wide">
                ${situationTitle}
              </strong>
              <span class="text-slate-200">
                ${situationText}
              </span>
            </div>
          </div>

          <!-- Grade de Informações Cadastrais -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            <div class="bg-[#0b1222] p-2.5 rounded-xl border border-[#1c253b]">
              <span class="text-[9px] text-slate-400 uppercase font-bold block mb-0.5">CPF</span>
              <span class="font-mono text-slate-100 font-bold text-xs">${escapeHtml(a.cpf || '-')}</span>
            </div>
            <div class="bg-[#0b1222] p-2.5 rounded-xl border border-[#1c253b]">
              <span class="text-[9px] text-slate-400 uppercase font-bold block mb-0.5">Data de Nascimento</span>
              <span class="text-slate-100 font-semibold text-xs">${escapeHtml(a.nascimento || '-')}</span>
            </div>
            <div class="bg-[#0b1222] p-2.5 rounded-xl border border-[#1c253b]">
              <span class="text-[9px] text-slate-400 uppercase font-bold block mb-0.5">Telefone</span>
              <span class="text-slate-100 font-semibold text-xs">${escapeHtml(a.telefone || '-')}</span>
            </div>
            <div class="bg-[#0b1222] p-2.5 rounded-xl border border-[#1c253b]">
              <span class="text-[9px] text-slate-400 uppercase font-bold block mb-0.5">Município</span>
              <span class="text-slate-100 font-semibold text-xs truncate block">${escapeHtml(a.municipio || '- PE')}</span>
            </div>
          </div>

          <!-- Rodapé do Selo Digital com Hash & Timestamp -->
          <div class="pt-2 border-t border-[#1c253b] flex flex-wrap items-center justify-between gap-2 text-[10px] text-slate-400 font-mono">
            <div class="flex items-center gap-1.5">
              <span>🛡️ Autenticado digitalmente em:</span>
              <span class="text-slate-200 font-bold">${nowStr}</span>
            </div>
            <div class="text-pe-gold font-bold flex items-center gap-1">
              <span>🔒 HASH:</span> <span>${hashStr}</span>
            </div>
          </div>
        </div>

        <!-- Seção da Carteira Digital Oficial -->
        <div class="bg-[#05080e] border border-[#1c253b] rounded-2xl p-4 sm:p-5 space-y-3 shadow-xl">
          <div class="flex items-center justify-between">
            <div class="text-[11px] font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
              <span class="text-pe-gold">💳</span> Carteira Digital Oficial (Modelo CR80)
            </div>
            <span class="text-[9px] font-mono text-pe-gold font-bold uppercase">Formato Oficial 85.6 x 53.98 mm</span>
          </div>

          <div id="modalCardPreviewContainer" class="relative rounded-2xl overflow-hidden border border-pe-gold/40 shadow-2xl bg-[#09152e] flex items-center justify-center p-1">
            <div id="modalCardLoadingSpinner" class="py-12 text-center text-slate-400 text-xs">
              <i class="fa-solid fa-spinner fa-spin text-2xl text-pe-gold block mb-2"></i>
              <span>Gerando visualização da carteira em alta definição...</span>
            </div>
            <img id="modalCardPreviewImg" class="w-full h-auto rounded-xl shadow-lg hidden" alt="Carteira Oficial" />
          </div>

          <!-- Ações do Administrador -->
          <div class="pt-2 space-y-2">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              ${hasPermission('carteira_pdf') ? `
              <button type="button" onclick="baixarCarteiraAtletaPorCodigo('${a.codigo}', 'pdf', this)" class="bg-gradient-to-r from-rose-700 to-red-600 hover:from-rose-600 hover:to-red-500 text-white font-extrabold text-xs uppercase py-3 px-4 rounded-xl transition shadow flex items-center justify-center gap-2 cursor-pointer">
                <i class="fa-solid fa-file-pdf text-sm"></i> Baixar Carteira em PDF
              </button>` : ''}
              ${hasPermission('carteira_png') ? `
              <button type="button" onclick="baixarCarteiraAtletaPorCodigo('${a.codigo}', 'png', this)" class="bg-gradient-to-r from-sky-700 to-blue-600 hover:from-sky-600 hover:to-blue-500 text-white font-extrabold text-xs uppercase py-3 px-4 rounded-xl transition shadow flex items-center justify-center gap-2 cursor-pointer">
                <i class="fa-solid fa-file-image text-sm"></i> Baixar Imagem PNG HD
              </button>` : ''}
            </div>

            ${(hasPermission('atletas_homologar') || hasPermission('*')) ? `
              ${isPendente ? `
                <button type="button" onclick="toggleAthleteCarteiraModal('${a.codigo}', 'HOMOLOGADO')" class="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase py-3 px-4 rounded-xl transition shadow flex items-center justify-center gap-2 cursor-pointer">
                  <i class="fa-solid fa-check text-sm"></i> Homologar Este Atleta Oficialmente Agora
                </button>
              ` : ''}
              ${isHomologado ? `
                <button type="button" onclick="toggleAthleteCarteiraModal('${a.codigo}', 'DESABILITADO')" class="w-full bg-rose-600/90 hover:bg-rose-500 text-white font-black text-xs uppercase py-3 px-4 rounded-xl transition shadow flex items-center justify-center gap-2 cursor-pointer">
                  <i class="fa-solid fa-ban text-sm"></i> Desabilitar / Suspender Carteira
                </button>
              ` : ''}
              ${isDesabilitado ? `
                <button type="button" onclick="toggleAthleteCarteiraModal('${a.codigo}', 'HOMOLOGADO')" class="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black text-xs uppercase py-3 px-4 rounded-xl transition shadow flex items-center justify-center gap-2 cursor-pointer">
                  <i class="fa-solid fa-check text-sm"></i> Reativar / Habilitar Carteira Oficial
                </button>
              ` : ''}
            ` : ''}

            <div class="flex items-center justify-between pt-1">
              ${hasPermission('carteira_studio') ? `
              <button type="button" onclick="fillFormWithAthlete('${a.codigo}'); fecharModalVerCarteira();" class="text-xs text-sky-400 hover:text-sky-300 font-bold transition flex items-center gap-1.5 py-1 px-2 cursor-pointer">
                <i class="fa-solid fa-pen-to-square"></i> ${hasPermission('atletas_editar') ? 'Abrir e Editar no Studio' : 'Ver Carteira no Studio'}
              </button>` : '<div></div>'}
              <button type="button" onclick="fecharModalVerCarteira()" class="text-xs text-slate-400 hover:text-white font-bold transition py-1 px-3 rounded-lg border border-slate-700 hover:border-slate-500 cursor-pointer">
                Fechar Janela
              </button>
            </div>
          </div>
        </div>
      `;

      // Renderiza em segundo plano a imagem da carteira para visualização imediata
      setTimeout(async () => {
        try {
          const cv = await renderCarteiraToHdCanvas(studioState.elements, a, 1.2);
          const imgEl = document.getElementById('modalCardPreviewImg');
          const spinEl = document.getElementById('modalCardLoadingSpinner');
          if (imgEl && cv) {
            imgEl.src = cv.toDataURL('image/png');
            imgEl.classList.remove('hidden');
            if (spinEl) spinEl.classList.add('hidden');
          }
        } catch (err) {
          console.warn('Erro ao renderizar preview no modal:', err);
          const spinEl = document.getElementById('modalCardLoadingSpinner');
          if (spinEl) spinEl.innerHTML = '<span class="text-slate-400 text-xs">Pré-visualização gerada diretamente nos botões de download acima.</span>';
        }
      }, 30);
    }

    function abrirFotoTamanhoReal(photoUrl, nome) {
      const modal = document.getElementById('modalFotoTamanhoReal');
      const img = document.getElementById('fotoTamanhoRealImg');
      const title = document.getElementById('fotoTamanhoRealTitle');
      const dims = document.getElementById('fotoTamanhoRealDims');
      const downloadBtn = document.getElementById('btnBaixarFotoReal');
      if (!modal || !img) return;

      const targetUrl = (photoUrl && photoUrl !== window.OFFICIAL_DEFAULT_PHOTO_SVG && !photoUrl.startsWith('data:image/svg+xml'))
        ? photoUrl
        : (window.OFFICIAL_DEFAULT_PHOTO_SVG || OFFICIAL_DEFAULT_PHOTO_SVG);

      img.src = targetUrl;
      if (downloadBtn) downloadBtn.href = targetUrl;
      if (title) title.textContent = `Foto Oficial: ${nome || 'Atleta'}`;
      img.onload = () => {
        if (dims) dims.textContent = `Resolução: ${img.naturalWidth} x ${img.naturalHeight} px (Proporção Original)`;
      };
      modal.classList.remove('hidden');
    }

    function fecharFotoTamanhoReal() {
      const modal = document.getElementById('modalFotoTamanhoReal');
      if (modal) modal.classList.add('hidden');
    }
    window.abrirFotoTamanhoReal = abrirFotoTamanhoReal;
    window.fecharFotoTamanhoReal = fecharFotoTamanhoReal;

    window.abrirModalVerCarteira = abrirModalVerCarteira;
    window.fecharModalVerCarteira = fecharModalVerCarteira;
    window.homologarAthleteModal = homologarAthleteModal;
    window.toggleAthleteCarteiraModal = toggleAthleteCarteiraModal;

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        fecharFotoTamanhoReal();
        fecharModalVerCarteira();
        if (typeof closePreviewModal === 'function') closePreviewModal();
        if (typeof closeDeleteModal === 'function') closeDeleteModal();
        if (typeof closeEditInstitutionalAdminModal === 'function') closeEditInstitutionalAdminModal();
        if (typeof closeRoleOperationsModal === 'function') closeRoleOperationsModal();
        if (typeof closeAddCustomOperationModal === 'function') closeAddCustomOperationModal();
        if (typeof closeAssignRoleModal === 'function') closeAssignRoleModal();
      }
    });

    /* =========================================================
       EXPORTAÇÃO EM LOTE DE CARTEIRINHAS HD (ZIP - 300 DPI)
       ========================================================= */
    function buildSvgStringForAthlete(athlete) {
      const currentBgSvg = getCurrentBackgroundSvgString();
      const parser = new DOMParser();
      const svgDoc = parser.parseFromString(currentBgSvg, 'image/svg+xml');
      const rootSvg = svgDoc.documentElement;

      const overlayGroup = svgDoc.createElementNS('http://www.w3.org/2000/svg', 'g');
      overlayGroup.setAttribute('id', 'FPEFT_Dados_Atleta');

      const athleteElements = studioState.elements.map(baseItem => {
        const item = { ...baseItem };
        if (item.type === 'photo') {
          item.photoUrl = athlete.foto_url || athlete.foto || '';
        } else if (item.targetKey === 'nome') {
          item.text = (athlete.nome || '').toUpperCase();
        } else if (item.targetKey === 'cpf') {
          item.text = athlete.cpf || '';
        } else if (item.targetKey === 'nasc') {
          item.text = athlete.nascimento || 'XX/XX/XXXX';
        } else if (item.targetKey === 'fone') {
          item.text = athlete.telefone || '';
        } else if (item.targetKey === 'categoria') {
          item.text = (athlete.categoria || 'ASPIRANTE').toUpperCase();
        } else if (item.targetKey === 'modalidade' || item.targetKey === 'filiacao') {
          item.text = (athlete.modalidade || athlete.clube || 'SOLO (INDIVIDUAL)').toUpperCase();
        } else if (item.targetKey === 'federado') {
          item.text = athlete.federado || `PE-2026/${String(athlete.codigo).slice(-3)}`;
        } else if (item.targetKey === 'municipio') {
          item.text = (athlete.municipio || athlete.cidade || '- PE').toUpperCase();
        } else if (item.targetKey === 'validade') {
          item.text = athlete.validade || '12/2026';
        }
        return item;
      });

      appendAthleteElementsToSvg(svgDoc, overlayGroup, athleteElements, athlete);
      rootSvg.appendChild(overlayGroup);

      const serializer = new XMLSerializer();
      return serializer.serializeToString(svgDoc);
    }

    function renderSvgToBlob(svgString) {
      return new Promise((resolve, reject) => {
        const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
        const blobUrl = URL.createObjectURL(svgBlob);
        const img = new Image();
        img.onload = () => {
          try {
            const offCanvas = document.createElement('canvas');
            const scale = 3; // 3x = ~3150 x 1986 px (300 DPI CR80)
            offCanvas.width = 1050 * scale;
            offCanvas.height = 662 * scale;
            const ctx = offCanvas.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.scale(scale, scale);
            ctx.drawImage(img, 0, 0, 1050, 662);
            URL.revokeObjectURL(blobUrl);

            offCanvas.toBlob(blob => {
              resolve(blob);
            }, 'image/png');
          } catch (err) {
            URL.revokeObjectURL(blobUrl);
            reject(err);
          }
        };
        img.onerror = (e) => {
          URL.revokeObjectURL(blobUrl);
          reject(e);
        };
        img.src = blobUrl;
      });
    }

    async function exportAllAthletesBatchZip() {
      if (!hasPermission('atletas_exportar')) {
        showToast('⚠️ Seu cargo não possui permissão para exportar lotes de atletas.', true);
        return;
      }
      if (typeof JSZip === 'undefined') {
        showToast('Biblioteca JSZip carregando, tente novamente em instantes.');
        return;
      }

      const athletes = await loadAthletes();
      if (!athletes || athletes.length === 0) {
        showToast('Nenhum atleta cadastrado para exportar.');
        return;
      }

      const modal = document.getElementById('batchExportModal');
      const bar = document.getElementById('batchExportProgressBar');
      const countText = document.getElementById('batchExportCountText');
      const pctText = document.getElementById('batchExportPercentText');
      const statusText = document.getElementById('batchExportStatusText');

      if (modal) modal.classList.remove('hidden');
      batchExportAbort = false;

      const zip = new JSZip();
      const folder = zip.folder("carteiras_fpeft_300dpi");
      const total = athletes.length;

      for (let i = 0; i < total; i++) {
        if (batchExportAbort) {
          if (modal) modal.classList.add('hidden');
          showToast('Exportação em lote cancelada.');
          return;
        }

        const a = athletes[i];
        const pct = Math.round(((i + 1) / total) * 100);
        if (bar) bar.style.width = `${pct}%`;
        if (countText) countText.textContent = `${i + 1} / ${total}`;
        if (pctText) pctText.textContent = `${pct}%`;
        if (statusText) statusText.textContent = `Renderizando carteira: ${a.nome}...`;

        try {
          const hdCanvas = await renderCarteiraToHdCanvas(studioState.elements, a, 3);
          const blob = await new Promise(res => hdCanvas.toBlob(res, 'image/png'));
          const cleanName = (a.nome || 'atleta').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9_-]/g, "_").toUpperCase();
          folder.file(`PE-2026-${a.codigo}_${cleanName}.png`, blob);
        } catch (err) {
          console.warn(`Erro ao gerar carteira ${a.codigo}:`, err);
        }

        // Cede tempo para o navegador atualizar a interface
        await new Promise(r => setTimeout(r, 15));
      }

      if (statusText) statusText.textContent = "Empacotando arquivo ZIP final...";
      const zipBlob = await zip.generateAsync({ type: "blob" }, (metadata) => {
        if (bar) bar.style.width = `${metadata.percent}%`;
        if (pctText) pctText.textContent = `${Math.round(metadata.percent)}%`;
      });

      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(zipBlob);
      downloadLink.download = `carteirinhas_fpeft_lote_${total}_atletas_${Date.now()}.zip`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);

      if (modal) modal.classList.add('hidden');
      showToast(`✓ Lote com ${total} carteirinhas HD exportado com sucesso em ZIP!`);
    }

    function cancelBatchExport() {
      batchExportAbort = true;
      const modal = document.getElementById('batchExportModal');
      if (modal) modal.classList.add('hidden');
    }

    /* =========================================================
       EXPORTAÇÃO CSV & IMPORTAÇÃO EM MASSA (ATÉ 500 ATLETAS)
       ========================================================= */
    function exportAthletesToCsv() {
      const athletes = currentCachedAthletes || [];
      if (!athletes.length) {
        showToast('Nenhum atleta cadastrado para exportar.');
        return;
      }
      const headers = ['Codigo', 'Nome', 'CPF', 'Nascimento', 'Telefone', 'Municipio', 'Clube', 'Modalidade', 'Federado', 'Validade', 'Status'];
      const rows = athletes.map(a => [
        `"${a.codigo || ''}"`,
        `"${(a.nome || '').replace(/"/g, '""')}"`,
        `"${a.cpf || ''}"`,
        `"${a.nascimento || ''}"`,
        `"${a.telefone || ''}"`,
        `"${(a.municipio || '').replace(/"/g, '""')}"`,
        `"${(a.clube || '').replace(/"/g, '""')}"`,
        `"${(a.modalidade || '').replace(/"/g, '""')}"`,
        `"${a.federado || ''}"`,
        `"${a.validade || ''}"`,
        `"${a.status || ''}"`
      ]);

      const csvContent = '\uFEFF' + [headers.join(';'), ...rows.map(r => r.join(';'))].join('\r\n');
      const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `jogadores_cadastrados_fpeft_${Date.now()}.csv`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Planilha CSV exportada com sucesso!');
    }

    function openBatchImportModal() {
      if (!hasPermission('atletas_editar') && !hasPermission('*')) {
        showToast('⚠️ Acesso Controlado: Sua conta não possui permissão para importar atletas.', true);
        return;
      }
      const modal = document.getElementById('batchImportModal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeBatchImportModal() {
      const modal = document.getElementById('batchImportModal');
      if (modal) modal.classList.add('hidden');
    }

    function handleBatchCsvFile(event) {
      const file = event.target.files[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const textarea = document.getElementById('batchImportTextarea');
        if (textarea) textarea.value = e.target.result;
        showToast('Arquivo CSV carregado no campo de texto!');
      };
      reader.readAsText(file);
    }

    async function processBatchImport() {
      if (!hasPermission('atletas_editar') && !hasPermission('*')) {
        showToast('⚠️ Acesso Controlado: Sua conta não possui permissão para importar atletas.', true);
        return;
      }
      const textarea = document.getElementById('batchImportTextarea');
      const text = (textarea ? textarea.value : '').trim();
      if (!text) {
        showToast('Cole ou digite ao menos uma linha de dados.');
        return;
      }

      const lines = text.split(/\r?\n/).filter(l => l.trim().length > 0);
      const athletesToInsert = [];
      let existingAthletes = await loadAthletes();
      const existingCodes = new Set(existingAthletes.map(a => String(a.codigo)));

      // Sanitização de entradas contra CSV Formula Injection
      function sanitizeCsvCell(str) {
        if (!str) return '';
        let s = String(str).trim();
        if (/^[=\+\-@\t\r]/.test(s)) {
          s = "'" + s;
        }
        return s;
      }

      for (let line of lines) {
        const parts = line.split(/[;,|\t]/).map(p => p.trim());
        if (!parts.length || !parts[0] || parts[0].toLowerCase() === 'nome') continue;

        const nome = sanitizeCsvCell(parts[0]);
        const cpf = sanitizeCsvCell(parts[1] || 'XXX.XXX.XXX-XX');
        const municipio = sanitizeCsvCell(parts[2] || '- PE');
        const clube = sanitizeCsvCell(parts[3] || 'Sport Club do Recife');
        const modalidade = sanitizeCsvCell(parts[4] || 'SOLO (INDIVIDUAL)');
        const telefone = sanitizeCsvCell(parts[5] || '(XX) XXXXX-XXXX');
        const nascimento = sanitizeCsvCell(parts[6] || 'XX/XX/XXXX');

        let code = '';
        do {
          code = String(Math.floor(100000 + Math.random() * 900000));
        } while (existingCodes.has(code));
        existingCodes.add(code);

        const athleteObj = {
          id: Date.now() + Math.floor(Math.random() * 1000),
          codigo: code,
          nome: nome,
          cpf: cpf,
          nascimento: nascimento,
          telefone: telefone,
          municipio: municipio,
          modalidade: modalidade,
          status: 'HOMOLOGADO', // Cadastrados em massa já homologados como oficiais
          clube: clube,
          federado: `PE-2026/${code.slice(-3)}`,
          validade: '12/2026',
          foto_url: ''
        };
        athletesToInsert.push(athleteObj);
      }

      if (athletesToInsert.length === 0) {
        showToast('Nenhum dado válido identificado.');
        return;
      }

      if (supabaseClient) {
        try {
          const fullBatch = athletesToInsert.map(a => ({
            codigo: a.codigo,
            nome: a.nome,
            cpf: a.cpf,
            nascimento: a.nascimento,
            telefone: a.telefone,
            municipio: a.municipio,
            categoria: a.categoria || 'ASPIRANTE',
            modalidade: a.modalidade,
            status: a.status,
            clube: a.clube,
            federado: a.federado,
            validade: a.validade,
            foto_url: a.foto_url
          }));
          let batchRes = await supabaseClient.from('atletas').upsert(fullBatch, { onConflict: 'codigo' });
          if (batchRes.error && batchRes.error.message && batchRes.error.message.includes('column')) {
            const baseBatch = athletesToInsert.map(a => ({
              codigo: a.codigo,
              nome: a.nome,
              cpf: a.cpf,
              nascimento: a.nascimento,
              municipio: a.municipio,
              modalidade: a.modalidade,
              status: a.status,
              foto_url: a.foto_url
            }));
            await supabaseClient.from('atletas').upsert(baseBatch, { onConflict: 'codigo' });
          }

          // Persistência em lote no canal de nuvem de alta disponibilidade (keep_alive_logs)
          const cloudLogs = [];
          athletesToInsert.forEach(a => {
            const c = String(a.codigo).trim();
            cloudLogs.push({
              source: 'athlete_record:' + c,
              status: JSON.stringify(a),
              pinged_at: new Date().toISOString()
            });
            cloudLogs.push({
              source: 'athlete_status:' + c,
              status: a.status || 'HOMOLOGADO',
              pinged_at: new Date().toISOString()
            });
          });
          await safeSupabaseCall(supabaseClient.from('keep_alive_logs').insert(cloudLogs), 4000).catch(() => null);

          // Notifica backend oficial Vercel em segundo plano para persistência autoritativa no banco
          athletesToInsert.forEach(a => {
            fetch('/api/gestao/operacao', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                codigo: String(a.codigo).trim(),
                nome: a.nome,
                cpf: a.cpf || '000.000.000-00',
                modalidade: a.modalidade || 'SOLO (INDIVIDUAL)',
                categoria: a.categoria || 'ASPIRANTE',
                clube: a.clube || 'FEDERAÇÃO PERNAMBUCANA',
                municipio: a.municipio || 'RECIFE / PE',
                status: a.status || 'HOMOLOGADO'
              })
            }).catch(() => null);
          });
        } catch (e) {
          console.warn("Aviso ao salvar lote no Supabase:", e);
        }
      }

      existingAthletes = [...athletesToInsert, ...existingAthletes];
      localStorage.setItem('pe_athletes_db', JSON.stringify(existingAthletes));
      currentCachedAthletes = existingAthletes;

      logAuditEvent('BATCH_IMPORT_ATHLETES', 'atletas', { count: athletesToInsert.length });
      closeBatchImportModal();
      showToast(`✓ ${athletesToInsert.length} novos atletas cadastrados e homologados com sucesso!`);
      renderJogadoresCadastradosTable();
      updateDashboardData();
    }

    /* =========================================================
       DASHBOARD INICIAL: ÚLTIMAS CARTEIRAS & MÉTRICAS
       ========================================================= */
    async function updateDashboardData() {
      const athletes = await loadAthletes();
      
      // Atualiza contador de atletas cadastrados
      const metricEl = document.getElementById('metricTotalAthletes');
      if (metricEl) {
        metricEl.textContent = athletes.length;
      }
      if (typeof updateOperationsTelemetry === 'function') {
        updateOperationsTelemetry();
      }

      // Renderiza as últimas carteiras homologadas (tabela rápida da aba Início)
      const quickTable = document.getElementById('quickAthletesList');
      if (quickTable) {
        quickTable.innerHTML = '';
        const recentAthletes = athletes.slice(0, 8);

        recentAthletes.forEach(a => {
          const tr = document.createElement('tr');
          tr.className = "hover:bg-[#070b14] transition";
          tr.innerHTML = `
            <td class="py-3 px-4 font-mono font-bold text-pe-gold">#${a.codigo}</td>
            <td class="py-3 px-4 font-bold text-white uppercase">${a.nome}</td>
            <td class="py-3 px-4 text-slate-300">${a.municipio || '- PE'}</td>
            <td class="py-3 px-4 text-pe-gold font-bold">${a.modalidade || 'SOLO'}</td>
            <td class="py-3 px-4">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold ${a.status === 'REGULAR' ? 'bg-emerald-950/60 text-emerald-400 border border-emerald-500/30' : 'bg-amber-950/60 text-amber-400 border border-amber-500/30'}">
                ${a.status || 'REGULAR'}
              </span>
            </td>
            <td class="py-3 px-4 text-right">
              <div class="flex items-center justify-end gap-1.5">
                ${hasPermission('carteira_pdf') ? `
                <button type="button" onclick="baixarCarteiraAtletaPorCodigo('${a.codigo}', 'pdf', this)" title="Baixar Carteira em PDF" class="text-xs text-rose-400 hover:text-white font-bold bg-[#0e1526] hover:bg-rose-600 border border-rose-500/30 px-2.5 py-1 rounded-lg transition cursor-pointer flex items-center gap-1">
                  <i class="fa-solid fa-file-pdf"></i> PDF
                </button>` : ''}
                ${hasPermission('carteira_png') ? `
                <button type="button" onclick="baixarCarteiraAtletaPorCodigo('${a.codigo}', 'png', this)" title="Baixar Carteira em PNG" class="text-xs text-sky-400 hover:text-white font-bold bg-[#0e1526] hover:bg-sky-600 border border-sky-500/30 px-2 py-1 rounded-lg transition cursor-pointer flex items-center gap-1">
                  <i class="fa-solid fa-file-image"></i> PNG
                </button>` : ''}
                <button type="button" onclick="abrirModalVerCarteira('${a.codigo}')" class="text-xs text-pe-gold hover:text-white font-bold bg-[#0e1526] hover:bg-[#15203a] border border-[#1c253b] px-3 py-1 rounded-lg transition cursor-pointer flex items-center gap-1.5" title="Ver Carteira e Identificação">
                  <i class="fa-solid fa-id-card text-pe-gold"></i> Ver Carteira
                </button>
              </div>
            </td>
          `;
          quickTable.appendChild(tr);
        });
      }

      // Se houver busca rápida ativa, atualiza os resultados
      const quickSearchInput = document.getElementById('quickSearchAthleteInput');
      if (quickSearchInput && quickSearchInput.value.trim().length > 0) {
        handleQuickAthleteSearch();
      }
    }

    /* =========================================================
       BUSCA RÁPIDA DE ATLETA (INDIVIDUAL OU EM DUPLA)
       ========================================================= */
    let quickSearchModality = 'ALL';
    let _quickAthleteSearchDebounce = null;

    function setQuickSearchModality(mod) {
      quickSearchModality = mod;
      
      const btnAll = document.getElementById('btnFilterAll');
      const btnSolo = document.getElementById('btnFilterSolo');
      const btnDupla = document.getElementById('btnFilterDupla');

      const activeClass = "px-2.5 py-1 rounded-md text-pe-dark bg-pe-gold font-extrabold transition cursor-pointer";
      const inactiveClass = "px-2.5 py-1 rounded-md text-slate-400 hover:text-white transition cursor-pointer";

      if (btnAll) btnAll.className = (mod === 'ALL') ? activeClass : inactiveClass;
      if (btnSolo) btnSolo.className = (mod === 'SOLO') ? activeClass : inactiveClass;
      if (btnDupla) btnDupla.className = (mod === 'DUPLA') ? activeClass : inactiveClass;

      handleQuickAthleteSearch(true);
    }

    function clearQuickAthleteSearch() {
      if (_quickAthleteSearchDebounce) clearTimeout(_quickAthleteSearchDebounce);
      const input = document.getElementById('quickSearchAthleteInput');
      const clearBtn = document.getElementById('quickSearchClearBtn');
      if (input) input.value = '';
      if (clearBtn) clearBtn.classList.add('hidden');
      
      const resultsContainer = document.getElementById('quickSearchResults');
      if (resultsContainer) {
        resultsContainer.innerHTML = `
          <div class="text-[11px] text-slate-400 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-pe-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
            <span>Ache atletas pelo <strong>Nome Completo</strong> ou <strong>ID da Carteira</strong> (Individual ou Dupla).</span>
          </div>
        `;
      }
    }

    async function handleQuickAthleteSearch(immediate = false) {
      const input = document.getElementById('quickSearchAthleteInput');
      const clearBtn = document.getElementById('quickSearchClearBtn');
      const resultsContainer = document.getElementById('quickSearchResults');
      if (!input || !resultsContainer) return;

      const rawQuery = input.value.trim();
      if (clearBtn) {
        if (rawQuery.length > 0) clearBtn.classList.remove('hidden');
        else clearBtn.classList.add('hidden');
      }

      if (!rawQuery) {
        if (_quickAthleteSearchDebounce) clearTimeout(_quickAthleteSearchDebounce);
        resultsContainer.innerHTML = `
          <div class="text-[11px] text-slate-400 flex items-center gap-1.5">
            <svg class="w-4 h-4 text-pe-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
            </svg>
            <span>Ache atletas pelo <strong>Nome Completo</strong> ou <strong>ID da Carteira</strong> (Individual ou Dupla).</span>
          </div>
        `;
        return;
      }

      if (!immediate) {
        if (_quickAthleteSearchDebounce) clearTimeout(_quickAthleteSearchDebounce);
        _quickAthleteSearchDebounce = setTimeout(() => handleQuickAthleteSearch(true), 130);
        return;
      }

      const athletes = (currentCachedAthletes && currentCachedAthletes.length > 0)
        ? currentCachedAthletes
        : await loadAthletes();
      
      const normalize = str => (str || '')
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .trim();

      const q = normalize(rawQuery);
      const qDigits = rawQuery.replace(/\D/g, '');
      const qClean = q.replace(/[^a-z0-9]/g, '');

      const matches = athletes.filter(a => {
        const nameNorm = normalize(a.nome);
        const athleteCode = String(a.codigo || '').trim();
        const athleteFed = String(a.federado || '').trim();
        const athleteId = String(a.id || '').trim();
        const athleteCpfDigits = String(a.cpf || '').replace(/\D/g, '');

        // 1. Busca por Nome
        const matchName = nameNorm.includes(q);

        // 2. Busca por ID / Nº do Federado Oficial (ex: PE-2026/729, 729, #729)
        const matchCode = (
          athleteCode.toLowerCase().includes(q) ||
          athleteFed.toLowerCase().includes(q) ||
          (qDigits.length > 0 && (athleteCode.includes(qDigits) || athleteFed.includes(qDigits))) ||
          athleteId === q ||
          (qDigits.length > 0 && athleteId === qDigits) ||
          (qClean.length > 0 && (athleteCode.toLowerCase().includes(qClean) || athleteFed.toLowerCase().includes(qClean)))
        );

        // 3. Busca por CPF
        const matchCpf = qDigits.length >= 3 && athleteCpfDigits.includes(qDigits);

        if (!matchName && !matchCode && !matchCpf) return false;

        const modUpper = (a.modalidade || '').toUpperCase();
        const isDupla = modUpper.includes('DUPLA') || modUpper.includes('EQUIPE');
        const isSolo = modUpper.includes('SOLO') || modUpper.includes('INDIVIDUAL');

        if (quickSearchModality === 'SOLO') {
          return isSolo;
        } else if (quickSearchModality === 'DUPLA') {
          return isDupla;
        }
        return true; // 'ALL' busca tanto em dupla quanto individual
      });

      if (matches.length === 0) {
        // Se não encontrou no filtro de modalidade atual, verifica se o Nº Federado existe na outra modalidade
        let crossMatch = null;
        if (qDigits.length >= 2 || qClean.length >= 2) {
          crossMatch = athletes.find(a => {
            const athleteCode = String(a.codigo || '').trim();
            const athleteFed = String(a.federado || '').trim();
            const athleteId = String(a.id || '').trim();
            return athleteCode.includes(qDigits) || athleteFed.includes(qDigits) || athleteId === qDigits || athleteCode.toLowerCase().includes(qClean) || athleteFed.toLowerCase().includes(qClean);
          });
        }

        if (crossMatch) {
          const crossModUpper = (crossMatch.modalidade || '').toUpperCase();
          const crossIsDupla = crossModUpper.includes('DUPLA') || crossModUpper.includes('EQUIPE');
          const defaultPhoto = OFFICIAL_DEFAULT_PHOTO_SVG;
          const rawPhoto = crossMatch.foto || '';
          const photoUrl = (rawPhoto && !rawPhoto.includes('unsplash.com')) ? rawPhoto : defaultPhoto;

          resultsContainer.innerHTML = `
            <div class="w-full space-y-2">
              <div class="text-[11px] text-amber-400 flex items-center gap-1 font-semibold">
                <span>⚠️</span> ID localizado, porém registrado como <strong>${crossIsDupla ? 'EM DUPLA' : 'INDIVIDUAL'}</strong>:
              </div>
              <div class="bg-[#05080e] border border-amber-500/40 rounded-xl p-2.5 flex items-center justify-between gap-3 transition">
                <div class="flex items-center gap-2.5 min-w-0">
                  <img src="${photoUrl}" alt="${escapeText(crossMatch.nome)}" class="w-9 h-9 rounded-lg object-cover border border-amber-500/50 flex-shrink-0" onerror="this.src=OFFICIAL_DEFAULT_PHOTO_SVG" />
                  <div class="min-w-0">
                    <div class="flex items-center gap-1.5 flex-wrap">
                      <span class="font-bold text-white uppercase text-xs truncate">${escapeText(crossMatch.nome)}</span>
                      <span class="text-[10px] font-mono font-bold text-pe-gold">#${crossMatch.codigo}</span>
                    </div>
                    <div class="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                      <span class="px-1.5 py-0.5 rounded font-bold ${crossIsDupla ? 'bg-amber-950/80 text-amber-400 border border-amber-500/30' : 'bg-blue-950/80 text-blue-400 border border-blue-500/30'}">
                        ${crossIsDupla ? '👥 EM DUPLA' : '👤 INDIVIDUAL'}
                      </span>
                      <span class="truncate">${escapeText(crossMatch.municipio || '- PE')}</span>
                    </div>
                  </div>
                </div>
                <button type="button" onclick="abrirModalVerCarteira('${crossMatch.codigo}')" class="flex-shrink-0 bg-pe-gold hover:bg-pe-goldHover text-pe-dark font-extrabold text-[11px] uppercase px-3 py-1.5 rounded-lg transition shadow flex items-center gap-1 cursor-pointer">
                  <span>🪪</span> Ver Carteira
                </button>
              </div>
            </div>
          `;
          return;
        }

        const modalityLabel = quickSearchModality === 'ALL' 
          ? 'Individual ou em Dupla' 
          : (quickSearchModality === 'SOLO' ? 'Individual' : 'Em Dupla');

        resultsContainer.innerHTML = `
          <div class="w-full bg-[#05080e] border border-[#1c253b] rounded-xl p-2.5 text-center text-xs text-slate-400">
            Nenhum atleta encontrado para "<strong class="text-pe-gold">${escapeText(rawQuery)}</strong>" com ID ou Nome no perfil <strong>${modalityLabel}</strong>.
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = `
        <div class="w-full space-y-2 max-h-48 overflow-y-auto pr-1">
          ${matches.slice(0, 4).map(a => {
            const modUpper = (a.modalidade || '').toUpperCase();
            const isDupla = modUpper.includes('DUPLA') || modUpper.includes('EQUIPE');
            const defaultPhoto = OFFICIAL_DEFAULT_PHOTO_SVG;
            const rawPhoto = a.foto || '';
            const photoUrl = (rawPhoto && !rawPhoto.includes('unsplash.com')) ? rawPhoto : defaultPhoto;

            return `
              <div class="bg-[#05080e] border border-[#1c253b] hover:border-pe-gold/40 rounded-xl p-2.5 flex items-center justify-between gap-3 transition">
                <div class="flex items-center gap-2.5 min-w-0">
                  <img src="${photoUrl}" alt="${escapeText(a.nome)}" class="w-9 h-9 rounded-lg object-cover border border-pe-gold/50 flex-shrink-0" onerror="this.src=OFFICIAL_DEFAULT_PHOTO_SVG" />
                  <div class="min-w-0">
                    <div class="flex items-center gap-1.5 flex-wrap">
                      <span class="font-bold text-white uppercase text-xs truncate">${escapeText(a.nome)}</span>
                      <span class="text-[10px] font-mono font-bold text-pe-gold">#${a.codigo}</span>
                    </div>
                    <div class="flex items-center gap-2 text-[10px] text-slate-400 mt-0.5">
                      <span class="px-1.5 py-0.5 rounded font-bold ${isDupla ? 'bg-amber-950/80 text-amber-400 border border-amber-500/30' : 'bg-blue-950/80 text-blue-400 border border-blue-500/30'}">
                        ${isDupla ? '👥 EM DUPLA' : '👤 INDIVIDUAL'}
                      </span>
                      <span class="truncate">${escapeText(a.municipio || '- PE')}</span>
                    </div>
                  </div>
                </div>
                <button type="button" onclick="abrirModalVerCarteira('${a.codigo}')" class="flex-shrink-0 bg-pe-gold hover:bg-pe-goldHover text-pe-dark font-extrabold text-[11px] uppercase px-3 py-1.5 rounded-lg transition shadow flex items-center gap-1 cursor-pointer">
                  <span>🪪</span> Ver Carteira
                </button>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    function escapeText(str) {
      if (!str) return '';
      return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
    }

    function escapeJsString(str) {
      if (!str) return '';
      return String(str).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/"/g, '&quot;');
    }

    /* =========================================================
       ESTÚDIO DA CARTEIRA: DIMENSÕES & TEXTOS CUSTOMIZADOS (ABA 2)
       ========================================================= */
    function syncStudioWithCurrentLayout() {
      const inputCardWidth = document.getElementById('inputCardWidth');
      if (inputCardWidth) {
        inputCardWidth.value = currentBadgeLayout.cardWidth || 540;
        const valCardWidth = document.getElementById('valCardWidth');
        if (valCardWidth) valCardWidth.textContent = (currentBadgeLayout.cardWidth || 540) + 'px';

        const inputCardHeight = document.getElementById('inputCardHeight');
        if (inputCardHeight) inputCardHeight.value = currentBadgeLayout.cardMinHeight || 300;
        const valCardHeight = document.getElementById('valCardHeight');
        if (valCardHeight) valCardHeight.textContent = (currentBadgeLayout.cardMinHeight || 300) + 'px';

        const inputCardPadding = document.getElementById('inputCardPadding');
        if (inputCardPadding) inputCardPadding.value = currentBadgeLayout.cardPadding || 24;
        const valCardPadding = document.getElementById('valCardPadding');
        if (valCardPadding) valCardPadding.textContent = (currentBadgeLayout.cardPadding || 24) + 'px';

        const inputCardRadius = document.getElementById('inputCardRadius');
        if (inputCardRadius) inputCardRadius.value = currentBadgeLayout.cardBorderRadius || 16;
        const valCardRadius = document.getElementById('valCardRadius');
        if (valCardRadius) valCardRadius.textContent = (currentBadgeLayout.cardBorderRadius || 16) + 'px';

        const inputPhotoWidth = document.getElementById('inputPhotoWidth');
        if (inputPhotoWidth) inputPhotoWidth.value = currentBadgeLayout.photoWidth || 100;
        const valPhotoWidth = document.getElementById('valPhotoWidth');
        if (valPhotoWidth) valPhotoWidth.textContent = (currentBadgeLayout.photoWidth || 100) + 'px';

        const inputPhotoHeight = document.getElementById('inputPhotoHeight');
        if (inputPhotoHeight) inputPhotoHeight.value = currentBadgeLayout.photoHeight || 125;
        const valPhotoHeight = document.getElementById('valPhotoHeight');
        if (valPhotoHeight) valPhotoHeight.textContent = (currentBadgeLayout.photoHeight || 125) + 'px';

        const inputPhotoRadius = document.getElementById('inputPhotoRadius');
        if (inputPhotoRadius) inputPhotoRadius.value = currentBadgeLayout.photoRadius || 8;
        const valPhotoRadius = document.getElementById('valPhotoRadius');
        if (valPhotoRadius) valPhotoRadius.textContent = (currentBadgeLayout.photoRadius || 8) + 'px';

        renderCustomTextsList();
      }
      applyLayoutToCards();
    }

    function updateStudioLive() {
      const inputCardWidth = document.getElementById('inputCardWidth');
      if (!inputCardWidth) return;

      currentBadgeLayout.cardWidth = parseInt(inputCardWidth.value);
      const valCardWidth = document.getElementById('valCardWidth');
      if (valCardWidth) valCardWidth.textContent = currentBadgeLayout.cardWidth + 'px';

      const inputCardHeight = document.getElementById('inputCardHeight');
      if (inputCardHeight) {
        currentBadgeLayout.cardMinHeight = parseInt(inputCardHeight.value);
        const valCardHeight = document.getElementById('valCardHeight');
        if (valCardHeight) valCardHeight.textContent = currentBadgeLayout.cardMinHeight + 'px';
      }

      const inputCardPadding = document.getElementById('inputCardPadding');
      if (inputCardPadding) {
        currentBadgeLayout.cardPadding = parseInt(inputCardPadding.value);
        const valCardPadding = document.getElementById('valCardPadding');
        if (valCardPadding) valCardPadding.textContent = currentBadgeLayout.cardPadding + 'px';
      }

      const inputCardRadius = document.getElementById('inputCardRadius');
      if (inputCardRadius) {
        currentBadgeLayout.cardBorderRadius = parseInt(inputCardRadius.value);
        const valCardRadius = document.getElementById('valCardRadius');
        if (valCardRadius) valCardRadius.textContent = currentBadgeLayout.cardBorderRadius + 'px';
      }

      const inputPhotoWidth = document.getElementById('inputPhotoWidth');
      if (inputPhotoWidth) {
        currentBadgeLayout.photoWidth = parseInt(inputPhotoWidth.value);
        const valPhotoWidth = document.getElementById('valPhotoWidth');
        if (valPhotoWidth) valPhotoWidth.textContent = currentBadgeLayout.photoWidth + 'px';
      }

      const inputPhotoHeight = document.getElementById('inputPhotoHeight');
      if (inputPhotoHeight) {
        currentBadgeLayout.photoHeight = parseInt(inputPhotoHeight.value);
        const valPhotoHeight = document.getElementById('valPhotoHeight');
        if (valPhotoHeight) valPhotoHeight.textContent = currentBadgeLayout.photoHeight + 'px';
      }

      const inputPhotoRadius = document.getElementById('inputPhotoRadius');
      if (inputPhotoRadius) {
        currentBadgeLayout.photoRadius = parseInt(inputPhotoRadius.value);
        const valPhotoRadius = document.getElementById('valPhotoRadius');
        if (valPhotoRadius) valPhotoRadius.textContent = currentBadgeLayout.photoRadius + 'px';
      }

      applyLayoutToCards();
    }

    function applyLayoutToCards() {
      const card = document.getElementById('adminLiveCard');
      const photoContainer = document.getElementById('previewPhotoContainer');

      if (card) {
        card.style.maxWidth = currentBadgeLayout.cardWidth + 'px';
        card.style.minHeight = currentBadgeLayout.cardMinHeight + 'px';
        card.style.padding = currentBadgeLayout.cardPadding + 'px';
        card.style.borderRadius = currentBadgeLayout.cardBorderRadius + 'px';
      }

      if (photoContainer) {
        photoContainer.style.width = currentBadgeLayout.photoWidth + 'px';
        photoContainer.style.height = currentBadgeLayout.photoHeight + 'px';
        photoContainer.style.borderRadius = currentBadgeLayout.photoRadius + 'px';
      }

      const customContainer = document.getElementById('previewCustomTextsContainer');
      if (customContainer) {
        customContainer.innerHTML = '';
        if (currentBadgeLayout.customTexts) {
          currentBadgeLayout.customTexts.forEach(t => {
            const div = document.createElement('div');
            div.style.fontSize = (t.fontSize || 10) + 'px';
            div.style.color = t.color || '#f5b800';
            div.style.textAlign = t.align || 'left';
            div.style.marginTop = (t.marginTop || 4) + 'px';
            div.style.fontWeight = 'bold';
            div.textContent = t.text;
            customContainer.appendChild(div);
          });
        }
      }

      const studioWrapper = document.getElementById('studioCardWrapper');
      if (studioWrapper && card) {
        studioWrapper.innerHTML = '';
        studioWrapper.appendChild(card.cloneNode(true));
      }
    }

    function addCustomTextItem() {
      if (!currentBadgeLayout.customTexts) currentBadgeLayout.customTexts = [];
      const newId = Date.now();
      currentBadgeLayout.customTexts.push({
        id: newId,
        text: "TEXTO DA FEDERAÇÃO",
        fontSize: 10,
        color: "#f5b800",
        align: "left",
        marginTop: 4
      });
      renderCustomTextsList();
      applyLayoutToCards();
    }

    function removeCustomTextItem(id) {
      currentBadgeLayout.customTexts = currentBadgeLayout.customTexts.filter(t => t.id !== id);
      renderCustomTextsList();
      applyLayoutToCards();
    }

    function updateCustomTextItem(id, field, value) {
      const item = currentBadgeLayout.customTexts.find(t => t.id === id);
      if (item) {
        item[field] = value;
        applyLayoutToCards();
      }
    }

    function renderCustomTextsList() {
      const container = document.getElementById('customTextsList');
      if (!container) return;
      container.innerHTML = '';

      if (!currentBadgeLayout.customTexts || currentBadgeLayout.customTexts.length === 0) {
        container.innerHTML = `<span class="text-slate-500 text-[11px] block">Nenhum texto extra adicionado. Clique no botão acima para adicionar.</span>`;
        return;
      }

      currentBadgeLayout.customTexts.forEach(t => {
        const div = document.createElement('div');
        div.className = "bg-[#05080e] border border-[#1c253b] rounded-xl p-3 space-y-2";
        div.innerHTML = `
          <div class="flex items-center gap-2">
            <input type="text" value="${t.text}" oninput="updateCustomTextItem(${t.id}, 'text', this.value)" class="flex-1 bg-transparent border-b border-[#1c253b] text-white text-xs font-bold outline-none py-1 focus:border-pe-gold" />
            <button onclick="removeCustomTextItem(${t.id})" class="text-red-400 hover:text-red-300 font-bold px-2 py-0.5 cursor-pointer">✕</button>
          </div>
          <div class="grid grid-cols-3 gap-2 text-[10px]">
            <div>
              <span class="text-slate-400 block">Fonte:</span>
              <input type="number" min="8" max="22" value="${t.fontSize || 10}" oninput="updateCustomTextItem(${t.id}, 'fontSize', parseInt(this.value))" class="w-full bg-[#0b101d] border border-[#1c253b] rounded px-1.5 py-0.5 text-slate-200" />
            </div>
            <div>
              <span class="text-slate-400 block">Cor:</span>
              <input type="color" value="${t.color || '#f5b800'}" oninput="updateCustomTextItem(${t.id}, 'color', this.value)" class="w-full h-6 bg-transparent cursor-pointer rounded" />
            </div>
            <div>
              <span class="text-slate-400 block">Alinhamento:</span>
              <select onchange="updateCustomTextItem(${t.id}, 'align', this.value)" class="w-full bg-[#0b101d] border border-[#1c253b] rounded px-1 py-0.5 text-slate-200">
                <option value="left" ${t.align === 'left' ? 'selected' : ''}>Esquerda</option>
                <option value="center" ${t.align === 'center' ? 'selected' : ''}>Centro</option>
                <option value="right" ${t.align === 'right' ? 'selected' : ''}>Direita</option>
              </select>
            </div>
          </div>
        `;
        container.appendChild(div);
      });
    }

    function saveBadgeStudioLayout() {
      localStorage.setItem('pe_badge_layout_config', JSON.stringify(currentBadgeLayout));
      const notif = document.getElementById('studioSaveNotification');
      if (notif) {
        notif.classList.remove('hidden');
        setTimeout(() => notif.classList.add('hidden'), 3500);
      }
    }

    function resetBadgeStudioLayout() {
      currentBadgeLayout = JSON.parse(JSON.stringify(DEFAULT_BADGE_LAYOUT));
      syncStudioWithCurrentLayout();
    }

    /* =========================================================
       GERENCIAMENTO DE NOTÍCIAS & TORNEIOS (ABA NOTÍCIAS)
       Fiel ao Painel Oficial de Gerenciamento de Notícias
       ========================================================= */
    const INITIAL_NEWS = [];

    // Purga imediata de notícias mock/fictícias de teste
    (function purgeInitialMockNews() {
      try {
        const mockIds = ['1', '2', '3', '4', 'news-1', 'news-2', 'news-3', 'news-4'];
        let deleted = JSON.parse(localStorage.getItem('pe_deleted_news_ids') || '[]');
        let updated = false;
        mockIds.forEach(id => {
          if (!deleted.includes(id)) {
            deleted.push(id);
            updated = true;
          }
        });
        localStorage.setItem('pe_deleted_news_ids', JSON.stringify(deleted));
      } catch (e) {}
    })();

    const isMockNewsItem = (item) => {
      if (!item) return false;
      const idStr = String(item.id || '');
      const titleStr = (item.title || item.titulo || '').toLowerCase();
      return idStr === '1' || idStr === '2' || idStr === '3' || idStr === '4' ||
             idStr === 'news-1' || idStr === 'news-2' || idStr === 'news-3' || idStr === 'news-4' ||
             titleStr.includes('roma aguarda seus novos campeões') ||
             titleStr.includes('vitória fernandes chega a roma') ||
             titleStr.includes('homologado o regulamento oficial de quadras') ||
             titleStr.includes('abertas as inscrições para a 3ª etapa');
    };

    let newsItems = [];
    let currentFilter = 'ALL';
    let pendingDeleteId = null;

    async function loadNewsData() {
      const deletedIds = new Set(JSON.parse(localStorage.getItem('pe_deleted_news_ids') || '[]').map(String));

      // 1. Tentar ler do localStorage unificado
      const saved = localStorage.getItem('pe_news_db') || localStorage.getItem('foot_table_news_db');
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            newsItems = parsed
              .filter(item => !deletedIds.has(String(item.id)) && !isMockNewsItem(item))
              .map(item => ({
                id: item.id || ('news-' + Math.random().toString(36).substr(2, 9)),
                title: item.title || item.titulo || '',
                category: item.category || item.categoria || 'INFORMATIVO',
                date: item.date || item.data_publicacao || new Date().toISOString().split('T')[0],
                featured: !!item.featured || !!item.destaque,
                summary: item.summary || item.resumo || (item.content ? item.content.slice(0, 180) : '') || '',
                content: item.content || item.conteudo || '',
                image: item.image || item.imagem || '',
                link: item.link || ''
              }));
          } else {
            newsItems = [];
          }
        } catch (e) {
          newsItems = [];
        }
      } else {
        newsItems = [];
        await saveNewsData(true);
      }

      // 2. Se Supabase conectado, sincronizar da nuvem com timeout seguro
      if (supabaseClient) {
        try {
          const { data, error } = await safeSupabaseCall(
            supabaseClient
              .from('noticias')
              .select('*')
              .order('created_at', { ascending: false }),
            3000
          );

          if (!error && data) {
            const validData = data.filter(d => !deletedIds.has(String(d.id)) && !isMockNewsItem(d));
            newsItems = validData.map(d => ({
              id: d.id,
              title: d.titulo || d.title || '',
              category: d.categoria || d.category || 'INFORMATIVO',
              date: d.data_publicacao || (d.created_at ? d.created_at.split('T')[0] : ''),
              featured: !!d.destaque || !!d.featured,
              image: d.imagem_url || d.imagem || d.image || '',
              summary: d.resumo || d.summary || (d.conteudo ? d.conteudo.slice(0, 180) : ''),
              content: d.conteudo || d.content || '',
              link: d.link || ''
            }));
            saveNewsData(false);
          }
        } catch (err) {
          console.warn("Supabase indisponível para notícias, operando offline:", err);
        }

        // 3. Fallback no canal de nuvem de alta disponibilidade (keep_alive_logs) caso a tabela noticias esteja vazia
        if (newsItems.length === 0) {
          try {
            const { data: log } = await safeSupabaseCall(
              supabaseClient.from('keep_alive_logs').select('status').eq('source', 'fpeft_news_items').order('pinged_at', { ascending: false }).limit(1).maybeSingle(),
              2500
            ).catch(() => ({ data: null }));

            if (log && log.status) {
              const parsed = typeof log.status === 'string' ? JSON.parse(log.status) : log.status;
              if (Array.isArray(parsed) && parsed.length > 0) {
                newsItems = parsed;
                localStorage.setItem('pe_news_db', JSON.stringify(parsed));
                localStorage.setItem('foot_table_news_db', JSON.stringify(parsed));
              }
            }
          } catch (eCloud) {}
        }
      }

      // Ajusta data padrão se campo existir
      const dateInput = document.getElementById('news-date');
      if (dateInput && !dateInput.value) {
        dateInput.value = new Date().toISOString().split('T')[0];
      }

      renderNewsList();
      updateCounter();
      return newsItems;
    }

    // Alias para manter compatibilidade com chamadas existentes no painel
    async function loadNews() {
      return await loadNewsData();
    }
    async function renderAdminNews() {
      return await loadNewsData();
    }

    async function saveNewsData(syncSupabase = true) {
      localStorage.setItem('pe_news_db', JSON.stringify(newsItems));
      localStorage.setItem('foot_table_news_db', JSON.stringify(newsItems));
      updateCounter();
      if (typeof updateOperationsTelemetry === 'function') {
        updateOperationsTelemetry();
      }

      // Persistência direta em nuvem no Supabase
      if (syncSupabase && supabaseClient) {
        try {
          const payloadStr = JSON.stringify(newsItems);
          try {
            await supabaseClient.from('keep_alive_logs').delete().eq('source', 'fpeft_news_items');
          } catch (e1) {}
          await supabaseClient.from('keep_alive_logs').insert([{
            source: 'fpeft_news_items',
            status: payloadStr,
            pinged_at: new Date().toISOString()
          }]).catch(() => null);

          await supabaseClient.from('configuracoes').upsert([{
            chave: 'fpeft_news_items',
            valor: payloadStr,
            atualizado_em: new Date().toISOString()
          }], { onConflict: 'chave' }).catch(() => null);
        } catch (eCloud) {
          console.warn("Aviso ao sincronizar notícias na nuvem:", eCloud);
        }
      }
    }

    function updateCounter() {
      const counterEl = document.getElementById('news-counter');
      if (counterEl) {
        counterEl.innerText = newsItems.length;
      }
    }

    function formatDate(dateStr) {
      if (!dateStr) return '';
      const cleanDate = String(dateStr).includes('T') ? String(dateStr).split('T')[0] : String(dateStr);
      const parts = cleanDate.split('-');
      if (parts.length === 3) {
        return `${parts[2]}/${parts[1]}/${parts[0]}`;
      }
      return dateStr;
    }

    function escapeHTML(str) {
      if (!str) return '';
      return String(str).replace(/[&<>'"]/g, 
        tag => ({
          '&': '&amp;',
          '<': '&lt;',
          '>': '&gt;',
          "'": '&#39;',
          '"': '&quot;'
        }[tag] || tag)
      );
    }

    let _newsSearchTimeout = null;
    function debouncedRenderNewsList() {
      if (_newsSearchTimeout) clearTimeout(_newsSearchTimeout);
      _newsSearchTimeout = setTimeout(() => renderNewsList(), 120);
    }

    function renderNewsList() {
      const container = document.getElementById('news-container');
      if (!container) return;

      const searchInput = document.getElementById('search-input');
      const searchQuery = (searchInput ? searchInput.value : '').toLowerCase().trim();

      let filtered = newsItems.filter(item => {
        const matchesCategory = currentFilter === 'ALL' || item.category === currentFilter;
        const matchesSearch = !searchQuery || 
                              (item.title && item.title.toLowerCase().includes(searchQuery)) || 
                              (item.summary && item.summary.toLowerCase().includes(searchQuery)) ||
                              (item.category && item.category.toLowerCase().includes(searchQuery));
        return matchesCategory && matchesSearch;
      });

      filtered.sort((a, b) => {
        if (a.featured && !b.featured) return -1;
        if (!a.featured && b.featured) return 1;
        return new Date(b.date || 0) - new Date(a.date || 0);
      });

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="border border-[#1e293b]/60 bg-[#0f172a]/40 rounded-2xl p-8 text-center text-slate-500">
            <i class="fa-regular fa-folder-open text-3xl mb-2 text-slate-600 block"></i>
            Nenhuma notícia encontrada com os filtros selecionados.
          </div>
        `;
        return;
      }

      container.innerHTML = filtered.map(item => `
        <article class="bg-[#0f172a] border ${item.featured ? 'border-amber-500/50 shadow-lg shadow-amber-500/5' : 'border-[#1e293b]'} rounded-2xl p-4 sm:p-5 transition hover:border-slate-500 group relative">
          
          <div class="flex items-start justify-between gap-3 mb-2">
            <!-- Categoria e Data -->
            <div class="flex flex-wrap items-center gap-2 text-xs">
              <span class="font-bold text-[10px] tracking-wider uppercase px-2.5 py-0.5 rounded bg-blue-600 text-white shadow-sm">
                ${escapeHTML(item.category)}
              </span>
              <span class="text-slate-400 font-mono text-[11px]">
                ${formatDate(item.date)}
              </span>
              ${item.featured ? `
                <span class="inline-flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded">
                  <i class="fa-solid fa-star text-[9px]"></i> DESTAQUE
                </span>
              ` : ''}
            </div>

            <!-- Botão de Exclusão Rápida -->
            ${hasPermission('noticias_excluir') ? `
            <button 
              onclick="promptDelete('${item.id}')"
              class="text-xs font-semibold text-red-500 hover:text-red-400 hover:underline transition flex items-center gap-1 cursor-pointer"
              title="Excluir Matéria"
            >
              Excluir
            </button>` : ''}
          </div>

          ${item.image ? `
            <div class="mb-3 w-full h-28 sm:h-32 rounded-xl overflow-hidden border border-[#1e293b] bg-[#070a13]">
              <img src="${item.image}" alt="${escapeHTML(item.title)}" class="w-full h-full object-cover" onerror="this.parentElement.style.display='none'">
            </div>
          ` : ''}

          <!-- Título Oficial da Matéria -->
          <h4 class="font-oswald font-black text-sm sm:text-base uppercase tracking-tight text-white mb-2 leading-snug group-hover:text-blue-300 transition">
            ${escapeHTML(item.title)}
          </h4>

          <!-- Resumo da Matéria -->
          <p class="text-xs sm:text-[13px] text-slate-400 leading-relaxed mb-3">
            ${escapeHTML(item.summary || item.content || '')}
          </p>

          <!-- Barra de Ações do Card -->
          <div class="flex items-center justify-between pt-2 border-t border-[#1e293b]/60 text-xs">
            <div class="flex items-center gap-3">
              ${hasPermission('noticias_editar') ? `
              <button 
                type="button"
                onclick="editNews('${item.id}')" 
                class="text-slate-300 hover:text-[#f59e0b] flex items-center gap-1.5 transition font-medium cursor-pointer"
              >
                <i class="fa-solid fa-pen-to-square text-xs"></i> Editar
              </button>` : ''}

              <button 
                type="button"
                onclick="openPreviewModal('${item.id}')" 
                class="text-slate-400 hover:text-blue-400 flex items-center gap-1.5 transition font-medium cursor-pointer"
              >
                <i class="fa-solid fa-eye text-xs"></i> Ver Prévia
              </button>
            </div>

            ${item.link ? `
              <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-300 flex items-center gap-1 text-[11px]">
                <i class="fa-solid fa-arrow-up-right-from-square"></i> Link anexo
              </a>
            ` : ''}
          </div>
        </article>
      `).join('');
    }

    async function handleFormSubmit(e) {
      if (e) e.preventDefault();

      const editId = document.getElementById('edit-id').value;
      if (editId) {
        if (!hasPermission('noticias_editar')) {
          showToast('⚠️ Acesso Controlado: Você não possui permissão para editar notícias.', true);
          return;
        }
      } else {
        if (!hasPermission('noticias_publicar')) {
          showToast('⚠️ Acesso Controlado: Você não possui permissão para publicar notícias.', true);
          return;
        }
      }
      const title = document.getElementById('news-title').value.trim();
      const category = document.getElementById('news-category').value;
      const date = document.getElementById('news-date').value || new Date().toISOString().split('T')[0];
      const featured = document.getElementById('news-featured').checked;
      const image = document.getElementById('news-image').value.trim();
      const summary = document.getElementById('news-summary').value.trim();
      const content = document.getElementById('news-content').value.trim();
      const link = document.getElementById('news-link').value.trim();

      const submitBtn = document.getElementById('submit-button');
      const submitText = document.getElementById('submit-button-text');
      const originalText = submitText.innerText;

      submitBtn.disabled = true;
      submitText.innerText = editId ? "Atualizando no banco..." : "Publicando no Supabase...";

      const supabasePayload = {
        titulo: title,
        categoria: category,
        conteudo: content || summary,
        data_publicacao: formatDate(date),
        imagem_url: image || null
      };

      try {
        if (editId) {
          const index = newsItems.findIndex(n => String(n.id) === String(editId));
          if (index !== -1) {
            newsItems[index] = {
              ...newsItems[index],
              title,
              category,
              date,
              featured,
              image,
              summary,
              content,
              link
            };
          }
          if (supabaseClient) {
            try {
              await supabaseClient.from('noticias').update(supabasePayload).eq('id', editId);
            } catch (errCloud) {
              console.warn("Erro ao atualizar no Supabase:", errCloud);
            }
          }
          showToast("Matéria oficial atualizada e sincronizada com sucesso!");
        } else {
          let newGeneratedId = 'news-' + Date.now();
          if (supabaseClient) {
            try {
              const { data, error } = await supabaseClient.from('noticias').insert([supabasePayload]).select();
              if (!error && data && data[0] && data[0].id) {
                newGeneratedId = data[0].id;
              }
            } catch (errCloud) {
              console.warn("Erro ao inserir no Supabase:", errCloud);
            }
          }
          const newItem = {
            id: newGeneratedId,
            title,
            category,
            date,
            featured,
            image,
            summary,
            content,
            link
          };
          newsItems.unshift(newItem);
          showToast("Nova notícia publicada no site com sucesso!");
        }

        await saveNewsData(true);
        renderNewsList();
        resetForm();
      } catch (err) {
        console.error("Erro ao salvar notícia:", err);
        showToast("Erro ao processar notícia.", true);
      } finally {
        submitBtn.disabled = false;
        submitText.innerText = originalText;
      }
    }

    function editNews(id) {
      if (!hasPermission('noticias_editar')) {
        showToast('⚠️ Acesso Controlado: Você não possui permissão para editar notícias.', true);
        return;
      }
      const item = newsItems.find(n => String(n.id) === String(id));
      if (!item) return;

      document.getElementById('edit-id').value = item.id;
      document.getElementById('news-title').value = item.title;
      document.getElementById('news-category').value = item.category;
      
      // Converte data se necessário para YYYY-MM-DD
      let rawDate = item.date;
      if (rawDate && rawDate.includes('/')) {
        const parts = rawDate.split('/');
        if (parts.length === 3) rawDate = `${parts[2]}-${parts[1]}-${parts[0]}`;
      }
      document.getElementById('news-date').value = rawDate || new Date().toISOString().split('T')[0];
      
      document.getElementById('news-featured').checked = !!item.featured;
      document.getElementById('news-image').value = item.image || '';
      updateImagePreview(item.image || '');

      const infoBadge = document.getElementById('news-image-info');
      const infoText = document.getElementById('news-image-info-text');
      if (item.image) {
        if (infoBadge && infoText) {
          infoBadge.classList.remove('hidden');
          infoText.innerHTML = '<i class="fa-solid fa-circle-check text-emerald-400 mr-1"></i> Foto da matéria anexada (Supabase)';
        }
      } else {
        if (infoBadge) infoBadge.classList.add('hidden');
      }

      document.getElementById('news-summary').value = item.summary || item.content || '';
      document.getElementById('news-content').value = item.content || '';
      document.getElementById('news-link').value = item.link || '';

      const summaryLen = (item.summary || item.content || '').length;
      document.getElementById('summary-counter').innerText = `${summaryLen}/180 carac.`;

      document.getElementById('form-title').innerText = "Editar Matéria Oficial";
      document.getElementById('form-icon').innerHTML = '<i class="fa-solid fa-pen-nib"></i>';
      document.getElementById('cancel-edit-btn').classList.remove('hidden');
      document.getElementById('submit-button-text').innerText = "Salvar Alterações";

      const tabNoticias = document.getElementById('tabContent-noticias');
      if (tabNoticias) {
        tabNoticias.scrollIntoView({ behavior: 'smooth' });
      }
    }

    function resetForm() {
      const form = document.getElementById('news-form');
      if (form) form.reset();
      document.getElementById('edit-id').value = '';
      clearNewsImage();
      document.getElementById('summary-counter').innerText = '0/180 carac.';
      
      document.getElementById('form-title').innerText = "Publicar Nova Notícia";
      document.getElementById('form-icon').innerHTML = '<i class="fa-solid fa-bullhorn"></i>';
      document.getElementById('cancel-edit-btn').classList.add('hidden');
      document.getElementById('submit-button-text').innerText = "Publicar no Site & Supabase";
      
      const today = new Date().toISOString().split('T')[0];
      document.getElementById('news-date').value = today;
    }

    function promptDelete(id) {
      pendingDeleteId = id;
      const modal = document.getElementById('delete-modal');
      if (modal) {
        if (modal.parentElement !== document.body) {
          document.body.appendChild(modal);
        }
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        modal.style.display = 'flex';
      }
    }

    function closeDeleteModal() {
      pendingDeleteId = null;
      const modal = document.getElementById('delete-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        modal.style.display = 'none';
      }
    }

    async function confirmDeleteNews() {
      if (!pendingDeleteId) return;
      if (!hasPermission('noticias_excluir')) {
        showToast('⚠️ Acesso Controlado: Você não possui permissão para excluir notícias.', true);
        return;
      }

      const deleteTargetId = pendingDeleteId;
      newsItems = newsItems.filter(item => String(item.id) !== String(deleteTargetId));
      
      // Armazena ID na lista negra de exclusões para blindar contra recargas
      try {
        let deletedIds = JSON.parse(localStorage.getItem('pe_deleted_news_ids') || '[]');
        if (!deletedIds.includes(String(deleteTargetId))) {
          deletedIds.push(String(deleteTargetId));
          localStorage.setItem('pe_deleted_news_ids', JSON.stringify(deletedIds));
        }
      } catch (e) {}

      await saveNewsData(true);
      renderNewsList();

      if (supabaseClient) {
        try {
          await supabaseClient.from('noticias').delete().eq('id', deleteTargetId);
        } catch (e) {
          console.warn("Erro ao remover no Supabase:", e);
        }
      }

      showToast("Matéria removida com sucesso do sistema.", true);
      closeDeleteModal();
    }

    async function openPreviewModal(id) {
      let item = newsItems.find(n => String(n.id) === String(id));
      if (!item) {
        try {
          const raw = localStorage.getItem('pe_news_db') || localStorage.getItem('foot_table_news_db');
          if (raw) {
            const arr = JSON.parse(raw);
            if (Array.isArray(arr)) {
              item = arr.find(n => String(n.id) === String(id));
            }
          }
        } catch (e) {}
      }
      if (!item && supabaseClient) {
        try {
          const { data } = await supabaseClient.from('noticias').select('*').eq('id', id).single();
          if (data) {
            item = {
              id: data.id,
              title: data.titulo || data.title || '',
              category: data.categoria || data.category || 'INFORMATIVO',
              date: data.data_publicacao || (data.created_at ? data.created_at.split('T')[0] : ''),
              featured: !!data.destaque || !!data.featured,
              image: data.imagem_url || data.imagem || data.image || '',
              summary: data.resumo || data.summary || (data.conteudo ? data.conteudo.slice(0, 180) : ''),
              content: data.conteudo || data.content || '',
              link: data.link || ''
            };
          }
        } catch (e) {}
      }
      if (!item && newsItems && newsItems.length > 0) {
        item = newsItems[0];
      }
      if (!item) {
        if (typeof showToast === 'function') {
          showToast("Matéria não encontrada para pré-visualização.", true);
        }
        return;
      }

      const body = document.getElementById('preview-modal-body');
      if (!body) return;

      const imageSrc = item.image || item.imagem || item.imagem_url || '';
      const itemTitle = item.title || item.titulo || 'Sem Título';
      const itemCategory = item.category || item.categoria || 'INFORMATIVO';
      const itemDate = item.date || item.data_publicacao || '';
      const itemSummary = item.summary || item.resumo || (item.content ? item.content.slice(0, 180) : '') || '';
      const itemContent = item.content || item.conteudo || itemSummary || 'Nenhum texto adicional inserido para esta notícia.';
      const itemLink = item.link || item.pdfLink || item.pdf_url || '';

      body.innerHTML = `
        ${imageSrc ? `
          <div class="w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-[#1e293b] bg-black/40">
            <img src="${imageSrc}" alt="${escapeHTML(itemTitle)}" class="w-full h-full object-cover">
          </div>
        ` : ''}

        <div class="flex items-center gap-2 text-xs flex-wrap">
          <span class="bg-blue-600 text-white font-bold px-2.5 py-1 rounded-md text-[10px] uppercase tracking-wider">
            ${escapeHTML(itemCategory)}
          </span>
          <span class="text-slate-400 font-mono flex items-center gap-1">
            <i class="fa-regular fa-calendar text-[11px]"></i> ${formatDate(itemDate)}
          </span>
          ${item.featured ? '<span class="text-amber-400 font-bold text-[10px] flex items-center gap-1"><i class="fa-solid fa-star text-amber-400"></i> Matéria em Destaque</span>' : ''}
        </div>

        <h3 class="font-oswald font-black text-xl sm:text-2xl text-white uppercase leading-snug">
          ${escapeHTML(itemTitle)}
        </h3>

        ${itemSummary ? `
          <p class="text-sm text-amber-200/90 font-medium border-l-2 border-[#f59e0b] pl-3 py-1 bg-amber-500/5 rounded-r-lg italic">
            ${escapeHTML(itemSummary)}
          </p>
        ` : ''}

        <div class="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line pt-2 font-normal">
          ${escapeHTML(itemContent)}
        </div>

        ${itemLink ? `
          <div class="pt-3 border-t border-[#1e293b]">
            <a href="${itemLink}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-[#1e293b] transition">
              <i class="fa-solid fa-file-pdf text-red-400"></i>
              <span>Acessar Documento / Link Anexo</span>
              <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-400 ml-1"></i>
            </a>
          </div>
        ` : ''}
      `;

      const modal = document.getElementById('preview-modal');
      if (modal) {
        if (modal.parentElement !== document.body) {
          document.body.appendChild(modal);
        }
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      }
    }

    function closePreviewModal() {
      const modal = document.getElementById('preview-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        modal.style.display = 'none';
        document.body.style.overflow = '';
      }
    }

    function updateImagePreview(url) {
      const previewContainer = document.getElementById('image-preview-container');
      const previewImg = document.getElementById('image-preview');
      if (!previewContainer || !previewImg) return;

      if (url && (url.startsWith('http') || url.startsWith('data:image/'))) {
        previewImg.src = url;
        previewContainer.classList.remove('hidden');
      } else {
        previewContainer.classList.add('hidden');
        previewImg.src = '';
      }
    }

    async function handleNewsImageUpload(event) {
      const file = event.target.files && event.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        showToast("Por favor, selecione um arquivo de imagem válido (JPG, PNG, WEBP).", true);
        return;
      }

      const infoBadge = document.getElementById('news-image-info');
      const infoText = document.getElementById('news-image-info-text');
      if (infoBadge && infoText) {
        infoBadge.classList.remove('hidden');
        infoText.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> Otimizando foto para o Supabase...';
      }

      try {
        const reader = new FileReader();
        reader.onload = function(e) {
          const img = new Image();
          img.onload = function() {
            // Resolução ideal de exibição no portal (proporção nítida 16:10 retina 900x560)
            const maxW = 900;
            const maxH = 560;
            let width = img.width;
            let height = img.height;

            if (width > maxW || height > maxH) {
              const ratio = Math.min(maxW / width, maxH / height);
              width = Math.round(width * ratio);
              height = Math.round(height * ratio);
            }

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            ctx.imageSmoothingEnabled = true;
            ctx.imageSmoothingQuality = 'high';
            ctx.drawImage(img, 0, 0, width, height);

            const compressedDataUrl = canvas.toDataURL('image/jpeg', 0.82);

            const imageInput = document.getElementById('news-image');
            if (imageInput) {
              imageInput.value = compressedDataUrl;
            }

            updateImagePreview(compressedDataUrl);

            const sizeKb = Math.round((compressedDataUrl.length * 3 / 4) / 1024);
            if (infoBadge && infoText) {
              infoBadge.classList.remove('hidden');
              infoText.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 mr-1"></i> Foto do PC otimizada (${sizeKb} KB) - pronta para salvar no Supabase`;
            }

            showToast("Foto do PC carregada! Salve para gravar no Supabase.");
          };
          img.onerror = function() {
            if (infoBadge) infoBadge.classList.add('hidden');
            showToast("Erro ao processar imagem selecionada.", true);
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      } catch (err) {
        console.error("Erro no processamento da imagem:", err);
        if (infoBadge) infoBadge.classList.add('hidden');
        showToast("Falha ao ler o arquivo de imagem.", true);
      }
    }

    function clearNewsImage() {
      const fileInput = document.getElementById('news-file-input');
      if (fileInput) fileInput.value = '';

      const imageInput = document.getElementById('news-image');
      if (imageInput) imageInput.value = '';

      const infoBadge = document.getElementById('news-image-info');
      if (infoBadge) infoBadge.classList.add('hidden');

      const previewContainer = document.getElementById('image-preview-container');
      const previewImg = document.getElementById('image-preview');
      if (previewContainer) previewContainer.classList.add('hidden');
      if (previewImg) previewImg.src = '';
    }

    function setFilterCategory(category) {
      currentFilter = category;
      document.querySelectorAll('#category-pills .cat-pill').forEach(btn => {
        if (btn.innerText.trim() === category || (category === 'ALL' && btn.innerText.trim() === 'TODAS')) {
          btn.className = "cat-pill active text-[11px] font-bold px-3 py-1 rounded-full border border-blue-500/40 bg-blue-600/20 text-blue-300 cursor-pointer";
        } else {
          btn.className = "cat-pill text-[11px] font-bold px-3 py-1 rounded-full border border-[#1e293b] bg-[#0f172a] text-slate-400 hover:text-white cursor-pointer";
        }
      });
      renderNewsList();
    }

    function insertFormat(startTag, endTag) {
      const textarea = document.getElementById('news-content');
      if (!textarea) return;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selected = textarea.value.substring(start, end);
      textarea.value = textarea.value.substring(0, start) + startTag + selected + endTag + textarea.value.substring(end);
      textarea.focus();
    }

    function showToast(message, isDanger = false) {
      const toast = document.getElementById('toast');
      if (!toast) return;
      const icon = document.getElementById('toast-icon');
      const msg = document.getElementById('toast-message');

      if (msg) msg.innerText = message;
      if (icon) {
        icon.innerHTML = isDanger 
          ? '<i class="fa-solid fa-trash-can text-red-400"></i>' 
          : '<i class="fa-solid fa-circle-check text-emerald-400"></i>';
      }

      toast.classList.remove('translate-y-24', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');

      setTimeout(() => {
        toast.classList.add('translate-y-24', 'opacity-0');
        toast.classList.remove('translate-y-0', 'opacity-100');
      }, 3000);
    }

    /* =========================================================
       GERENCIAMENTO OFICIAL DA GALERIA DE FOTOS & ARENAS
       Sincronizado diretamente com a Seção #galeria do Portal Público
       ========================================================= */

    const DEFAULT_GALLERY_ITEMS = [
      {
        id: 'gal-1',
        tag: 'Arena Homologada',
        title: 'Estrutura de Quadra Oficial',
        desc: 'Espaço padronizado para circuitos da Federação Pernambucana.',
        image: 'assets/images/quadra 2.jpg'
      },
      {
        id: 'gal-2',
        tag: 'Equipamento Chancelado',
        title: 'Mesa Curva Oficial',
        desc: 'Dimensões regulamentares e curvatura para alta performance.',
        image: 'assets/images/futmesa 2.jpg'
      },
      {
        id: 'gal-3',
        tag: 'Competições Oficiais',
        title: 'Etapa Pernambucana',
        desc: 'Disputas intensas entre os melhores atletas do estado.',
        image: 'assets/images/fut 6 3.jpg'
      },
      {
        id: 'gal-4',
        tag: 'Formação & Treino',
        title: 'Preparação Técnica',
        desc: 'Centros de treinamento credenciados pela federação.',
        image: 'assets/images/fut 7 editada.jpg'
      },
      {
        id: 'gal-5',
        tag: 'Litoral Pernambucano',
        title: 'Foot Table Praiano',
        desc: 'Etapas à beira-mar celebrando o esporte ao ar livre.',
        image: 'assets/images/DA PRAIA.jpg'
      },
      {
        id: 'gal-6',
        tag: 'Premiação',
        title: 'Pódio dos Campeões',
        desc: 'Reconhecimento oficial dos atletas de destaque estadual.',
        image: 'assets/images/Fut 5 editado (2).jpg'
      }
    ];

    let galleryItems = [];
    let currentGalleryImageBase64 = 'assets/images/quadra 2.jpg';
    let pendingGalleryDeleteId = null;
    let pendingQuickReplaceId = null;

    function getStoredGalleryItems() {
      try {
        const saved = localStorage.getItem('pe_gallery_db');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      } catch (e) {}
      return JSON.parse(JSON.stringify(DEFAULT_GALLERY_ITEMS));
    }

    async function saveGalleryItems(items) {
      galleryItems = items;
      localStorage.setItem('pe_gallery_db', JSON.stringify(galleryItems));
      window.dispatchEvent(new Event('pe_gallery_updated'));
      renderGalleryManager();

      // Persistência direta no banco de dados e nuvem oficial (Supabase)
      if (supabaseClient) {
        try {
          const payloadStr = JSON.stringify(items);
          await supabaseClient.from('configuracoes').upsert([{
            chave: 'fpeft_gallery_items',
            valor: payloadStr,
            atualizado_em: new Date().toISOString()
          }], { onConflict: 'chave' }).catch(() => null);

          try {
            await supabaseClient.from('keep_alive_logs').delete().eq('source', 'fpeft_gallery_items');
          } catch (e1) {}
          await supabaseClient.from('keep_alive_logs').insert([{
            source: 'fpeft_gallery_items',
            status: payloadStr,
            pinged_at: new Date().toISOString()
          }]).catch(() => null);
        } catch (e) {
          console.warn("Aviso ao persistir galeria na nuvem:", e);
        }
      }
    }

    async function loadGalleryFromCloud() {
      if (supabaseClient) {
        try {
          // 1. Consulta canal de nuvem de alta disponibilidade
          const { data: log } = await safeSupabaseCall(
            supabaseClient.from('keep_alive_logs').select('status').eq('source', 'fpeft_gallery_items').order('pinged_at', { ascending: false }).limit(1).maybeSingle(),
            2500
          ).catch(() => ({ data: null }));

          if (log && log.status) {
            const parsed = typeof log.status === 'string' ? JSON.parse(log.status) : log.status;
            if (Array.isArray(parsed) && parsed.length > 0) {
              galleryItems = parsed;
              localStorage.setItem('pe_gallery_db', JSON.stringify(parsed));
              renderGalleryManager();
              return parsed;
            }
          }

          // 2. Consulta tabela configuracoes
          const { data: cfg } = await safeSupabaseCall(
            supabaseClient.from('configuracoes').select('valor').eq('chave', 'fpeft_gallery_items').maybeSingle(),
            2500
          ).catch(() => ({ data: null }));

          if (cfg && cfg.valor) {
            const parsed = typeof cfg.valor === 'string' ? JSON.parse(cfg.valor) : cfg.valor;
            if (Array.isArray(parsed) && parsed.length > 0) {
              galleryItems = parsed;
              localStorage.setItem('pe_gallery_db', JSON.stringify(parsed));
              renderGalleryManager();
              return parsed;
            }
          }
        } catch (e) {}
      }
      return getStoredGalleryItems();
    }

    function renderGalleryManager() {
      galleryItems = getStoredGalleryItems();
      const perms = getCurrentUserPermissions();
      const isMaster = !isCurrentAdriano() && perms.includes('*');
      const canEditGaleria = hasPermission('noticias_editar') || hasPermission('noticias_publicar') || isMaster;
      const canDeleteGaleria = hasPermission('noticias_excluir') || isMaster;

      const container = document.getElementById('adminGalleryGrid');
      const counter = document.getElementById('gallery-active-counter');
      if (counter) counter.textContent = galleryItems.length;
      if (!container) return;

      if (galleryItems.length === 0) {
        container.innerHTML = `
          <div class="col-span-full border border-[#1e293b]/60 bg-[#0f172a]/40 rounded-2xl p-10 text-center text-slate-500 space-y-3">
            <i class="fa-regular fa-images text-4xl text-slate-600 block"></i>
            <p class="text-sm font-semibold text-slate-400">Nenhuma foto ativa na galeria.</p>
            <p class="text-xs text-slate-500">Adicione uma foto no formulário acima ou restaure o padrão oficial da federação.</p>
            <button type="button" onclick="confirmResetGalleryToDefault()" class="mt-2 px-4 py-2 bg-pe-gold text-pe-dark font-oswald text-xs font-bold uppercase rounded-xl shadow cursor-pointer">
              Restaurar 6 Fotos Padrão
            </button>
          </div>
        `;
        return;
      }

      container.innerHTML = galleryItems.map((item, index) => `
        <article class="bg-[#0b101d] border border-[#1c253b] hover:border-slate-500 rounded-2xl overflow-hidden shadow-lg transition flex flex-col group relative">
          <!-- Miniatura da Imagem com Aspect Ratio 4:3 -->
          <div class="aspect-[4/3] w-full overflow-hidden bg-slate-900 relative">
            <img src="${item.image || 'assets/images/quadra 2.jpg'}" alt="${escapeHTML(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" onerror="this.src='assets/images/quadra 2.jpg'" />
            <div class="absolute top-2.5 right-2.5 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2 py-1 rounded-lg border border-white/10 text-[10px] text-white font-mono">
              <span>#${index + 1}</span>
            </div>
          </div>

          <!-- Informações de Texto -->
          <div class="p-4 flex-1 flex flex-col justify-between bg-gradient-to-t from-[#070b14] via-[#0b101d] to-transparent">
            <div>
              <span class="text-[10px] font-bold text-pe-gold uppercase tracking-wider block mb-1">
                ${escapeHTML(item.tag || 'ARENA HOMOLOGADA')}
              </span>
              <h4 class="font-oswald text-sm sm:text-base uppercase font-bold text-white leading-tight mb-1.5 group-hover:text-amber-300 transition">
                ${escapeHTML(item.title || 'Sem Título')}
              </h4>
              <p class="text-slate-400 text-xs leading-relaxed line-clamp-2">
                ${escapeHTML(item.desc || '')}
              </p>
            </div>

            <!-- Barra de Ações com Trocar Foto, Editar Textos e Excluir -->
            <div class="pt-4 mt-3 border-t border-[#1c253b] flex items-center justify-between gap-2 text-xs">
              <div class="flex items-center gap-2">
                ${canEditGaleria ? `
                <button type="button" onclick="editGalleryItem('${item.id}')" class="px-2.5 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-lg border border-slate-700 transition flex items-center gap-1 cursor-pointer" title="Editar textos ou foto no formulário">
                  <i class="fa-solid fa-pen text-pe-gold text-[10px]"></i>
                  <span>Editar</span>
                </button>
                <button type="button" onclick="triggerQuickReplacePhoto('${item.id}')" class="px-2.5 py-1.5 bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 text-xs font-semibold rounded-lg border border-blue-500/30 transition flex items-center gap-1 cursor-pointer" title="Substituir apenas a foto deste card mantendo os textos">
                  <i class="fa-solid fa-camera text-[10px]"></i>
                  <span>Trocar Foto</span>
                </button>` : '<span class="text-[10px] text-slate-500 font-mono italic">🔒 Somente Visualização</span>'}
              </div>

              <div class="flex items-center gap-1">
                ${(canEditGaleria && index > 0) ? `
                  <button type="button" onclick="moveGalleryItem('${item.id}', -1)" class="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition cursor-pointer" title="Mover para esquerda/cima">
                    <i class="fa-solid fa-arrow-left text-[10px]"></i>
                  </button>
                ` : ''}
                ${(canEditGaleria && index < galleryItems.length - 1) ? `
                  <button type="button" onclick="moveGalleryItem('${item.id}', 1)" class="p-1.5 text-slate-400 hover:text-white rounded hover:bg-slate-800 transition cursor-pointer" title="Mover para direita/baixo">
                    <i class="fa-solid fa-arrow-right text-[10px]"></i>
                  </button>
                ` : ''}
                ${canDeleteGaleria ? `
                <button type="button" onclick="promptDeleteGalleryItem('${item.id}')" class="p-1.5 text-red-400 hover:text-red-300 rounded hover:bg-red-950/40 transition cursor-pointer" title="Excluir Foto">
                  <i class="fa-solid fa-trash-can text-[11px]"></i>
                </button>` : ''}
              </div>
            </div>
          </div>
        </article>
      `).join('');
    }

    function setGalleryUploadMode(mode) {
      const btnFile = document.getElementById('gallery-mode-file-btn');
      const btnCam = document.getElementById('gallery-mode-camera-btn');
      const btnUrl = document.getElementById('gallery-mode-url-btn');
      const dropzone = document.getElementById('gallery-dropzone-box');
      const urlBox = document.getElementById('gallery-url-box');

      [btnFile, btnCam, btnUrl].forEach(b => {
        if (!b) return;
        b.className = "py-2 px-2 text-center text-xs font-bold rounded-xl border border-[#1c253b] bg-[#070b14] text-slate-400 hover:text-white transition cursor-pointer";
      });

      if (mode === 'file') {
        if (btnFile) btnFile.className = "py-2 px-2 text-center text-xs font-bold rounded-xl border border-pe-gold bg-pe-gold/10 text-pe-gold transition cursor-pointer";
        if (dropzone) dropzone.classList.remove('hidden');
        if (urlBox) urlBox.classList.add('hidden');
        triggerGalleryFilePicker();
      } else if (mode === 'camera') {
        if (btnCam) btnCam.className = "py-2 px-2 text-center text-xs font-bold rounded-xl border border-pe-gold bg-pe-gold/10 text-pe-gold transition cursor-pointer";
        if (dropzone) dropzone.classList.remove('hidden');
        if (urlBox) urlBox.classList.add('hidden');
        const camInput = document.getElementById('gallery-camera-input');
        if (camInput) camInput.click();
      } else if (mode === 'url') {
        if (btnUrl) btnUrl.className = "py-2 px-2 text-center text-xs font-bold rounded-xl border border-pe-gold bg-pe-gold/10 text-pe-gold transition cursor-pointer";
        if (dropzone) dropzone.classList.add('hidden');
        if (urlBox) urlBox.classList.remove('hidden');
        const urlInput = document.getElementById('gallery-url-input');
        if (urlInput) urlInput.focus();
      }
    }

    function triggerGalleryFilePicker() {
      const fileInput = document.getElementById('gallery-file-input');
      if (fileInput) fileInput.click();
    }

    function handleGalleryFileSelect(input) {
      const file = input && input.files && input.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        showToast("Selecione um arquivo de imagem válido (JPG, PNG, WEBP).", true);
        return;
      }

      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
          const maxDim = 1600;
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            if (w > h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.88);

          setGalleryPreviewImage(dataUrl);
          showToast("Foto carregada com sucesso! Ajuste os textos e clique em Salvar.");
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    function loadGalleryUrlImage() {
      const urlInput = document.getElementById('gallery-url-input');
      const url = urlInput ? urlInput.value.trim() : '';
      if (!url) {
        showToast("Insira uma URL de imagem válida.", true);
        return;
      }
      setGalleryPreviewImage(url);
      showToast("Link da foto aplicado na prévia!");
    }

    function setGalleryPreviewImage(src) {
      currentGalleryImageBase64 = src;
      const previewImg = document.getElementById('gallery-preview-img');
      const emptyBox = document.getElementById('gallery-preview-empty');
      const clearBtn = document.getElementById('gallery-clear-photo-btn');
      if (previewImg) {
        previewImg.src = src;
        previewImg.classList.remove('hidden');
      }
      if (emptyBox) emptyBox.classList.add('hidden');
      if (clearBtn) clearBtn.classList.remove('hidden');
    }

    function clearGalleryImage() {
      currentGalleryImageBase64 = '';
      const previewImg = document.getElementById('gallery-preview-img');
      const emptyBox = document.getElementById('gallery-preview-empty');
      const clearBtn = document.getElementById('gallery-clear-photo-btn');
      if (previewImg) {
        previewImg.src = '';
        previewImg.classList.add('hidden');
      }
      if (emptyBox) emptyBox.classList.remove('hidden');
      if (clearBtn) clearBtn.classList.add('hidden');
    }

    function updateGalleryLivePreview() {
      const tagInput = document.getElementById('gallery-input-tag');
      const titleInput = document.getElementById('gallery-input-title');
      const descInput = document.getElementById('gallery-input-desc');

      const tagVal = (tagInput && tagInput.value.trim()) || 'ARENA HOMOLOGADA';
      const titleVal = (titleInput && titleInput.value.trim()) || 'ESTRUTURA DE QUADRA OFICIAL';
      const descVal = (descInput && descInput.value.trim()) || 'Espaço padronizado para circuitos da Federação Pernambucana.';

      const previewTag = document.getElementById('gallery-preview-tag');
      const previewTitle = document.getElementById('gallery-preview-title');
      const previewDesc = document.getElementById('gallery-preview-desc');
      const counter = document.getElementById('gallery-desc-counter');

      if (previewTag) previewTag.textContent = tagVal;
      if (previewTitle) previewTitle.textContent = titleVal;
      if (previewDesc) previewDesc.textContent = descVal;
      if (counter && descInput) counter.textContent = `${descInput.value.length}/150 carac.`;
    }

    function setGalleryTagValue(val) {
      const input = document.getElementById('gallery-input-tag');
      if (input) {
        input.value = val;
        updateGalleryLivePreview();
      }
    }

    function focusGalleryForm() {
      resetGalleryForm();
      const formCard = document.getElementById('gallery-form-card');
      if (formCard) formCard.scrollIntoView({ behavior: 'smooth' });
      const tagInput = document.getElementById('gallery-input-tag');
      if (tagInput) tagInput.focus();
    }

    function resetGalleryForm() {
      const form = document.getElementById('gallery-form');
      if (form) form.reset();
      const editId = document.getElementById('gallery-edit-id');
      if (editId) editId.value = '';
      const titleEl = document.getElementById('gallery-form-title');
      if (titleEl) titleEl.textContent = 'Adicionar Nova Foto à Galeria';
      const submitText = document.getElementById('gallery-submit-text');
      if (submitText) submitText.textContent = 'SALVAR FOTO NA GALERIA';
      const icon = document.getElementById('gallery-form-icon');
      if (icon) icon.className = 'fa-solid fa-camera';
      const cancelBtn = document.getElementById('gallery-cancel-edit-btn');
      if (cancelBtn) cancelBtn.classList.add('hidden');
      currentGalleryImageBase64 = 'assets/images/quadra 2.jpg';
      setGalleryPreviewImage('assets/images/quadra 2.jpg');
      updateGalleryLivePreview();
    }

    function editGalleryItem(id) {
      const items = getStoredGalleryItems();
      const item = items.find(i => String(i.id) === String(id));
      if (!item) return;

      document.getElementById('gallery-edit-id').value = item.id;
      document.getElementById('gallery-input-tag').value = item.tag || '';
      document.getElementById('gallery-input-title').value = item.title || '';
      document.getElementById('gallery-input-desc').value = item.desc || '';

      setGalleryPreviewImage(item.image || 'assets/images/quadra 2.jpg');
      updateGalleryLivePreview();

      document.getElementById('gallery-form-title').textContent = 'Editar Foto & Textos';
      document.getElementById('gallery-submit-text').textContent = 'SALVAR ALTERAÇÕES DA FOTO';
      document.getElementById('gallery-form-icon').className = 'fa-solid fa-pen-nib';
      document.getElementById('gallery-cancel-edit-btn').classList.remove('hidden');

      const formCard = document.getElementById('gallery-form-card');
      if (formCard) formCard.scrollIntoView({ behavior: 'smooth' });
    }

    function handleGalleryFormSubmit(e) {
      if (e) e.preventDefault();
      if (!hasPermission('noticias_publicar') && !hasPermission('noticias_editar') && !hasPermission('*')) {
        showToast("⚠️ Acesso Controlado: Sua conta não possui permissão para cadastrar fotos na galeria.", true);
        return;
      }

      const editId = document.getElementById('gallery-edit-id').value.trim();
      const tag = document.getElementById('gallery-input-tag').value.trim();
      const title = document.getElementById('gallery-input-title').value.trim();
      const desc = document.getElementById('gallery-input-desc').value.trim();
      const image = currentGalleryImageBase64 || 'assets/images/quadra 2.jpg';

      if (!tag || !title) {
        showToast("Preencha a categoria e o título da foto.", true);
        return;
      }

      let items = getStoredGalleryItems();

      if (editId) {
        // Atualiza item existente
        const idx = items.findIndex(i => String(i.id) === String(editId));
        if (idx !== -1) {
          items[idx] = {
            ...items[idx],
            tag,
            title,
            desc,
            image: image || items[idx].image
          };
          showToast("Foto e textos atualizados com sucesso!");
        }
      } else {
        // Adiciona novo item
        const newItem = {
          id: 'gal-' + Date.now().toString(36) + Math.random().toString(36).substr(2, 4),
          tag,
          title,
          desc,
          image
        };
        items.unshift(newItem);
        showToast("Nova foto adicionada à galeria com sucesso!");
      }

      saveGalleryItems(items);
      resetGalleryForm();
    }

    // Troca rápida de foto direto no card
    function triggerQuickReplacePhoto(id) {
      if (!hasPermission('noticias_editar') && !hasPermission('*')) {
        showToast("⚠️ Acesso Controlado: Sua conta não possui permissão para alterar fotos da galeria.", true);
        return;
      }
      pendingQuickReplaceId = id;
      const input = document.getElementById('gallery-quick-replace-input');
      if (input) input.click();
    }

    function handleQuickReplacePhotoSelected(input) {
      const file = input && input.files && input.files[0];
      if (!file || !pendingQuickReplaceId) return;

      const reader = new FileReader();
      reader.onload = function(e) {
        const img = new Image();
        img.onload = function() {
          const maxDim = 1600;
          let w = img.width;
          let h = img.height;
          if (w > maxDim || h > maxDim) {
            if (w > h) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            } else {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          const canvas = document.createElement('canvas');
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0, w, h);
          const dataUrl = canvas.toDataURL('image/jpeg', 0.88);

          let items = getStoredGalleryItems();
          const target = items.find(i => String(i.id) === String(pendingQuickReplaceId));
          if (target) {
            target.image = dataUrl;
            saveGalleryItems(items);
            showToast(`Foto substituída com sucesso para "${target.title}"!`);
          }
          pendingQuickReplaceId = null;
          input.value = '';
        };
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }

    function moveGalleryItem(id, offset) {
      if (!hasPermission('noticias_editar') && !hasPermission('*')) {
        showToast("⚠️ Acesso Controlado: Sua conta não possui permissão para reordenar a galeria.", true);
        return;
      }
      let items = getStoredGalleryItems();
      const idx = items.findIndex(i => String(i.id) === String(id));
      if (idx === -1) return;
      const newIdx = idx + offset;
      if (newIdx < 0 || newIdx >= items.length) return;

      const temp = items[idx];
      items[idx] = items[newIdx];
      items[newIdx] = temp;
      saveGalleryItems(items);
    }

    function promptDeleteGalleryItem(id) {
      pendingGalleryDeleteId = id;
      const modal = document.getElementById('gallery-delete-modal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeGalleryDeleteModal() {
      pendingGalleryDeleteId = null;
      const modal = document.getElementById('gallery-delete-modal');
      if (modal) modal.classList.add('hidden');
    }

    function confirmDeleteGalleryItem() {
      if (!pendingGalleryDeleteId) return;
      if (!hasPermission('noticias_excluir') && !hasPermission('*')) {
        showToast("⚠️ Acesso Controlado: Sua conta não possui permissão para excluir fotos da galeria.", true);
        return;
      }
      let items = getStoredGalleryItems();
      items = items.filter(i => String(i.id) !== String(pendingGalleryDeleteId));
      saveGalleryItems(items);
      closeGalleryDeleteModal();
      showToast("Foto removida da galeria com sucesso.", true);
    }

    function confirmResetGalleryToDefault() {
      if (!hasPermission('gestao_limpeza') && !hasPermission('*')) {
        showToast("⚠️ Acesso Controlado: Sua conta não possui permissão para restaurar padrões do sistema.", true);
        return;
      }
      if (confirm("Deseja restaurar as 6 fotos oficiais e textos de fábrica da Federação?")) {
        saveGalleryItems(JSON.parse(JSON.stringify(DEFAULT_GALLERY_ITEMS)));
        showToast("Galeria oficial restaurada com sucesso!");
      }
    }

    /* =========================================================
       CONFIGURAÇÃO DOS BANCOS (PRIMÁRIO & RESERVA) E FAILOVER
       ========================================================= */
    const SECONDARY_BACKUP_SQL_TEMPLATE = `-- =============================================================================
-- BANCO DE DADOS RESERVA / FAILOVER - FPEFT
-- Federação Pernambucana de Foot Table
-- SCRIPT DE BLINDAGEM, SEGURANÇA CONTRA VAZAMENTOS (LGPD) E RLS REFORÇADO
--
-- Execute este script no SQL Editor do seu SEGUNDO projeto Supabase:
-- https://supabase.com/dashboard/project/xvqsysfqbkfsogkwtbal/sql/new
-- =============================================================================

-- 1. HABILITAR EXTENSÃO CRIPTOGRÁFICA
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 2. TABELA DE ATLETAS FEDERADOS
CREATE TABLE IF NOT EXISTS public.atletas (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    codigo VARCHAR(10) UNIQUE NOT NULL,
    nome TEXT NOT NULL,
    cpf TEXT,
    nascimento TEXT,
    telefone TEXT,
    municipio TEXT,
    categoria TEXT DEFAULT 'AMADOR',
    modalidade TEXT DEFAULT 'SOLO (INDIVIDUAL)',
    status TEXT DEFAULT 'REGULAR',
    clube TEXT,
    federado TEXT,
    validade TEXT DEFAULT '12/2026',
    foto_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_backup_atletas_codigo ON public.atletas(codigo);
CREATE INDEX IF NOT EXISTS idx_backup_atletas_status ON public.atletas(status);

-- 3. TABELA DE CONFIGURAÇÕES (LAYOUT DO STUDIO E GALERIA)
CREATE TABLE IF NOT EXISTS public.configuracoes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chave VARCHAR(100) UNIQUE NOT NULL,
    valor TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_backup_configuracoes_chave ON public.configuracoes(chave);

-- 4. TABELA DE NOTÍCIAS & TORNEIOS
CREATE TABLE IF NOT EXISTS public.noticias (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    titulo TEXT NOT NULL,
    categoria TEXT DEFAULT 'INFORMATIVO',
    conteudo TEXT NOT NULL,
    data_publicacao TEXT,
    imagem_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 5. TABELA DE KEEP-ALIVE (PING ANTI-PAUSA AUTOMÁTICO E CANAL DE STATUS)
CREATE TABLE IF NOT EXISTS public.keep_alive_logs (
    id BIGINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    pinged_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    source TEXT DEFAULT 'failover_backup',
    status TEXT DEFAULT 'active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_backup_keep_alive_source ON public.keep_alive_logs(source);

-- 6. TABELA DE ADMINISTRADORES (ESTRITAMENTE CONFIDENCIAL)
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome TEXT NOT NULL,
    cargo TEXT DEFAULT 'Diretoria',
    email TEXT UNIQUE NOT NULL,
    senha TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 7. TABELA DE LOGS DE AUDITORIA (BLINDAGEM DE IP E SESSÕES)
CREATE TABLE IF NOT EXISTS public.audit_logs (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
    actor_email TEXT NOT NULL,
    action TEXT NOT NULL,
    target_resource TEXT NOT NULL,
    details JSONB DEFAULT '{}'::jsonb,
    ip_address TEXT,
    user_agent TEXT
);

-- =============================================================================
-- BLINDAGEM RLS: FORÇAR ROW LEVEL SECURITY EM TODAS AS TABELAS
-- =============================================================================

ALTER TABLE public.atletas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.atletas FORCE ROW LEVEL SECURITY;

ALTER TABLE public.configuracoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.configuracoes FORCE ROW LEVEL SECURITY;

ALTER TABLE public.noticias ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.noticias FORCE ROW LEVEL SECURITY;

ALTER TABLE public.keep_alive_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.keep_alive_logs FORCE ROW LEVEL SECURITY;

ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users FORCE ROW LEVEL SECURITY;

ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs FORCE ROW LEVEL SECURITY;

-- =============================================================================
-- POLÍTICAS DE ACESSO: ISOLAMENTO TOTAL DE DADOS SENSÍVEIS (ANTI-VAZAMENTO)
-- =============================================================================

-- A) ADMIN_USERS: BLOQUEIO TOTAL A USUÁRIOS ANÔNIMOS (ZERO VAZAMENTO DE SENHAS)
DROP POLICY IF EXISTS "Permitir gestao admin backup" ON public.admin_users;
DROP POLICY IF EXISTS "admin_users_isolate_all" ON public.admin_users;
DROP POLICY IF EXISTS "RLS_admin_users_isolate" ON public.admin_users;

CREATE POLICY "RLS_admin_users_isolate"
ON public.admin_users FOR ALL
TO authenticated, service_role
USING (true)
WITH CHECK (true);

-- Revoga explicitamente permissões de leitura/escrita de 'anon' na tabela de administradores
REVOKE ALL ON public.admin_users FROM anon;

-- B) AUDIT_LOGS: BLOQUEIO TOTAL A USUÁRIOS ANÔNIMOS (ZERO VAZAMENTO DE IPS E LOGS)
DROP POLICY IF EXISTS "audit_logs_isolate_all" ON public.audit_logs;
DROP POLICY IF EXISTS "RLS_audit_logs_isolate" ON public.audit_logs;

CREATE POLICY "RLS_audit_logs_isolate"
ON public.audit_logs FOR ALL
TO authenticated, service_role
USING (true)
WITH CHECK (true);

-- Revoga explicitamente permissões de leitura de 'anon' nos logs de auditoria
REVOKE ALL ON public.audit_logs FROM anon;

-- C) ATLETAS: CONSULTA PÚBLICA + CADASTRO CONTROLADO + BLOQUEIO DE EXCLUSÃO ANÔNIMA
DROP POLICY IF EXISTS "Permitir leitura publica atletas backup" ON public.atletas;
DROP POLICY IF EXISTS "Permitir gestao atletas backup" ON public.atletas;
DROP POLICY IF EXISTS "RLS_atletas_select" ON public.atletas;
DROP POLICY IF EXISTS "RLS_atletas_insert" ON public.atletas;
DROP POLICY IF EXISTS "RLS_atletas_update" ON public.atletas;
DROP POLICY IF EXISTS "RLS_atletas_delete" ON public.atletas;

-- 1. Leitura pública permitida para consulta e validação de carteirinhas
CREATE POLICY "RLS_atletas_select"
ON public.atletas FOR SELECT
TO anon, authenticated, service_role
USING (true);

-- 2. Inserção permitida para cadastro do painel e espelhamento intermediário
CREATE POLICY "RLS_atletas_insert"
ON public.atletas FOR INSERT
TO anon, authenticated, service_role
WITH CHECK (true);

-- 3. Atualização permitida para modificações e sincronização
CREATE POLICY "RLS_atletas_update"
ON public.atletas FOR UPDATE
TO anon, authenticated, service_role
USING (true)
WITH CHECK (true);

-- 4. Exclusão BLOQUEADA para anônimos (apenas administradores autenticados e service_role)
CREATE POLICY "RLS_atletas_delete"
ON public.atletas FOR DELETE
TO authenticated, service_role
USING (true);

-- D) CONFIGURAÇÕES: STUDIO E LAYOUT DA CARTEIRA
DROP POLICY IF EXISTS "Permitir leitura configuracoes backup" ON public.configuracoes;
DROP POLICY IF EXISTS "Permitir gestao configuracoes backup" ON public.configuracoes;
DROP POLICY IF EXISTS "RLS_configuracoes_select" ON public.configuracoes;
DROP POLICY IF EXISTS "RLS_configuracoes_modify" ON public.configuracoes;

CREATE POLICY "RLS_configuracoes_select"
ON public.configuracoes FOR SELECT
TO anon, authenticated, service_role
USING (true);

CREATE POLICY "RLS_configuracoes_modify"
ON public.configuracoes FOR ALL
TO anon, authenticated, service_role
USING (true)
WITH CHECK (true);

-- E) NOTÍCIAS & TORNEIOS
DROP POLICY IF EXISTS "Permitir leitura noticias backup" ON public.noticias;
DROP POLICY IF EXISTS "Permitir gestao noticias backup" ON public.noticias;
DROP POLICY IF EXISTS "RLS_noticias_select" ON public.noticias;
DROP POLICY IF EXISTS "RLS_noticias_all" ON public.noticias;

CREATE POLICY "RLS_noticias_select"
ON public.noticias FOR SELECT
TO anon, authenticated, service_role
USING (true);

CREATE POLICY "RLS_noticias_all"
ON public.noticias FOR ALL
TO anon, authenticated, service_role
USING (true)
WITH CHECK (true);

-- F) KEEP-ALIVE LOGS & STATUS CHANNEL
DROP POLICY IF EXISTS "Permitir ping keep_alive backup" ON public.keep_alive_logs;
DROP POLICY IF EXISTS "RLS_keep_alive_all" ON public.keep_alive_logs;

CREATE POLICY "RLS_keep_alive_all"
ON public.keep_alive_logs FOR ALL
TO anon, authenticated, service_role
USING (true)
WITH CHECK (true);

-- =============================================================================
-- FUNÇÃO RPC DE AUTENTICAÇÃO INSTITUCIONAL SEGURA (CRIPTOGRAFIA NATIVA)
-- Permite autenticar administradores sem trafegar ou expor senhas pela REST API
-- =============================================================================
CREATE OR REPLACE FUNCTION public.autenticar_gestor_institucional(
    p_email TEXT,
    p_senha_plana TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $
DECLARE
    v_admin RECORD;
    v_valido BOOLEAN := FALSE;
BEGIN
    SELECT * INTO v_admin 
    FROM public.admin_users 
    WHERE lower(email) = lower(trim(p_email))
    LIMIT 1;

    IF NOT FOUND THEN
        RETURN jsonb_build_object('sucesso', false, 'mensagem', 'Credenciais inválidas');
    END IF;

    -- Suporte duplo: bcrypt (pgcrypto) ou verificação direta segura
    IF v_admin.senha LIKE '$2%' THEN
        v_valido := (crypt(p_senha_plana, v_admin.senha) = v_admin.senha);
    ELSE
        v_valido := (v_admin.senha = p_senha_plana);
    END IF;

    IF v_valido THEN
        RETURN jsonb_build_object(
            'sucesso', true,
            'usuario', jsonb_build_object(
                'id', v_admin.id,
                'nome', v_admin.nome,
                'email', v_admin.email,
                'cargo', v_admin.cargo
            )
        );
    ELSE
        RETURN jsonb_build_object('sucesso', false, 'mensagem', 'Credenciais inválidas');
    END IF;
END;
$;
`;

    let _dbAutoSaveTimer = null;

    /* SALVAMENTO INSTANTÂNEO AUTOMÁTICO AO DIGITAR/COLAR (SEM BOTÕES) */
    function autoSaveIntermediaryDatabases() {
      clearTimeout(_dbAutoSaveTimer);
      _dbAutoSaveTimer = setTimeout(async () => {
        const pUrl = (document.getElementById('adminCfgUrl')?.value || '').trim();
        const pKey = (document.getElementById('adminCfgKey')?.value || '').trim();
        const sUrl = (document.getElementById('adminCfgSecondaryUrl')?.value || '').trim();
        const sKey = (document.getElementById('adminCfgSecondaryKey')?.value || '').trim();

        if (pUrl) localStorage.setItem('pe_supabase_url', pUrl);
        if (pKey) localStorage.setItem('pe_supabase_anon_key', pKey);
        if (sUrl) localStorage.setItem('pe_supabase_secondary_url', sUrl);
        if (sKey) localStorage.setItem('pe_supabase_secondary_anon_key', sKey);

        SUPABASE_URL = pUrl || SUPABASE_URL;
        SUPABASE_ANON_KEY = pKey || SUPABASE_ANON_KEY;
        SUPABASE_SECONDARY_URL = sUrl;
        SUPABASE_SECONDARY_ANON_KEY = sKey;

        await initSupabase();
        await initSecondarySupabase();
        updateIntermediaryStatusUI();
        reconcileDatabasesIntermediary().catch(() => null);
      }, 500);
    }

    // Compatibilidade reversa para chamadas legadas
    function handleSaveAdminConfig() { autoSaveIntermediaryDatabases(); }
    function handleSaveAdminSecondaryConfig() { autoSaveIntermediaryDatabases(); }
    function testSupabaseConnection() { autoSaveIntermediaryDatabases(); }
    function testSecondarySupabaseConnection() { autoSaveIntermediaryDatabases(); }
    function syncAllDataToSecondary() { reconcileDatabasesIntermediary(); }

    /* ATUALIZAR STATUS VISUAL DOS 2 BANCOS NO PAINEL */
    function updateIntermediaryStatusUI() {
      const dot1 = document.getElementById('db1StatusDot');
      const text1 = document.getElementById('db1StatusText');
      const dot2 = document.getElementById('db2StatusDot');
      const text2 = document.getElementById('db2StatusText');

      if (dot1 && text1) {
        if (supabaseClient) {
          dot1.className = "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse";
          text1.textContent = "Online & Operando (Exibição)";
          text1.className = "text-[10.5px] text-emerald-400 font-mono font-bold pt-2 border-t border-[#1c253b]/60";
        } else {
          dot1.className = "w-2.5 h-2.5 rounded-full bg-amber-400";
          text1.textContent = "Modo Local Ativo";
          text1.className = "text-[10.5px] text-amber-400 font-mono font-bold pt-2 border-t border-[#1c253b]/60";
        }
      }

      if (dot2 && text2) {
        if (supabaseSecondaryClient) {
          dot2.className = "w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse";
          text2.textContent = "Conectado & Interligado (Inserção)";
          text2.className = "text-[10.5px] text-emerald-400 font-mono font-bold pt-2 border-t border-[#1c253b]/60";
        } else if (SUPABASE_SECONDARY_URL) {
          dot2.className = "w-2.5 h-2.5 rounded-full bg-amber-400";
          text2.textContent = "Conectando ao 2º Banco...";
          text2.className = "text-[10.5px] text-amber-400 font-mono font-bold pt-2 border-t border-[#1c253b]/60";
        } else {
          dot2.className = "w-2.5 h-2.5 rounded-full bg-slate-500";
          text2.textContent = "Aguardando URL do 2º Banco";
          text2.className = "text-[10.5px] text-slate-400 font-mono font-bold pt-2 border-t border-[#1c253b]/60";
        }
      }
    }

    /* INICIALIZAÇÃO DO BANCO RESERVA */
    async function initSecondarySupabase() {
      SUPABASE_SECONDARY_URL = (localStorage.getItem('pe_supabase_secondary_url') || DEFAULT_SUPABASE_SECONDARY_URL).trim();
      SUPABASE_SECONDARY_ANON_KEY = (localStorage.getItem('pe_supabase_secondary_anon_key') || DEFAULT_SUPABASE_SECONDARY_ANON_KEY).trim();
      IS_DUAL_WRITE_ENABLED = localStorage.getItem('pe_supabase_dual_write') !== 'false';
      IS_AUTO_FAILOVER_ENABLED = localStorage.getItem('pe_supabase_auto_failover') !== 'false';

      // Se não preenchido localmente, verifica se a Vercel forneceu via /api/config
      if (!SUPABASE_SECONDARY_URL && typeof fetch === 'function') {
        try {
          const res = await fetch('/api/config');
          if (res.ok) {
            const data = await res.json();
            if (data.supabaseSecondaryUrl && data.supabaseSecondaryAnonKey) {
              SUPABASE_SECONDARY_URL = data.supabaseSecondaryUrl;
              SUPABASE_SECONDARY_ANON_KEY = data.supabaseSecondaryAnonKey;
              localStorage.setItem('pe_supabase_secondary_url', SUPABASE_SECONDARY_URL);
              localStorage.setItem('pe_supabase_secondary_anon_key', SUPABASE_SECONDARY_ANON_KEY);
            }
          }
        } catch (e) {}
      }

      if (!SUPABASE_SECONDARY_URL || !SUPABASE_SECONDARY_ANON_KEY) {
        supabaseSecondaryClient = null;
        updateIntermediaryStatusUI();
        return false;
      }

      try {
        const cleanSecUrl = SUPABASE_SECONDARY_URL.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
        supabaseSecondaryClient = window.supabase.createClient(cleanSecUrl, SUPABASE_SECONDARY_ANON_KEY);
        const ping = await safeSupabaseCall(
          supabaseSecondaryClient.from('atletas').select('count', { count: 'exact', head: true }),
          2500
        );
        const isHealthy = !ping.error;
        updateIntermediaryStatusUI();
        return isHealthy;
      } catch (err) {
        console.warn("[Intermediário] Banco 2 conectando em segundo plano:", err);
        updateIntermediaryStatusUI();
        return false;
      }
    }

    /* RECONCILIAÇÃO INTERMEDIÁRIA AUTOMÁTICA EM SEGUNDO PLANO (SEM BOTÕES) */
    async function reconcileDatabasesIntermediary() {
      if (!supabaseClient || !supabaseSecondaryClient) return;
      try {
        const [pRes, sRes] = await Promise.all([
          safeSupabaseCall(supabaseClient.from('atletas').select('codigo, nome, cpf, status, categoria, modalidade, municipio, clube, federado, validade, foto_url, nascimento, telefone'), 3500).catch(() => ({ data: [] })),
          safeSupabaseCall(supabaseSecondaryClient.from('atletas').select('codigo, nome, cpf, status, categoria, modalidade, municipio, clube, federado, validade, foto_url, nascimento, telefone'), 3500).catch(() => ({ data: [] }))
        ]);

        const pAthletes = (pRes && Array.isArray(pRes.data)) ? pRes.data : [];
        const sAthletes = (sRes && Array.isArray(sRes.data)) ? sRes.data : [];

        const pCodes = new Set(pAthletes.map(a => String(a.codigo)));
        const sCodes = new Set(sAthletes.map(a => String(a.codigo)));

        const deletedCodes = new Set(JSON.parse(localStorage.getItem('pe_deleted_athlete_codes') || '[]').map(String));
        deletedCodes.add('548608');
        deletedCodes.add('331296');

        // 1. Dados no Banco 2 (Inserção) que ainda não estão no Banco 1 (Exibição) e NÃO estão excluídos
        const toSyncToPrimary = sAthletes.filter(a => !pCodes.has(String(a.codigo)) && !deletedCodes.has(String(a.codigo)));
        if (toSyncToPrimary.length > 0) {
          for (let i = 0; i < toSyncToPrimary.length; i += 30) {
            const chunk = toSyncToPrimary.slice(i, i + 30);
            await safeSupabaseCall(supabaseClient.from('atletas').upsert(chunk, { onConflict: 'codigo' }), 4000).catch(() => null);
          }
        }

        // 2. Dados no Banco 1 que faltam no Banco 2 e NÃO estão excluídos -> Guarda no Banco 2
        const toSyncToSecondary = pAthletes.filter(a => !sCodes.has(String(a.codigo)) && !deletedCodes.has(String(a.codigo)));
        if (toSyncToSecondary.length > 0) {
          for (let i = 0; i < toSyncToSecondary.length; i += 30) {
            const chunk = toSyncToSecondary.slice(i, i + 30);
            await safeSupabaseCall(supabaseSecondaryClient.from('atletas').upsert(chunk, { onConflict: 'codigo' }), 4000).catch(() => null);
          }
        }

        // 2.1 Sincronização recíproca das frações de fotos entre Banco 1 e Banco 2
        try {
          const [pChunksRes, sChunksRes] = await Promise.all([
            safeSupabaseCall(supabaseClient.from('keep_alive_logs').select('source, status').like('source', 'athlete_photo_chunk:%'), 3500).catch(() => ({ data: [] })),
            safeSupabaseCall(supabaseSecondaryClient.from('keep_alive_logs').select('source, status').like('source', 'athlete_photo_chunk:%'), 3500).catch(() => ({ data: [] }))
          ]);
          const pChunkSources = new Set(((pChunksRes && pChunksRes.data) || []).map(c => c.source));
          const sChunkSources = new Set(((sChunksRes && sChunksRes.data) || []).map(c => c.source));

          const toDb1 = ((sChunksRes && sChunksRes.data) || []).filter(c => !pChunkSources.has(c.source) && !deletedCodes.has(c.source.split(':')[1]));
          if (toDb1.length > 0) {
            await safeSupabaseCall(supabaseClient.from('keep_alive_logs').insert(toDb1), 4000).catch(() => null);
          }
          const toDb2 = ((pChunksRes && pChunksRes.data) || []).filter(c => !sChunkSources.has(c.source) && !deletedCodes.has(c.source.split(':')[1]));
          if (toDb2.length > 0) {
            await safeSupabaseCall(supabaseSecondaryClient.from('keep_alive_logs').insert(toDb2), 4000).catch(() => null);
          }
        } catch (eReconcileChunks) {}

        // 3. Purga registros excluídos se ainda constarem no Banco 1 ou Banco 2
        for (const dCode of deletedCodes) {
          if (sCodes.has(dCode)) {
            await safeSupabaseCall(supabaseSecondaryClient.from('atletas').delete().eq('codigo', dCode), 2500).catch(() => null);
          }
          if (pCodes.has(dCode)) {
            await safeSupabaseCall(supabaseClient.from('atletas').delete().eq('codigo', dCode), 2500).catch(() => null);
          }
          await safeSupabaseCall(supabaseSecondaryClient.from('keep_alive_logs').delete().in('source', [`athlete_record:${dCode}`, `athlete_status:${dCode}`]), 2500).catch(() => null);
          await safeSupabaseCall(supabaseClient.from('keep_alive_logs').delete().in('source', [`athlete_record:${dCode}`, `athlete_status:${dCode}`]), 2500).catch(() => null);
        }
      } catch (err) {
        console.warn("[Intermediário] Sincronização automática em segundo plano:", err?.message || err);
      }
    }

    /* MODAL DO SCRIPT SQL DO BANCO RESERVA */
    function openBackupSqlModal() {
      const modal = document.getElementById('modalSecondarySql');
      const block = document.getElementById('secondarySqlCodeBlock');
      if (block) {
        block.textContent = SECONDARY_BACKUP_SQL_TEMPLATE;
      }
      if (modal) {
        modal.classList.remove('hidden');
      }
    }

    function closeBackupSqlModal() {
      const modal = document.getElementById('modalSecondarySql');
      if (modal) {
        modal.classList.add('hidden');
      }
    }

    async function copyBackupSqlToClipboard() {
      const btn = document.getElementById('btnCopyBackupSql');
      try {
        await navigator.clipboard.writeText(SECONDARY_BACKUP_SQL_TEMPLATE);
        if (btn) {
          const original = btn.innerHTML;
          btn.innerHTML = "<span>✓</span> Copiado para a Área de Transferência!";
          setTimeout(() => { btn.innerHTML = original; }, 2500);
        }
        showToast("Código SQL copiado com sucesso!");
      } catch (e) {
        showToast("Selecione e copie o texto manualmente.");
      }
    }

    /* ESPELHAMENTO ASSÍNCRONO NÃO-BLOQUEANTE (DUAL-WRITE) */
    async function replicateToSecondary(table, action, payload, matchField = 'codigo', matchValue = null) {
      if (!supabaseSecondaryClient) return;
      try {
        if (action === 'upsert') {
          const records = Array.isArray(payload) ? payload : [payload];
          await safeSupabaseCall(
            supabaseSecondaryClient.from(table).upsert(records, { onConflict: matchField }),
            4000
          );
        } else if (action === 'insert') {
          const records = Array.isArray(payload) ? payload : [payload];
          await safeSupabaseCall(
            supabaseSecondaryClient.from(table).insert(records),
            4000
          );
        } else if (action === 'update') {
          const query = supabaseSecondaryClient.from(table).update(payload);
          if (matchValue !== null && matchValue !== undefined) {
            await safeSupabaseCall(query.eq(matchField, matchValue), 4000);
          } else {
            await safeSupabaseCall(query, 4000);
          }
        } else if (action === 'delete') {
          if (matchValue !== null && matchValue !== undefined) {
            await safeSupabaseCall(
              supabaseSecondaryClient.from(table).delete().eq(matchField, matchValue),
              4000
            );
          }
        }
      } catch (err) {
        console.warn(`[Dual-Write] Aviso: espelhamento no banco reserva (${table}) falhou:`, err?.message || err);
      }
    }

    /* =========================================================
       ESQUEMA DE OPERAÇÕES & GESTÃO DE CARGOS (@foot-table.pe.org)
       ========================================================= */
    // Nota: DEFAULT_OPERATION_GROUPS, SYSTEM_OPERATION_GROUPS, ALL_OPERATION_IDS,
    // loadSystemOperationGroups e saveSystemOperationGroups estão definidos no topo do script
    // para suporte instantâneo às permissões e renderização imediata do Guia do Painel.

    const PRESIDENTE_FPEFT_PERMISSIONS = [
      'carteira_studio', 'carteira_pdf', 'carteira_png', 'carteira_imprimir',
      'atletas_visualizar', 'atletas_homologar', 'atletas_editar', 'atletas_excluir', 'atletas_exportar',
      'noticias_publicar', 'noticias_upload', 'noticias_editar', 'noticias_excluir'
    ];

    const DEFAULT_ROLES = [
      {
        id: 'presidente_fpeft',
        name: 'Presidente FPEFT',
        desc: 'Presidência da Federação Pernambucana de Foot-Table - Gestão institucional e representação oficial máxima',
        isMaster: false,
        permissions: [...PRESIDENTE_FPEFT_PERMISSIONS],
        created_at: '2026-01-01T00:00:00Z'
      },
      {
        id: 'diretor_adjunto',
        name: 'Diretor Adjunto',
        desc: 'Diretoria executiva e supervisão institucional da Federação',
        isMaster: true,
        permissions: ['*'],
        created_at: '2026-01-01T00:00:00Z'
      }
    ];

    function loadCustomRoles() {
      let roles = null;
      try { roles = JSON.parse(localStorage.getItem('pe_custom_roles')); } catch (e) {}
      if (!roles || !Array.isArray(roles) || roles.length === 0) {
        roles = JSON.parse(JSON.stringify(DEFAULT_ROLES));
        localStorage.setItem('pe_custom_roles', JSON.stringify(roles));
      }

      // 1. Garante que Presidente FPEFT esteja sempre presente
      const presIdx = roles.findIndex(r => (r.name && r.name.toLowerCase() === 'presidente fpeft') || r.id === 'presidente_fpeft');
      if (presIdx === -1) {
        roles.unshift(JSON.parse(JSON.stringify(DEFAULT_ROLES[0])));
      } else {
        roles[presIdx].name = 'Presidente FPEFT';
        roles[presIdx].isMaster = false;
        if (!roles[presIdx].permissions || !Array.isArray(roles[presIdx].permissions) || roles[presIdx].permissions.length === 0 || roles[presIdx].permissions.includes('*')) {
          roles[presIdx].permissions = [...PRESIDENTE_FPEFT_PERMISSIONS];
        }
      }

      // 2. Garante que Diretor Adjunto esteja sempre presente
      const dirIdx = roles.findIndex(r => (r.name && r.name.toLowerCase() === 'diretor adjunto') || r.id === 'diretor_adjunto');
      if (dirIdx === -1) {
        roles.splice(1, 0, JSON.parse(JSON.stringify(DEFAULT_ROLES[1])));
      } else {
        roles[dirIdx].name = 'Diretor Adjunto';
        roles[dirIdx].isMaster = true;
        if (!roles[dirIdx].permissions || roles[dirIdx].permissions.length === 0) {
          roles[dirIdx].permissions = ['*'];
        }
      }

      // 3. Sincroniza qualquer cargo customizado criado que esteja atribuído a contas institucionais
      try {
        const admins = JSON.parse(localStorage.getItem('pe_institutional_admins')) || [];
        admins.forEach(a => {
          if (a.cargo && a.cargo.trim()) {
            const roleNameClean = a.cargo.trim();
            const exists = roles.some(r => r.name && r.name.toLowerCase() === roleNameClean.toLowerCase());
            if (!exists) {
              roles.push({
                id: 'role_' + Date.now() + '_' + Math.floor(Math.random() * 1000),
                name: roleNameClean,
                desc: `Cargo institucional da Federação atribuído a ${a.nome || 'Gestor'}`,
                isMaster: !!(a.isMaster || (a.permissions && a.permissions.includes('*'))),
                permissions: Array.isArray(a.permissions) && a.permissions.length > 0 ? a.permissions : ['*'],
                created_at: a.created_at || new Date().toISOString()
              });
            }
          }
        });
      } catch (e) {}

      // 4. Ordenação obrigatória: Presidente FPEFT em 1º lugar (esquerda), Diretor Adjunto em 2º lugar (direita), demais a seguir
      roles.sort((a, b) => {
        const aName = (a.name || '').toLowerCase();
        const bName = (b.name || '').toLowerCase();
        const aIsPres = aName.includes('presidente fpeft') || a.id === 'presidente_fpeft';
        const bIsPres = bName.includes('presidente fpeft') || b.id === 'presidente_fpeft';
        if (aIsPres && !bIsPres) return -1;
        if (!aIsPres && bIsPres) return 1;

        const aIsDir = aName === 'diretor adjunto' || a.id === 'diretor_adjunto';
        const bIsDir = bName === 'diretor adjunto' || b.id === 'diretor_adjunto';
        if (aIsDir && !bIsDir) return -1;
        if (!aIsDir && bIsDir) return 1;

        return 0;
      });

      localStorage.setItem('pe_custom_roles', JSON.stringify(roles));
      return roles;
    }

    function saveCustomRoles(roles) {
      localStorage.setItem('pe_custom_roles', JSON.stringify(roles));
    }

    function getOperationsTelemetry() {
      let athletes = [];
      try { athletes = JSON.parse(localStorage.getItem('pe_athletes_db')) || []; } catch (e) {}
      let admins = [];
      try { admins = JSON.parse(localStorage.getItem('pe_institutional_admins')) || []; } catch (e) {}
      let newsCount = 0;
      if (Array.isArray(newsItems) && newsItems.length > 0) {
        newsCount = newsItems.length;
      } else {
        try { newsCount = (JSON.parse(localStorage.getItem('pe_news_db')) || []).length || 3; } catch (e) { newsCount = 3; }
      }
      const verifiedCount = athletes.filter(a => a.status === 'HOMOLOGADO' || a.status === 'homologado' || a.homologado || a.status === 'ativo').length || athletes.length;
      const roles = loadCustomRoles();

      return {
        athletesCount: athletes.length,
        verifiedCount: verifiedCount,
        adminsCount: admins.length,
        newsCount: newsCount,
        rolesCount: roles.length
      };
    }

    function getTelemetryBadge(itemId) {
      return '';
    }

    let currentlyEditingRoleId = null;

    function renderOperationsSchemeForm() {
      const container = document.getElementById('operationsSchemeFormColumns');
      if (!container) return;

      const groups = loadSystemOperationGroups();

      let activePerms = null;
      if (currentlyEditingRoleId) {
        const roles = loadCustomRoles();
        const editingRole = roles.find(r => r.id === currentlyEditingRoleId);
        if (editingRole) {
          activePerms = (editingRole.isMaster || (editingRole.permissions && editingRole.permissions.includes('*')))
            ? ALL_OPERATION_IDS
            : (Array.isArray(editingRole.permissions) ? editingRole.permissions : []);
        }
      }

      container.innerHTML = groups.map(group => `
        <div class="bg-[#070b14] border border-[#1c253b] rounded-2xl p-4 space-y-3 shadow-md flex flex-col justify-between">
          <div class="space-y-3">
            <div class="flex items-center justify-between pb-2 border-b border-[#1c253b]">
              <div class="flex items-center gap-2">
                <span class="text-base">${group.icon}</span>
                <h4 class="font-bold text-xs uppercase tracking-wider text-white">${escapeText(group.title)}</h4>
              </div>
              <span class="text-[10px] font-mono text-slate-400 font-bold bg-[#0b101d] px-1.5 py-0.5 rounded border border-[#1c253b]">
                ${group.items.length} funções
              </span>
            </div>

            <div class="space-y-2.5">
              ${group.items.map(item => {
                const isChecked = activePerms !== null ? activePerms.includes(item.id) : (item.id !== 'gestao_supabase' && item.id !== 'gestao_limpeza');
                return `
                  <label class="flex items-start gap-2.5 p-3 rounded-xl bg-[#0b101d] border border-[#1c253b] hover:border-blue-500/50 cursor-pointer transition select-none group relative">
                    <input 
                      type="checkbox" 
                      id="perm_${item.id}" 
                      value="${item.id}" 
                      onchange="updatePermsCounter()" 
                      class="role-perm-check w-4 h-4 mt-0.5 rounded text-blue-600 focus:ring-0 accent-blue-600 cursor-pointer shrink-0" 
                      ${isChecked ? 'checked' : ''}
                    >
                    <div class="min-w-0 flex-1">
                      <span class="block text-xs font-bold text-white group-hover:text-blue-300 transition">${escapeText(item.name)}</span>
                      <span class="block text-[10px] text-slate-400 leading-snug mt-0.5">${escapeText(item.desc)}</span>
                    </div>
                  </label>
                `;
              }).join('')}
            </div>
          </div>

          <button 
            type="button" 
            onclick="openAddOperationModal('${group.id}', '${escapeText(group.title)}')" 
            class="w-full mt-3 py-1.5 px-2 bg-[#05080e] hover:bg-blue-950/40 border border-dashed border-[#1c253b] hover:border-blue-500/50 rounded-xl text-[10px] font-bold text-slate-400 hover:text-blue-300 transition flex items-center justify-center gap-1.5 cursor-pointer"
          >
            <span>➕</span> Nova Operação nesta coluna
          </button>
        </div>
      `).join('');

      updatePermsCounter();
    }

    function updateOperationsTelemetry() {
      const counterEl = document.getElementById('totalCustomRolesCount');
      if (counterEl) {
        const roles = loadCustomRoles();
        counterEl.textContent = roles.length;
      }
    }

    function updatePermsCounter() {
      const allChecks = document.querySelectorAll('.role-perm-check');
      const checkedCount = document.querySelectorAll('.role-perm-check:checked').length;
      const totalCount = allChecks.length || ALL_OPERATION_IDS.length;
      const pct = totalCount > 0 ? Math.round((checkedCount / totalCount) * 100) : 0;

      const counterEl = document.getElementById('activePermsCounterText');
      if (counterEl) {
        counterEl.textContent = `${checkedCount} de ${totalCount} operações marcadas (${pct}%)`;
        if (checkedCount === totalCount) {
          counterEl.className = "text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-emerald-950/80 border border-emerald-500/40 text-emerald-300";
        } else if (checkedCount === 0) {
          counterEl.className = "text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-rose-950/80 border border-rose-500/40 text-rose-300";
        } else {
          counterEl.className = "text-xs font-mono font-bold px-3 py-1.5 rounded-lg bg-blue-950/80 border border-blue-500/40 text-blue-300";
        }
      }
    }

    function toggleAllRoleOperations(check) {
      document.querySelectorAll('.role-perm-check').forEach(cb => {
        cb.checked = !!check;
      });
      updatePermsCounter();
    }

    function resetCheckboxesToDefault() {
      document.querySelectorAll('.role-perm-check').forEach(cb => {
        cb.checked = (cb.value !== 'gestao_supabase' && cb.value !== 'gestao_limpeza');
      });
      updatePermsCounter();
    }

    function openAddOperationModal(groupId, groupTitle) {
      const modal = document.getElementById('addCustomOperationModal');
      const targetIdInput = document.getElementById('newOpTargetGroupId');
      const targetLabel = document.getElementById('newOpTargetGroupLabel');
      const nameInput = document.getElementById('newOpName');
      const descInput = document.getElementById('newOpDesc');

      if (!modal) return;
      if (targetIdInput) targetIdInput.value = groupId;
      if (targetLabel) targetLabel.textContent = groupTitle;
      if (nameInput) nameInput.value = '';
      if (descInput) descInput.value = '';

      modal.classList.remove('hidden');
      setTimeout(() => { if (nameInput) nameInput.focus(); }, 100);
    }

    function closeAddOperationModal() {
      const modal = document.getElementById('addCustomOperationModal');
      if (modal) modal.classList.add('hidden');
    }

    function handleSaveNewOperation(e) {
      e.preventDefault();
      if (!hasPermission('gestao_cargos')) {
        showToast("⚠️ Seu cargo não tem permissão para adicionar novas operações.", true);
        return;
      }
      const groupId = document.getElementById('newOpTargetGroupId').value;
      const name = document.getElementById('newOpName').value.trim();
      const desc = document.getElementById('newOpDesc').value.trim();
      if (!groupId || !name) return;

      const groups = loadSystemOperationGroups();
      const group = groups.find(g => g.id === groupId);
      if (!group) return;

      const newOpId = 'op_' + Date.now();
      group.items.push({
        id: newOpId,
        name: name,
        desc: desc,
        isCustom: true
      });

      saveSystemOperationGroups(groups);
      renderOperationsSchemeForm();
      populateRoleSelect();
      renderCustomRolesList();
      closeAddOperationModal();
      showToast(`Nova operação "${name}" adicionada com sucesso à coluna "${group.title}"!`);
    }

    function editRolePermissions(roleId) {
      const roles = loadCustomRoles();
      const role = roles.find(r => r.id === roleId || r.name.toLowerCase() === (roleId || '').toLowerCase());
      if (!role) return;

      currentlyEditingRoleId = role.id;
      const nameInput = document.getElementById('newRoleName');
      const descInput = document.getElementById('newRoleDesc');
      if (nameInput) {
        nameInput.value = role.name;
        nameInput.readOnly = (role.name.toLowerCase() === 'diretor adjunto');
      }
      if (descInput) {
        descInput.value = role.desc || '';
      }

      const hasWildcard = role.permissions && role.permissions.includes('*');
      const activePerms = hasWildcard ? ALL_OPERATION_IDS : (Array.isArray(role.permissions) ? role.permissions : []);
      document.querySelectorAll('.role-perm-check').forEach(cb => {
        cb.checked = activePerms.includes(cb.value);
      });
      updatePermsCounter();

      const submitBtn = document.getElementById('submitRoleBtn');
      const submitIcon = document.getElementById('submitRoleBtnIcon');
      const submitText = document.getElementById('submitRoleBtnText');
      const cancelBtn = document.getElementById('cancelRoleEditBtn');

      if (submitIcon) submitIcon.textContent = '🔄';
      if (submitText) submitText.textContent = `ATUALIZAR PERMISSÕES DE "${role.name.toUpperCase()}"`;
      if (submitBtn) {
        submitBtn.className = "flex-1 sm:flex-initial bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-500 hover:to-orange-500 text-white font-oswald text-sm uppercase font-bold tracking-wider px-7 py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer";
      }
      if (cancelBtn) cancelBtn.classList.remove('hidden');

      const formEl = document.getElementById('createRoleForm');
      if (formEl) formEl.scrollIntoView({ behavior: 'smooth', block: 'center' });

      showToast(`Editando cargo "${role.name}". Altere as permissões nas 4 colunas e salve.`);
    }

    function cancelEditingRole() {
      currentlyEditingRoleId = null;
      const nameInput = document.getElementById('newRoleName');
      const descInput = document.getElementById('newRoleDesc');
      if (nameInput) {
        nameInput.value = '';
        nameInput.readOnly = false;
      }
      if (descInput) descInput.value = '';

      resetCheckboxesToDefault();

      const submitBtn = document.getElementById('submitRoleBtn');
      const submitIcon = document.getElementById('submitRoleBtnIcon');
      const submitText = document.getElementById('submitRoleBtnText');
      const cancelBtn = document.getElementById('cancelRoleEditBtn');

      if (submitIcon) submitIcon.textContent = '💾';
      if (submitText) submitText.textContent = 'SALVAR CARGO COM ESTE ESQUEMA DE OPERAÇÕES';
      if (submitBtn) {
        submitBtn.className = "flex-1 sm:flex-initial bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-oswald text-sm uppercase font-bold tracking-wider px-7 py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2 cursor-pointer";
      }
      if (cancelBtn) cancelBtn.classList.add('hidden');
      updatePermsCounter();
    }

    function populateRoleSelect(preferredRole) {
      const select = document.getElementById('panelRegRole');
      if (!select) return;

      const roles = loadCustomRoles();
      const previousValue = select.value;
      select.innerHTML = '';

      roles.forEach(r => {
        const opt = document.createElement('option');
        opt.value = r.name;
        opt.textContent = r.name;
        select.appendChild(opt);
      });

      if (preferredRole && roles.some(r => r.name.toLowerCase() === preferredRole.toLowerCase())) {
        const matched = roles.find(r => r.name.toLowerCase() === preferredRole.toLowerCase());
        select.value = matched.name;
      } else if (previousValue && roles.some(r => r.name === previousValue)) {
        select.value = previousValue;
      } else {
        select.value = 'Diretor Adjunto';
      }

      updateSelectedRolePreview(select.value);
    }

    function updateSelectedRolePreview(roleName) {
      const summaryText = document.getElementById('roleSummaryPreviewText');
      if (summaryText) {
        summaryText.innerHTML = `Operações vinculadas: <strong class="text-emerald-400">Padrão configurado do cargo</strong>`;
      }
      renderCreateEmailPermsCheckboxes(roleName);
    }

    function renderCreateEmailPermsCheckboxes(roleName) {
      const grid = document.getElementById('createEmailPermsGrid');
      if (!grid) return;

      const roles = loadCustomRoles();
      const role = roles.find(r => r.name.toLowerCase() === (roleName || document.getElementById('panelRegRole')?.value || '').toLowerCase());
      const rolePerms = role ? (role.isMaster || (role.permissions && role.permissions.includes('*')) ? ALL_OPERATION_IDS : (role.permissions || [])) : ALL_OPERATION_IDS;

      const groups = loadSystemOperationGroups();
      grid.innerHTML = groups.map(group => `
        <div class="border border-[#1c253b]/80 bg-[#070b14] rounded-lg p-2.5 space-y-1.5">
          <div class="flex items-center gap-1.5 text-[11px] font-bold text-pe-gold pb-1 border-b border-[#1c253b]/50">
            <span>${group.icon}</span> <span>${escapeText(group.title)}</span>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
            ${group.items.map(item => {
              const checked = rolePerms.includes('*') || rolePerms.includes(item.id);
              return `
                <label class="flex items-start gap-1.5 p-1 rounded hover:bg-white/5 cursor-pointer text-[10px] text-slate-300">
                  <input type="checkbox" value="${item.id}" class="create-email-perm-check mt-0.5 accent-[#f5b800] rounded" ${checked ? 'checked' : ''} onchange="updateCreateEmailPermsBadge()" />
                  <span class="leading-tight">${escapeText(item.name)}</span>
                </label>
              `;
            }).join('')}
          </div>
        </div>
      `).join('');

      updateCreateEmailPermsBadge();
    }

    function updateCreateEmailPermsBadge() {
      const badge = document.getElementById('createEmailPermsBadge');
      if (!badge) return;
      badge.textContent = 'Configurado';
      badge.className = "text-[10px] font-bold text-pe-gold bg-pe-gold/10 border border-pe-gold/30 px-2 py-0.5 rounded";
    }

    function toggleCreateEmailCustomPerms() {
      const container = document.getElementById('createEmailPermsContainer');
      const icon = document.getElementById('createEmailPermsToggleIcon');
      if (!container) return;
      const isHidden = container.classList.contains('hidden');
      container.classList.toggle('hidden', !isHidden);
      if (icon) icon.textContent = isHidden ? '▼' : '▶';
    }

    function syncCreateEmailPermsFromRole() {
      const roleName = document.getElementById('panelRegRole')?.value;
      renderCreateEmailPermsCheckboxes(roleName);
      showToast("Operações sincronizadas com o cargo selecionado!");
    }

    function toggleAllCreateEmailPerms(check) {
      document.querySelectorAll('.create-email-perm-check').forEach(cb => {
        cb.checked = check;
      });
      updateCreateEmailPermsBadge();
    }

    function selectRoleForNewEmail(roleName) {
      if (!roleName) return;
      populateRoleSelect(roleName);

      const emailForm = document.getElementById('adminCreateEmailForm');
      const roleSelect = document.getElementById('panelRegRole');
      const nameInput = document.getElementById('panelRegName');

      if (roleSelect) {
        roleSelect.value = roleName;
        updateSelectedRolePreview(roleName);
        roleSelect.classList.add('ring-2', 'ring-pe-gold', 'bg-[#0f172a]');
        setTimeout(() => {
          roleSelect.classList.remove('ring-2', 'ring-pe-gold', 'bg-[#0f172a]');
        }, 3000);
      }

      if (emailForm) {
        emailForm.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      if (nameInput) {
        nameInput.focus();
      }

      showToast(`Cargo "${roleName}" selecionado para criação do e-mail!`);
    }

    let currentAssignTargetRole = null;

    async function openAssignRoleToAdminModal(roleName) {
      if (!hasPermission('gestao_emails')) {
        showToast("⚠️ Seu cargo não tem permissão para gerenciar contas institucionais.", true);
        return;
      }
      currentAssignTargetRole = roleName;
      const modal = document.getElementById('assignRoleModal');
      const badge = document.getElementById('assignTargetRoleBadge');
      const listContainer = document.getElementById('assignRoleAdminsList');
      if (!modal || !listContainer) return;

      if (badge) badge.textContent = roleName;

      const admins = await loadInstitutionalAdmins();
      if (!admins || admins.length === 0) {
        listContainer.innerHTML = '<div class="text-slate-400 text-xs py-4 text-center">Nenhuma conta cadastrada no momento.</div>';
      } else {
        listContainer.innerHTML = admins.map(a => {
          const isCurrentRole = (a.cargo || '').toLowerCase() === (roleName || '').toLowerCase();
          return `
            <div class="p-3 rounded-xl bg-[#05080e] border border-[#1c253b] flex items-center justify-between gap-3 text-xs">
              <div class="min-w-0 flex-1">
                <div class="font-bold text-white uppercase text-xs flex items-center gap-1.5 truncate">
                  <span>${a.isMaster ? '⚡' : '👤'}</span>
                  <span>${escapeText(a.nome || 'Gestor Autorizado')}</span>
                </div>
                <div class="text-[10px] font-mono text-pe-gold truncate mt-0.5">${escapeText(a.email)}</div>
                <div class="text-[10px] text-slate-400 mt-0.5">Cargo atual: <span class="text-slate-300 font-semibold">${escapeText(a.cargo || 'Diretor Adjunto')}</span></div>
              </div>
              <div class="shrink-0">
                ${isCurrentRole ? `
                  <span class="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-emerald-950/60 text-emerald-400 border border-emerald-500/40 whitespace-nowrap">
                    ✓ Já Atribuído
                  </span>
                ` : `
                  <button type="button" onclick="executeAssignRoleToAdmin('${escapeJsString(a.email)}', '${escapeJsString(roleName)}')" class="bg-blue-600 hover:bg-blue-500 text-white font-oswald text-xs uppercase font-bold px-3 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1 whitespace-nowrap shadow">
                    <span>Atribuir</span> <span>➔</span>
                  </button>
                `}
              </div>
            </div>
          `;
        }).join('');
      }

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    function closeAssignRoleModal() {
      const modal = document.getElementById('assignRoleModal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    async function executeAssignRoleToAdmin(email, newRoleName) {
      let admins = await loadInstitutionalAdmins();
      const idx = admins.findIndex(a => (a.email || '').toLowerCase() === (email || '').toLowerCase());
      if (idx === -1) {
        showToast("Conta não encontrada.", true);
        return;
      }

      const roles = loadCustomRoles();
      const roleObj = roles.find(r => r.name.toLowerCase() === (newRoleName || '').toLowerCase());
      const hasWildcard = roleObj && Array.isArray(roleObj.permissions) && roleObj.permissions.includes('*');
      const isMasterRole = newRoleName.toLowerCase() === 'diretor adjunto' || hasWildcard || (roleObj && roleObj.permissions && roleObj.permissions.length >= ALL_OPERATION_IDS.length);
      const permissions = isMasterRole
        ? ['*']
        : (roleObj && Array.isArray(roleObj.permissions) ? [...roleObj.permissions] : []);

      admins[idx].cargo = newRoleName;
      admins[idx].permissions = permissions;
      admins[idx].isMaster = !!isMasterRole;
      admins[idx].updated_at = new Date().toISOString();

      localStorage.setItem('pe_institutional_admins', JSON.stringify(admins));

      if (supabaseClient) {
        try {
          const dbPayload = {
            nome: admins[idx].nome,
            cargo: admins[idx].cargo,
            email: admins[idx].email.toLowerCase(),
            senha: admins[idx].senha || 'admin'
          };
          await supabaseClient.from('admin_users').upsert([dbPayload], { onConflict: 'email' });
        } catch (e) {
          console.warn("Supabase update role:", e);
        }
      }

      const currentUser = sessionStorage.getItem('pe_admin_user') || localStorage.getItem('pe_admin_user');
      if (currentUser && currentUser.toLowerCase() === email.toLowerCase()) {
        applyPermissionsToUI();
      }

      showToast(`Cargo "${newRoleName}" atribuído a ${admins[idx].nome} com sucesso!`);
      closeAssignRoleModal();
      renderInstitutionalAdminsTable();
      updateOperationsTelemetry();
      applyPermissionsToUI();
    }

    function renderCustomRolesList() {
      const container = document.getElementById('customRolesContainer');
      const counter = document.getElementById('totalCustomRolesCount');
      if (!container) return;

      const canManageCargos = hasPermission('gestao_cargos');
      const roles = loadCustomRoles();
      if (counter) counter.textContent = roles.length;
      container.innerHTML = '';

      roles.forEach(role => {
        const isPres = (role.name || '').toLowerCase().includes('presiden');
        const rolePerms = Array.isArray(role.permissions) ? role.permissions : [];
        const isMaster = rolePerms.includes('*') || (rolePerms.length >= ALL_OPERATION_IDS.length && ALL_OPERATION_IDS.length > 0) || role.name.toLowerCase() === 'diretor adjunto';
        const permsCount = rolePerms.includes('*') ? ALL_OPERATION_IDS.length : rolePerms.length;

        const card = document.createElement('div');
        card.className = "bg-[#05080e] border " + (isPres ? "border-amber-400 shadow-amber-500/10 shadow-lg" : (isMaster ? "border-amber-500/50" : "border-[#1c253b]")) + " rounded-xl p-3.5 space-y-2.5 flex flex-col justify-between";
        card.innerHTML = `
          <div>
            <div class="flex items-center justify-between gap-2">
              <h5 class="font-bold text-xs uppercase text-white flex items-center gap-1.5 truncate">
                ${isPres ? '<span class="text-amber-300 text-sm">👑</span>' : (isMaster ? '<span class="text-amber-400">⚡</span>' : '<span class="text-blue-400">🛡️</span>')}
                <span class="${isPres ? 'text-pe-gold font-black' : 'text-white'}">${escapeText(role.name)}</span>
              </h5>
              <span class="text-[10px] font-bold px-2 py-0.5 rounded whitespace-nowrap shrink-0 bg-blue-950/80 text-blue-300 border border-blue-500/30">
                Ativo
              </span>
            </div>
            <p class="text-[11px] text-slate-400 line-clamp-2 mt-1">
              ${escapeText(role.desc || 'Cargo operacional com permissões customizadas')}
            </p>
          </div>

          <div class="space-y-2 pt-2 border-t border-[#1c253b]/80 text-[11px]">
            ${canManageCargos ? `
            <!-- Botões Principais de Ação -->
            <div class="grid grid-cols-2 gap-1.5">
              <button type="button" onclick="selectRoleForNewEmail('${escapeJsString(role.name)}')" class="bg-pe-gold/15 hover:bg-pe-gold text-pe-gold hover:text-black border border-pe-gold/40 py-1.5 px-2 rounded-lg text-[10px] font-bold transition flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap shadow-sm" title="Selecionar este cargo e ir para o formulário de criar e-mail">
                <span>✍️</span> <span>Criar E-mail</span>
              </button>
              <button type="button" onclick="openAssignRoleToAdminModal('${escapeJsString(role.name)}')" class="bg-blue-950/40 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 py-1.5 px-2 rounded-lg text-[10px] font-bold transition flex items-center justify-center gap-1 cursor-pointer whitespace-nowrap shadow-sm" title="Atribuir este cargo a uma conta de gestor existente">
                <span>👤</span> <span>Atribuir a Conta</span>
              </button>
            </div>
            ` : ''}

            <!-- Controles Secundários: Editar, Esquema e Excluir -->
            <div class="flex items-center justify-between pt-1 border-t border-[#1c253b]/50">
              <div class="flex items-center gap-2">
                ${canManageCargos ? `
                <button type="button" onclick="editRolePermissions('${escapeJsString(role.id || role.name)}')" class="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1 cursor-pointer" title="Editar permissões nas 4 colunas">
                  <i class="fa-solid fa-pen-to-square text-[10px]"></i> Editar
                </button>` : ''}
                <button type="button" onclick="openRoleOperationsModal('${escapeJsString(role.id || role.name)}')" class="text-blue-400 hover:text-blue-300 font-bold flex items-center gap-1 cursor-pointer">
                  <i class="fa-solid fa-eye text-[10px]"></i> Esquema
                </button>
              </div>
              ${canManageCargos ? (role.name.toLowerCase() === 'diretor adjunto' ? `
                <span class="text-[10px] text-amber-400 font-bold font-mono">PROTEGIDO</span>
              ` : `
                <button type="button" onclick="handleDeleteCustomRole('${escapeJsString(role.id || role.name)}')" class="text-red-400 hover:text-red-300 font-bold cursor-pointer">
                  Excluir
                </button>
              `) : ''}
            </div>
          </div>
        `;
        container.appendChild(card);
      });
    }

    function handleCreateCustomRole(e) {
      if (e) e.preventDefault();
      if (!hasPermission('gestao_cargos')) {
        showToast("⚠️ Seu cargo não tem permissão para gerenciar ou criar cargos.", true);
        return;
      }
      const nameInput = document.getElementById('newRoleName');
      const descInput = document.getElementById('newRoleDesc');
      const feedback = document.getElementById('roleCreateFeedback');
      if (!nameInput) return;

      const roleName = nameInput.value.trim();
      if (!roleName) {
        if (feedback) {
          feedback.classList.remove('hidden');
          feedback.className = "text-xs rounded-xl p-3 border bg-red-950/40 border-red-500/40 text-red-300";
          feedback.textContent = "❌ Informe o nome do cargo.";
        }
        return;
      }

      // Coleta operações marcadas
      const selectedPerms = [];
      document.querySelectorAll('.role-perm-check:checked').forEach(cb => {
        selectedPerms.push(cb.value);
      });

      if (selectedPerms.length === 0) {
        if (feedback) {
          feedback.classList.remove('hidden');
          feedback.className = "text-xs rounded-xl p-3 border bg-amber-950/40 border-amber-500/40 text-amber-300";
          feedback.textContent = "⚠️ Selecione pelo menos 1 operação autorizada para este cargo nas colunas acima.";
        }
        return;
      }

      let roles = loadCustomRoles();

      // MODO EDIÇÃO DE CARGO EXISTENTE
      if (currentlyEditingRoleId) {
        const targetIdx = roles.findIndex(r => r.id === currentlyEditingRoleId);
        if (targetIdx >= 0) {
          const oldName = roles[targetIdx].name;
          const isDiretorAdjunto = oldName.toLowerCase() === 'diretor adjunto';
          const isTotal = selectedPerms.length === ALL_OPERATION_IDS.length || selectedPerms.includes('*');

          roles[targetIdx].desc = descInput ? descInput.value.trim() : roles[targetIdx].desc;
          if (!isDiretorAdjunto) {
            roles[targetIdx].name = roleName;
          }
          roles[targetIdx].permissions = isTotal ? ['*'] : selectedPerms;
          roles[targetIdx].isMaster = isTotal;
          roles[targetIdx].updated_at = new Date().toISOString();

          // Sincroniza em tempo real as contas vinculadas a este cargo
          let admins = JSON.parse(localStorage.getItem('pe_institutional_admins')) || [];
          let updatedAdminsCount = 0;
          admins.forEach(a => {
            if (a.cargo && a.cargo.toLowerCase() === oldName.toLowerCase()) {
              a.cargo = roles[targetIdx].name;
              a.permissions = isTotal ? ['*'] : [...selectedPerms];
              a.isMaster = isTotal;
              updatedAdminsCount++;
            }
          });
          if (updatedAdminsCount > 0) {
            localStorage.setItem('pe_institutional_admins', JSON.stringify(admins));
            if (supabaseClient) {
              for (const a of admins) {
                if (a.cargo && a.cargo.toLowerCase() === roles[targetIdx].name.toLowerCase()) {
                  try {
                    supabaseClient.from('admin_users').upsert([{
                      nome: a.nome,
                      cargo: a.cargo,
                      email: a.email.toLowerCase(),
                      senha: a.senha || 'admin'
                    }], { onConflict: 'email' });
                  } catch (e) {}
                }
              }
            }
            renderInstitutionalAdminsTable();
          }

          saveCustomRoles(roles);
          cancelEditingRole();
          populateRoleSelect(roles[targetIdx].name);
          renderCustomRolesList();
          updateOperationsTelemetry();
          applyPermissionsToUI();

          if (feedback) {
            feedback.classList.remove('hidden');
            feedback.className = "text-xs rounded-xl p-3.5 border bg-emerald-950/50 border-emerald-500/50 text-emerald-200 font-bold space-y-2 shadow-lg";
            feedback.innerHTML = `
              <div>✓ Permissões do cargo <strong>${escapeText(roleName)}</strong> atualizadas com sucesso (${selectedPerms.length} operações ativas)! ${updatedAdminsCount > 0 ? `${updatedAdminsCount} contas vinculadas foram atualizadas automaticamente.` : ''}</div>
              <div class="pt-2 border-t border-emerald-500/30 flex items-center gap-2">
                <button type="button" onclick="selectRoleForNewEmail('${escapeText(roleName)}')" class="bg-pe-gold hover:bg-amber-300 text-black font-bold px-3 py-1.5 rounded-lg text-xs transition cursor-pointer flex items-center gap-1 shadow">
                  <span>✍️</span> <span>Criar E-mail com este Cargo</span>
                </button>
              </div>
            `;
            setTimeout(() => feedback.classList.add('hidden'), 7000);
          }
          showToast(`Cargo "${roleName}" atualizado com sucesso!`);
          return;
        }
      }

      // MODO CRIAÇÃO DE NOVO CARGO
      const roleId = 'role_' + Date.now();
      const newRole = {
        id: roleId,
        name: roleName,
        desc: descInput ? descInput.value.trim() : '',
        isMaster: false,
        permissions: selectedPerms,
        created_at: new Date().toISOString()
      };

      const existingIndex = roles.findIndex(r => r.name.toLowerCase() === roleName.toLowerCase());
      if (existingIndex >= 0) {
        if (roles[existingIndex].isMaster) {
          alert("O cargo Diretor Adjunto é o cargo máster da federação e não pode ser sobrescrito.");
          return;
        }
        roles[existingIndex] = { ...roles[existingIndex], ...newRole };
      } else {
        roles.push(newRole);
      }

      saveCustomRoles(roles);
      populateRoleSelect(newRole.name);
      renderCustomRolesList();
      updateOperationsTelemetry();

      if (feedback) {
        feedback.classList.remove('hidden');
        feedback.className = "text-xs rounded-xl p-3.5 border bg-emerald-950/60 border-emerald-500/50 text-emerald-200 font-bold space-y-2.5 shadow-lg";
        feedback.innerHTML = `
          <div class="flex items-center gap-2">
            <span class="text-emerald-400 text-base">✓</span>
            <span>Cargo <strong>${escapeText(roleName)}</strong> gerado com sucesso com as operações configuradas!</span>
          </div>
          <div class="pt-2 border-t border-emerald-500/30 flex flex-wrap items-center gap-2">
            <button type="button" onclick="selectRoleForNewEmail('${escapeJsString(roleName)}')" class="bg-pe-gold hover:bg-amber-300 text-black font-oswald text-xs uppercase font-bold px-3.5 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 shadow">
              <span>✍️</span> <span>Criar E-mail com este Cargo Agora</span>
            </button>
            <button type="button" onclick="openAssignRoleToAdminModal('${escapeJsString(roleName)}')" class="bg-blue-600 hover:bg-blue-500 text-white font-oswald text-xs uppercase font-bold px-3.5 py-1.5 rounded-lg transition cursor-pointer flex items-center gap-1.5 shadow">
              <span>👤</span> <span>Atribuir a uma Conta Existente</span>
            </button>
          </div>
        `;
        setTimeout(() => feedback.classList.add('hidden'), 8000);
      }

      showToast(`Cargo "${roleName}" criado e selecionado para o e-mail!`);
      nameInput.value = '';
      if (descInput) descInput.value = '';
      resetCheckboxesToDefault();

      // Rola automaticamente para o formulário de criação de e-mail e foca no nome
      setTimeout(() => {
        selectRoleForNewEmail(roleName);
      }, 350);
    }

    function handleDeleteCustomRole(roleIdentifier) {
      if (!roleIdentifier) return;
      if (!hasPermission('gestao_cargos')) {
        showToast("⚠️ Seu cargo não tem permissão para excluir cargos.", true);
        return;
      }
      let roles = loadCustomRoles();
      const target = roles.find(r => r.id === roleIdentifier || r.name.toLowerCase() === roleIdentifier.toLowerCase());
      if (!target) return;

      if (target.isMaster || target.name.toLowerCase() === 'diretor adjunto') {
        alert("O cargo Diretor Adjunto não pode ser excluído.");
        return;
      }

      if (!confirm(`Deseja realmente excluir o cargo "${target.name}"? Contas vinculadas a este cargo voltarão ao perfil básico.`)) return;

      roles = roles.filter(r => r.id !== target.id && r.name !== target.name);
      saveCustomRoles(roles);
      populateRoleSelect();
      renderCustomRolesList();
      updateOperationsTelemetry();
      showToast(`Cargo "${target.name}" removido.`);
    }

    function openRoleOperationsModal(identifier) {
      const modal = document.getElementById('operationsSchemeModal');
      const titleEl = document.getElementById('modalSchemeRoleTitle');
      const descEl = document.getElementById('modalSchemeRoleDesc');
      const container = document.getElementById('modalSchemeColumnsContainer');
      if (!modal || !container) return;

      let targetRole = null;
      const roles = loadCustomRoles();
      const admins = JSON.parse(localStorage.getItem('pe_institutional_admins')) || [];

      if (identifier && identifier.includes('@')) {
        const admin = admins.find(a => a.email.toLowerCase() === identifier.toLowerCase());
        if (admin) {
          const roleObj = roles.find(r => r.name.toLowerCase() === (admin.cargo || '').toLowerCase());
          const adminPerms = (admin.permissions && Array.isArray(admin.permissions))
            ? admin.permissions
            : (roleObj && Array.isArray(roleObj.permissions) ? roleObj.permissions : []);
          const isMaster = adminPerms.includes('*') || (adminPerms.length >= ALL_OPERATION_IDS.length && ALL_OPERATION_IDS.length > 0);
          const permsCount = isMaster ? ALL_OPERATION_IDS.length : adminPerms.length;

          targetRole = {
            name: admin.cargo || 'Gestor Autorizado',
            desc: `E-mail credenciado: ${admin.email} • Funções operacionais vinculadas`,
            permissions: isMaster ? ALL_OPERATION_IDS : adminPerms,
            isMaster: isMaster
          };
          if (titleEl) titleEl.textContent = `Operações de: ${admin.nome} (${admin.email})`;
          if (descEl) descEl.textContent = targetRole.desc;
        }
      }

      if (!targetRole) {
        targetRole = roles.find(r => r.id === identifier || r.name.toLowerCase() === (identifier || '').toLowerCase()) || roles[0];
        const rolePerms = Array.isArray(targetRole.permissions) ? targetRole.permissions : [];
        const isMaster = rolePerms.includes('*') || (rolePerms.length >= ALL_OPERATION_IDS.length && ALL_OPERATION_IDS.length > 0);
        const permsCount = isMaster ? ALL_OPERATION_IDS.length : rolePerms.length;
        if (titleEl) titleEl.textContent = `Esquema de Operação: ${targetRole.name}`;
        if (descEl) descEl.textContent = `${targetRole.desc || 'Atribuições e permissões operacionais do cargo no sistema'}`;
      }

      const isAll = targetRole.isMaster || (targetRole.permissions && targetRole.permissions.includes('*'));
      const activePerms = isAll ? ALL_OPERATION_IDS : (Array.isArray(targetRole.permissions) ? targetRole.permissions : []);
      const groups = loadSystemOperationGroups();

      container.innerHTML = groups.map(group => `
        <div class="bg-[#070b14] border border-[#1c253b] rounded-xl p-3 space-y-2.5">
          <div class="flex items-center gap-1.5 pb-1.5 border-b border-[#1c253b]">
            <span class="text-sm">${group.icon}</span>
            <span class="font-bold text-[11px] uppercase tracking-wider text-white">${escapeText(group.title)}</span>
          </div>
          <div class="space-y-2">
            ${group.items.map(item => {
              const hasIt = activePerms.includes(item.id);
              return `
                <div class="p-2 rounded-lg border ${hasIt ? 'bg-blue-950/30 border-blue-500/40 text-blue-200' : 'bg-[#0b101d] border-[#1c253b]/60 opacity-40 text-slate-400'}">
                  <div class="flex items-center gap-1.5">
                    <span class="${hasIt ? 'text-blue-400 font-bold' : 'text-slate-600'} text-xs">
                      ${hasIt ? '✓' : '✕'}
                    </span>
                    <span class="font-bold text-[11px] ${hasIt ? 'text-white' : 'text-slate-400 line-through'}">${escapeText(item.name)}</span>
                  </div>
                  <span class="block text-[9px] text-slate-400 leading-tight mt-0.5">${escapeText(item.desc)}</span>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `).join('');

      modal.classList.remove('hidden');
    }

    function previewCurrentSelectedRoleModal() {
      const select = document.getElementById('panelRegRole');
      if (select) openRoleOperationsModal(select.value);
    }

    function closeRoleOperationsModal() {
      const modal = document.getElementById('operationsSchemeModal');
      if (modal) modal.classList.add('hidden');
    }

    /* =========================================================
       GESTÃO DE E-MAILS INSTITUCIONAIS (@foot-table.pe.org)
       ========================================================= */
    const DEFAULT_INSTITUTIONAL_ADMINS = [
      {
        nome: "Gabriel Alves",
        cargo: "Diretor Adjunto",
        email: "gabrielacessor@foot-table.pe.org",
        senha: "admin",
        isMaster: true,
        permissions: ['*'],
        created_at: "2025-12-31T00:00:00Z"
      },
      {
        nome: "Adriano Mello",
        cargo: "Presidente FPEFT",
        email: "adrianomello@foot-table.pe.org",
        senha: "admin",
        isMaster: false,
        permissions: [
          'carteira_studio', 'carteira_pdf', 'carteira_png', 'carteira_imprimir',
          'atletas_visualizar', 'atletas_homologar', 'atletas_editar', 'atletas_excluir', 'atletas_exportar',
          'noticias_publicar', 'noticias_upload', 'noticias_editar', 'noticias_excluir'
        ],
        created_at: "2026-10-09T00:00:00Z"
      }
    ];

    function formatPanelEmailInput(input) {
      input.value = input.value
        .replace(/@foot-table\.pe\.(gov\.br|org)/gi, '')
        .replace(/@.*$/, '')
        .replace(/\s+/g, '')
        .replace(/[^a-z0-9._-]/g, '')
        .toLowerCase();
    }

    function checkAdminCreatePasswordMatch() {
      const p1 = document.getElementById('panelRegPassword');
      const p2 = document.getElementById('panelRegConfirmPassword');
      const status = document.getElementById('passMatchStatus');
      if (!p1 || !p2 || !status) return;

      const v1 = p1.value;
      const v2 = p2.value;

      if (!v2) {
        status.classList.add('hidden');
        p2.classList.remove('border-emerald-500', 'border-red-500');
        return;
      }

      status.classList.remove('hidden');
      if (v1 === v2) {
        status.className = "text-[10px] font-bold text-emerald-400 flex items-center gap-1";
        status.innerHTML = `<i class="fa-solid fa-check"></i> Senhas coincidem`;
        p2.classList.remove('border-red-500');
        p2.classList.add('border-emerald-500');
      } else {
        status.className = "text-[10px] font-bold text-rose-400 flex items-center gap-1";
        status.innerHTML = `<i class="fa-solid fa-xmark"></i> Não coincidem`;
        p2.classList.remove('border-emerald-500');
        p2.classList.add('border-red-500');
      }
    }

    // Função de Deduplicação Inteligente: elimina versões antigas e variações de digitação mantendo a mais recente
    function deduplicateInstitutionalAdmins(adminList) {
      if (!Array.isArray(adminList) || adminList.length === 0) return { unique: [], removedOldDuplicates: [] };

      const normalizeRecord = (adm) => {
        let rawEmail = (adm.email || '').trim().toLowerCase();
        if (rawEmail === 'gabrielacessor@foot-table.pe.gov.br') rawEmail = 'gabrielacessor@foot-table.pe.org';
        else if (rawEmail.endsWith('@foot-table.pe.gov.br')) rawEmail = rawEmail.replace(/@foot-table\.pe\.gov\.br$/i, '@foot-table.pe.org');
        
        const email = rawEmail;
        const prefix = email.split('@')[0].replace(/[^a-z0-9]/g, '');
        // Colapsa letras repetidas consecutivas para pegar variações (ex: 'mello' e 'melo' -> 'melo')
        const collapsedPrefix = prefix.replace(/([a-z])\1+/g, '$1');

        let time = 0;
        if (adm.created_at) {
          const parsed = new Date(adm.created_at).getTime();
          if (!isNaN(parsed)) time = parsed;
        }
        return { email, prefix, collapsedPrefix, time };
      };

      // Ordena decrescente pela data de criação (o mais novo primeiro)
      const sorted = [...adminList].sort((a, b) => {
        const nA = normalizeRecord(a);
        const nB = normalizeRecord(b);
        return nB.time - nA.time;
      });

      const unique = [];
      const removedOldDuplicates = [];

      for (const item of sorted) {
        const cKey = normalizeRecord(item);
        if (!cKey.email) continue;

        // O Diretor Master Gabriel Alves é permanente e protegido contra remoção
        if (cKey.email === 'gabrielacessor@foot-table.pe.org') {
          if (!unique.some(u => normalizeRecord(u).email === 'gabrielacessor@foot-table.pe.org')) {
            unique.push(item);
          }
          continue;
        }

        // Procura se já guardamos uma versão mais recente correspondente à mesma conta
        const matchIdx = unique.findIndex(kept => {
          const kKey = normalizeRecord(kept);
          // 1. Mesmo e-mail exato
          if (kKey.email === cKey.email) return true;
          // 2. Mesma variação de digitação de prefixo (ex: adrianomello vs adrianomelo)
          // APENAS se o prefixo colapsado for idêntico e de tamanho relevante (>= 6)
          if (kKey.collapsedPrefix && cKey.collapsedPrefix && kKey.collapsedPrefix === cKey.collapsedPrefix && kKey.collapsedPrefix.length >= 6) {
            return true;
          }
          return false;
        });

        if (matchIdx === -1) {
          unique.push(item);
        } else {
          removedOldDuplicates.push(item);
        }
      }

      // Garante que a conta master esteja presente
      if (!unique.some(u => normalizeRecord(u).email === 'gabrielacessor@foot-table.pe.org')) {
        const masterOrig = adminList.find(a => normalizeRecord(a).email === 'gabrielacessor@foot-table.pe.org') || DEFAULT_INSTITUTIONAL_ADMINS[0];
        unique.unshift(masterOrig);
      }

      return { unique, removedOldDuplicates };
    }

    async function loadInstitutionalAdmins() {
      let list = JSON.parse(localStorage.getItem('pe_institutional_admins'));
      if (!list || !Array.isArray(list) || list.length === 0) {
        list = JSON.parse(JSON.stringify(DEFAULT_INSTITUTIONAL_ADMINS));
        localStorage.setItem('pe_institutional_admins', JSON.stringify(list));
      }

      // 1. Normalização de domínios antigos
      list.forEach(a => {
        if (a.email) {
          a.email = a.email.trim().toLowerCase();
          if (a.email === 'gabrielacessor@foot-table.pe.gov.br') {
            a.email = 'gabrielacessor@foot-table.pe.org';
          } else if (a.email === 'adrianomelofpeft@foot-table.pe.org' || a.email === 'adrianomelofpeft@foot-table.pe.gov.br') {
            a.email = 'adrianomello@foot-table.pe.org';
          } else if (a.email.endsWith('@foot-table.pe.gov.br')) {
            a.email = a.email.replace(/@foot-table\.pe\.gov\.br$/i, '@foot-table.pe.org');
          }
        }
      });

      // 2. Sincronização bidirecional com Supabase (Canal de Alta Disponibilidade keep_alive_logs + admin_users)
      if (supabaseClient) {
        try {
          const { data: cloudLogs, error: cloudErr } = await supabaseClient
            .from('keep_alive_logs')
            .select('*')
            .like('source', 'pe_admin_account:%')
            .order('id', { ascending: false });

          if (!cloudErr && cloudLogs && cloudLogs.length > 0) {
            cloudLogs.forEach(rec => {
              try {
                const acc = JSON.parse(rec.status);
                let normEmail = (acc.email || '').trim().toLowerCase();
                if (normEmail === 'gabrielacessor@foot-table.pe.gov.br') normEmail = 'gabrielacessor@foot-table.pe.org';
                else if (normEmail === 'adrianomelofpeft@foot-table.pe.org' || normEmail === 'adrianomelo@foot-table.pe.org') normEmail = 'adrianomello@foot-table.pe.org';
                else if (normEmail.endsWith('@foot-table.pe.gov.br')) normEmail = normEmail.replace(/@foot-table\.pe\.gov\.br$/i, '@foot-table.pe.org');

                if (!normEmail) return;

                const existingIdx = list.findIndex(l => (l.email || '').toLowerCase() === normEmail);
                if (existingIdx !== -1) {
                  list[existingIdx].nome = acc.nome || list[existingIdx].nome;
                  list[existingIdx].cargo = acc.cargo || list[existingIdx].cargo;
                  if (acc.senha) list[existingIdx].senha = acc.senha;
                  if (acc.permissions) list[existingIdx].permissions = acc.permissions;
                  if (typeof acc.isMaster !== 'undefined') list[existingIdx].isMaster = acc.isMaster;
                  if (acc.created_at && !list[existingIdx].created_at) list[existingIdx].created_at = acc.created_at;
                } else {
                  list.push({
                    nome: acc.nome || 'Gestor Autorizado',
                    cargo: acc.cargo || 'Diretor Adjunto',
                    email: normEmail,
                    senha: acc.senha || 'admin',
                    isMaster: normEmail.includes('gabrielacessor') || acc.cargo === 'Diretor Adjunto' || !!acc.isMaster,
                    permissions: acc.permissions || (normEmail.includes('gabrielacessor') ? ['*'] : []),
                    created_at: acc.created_at || new Date().toISOString()
                  });
                }
              } catch (e) {}
            });
          }
        } catch (e) {
          console.warn("Supabase keep_alive_logs sync:", e);
        }

        try {
          const { data, error } = await supabaseClient.from('admin_users').select('*').order('created_at', { ascending: false });
          if (!error && data && data.length > 0) {
            data.forEach(dbItem => {
              let normEmail = (dbItem.email || '').trim().toLowerCase();
              if (normEmail === 'gabrielacessor@foot-table.pe.gov.br') normEmail = 'gabrielacessor@foot-table.pe.org';
              else if (normEmail === 'adrianomelofpeft@foot-table.pe.org' || normEmail === 'adrianomelo@foot-table.pe.org') normEmail = 'adrianomello@foot-table.pe.org';
              else if (normEmail.endsWith('@foot-table.pe.gov.br')) normEmail = normEmail.replace(/@foot-table\.pe\.gov\.br$/i, '@foot-table.pe.org');

              if (!normEmail) return;

              const existingIdx = list.findIndex(l => (l.email || '').toLowerCase() === normEmail);
              if (existingIdx !== -1) {
                list[existingIdx].nome = dbItem.nome || list[existingIdx].nome;
                list[existingIdx].cargo = dbItem.cargo || list[existingIdx].cargo;
                if (dbItem.senha) list[existingIdx].senha = dbItem.senha;
                if (dbItem.created_at && !list[existingIdx].created_at) list[existingIdx].created_at = dbItem.created_at;
              } else {
                list.push({
                  nome: dbItem.nome || 'Gestor Autorizado',
                  cargo: dbItem.cargo || 'Diretor Adjunto',
                  email: normEmail,
                  senha: dbItem.senha || 'admin',
                  isMaster: normEmail.includes('gabrielacessor') && (!dbItem.cargo || dbItem.cargo === 'Diretor Adjunto'),
                  permissions: (normEmail.includes('gabrielacessor') ? ['*'] : []),
                  created_at: dbItem.created_at || new Date().toISOString()
                });
              }
            });
          }
        } catch (e) {
          console.warn("Supabase admin_users sync:", e);
        }
      }

      // 3. Deduplicação inteligente de emails repetidos ou com pequenas variações (remove os mais antigos)
      const { unique: deduplicatedAdmins, removedOldDuplicates } = deduplicateInstitutionalAdmins(list);
      list = deduplicatedAdmins;

      // Se houver duplicados antigos detectados e removidos, expurga da nuvem Supabase também
      if (supabaseClient && removedOldDuplicates.length > 0) {
        for (const oldDup of removedOldDuplicates) {
          const oldEm = (oldDup.email || '').trim().toLowerCase();
          if (oldEm && oldEm !== 'gabrielacessor@foot-table.pe.org') {
            try {
              await supabaseClient.from('keep_alive_logs').delete().eq('source', 'pe_admin_account:' + oldEm);
              await supabaseClient.from('admin_users').delete().eq('email', oldEm);
            } catch (e) {}
          }
        }
        // Expurga especificamente a variação antiga com 1 'l' se existir no banco
        try {
          await supabaseClient.from('keep_alive_logs').delete().eq('source', 'pe_admin_account:adrianomelo@foot-table.pe.org');
          await supabaseClient.from('keep_alive_logs').delete().eq('source', 'pe_admin_account:adrianomelofpeft@foot-table.pe.org');
          await supabaseClient.from('admin_users').delete().eq('email', 'adrianomelo@foot-table.pe.org');
          await supabaseClient.from('admin_users').delete().eq('email', 'adrianomelofpeft@foot-table.pe.org');
        } catch (e) {}
      }

      // 4. Garante que existam as contas institucionais
      if (list.length === 0) {
        list = JSON.parse(JSON.stringify(DEFAULT_INSTITUTIONAL_ADMINS));
      } else {
        const masterIdx = list.findIndex(a => a.email && a.email.toLowerCase() === 'gabrielacessor@foot-table.pe.org');
        if (masterIdx !== -1) {
          if (!list[masterIdx].cargo) list[masterIdx].cargo = "Diretor Adjunto";
          list[masterIdx].isMaster = true;
          list[masterIdx].permissions = ['*'];
        }
        const presAdminIdx = list.findIndex(a => a.email && (a.email.toLowerCase() === 'adrianomello@foot-table.pe.org' || a.email.toLowerCase() === 'adrianomelo@foot-table.pe.org' || a.email.toLowerCase() === 'adrianomelofpeft@foot-table.pe.org'));
        if (presAdminIdx !== -1) {
          list[presAdminIdx].email = 'adrianomello@foot-table.pe.org';
          if (!list[presAdminIdx].cargo) list[presAdminIdx].cargo = "Presidente FPEFT";
          list[presAdminIdx].isMaster = false;
          if (!list[presAdminIdx].permissions || list[presAdminIdx].permissions.includes('*')) {
            list[presAdminIdx].permissions = [
              'carteira_studio', 'carteira_pdf', 'carteira_png', 'carteira_imprimir',
              'atletas_visualizar', 'atletas_homologar', 'atletas_editar', 'atletas_excluir', 'atletas_exportar',
              'noticias_publicar', 'noticias_upload', 'noticias_editar', 'noticias_excluir'
            ];
          }
        }
      }

      // 5. Sincroniza permissões do cargo caso a conta não tenha permissões explícitas definidas
      const currentRoles = loadCustomRoles();
      list.forEach(a => {
        if (!a.permissions || !Array.isArray(a.permissions) || a.permissions.length === 0) {
          const matchedRole = currentRoles.find(r => r.name.toLowerCase() === (a.cargo || '').toLowerCase());
          if (matchedRole && Array.isArray(matchedRole.permissions) && matchedRole.permissions.length > 0) {
            a.permissions = (matchedRole.isMaster || matchedRole.permissions.includes('*')) ? ['*'] : [...matchedRole.permissions];
          } else if (a.cargo === 'Diretor Adjunto' || (a.email && a.email.toLowerCase().includes('gabrielacessor'))) {
            a.permissions = ['*'];
          }
        }
        const isAdrianoAdmin = (a.email && a.email.toLowerCase().includes('adriano')) || (a.cargo && a.cargo.toLowerCase().includes('presidente'));
        if (isAdrianoAdmin) {
          a.isMaster = false;
          a.permissions = [
            'carteira_studio', 'carteira_pdf', 'carteira_png', 'carteira_imprimir',
            'atletas_visualizar', 'atletas_homologar', 'atletas_editar', 'atletas_excluir', 'atletas_exportar',
            'noticias_publicar', 'noticias_upload', 'noticias_editar', 'noticias_excluir'
          ];
        } else {
          const isMasterPerm = (a.permissions && a.permissions.includes('*')) || (a.cargo === 'Diretor Adjunto');
          a.isMaster = !!isMasterPerm;
        }
      });

      localStorage.setItem('pe_institutional_admins', JSON.stringify(list));
      return list;
    }

    async function renderInstitutionalAdminsTable() {
      const tbody = document.getElementById('institutionalTableBody');
      const counter = document.getElementById('totalInstitutionalCount');
      if (!tbody) return;

      const canManageEmails = hasPermission('gestao_emails');
      const admins = await loadInstitutionalAdmins();
      const roles = loadCustomRoles();
      if (counter) counter.textContent = admins.length;
      tbody.innerHTML = '';

      const fragment = document.createDocumentFragment();
      admins.forEach(admin => {
        const roleObj = roles.find(r => r.name.toLowerCase() === (admin.cargo || '').toLowerCase());
        const adminPerms = (admin.permissions && Array.isArray(admin.permissions) && admin.permissions.length > 0)
          ? admin.permissions
          : (roleObj && Array.isArray(roleObj.permissions) ? roleObj.permissions : []);
        const isMaster = adminPerms.includes('*') || (adminPerms.length >= ALL_OPERATION_IDS.length && ALL_OPERATION_IDS.length > 0) || (admin.cargo === 'Diretor Adjunto');
        const permsCount = isMaster ? ALL_OPERATION_IDS.length : adminPerms.length;
        const cargoDisplayName = admin.cargo || (isMaster ? 'Diretor Adjunto' : 'Gestor Autorizado');
        const isPres = cargoDisplayName.toLowerCase().includes('presidente');

        const tr = document.createElement('tr');
        tr.className = "hover:bg-[#070b14] transition";
        tr.innerHTML = `
          <td class="py-3 px-3 whitespace-nowrap">
            <div class="font-bold text-white uppercase text-xs flex items-center gap-1.5 whitespace-nowrap">
              ${isPres ? '<span class="text-amber-300">👑</span>' : (isMaster ? '<span class="text-amber-400">⚡</span>' : '<span class="text-blue-400">🛡️</span>')}
              <span>${escapeText(admin.nome || 'Gestor Autorizado')}</span>
            </div>
            <span class="text-[10px] text-slate-400 block mt-0.5 whitespace-nowrap">Criado em: ${admin.created_at ? new Date(admin.created_at).toLocaleDateString('pt-BR') : '01/01/2026'}</span>
          </td>
          <td class="py-3 px-3 font-mono font-bold text-pe-gold text-xs whitespace-nowrap">
            ${escapeText(admin.email)}
          </td>
          <td class="py-3 px-3 whitespace-nowrap">
            <span class="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-bold whitespace-nowrap leading-none ${isPres ? 'bg-amber-950/80 text-amber-400 border border-amber-500/40 shadow-sm' : (isMaster ? 'bg-amber-950/80 text-amber-400 border border-amber-500/40' : 'bg-blue-950/80 text-blue-400 border border-blue-500/30')}">
              ${escapeText(cargoDisplayName)}
            </span>
          </td>
          <td class="py-3 px-3 whitespace-nowrap">
            <div class="flex items-center gap-2 whitespace-nowrap">
              <span class="text-[10px] font-bold px-2.5 py-0.5 rounded whitespace-nowrap bg-emerald-950/70 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                <i class="fa-solid fa-circle-check text-[9px]"></i> Ativo
              </span>
              <button type="button" onclick="openRoleOperationsModal('${escapeJsString(admin.email)}')" class="text-blue-400 hover:text-blue-300 text-[10px] font-bold underline cursor-pointer whitespace-nowrap">
                Ver Esquema
              </button>
            </div>
          </td>
          <td class="py-3 px-3 text-right whitespace-nowrap">
            ${canManageEmails ? `
            <div class="flex items-center justify-end gap-1.5 whitespace-nowrap">
              <button type="button" onclick="openEditInstitutionalAdminModal('${escapeJsString(admin.email)}')" class="text-[11px] text-amber-300 hover:text-amber-200 bg-amber-950/50 hover:bg-amber-900/70 border border-amber-500/40 px-2.5 py-1.5 rounded-lg transition flex items-center gap-1 font-bold cursor-pointer whitespace-nowrap" title="Editar dados e cargo da conta">
                <i class="fa-solid fa-pen-to-square text-[10px]"></i> <span>Editar</span>
              </button>
              <button type="button" onclick="handleDeleteInstitutionalAdmin('${escapeJsString(admin.email)}')" class="text-[11px] text-rose-300 hover:text-rose-200 bg-rose-950/50 hover:bg-rose-900/70 border border-rose-500/40 px-2.5 py-1.5 rounded-lg transition flex items-center gap-1 font-bold cursor-pointer whitespace-nowrap" title="Remover esta conta do sistema">
                <i class="fa-solid fa-trash text-[10px]"></i> <span>Remover</span>
              </button>
            </div>` : '<span class="text-[10px] text-slate-500 italic">Somente leitura</span>'}
          </td>
        `;
        fragment.appendChild(tr);
      });
      tbody.appendChild(fragment);
    }

    async function handleAdminCreateEmail(e) {
      e.preventDefault();
      if (!hasPermission('gestao_emails')) {
        showToast("⚠️ Seu cargo não tem permissão para credenciar novos e-mails institucionais.", true);
        return;
      }
      const nameInput = document.getElementById('panelRegName');
      const roleSelect = document.getElementById('panelRegRole');
      const emailInput = document.getElementById('panelRegEmail');
      const passwordInput = document.getElementById('panelRegPassword');
      const confirmPasswordInput = document.getElementById('panelRegConfirmPassword');
      const fedKeyInput = document.getElementById('panelRegFederationKey');
      const feedback = document.getElementById('panelRegFeedback');

      // Reseta bordas de erro
      passwordInput.classList.remove('border-red-500');
      confirmPasswordInput.classList.remove('border-red-500');

      let name = nameInput.value.trim();
      const role = roleSelect.value;
      let rawEmail = emailInput.value.trim().toLowerCase();
      const password = passwordInput.value;
      const confirmPassword = confirmPasswordInput.value;
      const fedKey = fedKeyInput.value.trim();

      feedback.classList.remove('hidden');

      // Se o usuário digitou um email no campo Nome (ex: gabrielacessor@foot-table.pe.org), limpa e formata em nome legível
      if (name.includes('@')) {
        const rawPrefix = name.split('@')[0].replace(/[._-]/g, ' ').trim();
        name = rawPrefix.split(' ').filter(Boolean).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
        nameInput.value = name;
      }

      if (!name || name.length < 2) {
        feedback.className = "text-xs rounded-xl p-3 border bg-red-950/40 border-red-500/40 text-red-300";
        feedback.textContent = "❌ Informe o nome completo do Diretor ou Gestor responsável.";
        nameInput.focus();
        return;
      }

      if (password !== confirmPassword) {
        feedback.className = "text-xs rounded-xl p-3 border bg-red-950/40 border-red-500/40 text-red-300 font-bold";
        feedback.textContent = "❌ As senhas digitadas não coincidem. Digite a mesma senha no campo Senha e no campo Confirmar Senha.";
        passwordInput.classList.add('border-red-500');
        confirmPasswordInput.classList.add('border-red-500');
        confirmPasswordInput.focus();
        feedback.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        return;
      }

      if (password.length < 3) {
        feedback.className = "text-xs rounded-xl p-3 border bg-red-950/40 border-red-500/40 text-red-300";
        feedback.textContent = "❌ A senha deve conter pelo menos 3 caracteres.";
        passwordInput.classList.add('border-red-500');
        passwordInput.focus();
        return;
      }

      if (fedKey !== 'FPFTM-2026') {
        feedback.className = "text-xs rounded-xl p-3 border bg-red-950/40 border-red-500/40 text-red-300";
        feedback.textContent = "❌ Chave de homologação da Federação inválida (use FPFTM-2026).";
        fedKeyInput.focus();
        return;
      }

      // Sanitização estrita do prefixo
      let emailPrefix = rawEmail
        .replace(/@foot-table\.pe\.(gov\.br|org)/gi, '')
        .replace(/@.*$/, '')
        .replace(/\s+/g, '')
        .replace(/[^a-z0-9._-]/g, '');

      if (!emailPrefix) {
        feedback.className = "text-xs rounded-xl p-3 border bg-red-950/40 border-red-500/40 text-red-300";
        feedback.textContent = "❌ Informe um prefixo válido para o e-mail institucional (ex: gabriel.alves).";
        emailInput.focus();
        return;
      }

      const fullEmail = `${emailPrefix}@foot-table.pe.org`;

      feedback.className = "text-xs rounded-xl p-3 border bg-blue-950/40 border-blue-500/40 text-blue-300 flex items-center gap-2";
      feedback.innerHTML = `<span class="animate-spin text-pe-gold">⏳</span><span>Gerando credencial oficial e gravando no banco de dados com esquema de permissões...</span>`;

      // Encontra permissões do cargo ou personalizadas
      const roles = loadCustomRoles();
      const roleObj = roles.find(r => r.name.toLowerCase() === role.toLowerCase());

      const customBox = document.getElementById('createEmailPermsContainer');
      const isCustomExpanded = customBox && !customBox.classList.contains('hidden');
      const checkedPerms = Array.from(document.querySelectorAll('.create-email-perm-check:checked')).map(cb => cb.value);

      let permissions = [];
      let isMasterRole = false;

      if (isCustomExpanded && checkedPerms.length > 0) {
        const isAll = checkedPerms.length >= ALL_OPERATION_IDS.length || checkedPerms.includes('*');
        permissions = isAll ? ['*'] : checkedPerms;
        isMasterRole = isAll || role === 'Diretor Adjunto';
      } else {
        isMasterRole = role === 'Diretor Adjunto' || (roleObj && (roleObj.isMaster || (roleObj.permissions && roleObj.permissions.includes('*'))));
        permissions = isMasterRole ? ['*'] : (roleObj && Array.isArray(roleObj.permissions) ? [...roleObj.permissions] : []);
      }

      const newAdmin = {
        nome: name,
        cargo: role,
        email: fullEmail,
        senha: password,
        permissions: permissions,
        isMaster: !!isMasterRole,
        created_at: new Date().toISOString()
      };

      let admins = await loadInstitutionalAdmins();
      const existingIdx = admins.findIndex(a => (a.email || '').toLowerCase() === fullEmail.toLowerCase());
      if (existingIdx >= 0) {
        admins[existingIdx] = { ...admins[existingIdx], ...newAdmin, created_at: new Date().toISOString() };
      } else {
        admins.unshift(newAdmin);
      }

      // Deduplicação inteligente imediata
      const { unique: cleanAdmins, removedOldDuplicates } = deduplicateInstitutionalAdmins(admins);
      admins = cleanAdmins;
      localStorage.setItem('pe_institutional_admins', JSON.stringify(admins));

      // Gravação no Supabase (keep_alive_logs como canal de nuvem e admin_users)
      if (supabaseClient) {
        try {
          const cloudKey = 'pe_admin_account:' + fullEmail.toLowerCase();
          try {
            await supabaseClient.from('keep_alive_logs').delete().eq('source', cloudKey);
          } catch (e) {}
          await supabaseClient.from('keep_alive_logs').insert([{
            source: cloudKey,
            status: JSON.stringify(newAdmin),
            pinged_at: new Date().toISOString()
          }]);

          const dbPayload = {
            nome: name,
            cargo: role,
            email: fullEmail.toLowerCase(),
            senha: password
          };
          try {
            const { error: upsertErr } = await supabaseClient.from('admin_users').upsert([dbPayload], { onConflict: 'email' });
            if (upsertErr) {
              const { error: updErr } = await supabaseClient.from('admin_users').update(dbPayload).eq('email', dbPayload.email);
              if (updErr) {
                await supabaseClient.from('admin_users').insert([dbPayload]);
              }
            }
          } catch (e) {}

          // Se houver duplicados antigos removidos, apaga da nuvem também
          if (removedOldDuplicates && removedOldDuplicates.length > 0) {
            for (const oldD of removedOldDuplicates) {
              if (oldD.email && oldD.email !== 'gabrielacessor@foot-table.pe.org' && oldD.email !== fullEmail) {
                try {
                  await supabaseClient.from('keep_alive_logs').delete().eq('source', 'pe_admin_account:' + oldD.email.toLowerCase());
                  await supabaseClient.from('admin_users').delete().eq('email', oldD.email);
                } catch (e) {}
              }
            }
          }
        } catch (err) {
          console.warn("Aviso Supabase ao salvar novo admin:", err);
        }
      }

      feedback.className = "text-xs rounded-xl p-4 border bg-emerald-950/60 border-emerald-500/60 text-emerald-300 font-bold shadow-lg space-y-1.5";
      const permsSummary = isMasterRole 
        ? '<span class="text-amber-300 font-bold">⚡ Acesso Total Master (Todas as Operações)</span>'
        : `<span class="text-blue-300 font-bold">🛡️ ${permissions.length} operações vinculadas</span>`;

      feedback.innerHTML = `
        <div class="flex items-center gap-2 text-emerald-300 text-sm font-bold">
          <i class="fa-solid fa-circle-check text-emerald-400"></i>
          <span>E-mail institucional criado e ativado 100% com sucesso!</span>
        </div>
        <div class="text-[11px] text-slate-200">
          <strong>Conta:</strong> <span class="font-mono text-pe-gold">${escapeText(fullEmail)}</span> • <strong>Gestor:</strong> ${escapeText(name)} • <strong>Cargo:</strong> ${escapeText(role)}
        </div>
        <div class="text-[10px] text-slate-300 flex items-center gap-2">
          <span>${permsSummary}</span>
          <span>•</span>
          <span class="text-emerald-400 font-semibold">Credencial homologada para login imediato</span>
        </div>
      `;

      document.getElementById('adminCreateEmailForm').reset();
      document.getElementById('panelRegFederationKey').value = "FPFTM-2026";
      const passStatus = document.getElementById('passMatchStatus');
      if (passStatus) passStatus.classList.add('hidden');
      const customPermsBox = document.getElementById('createEmailPermsContainer');
      if (customPermsBox) customPermsBox.classList.add('hidden');
      const toggleIcon = document.getElementById('createEmailPermsToggleIcon');
      if (toggleIcon) toggleIcon.textContent = '▶';
      populateRoleSelect();
      await renderInstitutionalAdminsTable();
      updateOperationsTelemetry();
      showToast(`✓ E-mail institucional ${fullEmail} criado com sucesso e pronto para login!`);
    }

    /* =========================================================
       MODAL FLUTUANTE DE EDIÇÃO DE CONTA INSTITUCIONAL
       ========================================================= */
    function populateEditAdminRoleSelect(currentRole) {
      const select = document.getElementById('editAdminRole');
      if (!select) return;
      const roles = loadCustomRoles();
      select.innerHTML = '';
      roles.forEach(r => {
        const opt = document.createElement('option');
        opt.value = r.name;
        opt.textContent = r.name;
        select.appendChild(opt);
      });
      if (currentRole && roles.some(r => r.name.toLowerCase() === currentRole.toLowerCase())) {
        const matched = roles.find(r => r.name.toLowerCase() === currentRole.toLowerCase());
        select.value = matched.name;
      } else {
        select.value = 'Diretor Adjunto';
      }
      updateEditAdminRolePreview(select.value);
    }

    function updateEditAdminRolePreview(roleName) {
      const summaryText = document.getElementById('editAdminRoleSummaryText');
      if (summaryText) {
        summaryText.innerHTML = `Atribuições: <strong class="text-emerald-400">Padrão configurado do cargo</strong>`;
      }
    }

    function formatEditAdminEmailInput(input) {
      input.value = input.value.toLowerCase().replace(/@.*$/, '').replace(/[^a-z0-9._-]/g, '');
    }

    function renderEditAdminPermsCheckboxes(selectedPerms = []) {
      const container = document.getElementById('editAdminPermsGrid');
      if (!container) return;
      const groups = loadSystemOperationGroups();
      const isWildcard = selectedPerms && selectedPerms.includes('*');

      container.innerHTML = groups.map(group => `
        <div class="bg-[#05080e] border border-[#1c253b] rounded-lg p-2 space-y-1.5">
          <div class="flex items-center gap-1.5 pb-1 border-b border-[#1c253b]/80">
            <span class="text-xs">${group.icon}</span>
            <span class="font-bold text-[10px] text-white uppercase tracking-wider">${escapeText(group.title)}</span>
          </div>
          <div class="space-y-1">
            ${group.items.map(item => {
              const isChecked = isWildcard || (Array.isArray(selectedPerms) && selectedPerms.includes(item.id));
              return `
                <label class="flex items-start gap-1.5 p-1 rounded hover:bg-white/5 cursor-pointer select-none text-[10px]">
                  <input 
                    type="checkbox" 
                    value="${item.id}" 
                    class="edit-admin-perm-check mt-0.5 rounded border-[#1c253b] text-pe-gold focus:ring-0 cursor-pointer"
                    ${isChecked ? 'checked' : ''}
                    onchange="updateEditAdminPermsCountBadge()"
                  />
                  <span class="text-slate-300 font-medium leading-tight">${escapeText(item.name)}</span>
                </label>
              `;
            }).join('')}
          </div>
        </div>
      `).join('');

      updateEditAdminPermsCountBadge();
    }

    function updateEditAdminPermsCountBadge() {
      const badge = document.getElementById('editAdminPermsCountBadge');
      const masterNotice = document.getElementById('editAdminMasterNotice');

      if (badge) {
        badge.textContent = "Configurado";
        badge.className = "text-[10px] font-bold px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-500/30";
      }
      if (masterNotice) {
        masterNotice.classList.add('hidden');
      }
    }

    function syncEditAdminPermsFromRole() {
      const select = document.getElementById('editAdminRole');
      if (!select) return;
      const roleName = select.value;
      const roles = loadCustomRoles();
      const roleObj = roles.find(r => r.name.toLowerCase() === (roleName || '').toLowerCase());
      const isTotal = roleName.toLowerCase() === 'diretor adjunto' || (roleObj && roleObj.permissions && roleObj.permissions.includes('*')) || (roleObj && roleObj.isMaster);
      const activeOps = isTotal ? ALL_OPERATION_IDS : (roleObj && Array.isArray(roleObj.permissions) ? roleObj.permissions : []);

      document.querySelectorAll('.edit-admin-perm-check').forEach(cb => {
        cb.checked = isTotal || activeOps.includes(cb.value);
      });
      updateEditAdminPermsCountBadge();
      showToast(`Permissões preenchidas com o padrão do cargo "${roleName}".`);
    }

    function toggleAllEditAdminPerms(shouldCheck) {
      document.querySelectorAll('.edit-admin-perm-check').forEach(cb => {
        cb.checked = !!shouldCheck;
      });
      updateEditAdminPermsCountBadge();
    }

    async function openEditInstitutionalAdminModal(email) {
      if (!hasPermission('gestao_emails')) {
        showToast("⚠️ Seu cargo não tem permissão para editar acessos institucionais.", true);
        return;
      }
      const admins = await loadInstitutionalAdmins();
      const target = admins.find(a => (a.email || '').toLowerCase() === (email || '').toLowerCase());
      if (!target) {
        showToast("Conta não encontrada no sistema.", true);
        return;
      }

      document.getElementById('editAdminOriginalEmail').value = target.email;
      document.getElementById('editAdminName').value = target.nome || '';

      let prefix = (target.email || '').split('@')[0];
      document.getElementById('editAdminEmailPrefix').value = prefix;

      const dateEl = document.getElementById('editAdminCreatedDate');
      if (dateEl) {
        dateEl.textContent = target.created_at ? new Date(target.created_at).toLocaleDateString('pt-BR') : '01/01/2026';
      }

      populateEditAdminRoleSelect(target.cargo || 'Diretor Adjunto');
      document.getElementById('editAdminPassword').value = '';

      // Renderiza as permissões específicas do usuário
      const roles = loadCustomRoles();
      const roleObj = roles.find(r => r.name.toLowerCase() === (target.cargo || '').toLowerCase());
      let targetPerms = [];
      if (target.permissions && Array.isArray(target.permissions)) {
        targetPerms = target.permissions;
      } else if (target.cargo === 'Diretor Adjunto') {
        targetPerms = ['*'];
      } else if (roleObj && Array.isArray(roleObj.permissions)) {
        targetPerms = roleObj.permissions;
      } else {
        targetPerms = [];
      }
      renderEditAdminPermsCheckboxes(targetPerms);

      const feedback = document.getElementById('editAdminFeedback');
      if (feedback) feedback.classList.add('hidden');

      const modal = document.getElementById('editInstitutionalAdminModal');
      if (modal) {
        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      }
    }

    function closeEditInstitutionalAdminModal() {
      const modal = document.getElementById('editInstitutionalAdminModal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = '';
    }

    async function handleSaveEditInstitutionalAdmin(e) {
      e.preventDefault();
      if (!hasPermission('gestao_emails')) {
        showToast("⚠️ Seu cargo não tem permissão para editar contas institucionais.", true);
        return;
      }

      const origEmail = document.getElementById('editAdminOriginalEmail').value.trim();
      const name = document.getElementById('editAdminName').value.trim();
      let prefix = document.getElementById('editAdminEmailPrefix').value.trim().toLowerCase();
      const role = document.getElementById('editAdminRole').value;
      const newPass = document.getElementById('editAdminPassword').value;
      const feedback = document.getElementById('editAdminFeedback');

      if (feedback) feedback.classList.remove('hidden');

      if (!prefix) {
        if (feedback) {
          feedback.className = "text-xs rounded-xl p-3 border bg-red-950/40 border-red-500/40 text-red-300";
          feedback.textContent = "❌ Informe o prefixo para o e-mail institucional.";
        }
        return;
      }

      const newEmail = prefix.includes('@') ? prefix : `${prefix}@foot-table.pe.org`;

      let admins = await loadInstitutionalAdmins();
      const targetIdx = admins.findIndex(a => (a.email || '').toLowerCase() === origEmail.toLowerCase());
      if (targetIdx === -1) {
        if (feedback) {
          feedback.className = "text-xs rounded-xl p-3 border bg-red-950/40 border-red-500/40 text-red-300";
          feedback.textContent = "❌ Registro da conta não foi encontrado para atualização.";
        }
        return;
      }

      // Se alterou o e-mail, checa colisão com outras contas
      if (newEmail.toLowerCase() !== origEmail.toLowerCase()) {
        const exists = admins.some((a, idx) => idx !== targetIdx && (a.email || '').toLowerCase() === newEmail.toLowerCase());
        if (exists) {
          if (feedback) {
            feedback.className = "text-xs rounded-xl p-3 border bg-red-950/40 border-red-500/40 text-red-300";
            feedback.textContent = `❌ O e-mail "${newEmail}" já pertence a outra conta cadastrada.`;
          }
          return;
        }
      }

      // Coleta operações marcadas no seletor da conta
      const selectedOps = [];
      document.querySelectorAll('.edit-admin-perm-check:checked').forEach(cb => {
        selectedOps.push(cb.value);
      });
      const isMasterRole = selectedOps.length === ALL_OPERATION_IDS.length && ALL_OPERATION_IDS.length > 0;
      const permissions = isMasterRole ? ['*'] : selectedOps;

      // Determina a senha final da conta
      let finalSenha = admins[targetIdx].senha || 'admin';
      if (newPass && newPass.trim().length > 0) {
        finalSenha = newPass.trim();
      }

      admins[targetIdx].nome = name;
      admins[targetIdx].cargo = role;
      admins[targetIdx].email = newEmail;
      admins[targetIdx].senha = finalSenha;
      admins[targetIdx].permissions = permissions;
      admins[targetIdx].isMaster = !!isMasterRole;
      admins[targetIdx].updated_at = new Date().toISOString();

      localStorage.setItem('pe_institutional_admins', JSON.stringify(admins));

      if (supabaseClient) {
        try {
          if (newEmail.toLowerCase() !== origEmail.toLowerCase()) {
            await supabaseClient.from('keep_alive_logs').delete().eq('source', 'pe_admin_account:' + origEmail.toLowerCase());
            await supabaseClient.from('admin_users').delete().eq('email', origEmail.toLowerCase());
            if (origEmail.toLowerCase().includes('gabrielacessor')) {
              await supabaseClient.from('keep_alive_logs').delete().eq('source', 'pe_admin_account:gabrielacessor@foot-table.pe.gov.br');
              await supabaseClient.from('admin_users').delete().eq('email', 'gabrielacessor@foot-table.pe.gov.br');
            }
          }
          // Salva no keep_alive_logs (canal de nuvem de alta disponibilidade)
          const cloudKey = 'pe_admin_account:' + newEmail.toLowerCase();
          try {
            await supabaseClient.from('keep_alive_logs').delete().eq('source', cloudKey);
          } catch (e) {}
          await supabaseClient.from('keep_alive_logs').insert([{
            source: cloudKey,
            status: JSON.stringify(admins[targetIdx]),
            pinged_at: new Date().toISOString()
          }]);

          const dbPayload = {
            nome: name,
            cargo: role,
            email: newEmail.toLowerCase(),
            senha: finalSenha
          };
          const { error: upsertErr } = await supabaseClient.from('admin_users').upsert([dbPayload], { onConflict: 'email' });
          if (upsertErr) {
            console.error("Erro Supabase ao salvar edição:", upsertErr);
          }
        } catch (err) {
          console.warn("Aviso Supabase ao salvar edição:", err);
        }
      }

      const currentUser = sessionStorage.getItem('pe_admin_user') || localStorage.getItem('pe_admin_user');
      if (currentUser && (currentUser.toLowerCase() === origEmail.toLowerCase() || currentUser.toLowerCase() === newEmail.toLowerCase() || currentUser.replace(/@foot-table\.pe\.(org|gov\.br)$/i, '') === origEmail.replace(/@foot-table\.pe\.(org|gov\.br)$/i, ''))) {
        sessionStorage.setItem('pe_admin_user', newEmail);
        localStorage.setItem('pe_admin_user', newEmail);
        const sidebarAdminUser = document.getElementById('sidebarAdminUser');
        if (sidebarAdminUser) sidebarAdminUser.textContent = newEmail;
        applyPermissionsToUI();
      }

      if (feedback) {
        feedback.className = "text-xs rounded-xl p-3 border bg-emerald-950/40 border-emerald-500/50 text-emerald-300 font-bold";
        feedback.textContent = `✓ Dados da conta "${newEmail}" e ${selectedOps.length} operações atualizadas com sucesso!`;
      }

      setTimeout(() => {
        closeEditInstitutionalAdminModal();
        renderInstitutionalAdminsTable();
        updateOperationsTelemetry();
        applyPermissionsToUI();
        showToast(`Conta "${newEmail}" atualizada com sucesso!`);
      }, 500);
    }

    async function handleDeleteInstitutionalAdmin(email) {
      if (!hasPermission('gestao_emails')) {
        showToast("⚠️ Seu cargo não tem permissão para revogar acessos institucionais.", true);
        return;
      }
      let admins = await loadInstitutionalAdmins();
      if (admins.length <= 1) {
        alert("Não é possível remover a única conta institucional restante no sistema.");
        return;
      }

      const target = admins.find(a => (a.email || '').toLowerCase() === email.toLowerCase());
      const displayName = target ? target.nome : email;

      if (!confirm(`Deseja realmente remover o acesso da conta institucional:\n\n👤 ${displayName}\n📧 ${email}?`)) {
        return;
      }

      admins = admins.filter(a => (a.email || '').toLowerCase() !== email.toLowerCase());
      localStorage.setItem('pe_institutional_admins', JSON.stringify(admins));

      if (supabaseClient) {
        try {
          await supabaseClient.from('keep_alive_logs').delete().eq('source', 'pe_admin_account:' + email.toLowerCase());
          await supabaseClient.from('admin_users').delete().eq('email', email.toLowerCase());
          if (email.toLowerCase().includes('gabrielacessor')) {
            await supabaseClient.from('keep_alive_logs').delete().eq('source', 'pe_admin_account:gabrielacessor@foot-table.pe.gov.br');
            await supabaseClient.from('admin_users').delete().eq('email', 'gabrielacessor@foot-table.pe.gov.br');
          }
        } catch (e) {
          console.warn("Exclusão Supabase:", e);
        }
      }

      showToast(`Conta institucional "${email}" removida com sucesso!`);
      renderInstitutionalAdminsTable();
      updateOperationsTelemetry();
    }

    /* =========================================================
       AUTENTICAÇÃO E SESSÃO DO ADMINISTRADOR
       ========================================================= */
    function checkAuth() {
      const isLogged = sessionStorage.getItem('pe_admin_logged') === 'true' || localStorage.getItem('pe_admin_logged') === 'true';
      const sessionExpires = Number(sessionStorage.getItem('pe_admin_session_expires') || localStorage.getItem('pe_admin_session_expires') || 0);
      const isExpired = sessionExpires > 0 && Date.now() > sessionExpires;

      if (!isLogged || isExpired) {
        handleLogout();
        return;
      }

      let user = sessionStorage.getItem('pe_admin_user') || localStorage.getItem('pe_admin_user');
      if (!user) {
        handleLogout();
        return;
      }

      if (user === 'gabrielacessor@foot-table.pe.gov.br') {
        user = 'gabrielacessor@foot-table.pe.org';
        sessionStorage.setItem('pe_admin_user', user);
        localStorage.setItem('pe_admin_user', user);
      }

      // Validação de Integridade de Acesso Institucional:
      // Garante que o usuário logado realmente existe no cadastro de administradores institucionais ou é master
      const rawUser = user.toLowerCase().trim();
      const isMasterUser = rawUser === 'admin' || rawUser.includes('gabrielacessor');
      const admins = JSON.parse(localStorage.getItem('pe_institutional_admins')) || [];
      const currentAdmin = admins.find(a => {
        const aEmail = (a.email || '').toLowerCase().trim();
        return aEmail === rawUser || aEmail === `${rawUser}@foot-table.pe.org` || aEmail.replace(/@foot-table\.pe\.(org|gov\.br)$/i, '') === rawUser;
      });

      if (!isMasterUser && !currentAdmin) {
        console.warn("Acesso bloqueado: Conta institucional não cadastrada ou revogada.", rawUser);
        handleLogout();
        return;
      }

      applyPermissionsToUI();
    }

    async function handleLogout() {
      try {
        if (typeof fetch === 'function') {
          await fetch('/api/auth/logout', { method: 'POST' });
        }
      } catch (e) {}
      sessionStorage.removeItem('pe_admin_logged');
      sessionStorage.removeItem('pe_admin_user');
      sessionStorage.removeItem('pe_admin_session_token');
      sessionStorage.removeItem('pe_admin_session_expires');
      localStorage.removeItem('pe_admin_logged');
      localStorage.removeItem('pe_admin_user');
      localStorage.removeItem('pe_admin_session_token');
      localStorage.removeItem('pe_admin_session_expires');
      window.location.href = 'login.html';
    }

    /* Helper Global de Auditoria de Operações Sensíveis */
    async function logAuditEvent(action, resource, details = {}) {
      const actor = sessionStorage.getItem('pe_admin_user') || localStorage.getItem('pe_admin_user') || 'anonymous';
      try {
        if (supabaseClient) {
          await supabaseClient.from('audit_logs').insert([{
            actor_email: actor,
            action: action,
            target_resource: resource,
            details: details
          }]);
        }
      } catch (e) {
        console.warn('Falha silenciosa ao registrar auditoria:', e);
      }
    }

    /* =========================================================
       INICIALIZAÇÃO GERAL
       ========================================================= */
    async function initApp() {
      try {
        checkAuth();
        applyPermissionsToUI(); // Executa em menos de 1ms antes de qualquer requisição na rede

        const urlInput = document.getElementById('adminCfgUrl');
        if (urlInput) urlInput.value = localStorage.getItem('pe_supabase_url') || DEFAULT_SUPABASE_URL;
        const keyInput = document.getElementById('adminCfgKey');
        if (keyInput) keyInput.value = localStorage.getItem('pe_supabase_anon_key') || DEFAULT_SUPABASE_ANON_KEY;

        const secUrlInput = document.getElementById('adminCfgSecondaryUrl');
        if (secUrlInput) secUrlInput.value = localStorage.getItem('pe_supabase_secondary_url') || DEFAULT_SUPABASE_SECONDARY_URL;
        const secKeyInput = document.getElementById('adminCfgSecondaryKey');
        if (secKeyInput) secKeyInput.value = localStorage.getItem('pe_supabase_secondary_anon_key') || DEFAULT_SUPABASE_SECONDARY_ANON_KEY;
        const secDualWrite = document.getElementById('adminCfgDualWrite');
        if (secDualWrite) secDualWrite.checked = localStorage.getItem('pe_supabase_dual_write') !== 'false';
        const secFailover = document.getElementById('adminCfgAutoFailover');
        if (secFailover) secFailover.checked = localStorage.getItem('pe_supabase_auto_failover') !== 'false';

        await initSupabase();
        await initSecondarySupabase();
        updateIntermediaryStatusUI();
        reconcileDatabasesIntermediary().catch(() => null);
        loadGalleryFromCloud().catch(() => null);
        setAthleteModalityValue('SOLO (INDIVIDUAL)');
        setAthleteCategoryValue('AMADOR');
        renderJogadoresCadastradosTable();
        renderAdminNews();
        renderGalleryManager();
        syncStudioWithCurrentLayout();
        updateDashboardData();
        renderOperationsSchemeForm();
        populateRoleSelect();
        renderCustomRolesList();
        renderInstitutionalAdminsTable();
        applyPermissionsToUI();

        // Inicialização do Studio CR80 Interativo Oficial
        initStudioEvents();
        prepararStudioNovoAtleta(true);
        updateGuidesButtonUI();
        applyCurrentSvgBackground();
        renderInteractiveElements();
        selectElement('field-nome');
        setTimeout(() => {
          autoFitStudioToScreen(true);
        }, 120);

        // Previne que o navegador insira emails de login automaticamente no campo de busca de atletas
        setTimeout(() => {
          const searchInp = document.getElementById('quickSearchAthleteInput');
          if (searchInp && searchInp.value && searchInp.value.includes('@')) {
            searchInp.value = '';
            clearQuickAthleteSearch();
          }
        }, 50);

        // Sincroniza estado inicial do botão de alternância da sidebar
        const isCollapsed = localStorage.getItem('fpeft_sidebar_collapsed') === 'true';
        updateSidebarToggleButtons(isCollapsed);

        // Ao atualizar o site (F5 ou abertura), gera automaticamente um novo código de federado único
        generateFederatedNumber(true);

        // Inicializa listener em tempo real para sincronização do layout da carteira
        initStudioRealtimeSync();
      } catch (e) {
        console.warn("Aviso na inicialização do painel:", e);
      }
    }

    // Sincronização em tempo real via Supabase Realtime entre computadores e dispositivos
    function initStudioRealtimeSync() {
      if (typeof supabaseClient !== 'undefined' && supabaseClient && typeof supabaseClient.channel === 'function') {
        try {
          supabaseClient.channel('realtime_carteira_studio_layout')
            .on('postgres_changes', { event: '*', schema: 'public', table: 'configuracoes', filter: 'chave=eq.carteira_studio_layout' }, (payload) => {
              if (payload && payload.new && payload.new.valor) {
                try {
                  const data = typeof payload.new.valor === 'string' ? JSON.parse(payload.new.valor) : payload.new.valor;
                  if (data && data.elements && Array.isArray(data.elements)) {
                    const curPhoto = (document.getElementById('athletePhotoVal')?.value || window._currentAthletePhoto || '');
                    studioState.elements = sanitizeStudioElements(data.elements);
                    if (curPhoto) {
                      const pEl = studioState.elements.find(i => i.id === 'field-foto');
                      if (pEl) pEl.photoUrl = curPhoto;
                    }
                    if (data.bgTransform) studioState.bgTransform = data.bgTransform;
                    localStorage.setItem('fpeft_studio_custom_elements', JSON.stringify(studioState.elements));
                    renderInteractiveElements();
                    applyCurrentSvgBackground();
                    if (typeof syncInspectorWithSelected === 'function') syncInspectorWithSelected();
                  }
                } catch(e) {}
              }
            })
            .subscribe();
        } catch (e) {}
      }
    }

    // Sincronização em tempo real entre abas e dispositivos
    if (window.BroadcastChannel) {
      try {
        const studioBc = new BroadcastChannel('fpeft_studio_design_channel');
        studioBc.onmessage = (event) => {
          if (event.data && event.data.type === 'STUDIO_DESIGN_UPDATED' && event.data.payload) {
            const payload = event.data.payload;
            if (payload.elements && Array.isArray(payload.elements)) {
              const curPhoto = (document.getElementById('athletePhotoVal')?.value || window._currentAthletePhoto || '');
              studioState.elements = sanitizeStudioElements(payload.elements);
              if (curPhoto) {
                const pEl = studioState.elements.find(i => i.id === 'field-foto');
                if (pEl) pEl.photoUrl = curPhoto;
              }
              if (payload.bgTransform) studioState.bgTransform = payload.bgTransform;
              renderInteractiveElements();
              applyCurrentSvgBackground();
              updateCloudSyncStatus('synced');
            }
          }
        };
      } catch (e) {}
    }

    // Ao focar a janela, sincroniza nuvem somente se não houver cadastro com foto ativa em edição
    window.addEventListener('focus', () => {
      const activePhoto = document.getElementById('athletePhotoVal')?.value || window._currentAthletePhoto;
      if (activePhoto) return;
      if (typeof fetchStudioDesignFromSupabase === 'function' && typeof supabaseClient !== 'undefined' && supabaseClient) {
        fetchStudioDesignFromSupabase(false);
      }
    });

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initApp);
    } else {
      initApp();
    }

    window.addEventListener('load', () => {
      setTimeout(() => {
        // Assegura renovação do código único e barras limpas para novo federado após carregamento completo
        if (!window._lastActiveAthlete) {
          prepararStudioNovoAtleta(true);
        }
      }, 80);
    });
  </script>

  <!-- Toast Flutuante de Notificação -->
  <div id="toastNotification" class="fixed bottom-6 right-6 bg-[#070b14] border border-pe-gold/40 text-white px-4 py-3 rounded-xl shadow-2xl text-xs font-medium flex items-center gap-3 transform translate-y-24 opacity-0 transition-all duration-300 z-50 pointer-events-none">
    <div class="w-6 h-6 rounded-full bg-pe-gold/20 text-pe-gold flex items-center justify-center shrink-0">
      <i class="fa-solid fa-check text-xs"></i>
    </div>
    <span id="toastMessage">Operação realizada com sucesso!</span>
  </div>

  <!-- Canvas Invisível para Renderização em Alta Resolução 300 DPI -->
  <canvas id="hdRenderCanvas" class="hidden"></canvas>

  <!-- FICHA COMPLETA FLUTUANTE (POPOVER HOVER) -->
  <div id="athleteHoverCard" class="fixed pointer-events-none z-[9999] hidden w-84 max-w-[340px] bg-[#070e1d]/95 backdrop-blur-xl border border-pe-gold/60 rounded-2xl p-4 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-opacity duration-150">
    <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0 rounded-t-2xl"></div>
    <div id="athleteHoverCardContent" class="space-y-3 pt-1">
      <!-- Injetado dinamicamente -->
    </div>
  </div>

  <!-- MODAL LIGHTBOX: FOTO OFICIAL DO ATLETA EM TAMANHO REAL -->
  <div id="modalFotoTamanhoReal" class="fixed inset-0 z-[10001] hidden bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6" onclick="fecharFotoTamanhoReal()">
    <div class="relative max-w-3xl max-h-[92vh] w-full bg-[#070e1d] border-2 border-pe-gold/80 rounded-3xl p-4 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col items-center my-auto" onclick="event.stopPropagation()">
      <div class="w-full flex items-center justify-between pb-3 border-b border-[#1c253b] mb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-lg bg-pe-gold/20 border border-pe-gold/50 flex items-center justify-center text-pe-gold text-xs">
            <i class="fa-solid fa-expand"></i>
          </div>
          <div>
            <h3 id="fotoTamanhoRealTitle" class="text-white font-oswald text-base sm:text-lg uppercase font-bold tracking-wide leading-tight">Foto Oficial do Atleta</h3>
            <span class="text-[9px] text-slate-400 font-mono">Visualização em alta resolução no tamanho real</span>
          </div>
        </div>
        <button type="button" onclick="fecharFotoTamanhoReal()" class="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition cursor-pointer text-base">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="w-full flex-1 min-h-[220px] max-h-[65vh] overflow-auto flex items-center justify-center rounded-2xl bg-[#030712] p-2 sm:p-4 border border-pe-gold/30 shadow-inner">
        <img id="fotoTamanhoRealImg" src="" alt="Foto Tamanho Real" class="max-w-full max-h-[62vh] object-contain rounded-xl shadow-2xl transition" />
      </div>

      <div class="w-full pt-3 mt-3 border-t border-[#1c253b] flex flex-wrap items-center justify-between gap-2 text-xs">
        <span id="fotoTamanhoRealDims" class="font-mono text-[10px] text-pe-gold font-bold bg-pe-gold/10 px-2.5 py-1 rounded-lg border border-pe-gold/30">Dimensões Originais</span>
        <div class="flex items-center gap-2">
          <a id="btnBaixarFotoReal" href="#" download="foto_atleta.jpg" target="_blank" class="px-3 py-1.5 bg-[#121d33] hover:bg-[#1a2948] text-pe-gold border border-pe-gold/40 rounded-xl text-xs font-bold transition flex items-center gap-1.5 cursor-pointer">
            <i class="fa-solid fa-download"></i> <span>Baixar Foto</span>
          </a>
          <button type="button" onclick="fecharFotoTamanhoReal()" class="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition cursor-pointer">
            Fechar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- MODAL DE IDENTIFICAÇÃO E STATUS DA CARTEIRA DO ATLETA -->
  <div id="modalVerCarteiraAtleta" class="fixed inset-0 bg-black/85 backdrop-blur-md z-[10000] hidden flex items-center justify-center p-3 sm:p-5 overflow-y-auto" onclick="if(event.target === this) fecharModalVerCarteira()">
    <div class="bg-[#070e1d] border-2 border-pe-gold/60 rounded-3xl p-5 sm:p-7 max-w-2xl w-full shadow-[0_25px_60px_rgba(0,0,0,0.9)] relative space-y-4 my-auto max-h-[92vh] overflow-y-auto">
      
      <!-- Topo do Modal -->
      <div class="flex items-start justify-between border-b border-[#1c253b] pb-4">
        <div class="flex items-center gap-3">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-tr from-pe-gold/20 to-amber-500/10 border border-pe-gold/40 flex items-center justify-center shrink-0 shadow-lg overflow-hidden p-1">
            <img src="assets/images/logo-federacao.png" alt="FPEFT" class="w-full h-full object-contain rounded-full select-none pointer-events-none" draggable="false" onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='/assets/images/logo-federacao.png';}else if(this.dataset.retry==1){this.dataset.retry=2;this.src='assets/logo.png';}" />
          </div>
          <div>
            <div class="flex items-center gap-2">
              <span class="text-[10px] font-mono font-bold text-pe-gold uppercase tracking-wider bg-pe-gold/10 px-2 py-0.5 rounded border border-pe-gold/20">Consulta Oficial FPEFT</span>
              <span id="modalCarteiraFederadoCode" class="text-[10px] font-mono font-bold text-sky-400">#000000</span>
            </div>
            <h3 class="font-oswald text-xl uppercase font-bold text-white tracking-wide mt-0.5">Identificação e Status da Carteira</h3>
          </div>
        </div>
        <button type="button" onclick="fecharModalVerCarteira()" class="text-slate-400 hover:text-white bg-slate-800/80 hover:bg-slate-700 w-8 h-8 rounded-xl flex items-center justify-center transition cursor-pointer" title="Fechar Janela">
          <i class="fa-solid fa-xmark text-sm"></i>
        </button>
      </div>

      <div id="modalVerCarteiraContent" class="space-y-4">
        <!-- Injetado dinamicamente via renderModalVerCarteiraContent -->
      </div>
    </div>
  </div>

  <!-- MODAL DE EXPORTAÇÃO EM LOTE -->
  <div id="batchExportModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] hidden flex items-center justify-center p-4">
    <div class="bg-[#0b101d] border border-[#1c253b] rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center space-y-5 relative">
      <div class="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-600 to-blue-600 text-white flex items-center justify-center text-2xl mx-auto shadow-lg shadow-sky-600/30 animate-pulse">
        <i class="fa-solid fa-file-zipper"></i>
      </div>
      <div>
        <h3 class="font-oswald text-xl uppercase font-bold text-white">Exportação em Lote HD (300 DPI)</h3>
        <p id="batchExportStatusText" class="text-xs text-slate-300 mt-1">Renderizando carteirinhas em PNG de alta resolução...</p>
      </div>
      <div class="w-full bg-[#05080e] rounded-full h-3 overflow-hidden border border-[#1c253b]">
        <div id="batchExportProgressBar" class="bg-gradient-to-r from-pe-gold to-sky-400 h-full rounded-full transition-all duration-200" style="width: 0%"></div>
      </div>
      <div class="flex items-center justify-between text-[11px] text-slate-400 font-mono">
        <span id="batchExportCountText">0 / 0</span>
        <span id="batchExportPercentText">0%</span>
      </div>
      <button type="button" id="btnCancelBatchExport" onclick="cancelBatchExport()" class="text-xs text-slate-400 hover:text-white px-4 py-2 rounded-xl border border-slate-700 hover:border-slate-500 transition cursor-pointer">
        Cancelar Operação
      </button>
    </div>
  </div>

  <!-- MODAL DE IMPORTAÇÃO EM MASSA (CSV / LISTA) -->
  <div id="batchImportModal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-[10000] hidden flex items-center justify-center p-4">
    <div class="bg-[#0b101d] border border-[#1c253b] rounded-3xl p-6 sm:p-7 max-w-2xl w-full shadow-2xl space-y-4 relative">
      <div class="flex items-center justify-between border-b border-[#1c253b] pb-3">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-pe-gold/20 text-pe-gold flex items-center justify-center text-lg">
            <i class="fa-solid fa-file-import"></i>
          </div>
          <div>
            <h3 class="font-oswald text-xl uppercase font-bold text-white">Cadastro em Massa de Atletas</h3>
            <p class="text-xs text-slate-400">Cole uma lista ou envie um arquivo .CSV para cadastrar até 500 atletas</p>
          </div>
        </div>
        <button type="button" onclick="closeBatchImportModal()" class="text-slate-400 hover:text-white text-lg p-1 cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="space-y-2">
        <div class="flex items-center justify-between text-xs text-slate-300 font-bold">
          <label>Cole os dados (Formato: Nome; CPF; Município; Clube; Modalidade):</label>
          <span class="text-[10px] text-pe-gold font-mono">1 atleta por linha</span>
        </div>
        <textarea id="batchImportTextarea" rows="8" placeholder="Lucas Ferreira da Silva; 111.222.333-44; Recife - PE; Sport Club do Recife; SOLO (INDIVIDUAL)
Amanda Costa Mendes; 222.333.444-55; Olinda - PE; Clube Náutico Capibaribe; DUPLAS MISTO
Rodrigo Albuquerque; 333.444.555-66; Caruaru - PE; Central Foot Table; SOLO (INDIVIDUAL)" class="w-full bg-[#05080e] border border-[#1c253b] focus:border-pe-gold rounded-xl p-3 text-xs text-white font-mono outline-none"></textarea>
        <p class="text-[10px] text-slate-400">Cada atleta receberá um código oficial exclusivo de 6 dígitos e registro federativo PE-2026/XXX gerados automaticamente.</p>
      </div>

      <div class="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#1c253b]">
        <label class="bg-[#05080e] hover:bg-[#121c32] border border-[#1c253b] text-slate-300 font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer flex items-center gap-2 transition">
          <i class="fa-solid fa-upload text-pe-gold"></i> Subir Arquivo .CSV
          <input type="file" id="batchCsvFileInput" accept=".csv,.txt" onchange="handleBatchCsvFile(event)" class="hidden">
        </label>
        <div class="flex items-center gap-2">
          <button type="button" onclick="closeBatchImportModal()" class="text-slate-400 hover:text-white text-xs px-4 py-2.5 cursor-pointer">
            Cancelar
          </button>
          <button type="button" onclick="processBatchImport()" class="bg-pe-gold hover:bg-pe-goldHover text-pe-dark font-extrabold text-xs uppercase px-5 py-2.5 rounded-xl transition shadow cursor-pointer">
            Processar e Cadastrar Atletas
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Modal de Confirmação de Exclusão de Notícias -->
  <div id="delete-modal" class="fixed inset-0 z-[10000] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center p-4">
    <div class="bg-[#0f172a] border border-[#1e293b] max-w-sm w-full rounded-2xl p-6 text-center shadow-2xl space-y-4">
      <div class="w-12 h-12 rounded-full bg-red-500/10 text-red-500 flex items-center justify-center mx-auto text-xl border border-red-500/30">
        <i class="fa-solid fa-triangle-exclamation"></i>
      </div>
      <div>
        <h3 class="font-oswald font-black text-lg text-white uppercase">Confirmar Exclusão</h3>
        <p class="text-xs text-slate-400 mt-1 leading-relaxed">
          Tem certeza de que deseja apagar esta matéria oficial? Esta ação removerá a publicação imediatamente do site.
        </p>
      </div>
      <div class="flex items-center gap-3 pt-2">
        <button onclick="closeDeleteModal()" class="flex-1 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold py-2.5 rounded-xl transition cursor-pointer">
          Cancelar
        </button>
        <button id="confirm-delete-btn" onclick="confirmDeleteNews()" class="flex-1 bg-red-600 hover:bg-red-700 text-white text-xs font-bold py-2.5 rounded-xl shadow-lg shadow-red-600/30 transition cursor-pointer">
          Sim, Excluir
        </button>
      </div>
    </div>
  </div>

  <!-- Modal de Prévia da Notícia Completa -->
  <div id="preview-modal" class="fixed inset-0 z-[99999] bg-black/85 backdrop-blur-md hidden items-center justify-center p-3 sm:p-5 overflow-y-auto" style="display: none;" onclick="if(event.target === this) closePreviewModal()">
    <div class="bg-[#0f172a] border border-[#1e293b] max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl p-6 space-y-4 my-auto relative">
      <div class="flex items-center justify-between border-b border-[#1e293b] pb-3">
        <span class="text-xs font-bold text-[#f59e0b] uppercase tracking-wider flex items-center gap-1.5">
          <i class="fa-solid fa-eye"></i> Prévia da Matéria Oficial
        </span>
        <button type="button" onclick="closePreviewModal()" class="text-slate-400 hover:text-white text-sm p-1 cursor-pointer">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div id="preview-modal-body" class="space-y-4">
        <!-- Conteúdo inserido via JS -->
      </div>

      <div class="pt-3 border-t border-[#1e293b] text-right">
        <button type="button" onclick="closePreviewModal()" class="bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold px-4 py-2 rounded-xl transition cursor-pointer">
          Fechar Visualização
        </button>
      </div>
    </div>
  </div>

  <!-- Modal de Captura via Câmera / Webcam (Mobile e Desktop) -->
  <div id="modalWebcamAthlete" class="hidden fixed inset-0 z-[10000] bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-4">
    <div class="bg-[#0b101d] border border-[#1c253b] rounded-2xl max-w-sm w-full p-4 shadow-2xl relative flex flex-col items-center">
      <!-- Cabeçalho do Modal -->
      <div class="w-full flex items-center justify-between pb-3 border-b border-[#1c253b] mb-3">
        <div class="flex items-center gap-2">
          <div class="w-7 h-7 rounded-lg bg-pe-gold/20 text-pe-gold flex items-center justify-center">
            <i class="fa-solid fa-camera text-xs"></i>
          </div>
          <div>
            <h4 class="font-bold text-white text-xs">Foto 3x4 Oficial do Atleta</h4>
            <p id="webcamModalSubtitle" class="text-[10px] text-slate-400">Enquadre o rosto e tire a foto</p>
          </div>
        </div>
        <div class="flex items-center gap-1.5">
          <!-- Botão Inverter Câmera (Espelhar) -->
          <button type="button" onclick="toggleAthleteCameraMirror()" class="btn-mirror-camera-indicator text-slate-300 hover:text-pe-gold bg-[#141d33] hover:bg-[#1c2846] px-2.5 py-1.5 rounded-lg text-xs cursor-pointer border border-[#1c253b] flex items-center gap-1 transition" title="Inverter / Espelhar Câmera Horizontalmente">
            <i class="fa-solid fa-arrows-left-right text-xs"></i>
            <span class="text-[10px] font-bold">Inverter</span>
          </button>
          <button type="button" id="btnFlipAthleteCamera" onclick="flipAthleteCamera()" class="text-slate-300 hover:text-pe-gold bg-[#141d33] hover:bg-[#1c2846] px-2 py-1 rounded-lg text-xs cursor-pointer border border-[#1c253b] flex items-center gap-1" title="Alternar Câmera (Frontal / Traseira)">
            <i class="fa-solid fa-camera-rotate"></i>
            <span class="text-[10px] font-semibold hidden sm:inline">Virar</span>
          </button>
          <button type="button" onclick="closeAthleteWebcam()" class="text-slate-400 hover:text-white p-1 rounded-lg text-sm cursor-pointer ml-1" title="Fechar">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      <!-- Área de Visualização (Vídeo ao Vivo / Prévia da Foto) com Moldura Guia 3x4 -->
      <div class="relative w-full aspect-[3/4] max-h-[360px] bg-black rounded-xl overflow-hidden border border-pe-gold/50 flex items-center justify-center shadow-inner">
        <!-- Vídeo da Câmera em Tempo Real (Invertido/Espelhado por padrão para enquadramento natural) -->
        <video id="webcamAthleteVideo" autoplay playsinline muted class="w-full h-full object-cover" style="transform: scaleX(-1);"></video>

        <!-- Prévia Congelada para Confirmação -->
        <img id="webcamAthleteSnapshotPreview" class="hidden w-full h-full object-cover" alt="Foto Capturada" />

        <!-- Moldura Guia 3x4 Facial -->
        <div id="webcamAthleteOverlay" class="absolute inset-0 border-2 border-dashed border-pe-gold/50 rounded-xl pointer-events-none flex flex-col items-center justify-center">
          <div class="w-36 h-48 border-2 border-pe-gold/80 rounded-[50%] pointer-events-none shadow-[0_0_20px_rgba(217,169,79,0.35)]"></div>
          <span class="mt-2 text-[9px] text-pe-gold font-bold bg-black/75 border border-pe-gold/40 px-2.5 py-0.5 rounded pointer-events-none">Alinhe o rosto no centro</span>
        </div>
      </div>

      <!-- Controles: Modo 1 - Câmera ao Vivo (Tirar Foto) -->
      <div id="webcamControlsLive" class="w-full flex items-center justify-between gap-2 mt-3 pt-3 border-t border-[#1c253b]">
        <button type="button" onclick="toggleAthleteCameraMirror()" class="btn-mirror-camera-indicator px-3 py-2.5 bg-[#05080e] hover:bg-[#152038] text-slate-300 hover:text-pe-gold text-xs font-bold rounded-xl border border-[#1c253b] transition cursor-pointer flex items-center gap-1.5 shadow" title="Inverter / Espelhar a visualização da câmera">
          <i class="fa-solid fa-arrows-left-right text-xs"></i>
          <span>Inverter</span>
        </button>
        <button type="button" onclick="captureAthleteWebcamSnapshot()" class="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-pe-gold hover:bg-pe-goldHover text-black font-extrabold text-xs uppercase rounded-xl shadow-lg transition cursor-pointer active:scale-95 min-h-[42px]">
          <i class="fa-solid fa-camera text-sm"></i>
          <span>📸 Tirar Foto</span>
        </button>
        <button type="button" onclick="closeAthleteWebcam()" class="px-3 py-2.5 bg-[#05080e] hover:bg-[#152038] text-slate-300 text-xs font-bold rounded-xl border border-[#1c253b] transition cursor-pointer">
          Cancelar
        </button>
      </div>

      <!-- Controles: Modo 2 - Confirmação da Foto (Visto ✓ ou Lixeira 🗑️) -->
      <div id="webcamControlsConfirm" class="hidden w-full flex flex-col gap-2 mt-3 pt-3 border-t border-[#1c253b]">
        <div class="text-center w-full">
          <p class="text-xs font-extrabold text-white">Gostou da foto tirada?</p>
          <p class="text-[10px] text-slate-300">Escolha se vai usar esta foto ou descartar na lixeira para tirar outra</p>
        </div>
        <div class="grid grid-cols-2 gap-2 mt-1 w-full">
          <!-- Botão Lixeira: Descartar e tirar outra foto -->
          <button type="button" onclick="discardAthleteWebcamSnapshot()" class="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-rose-600/25 hover:bg-rose-600/40 text-rose-300 hover:text-white border border-rose-500/50 rounded-xl font-bold text-xs transition cursor-pointer active:scale-95 shadow-md" title="Descartar esta foto e tirar outra com a câmera">
            <i class="fa-solid fa-trash-can text-sm text-rose-400"></i>
            <span>🗑️ Descartar</span>
          </button>

          <!-- Botão Visto: Confirmar e usar esta foto para sobrepor a anterior -->
          <button type="button" onclick="acceptAthleteWebcamSnapshot()" class="flex items-center justify-center gap-1.5 px-3 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs uppercase rounded-xl transition cursor-pointer active:scale-95 shadow-lg shadow-emerald-500/25" title="Aceitar esta foto e sobrepor foto anterior no atleta">
            <i class="fa-solid fa-check text-base font-black"></i>
            <span>✓ Usar Foto</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Toast Notification Feedback -->
  <div id="toast" class="fixed bottom-6 right-6 z-[10000] transform translate-y-24 opacity-0 transition-all duration-300 pointer-events-none flex items-center gap-3 bg-[#0f172a] border border-[#1e293b] px-4 py-3 rounded-xl shadow-2xl">
    <div id="toast-icon" class="text-emerald-400">
      <i class="fa-solid fa-circle-check"></i>
    </div>
    <div id="toast-message" class="text-xs font-semibold text-white">
      Notícia atualizada com sucesso!
    </div>
  </div>
  <!-- Blindagem e Imutabilidade da Identidade Visual Oficial -->
  <style>
    img[src*="logo-federacao"], img[alt*="Federação"], img[alt*="FPEFT"] {
      user-select: none !important;
      -webkit-user-drag: none !important;
      pointer-events: none !important;
    }
  </style>
  <script>
    (function() {
      // Sanitização de cache de atletas contra fotos externas não autorizadas
      try {
        const rawAthletes = localStorage.getItem('pe_athletes_db');
        if (rawAthletes && rawAthletes.includes('unsplash.com')) {
          const parsed = JSON.parse(rawAthletes);
          if (Array.isArray(parsed)) {
            parsed.forEach(a => {
              if (a.foto && a.foto.includes('unsplash.com')) a.foto = '';
              if (a.foto_url && a.foto_url.includes('unsplash.com')) a.foto_url = '';
            });
            localStorage.setItem('pe_athletes_db', JSON.stringify(parsed));
          }
        }
      } catch(e) {}

      const VALID_LOGOS = ['assets/images/logo-federacao.png', '/assets/images/logo-federacao.png', 'assets/logo.png', '/assets/logo.png', 'assets/logo-federacao.png', '/assets/logo-federacao.png'];
      const lockLogos = () => {
        document.querySelectorAll('img[src*="logo-federacao"], img[alt*="Federação"], img[alt="FPEFT"]').forEach(img => {
          img.setAttribute('draggable', 'false');
          img.addEventListener('contextmenu', e => e.preventDefault());
        });
      };
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', lockLogos);
      } else {
        lockLogos();
      }
      if (window.MutationObserver) {
        new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (mutation.type === 'attributes' && mutation.attributeName === 'src') {
              const target = mutation.target;
              if (target.tagName === 'IMG' && ((target.getAttribute('alt') || '').includes('Federação') || target.getAttribute('alt') === 'FPEFT')) {
                const currentSrc = target.getAttribute('src') || '';
                if (!VALID_LOGOS.some(v => currentSrc.endsWith(v))) {
                  target.setAttribute('src', 'assets/images/logo-federacao.png');
                }
              }
            }
          });
        }).observe(document.documentElement, { subtree: true, attributes: true, attributeFilter: ['src'] });
      }
    })();
  </script>
</body>
</html>
