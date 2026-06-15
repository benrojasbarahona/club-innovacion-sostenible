import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Inicio', href: '#inicio', type: 'anchor' },
  { label: 'Sobre nosotros', href: '#sobre-nosotros', type: 'anchor' },
  { label: 'Que hacemos', href: '#que-hacemos', type: 'anchor' },
  { label: 'Proyectos', href: '#proyectos', type: 'anchor' },
  { label: 'Red de Mentores', href: '/red-de-mentores', type: 'route' },
  { label: 'Colaboradores', href: '#colaboradores', type: 'anchor' },
  { label: 'Coordinadores', href: '#coordinadores', type: 'anchor' },
  { label: 'Estatutos', href: '#estatutos', type: 'anchor' },
  { label: 'Contacto', href: '#contacto', type: 'anchor' },
];

const FORMS_URL =
  'https://forms.office.com/Pages/ResponsePage.aspx?id=zxGbB6G8Y0SGwilo8oThng-fzTfdo9FBniTmrC29_mVUNFI5VjUyTVk0TkVXTENNWkpaSFFPWjFSUS4u';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const closeMenu = () => setIsOpen(false);

  const anchorHref = (hash) => (isHome ? hash : `/${hash}`);

  const linkCls =
    'px-2.5 py-1.5 text-[0.8rem] text-white/50 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-150 font-medium whitespace-nowrap';

  const mobileLinkCls =
    'px-4 py-2.5 text-sm text-white/60 hover:text-white hover:bg-white/[0.04] rounded-xl transition-all duration-150 font-medium';

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-black/85 backdrop-blur-2xl shadow-[0_1px_0_rgba(255,255,255,0.06)]'
          : 'bg-transparent'
      }`}
      style={{ height: 'var(--header-height)' }}
    >
      <a className="skip-link" href="#inicio">
        Saltar al contenido
      </a>

      <nav
        className="section-shell h-full flex items-center justify-between gap-4"
        aria-label="Navegacion principal"
      >
        {/* Brand */}
        <a
          href={anchorHref('#inicio')}
          onClick={closeMenu}
          className="flex items-center gap-3 shrink-0 group"
        >
          <img
            src="/imagenes-club/logo_blanco.png"
            alt="Logo Club de Innovacion Sostenible UACh"
            className="w-11 h-11 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden sm:block text-[0.78rem] font-black tracking-[0.18em] text-white/90 uppercase">
            cis<span className="text-orange-500">.</span>uach
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden xl:flex items-center gap-0.5 flex-1 justify-center">
          {navItems.map((item) =>
            item.type === 'route' ? (
              <Link key={item.href} to={item.href} className={linkCls}>
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={anchorHref(item.href)} className={linkCls}>
                {item.label}
              </a>
            ),
          )}
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <a
            href={FORMS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-4 py-2 text-[0.82rem] font-bold bg-orange-500 hover:bg-orange-400 text-black rounded-xl transition-all duration-150 hover:shadow-[0_4px_20px_rgba(249,161,9,0.35)] whitespace-nowrap"
          >
            Ser parte
          </a>

          {/* Hamburger */}
          <button
            className="xl:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 rounded-xl border border-white/[0.1] hover:border-white/20 hover:bg-white/[0.04] transition-all duration-150"
            type="button"
            aria-label={isOpen ? 'Cerrar menu' : 'Abrir menu'}
            aria-expanded={isOpen}
            aria-controls="primary-navigation"
            onClick={() => setIsOpen((c) => !c)}
          >
            <span
              className={`block w-[18px] h-[1.5px] bg-white/80 transition-all duration-200 origin-center ${isOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}
            />
            <span
              className={`block w-[18px] h-[1.5px] bg-white/80 transition-all duration-200 ${isOpen ? 'opacity-0 scale-x-0' : ''}`}
            />
            <span
              className={`block w-[18px] h-[1.5px] bg-white/80 transition-all duration-200 origin-center ${isOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}
            />
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
            {navItems.map((item) =>
              item.type === 'route' ? (
                <Link key={item.href} to={item.href} onClick={closeMenu} className={mobileLinkCls}>
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={anchorHref(item.href)}
                  onClick={closeMenu}
                  className={mobileLinkCls}
                >
                  {item.label}
                </a>
              ),
            )}
            <a
              href={FORMS_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-2 px-4 py-2.5 text-sm font-bold bg-orange-500 hover:bg-orange-400 text-black rounded-xl transition-all duration-150 text-center"
            >
              Ser parte
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
