import { mentores } from '../data/mentors.js';

function MentorsNetwork({ onSchedule }) {
  const handleSchedule = () => {
    onSchedule('Solicitud registrada. Te contactaremos pronto para coordinar la mentoría.');
  };

  return (
    <section
      className="relative py-24 overflow-hidden"
      id="mentores"
      aria-labelledby="mentors-title"
    >
      {/* Dark purple gradient BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c0520] via-[#09041a] to-[#06030f]" />
      <div className="absolute inset-0 bg-gradient-to-r from-purple-900/[0.18] to-transparent pointer-events-none" />
      <div className="orb-1 pointer-events-none absolute -top-1/3 right-0 w-[600px] h-[600px] rounded-full bg-purple-900/25 blur-[130px]" />
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-40" />

      <div className="section-shell relative z-10">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-4">
            Acompañamiento
          </p>
          <h2
            id="mentors-title"
            className="text-4xl lg:text-5xl font-black text-white leading-tight"
          >
            Red de Mentores Club Innovación Sostenible
          </h2>
          <p className="mt-4 text-white/50 text-sm leading-relaxed">
            Conectamos estudiantes con personas mentoras en innovación, sostenibilidad,
            emprendimiento, tecnología, gestión de proyectos, impacto social, financiamiento,
            investigación, diseño, marketing y otras áreas clave.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {mentores.map((mentor, index) => (
            <article
              key={`${mentor.nombre}-${mentor.area}-${index}`}
              className="group flex flex-col rounded-2xl overflow-hidden bg-white/[0.04] border border-white/[0.08] hover:border-orange-500/20 transition-all duration-300"
            >
              {/* Image */}
              <div className="overflow-hidden h-48 bg-[#0d0825] shrink-0">
                <img
                  src={mentor.imagen}
                  alt={`Imagen de ${mentor.nombre}`}
                  className="w-full h-full object-cover opacity-45 group-hover:opacity-60 group-hover:scale-105 transition-all duration-500"
                />
              </div>

              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[0.68rem] font-black tracking-[0.14em] uppercase text-orange-400 mb-2">
                  {mentor.area}
                </p>
                <h3 className="font-bold text-white text-[0.92rem] mb-1.5 leading-snug">
                  {mentor.nombre}
                </h3>
                <p className="text-xs text-white/45 leading-relaxed mb-4 flex-1">
                  {mentor.especialidad}
                </p>

                <dl className="space-y-2.5 border-t border-white/[0.07] pt-4 mb-4">
                  <div>
                    <dt className="text-[0.62rem] font-bold text-purple-400/80 uppercase tracking-wider mb-0.5">
                      Teléfono
                    </dt>
                    <dd className="text-xs text-white/60">{mentor.telefono}</dd>
                  </div>
                  <div>
                    <dt className="text-[0.62rem] font-bold text-purple-400/80 uppercase tracking-wider mb-0.5">
                      Gmail
                    </dt>
                    <dd className="text-xs text-white/60 break-all">{mentor.email}</dd>
                  </div>
                </dl>

                <button
                  type="button"
                  onClick={handleSchedule}
                  className="w-full py-2.5 text-sm font-bold bg-orange-500 hover:bg-orange-400 text-black rounded-xl transition-all duration-200 hover:shadow-[0_6px_22px_rgba(249,161,9,0.3)]"
                >
                  Agendar
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MentorsNetwork;
