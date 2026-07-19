import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import './InnerPage.css';

// NOTE: Add real Varanasi Development content and photographs here once available.
const FOCUS_AREAS = [
  { title: 'Heritage & Ghats', text: 'Initiatives supporting the preservation and civic upkeep of Varanasi\u2019s heritage sites and riverfront ghats.' },
  { title: 'Civic Infrastructure', text: 'Community-driven proposals for sanitation, street lighting, and public infrastructure improvements.' },
  { title: 'Education & Youth', text: 'Extending Youth Vision India\u2019s education and empowerment programmes to Varanasi\u2019s communities.' },
  { title: 'Community Development', text: 'Local partnerships aimed at sustainable, ground-up regional development.' },
];

export default function Varanasi() {
  return (
    <>
      <PageHeader
        eyebrow="Regional Initiative"
        title="Varanasi Development"
        subtitle="A dedicated initiative working at the intersection of heritage, civic infrastructure, and community-driven progress in Varanasi."
      />

      <section className="section">
        <div className="container inner-split">
          <div className="inner-media">
            <ImagePlaceholder label="Varanasi Development" ratio="4 / 3" />
          </div>
          <div className="inner-copy">
            <h2>Heritage meets development</h2>
            <div className="rule"></div>
            <p>
              Varanasi Development is a regional initiative extending the same principles that guide
              Youth Vision India &mdash; education, empowerment, and civic welfare &mdash; into
              Varanasi, with a focus that respects the city&rsquo;s heritage while addressing its
              development needs.
            </p>
            <p>
              This section is being actively updated with project details, partnerships, and
              on-ground documentation as the initiative progresses.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Focus Areas</div>
            <h2>Where the work is concentrated</h2>
            <div className="rule"></div>
          </div>
          <div className="card-grid">
            {FOCUS_AREAS.map((f) => (
              <div className="info-card" key={f.title}>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
