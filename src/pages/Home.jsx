import { Link } from 'react-router-dom';
import ImagePlaceholder from '../components/ImagePlaceholder';
import homeImg from '../assets/images/home.png';
import './Home.css';


const COLUMNS = [
  {
    to: '/journey#youth-vision-india',
    label: 'Youth Vision India',
    kicker: '01 — Youth-Led Platform',
    text: 'A youth-led platform building a more educated, empowered, and compassionate India — through women\u2019s empowerment, sanitary pad distribution, education, and grassroots welfare drives across states.',
  },
  {
    to: '/journey#government-engagement',
    label: 'Parliament of India',
    kicker: '02 — Government Engagement',
    text: 'Meetings and policy dialogues with the Speaker of Lok Sabha, Union Cabinet Ministers, and senior officials on research, education reform, youth leadership, and nation-building.',
  },
  {
    to: '/journey#varanasi-development',
    label: 'Varanasi Development',
    kicker: '03 — Regional Initiative',
    text: 'A dedicated development initiative for Varanasi, working at the intersection of heritage, civic infrastructure, and community-driven progress.',
  },
];
export default function Home() {
  return (
    <>
      <section className="hero">
  <div className="container hero-grid">

    <div className="hero-copy">

      <span className="hero-kicker">
        Founder • Youth Vision India
      </span>

      <h1>
        Swapnil
        <br />
        Pandey
      </h1>

      <div className="hero-highlights">

        <div className="highlight">
          <span className="highlight-icon">∑</span>
          <span>Mathematical Researcher</span>
        </div>

        <div className="highlight">
          <span className="highlight-icon">◎</span>
          <span>Youth Leader</span>
        </div>

        <div className="highlight">
          <span className="highlight-icon">⚖</span>
          <span>Public Policy Advocate</span>
        </div>

      </div>

      <div className="rule"></div>

      <p className="hero-tagline">
        Building solutions through research, innovation,
        education and public leadership to create lasting
        social impact across India.
      </p>

      <div className="hero-actions">
        <Link to="/journey" className="btn btn-primary hero-btn">
          Explore the Journey →
        </Link>
      </div>

    </div>

    <div className="hero-photo">
      <img
        src={homeImg}
        alt="Swapnil Pandey"
        className="hero-image"
      />
    </div>

  </div>
</section>

      <section className="section section-alt about-intro">
        <div className="container about-intro-grid">
          <div>
            <div className="eyebrow">About</div>
            <h2>Who Swapnil Pandey is,<br />and why Youth Vision India exists</h2>
            <div className="rule"></div>
          </div>
          <p>
            Swapnil Pandey works at the intersection of mathematical research, youth leadership, and
            public policy — engaging government institutions, universities, and international bodies
            to solve real problems through evidence, education, and organised youth action.
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
                <ImagePlaceholder label={c.label} ratio="16 / 11" />
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

      <section className="section-navy section quote-section">
        <div className="container quote-grid">
          <div className="quote-mark">&#8220;</div>
          <p className="quote-text devanagari-quote">शीलं परम भूषणम्</p>
          <p className="quote-sub">Character is the highest virtue.</p>
        </div>
      </section>
    </>
  );
}
