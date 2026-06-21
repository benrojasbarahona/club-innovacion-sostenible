import { useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import { colaboradores } from '../data/collaborators.js';

const COLLABORATOR_AUTO_SCROLL_SPEED = 0.7;

function CollaboratorsCarousel() {
  const plugins = useMemo(
    () =>
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? []
        : [
            AutoScroll({
              speed: COLLABORATOR_AUTO_SCROLL_SPEED,
              stopOnInteraction: false,
              stopOnMouseEnter: true,
              stopOnFocusIn: true,
            }),
          ],
    []
  );

  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    plugins
  );

  return (
    <section
      id="colaboradores"
      className="relative py-24 bg-[#06030f] overflow-hidden"
      aria-labelledby="collaborators-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0618] via-[#06030f] to-[#06030f] pointer-events-none" />
      <div className="orb-3 pointer-events-none absolute top-1/2 -right-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-purple-900/20 blur-[120px]" />

      {/* Header */}
      <div className="section-shell relative z-10 mb-12">
        <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-4">
          Ecosistema de innovación
        </p>
        <h2
          id="collaborators-title"
          className="text-4xl lg:text-5xl font-black text-white leading-tight max-w-2xl"
        >
          Conoce a quienes han sido parte de nuestro proyecto
        </h2>
        <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-xl">
          A lo largo de nuestras actividades hemos conectado con personas, equipos e instituciones
          que han aportado experiencia, conocimiento y visión al ecosistema de innovación sostenible.
        </p>
      </div>

      {/* Carousel — full-width tape */}
      <div
        className="collaborators-viewport relative z-10"
        ref={emblaRef}
        aria-label="Carrusel de colaboradores"
      >
        <div className="collaborators-container">
          {[...colaboradores, ...colaboradores, ...colaboradores, ...colaboradores].map((c, i) => (
            <article key={`${c.nombre}-${i}`} className="collaborator-slide" aria-hidden={i >= colaboradores.length}>
              <div className="h-full rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.08] hover:border-orange-500/22 hover:bg-white/[0.06] transition-all duration-300 flex flex-col">
                {/* Logo area */}
                <div className="flex items-center justify-center h-32 bg-white/[0.02] border-b border-white/[0.06] px-6">
                  <img
                    src={c.imagen}
                    alt={`Logo de ${c.nombre}`}
                    className="max-h-14 w-auto object-contain opacity-55 hover:opacity-85 transition-opacity duration-300"
                    onError={(e) => {
                      e.currentTarget.src = 'https://yvucnogpwegdmxgeeyjw.supabase.co/storage/v1/object/public/logos/logo-generico.png';
                    }}
                  />
                </div>

                {/* Card body */}
                <div className="p-4 flex flex-col flex-1">
                  <span className="inline-block mb-2.5 px-2.5 py-1 text-[0.66rem] font-black tracking-[0.1em] uppercase bg-orange-500/[0.08] text-orange-400 border border-orange-500/[0.15] rounded-lg self-start">
                    {c.tipo}
                  </span>
                  <h3 className="text-sm font-bold text-white mb-1 leading-snug">{c.nombre}</h3>
                  <p className="text-xs text-purple-400/80 font-semibold mb-2">{c.rol}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{c.descripcion}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollaboratorsCarousel;
