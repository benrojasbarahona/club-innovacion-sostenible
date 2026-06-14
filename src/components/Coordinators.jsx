import { coordinadores } from '../data/coordinators.js';

function Coordinators() {
  return (
    <section className="section section-muted" id="coordinadores" aria-labelledby="coordinators-title">
      <div className="section-shell">
        <div className="section-heading centered">
          <p className="eyebrow">Equipo</p>
          <h2 id="coordinators-title">Coordinadores del club</h2>
          <p>
            Datos editables para mantener actualizado el equipo responsable de actividades, proyectos y comunidad.
          </p>
        </div>
        <div className="card-grid three-columns">
          {coordinadores.map((coordinator, index) => (
            <article className="person-card" key={`${coordinator.nombre}-${coordinator.cargo}-${index}`}>
              <img src={coordinator.imagen} alt={`Imagen de ${coordinator.nombre}`} />
              <div>
                <p className="card-kicker">{coordinator.cargo}</p>
                <h3>{coordinator.nombre}</h3>
                <p>{coordinator.carrera}</p>
                <a href={`mailto:${coordinator.contacto}`}>{coordinator.contacto}</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Coordinators;
