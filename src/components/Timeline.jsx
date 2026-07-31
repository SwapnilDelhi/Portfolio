import ImagePlaceholder from './ImagePlaceholder';
import './Timeline.css';

/**
 * entries: [{ date, title, role, image, points: string[], document }]
 */
export default function Timeline({ entries, className = '' }) {
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
    <div className={`timeline ${className}`.trim()}>
      {entries.map((e, i) => (
        <div
  className={`timeline-entry ${i % 2 === 1 ? "reverse" : ""}`}
  key={i}
>
          
          <div className="timeline-media">{renderMedia(e)}</div>

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