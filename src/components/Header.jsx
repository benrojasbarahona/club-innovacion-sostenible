import { useState } from 'react';

const navLinks = [
  { href: '#inicio', label: 'Inicio' },
  { href: '#sobre-nosotros', label: 'Sobre nosotros' },
  { href: '#que-hacemos', label: 'Qué hacemos' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#mentores', label: 'Red de Mentores' },
  { href: '#colaboradores', label: 'Colaboradores' },
  { href: '#coordinadores', label: 'Coordinadores' },
  { href: '#estatutos', label: 'Estatutos' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto', label: 'Contacto' },
  { href: '#ser-parte', label: 'Ser parte' },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#inicio">
        Saltar al contenido
      </a>
      <nav className="navbar section-shell" aria-label="Navegacion principal">
        <a className="brand" href="#inicio" onClick={closeMenu}>
          <img src="/imagenes-club/logo_morado.png" alt="Logo Club de Innovación Sostenible UACh" />
          <span>cis.uach</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`nav-links ${isOpen ? 'is-open' : ''}`} id="primary-navigation">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;
