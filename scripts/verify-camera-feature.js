import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(ROOT_DIR, 'admin.html'), 'utf8');

const checks = [
  ['modalWebcamAthlete exists', html.includes('id="modalWebcamAthlete"')],
  ['webcamAthleteVideo exists', html.includes('id="webcamAthleteVideo"')],
  ['webcamAthleteSnapshotPreview exists', html.includes('id="webcamAthleteSnapshotPreview"')],
  ['webcamControlsLive exists', html.includes('id="webcamControlsLive"')],
  ['webcamControlsConfirm exists', html.includes('id="webcamControlsConfirm"')],
  ['Trash button exists in confirm', html.includes('discardAthleteWebcamSnapshot()') && html.includes('fa-trash-can')],
  ['Checkmark button exists in confirm', html.includes('acceptAthleteWebcamSnapshot()') && html.includes('fa-check')],
  ['Flip camera button exists', html.includes('flipAthleteCamera()') && html.includes('fa-camera-rotate')],
  ['applyAthletePhotoDataUrl updates photoTarget and inputs', html.includes('window.applyAthletePhotoDataUrl') && html.includes('athletePhotoVal')],
  ['applyAthletePhotoDataUrl syncs with supabase', html.includes('supabaseClient') && html.includes('update({ foto_url: compressedDataUrl')],
  ['Trocar button in athleteFormPhotoPreview', html.includes('openAthleteCameraSelector()') && html.includes('Trocar')],
  ['Excluir button in athleteFormPhotoPreview', html.includes('resetAthletePhoto()') && html.includes('fa-trash-can')]
];

let failed = false;
for (const [name, pass] of checks) {
  if (pass) {
    console.log('✔ PASS:', name);
  } else {
    console.log('✖ FAIL:', name);
    failed = true;
  }
}

if (failed) {
  process.exit(1);
} else {
  console.log('\nResult: All camera & photo replacement checks passed!');
}
