import { withBase } from '../lib/paths.js';

function InstitutionalLogos() {
  return (
    <section
      className="relative border-t border-white/[0.05] bg-[#0a0618] py-16"
      aria-labelledby="institutional-logos-title"
    >
      <div className="section-shell flex flex-col items-center gap-10 text-center">
        <h2
          id="institutional-logos-title"
          className="text-[0.68rem] font-black uppercase tracking-[0.22em] text-white/35"
        >
          Con el respaldo de
        </h2>

        <img
          src={withBase('imagenes-club/logos/uach-ingenieria.webp')}
          alt="Universidad Austral de Chile · Facultad de Ciencias de la Ingeniería"
          className="w-full max-w-[420px]"
          loading="lazy"
        />

        <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-7">
          <span className="text-[0.66rem] font-black uppercase tracking-[0.18em] text-white/30">
            Apoyado por
          </span>
          <img
            src={withBase('imagenes-club/logos/innoving-2030.webp')}
            alt="InnovING 2030"
            className="w-full max-w-[210px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}

export default InstitutionalLogos;
