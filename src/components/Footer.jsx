const quickLinks = [
  { href: '#sobre-nosotros', label: 'Sobre nosotros' },
  { href: '#que-hacemos', label: 'Qué hacemos' },
  { href: '#proyectos', label: 'Proyectos' },
  { href: '#mentores', label: 'Red de Mentores' },
  { href: '#contacto', label: 'Contacto' },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="section-shell footer-layout">
        <div className="footer-brand">
          <img src="/imagenes-club/logo_blanco.png" alt="Logo Club de Innovación Sostenible UACh" />
          <div>
            <strong>Club de Innovación Sostenible UACh</strong>
            <p>Innovación sostenible desde la universidad.</p>
          </div>
        </div>
        <div>
          <h2>Links rápidos</h2>
          <nav className="footer-links" aria-label="Links rápidos del footer">
            {quickLinks.map((link) => (
              <a key={link.href} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div>
          <h2>Contacto</h2>
          <p>clubinnovacion@uach.cl</p>
          <p>Espacio 14K · Campus Miraflores</p>
          <p>Valdivia, Región de Los Ríos</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
