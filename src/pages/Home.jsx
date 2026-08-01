import { Link } from 'react-router-dom';
import { homeImg, youthVisionImg, parliamentImg, varanasiImg } from '../assets/images/home';
import './Home.css';


const COLUMNS = [

  {
    to: '/government-collaboration',
    label: 'Government Collaboration',
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
  { icon: '◎', label: 'Youth Leader' },
  { icon: '√x', label: 'Scientific & Mathematical Researcher' },
  { icon: '⚖', label: 'Societal Policy Advisor' },
  { icon: '⚙', label: 'Innovator and Strategist at NITI Aayog' },
  { icon: '★', label: 'Founder, Youth Vision India (YVI)' },
  { icon: '✔', label: 'Intellectual Property India Certified' },
];

export default function Home() {
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

        <div className="scroll-indicator" aria-hidden="true">
          <span className="scroll-mouse"><span className="scroll-dot"></span></span>
          <span className="scroll-chevron">⌄</span>
        </div>
      </section>

      {/*
      <section className="section section-alt about-intro">
        <div className="container about-intro-grid">
          <div>
            <div className="eyebrow">About</div>
            <h2>Who Swapnil Pandey is?</h2>
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

      <section className="section-navy section quote-section">
        <div className="container quote-grid">
          <div className="quote-mark">&#8220;</div>
          <p className="quote-text devanagari-quote">शीलं परम भूषणम्</p>
          <p className="quote-sub">Character is the highest virtue.</p>
        </div>
      </section>
      */}
    </>
  );
}