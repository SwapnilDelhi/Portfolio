import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import Timeline from '../components/Timeline';
import { governmentDialogues, institutionalEngagements } from '../data/engagements';
import './InnerPage.css';

const MILESTONES = [
  'National Finalist, Indian National Trust for Art and Cultural Heritage (INTACH)',
  'Semi-Finalist, CBSE Heritage India Programme',
  'Runner-Up, Northern Command — inter-command competition under Western Command, Jalandhar Cantonment',
  'Winner, Indian Navy national knowledge competition',
  'Recognitions from ISRO, the Department of Capacity Building and Research, and organisations associated with the United Nations',
];

const YVI_AREAS = [
  { title: 'Mission', text: 'Building a more educated, empowered, and compassionate India through impactful grassroots initiatives.' },
  { title: 'Vision', text: 'A youth-led movement that converts education, empowerment, and welfare work into lasting national impact.' },
  { title: 'Women’s Empowerment', text: 'Sustained menstrual hygiene and sanitary pad distribution drives across Delhi–NCR, promoting women’s health, dignity, and awareness.' },
  { title: 'Education', text: 'Ensuring underprivileged children receive access to quality education and building awareness of the transformative power of learning.' },
  { title: 'Policy Research', text: 'Translating grassroots experience into youth-driven policy ideas and recommendations placed before the Government of India.' },
  { title: 'Sanitary Pad Distribution', text: 'Regular distribution drives promoting menstrual health and dignity in underserved communities.' },
  { title: 'Environment', text: 'Community-level environmental initiatives, including winter relief campaigns distributing blankets and warm clothing.' },
  { title: 'Innovation', text: 'Youth-led innovations such as the Automatic Street Light System, presented to Ministry officials as sustainable infrastructure solutions.' },
];

const VARANASI_FOCUS_AREAS = [
  { title: 'Heritage & Ghats', text: 'Initiatives supporting the preservation and civic upkeep of Varanasi’s heritage sites and riverfront ghats.' },
  { title: 'Civic Infrastructure', text: 'Community-driven proposals for sanitation, street lighting, and public infrastructure improvements.' },
  { title: 'Education & Youth', text: 'Extending Youth Vision India’s education and empowerment programmes to Varanasi’s communities.' },
  { title: 'Community Development', text: 'Local partnerships aimed at sustainable, ground-up regional development.' },
];

export default function Journey() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
      }
    }
  }, [hash]);

  return (
    <>
      <PageHeader
        eyebrow="Journey"
        title="The Journey of Swapnil Pandey"
        subtitle="From Army Public School, Amritsar, to Parliament, Raj Bhawans, and international policy forums."
      />

      <section className="section">
        <div className="container inner-split">
          <div className="inner-copy">
            <h2>Early foundations</h2>
            <div className="rule"></div>
            <p>
              Swapnil Pandey began his academic journey as a student of Army Public School, Amritsar,
              where he quickly distinguished himself through excellence in academics, innovation,
              leadership, and national-level competitions.
            </p>
            <p>
              During his school years, he built a national profile across heritage, defence, and
              knowledge competitions, while earning numerous national and international awards and
              recognitions from esteemed institutions.
            </p>
          </div>
          <div className="inner-media">
            <ImagePlaceholder label="School Years — Army Public School, Amritsar" ratio="4 / 3" />
          </div>
        </div>
      </section>

      

      <section id="youth-vision-india" className="section section-alt">
        <div className="container inner-split">
          <div className="inner-copy">
            <h2>Youth Vision India</h2>
            <div className="rule"></div>
            <p>
              Under the leadership of Swapnil Pandey, Youth Vision India has emerged as a youth-led
              platform committed to building a more educated, empowered, and compassionate India
              through impactful grassroots initiatives.
            </p>
            <p>
              The organisation works across multiple states with a strong focus on women’s
              empowerment, child education, sanitation, community welfare, and humanitarian service.
            </p>
            <p>
              In Delhi–NCR, the team conducts menstrual hygiene and sanitary pad distribution drives,
              promotes women’s health and dignity, and organises winter relief campaigns that deliver
              blankets and warm clothing to underserved communities.
            </p>
          </div>
          <div className="inner-media">
            <ImagePlaceholder label="Youth Vision India — Field Work" ratio="4 / 3" />
          </div>
        </div>
      </section>

      <section id="government-engagement" className="section">
        <div className="container">
          <div className="inner-copy">
            <h2>Parliament of India</h2>
            <div className="rule"></div>
            <p>
              Swapnil Pandey has engaged with government institutions, ministries, and senior
              officials on policy dialogues, education reform, youth leadership, and nation-building.
            </p>
            <p>
              These discussions span parliamentary forums and institutional collaborations, with a
              focus on translating youth-led research and grassroots insights into actionable policy.
            </p>
          </div>
          <div className="timeline-block">
            <Timeline entries={governmentDialogues} className="journey-timeline" />
          </div>
        </div>
      </section>


      <section id="varanasi-development" className="section">
        <div className="container inner-split">
          <div className="inner-copy">
            <h2>Varanasi Development</h2>
            <div className="rule"></div>
            <p>
              Varanasi Development extends the same principles of education, empowerment, and civic
              welfare into Varanasi’s communities, while respecting the city’s heritage and cultural
              identity.
            </p>
            <p>
              The initiative focuses on heritage preservation, civic infrastructure, education, and
              sustainable community development through regional partnerships.
            </p>
          </div>
          <div className="inner-media">
            <ImagePlaceholder label="Varanasi Development" ratio="4 / 3" />
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container inner-split">
          <div className="inner-copy">
            <h2>Where the work stands today</h2>
            <div className="rule"></div>
            <p>
              Today, Swapnil Pandey continues to actively participate in discussions, conferences,
              research initiatives, policy dialogues, and innovation platforms with leading national
              and international institutions &mdash; spanning the India International Centre (IIC),
              the Rajasthan International Centre (RIC), the United Nations, the World Bank, BRICS
              forums, NITI Aayog, the Ministry of Science &amp; Technology, DRDO, ISRO, NASA, Atal
              Innovation Mission, NCERT, CBSE, and numerous universities, research institutions,
              diplomatic forums, and educational organisations.
            </p>
          </div>
          <div className="inner-media">
            <ImagePlaceholder label="Where the work stands today" ratio="4 / 3" />
          </div>
        </div>
      </section>
    </>
  );
}
