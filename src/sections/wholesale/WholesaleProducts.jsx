import React from 'react';
import { Card } from '../../components/core/Card';
import { AccentBar } from '../../components/AccentBar';
import './WholesaleProducts.css';

const CARDS = [
  {
    title: 'magic* surf wax',
    body: 'Hand-poured tropical surf wax with strong fresh grip, easy application and a light scent.',
  },
  {
    title: 'magic* wax box',
    body: 'A reusable, 3D-printed wax box with magnetic closure and integrated wax comb. Available in official magic* colours or with custom business branding for qualifying orders.',
  },
  {
    title: 'emergency wax keychain',
    body: 'A refillable keychain case containing one quarter-size wax cube and an integrated fin key.',
  },
  {
    title: 'emergency wax refills',
    body: 'Packs of four replacement cubes. Four cubes contain the same total amount of wax as one full-size bar.',
  },
  {
    title: 'bundles',
    body: 'Wax bars and boxes can be combined into ready-to-sell sets.',
  },
];

export function WholesaleProducts() {
  return (
    <section className="section wholesale-products">
      <img className="wholesale-products__img" src="/images/IMG_5018.jpg" alt="" aria-hidden="true" />
      <div className="wholesale-products__wash" />
      <div className="container wholesale-products__content">
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto var(--space-16)' }}>
          <span className="eyebrow">WHOLESALE COLLECTION</span>
          <AccentBar style={{ margin: 'var(--space-3) auto 0' }} />
          <h2 style={{ fontSize: 'var(--text-2xl)', marginTop: 'var(--space-4)' }}>
            wholesale surf wax and the small things around it.
          </h2>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 'var(--space-6)' }}>
          {CARDS.map((c) => (
            <Card key={c.title} style={{ flex: '1 1 300px', maxWidth: 340 }}>
              <h3 style={{ fontSize: 'var(--text-md)', marginBottom: 'var(--space-3)' }}>{c.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)' }}>
                {c.body}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
