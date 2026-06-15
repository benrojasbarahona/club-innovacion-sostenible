const FORMS_URL =
  'https://forms.office.com/Pages/ResponsePage.aspx?id=zxGbB6G8Y0SGwilo8oThng-fzTfdo9FBniTmrC29_mVUNFI5VjUyTVk0TkVXTENNWkpaSFFPWjFSUS4u';

function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#06030f]"
      aria-labelledby="hero-title"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Animated glow orbs */}
      <div className="orb-1 pointer-events-none absolute -top-[30%] -left-[15%] w-[700px] h-[700px] rounded-full bg-purple-900/35 blur-[150px]" />
      <div className="orb-2 pointer-events-none absolute -bottom-[30%] -right-[15%] w-[550px] h-[550px] rounded-full bg-orange-600/[0.1] blur-[120px]" />
      <div className="orb-3 pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-purple-700/[0.18] blur-[90px]" />

      {/* Content */}
      <div className="section-shell relative z-10 grid lg:grid-cols-[1fr_400px] gap-14 items-center w-full py-20 pt-[calc(var(--header-height)+80px)] pb-24">

        {/* Copy */}
        <div>
          <img
            className="w-36 mb-8 drop-shadow-[0_0_40px_rgba(249,161,9,0.25)]"
            src="/imagenes-club/logo_blanco.png"
            alt="Logo blanco del Club de Innovacion Sostenible UACh"
          />

          <p className="mb-4 text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500">
            Innovacion con proposito
          </p>

          <h1
            id="hero-title"
            className="text-4xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-black leading-[0.95] text-white"
          >
            Club de Innovacion{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
              Sostenible
            </span>{' '}
            UACh
          </h1>

          <p className="mt-5 text-xl sm:text-2xl font-bold text-orange-400/90 leading-snug">
            Pensamos global, actuamos local
          </p>

          <p className="mt-4 text-[0.95rem] text-white/55 leading-relaxed max-w-[520px]">
            Somos una comunidad estudiantil de la Universidad Austral de Chile que busca impulsar la
            innovacion sostenible desde la colaboracion, la creatividad y la accion. Conectamos
            estudiantes, ideas, proyectos y redes para desarrollar soluciones con impacto social,
            ambiental y economico.
          </p>

          <div className="mt-8 flex flex-wrap gap-3" aria-label="Acciones principales">
            <a
              href="#sobre-nosotros"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] hover:border-white/20 text-white font-semibold rounded-xl transition-all duration-200 backdrop-blur-sm text-sm"
            >
              Conoce el club
            </a>
            <a
              href={FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(249,161,9,0.4)] text-sm"
            >
              Unete al club
            </a>
          </div>
        </div>

        {/* Panel */}
        <div
          className="hidden lg:flex flex-col rounded-2xl overflow-hidden border border-white/[0.09] shadow-[0_32px_80px_rgba(0,0,0,0.55)] bg-white/[0.03] backdrop-blur-sm"
          aria-label="Informacion destacada del club"
        >
          <div className="overflow-hidden aspect-[4/3]">
            <img
              src="/imagenes-club/201103_W_P_Edificio-14K_Foto-de-portada.jpg"
              alt="Edificio 14K de la Universidad Austral de Chile"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <div className="grid grid-cols-3 divide-x divide-white/[0.06]">
            {['Centro 14K', 'Campus Miraflores', 'Valdivia'].map((fact) => (
              <div
                key={fact}
                className="flex items-center justify-center py-4 px-2 text-center text-[0.68rem] font-bold text-white/65 tracking-wide"
              >
                {fact}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#06030f] to-transparent pointer-events-none" />
    </section>
  );
}

export default Hero;
