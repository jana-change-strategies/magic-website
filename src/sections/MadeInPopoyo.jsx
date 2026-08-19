import React from 'react';
import { AccentBar } from '../components/AccentBar';

export function MadeInPopoyo() {
  return (
    <section className="section">
      <div className="container split">
        <div className="split__media">
          <img src="/images/IMG_0761.jpg" alt="surfers gathering on the beach in Popoyo at sunset" />
        </div>
        <div className="split__copy">
          <span className="eyebrow">BEHIND MAGIC*</span>
          <AccentBar />
          <h2 style={{ fontSize: 'var(--text-2xl)' }}>made here. used here.</h2>
          <div className="body-copy">
            <p>We have lived and surfed in Popoyo for seven years. It is where the wax was developed, where we test it and where every magic* product is currently made.</p>
            <p>magic* is built by Jana and Fabian. Fabian develops and refines the wax formula, designs and prints the products, tests them, pours them and generally finds another small detail to improve. Jana shapes the brand, visual world and communication, develops product ideas and is usually the person taking the photos.</p>
            <p>In reality, there is plenty of overlap. We make decisions together, test things ourselves and keep changing them until they feel right.</p>
          </div>
          <p style={{ fontFamily: 'var(--font-headline)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-md)' }}>
            wax is only the beginning.
          </p>
        </div>
      </div>
    </section>
  );
}
