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
    <section className="section section-muted" id="sobre-nosotros" aria-labelledby="about-title">
      <div className="section-shell split-layout">
        <div className="section-heading">
          <p className="eyebrow">Acerca del Club</p>
          <h2 id="about-title">Sobre nosotros</h2>
          <p>
            Construyendo un futuro sostenible desde la creatividad e innovación universitaria.
          </p>
        </div>
        <div className="content-stack">
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
          <div className="motivation-grid">
            {motivations.map((item) => (
              <article className="mini-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
