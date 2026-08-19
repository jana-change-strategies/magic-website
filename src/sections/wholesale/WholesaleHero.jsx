import React from 'react';
import { Button } from '../../components/core/Button';
import { AccentBar } from '../../components/AccentBar';

export function WholesaleHero() {
  return (
    <section className="section page-offset">
      <div className="container split">
        <div className="split__copy">
          <span className="eyebrow">WHOLESALE SURF WAX · NICARAGUA</span>
          <AccentBar />
          <h1 style={{ fontSize: 'var(--text-3xl)' }}>want to stock a little magic*?</h1>
          <div className="body-copy">
            <p>We work with surf shops, surf camps, schools, cafés, lifestyle stores, hotels, hostels and other businesses looking for useful, locally made surf products.</p>
            <p>Choose from our current collection or talk to us about wax boxes made with your own logo.</p>
          </div>
          <Button href="#wholesale-enquiry" size="lg" style={{ alignSelf: 'flex-start' }}>make a wholesale enquiry</Button>
        </div>
        <div className="split__media">
          {/* Back to the three-boxes product shot (with the round-1 colour
              correction applied) — an actual product photo, and thematically
              a good fit for "stock a little magic*" since it shows the
              range. Reused from the homepage hero/products intro since
              every other clean product shot is already spoken for. */}
          <img
            className="photo-correct"
            src="/images/Gemini_Generated_Image_1a3nq31a3nq31a3n.jpg"
            alt="turquoise dark grey and hot pink magic wax boxes on the beach in Popoyo"
          />
        </div>
      </div>
    </section>
  );
}
