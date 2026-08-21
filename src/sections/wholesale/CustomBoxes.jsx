import React from 'react';
import { Button } from '../../components/core/Button';
import { AccentBar } from '../../components/AccentBar';

export function CustomBoxes() {
  return (
    <section id="custom-boxes" className="section" style={{ background: 'var(--grey-050)' }}>
      <div className="container split">
        <div className="split__media">
          <img
            src="/images/kooks-cafe-custom-box.png"
            alt="custom logo wax box made for Kooks Café in Popoyo"
          />
        </div>
        <div className="split__copy">
          <span className="eyebrow">CUSTOM LOGO WAX BOXES</span>
          <AccentBar />
          <h2 style={{ fontSize: 'var(--text-2xl)' }}>your logo. our box.</h2>
          <div className="body-copy">
            <p>For wholesale orders of ten boxes or more, we can produce our wax box with your business logo integrated into the design. Your logo replaces the magic* logo on the box.</p>
            <p>Every box is designed and printed in-house in Popoyo. It keeps the same magnetic closure and integrated wax comb, but the colour and branding are made for your business.</p>
            <p>Choose a colour we currently have in stock for a production time of approximately two to three weeks. Custom colours can be ordered and require additional lead time, which we confirm before the order is placed.</p>
            <p>Custom boxes can be ordered on their own or supplied with magic* surf wax, depending on how you want to sell them.</p>
          </div>
          <ul className="fact-list">
            <li>minimum order: 10 custom boxes</li>
            <li>setup and design fee for 10 to 19 boxes: $50</li>
            <li>setup and design fee from 20 boxes: waived</li>
            <li>logo placement: partner logo replaces the magic* logo</li>
            <li>available stock colour: approximately 2 to 3 weeks production time</li>
            <li>custom colour: lead time confirmed before order</li>
            <li>logo file: send the best version available; we prepare it for production</li>
            <li>supply format: boxes alone or boxes with magic* surf wax</li>
          </ul>
          <Button href="#wholesale-enquiry" style={{ alignSelf: 'flex-start' }}>ask about custom boxes</Button>
        </div>
      </div>
    </section>
  );
}
