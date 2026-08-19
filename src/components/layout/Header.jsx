import React from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '../core/Button';
import './Header.css';
import './MobileMenu.css';

const NAV_LINKS = [
  { href: '/#products', label: 'products', match: 'products' },
  { href: '/#why-magic', label: 'why magic*', match: 'why-magic' },
  { href: '/#find-us', label: 'find us', match: 'find-us' },
  { href: '/wholesale/', label: 'wholesale', match: 'wholesale' },
];

/**
 * Global sticky header. Transparent over a hero, solid black once the page
 * scrolls (homepage / wholesale). Pages without a hero (imprint, privacy)
 * pass transparentOnTop={false} and render solid black immediately.
 */
export function Header({ transparentOnTop = true, active }) {
  const [scrolled, setScrolled] = React.useState(!transparentOnTop);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    if (!transparentOnTop) return;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 8);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [transparentOnTop]);

  const solid = !transparentOnTop || scrolled;

  return (
    <>
      <header
        className="site-header"
        style={{
          background: solid ? 'var(--magic-black)' : 'transparent',
          borderBottomColor: solid ? 'rgba(255,255,255,0.08)' : 'transparent',
        }}
      >
        <div className="site-header__inner">
          <a href="/" className="site-header__logo" aria-label="magic* home">
            <img src="/logo/magic-horizontal-white.png" alt="magic*" />
          </a>

          <nav className="site-header__nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`site-header__link${active === link.match ? ' site-header__link--active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="site-header__cta">
            <Button href="/#order" size="sm">order yours</Button>
          </div>

          <button
            className="site-header__menu-btn"
            aria-label={menuOpen ? 'close menu' : 'open menu'}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <div className={`mobile-menu${menuOpen ? ' mobile-menu--open' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="mobile-menu__link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <Button href="/#order" full onClick={() => setMenuOpen(false)}>order yours</Button>
      </div>
    </>
  );
}
