import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/journey', label: 'Journey' },
  { to: '/about', label: 'About' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/research', label: 'Research' },
  { to: '/media', label: 'Media' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/publications', label: 'Publications' },
  { to: '/events', label: 'Events' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''} ${open ? 'nav-menu-open' : ''}`}>
      <div className="container nav-row">

        {/* Desktop: brand + quote both shown permanently */}
        <NavLink to="/" className="nav-brand nav-brand-desktop" onClick={() => setOpen(false)}>
          <span className="nav-brand-name">Swapnil Pandey</span>
          <span className="nav-brand-tag">Founder • Youth Vision India</span>
        </NavLink>

        <div className="nav-quote nav-quote-desktop">
          <p className="nav-quote-devanagari">'शीलं परम भूषणम्</p>
          <div className="nav-quote-rule"></div>
          <p className="nav-quote-sub">Character is the highest ornament.</p>
        </div>

        {/* Mobile: single swap area — whole brand block <-> whole quote block */}
        <button
          className="nav-swap"
          onClick={() => setShowQuote((v) => !v)}
          aria-label="Toggle header content"
        >
          <span className={`nav-swap-face nav-swap-brand ${showQuote ? 'is-hidden' : ''}`}>
            <span className="nav-swap-brand-name">Swapnil Pandey</span>
            <span className="nav-swap-brand-tag">Founder • Youth Vision India</span>
          </span>
          <span className={`nav-swap-face nav-swap-quote ${showQuote ? '' : 'is-hidden'}`}>
            <span className="nav-swap-devanagari">'शीलं परम भूषणम्</span>
            <span className="nav-swap-sub">Character is the highest ornament.</span>
          </span>
        </button>

        <button
          className={`nav-burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>
      </div>

      <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
        {LINKS.map((l, i) => (
          <NavLink
            key={l.to}
            to={l.to}
            end={l.to === '/'}
            className={({ isActive }) => 'nav-link' + (isActive ? ' nav-link-active' : '')}
            style={{ transitionDelay: open ? `${i * 0.04}s` : '0s' }}
            onClick={() => setOpen(false)}
          >
            {l.label}
          </NavLink>
        ))}
      </nav>

      {open && <div className="nav-scrim" onClick={() => setOpen(false)}></div>}
    </header>
  );
}