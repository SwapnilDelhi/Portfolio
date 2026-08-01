import PageHeader from '../components/PageHeader';
import './InnerPage.css';

const wordFile = new URL('../assets/pdf/Girls Education in India Research Paper.docx', import.meta.url).href;
const pptFile = new URL('../assets/pdf/LEAD Framework Presentation.pptx', import.meta.url).href;
const pdfFile = new URL("../assets/pdf/Strengthening Women's Leadership in Rural India.pdf", import.meta.url).href;

export default function Publications() {
  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Publications & Downloads"
        subtitle="White papers, research papers, policy notes, articles, and reports — with downloadable versions of key publications."
      />

      <section className="section publications-section">
        <div className="container">
          <div className="section-heading publications-heading">
            <p className="eyebrow">
              POLICY RESEARCH PAPER
            </p>
            <h2>Strengthening Women's Leadership in Rural India</h2>
            <p className="inner-subtitle">
              Access the publication assets for this report: the editable Word file, presentation deck, and final PDF.
            </p>
          </div>

          <div className="text-block">
            <p>
              This report presents a <strong>policy framework</strong> for <strong>inclusive governance</strong> and
              <strong> sustainable development</strong>. It examines the state of rural women's leadership in India, 
              identifies key structural challenges, and proposes the original <strong>LEAD Framework</strong> to 
              strengthen leadership development, education, economic inclusion, digital access, and democratic participation.
            </p>
            <p>
              Prepared for <strong>Youth Vision India (YVI)</strong>, the publication is anchored in evidence,
              international case studies, and a concrete YVI action plan that supports the Sustainable Development Goals.
            </p>
            <ul className="inner-points">
              <li><strong>Executive Summary</strong> with the rationale and urgency for strengthening rural women leaders.</li>
              <li><strong>Problem Statement</strong> and evidence on representation, access gaps, and symbolic participation.</li>
              <li><strong>LEAD Framework</strong> recommendations for capacity-building, digital inclusion, and credit access.</li>
              <li><strong>YVI Action Plan</strong> to translate policy into practice at the community and district levels.</li>
            </ul>
          </div>

          <div className="card-grid publications-card-grid" style={{ marginTop: 0 }}>
            <div className="info-card">
              <h3>Word Document</h3>
              <p>Editable manuscript for the Strengthening Women's Leadership in Rural India report.</p>
              <a className="btn btn-outline-navy" href={wordFile} target="_blank" rel="noreferrer" style={{ marginTop: '14px' }}>
                Download DOCX
              </a>
            </div>

            <div className="info-card">
              <h3>Presentation</h3>
              <p>Crafting presentation deck for the publication, ready for sharing and review.</p>
              <a className="btn btn-outline-navy" href={pptFile} target="_blank" rel="noreferrer" style={{ marginTop: '14px' }}>
                Download PPTX
              </a>
            </div>

            <div className="info-card">
              <h3>PDF Report</h3>
              <p>Final published PDF version of Strengthening Women's Leadership in Rural India.</p>
              <a className="btn btn-outline-navy" href={pdfFile} target="_blank" rel="noreferrer" style={{ marginTop: '14px' }}>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
