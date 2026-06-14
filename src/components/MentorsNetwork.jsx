import { mentores } from '../data/mentors.js';

function MentorsNetwork({ onSchedule }) {
  const handleSchedule = () => {
    onSchedule('Solicitud registrada. Te contactaremos pronto para coordinar la mentoría.');
  };

  return (
    <section className="section mentors-section" id="mentores" aria-labelledby="mentors-title">
      <div className="section-shell">
        <div className="section-heading centered light">
          <p className="eyebrow">Acompañamiento</p>
          <h2 id="mentors-title">Red de Mentores Club Innovación Sostenible</h2>
          <p>
            Conectamos estudiantes con personas mentoras en innovación, sostenibilidad,
            emprendimiento, tecnología, gestión de proyectos, impacto social, financiamiento,
            investigación, diseño, marketing y otras áreas clave.
          </p>
        </div>
        <div className="card-grid four-columns">
          {mentores.map((mentor, index) => (
            <article className="mentor-card" key={`${mentor.nombre}-${mentor.area}-${index}`}>
              <img src={mentor.imagen} alt={`Imagen de ${mentor.nombre}`} />
              <div className="mentor-card-body">
                <p className="card-kicker">{mentor.area}</p>
                <h3>{mentor.nombre}</h3>
                <p>{mentor.especialidad}</p>
                <dl className="contact-list">
                  <div>
                    <dt>Teléfono</dt>
                    <dd>{mentor.telefono}</dd>
                  </div>
                  <div>
                    <dt>Gmail</dt>
                    <dd>{mentor.email}</dd>
                  </div>
                </dl>
                <button className="button button-primary full-width" type="button" onClick={handleSchedule}>
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
