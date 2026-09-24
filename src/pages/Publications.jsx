import { useEffect, useRef, useState } from 'react';
import { renderAsync } from 'docx-preview';
import PageHeader from '../components/PageHeader';
import './InnerPage.css';

const wordFile = new URL('../assets/pdf/Girls Education in India Research Paper.docx', import.meta.url).href;
const pptFile = new URL('../assets/pdf/LEAD Framework Presentation.pptx', import.meta.url).href;
const pptPreviewFile = new URL('../assets/pdf/LEAD Framework Presentation.pdf', import.meta.url).href;
const pdfFile = new URL("../assets/pdf/Strengthening Women's Leadership in Rural India.pdf", import.meta.url).href;

const DOCS = [
  {
    id: 'pdf',
    label: 'PDF Report',
    file: pdfFile,
    previewFile: pdfFile,
    kind: 'pdf',
    downloadLabel: 'Download PDF',
    description: 'Final published PDF version of Strengthening Women\u2019s Leadership in Rural India.',
  },
  {
    id: 'ppt',
    label: 'Presentation',
    file: pptFile,
    previewFile: pptPreviewFile,
    kind: 'pdf',
    downloadLabel: 'Download PPTX',
    description: 'The presentation deck for the publication, ready for sharing and review.',
  },
  {
    id: 'word',
    label: 'Word Document',
    file: wordFile,
    previewFile: wordFile,
    kind: 'docx',
    downloadLabel: 'Download DOCX',
    description: 'Editable manuscript for the Strengthening Women\u2019s Leadership in Rural India report.',
  },
];

export default function Publications() {
  const [activeDocId, setActiveDocId] = useState(DOCS[0].id);
  const activeDoc = DOCS.find((doc) => doc.id === activeDocId);
  const docxContainerRef = useRef(null);

  useEffect(() => {
    if (activeDoc.kind !== 'docx' || !docxContainerRef.current) return;

    let cancelled = false;
    const container = docxContainerRef.current;
    container.innerHTML = '';

    fetch(activeDoc.previewFile)
      .then((res) => res.blob())
      .then((blob) => {
        if (cancelled) return;
        return renderAsync(blob, container, undefined, {
          className: 'docx-preview',
          inWrapper: false,
        });
      })
      .catch(() => {
        if (!cancelled) {
          container.innerHTML = '<p class="publications-frame-error">The preview could not be loaded. Please use the download button below.</p>';
        }
      });

    return () => {
      cancelled = true;
    };
  }, [activeDoc]);

  return (
    <>
      <PageHeader
        eyebrow="Publications"
        title="Publications & Downloads"
        subtitle="White papers, research papers, policy notes, articles, and reports — read them in-browser, or download the original files."
      />

      <section className="section publications-section">
        <div className="container">
          <div className="section-heading publications-heading">
            <p className="eyebrow">
              POLICY RESEARCH PAPER
            </p>
            <h2>Strengthening Women's Leadership in Rural India</h2>
            <p className="inner-subtitle">
              Read the report, the presentation, and the manuscript directly on this page, or download the original files.
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
            {DOCS.map((doc) => (
              <div className="info-card" key={doc.id}>
                <h3>{doc.label}</h3>
                <p>{doc.description}</p>
                <div className="publications-card-actions">
                  <a className="btn btn-outline-navy" href={doc.file} target="_blank" rel="noreferrer">
                    {doc.downloadLabel}
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="publications-viewer">
            <div className="publications-tabs" role="tablist">
              {DOCS.map((doc) => (
                <button
                  key={doc.id}
                  type="button"
                  role="tab"
                  aria-selected={activeDocId === doc.id}
                  className={`publications-tab${activeDocId === doc.id ? ' is-active' : ''}`}
                  onClick={() => setActiveDocId(doc.id)}
                >
                  {doc.label}
                </button>
              ))}
            </div>

            <div className={`publications-frame-wrap${activeDoc.kind === 'docx' ? ' publications-frame-wrap-scroll' : ''}`}>
              {activeDoc.kind === 'pdf' ? (
                <iframe
                  key={activeDoc.id}
                  src={activeDoc.previewFile}
                  title={`${activeDoc.label} preview`}
                  className="publications-frame"
                  loading="lazy"
                />
              ) : (
                <div key={activeDoc.id} ref={docxContainerRef} className="publications-docx-container" />
              )}
            </div>

            <div className="publications-frame-actions">
              <p>{activeDoc.description}</p>
              <a className="btn btn-outline-navy" href={activeDoc.file} target="_blank" rel="noreferrer">
                {activeDoc.downloadLabel}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

