import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import './InnerPage.css';

const PATHWAYS = ['CSR', 'Government', 'Media', 'Schools', 'Universities', 'NGOs', 'Embassies', 'Corporate Partners'];

export default function Collaborate() {
  return (
    <>
      <PageHeader
        eyebrow="Collaborate"
        title="Dedicated Collaboration Pathways"
        subtitle="Structured ways to partner across CSR, Government, Media, Schools, Universities, NGOs, Embassies, and Corporate partners."
      />

      <section className="section">
        <div className="container">
          <div className="card-grid" style={{ marginTop: 0 }}>
            {PATHWAYS.map((p) => (
              <div className="info-card" key={p}>
                <h3>{p}</h3>
                <p>Partner with Youth Vision India through the {p} collaboration pathway.</p>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '48px' }}>
            <Link className="btn btn-primary" to="/contact">Start a Conversation</Link>
          </div>
        </div>
      </section>
    </>
  );
}
