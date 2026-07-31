import PageHeader from '../components/PageHeader';
import Timeline from '../components/Timeline';
import { delegationMeetings } from '../data/engagements';
import './InnerPage.css';

export default function Achievements() {
  return (
    <>
      <PageHeader
        eyebrow="Government collaboration and institutional engagement"
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