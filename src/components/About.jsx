const motivations = [
  {
    title: 'Competencias en innovación',
    text: 'Herramientas y conocimientos prácticos para aplicar metodologías de innovación en proyectos colaborativos.',
  },
  {
    title: 'Diversidad y multidisciplinariedad',
    text: 'Participación de estudiantes de ingeniería y otras disciplinas para ampliar miradas y soluciones.',
  },
  {
    title: 'Proyectos sostenibles',
    text: 'Creación de iniciativas viables que aborden desafíos locales y regionales con posibilidad de prototipado.',
  },
];

function About() {
  return (
    <section
      className="relative py-24 bg-[#0a0618] overflow-hidden"
      id="sobre-nosotros"
      aria-labelledby="about-title"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/[0.1] via-transparent to-transparent pointer-events-none" />

      <div className="section-shell relative z-10">
        <div className="grid lg:grid-cols-[380px_1fr] gap-14 lg:gap-20 items-start">

          {/* Heading column */}
          <div className="lg:sticky lg:top-24">
            <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-4">
              Acerca del Club
            </p>
            <h2 id="about-title" className="text-4xl lg:text-5xl font-black text-white leading-tight">
              Sobre nosotros
            </h2>
            <p className="mt-4 text-white/50 leading-relaxed text-sm">
              Construyendo un futuro sostenible desde la creatividad e innovación universitaria.
            </p>
            <div className="mt-6 w-10 h-[3px] rounded-full bg-gradient-to-r from-orange-500 to-orange-400/50" />
          </div>

          {/* Content column */}
          <div className="space-y-8">
            <div className="space-y-4 text-white/60 leading-relaxed text-[0.95rem]">
              <p>
                El Club de Innovación Sostenible es un espacio que nace desde la Facultad de Ciencias
                de la Ingeniería de la Universidad Austral de Chile y promueve la innovación, el
                espíritu emprendedor y la colaboración entre estudiantes de ingeniería y otras
                facultades de la UACh.
              </p>
              <p>
                Con enfoque en innovación sostenible, el club busca aportar al desarrollo personal y
                profesional de sus integrantes, conectando creatividad, trabajo en equipo e impacto
                territorial para abordar problemas locales y globales.
              </p>
            </div>

            {/* Mini cards */}
            <div className="grid sm:grid-cols-3 gap-4">
              {motivations.map((item) => (
                <article
                  key={item.title}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-orange-500/25 hover:bg-white/[0.05] transition-all duration-300 group cursor-default"
                >
                  <div className="w-5 h-[2px] bg-orange-500 rounded-full mb-3 transition-all duration-300 group-hover:w-8" />
                  <h3 className="text-[0.85rem] font-bold text-white mb-2 leading-snug">{item.title}</h3>
                  <p className="text-xs text-white/45 leading-relaxed">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
