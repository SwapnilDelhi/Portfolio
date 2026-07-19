import { useState } from 'react';
import PageHeader from '../components/PageHeader';
import './InnerPage.css';
import './Contact.css';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    // Wire this up to your email service or backend endpoint of choice.
    setSubmitted(true);
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="A professional contact form, along with email, LinkedIn, Instagram, and location details."
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
              <a href="mailto:contact@swapnilpandey.in">contact@swapnilpandey.in</a>
            </div>
            <div className="contact-info-block">
              <div className="eyebrow">LinkedIn</div>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">linkedin.com/in/swapnilpandey</a>
            </div>
            <div className="contact-info-block">
              <div className="eyebrow">Instagram</div>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">@swapnilpandey</a>
            </div>
            <div className="contact-info-block">
              <div className="eyebrow">Location</div>
              <span>India</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
