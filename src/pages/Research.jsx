import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import './InnerPage.css';
import './Research.css';

const RESEARCH_AREAS = [
  {
    to: '/research/mathematical',
    label: 'Mathematical Research',
    title: 'Number theory and original discoveries',
    text: 'Explore papers on Ramanujan’s summation and new divisibility tests, with abstracts, problem statements, solutions, and downloads. Recognised by IMSc Chennai and IMU.',
  },
  {
    to: '/research/niti-aayog',
    label: 'NITI Aayog',
    title: 'Research and public policy',
    text: 'A growing body of work connecting innovation, youth leadership, and evidence-led conversations about India’s development.',
  },
];

export default function Research() {
  return (
    <>
      <PageHeader
        eyebrow="Research"
        title="Ideas that move into the world"
        subtitle="Explore the two strands of Swapnil Pandey’s research: mathematical discovery and public policy innovation."
      />

      <section className="section">
        <div className="container research-areas-grid">
          {RESEARCH_AREAS.map((area) => (
            <Link to={area.to} className="research-area-card" key={area.to}>
              <div className="paper-label">{area.label}</div>
              <h2>{area.title}</h2>
              <p>{area.text}</p>
              <span className="about-link">Explore {area.label} &rarr;</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
