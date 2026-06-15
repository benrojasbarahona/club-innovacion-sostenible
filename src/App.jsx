import { useCallback, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Toast from './components/Toast.jsx';
import Home from './pages/Home.jsx';
import Mentors from './pages/Mentors.jsx';

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
        <Routes>
          <Route path="/" element={<Home showToast={showToast} />} />
          <Route path="/red-de-mentores" element={<Mentors showToast={showToast} />} />
        </Routes>
      </main>
      <Footer />
      <Toast message={toast} onClose={closeToast} />
    </>
  );
}

export default App;
