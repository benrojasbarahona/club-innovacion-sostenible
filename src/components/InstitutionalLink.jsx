function InstitutionalLink() {
  return (
    <section className="section compact-section" aria-labelledby="institutional-title">
      <div className="section-shell institutional-band">
        <div>
          <p className="eyebrow">Vinculación institucional</p>
          <h2 id="institutional-title">Vinculación institucional</h2>
          <p>
            El club trabaja en coordinación con capacidades institucionales de innovación,
            emprendimiento y transferencia tecnológica para fortalecer proyectos estudiantiles.
          </p>
        </div>
        {/* Reemplazar este enlace cuando exista la URL oficial de la oficina. */}
        <a className="button button-primary" href="https://www.uach.cl/" aria-label="Conocer la Oficina de Innovación">
          Conocer la Oficina de Innovación
        </a>
      </div>
    </section>
  );
}

export default InstitutionalLink;
