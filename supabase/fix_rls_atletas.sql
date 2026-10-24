-- =============================================================================
-- FEDERAÇÃO PERNAMBUCANA DE FOOT TABLE (FPEFT)
-- SCRIPT DE CORREÇÃO DE RLS PARA ATLETAS E CONFIGURAÇÕES NO SUPABASE
-- Execute este script no SQL Editor do Supabase (https://supabase.com/dashboard)
-- =============================================================================

-- 1. Permite que o Painel de Controle Oficial gerencie Atletas (Insert, Update, Delete)
DROP POLICY IF EXISTS "RLS_atletas_insert" ON public.atletas;
DROP POLICY IF EXISTS "RLS_atletas_update" ON public.atletas;
DROP POLICY IF EXISTS "RLS_atletas_delete" ON public.atletas;
DROP POLICY IF EXISTS "Permitir gerenciamento de atletas" ON public.atletas;

CREATE POLICY "Permitir gerenciamento de atletas"
ON public.atletas FOR ALL
TO anon, authenticated, service_role
USING (true)
WITH CHECK (true);

-- 2. Permite que o Painel salve configurações e layouts do Studio na nuvem
DROP POLICY IF EXISTS "RLS_configuracoes_modify" ON public.configuracoes;
DROP POLICY IF EXISTS "Permitir gerenciamento de configuracoes" ON public.configuracoes;

CREATE POLICY "Permitir gerenciamento de configuracoes"
ON public.configuracoes FOR ALL
TO anon, authenticated, service_role
USING (true)
WITH CHECK (true);
