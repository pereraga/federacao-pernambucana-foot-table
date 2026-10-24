import fs from 'node:fs';

const content = fs.readFileSync('admin.html', 'utf8');

const checks = [
  { name: 'concluirCadastroEnviarBanco has atletas_editar guard', test: content.includes("function concluirCadastroEnviarBanco() {\n      if (!hasPermission('atletas_editar') && !hasPermission('*'))") },
  { name: 'handleSaveAthlete has atletas_editar guard', test: content.includes("function handleSaveAthlete(e) {\n      if (e && e.preventDefault) e.preventDefault();\n      if (!hasPermission('atletas_editar') && !hasPermission('*'))") },
  { name: 'saveOfficialLayoutToCloud has gestao_supabase guard', test: content.includes("function saveOfficialLayoutToCloud() {\n      if (!hasPermission('gestao_supabase') && !hasPermission('*'))") },
  { name: 'toggleDesignLock has gestao_supabase guard', test: content.includes("function toggleDesignLock(locked) {\n      if (!locked && !hasPermission('gestao_supabase') && !hasPermission('*'))") },
  { name: 'restoreOfficialElementPositions has gestao_supabase guard', test: content.includes("function restoreOfficialElementPositions() {\n      if (!hasPermission('gestao_supabase') && !hasPermission('*'))") },
  { name: 'openBatchImportModal has atletas_editar guard', test: content.includes("function openBatchImportModal() {\n      if (!hasPermission('atletas_editar') && !hasPermission('*'))") },
  { name: 'processBatchImport has atletas_editar guard', test: content.includes("function processBatchImport() {\n      if (!hasPermission('atletas_editar') && !hasPermission('*'))") },
  { name: 'handleFormSubmit has noticias guard', test: content.includes("if (!hasPermission('noticias_editar'))") && content.includes("if (!hasPermission('noticias_publicar'))") },
  { name: 'confirmDeleteNews has noticias_excluir guard', test: content.includes("function confirmDeleteNews() {\n      if (!pendingDeleteId) return;\n      if (!hasPermission('noticias_excluir'))") },
  { name: 'handleGalleryFormSubmit has permission guard', test: content.includes("function handleGalleryFormSubmit(e) {\n      if (e) e.preventDefault();\n      if (!hasPermission('noticias_publicar') && !hasPermission('noticias_editar') && !hasPermission('*'))") },
  { name: 'triggerQuickReplacePhoto has permission guard', test: content.includes("function triggerQuickReplacePhoto(id) {\n      if (!hasPermission('noticias_editar') && !hasPermission('*'))") },
  { name: 'confirmDeleteGalleryItem has permission guard', test: content.includes("function confirmDeleteGalleryItem() {\n      if (!pendingGalleryDeleteId) return;\n      if (!hasPermission('noticias_excluir') && !hasPermission('*'))") },
  { name: 'confirmResetGalleryToDefault has gestao_limpeza guard', test: content.includes("function confirmResetGalleryToDefault() {\n      if (!hasPermission('gestao_limpeza') && !hasPermission('*'))") },
  { name: 'handleSaveAdminConfig has gestao_supabase guard', test: content.includes("function handleSaveAdminConfig() {\n      if (!hasPermission('gestao_supabase') && !hasPermission('*'))") },
  { name: 'homologarAthleteModal has atletas_homologar guard', test: content.includes("function homologarAthleteModal(codigo) {\n      if (!hasPermission('atletas_homologar'))") },
  { name: 'checkAuth verifies institutional admin exists', test: content.includes("if (!isMasterUser && !currentAdmin) {") },
  { name: 'applyPermissionsToUI disables athlete form for controlled access', test: content.includes("canEditAtletas") && content.includes("athleteFormReadonlyNotice") }
];

let failed = 0;
checks.forEach(c => {
  if (c.test) {
    console.log('✔ PASS:', c.name);
  } else {
    console.log('❌ FAIL:', c.name);
    failed++;
  }
});

console.log(`\nResult: ${checks.length - failed}/${checks.length} checks passed.`);
if (failed > 0) process.exit(1);
