import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const DESKTOP_LINKS = [
  { to: '/', label: 'Home' },
  {
    label: 'About',
    items: [
      { to: '/mission', label: 'Mission' },
      { to: '/journey', label: 'Journey' },
      { to: '/about', label: 'About' },
    ],
  },
  {
    label: 'Engagements',
    items: [
      { to: '/government-collaboration', label: 'Raisina Engagement' },
      { to: '/varanasi', label: 'Varanasi Development' },
      { to: '/impact', label: 'Impact' },
    ],
  },
  { to: '/research', label: 'Research' },
  {
    label: 'Media',
    items: [
      { to: '/media', label: 'Media' },
      { to: '/gallery', label: 'Gallery' },
      { to: '/events', label: 'Events' },
    ],
  },
  { to: '/publications', label: 'Publications' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [desktopOpen, setDesktopOpen] = useState(null);
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
    <header className={`nav ${scrolled ? 'nav-scrolled' : ''} ${open ? 'nav-menu-open' : ''} ${desktopOpen ? 'nav-desktop-open' : ''}`}>
      <div className="container nav-row">

        {/* Desktop and mobile: the brand swaps with the quote on click */}
        <button
          className="nav-swap"
          onClick={() => setShowQuote((v) => !v)}
          aria-label="Toggle header content"
        >
          <span className={`nav-swap-face nav-swap-brand ${showQuote ? 'is-hidden' : ''}`}>
            <span className="nav-swap-brand-name">Swapnil Pandey</span>
            <span className="nav-swap-brand-tag">Anonymity &#8226; Austerity &#8226; Ability</span>
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

        <nav className="desktop-nav" aria-label="Primary navigation">
          {DESKTOP_LINKS.map((link) => (
            link.items ? (
              <div className="desktop-nav-group" key={link.label}>
                <button
                  className={`desktop-nav-trigger ${desktopOpen === link.label ? 'is-open' : ''}`}
                  type="button"
                  aria-expanded={desktopOpen === link.label}
                  onClick={() => setDesktopOpen((current) => current === link.label ? null : link.label)}
                >
                  {link.label}<span className="desktop-nav-chevron" aria-hidden="true"></span>
                </button>
                <div className={`desktop-dropdown ${desktopOpen === link.label ? 'is-open' : ''}`}>
                  {link.items.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      className="desktop-dropdown-link"
                      onClick={() => setDesktopOpen(null)}
                    >
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className="desktop-nav-link"
                onClick={() => setDesktopOpen(null)}
              >
                {link.label}
              </NavLink>
            )
          ))}
        </nav>
      </div>

      <nav className={`nav-links ${open ? 'nav-links-open' : ''}`}>
        {DESKTOP_LINKS.map((link, i) => (
          link.items ? (
            <div
              className="nav-link-group"
              key={link.label}
              style={{ transitionDelay: open ? `${i * 0.04}s` : '0s' }}
            >
              <span className="nav-link-heading">{link.label}</span>
              <div className="nav-link-sublist">
                {link.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) => 'nav-sublink' + (isActive ? ' nav-link-active' : '')}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          ) : (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => 'nav-link' + (isActive ? ' nav-link-active' : '')}
              style={{ transitionDelay: open ? `${i * 0.04}s` : '0s' }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          )
        ))}
      </nav>

      {open && <div className="nav-scrim" onClick={() => setOpen(false)}></div>}
    </header>
  );
}