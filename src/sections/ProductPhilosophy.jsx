import React from 'react';
import { AccentBar } from '../components/AccentBar';

export function ProductPhilosophy() {
  return (
    <section className="section section--dark">
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-12)' }}>
        <div className="section-head section-head--center">
          <span className="eyebrow eyebrow--inverse">THE DETAILS</span>
          <AccentBar />
          <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--magic-wax-white)' }}>small things. none of them by accident.</h2>
          <div className="body-copy body-copy--inverse">
            <p>The magnet. The comb. The fin key. The emergency cube attached to your keys.</p>
            <p>They are small details, but they all come from paying attention to the mildly annoying things that happen before, during and after a surf session. We make products that solve those problems simply, work properly and look good while doing it.</p>
            <p>Everything is developed in-house. The wax is tested and hand-poured here. The boxes and keychain cases are designed and printed on our own 3D printers.</p>
          </div>
          <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-md)', color: 'var(--magic-wax-white)' }}>
            function comes first. then we make it beautiful.
          </p>
        </div>

        {/* Landscape, sized to match the Products section's image treatment
            (4:3, same ~460px column width) rather than a one-off crop. */}
        <img
          src="/images/Gemini_Generated_Image_mri6jrmri6jrmri6.jpg"
          alt="close-up of the functional details inside a magic wax box"
          style={{ width: '100%', maxWidth: 460, aspectRatio: '4 / 3', objectFit: 'cover', borderRadius: 'var(--radius-lg)', display: 'block' }}
        />
      </div>
    </section>
  );
}
