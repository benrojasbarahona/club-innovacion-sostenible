import { proyectos } from '../data/projects.js';

function Projects() {
  return (
    <section
      className="relative py-24 bg-[#0a0618]"
      id="proyectos"
      aria-labelledby="projects-title"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#06030f] via-transparent to-[#06030f] pointer-events-none" />

      <div className="section-shell relative z-10">
        <div className="mb-12">
          <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-4">
            Actividades y proyectos
          </p>
          <h2
            id="projects-title"
            className="text-4xl lg:text-5xl font-black text-white leading-tight max-w-xl"
          >
            Proyectos y actividades
          </h2>
          <p className="mt-4 text-white/50 text-sm leading-relaxed max-w-lg">
            Iniciativas para pasar de la motivación a la acción: reuniones, talleres, proyectos y vinculación.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {proyectos.map((project) => (
            <article
              key={project.nombre}
              className="group rounded-2xl overflow-hidden bg-white/[0.025] border border-white/[0.07] hover:border-orange-500/20 hover:bg-white/[0.04] transition-all duration-300 hover:-translate-y-1"
            >
              <div className="overflow-hidden h-44 bg-[#0d0825]">
                <img
                  src={project.imagen}
                  alt={`Imagen referencial de ${project.nombre}`}
                  className="w-full h-full object-cover opacity-55 group-hover:opacity-70 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-1 text-[0.68rem] font-black tracking-[0.1em] uppercase bg-orange-500/[0.08] text-orange-400 border border-orange-500/[0.18] rounded-lg">
                    {project.categoria}
                  </span>
                  <time className="text-[0.68rem] text-white/30 font-medium shrink-0">
                    {project.fecha}
                  </time>
                </div>
                <h3 className="font-bold text-white text-[0.92rem] mb-1.5 leading-snug">
                  {project.nombre}
                </h3>
                <p className="text-xs text-white/48 leading-relaxed">{project.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
