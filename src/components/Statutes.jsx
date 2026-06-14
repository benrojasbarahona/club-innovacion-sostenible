function Statutes() {
  return (
    <section
      className="relative py-16 bg-[#06030f]"
      id="estatutos"
      aria-labelledby="statutes-title"
    >
      <div className="section-shell">
        <div className="relative rounded-2xl overflow-hidden border border-purple-800/30 bg-gradient-to-r from-purple-900/35 via-purple-900/20 to-[#06030f] p-8 sm:p-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
          <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-purple-500/40 to-transparent" />

          <div className="relative z-10">
            <p className="text-[0.72rem] font-black tracking-[0.22em] uppercase text-orange-400 mb-3">
              Marco interno
            </p>
            <h2 id="statutes-title" className="text-3xl font-black text-white mb-2 leading-tight">
              Estatutos
            </h2>
            <p className="text-white/50 max-w-lg text-sm leading-relaxed">
              Los estatutos ordenan la participación, responsabilidades y funcionamiento del Club de
              Innovación Sostenible UACh.
            </p>
          </div>

          {/* Reemplazar este enlace cuando exista el documento oficial definitivo. */}
          <a
            href="/documentos/estatutos.pdf"
            className="relative z-10 shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white/[0.07] hover:bg-white/[0.12] border border-white/[0.14] hover:border-white/25 text-white font-bold rounded-xl transition-all duration-200 text-sm"
          >
            Revisar estatutos
          </a>
        </div>
      </div>
    </section>
  );
}

export default Statutes;
