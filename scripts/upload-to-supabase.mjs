import { createClient } from '@supabase/supabase-js'
import { readFileSync, readdirSync, statSync } from 'fs'
import { join, extname, basename } from 'path'

const SUPABASE_URL = 'https://yvucnogpwegdmxgeeyjw.supabase.co'
const SUPABASE_ANON_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

const MIME_TYPES = {
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.png': 'image/png',
  '.webp': 'image/webp',
  '.svg': 'image/svg+xml',
  '.pdf': 'application/pdf',
}

const PUBLIC_DIR = '/Users/benjaminbenrojasbarahona/Desktop/pagina club/club-innovacion-sostenible/.claude/worktrees/determined-dhawan-093a8e/public/imagenes-club'

const FILES = [
  // logos
  { local: 'logo-generico.png',   bucket: 'logos', remote: 'logo-generico.png' },
  { local: 'logo_blanco.png',     bucket: 'logos', remote: 'logo_blanco.png' },
  { local: 'logo_morado.png',     bucket: 'logos', remote: 'logo_morado.png' },
  // placeholders
  { local: 'placeholder-actividad.jpg', bucket: 'galeria', remote: 'placeholder-actividad.jpg' },
  { local: 'placeholder-edificio.jpg',  bucket: 'galeria', remote: 'placeholder-edificio.jpg' },
  { local: 'placeholder-persona.jpg',   bucket: 'galeria', remote: 'placeholder-persona.jpg' },
  // edificio / hero
  { local: '201103_W_P_Edificio-14K_Foto-de-portada.jpg', bucket: 'galeria', remote: '201103_W_P_Edificio-14K_Foto-de-portada.jpg' },
  { local: 'ED_14K_AR_WES_84.jpg',   bucket: 'galeria', remote: 'ED_14K_AR_WES_84.jpg' },
  { local: 'ED_14K_AR_WES_219.jpg',  bucket: 'galeria', remote: 'ED_14K_AR_WES_219.jpg' },
  { local: 'hall-central.jpg',       bucket: 'galeria', remote: 'hall-central.jpg' },
  // coordinadores
  { local: 'coordinadores/benjamin.jpg', bucket: 'coordinadores', remote: 'benjamin.jpg' },
  { local: 'coordinadores/daniela.jpg',  bucket: 'coordinadores', remote: 'daniela.jpg' },
]

// Add all galeria images dynamically
const galeriaDir = join(PUBLIC_DIR, 'galeria')
readdirSync(galeriaDir).forEach(file => {
  FILES.push({ local: `galeria/${file}`, bucket: 'galeria', remote: file })
})

async function upload({ local, bucket, remote }) {
  const filePath = join(PUBLIC_DIR, local)
  const ext = extname(local).toLowerCase()
  const contentType = MIME_TYPES[ext] || 'application/octet-stream'
  const fileBuffer = readFileSync(filePath)

  const { error } = await supabase.storage
    .from(bucket)
    .upload(remote, fileBuffer, { contentType, upsert: true })

  if (error) {
    console.error(`✗ ${bucket}/${remote} — ${error.message}`)
  } else {
    console.log(`✓ ${bucket}/${remote}`)
  }
}

console.log(`Subiendo ${FILES.length} archivos a Supabase Storage...\n`)
for (const file of FILES) {
  await upload(file)
}
console.log('\nListo.')
