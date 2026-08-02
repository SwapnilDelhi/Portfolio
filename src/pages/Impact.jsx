import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import './Impact.css';

const IMPACT_METRICS = [
  { value: '16,000+', label: 'Digital community' },
  { value: '1,200+', label: 'Lives impacted' },
  { value: '800+', label: 'Community service beneficiaries' },
  { value: '28+', label: 'Policy & research engagements' },
  { value: '32+', label: 'Institutional dialogues' },
  { value: '83+', label: 'Youth leaders' },
  { value: '500+', label: 'Volunteers engaged regularly' },
  { value: '8 Million', label: 'Awareness reach (online + offline)' },
  { value: '12', label: 'Ongoing national initiatives' },
];

const IMPACT_PILLARS = [
  {
    title: 'Community-led service',
    text: 'From welfare drives to educational support, our work is rooted in direct care for people and places that need sustained attention.',
  },
  {
    title: 'Youth leadership',
    text: 'We are building a growing network of young leaders who turn compassion into action, advocacy, and long-term public engagement.',
  },
  {
    title: 'Policy & research',
    text: 'Grounded in lived experience, our engagement with institutions helps translate community realities into practical ideas and reform conversations.',
  },
  {
    title: 'Digital and national reach',
    text: 'By combining online awareness with on-the-ground service, we are expanding access, dialogue, and participation at scale.',
  },
];

export default function Impact() {
  return (
    <>
      <PageHeader
        eyebrow="Impact"
        title="Impact in motion"
        subtitle="A youth-led movement creating measurable change through service, leadership, research, and national engagement."
      />

      <section className="section section-alt">
        <div className="container impact-hero">
          <div className="impact-hero-copy">
            <div className="eyebrow">From local action to national visibility</div>
            <h2>Measured impact, meaningful change</h2>
            <div className="rule"></div>
            <p>
              Youth Vision India has grown into a platform where community service, public engagement,
              and youth leadership work together to create lasting impact. Every initiative reflects a
              deeper commitment to dignity, access, awareness, and opportunity.
            </p>
            <p>
              The numbers below capture the scale of this journey — not as abstract metrics, but as a
              reflection of lives reached, families supported, young people mobilised, and conversations
              shaped at the national level.
            </p>
            <div className="impact-hero-actions">
              <Link className="btn btn-primary" to="/contact">Partner with us</Link>
              <Link className="btn btn-outline-navy" to="/events">See our events</Link>
            </div>
          </div>

          <div className="impact-dashboard">
            <div className="impact-dashboard-grid">
              {IMPACT_METRICS.map((item) => (
                <article className="impact-card" key={item.label}>
                  <div className="impact-card-value">{item.value}</div>
                  <div className="impact-card-label">{item.label}</div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">How the impact is created</div>
            <h2>Focused on dignity, access, and leadership</h2>
            <div className="rule"></div>
          </div>

          <div className="impact-pillars">
            {IMPACT_PILLARS.map((pillar) => (
              <article className="impact-pillar" key={pillar.title}>
                <h3>{pillar.title}</h3>
                <p>{pillar.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container impact-cta">
          <div>
            <div className="eyebrow">Next chapter</div>
            <h2>Every number represents a life, a family, and a future.</h2>
            <p>
              As the movement grows, so does the opportunity to build deeper partnerships, expand
              outreach, and strengthen the impact of youth-led service across the country.
            </p>
          </div>
          <Link className="btn btn-primary" to="/collaborate">Support the next chapter</Link>
        </div>
      </section>
    </>
  );
}
