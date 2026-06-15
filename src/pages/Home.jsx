import Hero from '../components/Hero.jsx';
import About from '../components/About.jsx';
import WhatWeDo from '../components/WhatWeDo.jsx';
import Projects from '../components/Projects.jsx';
import CollaboratorsCarousel from '../components/CollaboratorsCarousel.jsx';
import Coordinators from '../components/Coordinators.jsx';
import Statutes from '../components/Statutes.jsx';
import Contact from '../components/Contact.jsx';

function Home({ showToast }) {
  return (
    <>
      <Hero />
      <About />
      <WhatWeDo />
      <Projects />
      <CollaboratorsCarousel />
      <Coordinators />
      <Statutes />
      <Contact onSubmitMessage={showToast} />
    </>
  );
}

export default Home;
