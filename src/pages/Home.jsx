import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { homeImg, youthVisionImg, parliamentImg, varanasiImg } from '../assets/images/home';
import { schoolImg, youthVisionImg as journeyYouthImg, varanasiImg as journeyVaranasiImg, parliamentImg as journeyParliamentImg, researchImg, todayImg } from '../assets/images/journey';
import { apImg } from '../assets/images/research';
import { getSortedEvents } from '../data/events';
import { delegationMeetings } from '../data/engagements';
import './Home.css';


const COLUMNS = [

  {
    to: '/government-collaboration',
    label: 'Raisina Engagement',
    kicker: '01 — Raisina Hills',
    text: 'Meetings and policy dialogues with the Speaker of Lok Sabha, Union Cabinet Ministers, and senior officials on research, education reform, youth leadership, and nation-building.',
    image: parliamentImg,
  },
  {
    to: '/journey#youth-vision-india',
    label: 'Youth Vision India',
    kicker: '02 — Youth-Led Platform',
    text: 'A youth-led platform building a more educated, empowered, and compassionate India — through women\u2019s empowerment, sanitary pad distribution, education, and grassroots welfare drives across states.',
    image: youthVisionImg,
  },
  {
    to: '/varanasi',
    label: 'Varanasi Development',
    kicker: '03 — Regional Initiative',
    text: 'A dedicated development initiative for Varanasi, working at the intersection of heritage, civic infrastructure, and community-driven progress.',
    image: varanasiImg,
  },
];

const HIGHLIGHTS = [
  { icon: '⌂', label: 'Indian Institute of Technology' },
  { icon: '∑', label: 'Researcher & Innovator, NITI Aayog' },
  { icon: '⚖', label: 'NEP Board, Ministry of Education' },
  { icon: '◎', label: 'World Economic Forum & UNICEF' },
  { icon: '◆', label: 'Founder and Director, Youth Vision India' },
  { icon: '✓', label: 'Intellectual Property India Certified' },
];


const STATS = [
  { value: '16,000+', label: 'Digital community' },
  { value: '1,200+', label: 'Lives impacted' },
  { value: '28+', label: 'Policy & research engagements' },
];

const JOURNEY = [
  { date: 'School years', title: 'Early years in Varanasi', text: 'First exposure to the civic and cultural life of the city.', image: schoolImg },
  { date: 'Research', title: 'Mathematical discoveries', text: 'New divisibility tests, recognised by the Speaker of Lok Sabha.', image: researchImg },
  { date: '2019 — ongoing', title: 'Founding Youth Vision India', text: 'A structured route into policy discussion and civic training.', image: journeyYouthImg },
  { date: 'National engagement', title: 'Parliament and public policy', text: 'Continued national engagement alongside local development.', image: journeyParliamentImg },
  { date: 'Varanasi', title: 'Regional development', text: 'Working with communities on heritage, infrastructure, and progress.', image: journeyVaranasiImg },
  { date: 'Today', title: 'Building what comes next', text: 'Turning research and organised youth action into measurable impact.', image: todayImg },
];

const GALLERY = [
  { label: 'YVIians at Parliament', folder: 'YVIiansAtParli' },
  { label: 'India International Centre', folder: 'iih' },
  { label: 'Raisina Hills', folder: 'raisina' },
  { label: 'Early Journey', folder: 'school' },
];

const galleryImages = import.meta.glob('../assets/images/gallery/**/*.{png,jpg,jpeg}', { eager: true, import: 'default' });

function getGalleryImage(folder) {
  const match = Object.entries(galleryImages).find(([path]) => path.includes(`/gallery/${folder}/`));
  return match?.[1];
}

export default function Home() {
  const journeyRef = useRef(null);
  const events = getSortedEvents().slice(0, 3);
  const engagements = delegationMeetings;

  const scrollJourney = (direction) => {
    journeyRef.current?.scrollBy({ left: direction * 324, behavior: 'smooth' });
  };

  return (
    <>
      <section
        className="hero"
        style={{ backgroundImage: `url(${homeImg})` }}
      >
        <div className="hero-overlay"></div>

        <div className="container hero-content">
          <div className="hero-copy">

            <span className="hero-kicker">
             'शीलं परम भूषणम्'
            </span>

            <h1>
              Swapnil
              <br />
              Pandey
            </h1>

            <div className="rule"></div>

            <div className="hero-main">
              <div className="hero-highlights">
                {HIGHLIGHTS.map((h) => (
                  <div className="highlight" key={h.label}>
                    <span className="highlight-icon">{h.icon}</span>
                    <span>{h.label}</span>
                  </div>
                ))}
              </div>

              <div className="hero-callout">
                <div className="hero-quote">
                  <span className="hero-quote-mark">&#8220;</span>
                  <p className="hero-quote-text">
                    Destiny does not reward intentions.
                    <br />
                    It rewards unwavering execution.
                  </p>
                </div>

                <div className="hero-actions">
                  <Link to="/journey" className="btn hero-btn">
                    Explore Journey <span className="hero-btn-arrow">→</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
          <div className="hero-stats-wrap">
          <div className="container hero-stats">
            {STATS.map((s) => (
              <div className="stat" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="scroll-indicator" aria-hidden="true">
          <span className="scroll-mouse"><span className="scroll-dot"></span></span>
          <span className="scroll-chevron">⌄</span>
        </div> */}
      </section>

      <div className="scroll-content">
      <section className="section section-alt about-intro" aria-labelledby="about-preview-title">
        <div className="container about-intro-grid">
          <div>
            <div className="eyebrow">About</div>
            <Link to="/about" className="section-title-link"><h2 id="about-preview-title">About Swapnil Pandey</h2></Link>
            <div className="rule"></div>
          </div>
          <p>
            Swapnil Pandey is a mathematical researcher, youth leader, and Founder and Director of
            Youth Vision India. His work connects research, education reform, public policy, and
            community development, with a focus on empowering young people and advancing meaningful
            civic initiatives across India, including Varanasi.
          </p>
          <Link to="/about" className="about-link">
            Know More About Me →
          </Link>
        </div>
      </section>

      <section className="section columns-section">
        <div className="container">
          <div className="eyebrow">Focus Areas</div>
          <h2>Three pillars of the work</h2>
          <div className="rule"></div>

          <div className="columns-grid">
            {COLUMNS.map((c) => (
              <Link to={c.to} key={c.to} className="pillar-card">
                <div className="pillar-image">
                  <img src={c.image} alt={c.label} />
                </div>
                <div className="pillar-body">
                  <div className="pillar-kicker">{c.kicker}</div>
                  <h3>{c.label}</h3>
                  <p>{c.text}</p>
                  <span className="pillar-link">Explore &rarr;</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt journey-section">
        <div className="container">
          <div className="eyebrow">Journey</div>
          <Link to="/journey" className="section-title-link"><h2>The path so far</h2></Link>
          <div className="rule"></div>
          <div className="journey-scroll" ref={journeyRef}>
            {JOURNEY.map((item) => (
              <Link to="/journey" className="journey-card" key={item.title}>
                <div className="journey-card-media"><img src={item.image} alt="" loading="lazy" /></div>
                <div className="journey-card-body">
                  <div className="journey-card-date">{item.date}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="journey-controls">
            <button type="button" className="journey-scroll-btn" onClick={() => scrollJourney(-1)} aria-label="Scroll journey left">←</button>
            <button type="button" className="journey-scroll-btn" onClick={() => scrollJourney(1)} aria-label="Scroll journey right">→</button>
            <span className="journey-hint">Scroll or drag to explore</span>
            <Link to="/journey" className="about-link">Read the full journey →</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Raisina engagements</div>
          <Link to="/government-collaboration" className="section-title-link"><h2>Dialogue that moves ideas forward</h2></Link>
          <div className="rule"></div>
          <div className="engagement-preview-list" aria-label="Raisina collaborations">
            {engagements.map((item) => (
              <Link to="/government-collaboration" className="engagement-preview" key={item.title}>
                <div className="ep-title">{item.title}</div>
                <div className="ep-role">{item.role}</div>
              </Link>
            ))}
          </div>
          <Link to="/government-collaboration" className="about-link">View all engagements →</Link>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="eyebrow">Events</div>
          <Link to="/events" className="section-title-link"><h2>What's happening now</h2></Link>
          <div className="rule"></div>
          <div className="home-events-grid">
            {events.map((event) => (
              <article className="event-card" key={event.id}>
                <div className="event-image"><img src={event.image} alt={event.imageAlt} loading="lazy" /></div>
                <div className="event-body">
                  <div className="event-date">{event.date}</div>
                  <h3 className="event-title">{event.title}</h3>
                  <p className="event-desc">{event.description}</p>
                  <Link to="/events" className="event-link">More info →</Link>
                </div>
              </article>
            ))}
          </div>
          <Link to="/events" className="about-link">See all events →</Link>
        </div>
      </section>

      <section className="section">
        <div className="container feature-split">
          <Link to="/research" className="research-image"><img src={apImg} alt="Ramanujan summation research paper by Swapnil Pandey" loading="lazy" /></Link>
          <div className="feature-copy">
            <div className="eyebrow">Research &amp; publications</div>
            <Link to="/research" className="section-title-link"><h2>Applying rigour to public policy</h2></Link>
            <div className="rule"></div>
            <h3>Reading Ramanujan through arithmetic</h3>
            <p>A symbolic interpretation of Ramanujan's famous divergent series, developed through the arithmetic progression formula.</p>
            <Link to="/research" className="about-link">Explore research →</Link>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="eyebrow">Media</div>
          <Link to="/media" className="section-title-link"><h2>In the press</h2></Link>
          <div className="rule"></div>
          <div className="card-grid">
            <Link to="/media" className="info-card"><div className="source">News18 हिंदी</div><h3>A brilliant young mind discovered a remarkable math trick that impressed NASA and beyond</h3></Link>
            <Link to="/media" className="info-card"><div className="source">News18 हिंदी</div><h3>ISRO and NASA recognised the science behind a smart streetlight innovation</h3></Link>
            <Link to="/media" className="info-card"><div className="source">Dainik Jagran</div><h3>Newspaper coverage of youth-led community initiatives</h3></Link>
          </div>
          <Link to="/media" className="about-link">View media coverage →</Link>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="eyebrow">Gallery</div>
          <Link to="/gallery" className="section-title-link"><h2>Snapshots</h2></Link>
          <div className="rule"></div>
          <div className="gallery-preview-grid">
            {GALLERY.map((item) => (
              <Link to="/gallery" className="gallery-preview-item" key={item.folder}>
                {getGalleryImage(item.folder) ? <img src={getGalleryImage(item.folder)} alt={item.label} loading="lazy" /> : <span className="gallery-fallback" />}
                <span className="gallery-preview-label">{item.label}</span>
              </Link>
            ))}
          </div>
          <Link to="/gallery" className="about-link">Open gallery →</Link>
        </div>
      </section>

      <section className="section section-navy quote-section">
        <div className="container quote-grid">
          <div className="quote-mark">&#8220;</div>
          <p className="quote-text devanagari-quote">शीलं परम भूषणम्</p>
          <p className="quote-sub">Character is the highest virtue.</p>
        </div>
      </section>
      </div>
    </>
  );
}
