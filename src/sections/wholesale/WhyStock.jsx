import React from 'react';
import { AccentBar } from '../../components/AccentBar';

export function WhyStock() {
  return (
    <section className="section" style={{ background: 'var(--grey-050)' }}>
      <div className="container split">
        <div className="split__copy">
          <span className="eyebrow">WHY STOCK MAGIC*</span>
          <AccentBar />
          <h2 style={{ fontSize: 'var(--text-2xl)' }}>small products. properly thought through.</h2>
          <div className="body-copy">
            <p>Every magic* product is developed and made in Popoyo.</p>
            <p>The wax formula has been tested and refined for more than five years. Each bar is poured by hand. Our boxes and keychain cases are designed in-house and produced on our own 3D printers.</p>
            <p>The products are functional, colourful and easy to explain to customers. The wax is something surfers regularly need. The box solves a familiar problem. The Emergency Wax Keychain works as both a useful backup and an accessible gift.</p>
          </div>
        </div>
        <div className="split__media">
          <img
            src="/images/Gemini_Generated_Image_mri6jrmri6jrmri6.jpg"
            alt="reusable magic wax box with integrated comb and surf wax"
          />
        </div>
      </div>
    </section>
  );
}
