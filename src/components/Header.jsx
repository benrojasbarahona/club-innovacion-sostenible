import { useState, useEffect } from 'react';

const JOIN_FORM_URL = 'https://forms.cloud.microsoft/r/LVHVn0VQBP?origin=lprLink';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-nosotros', label: 'Sobre nosotros' },
  { href: '#que-hacemos', label: 'Qué hacemos' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '/mentores', label: 'Red de Mentores' },
  { href: '#colaboradores', label: 'Colaboradores' },
  { href: '#coordinadores', label: 'Coordinadores' },
  { href: '#estatutos', label: 'Estatutos' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
  { href: JOIN_FORM_URL, label: 'Ser parte' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);
  const isHomePage = window.location.pathname === '/';
  const resolveHref = (href) => (href.startsWith('#') && !isHomePage ? `/${href}` : href);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)]'
          : 'bg-transparent'
      }`}
      style={{ height: 'var(--header-height)' }}
    >
      <a className="skip-link" href="#main-content">Saltar al contenido</a>

      <nav
        className="section-shell h-full flex items-center justify-between gap-4"
        aria-label="Navegación principal"
      >
        {/* Brand */}
        <a href="/#inicio" onClick={closeMenu} className="flex items-center gap-2.5 shrink-0 group">
          <img
            src="https://yvucnogpwegdmxgeeyjw.supabase.co/storage/v1/object/public/logos/logo_blanco.png"
            alt="Logo Club de Innovación Sostenible UACh"
            className="w-20 h-10 sm:w-24 sm:h-11 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden sm:block text-[0.78rem] font-black tracking-[0.18em] text-white/90 uppercase">
            cis<span className="text-orange-500">.</span>uach
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
          {navLinks.slice(0, -1).map((link) => (
            <a
              key={link.href}
              href={resolveHref(link.href)}
              className="px-2.5 py-1.5 text-[0.8rem] text-white/50 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-150 font-medium whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={JOIN_FORM_URL}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-2 text-[0.82rem] font-bold bg-orange-500 hover:bg-orange-400 text-black rounded-xl transition-all duration-150 hover:shadow-[0_4px_20px_rgba(249,161,9,0.35)] whitespace-nowrap"
          >
            Ser parte
          </a>

          {/* Hamburger */}
          <button
            className="xl:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-xl border border-white/[0.1] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-150"
            type="button"
            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen((c) => !c)}
          >
            <span className={`block w-[18px] h-[1.5px] bg-white/80 transition-all duration-200 origin-center ${isOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
            <span className={`block w-[18px] h-[1.5px] bg-white/80 transition-all duration-200 ${isOpen ? 'opacity-0 scale-x-0' : ''}`} />
            <span className={`block w-[18px] h-[1.5px] bg-white/80 transition-all duration-200 origin-center ${isOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div
          id="primary-navigation"
          className="xl:hidden absolute top-full left-0 right-0 bg-[#06030f]/98 backdrop-blur-2xl border-b border-white/[0.06] animate-slide-down"
        >
          <div className="section-shell py-4 flex flex-col gap-0.5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={resolveHref(link.href)}
                onClick={closeMenu}
                target={link.href === JOIN_FORM_URL ? '_blank' : undefined}
                rel={link.href === JOIN_FORM_URL ? 'noreferrer' : undefined}
                className="px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all duration-150 font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
