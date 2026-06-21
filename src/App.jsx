import { useCallback, useState } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import ClubGallery from './components/ClubGallery.jsx';
import About from './components/About.jsx';
import WhatWeDo from './components/WhatWeDo.jsx';
import Projects from './components/Projects.jsx';
import MentorsNetwork from './components/MentorsNetwork.jsx';
import CollaboratorsCarousel from './components/CollaboratorsCarousel.jsx';
import Coordinators from './components/Coordinators.jsx';
import Statutes from './components/Statutes.jsx';
import Location from './components/Location.jsx';
import InstitutionalLink from './components/InstitutionalLink.jsx';
import JoinClub from './components/JoinClub.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Toast from './components/Toast.jsx';

function App() {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message) => {
    setToast(message);
  }, []);

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ClubGallery />
        <About />
        <WhatWeDo />
        <Projects />
        <MentorsNetwork onSchedule={showToast} />
        <CollaboratorsCarousel />
        <Coordinators />
        <Statutes />
        <Location />
        <InstitutionalLink />
        <JoinClub />
        <Contact onSubmitMessage={showToast} />
      </main>
      <Footer />
      <Toast message={toast} onClose={closeToast} />
    </>
  );
}

export default App;
