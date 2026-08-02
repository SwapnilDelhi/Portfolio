import { useEffect, useState } from 'react';
import PageHeader from '../components/PageHeader';
import './Gallery.css';

const parliamentModules = import.meta.glob('../assets/images/gallery/YVIiansAtParli/*.{png,jpg,jpeg}', { eager: true });
const parliamentImages = Object.entries(parliamentModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' }))
  .map(([, module]) => module.default);

const iihModules = import.meta.glob('../assets/images/gallery/iih/*.{png,jpg,jpeg}', { eager: true });
const iihImages = Object.entries(iihModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' }))
  .map(([, module]) => module.default);

const raisinaModules = import.meta.glob('../assets/images/gallery/raisina/*.{png,jpg,jpeg}', { eager: true });
const raisinaImages = Object.entries(raisinaModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' }))
  .map(([, module]) => module.default);

const schoolModules = import.meta.glob('../assets/images/gallery/school/*.{png,jpg,jpeg}', { eager: true });
const schoolImages = Object.entries(schoolModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB, undefined, { numeric: true, sensitivity: 'base' }))
  .map(([, module]) => module.default);

const SECTIONS = [
  {
    id: 'parliament',
    title: 'YVIians at Parliament.',
    subtitle: 'Selected moments from Parliamentary visits and policy engagements.',
    images: parliamentImages,
  },
  {
    id: 'iih',
    title: 'India International Centre.',
    subtitle: 'Talks, roundtables and collaborations hosted at IIC.',
    images: iihImages,
  },
  {
    id: 'raisina',
    title: 'Raisina Hills.',
    subtitle: 'Policy dialogues and Raisina-focused engagements.',
    images: raisinaImages,
  },
  {
    id: 'school',
    title: 'Early Journey.',
    subtitle: 'Moments from the early journey schooldays, competitions, and early leadership.',
    images: schoolImages,
  }
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedImage(null);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const openPreview = (src, alt) => setSelectedImage({ src, alt });
  const closePreview = () => setSelectedImage(null);

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
                section.images.map((src, i) => {
                  const alt = `${section.title} ${i + 1}`;
                  return (
                    <div
                      className="gallery-item"
                      key={i}
                      role="button"
                      tabIndex={0}
                      onClick={() => openPreview(src, alt)}
                      onKeyDown={(event) => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault();
                          openPreview(src, alt);
                        }
                      }}
                    >
                      <img src={src} alt={alt} loading="lazy" />
                    </div>
                  );
                })
              ) : (
                <div className="gallery-placeholder">
                  <div className="placeholder-box" aria-hidden="true"></div>
                  <div className="placeholder-text">Images coming soon — update in /assets/images/gallery</div>
                </div>
              )}
            </div>
          </div>
        </section>
      ))}

      {selectedImage && (
        <div className="gallery-fullscreen" role="dialog" aria-modal="true" onClick={closePreview}>
          <button className="gallery-fullscreen-close" type="button" onClick={closePreview} aria-label="Close image preview">
            ×
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="gallery-fullscreen-image"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
