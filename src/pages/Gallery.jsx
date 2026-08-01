import PageHeader from '../components/PageHeader';
import './Gallery.css';

const imageModules = import.meta.glob('../assets/images/gallery/*.{png,jpg,jpeg}', { eager: true });
const galleryImages = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' }))
  .map(([, module]) => module.default);

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Photo Gallery"
        subtitle="A curated visual gallery with responsive, natural-ratio image cards."
      />

      <section className="section">
        <div className="container">
          <div className="gallery-grid">
            {galleryImages.map((src, index) => (
              <div className="gallery-item" key={index}>
                <img src={src} alt={`Gallery image ${index + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
