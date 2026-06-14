import { proyectos } from '../data/projects.js';

function Projects() {
  return (
    <section className="section section-muted" id="proyectos" aria-labelledby="projects-title">
      <div className="section-shell">
        <div className="section-heading">
          <p className="eyebrow">Actividades y proyectos</p>
          <h2 id="projects-title">Proyectos y actividades</h2>
          <p>
            Iniciativas para pasar de la motivación a la acción: reuniones, talleres, proyectos y vinculación.
          </p>
        </div>
        <div className="project-grid">
          {proyectos.map((project) => (
            <article className="project-card" key={project.nombre}>
              <img src={project.imagen} alt={`Imagen referencial de ${project.nombre}`} />
              <div className="project-card-body">
                <div className="meta-row">
                  <span>{project.categoria}</span>
                  <time>{project.fecha}</time>
                </div>
                <h3>{project.nombre}</h3>
                <p>{project.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
