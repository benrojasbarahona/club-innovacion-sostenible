import { useCallback, useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Toast from './components/Toast.jsx';
import HomePage from './pages/HomePage.jsx';
import MentorsPage from './pages/MentorsPage.jsx';
import { withBase } from './lib/paths.js';

const normalizePath = (path) => path.replace(/\/+$/, '') || '/';

function App() {
  const [toast, setToast] = useState(null);
  const currentPath = normalizePath(window.location.pathname);
  const isMentorsPage = currentPath === normalizePath(withBase('mentores'));

  useEffect(() => {
    document.title = isMentorsPage
      ? 'Red de Mentores | Club de Innovación Sostenible UACh'
      : 'Club de Innovación Sostenible UACh';
  }, [isMentorsPage]);

  const showToast = useCallback((message) => {
    setToast(message);
  }, []);

  const closeToast = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <>
      <Header />
      {isMentorsPage ? (
        <MentorsPage onSchedule={showToast} />
      ) : (
        <HomePage />
      )}
      <Footer />
      <Toast message={toast} onClose={closeToast} />
    </>
  );
}

export default App;
