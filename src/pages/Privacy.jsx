import React from 'react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import '../styles/global.css';
import '../styles/sections.css';
import '../styles/legal.css';

export function Privacy() {
  return (
    <>
      <Header transparentOnTop={false} />
      <section className="legal-page page-offset">
        <div className="container-narrow">
          <h1>privacy policy</h1>
          <div className="body-copy">
            <p>When you fill out a form on this site — to place an order or make a wholesale inquiry — we collect what you enter: your name, email, and any other details the form asks for (location, quantity, message, etc.).</p>
            <p>That information is sent to us through Formspree, a third-party service that handles form submissions. We use it only to respond to your inquiry or order — we don't sell it, share it with anyone else, or use it for marketing without your permission.</p>
            <p>This site doesn't use tracking cookies or advertising trackers.</p>
            <p>If you'd like your information deleted, email <a href="mailto:hello@magicsurf.co">hello@magicsurf.co</a> and we'll take care of it.</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
