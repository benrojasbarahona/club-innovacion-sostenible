function Location() {
  return (
    <section className="section section-muted" id="ubicacion" aria-labelledby="location-title">
      <div className="section-shell split-layout reverse">
        <div className="location-media">
          <img
            src="/imagenes-club/ED_14K_AR_WES_219.jpg"
            alt="Exterior del edificio 14K de la Universidad Austral de Chile"
          />
          <div className="map-placeholder" aria-label="Referencia de ubicación">
            Campus Miraflores · Centro 14K
          </div>
        </div>
        <div className="section-heading">
          <p className="eyebrow">Ubicación</p>
          <h2 id="location-title">Universidad Austral de Chile</h2>
          <p>
            El club se vincula con el Espacio 14K de la Facultad de Ciencias de la Ingeniería,
            Universidad Austral de Chile, en Valdivia, Región de Los Ríos.
          </p>
          <ul className="detail-list">
            <li>Campus Miraflores</li>
            <li>Centro 14K</li>
            <li>Valdivia, Región de Los Ríos</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Location;
