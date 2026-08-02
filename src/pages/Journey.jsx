import { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { schoolImg, youthVisionImg, varanasiImg, parliamentImg, researchImg, todayImg } from '../assets/images/journey';
import './InnerPage.css';

let sectionIndex = -1;
function nextSectionClasses() {
  sectionIndex += 1;
  const alt = sectionIndex % 2 === 1;
  return {
    section: alt ? 'section section-alt' : 'section',
    split: alt ? 'inner-split inner-split-reverse' : 'inner-split',
  };
}

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

  sectionIndex = -1;
  const beginning = nextSectionClasses();
  const research = nextSectionClasses();
  const yvi = nextSectionClasses();

  return (
    <>
      <PageHeader
        eyebrow="Journey"
        title="The Journey of Swapnil Pandey"
        subtitle="From Army Public School, Amritsar, to Parliament, Raj Bhawans, and International Policy Forums."
      />

      {/* 1. THE BEGINNING — image floats right */}
      <section id="the-beginning" className={beginning.section}>
        <div className={`container ${beginning.split}`}>
          <div className="inner-media">
            <img
              src={schoolImg}
              alt="School Years — Army Public School, Amritsar"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
            />
          </div>
          <div className="inner-copy">
            <h2>The Beginning</h2>
            <div className="rule"></div>
            <p>
              Long before research, public policy, or institution-building became a part of my
              journey, there was a classroom. It was there that I first discovered a simple truth:
              <strong> leadership is not inherited — it is cultivated</strong>, one decision, one
              discipline, and one responsibility at a time.
            </p>
            <p>
              My school years were never defined by a single examination or a single competition.
              They became a period of continuous exploration, where every opportunity to learn,
              compete, and serve was embraced with the same conviction. I participated in academic,
              scientific, historical, and leadership competitions across diverse disciplines, earning
              recognition in numerous national and international Olympiads and educational
              initiatives — among them distinctions in programmes conducted by <strong>INTACH</strong>, 
              <strong>Science Olympiad Foundation (SOF)</strong>, <strong>Corps Command (Western Command) Indian Army</strong>, <strong>Mr. Adittya Nath Mubayi</strong> (India's most renowned quiz master and international author), and <strong>CBSE's Heritage India Quiz</strong>, as well as several
              other academic platforms that challenged not only knowledge, but curiosity, analytical
              thinking, and perseverance.
            </p>
            <p>
              Equally formative were the opportunities to engage with institutions that represent
              discipline, service, and national commitment. Being recognized by senior military
              leadership and participating in initiatives associated with the Armed Forces
              strengthened values that no classroom alone could teach — discipline under pressure,
              respect for responsibility, and the quiet confidence that true leadership demands.
              Coming from a family with an Army background, these principles were not introduced to
              me as ideals; they were lived every day.
            </p>
            <p>
              Discipline was never a rule. It was a way of thinking. Courage was never understood as
              the absence of fear. It was the willingness to move forward despite uncertainty.
              Responsibility was never viewed as a burden. It was considered a privilege.
            </p>
            <p>
              Looking back, I do not see a collection of medals, certificates, or competitions. I see
              the foundation upon which every later achievement was built. The classrooms taught
              knowledge. Competition taught resilience. Discipline built character. Service gave
              purpose. Together, they laid the first stones of a journey that would eventually grow
              into research, innovation, public service, and the <strong>creation of Youth Vision
              India</strong>.
            </p>
            <p>
              Because every institution begins with an idea. And every enduring idea begins with a
              character that refuses to compromise.
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE PURSUIT OF DISCOVERY — image floats left (reversed) */}
      <section id="research-journey" className={research.section}>
        <div className={`container ${research.split}`}>
          <div className="inner-media">
            <img
              src={researchImg}
              alt="The Pursuit of Discovery"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
            />
          </div>
          <div className="inner-copy">
            <h2>The Pursuit of Discovery</h2>
            <div className="rule"></div>
            <p>
              For me, mathematics has never been a subject confined to classrooms or examinations. It
              is a language through which humanity understands order, logic, and the hidden patterns
              governing the universe. My journey into mathematical research began with a simple
              question: can established ideas still be challenged through original thinking?
            </p>
            <p>
              Driven by curiosity rather than convention, I undertook independent research that led
              to the formulation of an <strong>original divisibility check for 8</strong>. The work
              was subsequently recognized through a <strong>Copyright Registration granted by
              Intellectual Property India</strong> (Boudhik Sampada Bhawan) under the Ministry of
              Commerce and Industry, Government of India — an acknowledgment that strengthened my
              belief in the value of independent inquiry and innovation.
            </p>
            <p>
              Rather than considering that milestone an end, I viewed it as the beginning of a deeper
              intellectual pursuit. I continued my research and developed another
              <strong> original mathematical work concerning the divisibility check for 3</strong>,
              further expanding my exploration into number theory and mathematical reasoning.
            </p>
            <p>
              My curiosity eventually led me toward one of mathematics' most fascinating frontiers —
              infinity. Inspired by the extraordinary legacy of <strong>Srinivasa Ramanujan</strong>,
              I explored the symbolic interpretation of infinity through Ramanujan's series, seeking
              to examine one of the discipline's most profound and enduring concepts.
            </p>
            <p>
              Research, to me, is not the pursuit of answers alone. It is the discipline of asking
              better questions. Every theorem begins as curiosity. Every discovery begins as doubt.
              Every innovation begins with the courage to think independently.
            </p>
            <p>
              The recognition I have received is deeply appreciated, but it has never been the
              destination. The destination is a lifetime devoted to learning, discovering, and
              creating knowledge that may inspire others to question, explore, and build upon the
              ideas of those who came before us — because the greatest contribution of research is
              not merely solving problems, but expanding the boundaries of what humanity believes is
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* 3. YOUTH VISION INDIA — image floats right */}
      <section id="youth-vision-india" className={yvi.section}>
        <div className={`container ${yvi.split}`}>
          <div className="inner-media">
            <img
              src={youthVisionImg}
              alt="Youth Vision India"
              style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
            />
            <Link to="https://www.instagram.com/vidil.pandey" className="inner-link">
                  Visit the our website →
                </Link>
              
          </div>
          <div className="inner-copy">
            <h2>Youth Vision India — Where Purpose Became Action</h2>
            <div className="rule"></div>
            <p>
              Youth Vision India was never founded to become another organization. It was founded
              because a problem demanded action. Our journey began at a moment when the nation was
              witnessing an intense discussion on the welfare and management of stray animals. Rather
              than limiting ourselves to opinions, we chose responsibility. What started as a
              commitment to finding practical solutions soon evolved into a larger mission — one
              dedicated to public service, youth leadership, innovation, and nation-building.
            </p>
            <p>
              From that foundation, our team stepped into the <strong>flood-affected regions of
              Punjab, Haryana, and Himachal Pradesh</strong>. For days, we worked relentlessly on the
              ground, assisting local communities by identifying disrupted road connectivity,
              reporting communication challenges, facilitating access to essential food supplies, and
              supporting sanitation-related efforts wherever possible. Those experiences transformed
              Youth Vision India from an idea into a movement driven by responsibility rather than
              recognition.
            </p>
            <p>
              As our work expanded, so did our commitment to serving communities. Across the Delhi
              NCR region, Youth Vision India organized public welfare initiatives, including the
              distribution of essential food supplies to those in need. Through healthcare awareness
              campaigns, our volunteers distributed dental hygiene kits to promote preventive care and
              healthy living among underserved communities.
            </p>
            <p>
              During the peak of summer, we launched our <strong>"Beat the Heat" initiative</strong>,
              through which our volunteers prepared and distributed traditional Chhabeel — a
              refreshing mixture of chilled water, milk, and rose syrup — to
              <strong> more than a thousand people across Delhi NCR</strong>. For us, service has
              never been measured by the scale of an event, but by the dignity with which every
              individual is served.
            </p>
            <p>
              Our commitment extends beyond community service to policy engagement. Youth Vision
              India has submitted ideas and recommendations on environmental sustainability and
              climate action to the <strong>Ministry of Environment, Forest and Climate
              Change</strong>, including meaningful discussions with senior officials of the Ministry
              — reflecting our belief that informed youth participation can strengthen public policy
              and contribute constructively to national development.
            </p>
            <p>
              The journey of Youth Vision India also received encouragement from national leadership.
              One of the defining moments came when I received a personal call from the
              <strong> Hon'ble Union Minister for Youth Affairs & Sports and Labour & Employment,
              Shri Mansukh Mandaviya</strong>, congratulating our youth-led initiative and
              acknowledging the spirit of service demonstrated by our team. That moment was not
              merely a recognition of an organization — it was an affirmation that young citizens,
              when guided by purpose, integrity, and perseverance, can contribute meaningfully to the
              nation.
            </p>
            <p>
              Every initiative undertaken by Youth Vision India is guided by one unwavering belief:
              leadership is not defined by titles — it is defined by responsibility. We do not measure
              success by the number of campaigns conducted or the recognition received. We measure it
              by the lives we serve, the institutions we strengthen, the ideas we contribute, and the
              opportunities we create for the next generation.
            </p>
            <p>
              Youth Vision India is more than an organization. It is a commitment to lead with
              character, to serve with humility, and to build a stronger India through the power of
              responsible youth leadership.
            </p>
          </div>
        </div>
      </section>

      {/* 4. PARLIAMENT OF INDIA — intro */}
      {(() => {
        const s = nextSectionClasses();
        return (
          <section id="government-engagement" className={s.section}>
            <div className={`container ${s.split}`}>
              <div className="inner-media">
                <img
                  src={parliamentImg}
                  alt="Parliament of India"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                />
              </div>
              <div className="inner-copy">
                <h2>Parliament of India</h2>
                <div className="rule"></div>
                <h3>A Journey Through the Temple of Indian Democracy</h3>
                <p>
                  As part of our national leadership and civic engagement initiative, I, Swapnil
                  Pandey, along with the members of Youth Vision India (YVI), had the privilege of
                  visiting the <strong>Parliament of India</strong>, including both the historic
                  Parliament House (Sansad Bhavan) and the old Parliament Building (Samvidhan Sadan).
                </p>
                <p>
                  The visit provided us with an exceptional opportunity to witness the functioning,
                  heritage, and constitutional foundations of the world's largest democracy. We
                  visited the galleries of both the Lok Sabha and the Rajya Sabha, gaining a deeper
                  understanding of India's legislative processes, parliamentary traditions, and
                  democratic institutions.
                </p>
                <p>
                  During the visit, our delegation interacted with parliamentary officials and
                  observed the institutional environment that supports the functioning of the
                  Parliament of India. It was an invaluable learning experience in governance,
                  public administration, and constitutional responsibility.
                </p>
                <p>
                  Beyond the legislative chambers, we explored the remarkable cultural and thematic
                  galleries housed within the new Parliament complex. These galleries celebrate the
                  extraordinary diversity and civilizational continuity of India through its art,
                  architecture, craftsmanship, and traditions.
                </p>
                <p>
                  Among the highlights of our visit were:
                </p>
                <ul>
                  <li><strong>Sangeet Deergha</strong>, showcasing India's rich heritage of music,
                      dance, folk traditions, and classical musical instruments.</li>
                  <li><strong>Shilp Deergha</strong>, presenting the country's renowned handicrafts,
                      handloom traditions, and the artistic excellence of Indian artisans.</li>
                  <li><strong>Sthapatya Deergha</strong>, displaying India's architectural legacy
                      through models and representations of iconic monuments and historic
                      structures.</li>
                  <li>The <strong>Constitution Hall</strong>, where we experienced the constitutional
                      journey of India and observed the magnificent Foucault Pendulum, a scientific
                      installation that visually demonstrates the Earth's rotation while symbolising
                      the harmony between scientific inquiry and constitutional thought.</li>
                </ul>
                <p>
                  Every gallery reflected the spirit of "Unity in Diversity", presenting India's
                  ancient civilisation alongside its modern democratic aspirations. The Parliament
                  complex is not merely the seat of legislation; it is a living expression of India's
                  cultural heritage, constitutional values, scientific temperament, artistic
                  brilliance, and national identity.
                </p>
                <p>
                  For the members of Youth Vision India, this visit was far more than an
                  institutional tour. It was an opportunity to witness the ideals of democracy,
                  leadership, public service, and nation-building at their highest level. The
                  experience further strengthened our commitment to contributing meaningfully towards
                  India's future through research, innovation, public policy, and youth leadership.
                </p>
                <p>
                  Moreover, our delegation visited the <strong>Samvidhan Sadan</strong> (the historic
                  Parliament House), one of the most significant landmarks in India's democratic
                  journey. We had the privilege of visiting the <strong>Central Hall</strong>, the
                  historic chamber where the Constituent Assembly convened to deliberate upon and
                  adopt the Constitution of India, and where the historic transfer of power from
                  British rule to independent India took place on
                  <strong> 14–15 August 1947</strong>.
                </p>
                <p>
                  Standing within this iconic hall offered a profound sense of history and
                  responsibility. It was here that the vision of the Republic of India was shaped by
                  the framers of the Constitution, laying the foundation of the democratic values,
                  justice, liberty, equality, and fraternity that continue to guide the nation. For
                  the members of Youth Vision India, this visit served as a powerful reminder of our
                  constitutional duties and strengthened our commitment to responsible leadership,
                  public service, and nation-building.
                </p>
              </div>
            </div>
          </section>
        );
      })()}

      {/* 5. VARANASI DEVELOPMENT */}
      {(() => {
        const s = nextSectionClasses();
        return (
          <section id="varanasi-development" className={s.section}>
            <div className={`container ${s.split}`}>
              <div className="inner-media">
                <img
                  src={varanasiImg}
                  alt="Varanasi Development"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                />
                <Link to="/varanasi" className="inner-link">
                  Visit the Varanasi Project →
                </Link>
              </div>
              <div className="inner-copy">
                <h2>Varanasi Development &amp; Community Service</h2>
                <div className="rule"></div>
                <p>
                  Varanasi is not merely the city where I work—it is a <strong>timeless symbol of
                  India's civilizational heritage</strong>, spirituality, knowledge, and resilience.
                  Through Youth Vision India (YVI), our team remains committed to contributing
                  towards the holistic development and empowerment of the people of Varanasi through
                  sustained community engagement and public service.
                </p>
                <p>
                  One of our ongoing initiatives is the support of an <strong>old age home</strong>,
                  where our volunteers regularly provide fresh, nutritious, and hygienic meals to
                  elderly residents. Beyond food distribution, we actively work to promote better
                  sanitation and hygiene facilities while spending meaningful time with the residents
                  through regular conversations and social engagement.
                </p>
                <p>
                  Our commitment also extends to <strong>women's empowerment, youth engagement,
                  education</strong>, community awareness, and volunteer-driven social initiatives
                  aimed at creating long-term, sustainable impact. By encouraging leadership,
                  participation, and self-reliance, we strive to strengthen communities from within.
                </p>
                <p>
                  As Varanasi welcomes visitors from across the world, our team has also had the
                  privilege of interacting with international visitors, particularly during occasions
                  such as the <strong>International Day of Yoga</strong> and other public events.
                  Through these interactions, we share the richness of India's cultural heritage,
                  spiritual traditions, constitutional values, and the unique legacy of Varanasi as
                  one of the world's oldest living cities.
                </p>
                <p>
                  Every initiative undertaken by Youth Vision India reflects a common purpose—to
                  preserve India's cultural identity while contributing to social welfare, civic
                  responsibility, and inclusive development. In recognition of these community
                  service initiatives and public contributions, I had the honour of being appreciated
                  by <strong>Shri Himanshu Nagpal, IAS (Chief Development Officer,
                  Varanasi)</strong>, and the Additional District Magistrate, Varanasi. Their
                  encouragement continues to inspire our team to work with greater dedication towards
                  public service and nation-building.
                </p>
                <p>
                  For us, development is not measured solely by infrastructure, but by the
                  <strong> dignity of every citizen</strong>, the strength of every community, and
                  the opportunities created for future generations.
                </p>
              </div>
            </div>
          </section>
        );
      })()}

      {/* 6. WHERE THE WORK STANDS TODAY */}
      {(() => {
        const s = nextSectionClasses();
        return (
          <section id="today" className={s.section}>
            <div className={`container ${s.split}`}>
              <div className="inner-media">
                <img
                  src={todayImg}
                  alt="Where the work stands today"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '16px' }}
                />
              </div>
              <div className="inner-copy">
                <h2>Where the work stands today</h2>
                <div className="rule"></div>
                <p>
                  Today, Swapnil Pandey continues to actively participate in discussions,
                  conferences, research initiatives, policy dialogues, and innovation platforms with
                  leading national and international institutions &mdash; spanning the
                  <strong> India International Centre (IIC), the Rajasthan International Centre
                  (RIC), the United Nations, the World Bank, BRICS forums, NITI Aayog</strong>, the
                  Ministry of Science &amp; Technology, DRDO, ISRO, NASA, Atal Innovation Mission,
                  NCERT, CBSE, and numerous universities, research institutions, diplomatic forums,
                  and educational organisations.
                </p>
                <p>
                  What began as the conviction of a single young mind has evolved into a growing
                  movement dedicated to research, leadership, innovation, public policy, and
                  nation-building.
                </p>
                <p>
                  Today, Swapnil Pandey serves as a <strong>young innovator, mathematical researcher,
                  public policy advisor and strategist, and Founder of Youth Vision India
                  (YVI)</strong>—a youth-led national initiative committed to empowering the next
                  generation through civic participation, scientific thinking, constitutional values,
                  and community service.
                </p>
                <p>
                  His work spans multiple domains, including mathematical research, educational
                  reform, youth leadership, policy documentation, innovation, institutional
                  engagement, social development, and constitutional awareness. His mathematical
                  research has received <strong>official copyright registration from Intellectual
                  Property India</strong>, reflecting his commitment to original scientific inquiry
                  from an early age.
                </p>
                <p>
                  Through Youth Vision India, a nationwide network of young leaders, researchers,
                  professionals, and volunteers is being developed to contribute towards policy
                  research, governance, education, innovation, environmental sustainability, women's
                  empowerment, youth development, and community welfare. The organisation actively
                  prepares research reports, public policy recommendations, and field-based
                  initiatives designed to create meaningful and measurable impact.
                </p>
                <p>
                  Over the years, Swapnil Pandey has engaged with constitutional authorities,
                  ministries, senior policymakers, civil servants, and public institutions,
                  presenting ideas and initiatives focused on strengthening governance, youth
                  participation, innovation, and national development. His work reflects a belief
                  that meaningful change is achieved through constructive dialogue, evidence-based
                  policy, and disciplined execution.
                </p>
                <p>
                  Beyond research and policy, Youth Vision India continues to undertake community
                  service initiatives, including support for senior citizens, educational outreach,
                  social awareness programmes, youth capacity building, women's empowerment
                  initiatives, cultural engagement, and public participation campaigns. Every project
                  is guided by a simple principle: leadership must ultimately improve the lives of
                  people.
                </p>
                <p>
                  The organisation has also represented the values of active citizenship through
                  institutional visits, including the Parliament of India, where members explored
                  India's constitutional heritage, democratic institutions, and civilizational legacy.
                  These experiences continue to shape YVI's commitment to responsible leadership and
                  informed public service.
                </p>
                <p>
                  The journey, however, is only the beginning.
                </p>
                <p>
                  The long-term vision extends beyond individual recognition. It seeks to build
                  institutions, empower future leaders, promote scientific temperament, encourage
                  constitutional literacy, and contribute practical solutions to national challenges.
                  Every research paper, every policy submission, every community initiative, and
                  every leadership programme is another step towards that larger mission.
                </p>
                <p>
                  The objective is not merely to create achievements. It is to create lasting
                  institutions, enduring ideas, and measurable national impact.
                </p>
              </div>
            </div>
          </section>
        );
      })()}
    </>
  );
}