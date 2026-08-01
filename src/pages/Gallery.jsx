import PageHeader from '../components/PageHeader';
import './Gallery.css';

// Collect any existing gallery images as general placeholders.
const imageModules = import.meta.glob('../assets/images/gallery/*.{png,jpg,jpeg}', { eager: true });
const galleryImages = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' }))
  .map(([, module]) => module.default);

// Explicitly load the renamed YVIians at Parliament images.
const parliamentModules = import.meta.glob('../assets/images/gallery/YVIiansAtParli/*.{png,jpg,jpeg}', { eager: true });
const parliamentImages = Object.entries(parliamentModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' }))
  .map(([, module]) => module.default);

const SECTIONS = [
  {
    id: 'parliament',
    title: 'YVIians at Parliament.',
    subtitle: 'Selected moments from parliamentary visits and policy engagements.',
    images: parliamentImages,
  },
  {
    id: 'iic',
    title: 'India International Centre.',
    subtitle: 'Talks, roundtables and collaborations hosted at IIC.',
    images: galleryImages.slice(6, 12),
  },
  {
    id: 'raisina',
    title: 'Raisina Hills.',
    subtitle: 'Policy dialogues and Raisina-focused engagements.',
    images: galleryImages.slice(12, 18),
  },
];

export default function Gallery() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Photo Gallery"
        subtitle="A curated visual gallery with sectional highlights."
      />

      {SECTIONS.map((section) => (
        <section className="section gallery-section" key={section.id} id={section.id}>
          <div className="container">
            <div className="section-heading">
              <div className="eyebrow">{section.title}</div>
              <h2 className="section-title">{section.subtitle}</h2>
              <div className="rule"></div>
            </div>

            <div className="gallery-subgrid">
              {section.images && section.images.length > 0 ? (
                section.images.map((src, i) => (
                  <div className="gallery-item" key={i}>
                    <img src={src} alt={`${section.title} ${i + 1}`} loading="lazy" />
                  </div>
                ))
              ) : (
                // Placeholder card when images are not yet available
                <div className="gallery-placeholder">
                  <div className="placeholder-box" aria-hidden="true"></div>
                  <div className="placeholder-text">Images coming soon — update in /assets/images/gallery</div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
