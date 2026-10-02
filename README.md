# ☀️ Federação Pernambucana de Foot Table & FutMesa

Portal Oficial da Federação Pernambucana de Foot Table e Futebol de Mesa, homologação de eventos esportivos estaduais, carteirinha digital de atletas federados (consulta de 6 dígitos) e sincronização contínua com banco de dados Supabase na Vercel.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fpereraga%2Ffederacao-pernambucana-foot-table&env=SUPABASE_URL,SUPABASE_ANON_KEY&project-name=federacao-pernambucana-foot-table)

---

## ⚡ Sistema Anti-Pausa Automático do Supabase (Keep-Alive / Anti-AFK)

Para evitar que o plano gratuito do Supabase pause o banco de dados por inatividade após 7 dias, este projeto conta com **dupla proteção 100% automática**:

1. **Vercel Cron Job**:
   - Configurado no arquivo `vercel.json`.
   - Executa automaticamente todos os dias às 12:00 UTC a rota `/api/keep-alive`.
   - Faz uma leitura e gravação preventiva na tabela `keep_alive_logs`, mantendo o banco sempre ativo sem necessidade de intervenção manual.
2. **GitHub Actions Redundante**:
   - Configurado em `.github/workflows/keep-alive.yml`.
   - Dispara a cada 3 dias um pulso HTTP direto para o Supabase, garantindo que o banco permaneça ativo mesmo se houver manutenção na Vercel.

---

## 🗄️ Configuração do Supabase (Passo a Passo)

1. Acesse [database.new](https://database.new) ou seu painel no [Supabase](https://supabase.com).
2. Crie ou selecione o projeto com o nome desejado.
3. No menu lateral esquerdo, clique em **SQL Editor** (Ícone `>_`).
4. Abra o arquivo [`supabase/schema.sql`](supabase/schema.sql) deste projeto, copie todo o conteúdo e cole no SQL Editor do Supabase.
5. Clique no botão verde **Run**.
6. Pronto! As tabelas `atletas`, `noticias` e `keep_alive_logs` foram criadas com dados iniciais e políticas de segurança (RLS).
7. Vá em **Project Settings > API** e copie:
   - **Project URL** (`SUPABASE_URL`)
   - **anon public** (`SUPABASE_ANON_KEY`)

---

## 🚀 Conexão e Deploy na Vercel

1. Acesse [vercel.com/new](https://vercel.com/new) ou seu painel [vercel.com/pereraga](https://vercel.com/pereraga).
2. Importe o repositório **`pereraga/federacao-pernambucana-foot-table`**.
3. Em **Environment Variables**, adicione:
   - `SUPABASE_URL`: sua URL do Supabase
   - `SUPABASE_ANON_KEY`: sua chave pública do Supabase
4. Clique em **Deploy**.
5. O site estará no ar com HTTPS gratuito e o cron job ativado automaticamente!

---

## 🖼️ Fotos Originais & Galeria

As imagens oficiais do portal ficam na pasta:
`assets/images/`

Para substituir qualquer foto pelas originais enviadas, basta salvar as fotos nesta pasta com os nomes correspondentes ou adicioná-las e referenciá-las no `index.html`.
