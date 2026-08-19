import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import '../styles/global.css';
import '../styles/sections.css';
import '../styles/legal.css';

export function Imprint() {
  return (
    <>
      <Header transparentOnTop={false} />
      <section className="legal-page page-offset">
        <div className="container-narrow">
          <h1>imprint</h1>
          <div className="body-copy">
            <p>magic* is a surf wax and accessories brand designed and made in Popoyo, Nicaragua.</p>
            <p>Responsible for this site: Jana Schilling and Fabian Menzel — Popoyo, Nicaragua.</p>
            <p>Contact: <a href="mailto:hello@magicsurf.co">hello@magicsurf.co</a></p>
            <p>magic* is currently run as an independent project by its founders and is not yet a registered business entity.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
