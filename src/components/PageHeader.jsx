import './PageHeader.css';

export default function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <div className="page-header">
      <div className="container">
        {eyebrow && <div className="eyebrow eyebrow-invert">{eyebrow}</div>}
        <h1>{title}</h1>
        {subtitle && <p className="page-header-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
