import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import { governmentDialogues } from '../data/engagements';
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
        subtitle="From Army Public School, Amritsar, to Parliament, Raj Bhawans, and international policy forums."
      />

      {/* 1. THE BEGINNING — image floats right */}
      <section id="the-beginning" className={beginning.section}>
        <div className={`container ${beginning.split}`}>
          <div className="inner-media">
            <ImagePlaceholder label="School Years — Army Public School, Amritsar" ratio="4 / 3" />
          </div>
          <div className="inner-copy">
            <h2>The Beginning</h2>
            <div className="rule"></div>
            <p>
              Long before research, public policy, or institution-building became a part of my
              journey, there was a classroom. It was there that I first discovered a simple truth:
              leadership is not inherited — it is cultivated, one decision, one discipline, and one
              responsibility at a time.
            </p>
            <p>
              My school years were never defined by a single examination or a single competition.
              They became a period of continuous exploration, where every opportunity to learn,
              compete, and serve was embraced with the same conviction. I participated in academic,
              scientific, historical, and leadership competitions across diverse disciplines, earning
              recognition in numerous national and international Olympiads and educational
              initiatives — among them distinctions in programmes conducted by INTACH, the Science
              Olympiad Foundation (SOF), CBSE's Heritage India Quiz, and several other academic
              platforms that challenged not only knowledge, but curiosity, analytical thinking, and
              perseverance.
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
              into research, innovation, public service, and the creation of Youth Vision India.
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
            <ImagePlaceholder label="Mathematical Research" ratio="4 / 3" />
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
              to the formulation of an original divisibility check for 8. The work was subsequently
              recognized through a Copyright Registration granted by Intellectual Property India
              (Boudhik Sampada Bhawan) under the Ministry of Commerce and Industry, Government of
              India — an acknowledgment that strengthened my belief in the value of independent
              inquiry and innovation.
            </p>
            <p>
              Rather than considering that milestone an end, I viewed it as the beginning of a deeper
              intellectual pursuit. I continued my research and developed another original
              mathematical work concerning the divisibility check for 3, further expanding my
              exploration into number theory and mathematical reasoning.
            </p>
            <p>
              My curiosity eventually led me toward one of mathematics' most fascinating frontiers —
              infinity. Inspired by the extraordinary legacy of Srinivasa Ramanujan, I explored the
              symbolic interpretation of infinity through Ramanujan's series, seeking to examine one
              of the discipline's most profound and enduring concepts.
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
            <ImagePlaceholder label="Youth Vision India — Field Work" ratio="4 / 3" />
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
              From that foundation, our team stepped into the flood-affected regions of Punjab,
              Haryana, and Himachal Pradesh. For days, we worked relentlessly on the ground, assisting
              local communities by identifying disrupted road connectivity, reporting communication
              challenges, facilitating access to essential food supplies, and supporting
              sanitation-related efforts wherever possible. Those experiences transformed Youth Vision
              India from an idea into a movement driven by responsibility rather than recognition.
            </p>
            <p>
              As our work expanded, so did our commitment to serving communities. Across the Delhi
              NCR region, Youth Vision India organized public welfare initiatives, including the
              distribution of essential food supplies to those in need. Through healthcare awareness
              campaigns, our volunteers distributed dental hygiene kits to promote preventive care and
              healthy living among underserved communities.
            </p>
            <p>
              During the peak of summer, we launched our "Beat the Heat" initiative, through which our
              volunteers prepared and distributed traditional Chhabeel — a refreshing mixture of
              chilled water, milk, and rose syrup — to more than a thousand people across Delhi NCR.
              For us, service has never been measured by the scale of an event, but by the dignity
              with which every individual is served.
            </p>
            <p>
              Our commitment extends beyond community service to policy engagement. Youth Vision
              India has submitted ideas and recommendations on environmental sustainability and
              climate action to the Ministry of Environment, Forest and Climate Change, including
              meaningful discussions with senior officials of the Ministry — reflecting our belief
              that informed youth participation can strengthen public policy and contribute
              constructively to national development.
            </p>
            <p>
              The journey of Youth Vision India also received encouragement from national leadership.
              One of the defining moments came when I received a personal call from the Hon'ble Union
              Minister for Youth Affairs & Sports and Labour & Employment, Shri Mansukh Mandaviya,
              congratulating our youth-led initiative and acknowledging the spirit of service
              demonstrated by our team. That moment was not merely a recognition of an organization —
              it was an affirmation that young citizens, when guided by purpose, integrity, and
              perseverance, can contribute meaningfully to the nation.
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
                <ImagePlaceholder label="Parliament of India — Policy Engagement" ratio="4 / 3" />
              </div>
              <div className="inner-copy">
                <h2>Parliament of India</h2>
                <div className="rule"></div>
                <p>
                  Swapnil Pandey has engaged with government institutions, ministries, and senior
                  officials on policy dialogues, education reform, youth leadership, and
                  nation-building.
                </p>
                <p>
                  These discussions span parliamentary forums and institutional collaborations, with
                  a focus on translating youth-led research and grassroots insights into actionable
                  policy.
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
                <ImagePlaceholder label="Varanasi Development" ratio="4 / 3" />
              </div>
              <div className="inner-copy">
                <h2>Varanasi Development</h2>
                <div className="rule"></div>
                <p>
                  Varanasi Development extends the same principles of education, empowerment, and
                  civic welfare into Varanasi's communities, while respecting the city's heritage and
                  cultural identity.
                </p>
                <p>
                  The initiative focuses on heritage preservation, civic infrastructure, education,
                  and sustainable community development through regional partnerships.
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
                <ImagePlaceholder label="Where the work stands today" ratio="4 / 3" />
              </div>
              <div className="inner-copy">
                <h2>Where the work stands today</h2>
                <div className="rule"></div>
                <p>
                  Today, Swapnil Pandey continues to actively participate in discussions,
                  conferences, research initiatives, policy dialogues, and innovation platforms with
                  leading national and international institutions &mdash; spanning the India
                  International Centre (IIC), the Rajasthan International Centre (RIC), the United
                  Nations, the World Bank, BRICS forums, NITI Aayog, the Ministry of Science &amp;
                  Technology, DRDO, ISRO, NASA, Atal Innovation Mission, NCERT, CBSE, and numerous
                  universities, research institutions, diplomatic forums, and educational
                  organisations.
                </p>
              </div>
            </div>
          </section>
        );
      })()}
    </>
  );
}