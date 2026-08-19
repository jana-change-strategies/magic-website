import React from 'react';
import { AccentBar } from '../components/AccentBar';

export function WaxProblem() {
  return (
    <section id="why-magic" className="section">
      <div className="container split">
        <div className="split__copy">
          <span className="eyebrow">WHY MAGIC*</span>
          <AccentBar />
          <h2 style={{ fontSize: 'var(--text-2xl)' }}>wax gets everywhere. except where you need it.</h2>
          <div className="body-copy">
            <p>Leave it loose in the car and it slowly becomes part of the door pocket. Throw it into your board bag and it comes back covered in sand, dust and whatever else was hiding at the bottom. Then there is the morning when the waves are good, everybody is ready, and somehow nobody brought wax.</p>
            <p>We know these problems because we have them too.</p>
            <p>So we started making the products we wanted to have ourselves. Wax with strong grip. A box that closes properly. A comb that is always there. And a tiny backup for your keys or board bag.</p>
          </div>
          <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-md)' }}>
            small things. none of them by accident.
          </p>
        </div>
        <div className="split__media">
          {/* Small nudge down within the frame, same size/crop otherwise */}
          <img
            src="/images/Gemini_Generated_Image_dr4lt0dr4lt0dr4l.jpg"
            alt="open teal magic wax box on a concrete ledge"
            style={{ objectPosition: 'center 40%' }}
          />
        </div>
      </div>
    </section>
  );
}
