import React from 'react';
import { Button } from '../components/core/Button';
import { AccentBar } from '../components/AccentBar';
import './Hero.css';

export function Hero() {
  return (
    <section className="hero">
      <img
        className="hero__img"
        src="/images/Gemini_Generated_Image_pwqrpjpwqrpjpwqr.jpg"
        alt="magic wax box and surf wax beside a surfboard in Popoyo"
      />
      <div className="hero__overlay" />
      <div className="hero__scrim" />
      <div className="hero__content">
        <span className="eyebrow" style={{ color: 'var(--grey-300)' }}>SURF WAX · POPOYO · NICARAGUA</span>
        <AccentBar />
        <h1 className="hero__title">surf wax and the small things around it.</h1>
        <div className="hero__body">
          <p>magic* makes tropical surf wax, a box that keeps it where it belongs, and emergency wax for the day nobody brought any.</p>
          <p>Developed, tested and made in Popoyo.</p>
        </div>
        <div className="hero__actions">
          <Button href="/#order" size="lg">order yours</Button>
          <Button href="/#products" size="lg" variant="outline" style={{ borderColor: 'var(--magic-white)', color: 'var(--magic-white)' }}>see what we make</Button>
        </div>
        <p className="hero__availability">available in popoyo. larger orders to san juan del sur by arrangement.</p>
      </div>
    </section>
  );
}
