import Icon from './Icon.jsx';

const actions = [
  {
    icon: 'formation',
    title: 'Formacion',
    description: 'Aprendizaje práctico en metodologías de innovación, creatividad, sostenibilidad y trabajo colaborativo.',
  },
  {
    icon: 'projects',
    title: 'Proyectos',
    description: 'Desarrollo de ideas sostenibles, prototipos y soluciones con potencial de impacto social, ambiental y económico.',
  },
  {
    icon: 'network',
    title: 'Vinculacion',
    description: 'Conexión con facultades, empresas, instituciones y actores del territorio para abrir oportunidades reales.',
  },
  {
    icon: 'sustainable',
    title: 'Innovación sostenible',
    description: 'Mirada integral para resolver desafíos locales y globales con responsabilidad ambiental y pertinencia social.',
  },
  {
    icon: 'venture',
    title: 'Emprendimiento',
    description: 'Acompañamiento para convertir problemas, ideas y aprendizajes en iniciativas sostenibles y viables.',
  },
  {
    icon: 'workshop',
    title: 'Actividades y talleres',
    description: 'Charlas, conversatorios, sesiones de ideación y experiencias de comunidad durante el semestre.',
  },
];

function WhatWeDo() {
  return (
    <section
      className="relative py-24 bg-[#06030f] overflow-hidden"
      id="que-hacemos"
      aria-labelledby="what-title"
    >
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-70" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0618] via-transparent to-transparent pointer-events-none" />

      <div className="section-shell relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-4">
            Qué encontrarás
          </p>
          <h2 id="what-title" className="text-4xl lg:text-5xl font-black text-white leading-tight">
            Qué hacemos
          </h2>
          <p className="mt-4 text-white/50 text-sm leading-relaxed">
            Una comunidad estudiantil para aprender, crear y vincularse con desafíos reales desde la sostenibilidad.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {actions.map((action) => (
            <article
              key={action.title}
              className="group p-6 rounded-2xl bg-white/[0.025] border border-white/[0.07] hover:border-orange-500/20 hover:bg-white/[0.045] transition-all duration-300 hover:-translate-y-1 cursor-default"
            >
              <div className="inline-flex w-11 h-11 items-center justify-center rounded-xl bg-orange-500/[0.08] border border-orange-500/[0.15] mb-5 group-hover:bg-orange-500/[0.14] group-hover:border-orange-500/30 transition-all duration-300">
                <Icon name={action.icon} className="w-5 h-5 text-orange-400" />
              </div>
              <h3 className="text-[0.9rem] font-bold text-white mb-2">{action.title}</h3>
              <p className="text-sm text-white/48 leading-relaxed">{action.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
