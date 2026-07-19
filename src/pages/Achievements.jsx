import PageHeader from '../components/PageHeader';
import Timeline from '../components/Timeline';
import { delegationMeetings } from '../data/engagements';
import './InnerPage.css';

export default function Achievements() {
  return (
    <>
      <PageHeader
        eyebrow="Achievements"
        title="A timeline of recognition"
        subtitle="Government recognitions, research honours, delegation meetings, and appointments — each entry includes an image, date, and supporting document."
      />

      <section className="section">
        <div className="container">
          <Timeline entries={delegationMeetings} />
        </div>
      </section>
    </>
  );
}
