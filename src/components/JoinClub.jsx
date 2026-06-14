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
    <section className="section join-section" id="ser-parte" aria-labelledby="join-title">
      <div className="section-shell join-layout">
        <div className="section-heading light">
          <p className="eyebrow">Participa</p>
          <h2 id="join-title">Cómo ser parte del club</h2>
          <p>
            Requisitos: ser estudiante de pregrado UACh y tener motivación y compromiso para
            participar activamente en al menos el 70% de las sesiones.
          </p>
          <a className="button button-primary" href="#contacto">
            Quiero ser parte
          </a>
        </div>
        <ol className="steps-list">
          {steps.map((step) => (
            <li key={step.title}>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default JoinClub;
