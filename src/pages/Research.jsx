import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import './InnerPage.css';
import './Research.css';

const PAPERS = [
  {
    title: 'A New Divisibility Test for 8',
    abstract: 'A novel, generalisable method for testing divisibility by 8, presented to and recognised by the Hon\u2019ble Speaker of Lok Sabha, Shri Om Birla Ji.',
    problem: 'Existing divisibility tests for 8 rely on checking the last three digits, offering limited insight for mental or generalised computation.',
    solution: 'A restructured test that simplifies the identification of divisibility using a more efficient digit-based approach.',
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
                <ImagePlaceholder label={p.title} ratio="4 / 3" />
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
                  <a className="btn btn-outline-navy" href="#">Publication Details</a>
                  <a className="btn btn-outline-navy" href="#">Download PDF</a>
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
