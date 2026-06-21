import { useEffect, useRef } from 'react';
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/style.css';
import { fotosDelClub } from '../data/gallery.js';

function ClubGallery() {
  const galleryRef = useRef(null);

  useEffect(() => {
    const lightbox = new PhotoSwipeLightbox({
      gallery: galleryRef.current,
      children: 'a',
      pswpModule: () => import('photoswipe'),
      bgOpacity: 0.94,
      showHideAnimationType: 'zoom',
    });

    lightbox.init();
    return () => lightbox.destroy();
  }, []);

  const moveGallery = (direction) => {
    galleryRef.current?.scrollBy({
      left: direction * Math.min(window.innerWidth * 0.8, 880),
      behavior: 'smooth',
    });
  };

  return (
    <section
      id="galeria"
      className="overflow-hidden bg-[#06030f] py-20"
      aria-labelledby="gallery-title"
    >
      <div className="section-shell">
        <div className="mb-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
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

          <div className="flex gap-2" aria-label="Controles de la galería">
            <button
              type="button"
              onClick={() => moveGallery(-1)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-white/70 transition hover:border-orange-500/30 hover:bg-orange-500 hover:text-black"
              aria-label="Ver fotos anteriores"
            >
              <span aria-hidden="true">←</span>
            </button>
            <button
              type="button"
              onClick={() => moveGallery(1)}
              className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-white/70 transition hover:border-orange-500/30 hover:bg-orange-500 hover:text-black"
              aria-label="Ver fotos siguientes"
            >
              <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>

        <div
          ref={galleryRef}
          className="gallery-track grid grid-flow-col grid-rows-2 gap-3 overflow-x-auto pb-4"
          tabIndex="0"
          aria-label={`Galería con ${fotosDelClub.length} fotografías del club`}
        >
          {fotosDelClub.map((foto, index) => (
            <figure
              key={foto.src}
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.03] ${
                index % 7 === 0 ? 'gallery-item-wide' : ''
              }`}
            >
              <a
                href={foto.src}
                data-pswp-width={foto.width}
                data-pswp-height={foto.height}
                data-cropped="true"
                target="_blank"
                rel="noreferrer"
                className="block h-full w-full cursor-zoom-in"
                aria-label={`Ampliar: ${foto.alt}`}
              >
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="h-full w-full object-cover opacity-80 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
                  loading="lazy"
                  decoding="async"
                />
              </a>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
              <span className="pointer-events-none absolute bottom-3 right-3 grid h-9 w-9 place-items-center rounded-full border border-white/15 bg-black/45 text-lg text-white/80 opacity-0 backdrop-blur-sm transition group-hover:opacity-100" aria-hidden="true">
                +
              </span>
            </figure>
          ))}
        </div>

        <p className="mt-3 text-xs text-white/35">
          Desliza para recorrer las {fotosDelClub.length} fotografías y selecciona una para ampliarla.
        </p>
      </div>
    </section>
  );
}

export default ClubGallery;
