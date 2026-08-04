import missionImg from '../assets/images/about/about.jpeg';
import './Mission.css';
import {
  Users,
  BookOpen,
  Landmark,
  Lightbulb,
  Download,
  Mail,
  ArrowRight,
  ShieldCheck,
  Mountain,
  Award,
} from 'lucide-react';

const FEATURES = [
  {
    title: 'Leadership',
    desc: 'Building youth-led institutions and encouraging constructive participation in governance.',
    Icon: Users,
  },
  {
    title: 'Research',
    desc: 'Original research in mathematics and policy areas driving evidence-based solutions.',
    Icon: BookOpen,
  },
  {
    title: 'Policy',
    desc: 'Engaging with policymakers and contributing to public policy and nation-building.',
    Icon: Landmark,
  },
  {
    title: 'Innovation',
    desc: 'Creating innovative platforms that solve real-world problems and empower communities.',
    Icon: Lightbulb,
  },
];

const CORE_FOCUS = [
  { pre: 'Promote ', highlight: 'youth participation', post: ' in governance and community development.' },
  { pre: 'Advance ', highlight: 'evidence-based policymaking', post: ' and institutional leadership.' },
  { pre: 'Drive ', highlight: 'scientific research', post: ' and mathematical innovation.' },
  { pre: 'Strengthen public institutions through ', highlight: 'knowledge and integrity', post: '.' },
  { pre: 'Inspire the ', highlight: 'next generation of leaders', post: ' to build a better India.' },
];

const RECOGNITION = [
  {
    title: "Hon'ble Speaker, Lok Sabha",
    desc: 'Discussions facilitated through the Lok Sabha Secretariat.',
    Icon: Landmark,
  },
  {
    title: "Hon'ble Union Minister of Education",
    desc: "Policy discussions on CBSE reforms and strengthening India's education ecosystem.",
    Icon: ShieldCheck,
  },
  {
    title: "Hon'ble Lieutenant Governor, Jammu & Kashmir",
    desc: 'Appreciation for contributions to youth leadership and innovation.',
    Icon: Mountain,
  },
  {
    title: 'Intellectual Property India',
    desc: 'Copyright registrations granted for original mathematical research.',
    Icon: Award,
  },
];

export default function Mission() {
  return (
    <>
      <section className="mission-hero">
        <div className="container mission-hero-top">
          <h1>Swapnil Pandey</h1>
          <div className="mission-quote">
            <p className="mission-quote-devanagari">'शीलं परम भूषणम्'</p>
            <div className="mission-quote-rule"></div>
            <p className="mission-quote-sub">Character is the highest ornament.</p>
          </div>
        </div>

        <div className="container mission-hero-grid">
          <div className="mission-hero-copy">
            <div className="eyebrow eyebrow-invert">The Mission</div>
            <h2>
              Innovator. Researcher.
              <br />
              Nation Builder.
            </h2>
            <p>
              Mathematical researcher and Founder of Youth Vision India (YVI)
              dedicated to leadership, public policy, innovation, and building
              institutions that empower young citizens and strengthen
              national progress.
            </p>

            <div className="mission-hero-actions">
              <a className="mission-btn mission-btn-gold" href="#" target="_blank" rel="noreferrer">
                <Download size={16} /> Download CV
              </a>
              <a className="mission-btn mission-btn-outline" href="#/Contact">
                <Mail size={16} /> Get in Touch
              </a>
            </div>
          </div>

          <div className="mission-hero-media">
            <img src={missionImg} alt="Swapnil Pandey" />
          </div>
        </div>
      </section>

      <section className="section mission-features-section">
        <div className="container">
          <div className="feature-grid">
            {FEATURES.map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">
                  <f.Icon size={26} strokeWidth={1.6} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
                <div className="feature-underline"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mission-core-section">
        <div className="container">
          <div className="section-heading centered">
            <h2>Core Focus</h2>
            <div className="rule rule-center"></div>
          </div>

          <div className="core-focus-card">
            <ul className="core-focus-list">
              {CORE_FOCUS.map((item, i) => (
                <li key={i}>
                  <ArrowRight size={16} strokeWidth={2} />
                  <span>
                    {item.pre}
                    <strong className="va-highlight">{item.highlight}</strong>
                    {item.post}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section mission-recognition-section">
        <div className="container">
          <div className="section-heading centered">
            <h2>Recognition &amp; Engagement</h2>
            <div className="rule rule-center"></div>
          </div>

          <div className="recognition-grid">
            {RECOGNITION.map((r) => (
              <div className="recognition-card" key={r.title}>
                <div className="recognition-icon">
                  <r.Icon size={22} strokeWidth={1.6} />
                </div>
                <div>
                  <h3>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section mission-vision-section">
        <div className="container">
          <div className="section-heading centered">
            <h2>Vision</h2>
            <div className="rule rule-center"></div>
          </div>

          <div className="vision-card">
            <span className="vision-mark vision-mark-open">&ldquo;</span>
            <p className="vision-text">
              To build platforms that connect young citizens with public
              institutions, promote informed leadership, and encourage
              meaningful participation in India&apos;s developmental journey.
            </p>
            <span className="vision-mark vision-mark-close">&rdquo;</span>
            <div className="vision-attribution">— Swapnil Pandey</div>
            <div className="vision-dots"></div>
          </div>

          <div className="mission-hero-actions mission-cta-actions">
            <a className="mission-btn mission-btn-gold" href="#" target="_blank" rel="noreferrer">
              <Download size={16} /> Download CV
            </a>
            <a className="mission-btn mission-btn-navy" href="#/Contact">
              <Mail size={16} /> Get in Touch
            </a>
          </div>
        </div>
      </section>
    </>
  );
}