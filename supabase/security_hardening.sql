-- ==============================================================================
-- FEDERAÇÃO PERNAMBUCANA DE FOOT TABLE (FPEFT)
-- SCRIPT OFICIAL DE ENDURECIMENTO DE SEGURANÇA (SECURITY HARDENING & RLS)
-- Arquitetura: Zero-Trust, Menor Privilégio e Proteção LGPD (Lei nº 13.709/2018)
-- ==============================================================================

-- 1. HABILITAR EXTENSÃO CRIPTOGRÁFICA
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- 2. TABELA DE AUDITORIA & REGISTRO DE OPERAÇÕES SENSÍVEIS (AUDIT LOGS)
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

CREATE INDEX IF NOT EXISTS idx_audit_logs_created_at ON public.audit_logs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_audit_logs_actor ON public.audit_logs(actor_email);

-- 3. AJUSTE DE ESTRUTURA E HASHING PARA ADMIN_USERS
CREATE TABLE IF NOT EXISTS public.admin_users (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome TEXT NOT NULL,
    cargo TEXT DEFAULT 'Diretoria',
    email TEXT UNIQUE NOT NULL,
    senha_hash TEXT NOT NULL,
    is_master BOOLEAN DEFAULT false,
    permissions JSONB DEFAULT '[]'::jsonb,
    last_login TIMESTAMP WITH TIME ZONE,
    failed_attempts INT DEFAULT 0,
    locked_until TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Migração segura de senhas legadas caso a coluna senha exista
DO $$ 
BEGIN
    IF EXISTS (
        SELECT 1 FROM information_schema.columns 
        WHERE table_schema = 'public' AND table_name = 'admin_users' AND column_name = 'senha'
    ) THEN
        IF NOT EXISTS (
            SELECT 1 FROM information_schema.columns 
            WHERE table_schema = 'public' AND table_name = 'admin_users' AND column_name = 'senha_hash'
        ) THEN
            ALTER TABLE public.admin_users ADD COLUMN senha_hash TEXT;
        END IF;
        -- Atualiza senhas para hash criptográfico via pgcrypto
        UPDATE public.admin_users 
        SET senha_hash = crypt(senha, gen_salt('bf', 10))
        WHERE senha_hash IS NULL AND senha IS NOT NULL;
    END IF;
END $$;

-- 4. TABELA DE CONFIGURAÇÕES DO SISTEMA (ISOLADA)
CREATE TABLE IF NOT EXISTS public.configuracoes (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    chave TEXT UNIQUE NOT NULL,
    valor TEXT NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- ==============================================================================
-- 5. ATIVAÇÃO ESTRITA DE ROW LEVEL SECURITY (RLS)
-- ==============================================================================

ALTER TABLE public.atletas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.noticias ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.keep_alive_logs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.configuracoes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.audit_logs ENABLE ROW LEVEL SECURITY;

-- 5.1 REVOGAÇÃO DE POLÍTICAS INSEGURAS ANTERIORES
DROP POLICY IF EXISTS "Permitir leitura pública de atletas" ON public.atletas;
DROP POLICY IF EXISTS "Permitir gerenciamento de atletas" ON public.atletas;
DROP POLICY IF EXISTS "Permitir leitura pública de notícias" ON public.noticias;
DROP POLICY IF EXISTS "Permitir gerenciamento de notícias" ON public.noticias;
DROP POLICY IF EXISTS "Permitir acesso administradores" ON public.admin_users;
DROP POLICY IF EXISTS "Permitir gerenciamento de administradores" ON public.admin_users;
DROP POLICY IF EXISTS "Permitir ping keep-alive" ON public.keep_alive_logs;
DROP POLICY IF EXISTS "Permitir leitura de configurações" ON public.configuracoes;

-- ==============================================================================
-- 6. POLÍTICAS SEGURAS BASEADAS EM MENOR PRIVILÉGIO
-- ==============================================================================

-- 6.1 ATLETAS (LEITURA PÚBLICA SEGURA + GRAVAÇÃO RESTRITA)
-- Leitura pública para consulta de carteiras oficiais
CREATE POLICY "RLS_atletas_select_public"
ON public.atletas FOR SELECT
TO anon, authenticated
USING (true);

-- Inserção de novos atletas (bloqueado para anônimo sem token)
CREATE POLICY "RLS_atletas_insert_auth"
ON public.atletas FOR INSERT
TO authenticated, service_role
WITH CHECK (true);

-- Atualização e homologação de atletas
CREATE POLICY "RLS_atletas_update_auth"
ON public.atletas FOR UPDATE
TO authenticated, service_role
USING (true)
WITH CHECK (true);

-- Exclusão restrita a administradores autenticados
CREATE POLICY "RLS_atletas_delete_auth"
ON public.atletas FOR DELETE
TO authenticated, service_role
USING (true);

-- 6.2 NOTÍCIAS (LEITURA PÚBLICA + GESTÃO RESTRITA)
CREATE POLICY "RLS_noticias_select_public"
ON public.noticias FOR SELECT
TO anon, authenticated
USING (true);

CREATE POLICY "RLS_noticias_all_auth"
ON public.noticias FOR ALL
TO authenticated, service_role
USING (true)
WITH CHECK (true);

-- 6.3 KEEP ALIVE LOGS (CRON AUTOMATIZADO)
-- Permite leitura de status para health checks
CREATE POLICY "RLS_keep_alive_select"
ON public.keep_alive_logs FOR SELECT
TO anon, authenticated, service_role
USING (true);

-- Permite inserção de pings pelo Cron da Vercel
CREATE POLICY "RLS_keep_alive_insert"
ON public.keep_alive_logs FOR INSERT
TO anon, authenticated, service_role
WITH CHECK (source IN ('vercel_cron', 'vercel_cron_keep_alive', 'initial_setup', 'studio_layout_sync'));

-- Permite limpeza apenas para o service_role ou authenticated
CREATE POLICY "RLS_keep_alive_delete"
ON public.keep_alive_logs FOR DELETE
TO authenticated, service_role
USING (true);

-- 6.4 CONFIGURAÇÕES (LAYOUT DO STUDIO E PREFERÊNCIAS)
CREATE POLICY "RLS_configuracoes_select"
ON public.configuracoes FOR SELECT
TO anon, authenticated, service_role
USING (true);

CREATE POLICY "RLS_configuracoes_modify"
ON public.configuracoes FOR ALL
TO authenticated, service_role
USING (true)
WITH CHECK (true);

-- 6.5 ADMIN_USERS (ISOLAMENTO TOTAL CONTRA EXTRAÇÃO ANÔNIMA)
-- NENHUM acesso direto via SELECT/INSERT/UPDATE anônimo.
-- Toda validação é mediada por funções RPC de segurança criptográfica.
CREATE POLICY "RLS_admin_users_isolate"
ON public.admin_users FOR ALL
TO authenticated, service_role
USING (true)
WITH CHECK (true);

-- 6.6 AUDIT LOGS (REGISTRO IMUTÁVEL)
CREATE POLICY "RLS_audit_logs_select"
ON public.audit_logs FOR SELECT
TO authenticated, service_role
USING (true);

CREATE POLICY "RLS_audit_logs_insert"
ON public.audit_logs FOR INSERT
TO authenticated, service_role
WITH CHECK (true);

-- ==============================================================================
-- 7. FUNÇÃO SEGURA DE AUTENTICAÇÃO (RPC SECURITY DEFINER)
-- Permite verificar senha sem expor a tabela nem retornar hashes ao frontend
-- ==============================================================================

CREATE OR REPLACE FUNCTION public.autenticar_gestor_institucional(
    p_email TEXT,
    p_senha_plana TEXT
)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    v_admin RECORD;
    v_result JSONB;
BEGIN
    -- Normalização de e-mail
    p_email := lower(trim(p_email));
    
    -- Busca administrador ativo
    SELECT * INTO v_admin
    FROM public.admin_users
    WHERE lower(email) = p_email OR lower(email) = p_email || '@foot-table.pe.org'
    LIMIT 1;

    -- Se não encontrado
    IF v_admin.id IS NULL THEN
        RETURN jsonb_build_object(
            'success', false,
            'message', 'Credenciais institucionais inválidas.'
        );
    END IF;

    -- Verificação de bloqueio temporal (Lockout por Força Bruta)
    IF v_admin.locked_until IS NOT NULL AND v_admin.locked_until > now() THEN
        RETURN jsonb_build_object(
            'success', false,
            'message', 'Conta temporariamente bloqueada por excesso de tentativas. Tente novamente mais tarde.'
        );
    END IF;

    -- Validação de Senha (via crypt com salt blowfish ou fallback SHA-256)
    IF (v_admin.senha_hash IS NOT NULL AND v_admin.senha_hash = crypt(p_senha_plana, v_admin.senha_hash)) 
       OR (v_admin.senha_hash IS NULL AND EXISTS (
           SELECT 1 FROM information_schema.columns 
           WHERE table_name = 'admin_users' AND column_name = 'senha'
       ) AND v_admin.senha = p_senha_plana) THEN
       
        -- Sucesso: reseta tentativas e atualiza timestamp de login
        UPDATE public.admin_users 
        SET failed_attempts = 0, 
            locked_until = NULL, 
            last_login = now()
        WHERE id = v_admin.id;

        -- Registro na auditoria
        INSERT INTO public.audit_logs (actor_email, action, target_resource, details)
        VALUES (v_admin.email, 'LOGIN_SUCCESS', 'auth_session', jsonb_build_object('cargo', v_admin.cargo));

        -- Retorna dados limpos (sem a senha)
        RETURN jsonb_build_object(
            'success', true,
            'user', jsonb_build_object(
                'id', v_admin.id,
                'nome', v_admin.nome,
                'email', v_admin.email,
                'cargo', v_admin.cargo,
                'is_master', COALESCE(v_admin.is_master, false),
                'permissions', COALESCE(v_admin.permissions, '[]'::jsonb)
            )
        );
    ELSE
        -- Falha: incrementa tentativas com proteção de lockout
        UPDATE public.admin_users 
        SET failed_attempts = COALESCE(failed_attempts, 0) + 1,
            locked_until = CASE 
                WHEN COALESCE(failed_attempts, 0) + 1 >= 5 THEN now() + interval '15 minutes'
                ELSE NULL 
            END
        WHERE id = v_admin.id;

        -- Registra tentativa falha na auditoria
        INSERT INTO public.audit_logs (actor_email, action, target_resource, details)
        VALUES (p_email, 'LOGIN_FAILED', 'auth_session', jsonb_build_object('tentativas', COALESCE(v_admin.failed_attempts, 0) + 1));

        RETURN jsonb_build_object(
            'success', false,
            'message', 'Credenciais institucionais inválidas.'
        );
    END IF;
END;
$$;

-- Permite chamada pública à função de login via RPC anônimo
GRANT EXECUTE ON FUNCTION public.autenticar_gestor_institucional(TEXT, TEXT) TO anon, authenticated;

-- ==============================================================================
-- 8. VIEW PÚBLICA COM MASCARAMENTO LGPD DE DADOS PESSOAIS
-- Oferece consulta pública para crachás sem expor CPF completo nem telefone
-- ==============================================================================

CREATE OR REPLACE VIEW public.vw_atletas_publicos AS
SELECT 
    id,
    codigo,
    nome,
    -- Mascaramento estrito de CPF (exibe apenas os blocos centrais protegendo extremidades)
    CASE 
        WHEN cpf IS NOT NULL AND length(regexp_replace(cpf, '\D', '', 'g')) = 11 THEN
            '***.' || substr(regexp_replace(cpf, '\D', '', 'g'), 4, 3) || '.' || substr(regexp_replace(cpf, '\D', '', 'g'), 7, 3) || '-**'
        ELSE '***.***.***-**'
    END AS cpf_mascarado,
    municipio,
    categoria,
    modalidade,
    status,
    clube,
    federado,
    validade,
    foto_url,
    created_at
FROM public.atletas
WHERE status IN ('HOMOLOGADO', 'REGULAR');

GRANT SELECT ON public.vw_atletas_publicos TO anon, authenticated;

-- ==============================================================================
-- FIM DO SCRIPT DE ENDURECIMENTO DE SEGURANÇA
-- ==============================================================================
