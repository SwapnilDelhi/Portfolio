import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/journey', label: 'Journey' },
  { to: '/achievements', label: 'Achievements' },
  { to: '/research', label: 'Research' },
  { to: '/media', label: 'Media' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/publications', label: 'Publications' },
  { to: '/collaborate', label: 'Collaborate' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''}`}>
      <div className="container nav-row">
        <NavLink to="/" className="nav-brand" onClick={() => setOpen(false)}>
          <span className="nav-brand-name">Swapnil Pandey</span>
          <span className="nav-brand-tag">Youth Vision India</span>
        </NavLink>

        <button
          className={`nav-burger ${open ? 'is-open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span></span><span></span><span></span>
        </button>

        <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
          {LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={({ isActive }) => 'nav-link' + (isActive ? ' nav-link-active' : '')}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
