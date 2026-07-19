import PageHeader from '../components/PageHeader';
import Timeline from '../components/Timeline';
import { governmentDialogues, institutionalEngagements } from '../data/engagements';
import './InnerPage.css';

export default function Parliament() {
  return (
    <>
      <PageHeader
        eyebrow="Government & Institutional Engagement"
        title="Parliament of India"
        subtitle="Meetings and engagements with Government Departments, Ministries, Officials, Universities, Embassies, and Research Institutions, presented as a premium timeline."
      />

      <section className="section">
        <div className="container">
          <Timeline entries={governmentDialogues} />
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-heading">
            <div className="eyebrow">Institutional Reach</div>
            <h2>Organisations and forums engaged</h2>
            <div className="rule"></div>
          </div>
          <div className="tag-cloud">
            {institutionalEngagements.map((org) => (
              <span className="tag-chip" key={org}>{org}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
