import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import './InnerPage.css';
import './Gallery.css';

const CATEGORIES = ['Parliament', 'Government Meetings', 'Events', 'Research', 'Schools', 'Projects', 'Awards'];

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Photo Gallery"
        subtitle="High-quality photographs categorised across Parliament, Government Meetings, Events, Research, Schools, Projects, and Awards."
      />

      <section className="section">
        <div className="container">
          {CATEGORIES.map((cat) => (
            <div className="gallery-category" key={cat}>
              <h2 className="gallery-cat-title">{cat}</h2>
              <div className="rule"></div>
              <div className="gallery-grid">
                {[1, 2, 3, 4].map((n) => (
                  <ImagePlaceholder key={n} label={`${cat} ${n}`} ratio="1 / 1" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
