function InstitutionalLink() {
  return (
    <section
      className="relative py-16 bg-[#06030f]"
      aria-labelledby="institutional-title"
    >
      <div className="section-shell">
        <div className="relative rounded-2xl overflow-hidden border border-orange-500/[0.18] bg-gradient-to-r from-orange-600/[0.07] via-orange-500/[0.04] to-purple-900/[0.15] p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-orange-500/30 to-transparent" />

          <div className="relative z-10">
            <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-500 mb-3">
              Vinculación institucional
            </p>
            <h2
              id="institutional-title"
              className="text-3xl font-black text-white mb-2 leading-tight"
            >
              Vinculación institucional
            </h2>
            <p className="text-white/50 max-w-lg text-sm leading-relaxed">
              El club trabaja en coordinación con capacidades institucionales de innovación,
              emprendimiento y transferencia tecnológica para fortalecer proyectos estudiantiles.
            </p>
          </div>

          <a
            href="https://ingenieria.uach.cl/innovacion-emprendimiento-y-transferencia-tecnologica/"
            target="_blank"
            rel="noreferrer"
            aria-label="Conocer la Oficina de Innovación"
            className="relative z-10 shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-400 text-black font-bold rounded-xl transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(249,161,9,0.35)] text-sm"
          >
            Conocer la Oficina de Innovación
          </a>
        </div>
      </div>
    </section>
  );
}

export default InstitutionalLink;
