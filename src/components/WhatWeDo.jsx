import Icon from './Icon.jsx';

const actions = [
  {
    icon: 'formation',
    title: 'Formacion',
    description:
      'Aprendizaje práctico en metodologías de innovación, creatividad, sostenibilidad y trabajo colaborativo.',
  },
  {
    icon: 'projects',
    title: 'Proyectos',
    description:
      'Desarrollo de ideas sostenibles, prototipos y soluciones con potencial de impacto social, ambiental y económico.',
  },
  {
    icon: 'network',
    title: 'Vinculacion',
    description:
      'Conexión con facultades, empresas, instituciones y actores del territorio para abrir oportunidades reales.',
  },
  {
    icon: 'sustainable',
    title: 'Innovación sostenible',
    description:
      'Mirada integral para resolver desafíos locales y globales con responsabilidad ambiental y pertinencia social.',
  },
  {
    icon: 'venture',
    title: 'Emprendimiento',
    description:
      'Acompañamiento para convertir problemas, ideas y aprendizajes en iniciativas sostenibles y viables.',
  },
  {
    icon: 'workshop',
    title: 'Actividades y talleres',
    description:
      'Charlas, conversatorios, sesiones de ideación y experiencias de comunidad durante el semestre.',
  },
];

function WhatWeDo() {
  return (
    <section className="section" id="que-hacemos" aria-labelledby="what-title">
      <div className="section-shell">
        <div className="section-heading centered">
          <p className="eyebrow">Qué encontrarás</p>
          <h2 id="what-title">Qué hacemos</h2>
          <p>
            Una comunidad estudiantil para aprender, crear y vincularse con desafíos reales desde la sostenibilidad.
          </p>
        </div>
        <div className="card-grid three-columns">
          {actions.map((action) => (
            <article className="feature-card" key={action.title}>
              <span className="icon-badge">
                <Icon name={action.icon} />
              </span>
              <h3>{action.title}</h3>
              <p>{action.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhatWeDo;
