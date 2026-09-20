import { withBase } from '../lib/paths.js';

function Location() {
  return (
    <section
      className="relative py-24 bg-[#0a0618]"
      id="ubicacion"
      aria-labelledby="location-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#06030f] via-transparent to-[#06030f] pointer-events-none" />

      <div className="section-shell relative z-10">
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 lg:gap-16 items-center">

          {/* Content */}
          <div>
            <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-4">
              Ubicación
            </p>
            <h2
              id="location-title"
              className="text-4xl lg:text-5xl font-black text-white leading-tight"
            >
              Universidad Austral de Chile
            </h2>
            <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-md">
              El club se vincula con el Espacio 14K de la Facultad de Ciencias de la Ingeniería,
              Universidad Austral de Chile, en Valdivia, Región de Los Ríos.
            </p>

            <ul className="mt-8 space-y-3" aria-label="Detalles de ubicación">
              {['Campus Miraflores', 'Centro 14K', 'Valdivia, Región de Los Ríos'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-white/70 font-medium text-[0.92rem]">
                  <span className="w-1 h-5 rounded-full bg-orange-500 shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.55)] border border-white/[0.07]">
            <img
              src={withBase('imagenes-club/galeria/ED_14K_AR_WES_219.webp')}
              alt="Exterior del edificio 14K de la Universidad Austral de Chile"
              className="w-full h-72 lg:h-[400px] object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0618]/60 to-transparent" />
            <div
              className="absolute bottom-4 right-4 bg-[#06030f]/90 backdrop-blur-md border border-white/[0.1] rounded-xl px-4 py-3"
              aria-label="Referencia de ubicación"
            >
              <p className="text-xs font-bold text-white/80">Campus Miraflores · Centro 14K</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Location;
