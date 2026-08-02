import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Seo from './components/Seo';

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
import Impact from './pages/Impact';
import Publications from './pages/Publications';
import Collaborate from './pages/Collaborate';
import Contact from './pages/Contact';
import Events from './pages/Events';

const routeMeta = {
  '/': {
    title: 'Swapnil Pandey | Youth Leadership, Public Policy & Research',
    description: 'Explore the work of Swapnil Pandey — youth leader, researcher, and founder of Youth Vision India driving education, policy, and community development.',
    keywords: 'Swapnil Pandey, Youth Vision India, youth leadership, public policy, research, education reform, Varanasi development, India',
  },
  '/about': {
    title: 'About Swapnil Pandey | Youth Leadership & Research',
    description: 'Learn about Swapnil Pandey’s journey in research, youth leadership, and public policy across education, civic engagement, and national development.',
    keywords: 'About Swapnil Pandey, youth leader, public policy advisor, researcher, education reform, India',
  },
  '/journey': {
    title: 'Journey | Swapnil Pandey',
    description: 'Discover Swapnil Pandey’s education, research, and leadership journey, from academic excellence to youth-driven civic initiatives.',
    keywords: 'Swapnil Pandey journey, youth leadership, research history, education story, civic initiative',
  },
  '/government-collaboration': {
    title: 'Government Collaboration | Swapnil Pandey',
    description: 'See how Swapnil Pandey partners with government institutions, policy leaders, and stakeholders to drive youth-led research and civic solutions.',
    keywords: 'government collaboration, policy advocacy, youth leadership, Swapnil Pandey, civic engagement',
  },
  '/achievements': {
    title: 'Achievements | Swapnil Pandey',
    description: 'Review the achievements and impact of Swapnil Pandey across research, youth empowerment, education, and public policy innovation.',
    keywords: 'achievements, Swapnil Pandey, youth impact, research accolades, public policy, education initiatives',
  },
  '/research': {
    title: 'Research | Swapnil Pandey',
    description: 'Explore Swapnil Pandey’s research work in mathematics, education policy, and social innovation for sustainable youth development.',
    keywords: 'research, Swapnil Pandey, mathematics, education policy, social innovation, youth development',
  },
  '/youth-vision-india': {
    title: 'Youth Vision India | Swapnil Pandey',
    description: 'Discover Youth Vision India, a youth-led platform founded by Swapnil Pandey for women’s empowerment, education reform, and community welfare.',
    keywords: 'Youth Vision India, YVI, Swapnil Pandey, youth platform, empowerment, education, social welfare',
  },
  '/parliament': {
    title: 'Parliament Engagement | Swapnil Pandey',
    description: 'Learn about Swapnil Pandey’s engagement with Parliament of India, policy dialogue, and research-backed initiatives for national progress.',
    keywords: 'Parliament engagement, Swapnil Pandey, policy dialogue, national development, research initiatives',
  },
  '/varanasi': {
    title: 'Varanasi Development | Swapnil Pandey',
    description: 'Explore regional development work led by Swapnil Pandey in Varanasi, focused on heritage, infrastructure, and civic empowerment.',
    keywords: 'Varanasi development, Swapnil Pandey, regional initiative, civic empowerment, heritage preservation',
  },
  '/media': {
    title: 'Media | Swapnil Pandey',
    description: 'View media coverage, stories, and interviews featuring Swapnil Pandey and Youth Vision India’s impact across education and policy.',
    keywords: 'media coverage, Swapnil Pandey, Youth Vision India, interviews, news, youth initiatives',
  },
  '/gallery': {
    title: 'Gallery | Swapnil Pandey',
    description: 'Browse the gallery of events, initiatives, and community work led by Swapnil Pandey and Youth Vision India.',
    keywords: 'gallery, Swapnil Pandey, Youth Vision India, events, community work, youth initiatives',
  },
  '/impact': {
    title: 'Impact | Swapnil Pandey',
    description: 'Explore the measurable impact of Youth Vision India through community service, youth leadership, policy engagement, and national initiatives.',
    keywords: 'impact, Youth Vision India, community service, youth leadership, policy engagement, social impact',
  },
  '/publications': {
    title: 'Publications | Swapnil Pandey',
    description: 'Access publications and research work by Swapnil Pandey on gender equity, education, and leadership in India.',
    keywords: 'publications, Swapnil Pandey, research papers, education reform, gender equity, leadership',
  },
  '/collaborate': {
    title: 'Collaborate | Swapnil Pandey',
    description: 'Connect with Swapnil Pandey for collaboration in youth leadership, research projects, education reform, and social impact initiatives.',
    keywords: 'collaborate, Swapnil Pandey, youth leadership, research partnership, social impact, education reform',
  },
  '/events': {
    title: 'Events | Swapnil Pandey',
    description: 'Discover events, workshops, and youth-led programs hosted by Swapnil Pandey and the Youth Vision India community.',
    keywords: 'events, Swapnil Pandey, youth workshops, programs, Youth Vision India, community events',
  },
  '/contact': {
    title: 'Contact | Swapnil Pandey',
    description: 'Get in touch with Swapnil Pandey for speaking, research collaboration, and youth-policy initiatives.',
    keywords: 'contact, Swapnil Pandey, speaking, research collaboration, youth policy initiatives',
  },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const meta = routeMeta[location.pathname] || routeMeta['/'];

  return (
    <>
      <Seo {...meta} />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/government-collaboration" element={<Achievements />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/research" element={<Research />} />
          <Route path="/youth-vision-india" element={<YouthVisionIndia />} />
          <Route path="/parliament" element={<Parliament />} />
          <Route path="/varanasi" element={<Varanasi />} />
          <Route path="/media" element={<Media />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {location.pathname !== '/' && <Footer />}
    </>
  );
}
