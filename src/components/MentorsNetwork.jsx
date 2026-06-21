import { mentores } from '../data/mentors.js';

const linkedInPendingText = '[aquí iría el link del LinkedIn]';
const fallbackImage = 'https://yvucnogpwegdmxgeeyjw.supabase.co/storage/v1/object/public/galeria/placeholder-persona.jpg';

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
        <span className="inline-flex rounded-lg border border-white/[0.08] bg-white/[0.03] px-3 py-2 text-xs font-semibold text-white/35">
          LinkedIn pendiente
        </span>
      );
    }

    return (
      <a
        className="inline-flex rounded-lg border border-purple-400/20 bg-purple-400/[0.08] px-3 py-2 text-xs font-semibold text-purple-300 transition hover:border-orange-400/30 hover:text-orange-300"
        href={mentor.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        Ver LinkedIn
      </a>
    );
  };

  return (
    <section
      className="relative overflow-hidden py-16 md:py-24"
      id="mentores"
      aria-labelledby="mentors-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(93,28,167,0.3),transparent_38rem),radial-gradient(circle_at_bottom_right,rgba(249,161,9,0.09),transparent_32rem)]" />

      <div className="section-shell relative z-10">
        <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
          <p className="mb-4 text-[0.72rem] font-black uppercase tracking-[0.22em] text-orange-500">
            Mentorías para transformar ideas en proyectos
          </p>
          <h1
            id="mentors-title"
            className="text-4xl font-black leading-[1.02] text-white md:text-6xl"
          >
            Red de Mentores Club Innovación Sostenible
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-sm leading-relaxed text-white/55 md:text-base">
            La Red de Mentores del Club de Innovación Sostenible UACh conecta a estudiantes con
            personas con experiencia en innovación, emprendimiento, sostenibilidad, ciencia,
            tecnología, financiamiento, gestión de proyectos y desarrollo organizacional. Buscamos
            acercar conocimiento práctico, redes y acompañamiento estratégico para transformar ideas
            en proyectos con impacto social, ambiental y económico.
          </p>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-white/45 md:text-base">
            Cada mentoría es una oportunidad para ordenar una idea, validar un problema, fortalecer
            un modelo de negocio, preparar una postulación, mejorar un pitch o conectar con el
            ecosistema de innovación.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {mentores.map((mentor, index) => (
            <article
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.035] shadow-[0_24px_70px_rgba(0,0,0,0.2)] transition duration-300 hover:-translate-y-1 hover:border-orange-400/20 hover:bg-white/[0.055]"
              key={`${mentor.nombre}-${mentor.area}-${index}`}
            >
              <div className="flex items-start gap-4 border-b border-white/[0.06] p-5">
                <img
                  src={mentor.imagen}
                  alt={`Foto de ${mentor.nombre}`}
                  onError={handleImageError}
                  className="h-20 w-20 shrink-0 rounded-2xl border border-orange-400/25 object-cover"
                />
                <div>
                  <span className="inline-flex rounded-lg border border-orange-400/20 bg-orange-400/[0.08] px-2.5 py-1 text-[0.64rem] font-black uppercase leading-snug tracking-[0.08em] text-orange-300">
                    {mentor.area}
                  </span>
                  <h2 className="mt-3 text-lg font-bold leading-tight text-white">{mentor.nombre}</h2>
                  <p className="mt-1 text-xs font-semibold text-purple-300/75">
                    {mentor.institucion}
                  </p>
                </div>
              </div>

              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm font-semibold leading-relaxed text-white/70">
                  {mentor.especialidad}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/45">{mentor.descripcion}</p>

                <dl className="mt-5 grid gap-3 border-t border-white/[0.06] pt-4 sm:grid-cols-2">
                  <div className="min-w-0">
                    <dt className="text-[0.62rem] font-bold uppercase tracking-wider text-orange-400/70">
                      Teléfono
                    </dt>
                    <dd className="mt-1 text-xs text-white/45">{mentor.telefono}</dd>
                  </div>
                  <div className="min-w-0">
                    <dt className="text-[0.62rem] font-bold uppercase tracking-wider text-orange-400/70">
                      Email
                    </dt>
                    <dd className="mt-1 break-words text-xs text-white/45">{mentor.email}</dd>
                  </div>
                </dl>

                <div className="mt-4">{renderLinkedIn(mentor)}</div>
                <button
                  className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-xl bg-orange-500 px-4 py-3 text-sm font-bold text-black transition hover:-translate-y-0.5 hover:bg-orange-400 hover:shadow-[0_8px_28px_rgba(249,161,9,0.25)]"
                  type="button"
                  onClick={() => handleSchedule(mentor.nombre)}
                >
                  Solicitar mentoría
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
