import { z } from 'zod';

/**
 * Schema de autenticação estrito - bloqueia campos extras não mapeados (Mass Assignment)
 */
export const LoginSchema = z.object({
  user: z.string().trim().min(3).max(100),
  password: z.string().min(1).max(128)
}).strict();

export type LoginInput = z.infer<typeof LoginSchema>;

/**
 * Schema de consulta de atletas - sanitiza código federado de 6 dígitos
 */
export const AtletaBuscaSchema = z.object({
  codigo: z.string().trim().regex(/^\d{1,6}$/, 'Código inválido')
}).strict();

export type AtletaBuscaInput = z.infer<typeof AtletaBuscaSchema>;

/**
 * Schema de operação administrativa - isola privilégios de alteração
 */
export const GestaoAtletaSchema = z.object({
  id: z.string().uuid().optional(),
  codigo: z.string().trim().regex(/^\d{6}$/),
  nome: z.string().trim().min(3).max(120),
  cpf: z.string().trim().regex(/^\d{3}\.\d{3}\.\d{3}\-\d{2}$|^\d{11}$/),
  modalidade: z.enum(['SOLO (INDIVIDUAL)', 'DUPLAS', 'EQUIPES']).default('SOLO (INDIVIDUAL)'),
  categoria: z.string().trim().max(50).default('ASPIRANTE'),
  clube: z.string().trim().max(100).default('FEDERAÇÃO PERNAMBUCANA'),
  municipio: z.string().trim().max(80).default('RECIFE / PE'),
  status: z.enum(['HOMOLOGADO', 'REGULAR', 'PENDENTE', 'SUSPENSO', 'DESABILITADO']).default('PENDENTE'),
  foto_url: z.string().max(350000).optional(),
  foto: z.string().max(350000).optional(),
  nascimento: z.string().trim().max(30).optional(),
  telefone: z.string().trim().max(30).optional(),
  federado: z.string().trim().max(50).optional(),
  validade: z.string().trim().max(20).optional()
}).strict();

export type GestaoAtletaInput = z.infer<typeof GestaoAtletaSchema>;

/**
 * Schema para alteração de status/homologação de atleta (isolado e estrito)
 */
export const StatusAtletaSchema = z.object({
  codigo: z.string().trim().regex(/^\d{1,10}$/),
  status: z.enum(['HOMOLOGADO', 'REGULAR', 'PENDENTE', 'SUSPENSO', 'DESABILITADO'])
}).strict();

export type StatusAtletaInput = z.infer<typeof StatusAtletaSchema>;

/**
 * Schema para exclusão segura de atleta no painel administrativo
 */
export const ExcluirAtletaSchema = z.object({
  codigo: z.string().trim().regex(/^\d{1,10}$/),
  action: z.literal('delete')
}).strict();

export type ExcluirAtletaInput = z.infer<typeof ExcluirAtletaSchema>;

/**
 * Utilitário seguro para validar entrada com Zod retornando mensagem genérica
 */
export function safeValidate<T>(schema: z.ZodSchema<T>, data: unknown): { success: true; data: T } | { success: false; error: string } {
  const result = schema.safeParse(data);
  if (!result.success) {
    // Retorna mensagem genérica para evitar expor detalhes da validação a atacantes
    return { success: false, error: 'Requisição inválida' };
  }
  return { success: true, data: result.data };
}
