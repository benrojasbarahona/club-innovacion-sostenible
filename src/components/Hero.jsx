function Hero() {
  return (
    <section className="hero" id="inicio" aria-labelledby="hero-title">
      <div className="section-shell hero-layout">
        <div className="hero-copy">
          <img className="hero-logo" src="/imagenes-club/logo_blanco.png" alt="Logo blanco del Club de Innovación Sostenible UACh" />
          <p className="eyebrow">Construyendo el futuro sostenible</p>
          <h1 id="hero-title">Club de Innovación Sostenible UACh</h1>
          <p className="hero-phrase">Conectamos ideas con acción</p>
          <p className="hero-subtitle">
            Somos un espacio estudiantil de la Universidad Austral de Chile que impulsa proyectos,
            formación y redes colaborativas para crear soluciones con impacto social, ambiental y económico.
          </p>
          <div className="hero-actions" aria-label="Acciones principales">
            <a className="button button-primary" href="#ser-parte">
              Ser parte del club
            </a>
            <a className="button button-secondary" href="#proyectos">
              Ver proyectos
            </a>
            <a className="button button-ghost" href="#mentores">
              Red de Mentores
            </a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Información destacada del club">
          <div className="hero-panel-image">
            <img src="/imagenes-club/201103_W_P_Edificio-14K_Foto-de-portada.jpg" alt="Edificio 14K de la Universidad Austral de Chile" />
          </div>
          <div className="hero-facts">
            <span>Centro 14K</span>
            <span>Campus Miraflores</span>
            <span>Valdivia</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
