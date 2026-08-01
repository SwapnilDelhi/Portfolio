import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import './InnerPage.css';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = (formData.get('name') || '').toString().trim();
    const email = (formData.get('email') || '').toString().trim();
    const organisation = (formData.get('organisation') || '').toString().trim();
    const message = (formData.get('message') || '').toString().trim();

    const subject = encodeURIComponent(`Contact request from ${name || 'website visitor'}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nOrganisation: ${organisation}\n\nMessage:\n${message}`
    );

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=Connect@swapnilpandey.com&su=${subject}&body=${body}`;
    const mailtoUrl = `mailto:Connect@swapnilpandey.com?subject=${subject}&body=${body}`;

    const opened = window.open(gmailUrl, '_blank');
    if (!opened) {
      window.location.href = mailtoUrl;
    }
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Use the form below, or connect directly via email and Instagram."
      />

      <section className="section">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input type="text" name="name" required />
            </label>
            <label>
              Email
              <input type="email" name="email" required />
            </label>
            <label>
              Organisation <span>(optional)</span>
              <input type="text" name="organisation" />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required></textarea>
            </label>
            <button className="btn btn-primary" type="submit">Send Message</button>
            {submitted && <p className="contact-success">Thank you — your message has been noted.</p>}
          </form>

          <div className="contact-info">
            <div className="contact-info-block">
              <div className="eyebrow">Email</div>
              <a href="mailto:Connect@swapnilpandey.com">Connect@swapnilpandey.com</a>
            </div>
            <div className="contact-info-block">
              <div className="eyebrow">Instagram</div>
              <a href="https://www.instagram.com/swapnilpandeyofficial" target="_blank" rel="noreferrer">@swapnilpandeyofficial</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
