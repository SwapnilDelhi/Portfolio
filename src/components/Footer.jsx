import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div className="footer-col footer-brand-col">
          <span className="footer-kicker">Swapnil Pandey</span>
          <div className="footer-name">Swapnil Pandey</div>
          <div className="footer-motto">
            <span className="devanagari">शीलं परम भूषणम्</span>
            <span className="footer-triad">Anonymity &#8226; Austerity &#8226; Ability</span>
          </div>
        </div>

        <nav className="footer-col" aria-label="Explore">
          <div className="footer-heading">Explore</div>
          <Link to="/about">About</Link>
          <Link to="/journey">Journey</Link>
          <Link to="/government-collaboration">Raisina Engagement</Link>
          <Link to="/research">Research Overview</Link>
          <Link to="/research/mathematical">Mathematical Research</Link>
          <Link to="/research/niti-aayog">NITI Aayog</Link>
        </nav>

        <nav className="footer-col" aria-label="Initiatives">
          <div className="footer-heading">Initiatives</div>
          <Link to="/youth-vision-india">Youth Vision India</Link>
          <Link to="/varanasi">Kashi Rising</Link>
          <Link to="/collaborate">Collaborate</Link>
        </nav>

        <div className="footer-col footer-connect-col">
          <div className="footer-heading">Connect</div>
          <a href="mailto:Connect@swapnilpandey.com">Connect@swapnilpandey.com</a>
          <a href="https://www.instagram.com/vidil.pandey" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span className="footer-bottom-rule"></span>
        <span>&copy; {new Date().getFullYear()} Swapnil Pandey. All rights reserved.</span>
      </div>
    </footer>
  );
}
