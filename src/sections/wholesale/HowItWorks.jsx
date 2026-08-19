import React from 'react';
import { AccentBar } from '../../components/AccentBar';
import './HowItWorks.css';

const STEPS = [
  { num: '01', title: 'tell us about your business.', body: 'Share your location, business type and the products you are interested in.' },
  { num: '02', title: 'choose your products.', body: 'Select standard magic* products, custom-logo boxes or a combination.' },
  { num: '03', title: 'confirm the details.', body: 'We confirm quantities, colours, wholesale pricing and production time.' },
  { num: '04', title: 'made in popoyo.', body: 'We pour, print and prepare the order locally.' },
];

export function HowItWorks() {
  return (
    <section className="section section--dark">
      <div className="container">
        <span className="eyebrow eyebrow--inverse">HOW IT WORKS</span>
        <AccentBar style={{ margin: 'var(--space-3) 0 var(--space-4)' }} />
        <h2 style={{ fontSize: 'var(--text-2xl)', maxWidth: 720, marginBottom: 'var(--space-16)', color: 'var(--magic-wax-white)' }}>
          let’s make it work for your business.
        </h2>
        <div className="steps">
          {STEPS.map((s) => (
            <div key={s.num}>
              <div className="steps__num">{s.num}</div>
              <h3 style={{ fontSize: 'var(--text-md)', margin: 'var(--space-3) 0 var(--space-2)', color: 'var(--magic-wax-white)' }}>{s.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--grey-300)' }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
