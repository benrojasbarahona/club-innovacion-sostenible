import { coordinadores } from '../data/coordinators.js';

function Coordinators() {
  return (
    <section
      className="relative py-24 bg-[#0a0618]"
      id="coordinadores"
      aria-labelledby="coordinators-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/[0.08] to-transparent pointer-events-none" />

      <div className="section-shell relative z-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-4">
            Equipo
          </p>
          <h2
            id="coordinators-title"
            className="text-4xl lg:text-5xl font-black text-white leading-tight"
          >
            Coordinadores del club
          </h2>
          <p className="mt-4 text-white/50 text-sm leading-relaxed">
            Datos editables para mantener actualizado el equipo responsable de actividades, proyectos y comunidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-4xl mx-auto">
          {coordinadores.map((coordinator, index) => (
            <article
              key={`${coordinator.nombre}-${coordinator.cargo}-${index}`}
              className="group rounded-2xl overflow-hidden bg-white/[0.03] border border-white/[0.07] hover:border-orange-500/20 transition-all duration-300"
            >
              <div className="h-52 overflow-hidden bg-[#0d0825]">
                <img
                  src={coordinator.imagen}
                  alt={`Imagen de ${coordinator.nombre}`}
                  className="w-full h-full object-cover opacity-38 group-hover:opacity-52 transition-opacity duration-300"
                />
              </div>
              <div className="p-5">
                <p className="text-[0.68rem] font-black tracking-[0.14em] uppercase text-orange-400 mb-1.5">
                  {coordinator.cargo}
                </p>
                <h3 className="font-bold text-white text-[0.92rem] mb-1 leading-snug">
                  {coordinator.nombre}
                </h3>
                <p className="text-xs text-white/45 mb-3">{coordinator.carrera}</p>
                <a
                  href={`mailto:${coordinator.contacto}`}
                  className="text-xs text-purple-400/70 hover:text-orange-400 transition-colors duration-200 font-medium break-all"
                >
                  {coordinator.contacto}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Coordinators;
