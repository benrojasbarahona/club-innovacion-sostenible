// GitHub Pages sirve el sitio bajo /<repo>/, así que cualquier ruta absoluta
// (imágenes, rutas internas) debe llevar el prefijo de Vite `base`.
export const BASE = import.meta.env.BASE_URL;

export const withBase = (path = '') => {
  const clean = path.replace(/^\/+/, '');
  return clean ? `${BASE}${clean}` : BASE;
};
