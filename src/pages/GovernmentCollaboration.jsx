import PageHeader from '../components/PageHeader';
import Timeline from '../components/Timeline';
import { delegationMeetings } from '../data/engagements';
import './InnerPage.css';

export default function GovernmentCollaboration() {
  return (
    <>
      <PageHeader
        eyebrow="Government & Institutional Engagement"
        title="Government Collaboration"
        subtitle="A timeline of policy engagement, public service partnerships, delegation meetings, and official recognition from government institutions."
      />

      <section className="section">
        <div className="container">
          <Timeline entries={delegationMeetings} />
        </div>
      </section>
    </>
  );
}