import React from 'react';
import { Button } from '../components/core/Button';
import { AccentBar } from '../components/AccentBar';
import './FindUs.css';

export function FindUs() {
  return (
    <section id="find-us" className="section find-us">
      <img className="find-us__img" src="/images/IMG_5037.jpg" alt="" aria-hidden="true" />
      <div className="find-us__wash" />
      <div className="container find-us__content">
        <span className="eyebrow" style={{ display: 'block', marginBottom: 'var(--space-4)' }}>FIND US</span>
        <AccentBar style={{ marginBottom: 'var(--space-4)' }} />
        <h2 style={{ fontSize: 'var(--text-2xl)', marginBottom: 'var(--space-12)' }}>find magic* in popoyo.</h2>
        <div className="split split--equal" style={{ alignItems: 'start' }}>
          <div className="split__copy">
            <h3 style={{ fontSize: 'var(--text-lg)' }}>order directly from us.</h3>
            <div className="body-copy">
              <p>The complete range can be ordered directly from us. Direct orders include all four official box colours, bundles, Emergency Wax Keychains and refill packs.</p>
              <p>Pickup at Finca Popoyo can usually be arranged. If the waves are good, chances are we will be there at some point anyway.</p>
              <p>For larger orders, ask us about local delivery in the Popoyo area or delivery to San Juan del Sur.</p>
            </div>
            <Button href="/#order" style={{ alignSelf: 'flex-start' }}>order yours</Button>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)' }}>
              send us a DM at{' '}
              <a href="https://www.instagram.com/magicsurf.co/" target="_blank" rel="noreferrer" style={{ color: 'var(--magic-turquoise-deep)' }}>@magicsurf.co</a>
              {' '}or email{' '}
              <a href="mailto:hello@magicsurf.co" style={{ color: 'var(--magic-turquoise-deep)' }}>hello@magicsurf.co</a>.
            </p>
          </div>
          <div className="split__copy">
            <h3 style={{ fontSize: 'var(--text-lg)' }}>pick it up nearby.</h3>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)' }}>
              find magic* at different locations in popoyo. colors depend on what's available in store.
            </p>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <li>
                <a
                  href="https://www.instagram.com/kookscafe_popoyo/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: 'var(--font-headline)', color: 'var(--magic-turquoise-deep)', fontSize: 'var(--text-sm)' }}
                >
                  Kooks Café
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/elchantepopoyo/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: 'var(--font-headline)', color: 'var(--magic-turquoise-deep)', fontSize: 'var(--text-sm)' }}
                >
                  El Chante
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/p/Store-Hermanas-Miranda-100063727495936/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: 'var(--font-headline)', color: 'var(--magic-turquoise-deep)', fontSize: 'var(--text-sm)' }}
                >
                  Hermanas Miranda
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
