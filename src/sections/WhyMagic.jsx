import React from 'react';
import { AccentBar } from '../components/AccentBar';

export function WhyMagic() {
  return (
    <section className="section">
      <div className="container split">
        <div className="split__copy">
          <span className="eyebrow">THE PHILOSOPHY</span>
          <AccentBar />
          <h2 style={{ fontSize: 'var(--text-2xl)' }}>ordinary things can create magic* moments.</h2>
          <div className="body-copy">
            <p>For us, magic is not about making something unnecessarily complicated or pretending that a surf product will change your life.</p>
            <p>It is the small moment when something works exactly as it should. The wax grips. The box stays closed. The comb is where you need it. Somebody forgot the wax, but there is an emergency cube attached to the board bag.</p>
            <p>That is the kind of magic we like.</p>
          </div>
        </div>
        <div className="split__media">
          <img src="/images/IMG_5537.jpg" alt="sunset reflected on the beach in Popoyo" />
        </div>
      </div>
    </section>
  );
}
