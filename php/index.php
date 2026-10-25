<!DOCTYPE html>
<html lang="pt-BR" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Federação Pernambucana de FutMesa & Foot Table | Portal Oficial</title>
  <meta name="title" content="Federação Pernambucana de FutMesa & Foot Table | Portal Oficial" />
  <meta name="description" content="Portal oficial de homologação de eventos, notícias dos circuitos estaduais e validação da carteira digital dos atletas federados de Pernambuco." />
  <link rel="icon" type="image/png" href="assets/images/logo-federacao.png" />

  <!-- Open Graph / WhatsApp / Facebook / Telegram -->
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://fpeft.vercel.app/" />
  <meta property="og:title" content="Federação Pernambucana de FutMesa & Foot Table | Portal Oficial" />
  <meta property="og:description" content="Portal oficial de homologação de eventos, notícias dos circuitos estaduais e validação da carteira digital dos atletas federados de Pernambuco." />
  <meta property="og:image" content="https://fpeft.vercel.app/assets/images/preview-site.png" />
  <meta property="og:image:secure_url" content="https://fpeft.vercel.app/assets/images/preview-site.png" />
  <meta property="og:image:type" content="image/png" />
  <meta property="og:image:alt" content="Federação Pernambucana de Foot Table" />

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:url" content="https://fpeft.vercel.app/" />
  <meta name="twitter:title" content="Federação Pernambucana de FutMesa & Foot Table | Portal Oficial" />
  <meta name="twitter:description" content="Portal oficial de homologação de eventos, notícias dos circuitos estaduais e validação da carteira digital dos atletas federados de Pernambuco." />
  <meta name="twitter:image" content="https://fpeft.vercel.app/assets/images/preview-site.png" />
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800;900&family=Oswald:wght@500;600;700&family=JetBrains+Mono:wght@600;700&display=swap" rel="stylesheet">
  
  <!-- FontAwesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- html2canvas for instant HD PNG badge export -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
  <!-- qrcode-generator for generating verified QR codes -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcode-generator/1.4.4/qrcode.min.js"></script>
  <!-- Supabase JS Client -->
  <script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            pe: {
              blue: '#0044cc',
              darkblue: '#06173a',
              gold: '#f5b800',
              goldHover: '#e0a700',
              red: '#d32f2f',
              green: '#00a859',
              dark: '#080b12',
              card: '#0f1422',
              cardBorder: '#1c253b',
              accent: '#182238'
            }
          },
          fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
            oswald: ['Oswald', 'sans-serif'],
            mono: ['JetBrains Mono', 'monospace']
          }
        }
      }
    }
  </script>

  <style>
    /* Prevenção de Overflow Horizontal no Mobile */
    html, body {
      max-width: 100%;
      overflow-x: hidden;
      position: relative;
    }

    /* Custom Scrollbar */
    ::-webkit-scrollbar {
      width: 7px;
      height: 7px;
    }
    ::-webkit-scrollbar-track {
      background: #080b12;
    }
    ::-webkit-scrollbar-thumb {
      background: #1e2840;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #f5b800;
    }

    /* Pernambuco Tricolor Header Line */
    .pe-stripe-bar {
      background: linear-gradient(90deg, #0044cc 0%, #0044cc 40%, #f5b800 40%, #f5b800 70%, #d32f2f 70%, #d32f2f 100%);
    }

    /* Print settings for high resolution credentials */
    @media print {
      body * {
        visibility: hidden;
      }
      #athleteCredentialCard, #athleteCredentialCard * {
        visibility: visible;
        -webkit-print-color-adjust: exact !important;
        print-color-adjust: exact !important;
      }
      #athleteCredentialCard {
        position: fixed;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 85.6mm !important;
        height: 53.98mm !important;
        max-width: none !important;
        margin: 0 !important;
        box-shadow: none !important;
        border: none !important;
      }
    }

    /* Rótulos Superiores e Tipografia das Informações da Carteira CR80 */
    .field-top-label {
      position: absolute;
      bottom: calc(100% + 2px);
      font-size: clamp(6px, 1.25vw, 9px);
      font-weight: 800;
      color: #ffffff;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      pointer-events: none;
      white-space: nowrap;
      font-family: 'Montserrat', sans-serif;
      text-shadow: 0 1px 2px rgba(0,0,0,0.95);
      line-height: 1;
    }
    .field-top-label.label-align-center,
    .field-top-label.label-center {
      left: 50%;
      right: auto;
      transform: translateX(-50%);
    }
    .field-top-label.label-align-left,
    .field-top-label.label-left {
      left: 12px;
      right: auto;
      transform: none;
    }
    .field-top-label.label-align-right,
    .field-top-label.label-right {
      left: auto;
      right: 12px;
      transform: none;
    }
  </style>
</head>
<body class="bg-pe-dark text-slate-100 min-h-screen flex flex-col font-sans selection:bg-pe-gold selection:text-pe-dark overflow-x-hidden max-w-full">

  <!-- Header Oficial com Emblema de Pernambuco (100% Público, sem botões de admin) -->
  <header class="bg-pe-dark/95 backdrop-blur border-b border-pe-cardBorder sticky top-0 z-40">
    <div class="pe-stripe-bar h-1 w-full absolute top-0 left-0"></div>
    <div class="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 py-2.5 sm:py-3.5 flex items-center justify-between gap-2">
      
      <!-- Brand + Logo Oficial da Federação -->
      <a href="#home" class="flex items-center gap-2 sm:gap-3 group min-w-0 flex-1 sm:flex-initial">
        <div class="rounded-full bg-pe-darkblue border-2 border-pe-gold shadow-[0_0_15px_rgba(245,184,0,0.35)] flex items-center justify-center p-0.5 overflow-hidden group-hover:scale-105 transition shrink-0 w-9 h-9 sm:w-11 sm:h-11 min-w-[36px] min-h-[36px]">
          <img src="assets/images/logo-federacao.png" alt="Federação Pernambucana Foot Table" class="w-full h-full object-contain rounded-full block select-none pointer-events-none" draggable="false" style="max-width: 100%; max-height: 100%;" onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='/assets/images/logo-federacao.png';}else if(this.dataset.retry==1){this.dataset.retry=2;this.src='assets/logo.png';}" />
        </div>
        <div class="flex flex-col justify-center min-w-0">
          <span class="font-oswald text-base sm:text-xl uppercase font-bold tracking-wider text-white flex items-center gap-1.5 leading-none mb-0.5 sm:mb-1">
            Pernambuco <span class="text-pe-gold">FutMesa</span>
          </span>
          <span class="block text-[8.5px] sm:text-[10px] text-slate-400 font-bold uppercase tracking-normal sm:tracking-widest leading-none truncate max-w-[190px] sm:max-w-none">
            Federação Pernambucana de Foot Table
          </span>
        </div>
      </a>

      <!-- Navegação Pública Limpa -->
      <nav class="hidden md:flex items-center gap-6">
        <a href="#home" class="text-xs uppercase font-bold text-slate-300 hover:text-pe-gold transition tracking-wider">Início</a>
        <a href="noticias.html" class="text-xs uppercase font-bold text-slate-300 hover:text-pe-gold transition tracking-wider">Notícias & Torneios</a>
        <a href="#galeria" class="text-xs uppercase font-bold text-slate-300 hover:text-pe-gold transition tracking-wider">Fotos & Arenas</a>
        <a href="#regulamento" class="text-xs uppercase font-bold text-slate-300 hover:text-pe-gold transition tracking-wider">Regulamento</a>
      </nav>

      <!-- Botão Menu Mobile & Tablet -->
      <button type="button" id="btnTogglePublicMobileMenu" onclick="togglePublicMobileMenu()" class="md:hidden p-1.5 sm:p-2 px-2.5 sm:px-3 rounded-xl bg-pe-card border border-pe-cardBorder text-pe-gold hover:text-white transition flex items-center justify-center cursor-pointer shadow min-h-[36px] sm:min-h-[40px] gap-1.5 shrink-0" aria-label="Abrir Menu">
        <i id="publicMobileMenuIcon" class="fa-solid fa-bars text-sm"></i>
        <span class="text-xs uppercase font-bold tracking-wider">Menu</span>
      </button>
    </div>

    <!-- Gaveta de Navegação Dropdown Mobile -->
    <div id="publicMobileMenuDrawer" class="hidden md:hidden border-t border-pe-cardBorder/80 bg-pe-dark/98 px-5 py-4 space-y-3 backdrop-blur-md shadow-2xl">
      <a href="#home" onclick="togglePublicMobileMenu()" class="block py-2 text-xs uppercase font-bold text-slate-200 hover:text-pe-gold tracking-wider flex items-center gap-2">
        <span>🏠</span> Início
      </a>
      <a href="noticias.html" onclick="togglePublicMobileMenu()" class="block py-2 text-xs uppercase font-bold text-slate-200 hover:text-pe-gold tracking-wider flex items-center gap-2">
        <span>📰</span> Notícias & Torneios
      </a>
      <a href="#galeria" onclick="togglePublicMobileMenu()" class="block py-2 text-xs uppercase font-bold text-slate-200 hover:text-pe-gold tracking-wider flex items-center gap-2">
        <span>📸</span> Fotos & Arenas
      </a>
      <a href="#regulamento" onclick="togglePublicMobileMenu()" class="block py-2 text-xs uppercase font-bold text-slate-200 hover:text-pe-gold tracking-wider flex items-center gap-2">
        <span>⚖️</span> Regulamento
      </a>
      <a href="#consulta" onclick="togglePublicMobileMenu()" class="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-pe-gold hover:bg-pe-goldHover text-pe-dark text-xs uppercase font-extrabold tracking-wider shadow cursor-pointer">
        <span>🔍</span> Consultar Carteira (6 Dígitos)
      </a>
    </div>
  </header>

  <!-- Hero Section Oficial -->
  <section id="home" class="relative py-10 sm:py-20 px-3 sm:px-4 overflow-hidden bg-radial-gradient text-center">
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(0,68,204,0.32),transparent_70%)] pointer-events-none"></div>
    
    <div class="relative max-w-4xl mx-auto">
      <div class="inline-flex items-center gap-1.5 border border-pe-gold/40 bg-pe-gold/10 px-3 sm:px-4 py-1.5 rounded-full text-pe-gold text-[10px] sm:text-xs font-bold uppercase tracking-normal sm:tracking-widest mb-5 sm:mb-6 shadow-sm max-w-full text-center leading-normal break-words">
        <span>☀️</span> Federação Oficial de Foot Table e Futebol de Mesa de PE
      </div>

      <h1 class="font-oswald text-3xl sm:text-5xl md:text-6xl uppercase font-black text-white leading-tight mb-3 sm:mb-4 tracking-normal sm:tracking-wide break-words">
        Junte-se ao Movimento.<br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-pe-gold via-yellow-200 to-pe-gold">
          Jogue Foot Table PE.
        </span>
      </h1>

      <p class="text-slate-400 text-xs sm:text-base max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed px-1 sm:px-0">
        Portal oficial de homologação de eventos, notícias dos circuitos estaduais e validação da carteira digital dos atletas federados de Pernambuco.
      </p>

      <div class="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 w-full max-w-xs sm:max-w-none mx-auto">
        <a href="#consulta" class="w-full sm:w-auto bg-pe-gold hover:bg-pe-goldHover text-pe-dark font-extrabold text-xs uppercase tracking-wider px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl shadow-[0_0_20px_rgba(245,184,0,0.35)] transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2">
          <span>🔍</span> Consultar Carteira (6 Dígitos)
        </a>
        <a href="noticias.html" class="w-full sm:w-auto bg-pe-card border border-pe-cardBorder hover:border-pe-gold/60 text-slate-300 font-bold text-xs uppercase tracking-wider px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl transition text-center justify-center flex items-center">
          Ver Notícias & Torneios
        </a>
      </div>
    </div>
  </section>

  <!-- Seção de Consulta Pública (Exclusiva pelos 6 Dígitos) -->
  <section id="consulta" class="py-8 sm:py-12 px-3 sm:px-4 max-w-5xl mx-auto w-full">
    <div class="bg-pe-card border border-pe-cardBorder rounded-2xl p-4 sm:p-8 relative shadow-2xl overflow-hidden">
      <div class="pe-stripe-bar h-1.5 w-full absolute top-0 left-0"></div>

      <div class="max-w-2xl">
        <div class="flex items-center gap-2 text-pe-gold text-xs font-bold uppercase tracking-wider mb-2">
          <span>🔒</span> Portal da Transparência & Registros
        </div>
        <h2 class="font-oswald text-xl sm:text-3xl uppercase font-bold text-white mb-2">
          Buscar Atleta & Registro Oficial <span class="text-pe-gold">(6 Dígitos)</span>
        </h2>
        <p class="text-slate-400 text-xs sm:text-sm leading-relaxed mb-6">
          O atleta pode consultar sua situação cadastral e exibir sua credencial digital digitando o <strong class="text-pe-gold">código de 6 dígitos</strong> fornecido no ato da filiação federativa.
        </p>
      </div>

      <!-- Barra de Busca -->
      <div class="flex flex-col sm:flex-row gap-3">
        <div class="relative flex-1">
          <span class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 font-mono font-bold text-lg">#</span>
          <input 
            type="text" 
            id="publicCodeSearchInput" 
            placeholder="Digite o código (ex: 742918)..." 
            maxlength="6" 
            inputmode="numeric" 
            class="w-full bg-[#080b12] border border-pe-cardBorder focus:border-pe-gold rounded-xl pl-10 pr-4 py-3.5 text-pe-gold font-mono font-bold tracking-widest text-base sm:text-lg outline-none placeholder:text-slate-600 placeholder:font-sans placeholder:tracking-normal transition"
          />
        </div>
        <button id="btnSearchPublicCode" 
                class="bg-pe-blue hover:bg-blue-600 text-white font-extrabold text-xs uppercase tracking-wider px-6 sm:px-8 py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2 w-full sm:w-auto">
          <span>🔎</span> Consultar Atleta
        </button>
      </div>

      <!-- Mensagens de Feedback -->
      <div id="publicSearchFeedback" class="mt-4 hidden"></div>

      <!-- Render da Carteirinha Oficial Encontrada -->
      <div id="publicBadgeResultArea" class="mt-8 pt-8 border-t border-pe-cardBorder/70 hidden">
        
        <!-- Painel Oficial de Validação e Autenticidade Digital do Federado (QR Code Check) -->
        <div id="qrVerificationSummaryCard" class="max-w-[560px] mx-auto mb-6 bg-[#080d1a] border-2 border-pe-gold/60 rounded-2xl p-4 sm:p-6 relative shadow-[0_15px_35px_rgba(0,0,0,0.8)] overflow-hidden">
          <div class="pe-stripe-bar h-1.5 w-full absolute top-0 left-0"></div>
          
          <div class="flex items-center justify-between border-b border-pe-cardBorder/80 pb-3 mb-3.5 gap-2">
            <div class="flex items-center gap-2.5 sm:gap-3 min-w-0">
              <div class="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-pe-darkblue border border-pe-gold flex items-center justify-center p-0.5 shrink-0 shadow-md overflow-hidden">
                <img src="assets/images/logo-federacao.png" alt="Logo Federação" class="w-full h-full object-contain rounded-full select-none pointer-events-none" draggable="false" onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='/assets/images/logo-federacao.png';}else if(this.dataset.retry==1){this.dataset.retry=2;this.src='assets/logo.png';}">
              </div>
              <div class="min-w-0">
                <span class="text-[9px] sm:text-[10px] font-bold text-pe-gold uppercase tracking-wider sm:tracking-widest block leading-tight truncate">Validação e Autenticidade Digital</span>
                <h3 class="font-oswald text-xs sm:text-base uppercase font-bold text-white leading-tight truncate">Federação Pernambucana de Foot Table</h3>
              </div>
            </div>
            <div id="qrStatusBadgeMain" class="px-2.5 sm:px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 bg-emerald-950/90 border border-emerald-500 text-emerald-300 shadow-md shrink-0">
              <span class="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span id="qrStatusBadgeText">REGULAR</span>
            </div>
          </div>

          <!-- Informações de Validação Completa -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 text-xs mb-3.5">
            <div class="bg-[#040813] border border-pe-cardBorder/80 p-2.5 sm:p-3 rounded-xl min-w-0 flex items-center gap-3">
              <div class="w-10 h-12 rounded-lg overflow-hidden border border-pe-gold/60 shrink-0 bg-[#0c1424] shadow flex items-center justify-center cursor-pointer hover:border-pe-gold hover:scale-105 transition" onclick="abrirFotoTamanhoRealPublica()" title="Clique para ver a foto em tamanho real original">
                <img id="qrAthletePhotoThumb" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E" alt="Foto Atleta" class="w-full h-full object-cover" onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%2364748b\'%3E%3Cpath d=\'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\'/%3E%3C/svg%3E'" />
              </div>
              <div class="min-w-0 flex-1">
                <span class="text-[9px] uppercase font-bold text-slate-400 tracking-wider block mb-0.5">Atleta Federado</span>
                <strong class="text-white font-oswald text-xs sm:text-sm uppercase block truncate" id="qrAthleteFullName">---</strong>
                <button type="button" onclick="abrirFotoTamanhoRealPublica()" class="mt-0.5 text-[9px] text-pe-gold hover:text-white font-mono flex items-center gap-1 cursor-pointer">
                  <i class="fa-solid fa-expand text-[8px]"></i> <span>Ver Foto Tamanho Real</span>
                </button>
              </div>
            </div>

            <div class="bg-[#040813] border border-pe-cardBorder/80 p-2.5 sm:p-3 rounded-xl flex items-center justify-between gap-2 min-w-0">
              <div class="min-w-0">
                <span class="text-[9px] uppercase font-bold text-slate-400 tracking-wider block mb-0.5">Nº Federado / ID</span>
                <span class="text-pe-gold font-mono font-bold text-xs sm:text-sm tracking-wider" id="qrFederatedNumText">#000000</span>
              </div>
              <div class="text-right shrink-0">
                <span class="text-[9px] uppercase font-bold text-slate-400 tracking-wider block mb-0.5">CPF</span>
                <span class="text-slate-300 font-mono text-xs whitespace-nowrap" id="qrCpfText">***.***.***-**</span>
              </div>
            </div>

            <div class="bg-[#040813] border border-pe-cardBorder/80 p-2.5 sm:p-3 rounded-xl flex items-center justify-between gap-2 min-w-0">
              <div class="min-w-0">
                <span class="text-[9px] uppercase font-bold text-slate-400 tracking-wider block mb-0.5">Modalidade</span>
                <span class="text-slate-200 font-bold uppercase text-[10px] sm:text-[11px] truncate block" id="qrModalityText">SOLO (INDIVIDUAL)</span>
              </div>
              <div class="text-right shrink-0">
                <span class="text-[9px] uppercase font-bold text-slate-400 tracking-wider block mb-0.5">Categoria</span>
                <span class="text-amber-300 font-bold uppercase text-[10px] sm:text-[11px] truncate block" id="qrCategoryText">ASPIRANTE</span>
              </div>
            </div>

            <div class="bg-[#040813] border border-pe-cardBorder/80 p-2.5 sm:p-3 rounded-xl flex items-center justify-between gap-2 min-w-0">
              <div class="min-w-0">
                <span class="text-[9px] uppercase font-bold text-slate-400 tracking-wider block mb-0.5">Município</span>
                <span class="text-slate-200 font-semibold text-[11px] sm:text-xs truncate block" id="qrCityText">---</span>
              </div>
              <div class="text-right shrink-0">
                <span class="text-[9px] uppercase font-bold text-slate-400 tracking-wider block mb-0.5">Validade Oficial</span>
                <span class="text-emerald-400 font-mono font-bold text-[11px] sm:text-xs whitespace-nowrap" id="qrValidityText">31/12/2026</span>
              </div>
            </div>
          </div>

          <!-- Caixa Informativa de Situação Cadastral -->
          <div id="qrSituationBox" class="p-3 sm:p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-2.5 sm:gap-3">
            <span class="text-lg sm:text-xl shrink-0" id="qrSituationIcon">✅</span>
            <div class="flex-1 text-[10.5px] sm:text-[11px] leading-tight min-w-0">
              <strong id="qrSituationTitle" class="block font-bold text-white text-xs mb-0.5 truncate">REGISTRO OFICIAL HOMOLOGADO E REGULAR</strong>
              <span id="qrSituationDesc" class="text-slate-300 text-[10px] sm:text-[11px] leading-snug block">Este atleta está devidamente ativo, registrado e homologado perante a Federação Pernambucana de Foot Table.</span>
            </div>
          </div>

          <!-- Rodapé do Selo Digital com Hash & Timestamp -->
          <div class="mt-3 pt-2.5 border-t border-pe-cardBorder/60 flex flex-wrap items-center justify-between gap-2 text-[9px] sm:text-[10px] text-slate-400 font-mono">
            <div class="flex items-center gap-1.5">
              <span>🛡️ Autenticado digitalmente em:</span>
              <span class="text-slate-200 font-bold" id="qrTimestampText">--/--/---- --:--:--</span>
            </div>
            <div class="text-pe-gold font-bold flex items-center gap-1" id="qrVerificationHash">
              <span>🔒 HASH:</span> <span id="qrHashVal">FPEFT-000000-OK</span>
            </div>
          </div>
        </div>

        <div class="text-center text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3 flex items-center justify-center gap-2">
          <span>💳</span> Carteira Digital Oficial do Atleta
        </div>

        <!-- Credencial Oficial no Padrão FPEFT CR80 -->
        <div id="athleteCredentialCard" class="max-w-[620px] w-full mx-auto aspect-[1050/662] rounded-2xl relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-2 border-pe-gold/60 select-none bg-[#030919] bg-cover bg-center" style="background-image: url('assets/Carteira_Atleta_HD.png');">
          
          <!-- Status Oficial no Canto Superior Direito da Carteira (Padrão Studio) -->
          <div id="cardBadgeStatusContainer" class="absolute right-[2.5%] top-[3.5%] z-20 flex items-center gap-1.5 select-none pointer-events-none">
            <span id="cardBadgeStatusDot" class="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400"></span>
            <span id="cardBadgeStatus" class="font-extrabold text-[8px] sm:text-[10px] uppercase tracking-wider text-emerald-400 font-mono">REGULAR</span>
          </div>

          <!-- Foto 3x4 do Atleta -->
          <div id="cardBadgePhotoBox" class="absolute left-[7.62%] top-[47.13%] w-[18.76%] h-[34.89%] rounded-xl sm:rounded-2xl border-2 sm:border-[3px] border-white overflow-hidden bg-[#09152e] shadow-md flex items-center justify-center cursor-pointer group" onclick="abrirFotoTamanhoRealPublica()" title="Clique para ver a foto em tamanho real original">
            <img id="cardBadgePhoto" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E" alt="Foto Atleta" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" loading="lazy" decoding="async" onerror="this.onerror=null;this.src='data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 24 24\' fill=\'%2364748b\'%3E%3Cpath d=\'M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z\'/%3E%3C/svg%3E'" />
            <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center text-white text-[8px] font-bold pointer-events-none">
              <i class="fa-solid fa-expand text-xs text-pe-gold"></i>
            </div>
          </div>

          <!-- Nº do Federado -->
          <div id="cardBadgeCodeBox" class="absolute left-[7.62%] top-[84.59%] w-[18.00%] h-[4.83%] bg-white rounded-full shadow flex items-center justify-center px-1">
            <span class="field-top-label label-align-center select-none pointer-events-none">Nº DO FEDERADO</span>
            <div class="w-full h-full flex items-center justify-center font-extrabold font-mono text-[8px] sm:text-[11px] text-[#00204a] truncate tracking-wider px-1 leading-none" id="cardBadgeCode">
              ID: #548608
            </div>
          </div>

          <!-- Nome do Atleta (Linha 1) -->
          <div id="cardBadgeNameBox" class="absolute left-[27.71%] top-[48.94%] w-[65.90%] h-[5.74%] bg-white rounded-full shadow flex items-center justify-start px-2.5 sm:px-3">
            <span class="field-top-label label-align-left select-none pointer-events-none">NOME DO ATLETA</span>
            <div class="w-full h-full flex items-center justify-start font-black font-oswald text-[10px] sm:text-[14px] uppercase tracking-wide truncate text-[#00204a] leading-none" id="cardBadgeName">
              GABRIEL PEREIRA ALVES
            </div>
          </div>

          <!-- Linha 2: CPF | Ano Nasc. | Município -->
          <div id="cardBadgeCPFBox" class="absolute left-[27.71%] top-[58.01%] w-[20.10%] h-[5.14%] bg-white rounded-full shadow flex items-center justify-center px-1">
            <span class="field-top-label label-align-center select-none pointer-events-none">CPF</span>
            <div class="w-full h-full flex items-center justify-center font-extrabold font-mono text-[8px] sm:text-[11px] text-[#00204a] truncate px-1 leading-none" id="cardBadgeCPF">
              714.***.***-**
            </div>
          </div>

          <div id="cardBadgeBirthBox" class="absolute left-[49.33%] top-[58.01%] w-[19.62%] h-[5.14%] bg-white rounded-full shadow flex items-center justify-center px-1">
            <span class="field-top-label label-align-center select-none pointer-events-none">Ano Nasc.</span>
            <div class="w-full h-full flex items-center justify-center font-extrabold font-mono text-[8px] sm:text-[11px] text-[#00204a] truncate px-1 leading-none" id="cardBadgeBirth">
              2003
            </div>
          </div>

          <div id="cardBadgeCityBox" class="absolute left-[71.05%] top-[58.01%] w-[22.10%] h-[5.14%] bg-white rounded-full shadow flex items-center justify-center px-1">
            <span class="field-top-label label-align-center select-none pointer-events-none">MUNICÍPIO</span>
            <div class="w-full h-full flex items-center justify-center font-extrabold text-[8px] sm:text-[11px] text-[#00204a] uppercase truncate px-1 leading-none" id="cardBadgeCity">
              RECIFE - PE
            </div>
          </div>

          <!-- Linha 3: Telefone/WhatsApp | Modalidade | Categoria -->
          <div id="cardBadgePhoneBox" class="absolute left-[28.19%] top-[67.07%] w-[15.05%] h-[5.14%] bg-white rounded-full shadow flex items-center justify-center px-0.5">
            <span class="field-top-label label-align-center select-none pointer-events-none">TELEFONE / WHATSAPP</span>
            <div class="w-full h-full flex items-center justify-center font-extrabold font-mono text-[7px] sm:text-[9.5px] text-[#00204a] truncate px-0.5 leading-none" id="cardBadgePhone">
              (XX) XXXXX-XXXX
            </div>
          </div>

          <div id="cardBadgeModalityBox" class="absolute left-[44.29%] top-[67.07%] w-[17.33%] h-[5.14%] bg-white rounded-full shadow flex items-center justify-center px-0.5">
            <span class="field-top-label label-align-center select-none pointer-events-none">MODALIDADE</span>
            <div class="w-full h-full flex items-center justify-center font-extrabold text-[7px] sm:text-[9.5px] text-[#00204a] uppercase truncate px-0.5 leading-none" id="cardBadgeModality">
              SOLO (INDIVIDUAL)
            </div>
          </div>

          <div id="cardBadgeCategoryBox" class="absolute left-[63.14%] top-[67.07%] w-[16.86%] h-[5.14%] bg-white rounded-full shadow flex items-center justify-center px-0.5">
            <span class="field-top-label label-align-center select-none pointer-events-none">CATEGORIA</span>
            <div class="w-full h-full flex items-center justify-center font-extrabold text-[7px] sm:text-[9.5px] text-[#00204a] uppercase truncate px-0.5 leading-none" id="cardBadgeCategory">
              AMADOR
            </div>
          </div>

          <!-- QR Code (Direita) -->
          <div id="cardBadgeQrContainer" class="absolute left-[80.86%] top-[67.07%] w-[12.95%] h-[20.54%] bg-white rounded-lg sm:rounded-xl p-1 shadow-md flex items-center justify-center overflow-hidden">
            <div id="cardBadgeQrBox" class="w-full h-full flex items-center justify-center">
              <i class="fa-solid fa-qrcode text-black text-xl sm:text-2xl"></i>
            </div>
          </div>

          <!-- Validade (Abaixo do QR Code) -->
          <div id="cardBadgeValidityBox" class="absolute left-[81.71%] top-[89.73%] w-[11.71%] h-[4.68%] bg-white rounded-full shadow flex items-center justify-center px-0.5">
            <span class="field-top-label label-align-center select-none pointer-events-none">VALIDADE</span>
            <div class="w-full h-full flex items-center justify-center font-extrabold font-mono text-[7.5px] sm:text-[10px] text-[#00204a] truncate px-0.5 leading-none" id="cardBadgeValidity">
              12/2026
            </div>
          </div>

          <!-- Assinatura da Diretoria FPEFT (Centro Rodapé) -->
          <div id="cardBadgeSignatureBox" class="absolute left-[32.95%] top-[88.82%] w-[37.62%] h-[4.23%] text-center">
            <div class="w-full h-[1px] sm:h-[1.5px] bg-white/90 mx-auto mb-0.5"></div>
            <span class="text-[6px] sm:text-[8.5px] font-bold text-white uppercase tracking-wider block">
              ASSINATURA DA DIRETORIA FPEFT
            </span>
          </div>

          <div id="cardCustomTextsContainer" class="hidden"></div>
        </div>

        <!-- Aviso de Homologação Pendente (Dinâmico) -->
        <div id="cardPendingWarning" class="hidden max-w-[560px] mx-auto mt-4 p-4 rounded-xl bg-amber-950/80 border border-amber-500/50 text-amber-200 text-xs shadow-lg space-y-1.5">
          <div class="flex items-center gap-2 font-extrabold text-amber-400">
            <span class="text-base">⏳</span> <span>HOMOLOGAÇÃO PENDENTE</span>
          </div>
          <p class="text-slate-300 text-[11px] leading-relaxed">
            Este cadastro foi registrado e está aguardando a homologação oficial da Federação. <strong>A impressão e o download em PDF/PNG da carteira digital estão temporariamente bloqueados</strong> até a conclusão da validação.
          </p>
        </div>

        <!-- Ações de Extração da Carteira -->
        <div class="max-w-[560px] mx-auto mt-3.5 sm:mt-4 grid grid-cols-2 gap-2.5 sm:gap-3">
          <button id="btnDownloadCardPng" class="bg-pe-gold hover:bg-pe-goldHover text-pe-dark font-extrabold text-[11px] sm:text-xs uppercase tracking-wider py-2.5 sm:py-3 rounded-xl transition shadow flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer">
            <span>💾</span> Baixar PNG
          </button>
          <button id="btnPrintCard" class="bg-pe-accent hover:bg-slate-700 text-white font-bold text-[11px] sm:text-xs uppercase tracking-wider py-2.5 sm:py-3 rounded-xl transition flex items-center justify-center gap-1.5 sm:gap-2 cursor-pointer">
            <span>🖨️</span> Imprimir / PDF
          </button>
        </div>
        <div id="cardDownloadLockNotice" class="max-w-[560px] mx-auto mt-2 text-center px-1">
          <span class="text-[10px] sm:text-[11px] text-slate-400 inline-flex items-center justify-center gap-1.5 font-medium bg-dark-900/60 px-3 py-1 rounded-full border border-white/5 max-w-full truncate">
            <i class="fa-solid fa-lock text-pe-gold text-[10px]"></i>
            <span class="truncate">Download protegido por autenticação de CPF (LGPD)</span>
          </span>
        </div>
      </div>

    </div>
  </section>

  <!-- Seção de Notícias Dinâmicas -->
  <section id="noticias" class="py-12 px-4 max-w-5xl mx-auto w-full flex-1">
    <div class="mb-6">
      <span class="text-pe-gold text-xs font-bold uppercase tracking-wider block mb-1">
        <i class="fa-solid fa-bullhorn text-[11px] mr-1"></i> Boletim Informativo Oficial
      </span>
      <h2 class="font-oswald text-3xl sm:text-4xl uppercase font-bold text-white">Notícias &amp; Torneios</h2>
      <p class="text-xs text-slate-400 mt-1 max-w-xl">
        Resultados oficiais, cobertura dos campeonatos, notas da federação e regulamentos homologados.
      </p>
    </div>

    <!-- Container de Notícias (Atualizado em tempo real caso venha de um CMS externo) -->
    <div id="publicNewsContainer" class="space-y-4">
      <!-- Inserido dinamicamente via JS -->
    </div>
  </section>

  <!-- Seção de Galeria Oficial de Fotos & Arenas -->
  <section id="galeria" class="py-12 px-4 max-w-5xl mx-auto w-full">
    <div class="flex items-center justify-between mb-8">
      <div>
        <span class="text-pe-gold text-xs font-bold uppercase tracking-wider block">Acervo Fotográfico</span>
        <h2 class="font-oswald text-3xl uppercase font-bold text-white">Galeria de Arenas & Foot Table</h2>
      </div>
      <div class="text-xs text-slate-400 font-mono flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-pe-gold"></span>
        Imagens Oficiais
      </div>
    </div>

    <!-- Grid de Imagens Oficiais Dinâmico -->
    <div id="publicGalleryContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
      <!-- As fotos e textos oficiais são gerenciados pelo painel administrativo e renderizados dinamicamente -->
      <!-- Fallback estático inicial caso JS ainda esteja carregando -->
      <div class="group relative rounded-2xl overflow-hidden border border-pe-cardBorder bg-pe-card shadow-lg hover:border-pe-gold/60 transition">
        <div class="aspect-[4/3] w-full overflow-hidden bg-slate-900">
          <img src="assets/images/quadra 2.jpg" alt="Quadra Oficial Foot Table" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" decoding="async" onerror="this.src='assets/images/quadra 2.jpg'" />
        </div>
        <div class="p-4 bg-gradient-to-t from-pe-dark via-pe-card to-transparent">
          <span class="text-[10px] font-bold text-pe-gold uppercase tracking-wider block mb-1">Arena Homologada</span>
          <h4 class="font-oswald text-base uppercase font-bold text-white leading-tight">Estrutura de Quadra Oficial</h4>
          <p class="text-slate-400 text-xs mt-1">Espaço padronizado para circuitos da Federação Pernambucana.</p>
        </div>
      </div>
      <div class="group relative rounded-2xl overflow-hidden border border-pe-cardBorder bg-pe-card shadow-lg hover:border-pe-gold/60 transition">
        <div class="aspect-[4/3] w-full overflow-hidden bg-slate-900">
          <img src="assets/images/futmesa 2.jpg" alt="Mesa Oficial Foot Table" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" decoding="async" onerror="this.src='assets/images/futmesa 2.jpg'" />
        </div>
        <div class="p-4 bg-gradient-to-t from-pe-dark via-pe-card to-transparent">
          <span class="text-[10px] font-bold text-pe-gold uppercase tracking-wider block mb-1">Equipamento Chancelado</span>
          <h4 class="font-oswald text-base uppercase font-bold text-white leading-tight">Mesa Curva Oficial</h4>
          <p class="text-slate-400 text-xs mt-1">Dimensões regulamentares e curvatura para alta performance.</p>
        </div>
      </div>
      <div class="group relative rounded-2xl overflow-hidden border border-pe-cardBorder bg-pe-card shadow-lg hover:border-pe-gold/60 transition">
        <div class="aspect-[4/3] w-full overflow-hidden bg-slate-900">
          <img src="assets/images/fut 6 3.jpg" alt="Circuito Foot Table" class="w-full h-full object-cover group-hover:scale-105 transition duration-500" loading="lazy" decoding="async" onerror="this.src='assets/images/fut 6 3.jpg'" />
        </div>
        <div class="p-4 bg-gradient-to-t from-pe-dark via-pe-card to-transparent">
          <span class="text-[10px] font-bold text-pe-gold uppercase tracking-wider block mb-1">Competições Oficiais</span>
          <h4 class="font-oswald text-base uppercase font-bold text-white leading-tight">Etapa Pernambucana</h4>
          <p class="text-slate-400 text-xs mt-1">Disputas intensas entre os melhores atletas do estado.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Seção Informativa de Regulamento -->
  <section id="regulamento" class="py-10 px-4 max-w-5xl mx-auto w-full">
    <div class="bg-pe-card/70 border border-pe-cardBorder rounded-2xl p-6 sm:p-8">
      <div class="flex items-center gap-2 text-pe-gold text-xs font-bold uppercase tracking-wider mb-2">
        <span>📖</span> Diretrizes Oficiais
      </div>
      <h3 class="font-oswald text-xl uppercase font-bold text-white mb-3">Normas e Especificações Técnicas</h3>
      <p class="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
        As competições chanceladas pela Federação Pernambucana de Foot Table seguem as diretrizes técnicas internacionais de curvatura de mesa, dimensões do octógono de proteção e sistema de pontuação set a set em duplas e solos.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <div class="bg-[#080b12] p-3.5 rounded-xl border border-pe-cardBorder">
          <strong class="text-pe-gold block mb-1">Mesa Homologada</strong>
          <span class="text-slate-400">Superfície curva em acrílico/resina reforçada com altura central regulamentar.</span>
        </div>
        <div class="bg-[#080b12] p-3.5 rounded-xl border border-pe-cardBorder">
          <strong class="text-pe-gold block mb-1">Modalidade Solo</strong>
          <span class="text-slate-400">Máximo de 3 toques por jogada, sem toques consecutivos com as mãos ou braços.</span>
        </div>
        <div class="bg-[#080b12] p-3.5 rounded-xl border border-pe-cardBorder">
          <strong class="text-pe-gold block mb-1">Modalidade Duplas</strong>
          <span class="text-slate-400">Alternância obrigatória de toques entre os parceiros antes do envio à mesa oposta.</span>
        </div>
      </div>
    </div>
  </section>



  <!-- Rodapé Institucional com Links de Segurança, LGPD e Acesso -->
  <footer class="bg-[#05070c] border-t border-pe-cardBorder pt-12 pb-8 px-4 text-xs text-slate-400 mt-12">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-pe-cardBorder/70 text-left">
      <!-- Coluna 1: Federação -->
      <div class="space-y-3">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-full bg-pe-darkblue border border-pe-gold/40 flex items-center justify-center p-0.5 overflow-hidden shrink-0 shadow">
            <img src="assets/images/logo-federacao.png" alt="FPEFT" class="w-full h-full object-contain rounded-full select-none pointer-events-none" draggable="false" onerror="if(!this.dataset.retry){this.dataset.retry=1;this.src='/assets/images/logo-federacao.png';}else if(this.dataset.retry==1){this.dataset.retry=2;this.src='assets/logo.png';}" />
          </div>
          <span class="font-oswald text-sm font-bold uppercase text-white tracking-wider">
            Federação Pernambucana de Foot Table
          </span>
        </div>
        <p class="text-slate-400 text-xs leading-relaxed">
          Entidade oficial de administração e homologação de competições de FutMesa e Foot Table no Estado de Pernambuco. Compromisso rigoroso com ética, transparência e proteção integral dos atletas federados.
        </p>
        <div class="text-[11px] text-slate-500 font-mono">
          Recife / PE • Brasil • Temporada Oficial 2026
        </div>
      </div>

      <!-- Coluna 2: Segurança e Privacidade (LGPD) -->
      <div class="space-y-3">
        <h4 class="font-oswald text-xs uppercase font-bold text-pe-gold tracking-widest flex items-center gap-2">
          <i class="fa-solid fa-shield-halved"></i> Segurança & Proteção de Dados
        </h4>
        <ul class="space-y-2 text-xs">
          <li>
            <a href="seguranca.html" class="hover:text-pe-gold transition flex items-center gap-1.5">
              <i class="fa-solid fa-file-shield text-slate-500 text-[10px]"></i>
              Política de Segurança da Informação
            </a>
          </li>
          <li>
            <a href="seguranca.html#lgpd" class="hover:text-pe-gold transition flex items-center gap-1.5">
              <i class="fa-solid fa-user-shield text-slate-500 text-[10px]"></i>
              Termos de Privacidade e LGPD
            </a>
          </li>
          <li>
            <a href="seguranca.html#direitos" class="hover:text-pe-gold transition flex items-center gap-1.5">
              <i class="fa-solid fa-scale-balanced text-slate-500 text-[10px]"></i>
              Direitos do Titular (Art. 18 LGPD)
            </a>
          </li>
        </ul>
      </div>

      <!-- Coluna 3: Serviços & Acesso -->
      <div class="space-y-3">
        <h4 class="font-oswald text-xs uppercase font-bold text-pe-gold tracking-widest flex items-center gap-2">
          <i class="fa-solid fa-compass"></i> Navegação & Sistemas
        </h4>
        <ul class="space-y-2 text-xs">
          <li>
            <a href="#consulta" class="hover:text-pe-gold transition flex items-center gap-1.5">
              <i class="fa-solid fa-magnifying-glass text-slate-500 text-[10px]"></i>
              Validação Pública de Carteira Digital
            </a>
          </li>
          <li>
            <a href="noticias.html" class="hover:text-pe-gold transition flex items-center gap-1.5">
              <i class="fa-solid fa-newspaper text-slate-500 text-[10px]"></i>
              Notícias, Calendário e Torneios
            </a>
          </li>
          <li>
            <a href="#regulamento" class="hover:text-pe-gold transition flex items-center gap-1.5">
              <i class="fa-solid fa-book text-slate-500 text-[10px]"></i>
              Normas e Diretrizes Técnicas
            </a>
          </li>

        </ul>
      </div>
    </div>

    <!-- Linha Inferior com Copyright e Termos Clicáveis -->
    <div class="max-w-6xl mx-auto pt-6 flex flex-col gap-4">
      <!-- Barra Central de Botões e Termos Clicáveis para Análise Imediata -->
      <div class="bg-[#080d1a] border border-pe-cardBorder/90 rounded-xl p-3 sm:p-4 flex flex-col md:flex-row items-center justify-between gap-3 shadow-lg">
        <div class="flex items-center gap-2 text-center md:text-left">
          <span class="w-3 h-3 rounded-full bg-pe-gold animate-pulse"></span>
          <span class="font-bold text-white text-xs sm:text-sm">Termos Oficiais & Governança da Federação:</span>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-2">
          <a href="seguranca.html" target="_blank" class="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-[#0e1628] hover:bg-[#152038] border border-pe-cardBorder text-slate-300 hover:text-white font-bold text-xs transition shadow-sm">
            <i class="fa-solid fa-file-shield text-pe-gold text-xs"></i>
            <span>Política de Privacidade e LGPD</span>
          </a>
        </div>
      </div>

      <!-- Barra de Assinatura e Copyright Oficial -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-slate-500 text-xs pt-2">
        <div class="flex items-center gap-2">
          <span class="w-2.5 h-2.5 rounded-full bg-pe-gold"></span>
          <span class="font-medium text-slate-300">Federação Pernambucana de FutMesa & Foot Table</span>
        </div>
        <div class="flex items-center gap-3 text-[11px] text-slate-400">
          <span>© 2026 Todos os direitos reservados. Entidade estadual oficial de Foot Table em Pernambuco.</span>
        </div>
      </div>
    </div>
  </footer>

  <!-- Script de Comportamento e Sincronização em Tempo Real -->
  <script>
    /* =======================================================
       CONFIGURAÇÃO SUPABASE
       ======================================================= */
    // URL oficial do projeto Supabase
    const SUPABASE_PROJECT_URL = "https://qvnsahvdjhimlmtqrnif.supabase.co";
    const DEFAULT_SUPABASE_ANON_KEY = "sb_publishable_vvqh9vB0Dr0EqR9JGhy4kA_XnJ-9h0z";
    let SUPABASE_URL = localStorage.getItem('pe_supabase_url') || SUPABASE_PROJECT_URL;
    let SUPABASE_ANON_KEY = localStorage.getItem('pe_supabase_anon_key');
    if (!SUPABASE_ANON_KEY || SUPABASE_ANON_KEY.startsWith('http') || SUPABASE_ANON_KEY.length < 20) {
      SUPABASE_ANON_KEY = DEFAULT_SUPABASE_ANON_KEY;
      localStorage.setItem('pe_supabase_anon_key', SUPABASE_ANON_KEY);
    }
    let supabaseClient = null;

    // Configurações do Banco Reserva (Failover Automático)
    const DEFAULT_SUPABASE_SECONDARY_URL = "https://xvqsysfqbkfsogkwtbal.supabase.co";
    const DEFAULT_SUPABASE_SECONDARY_ANON_KEY = "sb_publishable_2T1UD0EYvVBlIqCvnX5VHw_K6mmAn3M";
    let SUPABASE_SECONDARY_URL = localStorage.getItem('pe_supabase_secondary_url') || DEFAULT_SUPABASE_SECONDARY_URL;
    let SUPABASE_SECONDARY_ANON_KEY = localStorage.getItem('pe_supabase_secondary_anon_key') || DEFAULT_SUPABASE_SECONDARY_ANON_KEY;
    let supabaseSecondaryClient = null;

    function safeSupabaseCall(promise, timeoutMs = 2500) {
      return Promise.race([
        promise,
        new Promise((_, reject) => setTimeout(() => reject(new Error('TIMEOUT_SUPABASE')), timeoutMs))
      ]);
    }

    /* =======================================================
       MONTAGEM DE FOTO POR COMPLETO A PARTIR DE FRAÇÕES (DUAL-DB)
       Recupera as frações gravadas (chunks) e remonta a foto original em HD
       ======================================================= */
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

      // Garante clientes Supabase ativos
      if (!supabaseClient && window.supabase && DEFAULT_SUPABASE_URL) {
        try { supabaseClient = window.supabase.createClient(DEFAULT_SUPABASE_URL, DEFAULT_SUPABASE_ANON_KEY); } catch (e) {}
      }
      if (!supabaseSecondaryClient && window.supabase && DEFAULT_SUPABASE_SECONDARY_URL) {
        try { supabaseSecondaryClient = window.supabase.createClient(DEFAULT_SUPABASE_SECONDARY_URL, DEFAULT_SUPABASE_SECONDARY_ANON_KEY); } catch (e) {}
      }

      let chunks = [];

      // 2. Consulta frações no Banco 1 (Principal)
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

      // 3. Failover automático: se o Banco 1 não retornou frações, consulta no Banco 2
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

      // 4. Se encontrou frações (chunks), remonta a foto completa em ordem
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
        } catch (eAssemble) {
          console.warn('Erro ao montar foto completa a partir das frações:', eAssemble);
        }
      }

      // 5. Fallback direto no Banco 2 (atletas.foto_url)
      if (typeof supabaseSecondaryClient !== 'undefined' && supabaseSecondaryClient) {
        try {
          const { data: at2 } = await safeSupabaseCall(
            supabaseSecondaryClient.from('atletas').select('foto_url').eq('codigo', code).maybeSingle(),
            2000
          );
          if (at2 && at2.foto_url && at2.foto_url.startsWith('data:image/')) {
            try { localStorage.setItem('pe_photo_full_' + code, at2.foto_url); } catch (e) {}
            return at2.foto_url;
          }
        } catch (eAt2) {}
      }

      // 6. Fallback em athlete_record no Banco 1 (keep_alive_logs)
      if (typeof supabaseClient !== 'undefined' && supabaseClient) {
        try {
          const { data: recLog1 } = await safeSupabaseCall(
            supabaseClient.from('keep_alive_logs').select('status').eq('source', 'athlete_record:' + code).limit(1).maybeSingle(),
            2000
          );
          if (recLog1 && recLog1.status) {
            const p = typeof recLog1.status === 'string' ? JSON.parse(recLog1.status) : recLog1.status;
            const pPhoto = p.foto_url || p.foto;
            if (pPhoto && pPhoto.startsWith('data:image/')) {
              try { localStorage.setItem('pe_photo_full_' + code, pPhoto); } catch (e) {}
              return pPhoto;
            }
          }
        } catch (eRec1) {}
      }

      // 7. Fallback na API Serverless Oficial (/api/atletas/buscar)
      try {
        const apiRes = await safeSupabaseCall(fetch('/api/atletas/buscar?codigo=' + encodeURIComponent(code)), 2500);
        if (apiRes && apiRes.ok) {
          const apiJson = await apiRes.json();
          if (apiJson && apiJson.atleta && apiJson.atleta.foto_url && apiJson.atleta.foto_url.startsWith('data:image/')) {
            try { localStorage.setItem('pe_photo_full_' + code, apiJson.atleta.foto_url); } catch (e) {}
            return apiJson.atleta.foto_url;
          }
        }
      } catch (eApiCall) {}

      return (fallbackCompactUrl && fallbackCompactUrl.startsWith('data:image/')) ? fallbackCompactUrl : '';
    }
    window.montarFotoCompletaFederado = montarFotoCompletaFederado;


    async function initSupabase() {
      const dot = document.getElementById('supabaseStatusDot');
      const text = document.getElementById('supabaseStatusText');

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
            if (data.supabaseSecondaryUrl && data.supabaseSecondaryAnonKey) {
              SUPABASE_SECONDARY_URL = data.supabaseSecondaryUrl;
              SUPABASE_SECONDARY_ANON_KEY = data.supabaseSecondaryAnonKey;
              localStorage.setItem('pe_supabase_secondary_url', SUPABASE_SECONDARY_URL);
              localStorage.setItem('pe_supabase_secondary_anon_key', SUPABASE_SECONDARY_ANON_KEY);
            }
          }
        } catch (e) {}
      }

      if (!SUPABASE_ANON_KEY || SUPABASE_ANON_KEY.startsWith('http') || SUPABASE_ANON_KEY.length < 20) {
        SUPABASE_ANON_KEY = DEFAULT_SUPABASE_ANON_KEY;
        localStorage.setItem('pe_supabase_anon_key', SUPABASE_ANON_KEY);
      }

      // Inicializa cliente secundário / reserva se configurado
      if (window.supabase && SUPABASE_SECONDARY_URL && SUPABASE_SECONDARY_ANON_KEY && !SUPABASE_SECONDARY_ANON_KEY.startsWith('http')) {
        try {
          const cleanSecUrl = SUPABASE_SECONDARY_URL.replace(/\/rest\/v1\/?$/, '').replace(/\/+$/, '');
          supabaseSecondaryClient = window.supabase.createClient(cleanSecUrl, SUPABASE_SECONDARY_ANON_KEY);
        } catch (eSec) {
          console.warn("Aviso ao conectar banco reserva:", eSec);
        }
      }

      if (window.supabase && SUPABASE_URL && SUPABASE_ANON_KEY && !SUPABASE_ANON_KEY.startsWith('http')) {
        try {
          supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
          if (dot) dot.className = "w-2 h-2 rounded-full bg-emerald-400";
          if (text) text.textContent = "Sistema Conectado";
          if (typeof renderPublicNews === 'function') renderPublicNews();
          if (typeof initIndexCloudRealtime === 'function') initIndexCloudRealtime();
          if (typeof loadPublicGalleryFromCloud === 'function') loadPublicGalleryFromCloud();
          return true;
        } catch (err) {
          console.warn("Erro ao instanciar Supabase:", err);
        }
      }
      if (dot) dot.className = "w-2 h-2 rounded-full bg-amber-400";
      if (text) text.textContent = "Modo Local";
      return false;
    }

    /* =======================================================
       NOTÍCIAS E REGISTROS PADRÃO (FALLBACK ROBUSTO)
       ======================================================= */
    const DEFAULT_NEWS = [];

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

    const DEFAULT_ATHLETES = [];

    function getStoredNews() {
      let list = JSON.parse(localStorage.getItem('pe_news_db')) || JSON.parse(localStorage.getItem('foot_table_news_db')) || JSON.parse(localStorage.getItem('pe_futmesa_news'));
      if (!list || !Array.isArray(list)) {
        list = [];
      }
      const deletedIds = new Set(JSON.parse(localStorage.getItem('pe_deleted_news_ids') || '[]').map(String));
      return list
        .filter(n => !deletedIds.has(String(n.id)) && !isMockNewsItem(n))
        .map(item => ({
          ...item,
          title: item.title || item.titulo || '',
          category: item.category || item.categoria || 'INFORMATIVO',
          content: item.content || item.conteudo || item.summary || item.resumo || '',
          date: item.date || item.data_publicacao || '',
          image: item.imagem_url || item.image || item.imagem || ''
        }));
    }

    function getStoredAthletes() {
      const deletedCodes = new Set(JSON.parse(localStorage.getItem('pe_deleted_athlete_codes') || '[]').map(String));
      deletedCodes.add('548608');
      deletedCodes.add('331296');
      const list = JSON.parse(localStorage.getItem('pe_athletes_db')) || [];
      return list.filter(a => a && a.codigo && !deletedCodes.has(String(a.codigo)));
    }

    /* =======================================================
       RENDERIZADOR DE NOTÍCIAS PÚBLICAS (SUPABASE + CACHE LOCAL)
       ======================================================= */
    let _lastNewsFetchTime = 0;
    let currentPublicNewsFilter = 'TODAS';

    function filterPublicNewsCategory(cat) {
      currentPublicNewsFilter = cat;
      const btns = document.querySelectorAll('.pub-filter-btn');
      btns.forEach(b => {
        if (b.innerText.trim() === cat) {
          b.className = 'pub-filter-btn active-pub-filter px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide uppercase transition bg-pe-blue text-white shadow-sm';
        } else {
          b.className = 'pub-filter-btn px-3 py-1.5 rounded-lg text-xs font-bold tracking-wide uppercase transition bg-pe-inputBg text-slate-400 hover:text-white border border-pe-cardBorder';
        }
      });
      renderPublicNews();
    }

    function handlePublicNewsSearch() {
      renderPublicNews();
    }

    function openPublicNewsModal(id) {
      const newsList = getStoredNews();
      const item = newsList.find(n => String(n.id) === String(id));
      if (!item) return;

      let dataFormatada = item.date || 'Recente';
      if (item.date && item.date.includes('-')) {
        const [ano, mes, dia] = item.date.split('-');
        dataFormatada = `${dia}/${mes}/${ano}`;
      }

      const catEl = document.getElementById('pubModalCategory');
      if (catEl) catEl.innerText = item.category || 'INFORMATIVO';
      const dateEl = document.getElementById('pubModalDate');
      if (dateEl) dateEl.innerText = dataFormatada;
      const titleEl = document.getElementById('pubModalTitle');
      if (titleEl) titleEl.innerText = item.title;
      const excerptEl = document.getElementById('pubModalExcerpt');
      if (excerptEl) excerptEl.innerText = item.excerpt ? `"${item.excerpt}"` : '';
      const contentEl = document.getElementById('pubModalFullContent');
      if (contentEl) contentEl.innerText = item.content || item.excerpt || '';

      const imgContainer = document.getElementById('pubModalImageContainer');
      const imgTag = document.getElementById('pubModalImage');
      if (item.image) {
        if (imgTag) imgTag.src = item.image;
        if (imgContainer) imgContainer.classList.remove('hidden');
      } else {
        if (imgContainer) imgContainer.classList.add('hidden');
      }

      const pdfArea = document.getElementById('pubModalPdfArea');
      const pdfLink = document.getElementById('pubModalPdfLink');
      const link = item.pdfLink || item.link;
      if (link) {
        if (pdfLink) pdfLink.href = link;
        if (pdfArea) pdfArea.classList.remove('hidden');
      } else {
        if (pdfArea) pdfArea.classList.add('hidden');
      }

      const modal = document.getElementById('publicNewsModal');
      const card = document.getElementById('publicNewsModalCard');
      if (modal && card) {
        modal.classList.remove('hidden');
        setTimeout(() => {
          modal.classList.remove('opacity-0');
          card.classList.remove('scale-95');
          card.classList.add('scale-100');
        }, 10);
      }
    }

    function closePublicNewsModal() {
      const modal = document.getElementById('publicNewsModal');
      const card = document.getElementById('publicNewsModalCard');
      if (modal && card) {
        modal.classList.add('opacity-0');
        card.classList.remove('scale-100');
        card.classList.add('scale-95');
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 300);
      }
    }

    async function renderPublicNews(force = false) {
      const container = document.getElementById('publicNewsContainer');
      if (!container) return;
      let newsList = getStoredNews();

      const now = Date.now();
      const shouldQuerySupabase = force || (now - _lastNewsFetchTime > 180000); // 3 minutos de cache

      // Consulta Supabase com controle de taxa para economizar requisições e egress
      if (supabaseClient && shouldQuerySupabase) {
        try {
          const { data, error } = await supabaseClient
            .from('noticias')
            .select('*')
            .order('created_at', { ascending: false });

          if (!error && data) {
            const deletedIds = new Set(JSON.parse(localStorage.getItem('pe_deleted_news_ids') || '[]').map(String));
            const validData = data.filter(item => !deletedIds.has(String(item.id)) && !isMockNewsItem(item));
            newsList = validData.map(item => ({
              id: item.id,
              title: item.titulo || item.title || '',
              category: item.categoria || item.category || 'INFORMATIVO',
              content: item.conteudo || item.content || '',
              date: item.data_publicacao || (item.created_at ? item.created_at.split('T')[0] : ''),
              image: item.imagem_url || item.imagem || item.image || ''
            }));
            localStorage.setItem('pe_news_db', JSON.stringify(newsList));
          }

          if (newsList.length === 0) {
            try {
              const { data: log } = await safeSupabaseCall(
                supabaseClient.from('keep_alive_logs').select('status').eq('source', 'fpeft_news_items').order('pinged_at', { ascending: false }).limit(1).maybeSingle(),
                2500
              ).catch(() => ({ data: null }));

              if (log && log.status) {
                const parsed = typeof log.status === 'string' ? JSON.parse(log.status) : log.status;
                if (Array.isArray(parsed) && parsed.length > 0) {
                  newsList = parsed;
                  localStorage.setItem('pe_news_db', JSON.stringify(parsed));
                }
              }
            } catch (e2) {}
          }

          _lastNewsFetchTime = now;
        } catch (e) {
          console.warn("Supabase indisponível para notícias, usando fallback:", e);
        }
      }

      const searchInput = document.getElementById('publicSearchNews');
      const searchTerm = (searchInput ? searchInput.value : '').toLowerCase().trim();

      let filtered = newsList.filter(item => {
        const matchesCategory = currentPublicNewsFilter === 'TODAS' || item.category === currentPublicNewsFilter;
        const matchesSearch = !searchTerm || 
                              (item.title && item.title.toLowerCase().includes(searchTerm)) || 
                              (item.content && item.content.toLowerCase().includes(searchTerm)) ||
                              (item.category && item.category.toLowerCase().includes(searchTerm));
        return matchesCategory && matchesSearch;
      });

      container.innerHTML = "";

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="bg-pe-card border border-pe-cardBorder rounded-xl p-8 text-center text-slate-400 text-xs">
            <i class="fa-regular fa-folder-open text-3xl text-slate-600 mb-2 block"></i>
            Nenhuma notícia encontrada com os filtros selecionados.
          </div>
        `;
        return;
      }

      filtered.forEach(item => {
        let tagColor = "bg-pe-blue text-white";
        if (item.category && item.category.includes('MUNDIAL')) tagColor = "bg-pe-gold text-pe-dark font-extrabold";
        if (item.category && item.category.includes('REGULAMENTO')) tagColor = "bg-pe-red text-white";
        if (item.category && item.category.includes('NOTAS')) tagColor = "bg-emerald-600 text-white font-bold";

        const card = document.createElement('article');
        card.className = "bg-pe-card border border-pe-cardBorder hover:border-pe-gold/60 transition p-4 sm:p-5 rounded-2xl flex flex-col md:flex-row items-stretch md:items-center gap-4 group backdrop-blur-md relative overflow-hidden";
        
        const imageHtml = item.image ? `
          <div class="w-full md:w-52 h-44 md:h-32 rounded-xl overflow-hidden shrink-0 bg-[#070a13] border border-pe-cardBorder relative">
            <img src="${item.image}" alt="${escapeHTML(item.title)}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300" loading="lazy" onerror="this.parentElement.style.display='none'">
          </div>
        ` : '';

        const safeTitle = escapeHTML(item.title);
        const safeContent = escapeHTML(item.content || item.summary || '');

        card.innerHTML = `
          ${imageHtml}
          <div class="space-y-2 flex-1 min-w-0">
            <div class="flex items-center justify-between flex-wrap gap-2">
              <div class="flex items-center gap-2">
                <span class="text-[10px] font-bold px-2.5 py-0.5 rounded-md ${tagColor} uppercase tracking-wider">${escapeHTML(item.category || 'INFORMATIVO')}</span>
                <span class="text-[11px] text-slate-400 font-mono flex items-center gap-1">
                  <i class="fa-regular fa-calendar text-[10px]"></i> ${item.date || 'Recente'}
                </span>
              </div>
              <button onclick="openPublicNewsModal('${item.id}')" class="text-xs font-bold text-pe-gold hover:text-amber-300 transition flex items-center gap-1.5 cursor-pointer">
                <i class="fa-solid fa-eye text-xs"></i> <span>Ler Notícia Completa</span>
              </button>
            </div>
            <h3 class="font-oswald text-lg sm:text-xl uppercase font-bold text-white leading-snug group-hover:text-pe-gold transition">${safeTitle}</h3>
            <p class="text-xs text-slate-300 leading-relaxed line-clamp-3">${safeContent}</p>
          </div>
        `;
        container.appendChild(card);
      });
    }

    function escapeHTML(str) {
      if (!str) return '';
      return String(str).replace(/[&<>'"]/g, tag => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag));
    }

    /* =======================================================
       RENDERIZADOR DE GALERIA PÚBLICA (LOCALSTORAGE + FALLBACK)
       ======================================================= */
    const DEFAULT_PUBLIC_GALLERY = [
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

    function getPublicGalleryItems() {
      try {
        const saved = localStorage.getItem('pe_gallery_db');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        }
      } catch (e) {}
      return DEFAULT_PUBLIC_GALLERY;
    }

    async function loadPublicGalleryFromCloud() {
      if (supabaseClient) {
        try {
          // 1. Canal de alta disponibilidade na nuvem
          const { data: log } = await safeSupabaseCall(
            supabaseClient.from('keep_alive_logs').select('status').eq('source', 'fpeft_gallery_items').order('pinged_at', { ascending: false }).limit(1).maybeSingle(),
            2500
          ).catch(() => ({ data: null }));

          if (log && log.status) {
            const parsed = typeof log.status === 'string' ? JSON.parse(log.status) : log.status;
            if (Array.isArray(parsed) && parsed.length > 0) {
              localStorage.setItem('pe_gallery_db', JSON.stringify(parsed));
              renderPublicGallery();
              return;
            }
          }

          // 2. Tabela configuracoes
          const { data: cfg } = await safeSupabaseCall(
            supabaseClient.from('configuracoes').select('valor').eq('chave', 'fpeft_gallery_items').maybeSingle(),
            2500
          ).catch(() => ({ data: null }));

          if (cfg && cfg.valor) {
            const parsed = typeof cfg.valor === 'string' ? JSON.parse(cfg.valor) : cfg.valor;
            if (Array.isArray(parsed) && parsed.length > 0) {
              localStorage.setItem('pe_gallery_db', JSON.stringify(parsed));
              renderPublicGallery();
              return;
            }
          }
        } catch (e) {}
      }
    }

    function renderPublicGallery() {
      const container = document.getElementById('publicGalleryContainer');
      if (!container) return;

      const items = getPublicGalleryItems();
      if (items.length === 0) {
        container.innerHTML = `
          <div class="col-span-full bg-pe-card border border-pe-cardBorder rounded-xl p-8 text-center text-slate-400 text-xs">
            Nenhuma foto publicada na galeria no momento.
          </div>
        `;
        return;
      }

      container.innerHTML = items.map(item => `
        <div class="group relative rounded-2xl overflow-hidden border border-pe-cardBorder bg-pe-card shadow-lg hover:border-pe-gold/60 transition flex flex-col justify-between">
          <div class="aspect-[4/3] w-full overflow-hidden bg-slate-900 relative">
            <img 
              src="${item.image || 'assets/images/quadra 2.jpg'}" 
              alt="${escapeHTML(item.title || 'Foto Oficial')}" 
              class="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
              loading="lazy" 
              decoding="async" 
              onerror="this.src='assets/images/quadra 2.jpg'" 
            />
          </div>
          <div class="p-4 bg-gradient-to-t from-pe-dark via-pe-card to-transparent flex-1 flex flex-col justify-between">
            <div>
              <span class="text-[10px] font-bold text-pe-gold uppercase tracking-wider block mb-1">
                ${escapeHTML(item.tag || 'ARENA HOMOLOGADA')}
              </span>
              <h4 class="font-oswald text-base uppercase font-bold text-white leading-tight">
                ${escapeHTML(item.title || 'Sem Título')}
              </h4>
              <p class="text-slate-400 text-xs mt-1 leading-relaxed">
                ${escapeHTML(item.desc || '')}
              </p>
            </div>
          </div>
        </div>
      `).join('');
    }

    /* =======================================================
       CONSULTA PÚBLICA EXCLUSIVA PELOS 6 DÍGITOS
       ======================================================= */
    const publicCodeInput = document.getElementById('publicCodeSearchInput');

    publicCodeInput.addEventListener('input', (e) => {
      e.target.value = e.target.value.replace(/\D/g, '').slice(0, 6);
    });

    async function executePublicSearch() {
      const code = publicCodeInput.value.trim();
      const feedback = document.getElementById('publicSearchFeedback');
      const badgeArea = document.getElementById('publicBadgeResultArea');

      feedback.classList.remove('hidden');

      if (!code || code.length !== 6) {
        feedback.innerHTML = `
          <div class="p-3 bg-amber-950/40 border border-pe-gold/40 rounded-xl text-xs text-yellow-300">
            ⚠️ O código de consulta deve conter <strong>exatamente 6 dígitos numéricos</strong> (ex: 742918).
          </div>
        `;
        badgeArea.classList.add('hidden');
        return;
      }

      let athlete = null;

      const deletedCodes = new Set(JSON.parse(localStorage.getItem('pe_deleted_athlete_codes') || '[]').map(String));
      deletedCodes.add('548608');
      deletedCodes.add('331296');
      if (deletedCodes.has(code)) {
        feedback.innerHTML = `
          <div class="p-3 bg-red-950/40 border border-pe-red/40 rounded-xl text-xs text-red-300">
            ❌ Nenhum atleta federado encontrado com o código <strong>#${code}</strong>.
          </div>
        `;
        badgeArea.classList.add('hidden');
        return;
      }

      feedback.innerHTML = `
        <div class="p-3 bg-blue-950/40 border border-pe-blue/40 rounded-xl text-xs text-blue-300 flex items-center gap-2">
          <span class="animate-spin">⏳</span> Consultando base oficial da Federação...
        </div>
      `;

      // Assegura instâncias dos clientes Supabase
      if (!supabaseClient && window.supabase && DEFAULT_SUPABASE_URL) {
        try { supabaseClient = window.supabase.createClient(DEFAULT_SUPABASE_URL, DEFAULT_SUPABASE_ANON_KEY); } catch (e) {}
      }
      if (!supabaseSecondaryClient && window.supabase && DEFAULT_SUPABASE_SECONDARY_URL) {
        try { supabaseSecondaryClient = window.supabase.createClient(DEFAULT_SUPABASE_SECONDARY_URL, DEFAULT_SUPABASE_SECONDARY_ANON_KEY); } catch (e) {}
      }

      // 1. Tenta buscar no Banco 1 (atletas)
      if (supabaseClient) {
        try {
          const { data, error } = await safeSupabaseCall(
            supabaseClient
              .from('atletas')
              .select('*')
              .eq('codigo', code)
              .maybeSingle(),
            2500
          );

          if (!error && data) {
            // Verifica se o atleta foi marcado como excluído na nuvem
            try {
              const { data: delLog } = await safeSupabaseCall(
                supabaseClient.from('keep_alive_logs').select('status').eq('source', 'athlete_deleted:' + code).limit(1).maybeSingle(),
                1500
              );
              if (delLog && delLog.status === 'DELETED') {
                deletedCodes.add(code);
                localStorage.setItem('pe_deleted_athlete_codes', JSON.stringify(Array.from(deletedCodes)));
                feedback.innerHTML = `
                  <div class="p-3 bg-red-950/40 border border-pe-red/40 rounded-xl text-xs text-red-300">
                    ❌ Nenhum atleta federado encontrado com o código <strong>#${code}</strong>.
                  </div>
                `;
                badgeArea.classList.add('hidden');
                return;
              }
            } catch (eDel) {}

            athlete = {
              codigo: data.codigo,
              nome: data.nome,
              cpf: data.cpf,
              nascimento: data.nascimento,
              municipio: data.municipio,
              modalidade: data.modalidade || 'SOLO (INDIVIDUAL)',
              categoria: data.categoria || 'ASPIRANTE',
              status: (data.status || 'PENDENTE').toUpperCase().trim(),
              foto: (data.foto_url && !data.foto_url.includes('unsplash.com')) ? data.foto_url : ''
            };

            if (athlete.status === 'PENDENTE') {
              try {
                const { data: statusLog } = await safeSupabaseCall(
                  supabaseClient
                    .from('keep_alive_logs')
                    .select('status')
                    .eq('source', 'athlete_status:' + code)
                    .order('pinged_at', { ascending: false })
                    .limit(1)
                    .maybeSingle(),
                  1500
                );
                if (statusLog && statusLog.status) {
                  athlete.status = String(statusLog.status).toUpperCase().trim();
                }
              } catch (eCloud) {}
            }
          }
        } catch (e) {
          console.warn("Falha na consulta remota do Supabase DB1:", e);
        }
      }

      // 1.1 Consulta Banco 2 (atletas) - Prioritário para atletas e fotos gravadas no 2º banco
      if ((!athlete || !athlete.foto) && supabaseSecondaryClient) {
        try {
          const { data: secData, error: secErr } = await safeSupabaseCall(
            supabaseSecondaryClient
              .from('atletas')
              .select('*')
              .eq('codigo', code)
              .maybeSingle(),
            2500
          );
          if (!secErr && secData) {
            const secPhoto = (secData.foto_url && !secData.foto_url.includes('unsplash.com')) ? secData.foto_url : '';
            if (!athlete) {
              athlete = {
                codigo: secData.codigo,
                nome: secData.nome,
                cpf: secData.cpf,
                nascimento: secData.nascimento,
                municipio: secData.municipio,
                modalidade: secData.modalidade || 'SOLO (INDIVIDUAL)',
                categoria: secData.categoria || 'ASPIRANTE',
                status: (secData.status || 'PENDENTE').toUpperCase().trim(),
                foto: secPhoto
              };
            } else if (!athlete.foto && secPhoto) {
              athlete.foto = secPhoto;
            }

            if (athlete.status === 'PENDENTE') {
              try {
                const { data: statusLog } = await safeSupabaseCall(
                  supabaseSecondaryClient
                    .from('keep_alive_logs')
                    .select('status')
                    .eq('source', 'athlete_status:' + code)
                    .order('pinged_at', { ascending: false })
                    .limit(1)
                    .maybeSingle(),
                  1500
                );
                if (statusLog && statusLog.status) {
                  athlete.status = String(statusLog.status).toUpperCase().trim();
                }
              } catch (eCloudSec) {}
            }
          }
        } catch (eSec) {
          console.warn("Falha na consulta ao banco reserva DB2:", eSec);
        }
      }

      // 1.2 Consulta athlete_record em Banco 1 (keep_alive_logs) caso não conste na tabela atletas
      if ((!athlete || !athlete.foto) && supabaseClient) {
        try {
          const { data: recLog1 } = await safeSupabaseCall(
            supabaseClient
              .from('keep_alive_logs')
              .select('status')
              .eq('source', 'athlete_record:' + code)
              .order('pinged_at', { ascending: false })
              .limit(1)
              .maybeSingle(),
            2000
          );
          if (recLog1 && recLog1.status) {
            const parsed = typeof recLog1.status === 'string' ? JSON.parse(recLog1.status) : recLog1.status;
            const pPhoto = (parsed.foto_url && !parsed.foto_url.includes('unsplash.com')) ? parsed.foto_url : (parsed.foto || '');
            if (!athlete) {
              athlete = {
                codigo: parsed.codigo || code,
                nome: parsed.nome || 'Atleta Oficial',
                cpf: parsed.cpf || '',
                nascimento: parsed.nascimento || '',
                municipio: parsed.municipio || 'RECIFE - PE',
                modalidade: parsed.modalidade || 'SOLO (INDIVIDUAL)',
                categoria: parsed.categoria || 'ASPIRANTE',
                status: (parsed.status || 'PENDENTE').toUpperCase().trim(),
                foto: pPhoto
              };
            } else if (!athlete.foto && pPhoto) {
              athlete.foto = pPhoto;
            }
          }
        } catch (eLog1) {}
      }

      // 1.3 Consulta athlete_record em Banco 2 (keep_alive_logs)
      if ((!athlete || !athlete.foto) && supabaseSecondaryClient) {
        try {
          const { data: recLog2 } = await safeSupabaseCall(
            supabaseSecondaryClient
              .from('keep_alive_logs')
              .select('status')
              .eq('source', 'athlete_record:' + code)
              .order('pinged_at', { ascending: false })
              .limit(1)
              .maybeSingle(),
            2000
          );
          if (recLog2 && recLog2.status) {
            const parsed2 = typeof recLog2.status === 'string' ? JSON.parse(recLog2.status) : recLog2.status;
            const pPhoto2 = (parsed2.foto_url && !parsed2.foto_url.includes('unsplash.com')) ? parsed2.foto_url : (parsed2.foto || '');
            if (!athlete) {
              athlete = {
                codigo: parsed2.codigo || code,
                nome: parsed2.nome || 'Atleta Oficial',
                cpf: parsed2.cpf || '',
                nascimento: parsed2.nascimento || '',
                municipio: parsed2.municipio || 'RECIFE - PE',
                modalidade: parsed2.modalidade || 'SOLO (INDIVIDUAL)',
                categoria: parsed2.categoria || 'ASPIRANTE',
                status: (parsed2.status || 'PENDENTE').toUpperCase().trim(),
                foto: pPhoto2
              };
            } else if (!athlete.foto && pPhoto2) {
              athlete.foto = pPhoto2;
            }
          }
        } catch (eLog2) {}
      }

      // 1.4 Consulta API Serverless Oficial (/api/atletas/buscar) com bypass seguro
      if (!athlete || !athlete.foto) {
        try {
          const apiRes = await safeSupabaseCall(fetch('/api/atletas/buscar?codigo=' + encodeURIComponent(code)), 2500);
          if (apiRes && apiRes.ok) {
            const apiJson = await apiRes.json();
            if (apiJson && apiJson.atleta) {
              const a = apiJson.atleta;
              const aPhoto = a.foto_url || a.foto_completa || a.foto_compacta || '';
              if (!athlete) {
                athlete = {
                  codigo: a.codigo || code,
                  nome: a.nome,
                  cpf: a.cpf || a.cpf_mascarado || '',
                  nascimento: a.nascimento || '',
                  municipio: a.municipio || 'RECIFE - PE',
                  modalidade: a.modalidade || 'SOLO (INDIVIDUAL)',
                  categoria: a.categoria || 'ASPIRANTE',
                  status: (a.status || 'PENDENTE').toUpperCase().trim(),
                  foto: aPhoto
                };
              } else if (!athlete.foto && aPhoto) {
                athlete.foto = aPhoto;
              }
            }
          }
        } catch (eApiCall) {}
      }

      // 2. Se não encontrou no Supabase, consulta na base local
      if (!athlete) {
        const athletes = getStoredAthletes().filter(a => !deletedCodes.has(String(a.codigo)));
        const found = athletes.find(a => String(a.codigo) === String(code));
        if (found) {
          athlete = {
            codigo: found.codigo,
            nome: found.nome,
            cpf: found.cpf,
            nascimento: found.nascimento,
            municipio: found.municipio,
            modalidade: found.modalidade || 'SOLO (INDIVIDUAL)',
            categoria: found.categoria || 'ASPIRANTE',
            status: found.status || 'PENDENTE',
            foto: found.foto || found.foto_url
          };
        }
      }

      if (!athlete) {
        feedback.innerHTML = `
          <div class="p-3 bg-red-950/40 border border-pe-red/40 rounded-xl text-xs text-red-300">
            ❌ Nenhum atleta federado encontrado com o código <strong>#${code}</strong>.
          </div>
        `;
        badgeArea.classList.add('hidden');
        return;
      }

      window._currentSearchedAthlete = athlete;
      _isAthleteDownloadUnlocked = false;
      _unlockedAthleteCode = null;
      _pendingDownloadAction = null;
      if (typeof resetDownloadLockNotice === 'function') {
        resetDownloadLockNotice();
      }

      // Verifica status de homologação
      const upperStatus = (athlete.status || 'PENDENTE').toUpperCase().trim();
      const isHomologado = upperStatus === 'HOMOLOGADO' || upperStatus === 'REGULAR';
      const isDesabilitado = upperStatus === 'DESABILITADO' || upperStatus === 'SUSPENSO' || upperStatus === 'INATIVO';

      feedback.classList.add('hidden');

      // Mascaramento de Segurança LGPD (Art. 46 Lei nº 13.709/2018 - Exibe apenas os 3 primeiros dígitos)
      function maskCpf(cpf) {
        const digits = String(cpf || '').replace(/\D/g, '');
        if (digits.length >= 3) {
          return `${digits.slice(0, 3)}.***.***-**`;
        }
        return '***.***.***-**';
      }

      // Extração Exclusiva do Ano de Nascimento na Carteira Oficial (Proteção de Privacidade / LGPD)
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

      // 1. PREENCHIMENTO IMEDIATO DO PAINEL OFICIAL DE VALIDAÇÃO E AUTENTICIDADE DIGITAL (QR CHECK)
      const qrFullName = document.getElementById('qrAthleteFullName');
      const qrFedNum = document.getElementById('qrFederatedNumText');
      const qrCpf = document.getElementById('qrCpfText');
      const qrModality = document.getElementById('qrModalityText');
      const qrCategory = document.getElementById('qrCategoryText');
      const qrCity = document.getElementById('qrCityText');
      const qrValidity = document.getElementById('qrValidityText');
      const qrTimestamp = document.getElementById('qrTimestampText');
      const qrHash = document.getElementById('qrHashVal');
      const qrStatusMain = document.getElementById('qrStatusBadgeMain');
      const qrStatusText = document.getElementById('qrStatusBadgeText');
      const qrSituationBox = document.getElementById('qrSituationBox');
      const qrSituationIcon = document.getElementById('qrSituationIcon');
      const qrSituationTitle = document.getElementById('qrSituationTitle');
      const qrSituationDesc = document.getElementById('qrSituationDesc');

      if (qrFullName) qrFullName.textContent = athlete.nome || 'Atleta Oficial';
      if (qrFedNum) qrFedNum.textContent = athlete.codigo ? `#${athlete.codigo}` : '#000000';
      if (qrCpf) qrCpf.textContent = maskCpf(athlete.cpf);
      if (qrModality) qrModality.textContent = athlete.modalidade || 'SOLO (INDIVIDUAL)';
      if (qrCategory) qrCategory.textContent = athlete.categoria || 'ASPIRANTE';
      if (qrCity) qrCity.textContent = athlete.municipio || 'RECIFE - PE';
      if (qrValidity) qrValidity.textContent = athlete.validade ? `${athlete.validade} (Temporada Oficial)` : '31/12/2026 (Temporada Oficial)';
      if (qrTimestamp) qrTimestamp.textContent = new Date().toLocaleString('pt-BR');
      if (qrHash) qrHash.textContent = `FPEFT-${athlete.codigo || '000000'}-${isHomologado ? 'AUTH-REGULAR' : (isDesabilitado ? 'DISABLED' : 'PENDING')}`;

      if (isHomologado) {
        if (qrStatusMain) {
          qrStatusMain.className = "px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 bg-emerald-950/90 border border-emerald-500 text-emerald-300 shadow-md";
        }
        if (qrStatusText) qrStatusText.textContent = "REGULAR (Ativo)";
        if (qrSituationBox) {
          qrSituationBox.className = "p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/50 text-emerald-300 text-xs flex items-center gap-3";
        }
        if (qrSituationIcon) qrSituationIcon.textContent = "✅";
        if (qrSituationTitle) qrSituationTitle.textContent = "REGISTRO OFICIAL HOMOLOGADO E REGULAR";
        if (qrSituationDesc) qrSituationDesc.textContent = "Este atleta está devidamente ativo, cadastrado e homologado perante a Federação Pernambucana de Foot Table.";
      } else if (isDesabilitado) {
        if (qrStatusMain) {
          qrStatusMain.className = "px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 bg-rose-950/90 border border-rose-500 text-rose-300 shadow-md";
        }
        if (qrStatusText) qrStatusText.textContent = "CARTEIRA DESABILITADA";
        if (qrSituationBox) {
          qrSituationBox.className = "p-3.5 rounded-xl bg-rose-950/40 border border-rose-500/50 text-rose-300 text-xs flex items-center gap-3";
        }
        if (qrSituationIcon) qrSituationIcon.textContent = "🚫";
        if (qrSituationTitle) qrSituationTitle.textContent = "CARTEIRA DESABILITADA / SUSPENSA";
        if (qrSituationDesc) qrSituationDesc.textContent = "A carteira digital deste atleta foi temporariamente desabilitada/suspensa pela diretoria da Federação. O download e o uso em competições oficiais estão bloqueados.";
      } else {
        if (qrStatusMain) {
          qrStatusMain.className = "px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider flex items-center gap-1.5 bg-amber-950/90 border border-amber-500 text-amber-300 shadow-md";
        }
        if (qrStatusText) qrStatusText.textContent = "HOMOLOGAÇÃO PENDENTE";
        if (qrSituationBox) {
          qrSituationBox.className = "p-3.5 rounded-xl bg-amber-950/40 border border-amber-500/50 text-amber-300 text-xs flex items-center gap-3";
        }
        if (qrSituationIcon) qrSituationIcon.textContent = "⏳";
        if (qrSituationTitle) qrSituationTitle.textContent = "HOMOLOGAÇÃO EM ANDAMENTO (PENDENTE DE APROVAÇÃO)";
        if (qrSituationDesc) qrSituationDesc.textContent = "O cadastro deste atleta foi registrado no sistema, mas aguarda a homologação da diretoria da Federação. A emissão de carteira física/PDF permanece restrita.";
      }

      // 2. PREENCHIMENTO IMEDIATO DOS DADOS DA CARTEIRINHA OFICIAL
      const cardNameEl = document.getElementById('cardBadgeName');
      if (cardNameEl) cardNameEl.textContent = athlete.nome || 'Atleta Oficial';
      const cardCpfEl = document.getElementById('cardBadgeCPF');
      if (cardCpfEl) cardCpfEl.textContent = maskCpf(athlete.cpf);
      const cardBirthEl = document.getElementById('cardBadgeBirth');
      if (cardBirthEl) document.getElementById('cardBadgeBirth').textContent = extractBirthYear(athlete.nascimento);
      const cardCityEl = document.getElementById('cardBadgeCity');
      if (cardCityEl) cardCityEl.textContent = athlete.municipio || 'RECIFE - PE';
      const cardModEl = document.getElementById('cardBadgeModality');
      if (cardModEl) cardModEl.textContent = athlete.modalidade || 'SOLO (INDIVIDUAL)';
      const catBadge = document.getElementById('cardBadgeCategory');
      if (catBadge) catBadge.textContent = athlete.categoria || 'ASPIRANTE';
      const fedNum = (athlete.federado && String(athlete.federado).trim())
        ? (String(athlete.federado).startsWith('PE-') || String(athlete.federado).startsWith('ID:') ? athlete.federado : `ID: #${athlete.federado}`)
        : `ID: #${athlete.codigo || '000000'}`;
      const cardCodeEl = document.getElementById('cardBadgeCode');
      if (cardCodeEl) cardCodeEl.textContent = fedNum;
      const phoneBadge = document.getElementById('cardBadgePhone');
      if (phoneBadge) phoneBadge.textContent = athlete.telefone || '(XX) XXXXX-XXXX';
      const valBadge = document.getElementById('cardBadgeValidity');
      if (valBadge) valBadge.textContent = athlete.validade || '12/2026';

      // 3. FOTO LIMPA IMEDIATA NO PAINEL E NA CARTEIRA
      const defaultAthletePhoto = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2364748b'%3E%3Cpath d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/%3E%3C/svg%3E";
      const cleanPhoto = (athlete.foto && !athlete.foto.includes('unsplash.com')) ? athlete.foto : defaultAthletePhoto;
      const cardPhotoEl = document.getElementById('cardBadgePhoto');
      if (cardPhotoEl) {
        cardPhotoEl.onerror = function() { this.src = defaultAthletePhoto; };
        cardPhotoEl.src = cleanPhoto;
      }
      const qrPhotoThumb = document.getElementById('qrAthletePhotoThumb');
      if (qrPhotoThumb) {
        qrPhotoThumb.onerror = function() { this.src = defaultAthletePhoto; };
        qrPhotoThumb.src = cleanPhoto;
      }

      // 4. ATUALIZA SELO DE STATUS DA CARTEIRA
      const cardStDot = document.getElementById('cardBadgeStatusDot');
      const cardStText = document.getElementById('cardBadgeStatus');
      if (cardStText) {
        if (isHomologado) {
          cardStText.textContent = 'REGULAR';
          cardStText.className = 'font-extrabold text-[8px] sm:text-[10px] uppercase tracking-wider text-emerald-400 font-mono';
          if (cardStDot) cardStDot.className = 'w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-400';
        } else if (isDesabilitado) {
          cardStText.textContent = 'DESABILITADO';
          cardStText.className = 'font-extrabold text-[8px] sm:text-[10px] uppercase tracking-wider text-rose-400 font-mono';
          if (cardStDot) cardStDot.className = 'w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-rose-500';
        } else {
          cardStText.textContent = 'PENDENTE';
          cardStText.className = 'font-extrabold text-[8px] sm:text-[10px] uppercase tracking-wider text-amber-400 font-mono';
          if (cardStDot) cardStDot.className = 'w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-amber-400 animate-pulse';
        }
      }

      // 5. EXIBE A ÁREA DO RESULTADO COM TODOS OS DADOS PREENCHIDOS
      badgeArea.classList.remove('hidden');

      // 6. GERA O QR CODE OFICIAL ESCANEÁVEL
      const qrBox = document.getElementById('cardBadgeQrBox');
      if (qrBox && typeof qrcode !== 'undefined') {
        try {
          const qr = qrcode(0, 'M');
          qr.addData(`https://fpeft.vercel.app/?id=${athlete.codigo || '000000'}`);
          qr.make();
          qrBox.innerHTML = qr.createSvgTag({ scalable: true, margin: 0 });
        } catch (e) {
          qrBox.innerHTML = '<i class="fa-solid fa-qrcode text-black text-2xl"></i>';
        }
      }

      // 7. AVISOS DE PENDÊNCIA E CONTROLE DOS BOTÕES DE DOWNLOAD
      const pendingWarning = document.getElementById('cardPendingWarning');
      const btnDownload = document.getElementById('btnDownloadCardPng');
      const btnPrint = document.getElementById('btnPrintCard');

      if (pendingWarning) {
        if (isHomologado) {
          pendingWarning.classList.add('hidden');
        } else if (isDesabilitado) {
          pendingWarning.classList.remove('hidden');
          pendingWarning.className = "max-w-[560px] mx-auto mt-4 p-4 rounded-xl bg-rose-950/80 border border-rose-500/50 text-rose-200 text-xs shadow-lg space-y-1.5";
          pendingWarning.innerHTML = `
            <div class="flex items-center gap-2 font-extrabold text-rose-400">
              <span class="text-base">🚫</span> <span>CARTEIRA DESABILITADA / SUSPENSA</span>
            </div>
            <p class="text-slate-300 text-[11px] leading-relaxed">
              A carteira deste atleta foi <strong>temporariamente desabilitada pela diretoria da Federação</strong>. O download e a impressão em PDF/PNG estão bloqueados no momento.
            </p>
          `;
        } else {
          pendingWarning.classList.remove('hidden');
          pendingWarning.className = "max-w-[560px] mx-auto mt-4 p-4 rounded-xl bg-amber-950/80 border border-amber-500/50 text-amber-200 text-xs shadow-lg space-y-1.5";
          pendingWarning.innerHTML = `
            <div class="flex items-center gap-2 font-extrabold text-amber-400">
              <span class="text-base">⏳</span> <span>HOMOLOGAÇÃO PENDENTE</span>
            </div>
            <p class="text-slate-300 text-[11px] leading-relaxed">
              Este cadastro foi registrado e está aguardando a homologação oficial da Federação. <strong>A impressão e o download em PDF/PNG da carteira digital estão temporariamente bloqueados</strong> até a conclusão da validação.
            </p>
          `;
        }
      }

      if (btnDownload) {
        if (isHomologado) {
          btnDownload.disabled = false;
          btnDownload.className = "bg-pe-gold hover:bg-pe-goldHover text-pe-dark font-extrabold text-xs uppercase tracking-wider py-3 rounded-xl transition shadow flex items-center justify-center gap-2 cursor-pointer";
          btnDownload.title = "Baixar Carteira em PNG";
        } else {
          btnDownload.disabled = true;
          btnDownload.className = "bg-slate-800/80 border border-slate-700/60 text-slate-500 font-bold text-xs uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2 cursor-not-allowed opacity-60";
          btnDownload.title = isDesabilitado ? "Download bloqueado: Carteira Desabilitada" : "Download bloqueado: Homologação Pendente";
        }
      }

      if (btnPrint) {
        if (isHomologado) {
          btnPrint.disabled = false;
          btnPrint.className = "bg-pe-accent hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider py-3 rounded-xl transition flex items-center justify-center gap-2 cursor-pointer";
          btnPrint.title = "Imprimir ou Salvar em PDF";
        } else {
          btnPrint.disabled = true;
          btnPrint.className = "bg-slate-800/80 border border-slate-700/60 text-slate-500 font-bold text-xs uppercase tracking-wider py-3 rounded-xl flex items-center justify-center gap-2 cursor-not-allowed opacity-60";
          btnPrint.title = isDesabilitado ? "Impressão bloqueada: Carteira Desabilitada" : "Impressão bloqueada: Homologação Pendente";
        }
      }

      // 8. SINCRONIZAÇÃO EM BACKGROUND DO LAYOUT PERSONALIZADO E MONTAGEM DA FOTO DAS FRAÇÕES
      applySavedBadgeLayout().catch(e => console.warn('Layout studio background:', e));

      // MONTAGEM DA FOTO POR COMPLETO A PARTIR DAS FRAÇÕES GRAVADAS NOS DOIS BANCOS DE DADOS
      montarFotoCompletaFederado(athlete.codigo, cleanPhoto).then(assembledPhoto => {
        if (assembledPhoto && assembledPhoto.startsWith('data:image/')) {
          athlete.foto = assembledPhoto;
          athlete.foto_completa = assembledPhoto;
          if (window._currentSearchedAthlete) {
            window._currentSearchedAthlete.foto = assembledPhoto;
            window._currentSearchedAthlete.foto_completa = assembledPhoto;
          }
          if (cardPhotoEl) cardPhotoEl.src = assembledPhoto;
          if (qrPhotoThumb) qrPhotoThumb.src = assembledPhoto;
          const realImg = document.getElementById('fotoTamanhoRealPublicaImg');
          const realModal = document.getElementById('modalFotoTamanhoRealPublica');
          if (realModal && !realModal.classList.contains('hidden') && realImg) {
            realImg.src = assembledPhoto;
          }
        }
      }).catch(err => console.warn('Montagem da foto fracionada:', err));

      badgeArea.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    document.getElementById('btnSearchPublicCode').addEventListener('click', executePublicSearch);
    publicCodeInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') executePublicSearch();
    });

    /* =======================================================
       EXPORTAR / BAIXAR CARTEIRA COM BLOQUEIO DE SEGURANÇA (CPF COMPLETO)
       ======================================================= */
    let _isAthleteDownloadUnlocked = false;
    let _unlockedAthleteCode = null;
    let _pendingDownloadAction = null;

    function resetDownloadLockNotice() {
      const notice = document.getElementById('cardDownloadLockNotice');
      if (notice) {
        notice.innerHTML = `
          <span class="text-[11px] text-slate-400 inline-flex items-center justify-center gap-1.5 font-medium bg-dark-900/60 px-3 py-1 rounded-full border border-white/5">
            <i class="fa-solid fa-lock text-pe-gold text-[10px]"></i>
            <span>Download protegido por autenticação de CPF (LGPD)</span>
          </span>
        `;
      }
    }

    function setDownloadUnlockedNotice() {
      const notice = document.getElementById('cardDownloadLockNotice');
      if (notice) {
        notice.innerHTML = `
          <span class="text-[11px] text-emerald-400 inline-flex items-center justify-center gap-1.5 font-medium bg-emerald-950/60 px-3 py-1 rounded-full border border-emerald-500/30">
            <i class="fa-solid fa-lock-open text-emerald-400 text-[10px]"></i>
            <span>Identidade confirmada • Download liberado</span>
          </span>
        `;
      }
    }

    function isDownloadUnlockedForCurrentAthlete() {
      const athlete = window._currentSearchedAthlete;
      if (!athlete) return false;
      return _isAthleteDownloadUnlocked && String(_unlockedAthleteCode) === String(athlete.codigo);
    }

    function openCpfDownloadGateModal(action) {
      _pendingDownloadAction = action;
      const athlete = window._currentSearchedAthlete;
      if (!athlete) return;

      const nameEl = document.getElementById('cpfGateAthleteName');
      const codeEl = document.getElementById('cpfGateAthleteCode');
      const inputEl = document.getElementById('inputCpfDownloadGate');
      const feedbackEl = document.getElementById('cpfGateFeedback');
      const btnConfirm = document.getElementById('btnConfirmCpfDownload');
      const modal = document.getElementById('modalCpfDownloadGate');
      const card = document.getElementById('modalCpfDownloadGateCard');

      if (nameEl) nameEl.textContent = athlete.nome || 'Atleta';
      if (codeEl) codeEl.textContent = `#${athlete.codigo || '000000'}`;
      if (inputEl) {
        inputEl.value = '';
        inputEl.classList.remove('border-red-500');
        inputEl.classList.remove('border-emerald-500');
      }
      if (feedbackEl) {
        feedbackEl.className = 'hidden';
        feedbackEl.innerHTML = '';
      }
      if (btnConfirm) btnConfirm.disabled = false;

      if (modal && card) {
        modal.classList.remove('hidden');
        setTimeout(() => {
          modal.classList.remove('opacity-0');
          card.classList.remove('scale-95');
          card.classList.add('scale-100');
          if (inputEl) inputEl.focus();
        }, 10);
      }
    }

    function closeCpfDownloadGateModal() {
      const modal = document.getElementById('modalCpfDownloadGate');
      const card = document.getElementById('modalCpfDownloadGateCard');
      if (modal && card) {
        modal.classList.add('opacity-0');
        card.classList.remove('scale-100');
        card.classList.add('scale-95');
        setTimeout(() => {
          modal.classList.add('hidden');
        }, 300);
      }
    }
    window.closeCpfDownloadGateModal = closeCpfDownloadGateModal;

    function formatCpfMask(val) {
      let v = String(val || '').replace(/\D/g, '').slice(0, 11);
      if (v.length > 9) {
        return v.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/, '$1.$2.$3-$4');
      } else if (v.length > 6) {
        return v.replace(/(\d{3})(\d{3})(\d{1,3})/, '$1.$2.$3');
      } else if (v.length > 3) {
        return v.replace(/(\d{3})(\d{1,3})/, '$1.$2');
      }
      return v;
    }

    function validateCpfChecksum(cpf) {
      const s = String(cpf || '').replace(/\D/g, '');
      if (s.length !== 11 || /^(\d)\1{10}$/.test(s)) return false;
      let sum = 0, rest;
      for (let i = 1; i <= 9; i++) sum += parseInt(s.substring(i - 1, i)) * (11 - i);
      rest = (sum * 10) % 11;
      if (rest === 10 || rest === 11) rest = 0;
      if (rest !== parseInt(s.substring(9, 10))) return false;
      sum = 0;
      for (let i = 1; i <= 10; i++) sum += parseInt(s.substring(i - 1, i)) * (12 - i);
      rest = (sum * 10) % 11;
      if (rest === 10 || rest === 11) rest = 0;
      if (rest !== parseInt(s.substring(10, 11))) return false;
      return true;
    }

    function confirmCpfAndUnlockDownload() {
      const athlete = window._currentSearchedAthlete;
      if (!athlete) return;

      const inputEl = document.getElementById('inputCpfDownloadGate');
      const feedbackEl = document.getElementById('cpfGateFeedback');
      const btnConfirm = document.getElementById('btnConfirmCpfDownload');

      const enteredDigits = (inputEl ? inputEl.value : '').replace(/\D/g, '');

      if (!enteredDigits || enteredDigits.length !== 11) {
        if (feedbackEl) {
          feedbackEl.className = 'p-3 bg-red-950/60 border border-pe-red/40 rounded-xl text-xs text-red-300';
          feedbackEl.innerHTML = '⚠️ Por favor, digite o CPF completo com os <strong>11 dígitos</strong>.';
        }
        if (inputEl) {
          inputEl.classList.add('border-red-500');
          inputEl.focus();
        }
        return;
      }

      const registeredDigits = String(athlete.cpf || '').replace(/\D/g, '');
      let isMatch = false;

      if (registeredDigits && registeredDigits.length === 11) {
        isMatch = (enteredDigits === registeredDigits);
      } else {
        // Contingência para cadastros legados com máscara textual incompleta: validação estrutural do CPF
        isMatch = validateCpfChecksum(enteredDigits);
      }

      if (!isMatch) {
        if (feedbackEl) {
          feedbackEl.className = 'p-3 bg-red-950/80 border border-pe-red/60 rounded-xl text-xs text-red-300 flex items-start gap-2';
          feedbackEl.innerHTML = '<span>❌</span> <div><strong>CPF incorreto!</strong> O CPF digitado não confere com o cadastro deste atleta. Por segurança e proteção de dados (LGPD), apenas o titular ou responsável pode baixar a carteira.</div>';
        }
        if (inputEl) {
          inputEl.classList.add('border-red-500');
          inputEl.focus();
          inputEl.select();
        }
        return;
      }

      // Autenticação aprovada
      _isAthleteDownloadUnlocked = true;
      _unlockedAthleteCode = athlete.codigo;
      setDownloadUnlockedNotice();

      if (inputEl) {
        inputEl.classList.remove('border-red-500');
        inputEl.classList.add('border-emerald-500');
      }

      if (feedbackEl) {
        feedbackEl.className = 'p-3 bg-emerald-950/80 border border-emerald-500/60 rounded-xl text-xs text-emerald-300 flex items-center gap-2';
        feedbackEl.innerHTML = '<span>✅</span> <div><strong>Identidade autenticada com sucesso!</strong> Liberando emissão oficial da carteira...</div>';
      }

      if (btnConfirm) btnConfirm.disabled = true;

      setTimeout(() => {
        closeCpfDownloadGateModal();
        if (btnConfirm) btnConfirm.disabled = false;

        const action = _pendingDownloadAction;
        _pendingDownloadAction = null;

        if (action === 'png') {
          executeDownloadCardPng();
        } else if (action === 'print') {
          executePrintCard();
        }
      }, 500);
    }
    window.confirmCpfAndUnlockDownload = confirmCpfAndUnlockDownload;

    document.getElementById('btnDownloadCardPng').addEventListener('click', () => {
      const athlete = window._currentSearchedAthlete;
      const upperStatus = (athlete && athlete.status ? athlete.status : 'PENDENTE').toUpperCase().trim();
      if (upperStatus !== 'HOMOLOGADO' && upperStatus !== 'REGULAR') {
        alert('⚠️ ATENÇÃO: Esta carteira digital está com HOMOLOGAÇÃO PENDENTE.\n\nA impressão e o download em PDF/PNG só são permitidos após a homologação oficial pela Federação.');
        return;
      }

      if (!isDownloadUnlockedForCurrentAthlete()) {
        openCpfDownloadGateModal('png');
        return;
      }

      executeDownloadCardPng();
    });

    document.getElementById('btnPrintCard').addEventListener('click', () => {
      const athlete = window._currentSearchedAthlete;
      const upperStatus = (athlete && athlete.status ? athlete.status : 'PENDENTE').toUpperCase().trim();
      if (upperStatus !== 'HOMOLOGADO' && upperStatus !== 'REGULAR') {
        alert('⚠️ ATENÇÃO: Esta carteira digital está com HOMOLOGAÇÃO PENDENTE.\n\nA impressão da carteira em PDF é bloqueada até a validação e homologação oficial pela Federação.');
        return;
      }

      if (!isDownloadUnlockedForCurrentAthlete()) {
        openCpfDownloadGateModal('print');
        return;
      }

      executePrintCard();
    });

    function executeDownloadCardPng() {
      const card = document.getElementById('athleteCredentialCard');
      const athleteName = document.getElementById('cardBadgeName').textContent || 'Atleta';
      if (typeof html2canvas === 'undefined') {
        alert('Falha ao inicializar o motor de geração gráfica (html2canvas).');
        return;
      }
      html2canvas(card, {
        scale: 3,
        backgroundColor: null
      }).then(canvas => {
        const a = document.createElement('a');
        a.download = `Carteira_FootTable_${athleteName.replace(/\s+/g, '_')}.png`;
        a.href = canvas.toDataURL('image/png');
        a.click();
      });
    }

    function executePrintCard() {
      window.print();
    }

    // Configuração de Eventos do Input de CPF do Modal
    document.addEventListener('DOMContentLoaded', () => {
      const inputCpfGate = document.getElementById('inputCpfDownloadGate');
      if (inputCpfGate) {
        inputCpfGate.addEventListener('input', (e) => {
          e.target.value = formatCpfMask(e.target.value);
        });
        inputCpfGate.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            confirmCpfAndUnlockDownload();
          }
        });
      }

      const modalGate = document.getElementById('modalCpfDownloadGate');
      if (modalGate) {
        modalGate.addEventListener('click', (e) => {
          if (e.target === modalGate) {
            closeCpfDownloadGateModal();
          }
        });
      }

      function abrirFotoTamanhoRealPublica() {
      const modal = document.getElementById('modalFotoTamanhoRealPublica');
      const img = document.getElementById('fotoTamanhoRealPublicaImg');
      const title = document.getElementById('fotoTamanhoRealPublicaTitle');
      const dims = document.getElementById('fotoTamanhoRealPublicaDims');
      if (!modal || !img) return;

      const cardImg = document.getElementById('cardBadgePhoto');
      const targetUrl = (window._currentSearchedAthlete && (window._currentSearchedAthlete.foto_completa || window._currentSearchedAthlete.foto))
        || (cardImg && cardImg.src ? cardImg.src : '');
      if (!targetUrl || targetUrl.includes('data:image/svg+xml')) {
        return;
      }

      img.src = targetUrl;
      const atName = (window._currentSearchedAthlete && window._currentSearchedAthlete.nome) ? window._currentSearchedAthlete.nome : 'Atleta Oficial';
      if (title) title.textContent = `Foto Oficial: ${atName}`;
      img.onload = () => {
        if (dims) dims.textContent = `Resolução: ${img.naturalWidth} x ${img.naturalHeight} px (Proporção Original)`;
      };
      modal.classList.remove('hidden');
    }

    function fecharFotoTamanhoRealPublica() {
      const modal = document.getElementById('modalFotoTamanhoRealPublica');
      if (modal) modal.classList.add('hidden');
    }
    window.abrirFotoTamanhoRealPublica = abrirFotoTamanhoRealPublica;
    window.fecharFotoTamanhoRealPublica = fecharFotoTamanhoRealPublica;

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          if (typeof fecharFotoTamanhoRealPublica === 'function') fecharFotoTamanhoRealPublica();
          const m = document.getElementById('modalCpfDownloadGate');
          if (m && !m.classList.contains('hidden')) {
            closeCpfDownloadGateModal();
          }
        }
      });
    });

    /* =======================================================
       APLICAR PERSONALIZAÇÃO DE LAYOUT DA CARTEIRA VINCULADO AO BANCO DE DADOS
       Lê os elementos da tabela configuracoes ('carteira_studio_layout')
       ou do cache local ('fpeft_studio_layout_data') e aplica
       perfeitamente as posições geométricas no #consulta
       ======================================================= */
    async function applySavedBadgeLayout() {
      let layoutData = null;
      try {
        const local = localStorage.getItem('fpeft_studio_layout_data');
        if (local) layoutData = JSON.parse(local);
      } catch (e) {}

      let db1Layout = null;
      let db2Layout = null;

      const fetchPromises = [];

      if (typeof supabaseClient !== 'undefined' && supabaseClient) {
        fetchPromises.push(
          supabaseClient
            .from('configuracoes')
            .select('*')
            .eq('chave', 'carteira_studio_layout')
            .maybeSingle()
            .then(({ data }) => {
              if (data && data.valor) {
                const parsed = typeof data.valor === 'string' ? JSON.parse(data.valor) : data.valor;
                if (parsed && (parsed.elements || parsed.version)) {
                  parsed.updated_at = parsed.updated_at || data.updated_at || '1970-01-01T00:00:00Z';
                  db1Layout = parsed;
                }
              }
            })
            .catch(() => null)
        );
      }

      if (typeof supabaseSecondaryClient !== 'undefined' && supabaseSecondaryClient) {
        fetchPromises.push(
          safeSupabaseCall(
            supabaseSecondaryClient
              .from('configuracoes')
              .select('*')
              .eq('chave', 'carteira_studio_layout')
              .maybeSingle(),
            2500
          )
            .then(({ data: secData }) => {
              if (secData && secData.valor) {
                const parsed = typeof secData.valor === 'string' ? JSON.parse(secData.valor) : secData.valor;
                if (parsed && (parsed.elements || parsed.version)) {
                  parsed.updated_at = parsed.updated_at || secData.updated_at || '1970-01-01T00:00:00Z';
                  db2Layout = parsed;
                }
              }
            })
            .catch(() => null)
        );
      }

      if (fetchPromises.length > 0) {
        try {
          await Promise.allSettled(fetchPromises);
        } catch (e) {}
      }

      // Escolhe o layout mais recente entre os dois bancos (ou o disponível)
      if (db1Layout && db2Layout) {
        const t1 = new Date(db1Layout.updated_at || 0).getTime();
        const t2 = new Date(db2Layout.updated_at || 0).getTime();
        layoutData = t2 >= t1 ? db2Layout : db1Layout;
      } else if (db2Layout) {
        layoutData = db2Layout;
      } else if (db1Layout) {
        layoutData = db1Layout;
      }

      if (layoutData) {
        try {
          localStorage.setItem('fpeft_studio_layout_data', JSON.stringify(layoutData));
        } catch (e) {}
      }

      const card = document.getElementById('athleteCredentialCard');
      if (!card) return;

      if (layoutData && layoutData.customImageUrl) {
        card.style.backgroundImage = `url('${layoutData.customImageUrl}')`;
      }

      if (!layoutData || !Array.isArray(layoutData.elements)) return;

      const CARD_W = 1050;
      const CARD_H = 662;

      layoutData.elements.forEach(item => {
        let el = null;
        if (item.id === 'field-foto' || item.type === 'photo') {
          el = document.getElementById('cardBadgePhotoBox');
        } else if (item.targetKey === 'federado' || item.id === 'field-federado') {
          el = document.getElementById('cardBadgeCodeBox');
        } else if (item.targetKey === 'nome' || item.id === 'field-nome') {
          el = document.getElementById('cardBadgeNameBox');
        } else if (item.targetKey === 'cpf' || item.id === 'field-cpf') {
          el = document.getElementById('cardBadgeCPFBox');
        } else if (item.targetKey === 'nasc' || item.id === 'field-nasc') {
          el = document.getElementById('cardBadgeBirthBox');
        } else if (item.targetKey === 'municipio' || item.id === 'field-municipio') {
          el = document.getElementById('cardBadgeCityBox');
        } else if (item.targetKey === 'fone' || item.id === 'field-fone') {
          el = document.getElementById('cardBadgePhoneBox');
        } else if (item.targetKey === 'modalidade' || item.id === 'field-modalidade') {
          el = document.getElementById('cardBadgeModalityBox');
        } else if (item.targetKey === 'categoria' || item.id === 'field-categoria') {
          el = document.getElementById('cardBadgeCategoryBox');
        } else if (item.type === 'qrcode' || item.targetKey === 'qr' || item.id === 'field-qrcode') {
          el = document.getElementById('cardBadgeQrContainer');
        } else if (item.targetKey === 'validade' || item.id === 'field-validade') {
          el = document.getElementById('cardBadgeValidityBox');
        } else if (item.type === 'text-line' || item.targetKey === 'assinatura' || item.id === 'field-assinatura') {
          el = document.getElementById('cardBadgeSignatureBox');
        }

        if (el && item.x !== undefined && item.y !== undefined) {
          el.style.left = `${(item.x / CARD_W) * 100}%`;
          el.style.top = `${(item.y / CARD_H) * 100}%`;
          if (item.width) el.style.width = `${(item.width / CARD_W) * 100}%`;
          if (item.height) el.style.height = `${(item.height / CARD_H) * 100}%`;
          if (item.borderRadius !== undefined) el.style.borderRadius = `${item.borderRadius}px`;
          if (item.backgroundColor && el.id !== 'cardBadgePhotoBox' && el.id !== 'cardBadgeSignatureBox') {
            el.style.backgroundColor = item.backgroundColor;
          }
          if (item.textColor) {
            const innerText = el.querySelector('div[id^="cardBadge"], span[id^="cardBadge"]');
            if (innerText) innerText.style.color = item.textColor;
          }
          if (item.labelTag) {
            const topLabel = el.querySelector('.field-top-label');
            if (topLabel && item.targetKey !== 'nasc') {
              topLabel.textContent = item.labelTag;
            }
          }
        }
      });
    }

    /* =======================================================
       SINCRONIZAÇÃO EM TEMPO REAL NA NUVEM (SUPABASE & BROADCAST)
       Atualiza instantaneamente a carteira no #consulta quando
       o administrador salva alterações no Studio
       ======================================================= */
    let _indexRealtimeChannel = null;
    function initIndexCloudRealtime() {
      if (typeof supabaseClient !== 'undefined' && supabaseClient && !_indexRealtimeChannel) {
        try {
          _indexRealtimeChannel = supabaseClient
            .channel('realtime_public_carteira_layout')
            .on('postgres_changes', {
              event: '*',
              schema: 'public',
              table: 'configuracoes',
              filter: 'chave=eq.carteira_studio_layout'
            }, (payload) => {
              if (payload.new && payload.new.valor) {
                try {
                  const parsed = typeof payload.new.valor === 'string' ? JSON.parse(payload.new.valor) : payload.new.valor;
                  if (parsed) {
                    localStorage.setItem('fpeft_studio_layout_data', JSON.stringify(parsed));
                    applySavedBadgeLayout();
                  }
                } catch (e) {}
              }
            })
            .subscribe();
        } catch (e) {}
      }

      try {
        if (window.BroadcastChannel) {
          const bc1 = new BroadcastChannel('fpeft_studio_design_channel');
          bc1.onmessage = (ev) => {
            if (ev.data && (ev.data.type === 'STUDIO_DESIGN_UPDATED' || ev.data.payload)) {
              if (ev.data.payload) {
                localStorage.setItem('fpeft_studio_layout_data', JSON.stringify(ev.data.payload));
              }
              applySavedBadgeLayout();
            }
          };
          const bc2 = new BroadcastChannel('fpeft_studio_sync');
          bc2.onmessage = (ev) => {
            if (ev.data) applySavedBadgeLayout();
          };
        }
      } catch (e) {}
    }

    window.addEventListener('storage', (e) => {
      if (e.key === 'pe_news_db' || e.key === 'pe_futmesa_news' || e.key === 'foot_table_news_db') {
        renderPublicNews(true);
      }
      if (e.key === 'pe_gallery_db') {
        renderPublicGallery();
      }
      if (e.key === 'pe_athletes_db' && !document.getElementById('publicBadgeResultArea').classList.contains('hidden')) {
        executePublicSearch();
      }
      if (e.key === 'pe_badge_layout_config' || e.key === 'fpeft_live_design_ping' || e.key === 'fpeft_studio_custom_elements' || e.key === 'fpeft_studio_layout_data') {
        applySavedBadgeLayout();
      }
    });
    window.addEventListener('pe_gallery_updated', renderPublicGallery);
    window.addEventListener('focus', () => {
      renderPublicNews(true);
      renderPublicGallery();
    });

    // Inicialização ao carregar página (com suporte a leitura automática de QR Code via URL)
    async function initIndexApp() {
      await initSupabase();
      renderPublicNews(true);
      renderPublicGallery();
      applySavedBadgeLayout();
      initIndexCloudRealtime();

      // Detecta leitura de QR Code via parâmetro de URL (?id=... / ?codigo=...)
      try {
        const urlParams = new URLSearchParams(window.location.search);
        const queryId = urlParams.get('id') || urlParams.get('codigo') || urlParams.get('federado') || urlParams.get('atleta');
        if (queryId) {
          const sanitized = String(queryId).replace(/\D/g, '').slice(0, 6);
          if (sanitized && sanitized.length === 6) {
            publicCodeInput.value = sanitized;
            await executePublicSearch();
            const resultArea = document.getElementById('publicBadgeResultArea');
            if (resultArea && !resultArea.classList.contains('hidden')) {
              resultArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          }
        }
      } catch (err) {
        console.warn('Erro ao processar parâmetro de URL:', err);
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initIndexApp);
    } else {
      initIndexApp();
    }

    function togglePublicMobileMenu() {
      const drawer = document.getElementById('publicMobileMenuDrawer');
      const icon = document.getElementById('publicMobileMenuIcon');
      if (!drawer) return;
      const isHidden = drawer.classList.contains('hidden');
      if (isHidden) {
        drawer.classList.remove('hidden');
        if (icon) icon.className = 'fa-solid fa-xmark text-sm';

        // Exclusivo para Mobile e Tablet: ao abrir o MENU, rolar suavemente a barra de rolagem para o topo / área do menu
        const isMobileOrTablet = window.innerWidth < 1024 || (window.matchMedia && window.matchMedia('(max-width: 1023px)').matches) || /Mobi|Android|iPhone|iPad|iPod|Tablet/i.test(navigator.userAgent || '');
        if (isMobileOrTablet) {
          try {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            if (document.documentElement) document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
            if (document.body) document.body.scrollTo({ top: 0, behavior: 'smooth' });
            if (typeof drawer.scrollIntoView === 'function') {
              drawer.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
          } catch (e) {
            window.scrollTo(0, 0);
          }
        }
      } else {
        drawer.classList.add('hidden');
        if (icon) icon.className = 'fa-solid fa-bars text-sm';
      }
    }
    window.togglePublicMobileMenu = togglePublicMobileMenu;
  </script>

  <!-- Aviso Institucional de Cookies (LGPD) -->
  <div id="cookieNoticeBanner" class="fixed bottom-4 left-4 right-4 max-w-2xl mx-auto z-50 bg-[#080c16]/95 border border-[#1c253b] rounded-2xl p-4 shadow-2xl backdrop-blur-md flex flex-col sm:flex-row items-center justify-between gap-4 transition-all duration-300 hidden">
    <div class="flex items-center gap-3">
      <div class="w-9 h-9 rounded-xl bg-pe-gold/10 border border-pe-gold/30 flex items-center justify-center text-pe-gold text-sm flex-shrink-0">
        <i class="fa-solid fa-cookie-bite"></i>
      </div>
      <p class="text-xs text-slate-300 leading-relaxed">
        Utilizamos cookies essenciais para garantir o funcionamento seguro deste portal institucional e a integridade de sua navegação, em estrita conformidade com a LGPD.
      </p>
    </div>
    <div class="flex items-center gap-3 w-full sm:w-auto flex-shrink-0">
      <a href="seguranca.html" class="text-xs text-slate-400 hover:text-pe-gold underline transition">Privacidade</a>
      <button onclick="acceptCookieConsent()" class="w-full sm:w-auto bg-pe-gold hover:bg-pe-goldHover text-black font-bold text-xs uppercase px-4 py-2 rounded-xl transition cursor-pointer shadow-md">
        Entendido
      </button>
    </div>
  </div>

  <script>
    function checkCookieConsent() {
      if (!localStorage.getItem('fpeft_cookie_consent')) {
        const el = document.getElementById('cookieNoticeBanner');
        if (el) el.classList.remove('hidden');
      }
    }
    function acceptCookieConsent() {
      localStorage.setItem('fpeft_cookie_consent', 'true');
      const el = document.getElementById('cookieNoticeBanner');
      if (el) el.classList.add('hidden');
    }
    document.addEventListener('DOMContentLoaded', checkCookieConsent);
  </script>
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
  <!-- MODAL: Leitura Completa da Matéria Oficial -->
  <div id="publicNewsModal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm hidden opacity-0 transition-opacity duration-300">
    <div class="bg-[#0b0f19] border border-white/15 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl transform scale-95 transition-transform duration-300" id="publicNewsModalCard">
      <!-- Topo Modal -->
      <div class="p-6 border-b border-white/10 flex items-start justify-between">
        <div class="pr-4">
          <div class="flex items-center gap-2 mb-2">
            <span id="pubModalCategory" class="px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider bg-blue-500/20 text-blue-400 border border-blue-500/30"></span>
            <span id="pubModalDate" class="text-xs text-slate-400 font-mono"></span>
          </div>
          <h3 id="pubModalTitle" class="text-xl sm:text-2xl font-oswald uppercase font-bold text-white leading-tight"></h3>
        </div>
        <button onclick="closePublicNewsModal()" class="text-slate-400 hover:text-white p-2 rounded-lg bg-dark-800 transition shrink-0 cursor-pointer">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <!-- Conteúdo com Scroll -->
      <div class="p-6 overflow-y-auto space-y-4 text-slate-300 text-sm leading-relaxed">
        <div id="pubModalImageContainer" class="hidden rounded-xl overflow-hidden mb-4 border border-white/10 max-h-72">
          <img id="pubModalImage" src="" alt="Capa" class="w-full h-full object-cover">
        </div>

        <p id="pubModalExcerpt" class="text-amber-200/90 font-medium text-base italic border-l-2 border-pe-gold pl-3 py-1 bg-amber-500/5 rounded-r-lg"></p>
        
        <div id="pubModalFullContent" class="space-y-3 whitespace-pre-line text-slate-300 text-sm leading-relaxed"></div>

        <div id="pubModalPdfArea" class="hidden pt-4 border-t border-white/10">
          <a id="pubModalPdfLink" href="#" target="_blank" class="inline-flex items-center gap-2 text-xs font-mono font-semibold px-4 py-2.5 rounded-xl bg-dark-800 hover:bg-dark-700 text-white border border-white/10 transition-colors">
            <i class="fa-solid fa-file-pdf text-red-400"></i>
            <span>Acessar Documento / PDF Oficial Anexo</span>
            <i class="fa-solid fa-arrow-up-right-from-square text-[10px] text-slate-400 ml-1"></i>
          </a>
        </div>
      </div>

      <!-- Rodapé Modal -->
      <div class="p-4 bg-dark-950/60 border-t border-white/10 flex justify-end">
        <button onclick="closePublicNewsModal()" class="px-5 py-2 rounded-xl text-xs font-bold text-slate-300 bg-dark-800 hover:bg-dark-700 transition-colors cursor-pointer">
          Fechar
        </button>
      </div>
    </div>
  </div>

  <!-- MODAL: Bloqueio de Segurança para Download da Carteira (Autenticação por CPF Completo) -->
  <!-- MODAL LIGHTBOX: FOTO OFICIAL DO ATLETA EM TAMANHO REAL -->
  <div id="modalFotoTamanhoRealPublica" class="fixed inset-0 z-[10001] hidden bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6" onclick="fecharFotoTamanhoRealPublica()">
    <div class="relative max-w-3xl max-h-[92vh] w-full bg-[#070e1d] border-2 border-pe-gold/80 rounded-3xl p-4 sm:p-6 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col items-center my-auto" onclick="event.stopPropagation()">
      <div class="w-full flex items-center justify-between pb-3 border-b border-[#1c253b] mb-3">
        <div class="flex items-center gap-2.5">
          <div class="w-7 h-7 rounded-lg bg-pe-gold/20 border border-pe-gold/50 flex items-center justify-center text-pe-gold text-xs">
            <i class="fa-solid fa-expand"></i>
          </div>
          <div>
            <h3 id="fotoTamanhoRealPublicaTitle" class="text-white font-oswald text-base sm:text-lg uppercase font-bold tracking-wide leading-tight">Foto Oficial do Atleta</h3>
            <span class="text-[9px] text-slate-400 font-mono">Visualização em alta resolução no tamanho real</span>
          </div>
        </div>
        <button type="button" onclick="fecharFotoTamanhoRealPublica()" class="text-slate-400 hover:text-white p-2 rounded-xl hover:bg-slate-800 transition cursor-pointer text-base">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div class="w-full flex-1 min-h-[220px] max-h-[65vh] overflow-auto flex items-center justify-center rounded-2xl bg-[#030712] p-2 sm:p-4 border border-pe-gold/30 shadow-inner">
        <img id="fotoTamanhoRealPublicaImg" src="" alt="Foto Tamanho Real" class="max-w-full max-h-[62vh] object-contain rounded-xl shadow-2xl transition" />
      </div>

      <div class="w-full pt-3 mt-3 border-t border-[#1c253b] flex flex-wrap items-center justify-between gap-2 text-xs">
        <span id="fotoTamanhoRealPublicaDims" class="font-mono text-[10px] text-pe-gold font-bold bg-pe-gold/10 px-2.5 py-1 rounded-lg border border-pe-gold/30">Dimensões Originais</span>
        <button type="button" onclick="fecharFotoTamanhoRealPublica()" class="px-4 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-bold transition cursor-pointer">
          Fechar
        </button>
      </div>
    </div>
  </div>

  <div id="modalCpfDownloadGate" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md hidden opacity-0 transition-opacity duration-300">
    <div id="modalCpfDownloadGateCard" class="bg-[#0b0f19] border border-pe-gold/40 rounded-2xl max-w-md w-full overflow-hidden flex flex-col shadow-2xl transform scale-95 transition-transform duration-300 relative text-white">
      <!-- Topo Modal -->
      <div class="p-6 border-b border-white/10 flex items-start justify-between bg-dark-950/40">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-pe-gold/10 border border-pe-gold/40 flex items-center justify-center text-pe-gold text-lg shrink-0">
            <i class="fa-solid fa-shield-halved"></i>
          </div>
          <div>
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-pe-gold block">Autenticação de Segurança (LGPD)</span>
            <h3 class="text-lg font-oswald uppercase font-bold text-white leading-tight">Liberar Emissão da Carteira</h3>
          </div>
        </div>
        <button type="button" onclick="closeCpfDownloadGateModal()" class="text-slate-400 hover:text-white p-2 rounded-lg bg-dark-800 transition shrink-0 cursor-pointer" aria-label="Fechar modal">
          <i class="fa-solid fa-xmark text-lg"></i>
        </button>
      </div>

      <!-- Conteúdo do Modal -->
      <div class="p-6 space-y-4">
        <!-- Caixa de Informação do Atleta -->
        <div class="p-3 bg-dark-900/80 border border-white/10 rounded-xl flex items-center justify-between text-xs">
          <div>
            <span class="text-slate-400 text-[11px] block">Atleta Selecionado:</span>
            <strong id="cpfGateAthleteName" class="text-white font-semibold text-sm">---</strong>
          </div>
          <span id="cpfGateAthleteCode" class="px-2.5 py-1 bg-pe-gold/20 text-pe-gold border border-pe-gold/30 rounded-lg font-mono font-bold text-xs">#000000</span>
        </div>

        <p class="text-slate-300 text-xs leading-relaxed">
          Para proteger a privacidade do atleta e cumprir as diretrizes da LGPD, informe o <strong>CPF completo cadastrado</strong> para desbloquear o download e a impressão oficial da carteira digital.
        </p>

        <!-- Campo de Input do CPF com máscara -->
        <div class="space-y-1.5">
          <label for="inputCpfDownloadGate" class="text-xs font-semibold text-slate-300 flex items-center justify-between">
            <span>CPF Completo do Atleta:</span>
            <span class="text-[10px] text-slate-400 font-mono">11 dígitos</span>
          </label>
          <div class="relative">
            <input 
              id="inputCpfDownloadGate" 
              type="text" 
              inputmode="numeric" 
              maxlength="14" 
              placeholder="000.000.000-00" 
              autocomplete="off"
              class="w-full bg-[#070a13] border border-slate-700 focus:border-pe-gold rounded-xl px-4 py-3 text-center text-lg font-mono tracking-widest text-pe-gold font-bold outline-none transition focus:ring-2 focus:ring-pe-gold/20"
            />
          </div>
        </div>

        <!-- Mensagem de Feedback / Erro -->
        <div id="cpfGateFeedback" class="hidden p-3 rounded-xl text-xs transition"></div>
      </div>

      <!-- Rodapé do Modal -->
      <div class="p-4 bg-dark-950/80 border-t border-white/10 flex items-center justify-end gap-3">
        <button type="button" onclick="closeCpfDownloadGateModal()" class="px-4 py-2.5 rounded-xl text-xs font-bold text-slate-300 hover:text-white bg-dark-800 hover:bg-dark-700 transition cursor-pointer">
          Cancelar
        </button>
        <button type="button" id="btnConfirmCpfDownload" onclick="confirmCpfAndUnlockDownload()" class="px-5 py-2.5 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-pe-gold hover:bg-pe-goldHover text-pe-dark transition shadow flex items-center gap-2 cursor-pointer">
          <i class="fa-solid fa-lock-open text-xs"></i>
          <span>Confirmar e Liberar</span>
        </button>
      </div>
    </div>
  </div>

</body>
</html>