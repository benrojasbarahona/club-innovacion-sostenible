import { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { fotosDelClub } from '../data/gallery.js';

function ClubGallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    if (!galleryRef.current) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      bgOpacity: 0.96,
      showHideAnimationType: 'zoom',
    });

    lightbox.on('beforeOpen', () => {
      const items = galleryRef.current?.querySelectorAll('a') ?? [];
      items.forEach(a => {
        const img = a.querySelector('img');
        if (img?.naturalWidth && !a.dataset.pswpWidth) {
          a.dataset.pswpWidth = img.naturalWidth;
          a.dataset.pswpHeight = img.naturalHeight;
        }
      });
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  return (
    <section
      id="galeria"
      className="overflow-hidden bg-[#06030f] py-20"
      aria-labelledby="gallery-title"
    >
      <div className="section-shell">
        <div className="mb-10">
          <p className="mb-3 text-[0.72rem] font-black uppercase tracking-[0.22em] text-orange-500">
            El club en acción
          </p>
          <h2 id="gallery-title" className="text-3xl font-black leading-tight text-white sm:text-4xl">
            Ideas, personas y experiencias
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/50">
            Un recorrido por las actividades, encuentros y espacios que forman nuestra comunidad.
          </p>
        </div>

        <div
          ref={galleryRef}
          className="columns-2 gap-3 sm:columns-3 lg:columns-4"
          aria-label={`Galería con ${fotosDelClub.length} fotografías del club`}
        >
          {fotosDelClub.map((foto) => (
            <figure
              key={foto.src}
              className="group mb-3 break-inside-avoid overflow-hidden rounded-xl border border-white/[0.07] bg-white/[0.03]"
            >
              <a
                href={foto.src}
                data-pswp-width={foto.width}
                data-pswp-height={foto.height}
                target="_blank"
                rel="noreferrer"
                className="block cursor-zoom-in"
                aria-label={`Ampliar: ${foto.alt}`}
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="w-full object-cover opacity-80 transition duration-500 group-hover:opacity-100 group-hover:scale-[1.02]"
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </figure>
          ))}
        </div>

        <p className="mt-4 text-xs text-white/30">
          {fotosDelClub.length} fotografías — haz clic en una para ampliarla.
        </p>
      </div>
    </section>
  );
}

export default ClubGallery;
