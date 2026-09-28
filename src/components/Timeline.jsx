import { useEffect, useRef } from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import './Timeline.css';

/**
 * entries: [{ date, title, role, image, points: string[], document }]
 */
export default function Timeline({ entries, className = '' }) {
  const timelineRef = useRef(null);

  useEffect(() => {
    const root = timelineRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    let disposed = false;
    let context;

    const initializeTimelineMotion = async () => {
      const [gsapModule, scrollTriggerModule] = await Promise.all([
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      if (disposed) return;

      const gsap = gsapModule.default;
      const { ScrollTrigger } = scrollTriggerModule;
      gsap.registerPlugin(ScrollTrigger);

      context = gsap.context(() => {
        const entries = gsap.utils.toArray('.timeline-entry');
        const track = root.querySelector('.timeline-track');

        if (track) {
          gsap.fromTo(track,
            { scaleY: 0 },
            {
              scaleY: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: root,
                start: 'top 78%',
                end: 'bottom 72%',
                scrub: true,
              },
            },
          );
        }

        entries.forEach((entry) => {
          gsap.fromTo(entry,
            { opacity: 0, y: 32 },
            {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: entry,
                start: 'top 86%',
                once: true,
              },
            },
          );
        });
      }, root);
    };

    initializeTimelineMotion();

    return () => {
      disposed = true;
      context?.revert();
    };
  }, []);

  const renderMedia = (entry) => {
    const images = entry.images || (entry.image ? [entry.image] : []);

    if (images.length > 0) {
      return (
        <div className="timeline-media-stack">
          {images.map((image, index) => (
            <img className="timeline-image" src={image} alt={`${entry.title} ${index + 1}`} />
          ))}
        </div>
      );
    }

    return <ImagePlaceholder label={entry.title} ratio="4 / 3" />;
  };

  return (
    <div ref={timelineRef} className={`timeline ${className}`.trim()}>
      <span className="timeline-track" aria-hidden="true" />
      {entries.map((e, i) => (
        <div
  className={`timeline-entry ${i % 2 === 1 ? "reverse" : ""}`}
  key={i}
>
          
          <div className="timeline-media">
            {e.date && <div className="timeline-date">{e.date}</div>}
            {renderMedia(e)}
          </div>

          <div className="timeline-content">
            <h3>{e.title}</h3>
            {e.role && <div className="timeline-role">{e.role}</div>}
            <ul className="timeline-points">
  {e.points.map((p, j) => (
    <li
      className="timeline-point"
      key={j}
      dangerouslySetInnerHTML={{ __html: p }}
    />
  ))}
</ul>
            {e.document && (
              <a className="timeline-doc" href={e.document} target="_blank" rel="noreferrer">
                View supporting document &rarr;
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}