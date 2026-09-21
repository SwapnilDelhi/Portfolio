import PageHeader from '../components/PageHeader';
import './InnerPage.css';
import './Research.css';
import { divisibility8Img, divisibility3Img, apImg } from '../assets/images/research';

const rule3Pdf = new URL('../assets/pdf/rule3.pdf', import.meta.url).href;
const apPdf = new URL('../assets/pdf/ap.pdf', import.meta.url).href;

const PAPERS = [
  {
    title: 'Symbolic Interpretation of Ramanujan’s Summation Using the Arithmetic Progression Formula',
    image: apImg,
    pdf: apPdf,
    abstract:
      'A symbolic mathematical derivation that connects Ramanujan’s famous divergent series (1 + 2 + 3 + 4 + ··· = -1/12) with the arithmetic progression formula. By introducing a symbolic representation of infinity and applying classical algebraic methods, the paper derives symbolic roots that offer an abstract interpretation of divergent series rather than a literal numerical result.',
    problem:
      'Ramanujan’s summation of divergent series remains one of the most intriguing concepts in mathematics, yet it is often difficult to interpret using elementary mathematical tools. The challenge is to provide a symbolic and intuitive framework that bridges finite arithmetic progression formulas with Ramanujan’s infinite summation.',
    solution:
      'The paper models the number of terms symbolically, applies the arithmetic progression formula to the divergent series, equates the result with Ramanujan’s summation value of -1/12, and solves the resulting quadratic equation. The obtained symbolic roots are interpreted as abstract representations of infinity, offering a creative mathematical perspective that connects algebraic reasoning with divergent series.',
  },
  {
    title: 'A New Divisibility Test for 8',
    image: divisibility8Img,
    pdf: 'https://share.google/vHt317zw7ibA8ZO17',
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

export default function MathematicalResearch() {
  return (
    <>
      <PageHeader
        eyebrow="Mathematical Research"
        title="Research & Discoveries"
        subtitle="Original research in number theory and symbolic reasoning, recognised by IMSc Chennai and IMU."
      />

      <section className="section">
        <div className="container">
          {PAPERS.map((paper) => (
            <div className="paper-card" key={paper.title}>
              <div className="paper-media">
                <img
                  src={paper.image}
                  alt={`${paper.title} by Swapnil Pandey`}
                  className="paper-image"
                />
                <p className="paper-caption">
                  {paper.title} — research and mathematical innovation by Swapnil Pandey.
                </p>
              </div>
              <div className="paper-body">
                <h2>{paper.title}</h2>
                <div className="rule"></div>
                <div className="paper-block">
                  <div className="paper-label">Abstract</div>
                  <p>{paper.abstract}</p>
                </div>
                <div className="paper-block">
                  <div className="paper-label">Problem Statement</div>
                  <p>{paper.problem}</p>
                </div>
                <div className="paper-block">
                  <div className="paper-label">Solution</div>
                  <p>{paper.solution}</p>
                </div>
                <div className="paper-actions">
                  <a className="btn btn-outline-navy" href={paper.pdf} target="_blank" rel="noopener noreferrer">
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
