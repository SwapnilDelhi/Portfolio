import PageHeader from '../components/PageHeader';
import Timeline from '../components/Timeline';
import { delegationMeetings } from '../data/engagements';
import './InnerPage.css';

export default function GovernmentCollaboration() {
  return (
    <>
      <PageHeader
        eyebrow="Raisina Hills & Institutional Engagement"
        title="Raisina Engagement"
        subtitle="A timeline of policy dialogues, delegation meetings, public service partnerships, and institutional engagement shaping India’s future."
      />

      <section className="section">
        <div className="container">
          <Timeline entries={delegationMeetings} />
        </div>
      </section>
    </>
  );
}