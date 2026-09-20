# Club de Innovación Sostenible UACh

Sitio estático (Vite + React) publicado en GitHub Pages.

## Desarrollo local

```bash
npm install
npm run dev
```

## Imágenes

Las imágenes del sitio viven en `public/imagenes-club/` (y los documentos en
`public/documentos/`), versionadas en el repo. Si esta carpeta está vacía,
descárgalas una vez desde el bucket de Supabase donde se subieron
originalmente:

```bash
npm run fetch-images
```

También puedes correrlo desde GitHub sin tocar tu máquina: pestaña
**Actions → Descargar imágenes a public/imagenes-club → Run workflow**. El
workflow descarga los archivos, los commitea directo en el repo y lanza el
deploy para publicarlos.

Para agregar imágenes nuevas, súbelas directamente a `public/imagenes-club/`
(o `public/documentos/`) y referencia la ruta en el código con el helper
`withBase()` de `src/lib/paths.js`, por ejemplo:
`withBase('imagenes-club/galeria/nueva-foto.jpg')`.

## Despliegue (GitHub Pages)

El workflow `.github/workflows/deploy.yml` construye el sitio con
`npm run build` y lo publica en GitHub Pages en cada push a `main`.

Configuración única en el repo (Settings → Pages): en **Build and
deployment → Source** selecciona **GitHub Actions**.

El sitio queda disponible en
`https://<usuario>.github.io/club-innovacion-sostenible/`. Si usas un dominio
propio, ajusta `base` en `vite.config.js` a `/`.

## Formulario de contacto

El sitio es 100% estático (sin backend), por lo que el antiguo formulario de
contacto (Vercel Function + Resend) fue removido. La sección de contacto
muestra el correo y la ubicación del club, con un botón `mailto:`.
