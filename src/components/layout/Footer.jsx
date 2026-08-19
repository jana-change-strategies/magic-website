import React from 'react';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a href="/" className="site-footer__logo" aria-label="magic* home">
          <img src="/logo/magic-horizontal-white.png" alt="magic*" />
        </a>

        <p className="site-footer__line">made in popoyo.</p>

        <div className="site-footer__links">
          <a
            className="site-footer__link"
            href="https://www.instagram.com/magicsurf.co/"
            target="_blank"
            rel="noreferrer"
          >
            instagram
          </a>
          <a className="site-footer__link" href="mailto:hello@magicsurf.co">
            hello@magicsurf.co
          </a>
          <a className="site-footer__link" href="/wholesale/">
            wholesale
          </a>
        </div>

        <div className="site-footer__legal">
          <a href="/imprint/">imprint</a>
          <a href="/privacy/">privacy policy</a>
        </div>
      </div>
    </footer>
  );
}
