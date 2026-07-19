import PageHeader from '../components/PageHeader';
import ImagePlaceholder from '../components/ImagePlaceholder';
import './InnerPage.css';

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Institutional focus, not autobiography"
        subtitle="Who Swapnil Pandey is, the problems he works on, and why Youth Vision India exists."
      />

      <section className="section">
        <div className="container inner-split">
          <div className="inner-media">
            <ImagePlaceholder label="Swapnil Pandey" ratio="4 / 5" />
          </div>
          <div className="inner-copy">
            <h2>Research, leadership, and public service</h2>
            <div className="rule"></div>
            <p>
              Swapnil Pandey is a mathematical researcher, youth leader, and public policy advocate
              whose work sits at the intersection of scientific research, education reform, and
              youth-led national development. His engagements span Parliament, Union Ministries,
              Raj Bhawans, and international institutions including the United Nations, the World
              Bank, and BRICS forums.
            </p>
            <p>
              As Founder of Youth Vision India, he leads a platform dedicated to building a more
              educated, empowered, and compassionate India through grassroots initiatives in
              women&rsquo;s empowerment, education, sanitation, and community welfare.
            </p>
            <p>
              The mission is deliberately institutional: to convert research and youth energy into
              policy input, measurable community impact, and long-term nation-building &mdash; guided
              by the principle of <em>anonymity, austerity, and ability</em> over self-promotion.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
