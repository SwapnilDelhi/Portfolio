import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import Journey from './pages/Journey';
import Achievements from './pages/Achievements';
import Research from './pages/Research';
import YouthVisionIndia from './pages/YouthVisionIndia';
import Parliament from './pages/Parliament';
import Varanasi from './pages/Varanasi';
import Media from './pages/Media';
import Gallery from './pages/Gallery';
import Publications from './pages/Publications';
import Collaborate from './pages/Collaborate';
import Contact from './pages/Contact';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const [loading, setLoading] = useState(true);

  if (loading) {
    return <LoadingScreen onFinish={() => setLoading(false)} />;
  }

  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/research" element={<Research />} />
          <Route path="/youth-vision-india" element={<YouthVisionIndia />} />
          <Route path="/parliament" element={<Parliament />} />
          <Route path="/varanasi" element={<Varanasi />} />
          <Route path="/media" element={<Media />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
