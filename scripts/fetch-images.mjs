// Descarga a public/imagenes-club (y public/documentos) las imágenes que hoy
// vive en Supabase Storage, para que el sitio quede 100% estático y las
// imágenes viajen versionadas en el repo.
//
// Uso:
//   node scripts/fetch-images.mjs
//
// Este sandbox de Claude Code no tiene salida a supabase.co, así que este
// script está pensado para correr en tu máquina o en el workflow de GitHub
// Actions ".github/workflows/fetch-images.yml" (Actions > Run workflow),
// que sí tiene acceso a internet.

import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = join(__dirname, '..', 'public');
const SUPABASE_BASE = 'https://yvucnogpwegdmxgeeyjw.supabase.co/storage/v1/object/public';

// remote: ruta dentro del bucket público de Supabase
// local: ruta destino relativa a /public
const FILES = [
  // logos
  { remote: 'logos/logo_blanco.png', local: 'imagenes-club/logos/logo_blanco.png' },
  { remote: 'logos/logo_morado.png', local: 'imagenes-club/logos/logo_morado.png' },
  { remote: 'logos/logo-generico.png', local: 'imagenes-club/logos/logo-generico.png' },

  // galería / edificio
  { remote: 'galeria/cis-uach-82.jpg', local: 'imagenes-club/galeria/cis-uach-82.jpg' },
  { remote: 'galeria/actividad-encuentro.jpg', local: 'imagenes-club/galeria/actividad-encuentro.jpg' },
  { remote: 'galeria/actividad-0740.jpg', local: 'imagenes-club/galeria/actividad-0740.jpg' },
  { remote: 'galeria/actividad-0745.jpg', local: 'imagenes-club/galeria/actividad-0745.jpg' },
  { remote: 'galeria/actividad-0760.jpg', local: 'imagenes-club/galeria/actividad-0760.jpg' },
  { remote: 'galeria/actividad-0817.jpg', local: 'imagenes-club/galeria/actividad-0817.jpg' },
  { remote: 'galeria/actividad-1030.jpg', local: 'imagenes-club/galeria/actividad-1030.jpg' },
  { remote: 'galeria/actividad-1035.jpg', local: 'imagenes-club/galeria/actividad-1035.jpg' },
  { remote: 'galeria/actividad-1047.jpg', local: 'imagenes-club/galeria/actividad-1047.jpg' },
  { remote: 'galeria/actividad-2443.jpg', local: 'imagenes-club/galeria/actividad-2443.jpg' },
  { remote: 'galeria/actividad-5469.jpg', local: 'imagenes-club/galeria/actividad-5469.jpg' },
  { remote: 'galeria/actividad-6009.jpg', local: 'imagenes-club/galeria/actividad-6009.jpg' },
  { remote: 'galeria/actividad-6012.jpg', local: 'imagenes-club/galeria/actividad-6012.jpg' },
  { remote: 'galeria/actividad-6287.jpg', local: 'imagenes-club/galeria/actividad-6287.jpg' },
  {
    remote: 'galeria/201103_W_P_Edificio-14K_Foto-de-portada.jpg',
    local: 'imagenes-club/galeria/201103_W_P_Edificio-14K_Foto-de-portada.jpg',
  },
  { remote: 'galeria/ED_14K_AR_WES_84.jpg', local: 'imagenes-club/galeria/ED_14K_AR_WES_84.jpg' },
  { remote: 'galeria/ED_14K_AR_WES_219.jpg', local: 'imagenes-club/galeria/ED_14K_AR_WES_219.jpg' },
  { remote: 'galeria/hall-central.jpg', local: 'imagenes-club/galeria/hall-central.jpg' },
  { remote: 'galeria/placeholder-persona.jpg', local: 'imagenes-club/galeria/placeholder-persona.jpg' },

  // mentores
  { remote: 'mentores/veronika_fischer.png', local: 'imagenes-club/mentores/veronika_fischer.png' },
  { remote: 'mentores/joaquin_contreras.png', local: 'imagenes-club/mentores/joaquin_contreras.png' },
  { remote: 'mentores/jacob_arredondo.png', local: 'imagenes-club/mentores/jacob_arredondo.png' },
  { remote: 'mentores/robinson_soto.png', local: 'imagenes-club/mentores/robinson_soto.png' },
  { remote: 'mentores/sebastian_antiman.png', local: 'imagenes-club/mentores/sebastian_antiman.png' },
  { remote: 'mentores/francisco_videla.png', local: 'imagenes-club/mentores/francisco_videla.png' },
  { remote: 'mentores/vicente_pareja.png', local: 'imagenes-club/mentores/vicente_pareja.png' },

  // coordinadores
  { remote: 'coordinadores/daniela.jpg', local: 'imagenes-club/coordinadores/daniela.jpg' },
  { remote: 'coordinadores/benjamin.jpg', local: 'imagenes-club/coordinadores/benjamin.jpg' },
  { remote: 'coordinadores/sady.png', local: 'imagenes-club/coordinadores/sady.png' },

  // colaboradores
  { remote: 'colaboradores/global_shapers.png', local: 'imagenes-club/colaboradores/global_shapers.png' },
  { remote: 'colaboradores/municipalidad_valdivia.png', local: 'imagenes-club/colaboradores/municipalidad_valdivia.png' },
  { remote: 'colaboradores/forum_economic.png', local: 'imagenes-club/colaboradores/forum_economic.png' },
  { remote: 'colaboradores/etm.png', local: 'imagenes-club/colaboradores/etm.png' },
  { remote: 'colaboradores/alianza_emprende.png', local: 'imagenes-club/colaboradores/alianza_emprende.png' },
  { remote: 'colaboradores/vc_group.png', local: 'imagenes-club/colaboradores/vc_group.png' },
  { remote: 'colaboradores/plastic_oceans.png', local: 'imagenes-club/colaboradores/plastic_oceans.png' },
  { remote: 'colaboradores/founder_institute.png', local: 'imagenes-club/colaboradores/founder_institute.png' },

  // documentos
  { remote: 'documentos/estatutos.pdf', local: 'documentos/estatutos.pdf' },
];

const MAX_ATTEMPTS = 3;
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function download({ remote, local }) {
  const url = `${SUPABASE_BASE}/${remote}`;
  const destPath = join(PUBLIC_DIR, local);

  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt += 1) {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`HTTP ${response.status}`);

      const buffer = Buffer.from(await response.arrayBuffer());
      await mkdir(dirname(destPath), { recursive: true });
      await writeFile(destPath, buffer);
      console.log(`✓ ${local} (${(buffer.length / 1024).toFixed(0)} KB)`);
      return true;
    } catch (error) {
      const isLastAttempt = attempt === MAX_ATTEMPTS;
      console.error(`✗ ${remote} — intento ${attempt}/${MAX_ATTEMPTS}: ${error.message}`);
      if (isLastAttempt) return false;
      await sleep(1500 * attempt);
    }
  }
  return false;
}

console.log(`Descargando ${FILES.length} archivos desde Supabase Storage...\n`);

let failures = 0;
for (const file of FILES) {
  const ok = await download(file);
  if (!ok) failures += 1;
}

console.log(`\nListo. ${FILES.length - failures}/${FILES.length} archivos descargados.`);
if (failures > 0) {
  console.error(`${failures} archivo(s) fallaron — revisa los nombres/rutas en el bucket de Supabase.`);
  process.exit(1);
}
