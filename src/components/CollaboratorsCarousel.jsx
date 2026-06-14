import { useRef } from 'react';
import { colaboradores } from '../data/collaborators.js';
import Icon from './Icon.jsx';

function CollaboratorsCarousel() {
  const carouselRef = useRef(null);

  const scrollByCard = (direction) => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const cardWidth = carousel.querySelector('.collaborator-card')?.offsetWidth || 320;
    carousel.scrollBy({ left: direction * (cardWidth + 18), behavior: 'smooth' });
  };

  return (
    <section className="section" id="colaboradores" aria-labelledby="collaborators-title">
      <div className="section-shell">
        <div className="carousel-heading">
          <div className="section-heading">
            <p className="eyebrow">Comunidad extendida</p>
            <h2 id="collaborators-title">Conoce a quienes han sido parte de nuestro proyecto</h2>
            <p>
              Colaboradores, invitados, expositores, aliados e instituciones que fortalecen el ecosistema del club.
            </p>
          </div>
          <div className="carousel-controls" aria-label="Controles del carrusel de colaboradores">
            <button type="button" onClick={() => scrollByCard(-1)} aria-label="Ver colaboradores anteriores">
              <Icon name="arrowLeft" />
            </button>
            <button type="button" onClick={() => scrollByCard(1)} aria-label="Ver más colaboradores">
              <Icon name="arrowRight" />
            </button>
          </div>
        </div>

        <div className="collaborators-carousel" ref={carouselRef} tabIndex="0">
          {colaboradores.map((collaborator) => (
            <article className="collaborator-card" key={collaborator.nombre}>
              <img src={collaborator.imagen} alt={`Imagen referencial de ${collaborator.nombre}`} />
              <div className="collaborator-body">
                <span>{collaborator.tipo}</span>
                <h3>{collaborator.nombre}</h3>
                <p className="role">{collaborator.rol}</p>
                <p className="institution">{collaborator.institucion}</p>
                <p>{collaborator.descripcion}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CollaboratorsCarousel;
