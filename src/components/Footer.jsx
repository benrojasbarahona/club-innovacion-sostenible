const quickLinks = [
  { href: '#sobre-nosotros', label: 'Sobre nosotros' },
  { href: '#que-hacemos', label: 'Qué hacemos' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#mentores', label: 'Red de Mentores' },
  { href: '#contacto', label: 'Contacto' },
];

function Footer() {
  return (
    <footer className="relative bg-[#06030f] border-t border-white/[0.05]">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

      <div className="section-shell relative z-10 py-14">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr] gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/imagenes-club/logo_blanco.png"
                alt="Logo Club de Innovación Sostenible UACh"
                className="w-11 h-11 object-contain opacity-90"
              />
              <strong className="text-white font-extrabold text-[0.9rem] leading-snug">
                Club de Innovación<br />Sostenible UACh
              </strong>
            </div>
            <p className="text-sm text-white/35 leading-relaxed max-w-xs">
              Innovación sostenible desde la universidad. Creando el futuro desde Valdivia.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h2 className="text-[0.68rem] font-black tracking-[0.18em] uppercase text-orange-400/80 mb-5">
              Links rápidos
            </h2>
            <nav className="flex flex-col gap-2" aria-label="Links rápidos del footer">
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/38 hover:text-orange-400 transition-colors duration-150"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-[0.68rem] font-black tracking-[0.18em] uppercase text-orange-400/80 mb-5">
              Contacto
            </h2>
            <div className="flex flex-col gap-2 text-sm text-white/38">
              <span>clubinnovacion@uach.cl</span>
              <span>Espacio 14K · Campus Miraflores</span>
              <span>Valdivia, Región de Los Ríos</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.05] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[0.72rem] text-white/20">
            © {new Date().getFullYear()} Club de Innovación Sostenible UACh. Todos los derechos reservados.
          </p>
          <p className="text-[0.72rem] text-white/18 font-medium tracking-widest uppercase">
            UACh · Valdivia · Chile
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
