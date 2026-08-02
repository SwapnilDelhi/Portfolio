import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import './InnerPage.css';
import './Research.css';
import { divisibility8Img, divisibility3Img } from '../assets/images/research';

const rule3Pdf = new URL('../assets/pdf/rule3.pdf', import.meta.url).href;

const PAPERS = [
  {
    title: 'A New Divisibility Test for 8',
    image: divisibility8Img,
    pdf: divisibility8Img, // Change to actual PDF later
    abstract:
      'A novel, generalisable method for testing divisibility by 8, presented to and recognised by the Hon’ble Speaker of Lok Sabha, Shri Om Birla Ji.',
    problem:
      'Existing divisibility tests for 8 rely on checking the last three digits, offering limited insight for mental or generalised computation.',
    solution:
      'A restructured test that simplifies the identification of divisibility using a more efficient digit-based approach.',
  },
  {
    title: 'A New Divisibility Test for 3',
    image: divisibility3Img,
    pdf: rule3Pdf,
    abstract:
      'A mathematical approach introducing an alternative divisibility test for 3, designed to simplify mental calculations and enhance number theory education.',
    problem:
      'Traditional divisibility tests for 3 are effective but limited in demonstrating broader mathematical patterns and alternative computational methods.',
    solution:
      'Developed a structured digit-based approach that provides an intuitive and efficient method for determining divisibility by 3.',
  },
];
export default function Research() {
  return (
    <>
      <PageHeader
        eyebrow="Mathematical Research"
        title="Research & Discoveries"
        subtitle="Each paper includes an abstract, problem statement, solution, publication details, copyright information, downloads, and media coverage."
      />

      <section className="section">
        <div className="container">
          {PAPERS.map((p) => (
            <div className="paper-card" key={p.title}>
              <div className="paper-media">
  <img
    src={p.image}
    alt={p.title}
    className="paper-image"
  />
</div>
              <div className="paper-body">
                <h2>{p.title}</h2>
                <div className="rule"></div>

                <div className="paper-block">
                  <div className="paper-label">Abstract</div>
                  <p>{p.abstract}</p>
                </div>
                <div className="paper-block">
                  <div className="paper-label">Problem Statement</div>
                  <p>{p.problem}</p>
                </div>
                <div className="paper-block">
                  <div className="paper-label">Solution</div>
                  <p>{p.solution}</p>
                </div>

<div className="paper-actions">
  <a
    className="btn btn-outline-navy"
    href={p.pdf}
    target="_blank"
    rel="noopener noreferrer"
  >
    Download PDF
  </a>
</div>
                <div className="paper-copyright">&copy; All rights reserved. Copyright details available on request.</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
