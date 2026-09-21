import PageHeader from '../components/PageHeader';
import nitiAayogImage from '../assets/images/niti aayog/niti aayog.png';
import nitiAayogImageTwo from '../assets/images/niti aayog/niti aayog2.png';
import personOneImage from '../assets/images/niti aayog/person1.png';
import personTwoImage from '../assets/images/niti aayog/person2.png';
import './InnerPage.css';
import './Research.css';

const OFFICERS = [
  {
    credential: 'IFoS',
    name: 'Shri Hemant Kumar Meena',
    role: 'Director, Health & Family Welfare, SDGs, and Women & Child Development',
    image: personOneImage,
  },
  {
    credential: 'ITS',
    name: 'Shri Manish Kumar Vimal',
    role: 'Director, IT & Telecom, Skill Development, Labour & Employment, and School Education',
    image: personTwoImage,
  },
];

export default function NitiAayog() {
  return (
    <>
      <PageHeader
        eyebrow="NITI Aayog · Government of India"
        title="Research. Policy. Leadership. Nation Building."
        subtitle="Connecting grassroots action and serious research with the institutions shaping India's development."
      />

      <main className="niti-page">
      <section className="section niti-lead-section">
        <div className="container niti-lead-grid">
          <div className="niti-lead-copy">
            <div className="eyebrow">From the ground up</div>
            <h2>Community experience belongs in policy conversations.</h2>
            <p className="niti-lead-intro">Under the leadership of Swapnil Pandey, Youth Vision India has worked across Samastipur, Bihar, and the Delhi NCR region on women&apos;s empowerment, education, and healthcare support.</p>
            <p>The work moved through the full cycle: listening to women, organising offline sessions, extending participation through video conferencing, delivering support, documenting outcomes, and turning lived experience into research and policy recommendations.</p>
            <div className="niti-lead-points">
              <span>Grassroots engagement</span>
              <span>Research and documentation</span>
              <span>Institutional dialogue</span>
            </div>
          </div>
          <figure className="niti-lead-media">
            <img src={nitiAayogImage} alt="Swapnil Pandey during an engagement at NITI Aayog" />
            <figcaption>Youth Vision India at NITI Aayog, Government of India</figcaption>
          </figure>
        </div>
      </section>

      <section className="section section-alt niti-programme-section">
        <div className="container niti-programme-grid">
          <figure className="niti-secondary-media">
            <img src={nitiAayogImageTwo} alt="Youth Vision India research and policy engagement" loading="lazy" />
          </figure>
          <div className="niti-copy">
            <div className="eyebrow">No More Stereotypes</div>
            <h2>Listening first. Building evidence. Acting with purpose.</h2>
            <p>Through the <strong>No More Stereotypes</strong> programme, Youth Vision India created space for women to speak about their aspirations, opportunities, and the barriers affecting their lives. The programme connected in-person conversations with underserved communities through online participation.</p>
            <p>Reports, research, and policy work from these initiatives were subsequently presented at NITI Aayog. The presentation connected women&apos;s empowerment, education, and healthcare with the broader goals of sustainable development and national progress.</p>
            <p className="niti-action-line">Connect with women. Deliver support. Document the outcomes. Bring their experiences into policy.</p>
          </div>
        </div>
      </section>

      <section className="section niti-dialogue-section">
        <div className="container">
          <div className="section-heading niti-section-heading">
            <div className="eyebrow">The dialogue</div>
            <h2>Research becomes meaningful when it opens a door for others.</h2>
            <p>The engagement evolved into a substantive conversation on youth development, women&apos;s empowerment, education, employment, research, innovation, and the responsibility of India&apos;s young generation in national development.</p>
          </div>
          <div className="niti-officer-grid">
            {OFFICERS.map((officer) => (
              <article className="niti-officer-card" key={officer.name}>
                <img src={officer.image} alt={`Swapnil Pandey with ${officer.name}`} loading="lazy" />
                <div className="niti-officer-body">
                  <div className="niti-officer-credential">{officer.credential}</div>
                  <h3>{officer.name}</h3>
                  <p>{officer.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt niti-quote-section">
        <div className="container niti-quote-layout">
          <div>
            <div className="eyebrow">A responsibility, not a title</div>
            <h2>“Swapnil, you are the future of India.”</h2>
          </div>
          <blockquote>
            <p>These words from Shri Hemant Kumar Meena carried more than appreciation. They carried responsibility: to study deeper, research harder, and continuously expand the seriousness and scale of the work.</p>
            <cite>Swapnil Pandey, Founder &amp; Director, Youth Vision India</cite>
          </blockquote>
        </div>
      </section>

      <section className="section niti-mandate-section">
        <div className="container niti-mandate">
          <div className="eyebrow">The mandate</div>
          <h2>Build intellectual capacity. Empower young minds. Strengthen research.</h2>
          <p>The purpose is clear: create stronger avenues for young researchers, innovators, and emerging leaders to contribute meaningfully to national development. Positions may bring authority. Purpose brings responsibility. Meaningful work must speak louder than recognition.</p>
          <div className="niti-mandate-signature">Create measurable impact. Serve India.</div>
        </div>
      </section>
      </main>
    </>
  );
}
