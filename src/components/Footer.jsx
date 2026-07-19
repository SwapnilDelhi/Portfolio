import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-row">
        <div className="footer-col">
          <div className="footer-name">Swapnil Pandey</div>
          <div className="footer-motto">
            <span className="devanagari">शीलं परम भूषणम्</span>
            <span className="footer-triad">Anonymity &#8226; Austerity &#8226; Ability</span>
          </div>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Explore</div>
          <Link to="/about">About</Link>
          <Link to="/journey">Journey</Link>
          <Link to="/achievements">Achievements</Link>
          <Link to="/research">Mathematical Research</Link>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Initiatives</div>
          <Link to="/youth-vision-india">Youth Vision India</Link>
          <Link to="/parliament">Government Engagement</Link>
          <Link to="/varanasi">Varanasi Development</Link>
          <Link to="/collaborate">Collaborate</Link>
        </div>

        <div className="footer-col">
          <div className="footer-heading">Connect</div>
          <a href="mailto:contact@swapnilpandey.in">contact@swapnilpandey.in</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>&copy; {new Date().getFullYear()} Swapnil Pandey. All rights reserved.</span>
      </div>
    </footer>
  );
}
