import PageHeader from '../components/PageHeader';
import varanasiImg from '../assets/images/Varan.png';
import varadev2Img from '../assets/images/varadev2.jpeg';
import varadev3Img from '../assets/images/varadev3.jpg';
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

      {/* 1. INTRO — image floats right */}
      <section className="section">
        <div className="container inner-split">
          <div className="inner-media">
            <img src={varanasiImg} alt="Varanasi Development" />
          </div>
          <div className="inner-copy">
            <h2>Varanasi Development &amp; Community Service</h2>
            <div className="rule"></div>
            <p>
              Varanasi is not merely the city where I work—it is a <strong>timeless
              symbol of India's civilizational heritage</strong>, spirituality, knowledge, and
              resilience. Through Youth Vision India (YVI), our team remains committed to
              contributing towards the holistic development and empowerment of the people of
              Varanasi through sustained community engagement and public service.
            </p>
            <p>
              One of our ongoing initiatives is the support of an <strong>old age
              home</strong>, where our volunteers regularly provide fresh, nutritious, and hygienic
              meals to elderly residents. Beyond food distribution, we actively work to promote
              better sanitation and hygiene facilities while spending meaningful time with the
              residents through regular conversations and social engagement.
            </p>
          </div>
        </div>
      </section>

      {/* 2. MIDDLE — image floats left (reversed) */}
      <section className="section section-alt">
        <div className="container inner-split inner-split-reverse">
          <div className="inner-media">
            <img src={varadev2Img} alt="Varanasi Development — field visit" />
          </div>
          <div className="inner-copy">
            <p>
              Our commitment also extends to <strong>women's empowerment, youth
              engagement, education</strong>, community awareness, and volunteer-driven social
              initiatives aimed at creating long-term, sustainable impact. By encouraging
              leadership, participation, and self-reliance, we strive to strengthen communities
              from within.
            </p>
            <p>
              As Varanasi welcomes visitors from across the world, our team has also had the
              privilege of interacting with international visitors, particularly during occasions
              such as the <strong>International Day of Yoga</strong> and other
              public events. Through these interactions, we share the richness of India's cultural
              heritage, spiritual traditions, constitutional values, and the unique legacy of
              Varanasi as one of the world's oldest living cities.
            </p>
          </div>
        </div>
      </section>

      {/* 3. CLOSING — image floats right */}
      <section className="section">
        <div className="container inner-split">
          <div className="inner-media">
            <img src={varadev3Img} alt="Varanasi Development — community engagement" />
          </div>
          <div className="inner-copy">
            <p>
              Every initiative undertaken by Youth Vision India reflects a common purpose—to
              preserve India's cultural identity while contributing to social welfare, civic
              responsibility, and inclusive development. In recognition of these community service
              initiatives and public contributions, I had the honour of being appreciated by
              <strong> Shri Himanshu Nagpal, IAS (Chief Development Officer,
              Varanasi)</strong>, and the Additional District Magistrate, Varanasi. Their
              encouragement continues to inspire our team to work with greater dedication towards
              public service and nation-building.
            </p>
            <p>
              For us, development is not measured solely by infrastructure, but by the
              <strong> dignity of every citizen</strong>, the strength of every
              community, and the opportunities created for future generations.
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