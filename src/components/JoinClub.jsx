const steps = [
  {
    title: 'Conocer el club',
    text: 'Asiste a una instancia informativa para entender actividades, dinámica y objetivos.',
  },
  {
    title: 'Participar en actividades',
    text: 'Suma presencia en reuniones, talleres, charlas y sesiones de trabajo colaborativo.',
  },
  {
    title: 'Contactar al equipo',
    text: 'Escribe al club para resolver dudas, confirmar requisitos y conocer cupos disponibles.',
  },
  {
    title: 'Integrarse a proyectos o áreas de trabajo',
    text: 'Colabora con otras disciplinas en iniciativas con foco sostenible e impacto territorial.',
  },
];

function JoinClub() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      id="ser-parte"
      aria-labelledby="join-title"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0c0520] via-[#09041a] to-[#06030f]" />
      <div className="orb-2 pointer-events-none absolute -bottom-1/3 -left-1/4 w-[600px] h-[600px] rounded-full bg-purple-900/25 blur-[130px]" />
      <div className="absolute inset-0 grid-bg opacity-35 pointer-events-none" />

      <div className="section-shell relative z-10">
        <div className="grid lg:grid-cols-[400px_1fr] gap-14 items-start">

          {/* Left copy */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-4">
              Participa
            </p>
            <h2
              id="join-title"
              className="text-4xl lg:text-5xl font-black text-white leading-tight"
            >
              Cómo ser parte del club
            </h2>
            <p className="mt-5 text-white/50 text-sm leading-relaxed">
              Requisitos: ser estudiante de pregrado UACh y tener motivación y compromiso para
              participar activamente en al menos el 70% de las sesiones.
            </p>
            <a
              href="#contacto"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(249,161,9,0.35)] text-sm"
            >
              Quiero ser parte
            </a>
          </div>

          {/* Steps */}
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li
                key={step.title}
                className="flex gap-5 p-6 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-orange-500/18 hover:bg-white/[0.06] transition-all duration-300 group"
              >
                <div className="shrink-0 w-10 h-10 flex items-center justify-center rounded-xl bg-orange-500 text-black font-black text-sm">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-white mb-1.5 leading-snug">{step.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export default JoinClub;
