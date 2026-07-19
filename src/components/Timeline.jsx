import ImagePlaceholder from './ImagePlaceholder';
import './Timeline.css';

/**
 * entries: [{ date, title, role, points: string[], document }]
 */
export default function Timeline({ entries, className = '' }) {
  return (
    <div className={`timeline ${className}`.trim()}>
      {entries.map((e, i) => (
        <div className="timeline-entry" key={i}>
          <div className="timeline-marker">
            <span className="timeline-dot"></span>
            {i !== entries.length - 1 && <span className="timeline-line"></span>}
          </div>

          <div className="timeline-media">
            <ImagePlaceholder label={e.title} ratio="4 / 3" />
          </div>

          <div className="timeline-content">
            {e.date && <div className="timeline-date">{e.date}</div>}
            <h3>{e.title}</h3>
            {e.role && <div className="timeline-role">{e.role}</div>}
            <ul>
              {e.points.map((p, j) => <li key={j}>{p}</li>)}
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
