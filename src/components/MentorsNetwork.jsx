import { mentores } from '../data/mentors.js';

const linkedInPendingText = '[aquí iría el link del LinkedIn]';
const fallbackImage = '/imagenes-club/placeholder-persona.jpg';

function MentorsNetwork({ onSchedule }) {
  const handleSchedule = (mentorName) => {
    onSchedule(
      `Solicitud registrada para mentoría con ${mentorName}. Te contactaremos pronto para coordinar la mentoría.`,
    );
  };

  const handleImageError = (event) => {
    event.currentTarget.onerror = null;
    event.currentTarget.src = fallbackImage;
  };

  const isPendingLinkedIn = (linkedin) => linkedin.includes(linkedInPendingText);

  const renderLinkedIn = (mentor) => {
    if (isPendingLinkedIn(mentor.linkedin)) {
      return (
        <div className="linkedin-pending">
          <span>{mentor.linkedin}</span>
          <button type="button" disabled>
            LinkedIn pendiente
          </button>
        </div>
      );
    }

    return (
      <a className="linkedin-link" href={mentor.linkedin} target="_blank" rel="noreferrer">
        Ver LinkedIn
      </a>
    );
  };

  return (
    <section className="section mentors-section" id="mentores" aria-labelledby="mentors-title">
      <div className="section-shell">
        <div className="section-heading centered light">
          <p className="eyebrow">Mentorías para transformar ideas en proyectos</p>
          <h2 id="mentors-title">Red de Mentores Club Innovación Sostenible</h2>
          <p>
            La Red de Mentores del Club de Innovación Sostenible UACh conecta a estudiantes con
            personas con experiencia en innovación, emprendimiento, sostenibilidad, ciencia,
            tecnología, financiamiento, gestión de proyectos y desarrollo organizacional. Buscamos
            acercar conocimiento práctico, redes y acompañamiento estratégico para transformar ideas
            en proyectos con impacto social, ambiental y económico.
          </p>
          <p>
            Cada mentoría es una oportunidad para ordenar una idea, validar un problema, fortalecer
            un modelo de negocio, preparar una postulación, mejorar un pitch o conectar con el
            ecosistema de innovación.
          </p>
        </div>
        <div className="mentors-grid">
          {mentores.map((mentor, index) => (
            <article className="mentor-card" key={`${mentor.nombre}-${mentor.area}-${index}`}>
              <div className="mentor-card-header">
                <img
                  src={mentor.imagen}
                  alt={`Foto de ${mentor.nombre}`}
                  onError={handleImageError}
                />
                <span className="area-badge">{mentor.area}</span>
              </div>
              <div className="mentor-card-body">
                <h3>{mentor.nombre}</h3>
                <p className="mentor-institution">{mentor.institucion}</p>
                <p className="mentor-specialty">{mentor.especialidad}</p>
                <p className="mentor-description">{mentor.descripcion}</p>
                <dl className="contact-list">
                  <div>
                    <dt className="text-[0.62rem] font-bold text-purple-400/80 uppercase tracking-wider mb-0.5">
                      Teléfono
                    </dt>
                    <dd className="text-xs text-white/60">{mentor.telefono}</dd>
                  </div>
                  <div>
                    <dt>Email</dt>
                    <dd>{mentor.email}</dd>
                  </div>
                </dl>
                {renderLinkedIn(mentor)}
                <button
                  className="button button-primary full-width"
                  type="button"
                  onClick={() => handleSchedule(mentor.nombre)}
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
