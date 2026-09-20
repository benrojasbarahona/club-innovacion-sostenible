# Club de Innovación Sostenible UACh

Sitio estático (Vite + React) publicado en GitHub Pages.

## Desarrollo local

```bash
npm install
npm run dev
```

## Imágenes

Las imágenes del sitio viven en `public/imagenes-club/` (y los documentos en
`public/documentos/`), versionadas en el repo. Están en formato **WebP**, con
un máximo de 1800px por lado, para que el sitio cargue rápido.

Para agregar una imagen nueva, conviértela a WebP antes de subirla. En macOS
basta con Terminal, sin instalar nada:

```bash
sips -s format webp foto.jpg --out foto.webp
```

Déjala en `public/imagenes-club/` (o `public/documentos/`) y referencia la ruta
en el código con el helper `withBase()` de `src/lib/paths.js`, por ejemplo:
`withBase('imagenes-club/galeria/nueva-foto.webp')`.

Si la agregas a la galería (`src/data/gallery.js`), anota el `width` y `height`
reales de la imagen: el visor a pantalla completa los usa para reservar el
espacio correcto.

## Despliegue (GitHub Pages)

El workflow `.github/workflows/deploy.yml` construye el sitio con
`npm run build` y lo publica en GitHub Pages en cada push a `main`.

Configuración única en el repo (Settings → Pages): en **Build and
deployment → Source** selecciona **GitHub Actions**.

El sitio queda disponible en
https://cisuach.github.io/club-innovacion-sostenible/

El campo **Custom domain** de Settings → Pages debe quedar vacío mientras no
exista un dominio propio con su DNS apuntando a GitHub: si tiene un dominio
que no resuelve, GitHub redirige el sitio hacia él y queda inaccesible. Si
algún día se configura uno, ajusta además `base` en `vite.config.js` a `/`.

## Formulario de contacto

El sitio es 100% estático (sin backend), por lo que el antiguo formulario de
contacto (Vercel Function + Resend) fue removido. La sección de contacto
muestra el correo y la ubicación del club, con un botón `mailto:`.
