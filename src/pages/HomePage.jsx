import Hero from '../components/Hero.jsx';
import ClubGallery from '../components/ClubGallery.jsx';
import About from '../components/About.jsx';
import WhatWeDo from '../components/WhatWeDo.jsx';
import Projects from '../components/Projects.jsx';
import CollaboratorsCarousel from '../components/CollaboratorsCarousel.jsx';
import Coordinators from '../components/Coordinators.jsx';
import Statutes from '../components/Statutes.jsx';
import Location from '../components/Location.jsx';
import InstitutionalLink from '../components/InstitutionalLink.jsx';
import JoinClub from '../components/JoinClub.jsx';
import Contact from '../components/Contact.jsx';
import InstitutionalLogos from '../components/InstitutionalLogos.jsx';

function HomePage() {
  return (
    <main id="main-content">
      <Hero />
      <About />
      <WhatWeDo />
      <Projects />
      <CollaboratorsCarousel />
      <Coordinators />
      <ClubGallery />
      <Statutes />
      <Location />
      <InstitutionalLink />
      <JoinClub />
      <Contact />
      <InstitutionalLogos />
    </main>
  );
}

export default HomePage;
