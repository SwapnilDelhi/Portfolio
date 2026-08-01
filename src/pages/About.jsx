import PageHeader from '../components/PageHeader';
import { aboutImg } from '../assets/images/about';
import './InnerPage.css';

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Swapnil Pandey"
        subtitle="Innovator, mathematical researcher, and Founder of Youth Vision India — building institutions for leadership, policy, and nation-building."
      />

      <section className="section">
        <div className="container inner-split">
          <div className="inner-media">
            <img
              src={aboutImg}
              alt="Swapnil Pandey"
              className="inner-image"
            />
          </div>

          <div className="inner-copy">
            <h2>Research, leadership, and public service</h2>
            <div className="rule"></div>

            <p>
              Swapnil Pandey is a young Indian innovator, <strong>mathematical
              researcher</strong>, and <strong>Founder of Youth Vision India (YVI)</strong>—a
              youth-led institution committed to leadership, public policy,
              innovation, education, scientific research, and
              nation-building.
            </p>

            <p>
              His work is driven by the belief that lasting national
              progress is built through <strong>knowledge, integrity, institutional
              leadership, and public service</strong>. Through Youth Vision India, he
              works to encourage constructive youth participation in
              governance, evidence-based policymaking, environmental
              stewardship, scientific innovation, and community development.
            </p>

            <p>
              His original mathematical research has been recognized through{' '}
              <strong>copyright registrations granted by Intellectual Property
              India</strong>, reflecting his commitment to independent research and
              scientific inquiry. Alongside his research, he has engaged
              with policymakers, constitutional authorities, senior civil
              servants, and public institutions on subjects including
              education, youth leadership, climate action, innovation,
              intellectual property, and national development.
            </p>

            <h2>Public engagement and recognition</h2>
            <div className="rule"></div>

            <p>
              His public engagements have included interactions with the{' '}
              <strong>Hon&apos;ble Speaker of the Lok Sabha, Shri Om Birla</strong>,
              discussions facilitated through the Lok Sabha Secretariat, and
              policy discussions with the <strong>Hon&apos;ble Union Minister of
              Education</strong> and his team on perspectives relating to the future
              direction of the CBSE framework, educational reforms, and
              strengthening India&apos;s education ecosystem to global
              standards.
            </p>

            <p>
              He has also been recognized by the{' '}
              <strong>Hon&apos;ble Lieutenant Governor of Jammu &amp; Kashmir,
              Shri Manoj Sinha</strong>, who appreciated his contributions to youth
              leadership and innovation through official appreciation and
              recommendation letters, while encouraging continued efforts
              toward research, public service, and nation-building.
            </p>

            <h2>Vision for the future</h2>
            <div className="rule"></div>

            <p>
              As the Founder of Youth Vision India, he continues to build
              platforms that connect young citizens with public
              institutions, promote informed leadership, and encourage
              meaningful participation in India&apos;s developmental
              journey. His long-term vision is to strengthen{' '}
              <strong>governance, scientific innovation, institutional
              excellence, and youth leadership</strong> in support of the national
              aspiration of <strong><em>Viksit Bharat 2047</em></strong>.
            </p>

            <p>
              For Swapnil Pandey, <strong>leadership is not measured by
              recognition, but by the ability to build institutions,
              develop capable people, and create solutions that leave a
              lasting impact on society</strong>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}