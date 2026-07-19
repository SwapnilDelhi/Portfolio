import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import './InnerPage.css';

const CATEGORIES = ['Newspapers', 'Interviews', 'Videos', 'Podcasts', 'Articles'];

export default function Media() {
  return (
    <>
      <PageHeader
        eyebrow="Media"
        title="Press & Media Coverage"
        subtitle="Newspapers, interviews, videos, podcasts, and articles, organised in one dedicated section."
      />

      <section className="section">
        <div className="container">
          {CATEGORIES.map((cat) => (
            <div className="media-category" key={cat}>
              <div className="section-heading" style={{ marginBottom: '20px' }}>
                <h2 style={{ fontSize: '22px' }}>{cat}</h2>
                <div className="rule"></div>
              </div>
              <div className="card-grid" style={{ marginTop: 0 }}>
                {[1, 2, 3].map((n) => (
                  <div className="info-card" key={n}>
                    <ImagePlaceholder label={`${cat} ${n}`} ratio="16 / 10" className="media-thumb" />
                    <h3 style={{ marginTop: '14px' }}>{cat.slice(0, -1)} title</h3>
                    <p>Publication or source name &middot; Date</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
