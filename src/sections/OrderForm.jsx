import React from 'react';
import { Input } from '../components/forms/Input';
import { Textarea } from '../components/forms/Textarea';
import { Select } from '../components/forms/Select';
import { Button } from '../components/core/Button';
import { AccentBar } from '../components/AccentBar';
import '../styles/forms.css';

// TODO: replace with the real Formspree form ID before launch.
const FORMSPREE_ORDER_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_ORDER_FORM_ID';

export function OrderForm() {
  return (
    <section id="order" className="section" style={{ background: 'var(--surface-page)' }}>
      <div className="container split" style={{ alignItems: 'flex-start' }}>
        <div className="split__copy">
          <span className="eyebrow">DIRECT ORDERS</span>
          <AccentBar />
          <h2 style={{ fontSize: 'var(--text-2xl)' }}>order yours.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)' }}>
            Tell us what you would like, how many you need and where you are. We will confirm availability and arrange pickup or delivery.
          </p>
        </div>

        <form className="contact-form" action={FORMSPREE_ORDER_ENDPOINT} method="POST">
          <Select
            label="reason for contacting us"
            name="reason"
            required
            placeholder="select one"
            options={['I would like to order', 'I have a wholesale enquiry', 'Something else']}
          />
          <Input label="name" name="name" required />
          <Input label="email" name="email" type="email" required />
          <Textarea label="what would you like?" name="what_would_you_like" required rows={3} />
          <Select
            label="preferred colour"
            name="preferred_colour"
            placeholder="select one"
            options={['turquoise', 'hot pink', 'dark grey', 'no colour preference']}
          />
          <Input label="quantity" name="quantity" type="number" min="1" required />
          <Textarea label="message" name="message" rows={4} />
          <Button type="submit" full>send request</Button>
          <p className="contact-form__note">
            or email us directly at <a href="mailto:hello@magicsurf.co">hello@magicsurf.co</a>.
          </p>
        </form>
      </div>
    </section>
  );
}
