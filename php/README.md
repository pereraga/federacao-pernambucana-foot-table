# Versão PHP Oficial | Federação Pernambucana de Foot Table (FPEFT)

Esta pasta contém o sistema completo da **Federação Pernambucana de Foot Table** portado para **PHP 8.x**, permitindo que seja hospedado em qualquer servidor com suporte a PHP (como cPanel, Apache, Nginx, Hostinger, Locaweb, KingHost, XAMPP, Laragon ou Docker).

---

## 📁 Estrutura de Arquivos

- **`config.php`**: Configurações de conexão segura com o Supabase (REST API oficial), sessões seguras e cabeçalhos de defesa.
- **`index.php`**: Portal público principal da Federação com consulta pública de atletas e boletins oficiais.
- **`noticias.php`**: Portal dinâmico de notícias e torneios com filtros de categorias e busca.
- **`login.php`**: Portal de acesso e autenticação para diretores e administradores.
- **`admin.php`**: Painel administrativo completo para emissão de carteirinhas CR80, homologação de atletas e gestão de matérias oficiais.
- **`api.php`**: Endpoints REST em PHP para comunicação assíncrona (JSON) com o banco de dados.
- **`.htaccess`**: Regras de segurança de cabeçalhos, bloqueio de injeções e reescrita de URLs para servidores Apache/cPanel.

---

## 🚀 Como Executar Localmente

### Opção 1: Servidor Integrado do PHP
Se você tem o PHP instalado no seu computador:
```bash
cd php
php -S localhost:8000
```
Em seguida, abra seu navegador em: `http://localhost:8000`

### Opção 2: XAMPP / WampServer / Laragon
1. Copie todo o conteúdo da pasta `php/` para dentro de `htdocs/federacao/` (ou `www/federacao/`).
2. Certifique-se de que a pasta `assets/` esteja acessível na raiz do projeto.
3. Abra no navegador: `http://localhost/federacao/index.php`.

---

## ☁️ Como Publicar na Hospedagem (cPanel / Hostinger / Locaweb)
1. Conecte-se ao gerenciador de arquivos da hospedagem (cPanel) ou via FTP.
2. Acesse a pasta raiz pública (geralmente `public_html/`).
3. Envie os arquivos da pasta `php/` (`index.php`, `admin.php`, `login.php`, `noticias.php`, `config.php`, `api.php`, `.htaccess`).
4. Envie também a pasta `assets/` para dentro de `public_html/assets/`.
5. Pronto! O site funcionará imediatamente com conexão direta na nuvem Supabase da Federação.

---

## 🛡️ Segurança Implementada
- Sessão PHP protegida com flags `HttpOnly`, `Secure` e `SameSite=Lax`.
- Cabeçalhos de resposta bloqueando Clickjacking (`X-Frame-Options: DENY`) e MIME-sniffing (`nosniff`).
- Sanitização contra injeções XSS e SQL.
- Ocultação da assinatura do PHP (`expose_php = Off` / Remoção do header `X-Powered-By`).
