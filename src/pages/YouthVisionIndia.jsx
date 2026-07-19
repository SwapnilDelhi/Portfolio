import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import './InnerPage.css';
import './YouthVisionIndia.css';

const AREAS = [
  { title: 'Mission', text: 'Building a more educated, empowered, and compassionate India through impactful grassroots initiatives.' },
  { title: 'Vision', text: 'A youth-led movement that converts education, empowerment, and welfare work into lasting national impact.' },
  { title: 'Women\u2019s Empowerment', text: 'Sustained menstrual hygiene and sanitary pad distribution drives across Delhi\u2013NCR, promoting women&rsquo;s health, dignity, and awareness.' },
  { title: 'Education', text: 'Ensuring underprivileged children receive access to quality education and building awareness of the transformative power of learning.' },
  { title: 'Policy Research', text: 'Translating grassroots experience into youth-driven policy ideas and recommendations placed before the Government of India.' },
  { title: 'Sanitary Pad Distribution', text: 'Regular distribution drives promoting menstrual health and dignity in underserved communities.' },
  { title: 'Environment', text: 'Community-level environmental initiatives, including winter relief campaigns distributing blankets and warm clothing.' },
  { title: 'Innovation', text: 'Youth-led innovations such as the Automatic Street Light System, presented to Ministry officials as sustainable infrastructure solutions.' },
];

export default function YouthVisionIndia() {
  return (
    <>
      <PageHeader
        eyebrow="Dedicated Portal"
        title="Youth Vision India"
        subtitle="A youth-led platform working across multiple states, with a strong focus on women's empowerment, child education, sanitation, community welfare, and humanitarian service."
      />

      <section className="section">
        <div className="container inner-split">
          <div className="inner-media">
            <ImagePlaceholder label="Youth Vision India — Field Work" ratio="4 / 3" />
          </div>
          <div className="inner-copy">
            <h2>Grassroots impact, nationwide</h2>
            <div className="rule"></div>
            <p>
              Under the leadership of Swapnil Pandey, Youth Vision India has emerged as a youth-led
              platform committed to building a more educated, empowered, and compassionate India
              through impactful grassroots initiatives.
            </p>
            <p>
              The organisation is actively working across multiple states with a strong focus on
              women&rsquo;s empowerment, child education, sanitation, community welfare, and
              humanitarian service. Members are dedicated to ensuring underprivileged children
              receive access to quality education, while creating awareness about the transformative
              power of learning and the importance of staying in school.
            </p>
            <p>
              In the Delhi&ndash;NCR region, the organisation has consistently conducted menstrual
              hygiene and sanitary pad distribution drives, promoting women&rsquo;s health, dignity,
              and awareness. During the winter season, volunteers have also undertaken large-scale
              winter relief campaigns, distributing blankets and warm clothing.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">What We Do</div>
            <h2>Focus areas</h2>
            <div className="rule"></div>
          </div>
          <div className="yvi-grid">
            {AREAS.map((a) => (
              <div className="yvi-card" key={a.title}>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section yvi-cta">
        <div className="container yvi-cta-row">
          <div>
            <h2>Team, Partners &amp; Get Involved</h2>
            <p>Volunteer, partner as a CSR contributor, or support ongoing initiatives.</p>
          </div>
          <div className="yvi-cta-actions">
            <Link className="btn btn-outline-navy" to="/collaborate">Volunteer</Link>
            <Link className="btn btn-outline-navy" to="/collaborate">Donate</Link>
            <Link className="btn btn-primary" to="/collaborate">Collaborate</Link>
          </div>
        </div>
      </section>
    </>
  );
}
