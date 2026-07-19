import PageHeader from '../components/PageHeader';
import './InnerPage.css';

const TYPES = ['White Papers', 'Research Papers', 'Policy Notes', 'Articles', 'Reports'];

export default function Publications() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Publications & Downloads"
        subtitle="White papers, research papers, policy notes, articles, and reports — with downloadable PDF versions."
      />

      <section className="section">
        <div className="container">
          <div className="card-grid" style={{ marginTop: 0 }}>
            {TYPES.map((t) => (
              <div className="info-card" key={t}>
                <h3>{t}</h3>
                <p>Downloadable PDF versions of {t.toLowerCase()} will appear here.</p>
                <a className="btn btn-outline-navy" href="#" style={{ marginTop: '14px' }}>Browse</a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
