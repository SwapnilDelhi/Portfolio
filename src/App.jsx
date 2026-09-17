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
import Varanasi from './pages/Varanasi';
import Media from './pages/Media';
import Gallery from './pages/Gallery';
import Impact from './pages/Impact';
import Publications from './pages/Publications';
import Collaborate from './pages/Collaborate';
import Contact from './pages/Contact';
import Events from './pages/Events';
import Mission from './pages/Mission';
import GovernmentCollaboration from './pages/GovernmentCollaboration';
import NotFound from './pages/NotFound';

const siteUrl = 'https://swapnilpandey.com';

const routeMeta = {
  '/': {
    title: 'Swapnil Pandey | Youth Vision India Founder',
    description: 'Swapnil Pandey, founder of Youth Vision India, works on youth leadership, education reform, public policy, and community development in India.',
    keywords: 'Swapnil Pandey, Founder of Youth Vision India, youth leadership, public policy, research, education reform, Varanasi development, India',
    url: `${siteUrl}/`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/mission': {
    title: 'Mission | Swapnil Pandey | Founder of Youth Vision India',
    description: "Explore Swapnil Pandey's mission as Founder of Youth Vision India — youth leadership, public policy, and institution-building for a stronger, more inclusive India.",
    keywords: 'mission, Swapnil Pandey, Founder of Youth Vision India, youth leadership, public policy, nation building',
    url: `${siteUrl}/mission`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/about': {
    title: 'About Swapnil Pandey | Founder of Youth Vision India',
    description: 'Learn about Swapnil Pandey’s journey as Founder of Youth Vision India, spanning research, youth leadership, public policy, and national development.',
    keywords: 'About Swapnil Pandey, Founder of Youth Vision India, youth leader, public policy advisor, researcher, education reform, India',
    url: `${siteUrl}/about`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/journey': {
    title: 'Journey of Swapnil Pandey | Founder of Youth Vision India',
    description: 'Discover Swapnil Pandey’s education, research, and leadership journey as Founder of Youth Vision India, from academic excellence to youth-driven civic initiatives.',
    keywords: 'Swapnil Pandey journey, Founder of Youth Vision India, youth leadership, research history, education story, civic initiative',
    url: `${siteUrl}/journey`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/government-collaboration': {
    title: 'Raisina Engagement | Swapnil Pandey',
    description: 'Explore Swapnil Pandey’s Raisina engagement through policy dialogues, institutional partnerships, delegation meetings, and youth-led civic solutions.',
    keywords: 'Raisina engagement, policy advocacy, youth leadership, Swapnil Pandey, civic engagement',
    url: `${siteUrl}/government-collaboration`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/research': {
    title: 'Research | Swapnil Pandey',
    description: 'Explore Swapnil Pandey’s research work in mathematics, education policy, and social innovation for sustainable youth development.',
    keywords: 'research, Swapnil Pandey, mathematics, education policy, social innovation, youth development',
    url: `${siteUrl}/research`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/youth-vision-india': {
    title: 'Youth Vision India | Swapnil Pandey',
    description: 'Discover Youth Vision India, a youth-led platform founded by Swapnil Pandey for women’s empowerment, education reform, and community welfare.',
    keywords: 'Youth Vision India, YVI, Swapnil Pandey, youth platform, empowerment, education, social welfare',
    url: `${siteUrl}/youth-vision-india`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/varanasi': {
    title: 'Varanasi Development | Swapnil Pandey',
    description: 'Explore regional development work led by Swapnil Pandey in Varanasi, focused on heritage, infrastructure, and civic empowerment.',
    keywords: 'Varanasi development, Swapnil Pandey, regional initiative, civic empowerment, heritage preservation',
    url: `${siteUrl}/varanasi`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/media': {
    title: 'Media | Swapnil Pandey',
    description: 'View media coverage, stories, and interviews featuring Swapnil Pandey and Youth Vision India’s impact across education and policy.',
    keywords: 'media coverage, Swapnil Pandey, Youth Vision India, interviews, news, youth initiatives',
    url: `${siteUrl}/media`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/gallery': {
    title: 'Gallery | Swapnil Pandey',
    description: 'Browse the gallery of events, initiatives, and community work led by Swapnil Pandey and Youth Vision India.',
    keywords: 'gallery, Swapnil Pandey, Youth Vision India, events, community work, youth initiatives',
    url: `${siteUrl}/gallery`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/impact': {
    title: 'Impact | Swapnil Pandey',
    description: 'Explore the measurable impact of Youth Vision India through community service, youth leadership, policy engagement, and national initiatives.',
    keywords: 'impact, Youth Vision India, community service, youth leadership, policy engagement, social impact',
    url: `${siteUrl}/impact`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/publications': {
    title: 'Publications | Swapnil Pandey',
    description: 'Access publications and research work by Swapnil Pandey on gender equity, education, and leadership in India.',
    keywords: 'publications, Swapnil Pandey, research papers, education reform, gender equity, leadership',
    url: `${siteUrl}/publications`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/collaborate': {
    title: 'Collaborate | Swapnil Pandey',
    description: 'Connect with Swapnil Pandey for collaboration in youth leadership, research projects, education reform, and social impact initiatives.',
    keywords: 'collaborate, Swapnil Pandey, youth leadership, research partnership, social impact, education reform',
    url: `${siteUrl}/collaborate`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/events': {
    title: 'Events | Swapnil Pandey',
    description: 'Discover events, workshops, and youth-led programs hosted by Swapnil Pandey and the Youth Vision India community.',
    keywords: 'events, Swapnil Pandey, youth workshops, programs, Youth Vision India, community events',
    url: `${siteUrl}/events`,
    image: `${siteUrl}/ogimg.webp`,
  },
  '/contact': {
    title: 'Contact | Swapnil Pandey',
    description: 'Get in touch with Swapnil Pandey for speaking, research collaboration, and youth-policy initiatives.',
    keywords: 'contact, Swapnil Pandey, speaking, research collaboration, youth policy initiatives',
    url: `${siteUrl}/contact`,
    image: `${siteUrl}/ogimg.webp`,
  },
};

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const isKnownRoute = Boolean(routeMeta[location.pathname]);
  const meta = isKnownRoute
    ? routeMeta[location.pathname]
    : {
        title: 'Page Not Found | Swapnil Pandey',
        description: 'The requested page could not be found on the Swapnil Pandey website.',
        url: `${siteUrl}${location.pathname}`,
        robots: 'noindex,follow',
      };

  return (
    <>
      <Seo {...meta} />
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/about" element={<About />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/government-collaboration" element={<GovernmentCollaboration />} />
          <Route path="/research" element={<Research />} />
          <Route path="/youth-vision-india" element={<YouthVisionIndia />} />
          <Route path="/varanasi" element={<Varanasi />} />
          <Route path="/media" element={<Media />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/collaborate" element={<Collaborate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      {location.pathname !== '/' && <Footer />}
    </>
  );
}
