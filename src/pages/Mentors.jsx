import { Link } from 'react-router-dom';
import MentorsNetwork from '../components/MentorsNetwork.jsx';

const FORMS_URL =
  'https://forms.office.com/Pages/ResponsePage.aspx?id=zxGbB6G8Y0SGwilo8oThng-fzTfdo9FBniTmrC29_mVUNFI5VjUyTVk0TkVXTENNWkpaSFFPWjFSUS4u';

const studentBenefits = [
  {
    title: 'Habilidades prácticas',
    body: 'Scrum, Design Thinking, prototipado y gestión de proyectos aplicados a problemas reales.',
  },
  {
    title: 'Experiencia aplicada',
    body: 'Participación en proyectos que resuelven desafíos concretos del territorio.',
  },
  {
    title: 'Certificación oficial',
    body: 'Respaldo de la Oficina de Innovación, Emprendimiento y Transferencia Tecnológica de la UACh.',
  },
  {
    title: 'Red de contactos',
    body: 'Acceso directo a profesionales, académicos y actores del ecosistema de innovación.',
  },
  {
    title: 'Vinculación externa',
    body: 'Conexión con organizaciones nacionales e internacionales alineadas a los ODS.',
  },
];

const mentorBenefits = [
  {
    title: 'Vinculación universitaria',
    body: 'Canal directo con estudiantes de la UACh motivados a crear soluciones de impacto.',
  },
  {
    title: 'Impacto territorial',
    body: 'Contribuir al desarrollo de proyectos sostenibles con foco en la Región de Los Ríos.',
  },
  {
    title: 'Red de innovación',
    body: 'Conectar con otros profesionales, académicos y emprendedores del ecosistema.',
  },
];

function Mentors({ showToast }) {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden bg-[#06030f]" aria-labelledby="mentors-hero-title">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="orb-1 pointer-events-none absolute -top-[20%] -left-[10%] w-[600px] h-[600px] rounded-full bg-purple-900/30 blur-[140px]" />
        <div className="orb-2 pointer-events-none absolute -bottom-[20%] -right-[10%] w-[500px] h-[500px] rounded-full bg-orange-600/[0.08] blur-[110px]" />

        <div className="section-shell relative z-10 py-24 pt-[calc(var(--header-height)+80px)]">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-[0.78rem] font-bold text-white/40 hover:text-orange-400 transition-colors duration-150 mb-8 group"
          >
            <svg className="w-4 h-4 transition-transform duration-150 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Volver al inicio
          </Link>

          <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-4">
            Acompanamiento
          </p>
          <h1
            id="mentors-hero-title"
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight max-w-3xl"
          >
            Red de Mentores{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              CIS-UACh
            </span>
          </h1>
          <p className="mt-6 text-white/55 leading-relaxed max-w-2xl text-[0.96rem]">
            La Red de Mentores busca conectar a estudiantes con profesionales, academicos,
            emprendedores y actores del ecosistema de innovacion, fortaleciendo el aprendizaje
            practico, la orientacion estrategica y el desarrollo de proyectos con impacto.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(249,161,9,0.4)] text-sm"
            >
              Quiero ser parte
            </a>
            <a
              href="mailto:clubinnovacion@uach.cl"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-200 text-sm"
            >
              Contactar al club
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#06030f] to-transparent pointer-events-none" />
      </section>

      {/* Benefits */}
      <section className="py-20 bg-[#0a0618]" aria-labelledby="benefits-title">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/[0.06] to-transparent pointer-events-none" />
        <div className="section-shell">
          <div className="grid lg:grid-cols-2 gap-14">

            {/* Students */}
            <div>
              <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-3">
                Para estudiantes
              </p>
              <h2 id="benefits-title" className="text-3xl font-black text-white mb-8 leading-tight">
                Que ganas siendo parte
              </h2>
              <ul className="space-y-4">
                {studentBenefits.map((b) => (
                  <li
                    key={b.title}
                    className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-orange-500/20 transition-colors duration-200"
                  >
                    <div className="shrink-0 w-1.5 rounded-full bg-orange-500/60 self-stretch" />
                    <div>
                      <p className="font-bold text-white text-[0.9rem] mb-1">{b.title}</p>
                      <p className="text-xs text-white/48 leading-relaxed">{b.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mentors */}
            <div>
              <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-3">
                Para mentores
              </p>
              <h2 className="text-3xl font-black text-white mb-8 leading-tight">
                Por que ser mentor
              </h2>
              <ul className="space-y-4">
                {mentorBenefits.map((b) => (
                  <li
                    key={b.title}
                    className="flex gap-4 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-purple-500/20 transition-colors duration-200"
                  >
                    <div className="shrink-0 w-1.5 rounded-full bg-purple-500/60 self-stretch" />
                    <div>
                      <p className="font-bold text-white text-[0.9rem] mb-1">{b.title}</p>
                      <p className="text-xs text-white/48 leading-relaxed">{b.body}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Methodology callout */}
              <div className="mt-8 p-6 rounded-2xl bg-purple-900/[0.15] border border-purple-700/20">
                <p className="text-[0.68rem] font-black tracking-[0.16em] uppercase text-purple-400 mb-2">
                  Nuestra metodologia
                </p>
                <p className="text-sm text-white/65 leading-relaxed">
                  Falla rapido, falla barato. Validamos cada idea a bajo costo antes de escalar,
                  usando ciclos cortos de construccion, medicion y aprendizaje con impacto real.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor cards */}
      <MentorsNetwork onSchedule={showToast} />

      {/* CTA final */}
      <section className="relative py-20 bg-[#06030f] overflow-hidden">
        <div className="absolute inset-0 grid-bg pointer-events-none" />
        <div className="orb-3 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-orange-600/[0.08] blur-[120px]" />

        <div className="section-shell relative z-10 text-center">
          <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-4">
            Unete a la red
          </p>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 leading-tight">
            Conecta con la red de innovacion UACh
          </h2>
          <p className="text-white/50 text-sm leading-relaxed max-w-lg mx-auto mb-8">
            Reuniones cada lunes de 15:50 a 17:20 horas. Compromiso minimo del 70% de asistencia.
            Abierto a estudiantes de todas las disciplinas de la UACh.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href={FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(249,161,9,0.4)] text-sm"
            >
              Quiero unirme al club
            </a>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-200 text-sm"
            >
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mentors;
