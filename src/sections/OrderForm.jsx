import React from 'react';
import { useForm } from '@formspree/react';
import { Input } from '../components/forms/Input';
import { Textarea } from '../components/forms/Textarea';
import { Select } from '../components/forms/Select';
import { Button } from '../components/core/Button';
import { AccentBar } from '../components/AccentBar';
import '../styles/forms.css';

const FORMSPREE_ORDER_FORM_ID = 'myegolyq';

export function OrderForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ORDER_FORM_ID);

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

        {state.succeeded ? (
          <div className="contact-form">
            <div className="contact-form__success">
              <span className="contact-form__success-title">request sent.</span>
              <p className="contact-form__success-body">
                thanks — we'll get back to you to confirm availability and arrange pickup or delivery.
              </p>
            </div>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
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
            {state.errors && state.errors.getFormErrors().length > 0 && (
              <p className="contact-form__error">
                something went wrong sending your request — please try again, or email us directly.
              </p>
            )}
            <Button type="submit" full disabled={state.submitting}>
              {state.submitting ? 'sending…' : 'send request'}
            </Button>
            <p className="contact-form__note">
              or email us directly at <a href="mailto:hello@magicsurf.co">hello@magicsurf.co</a>.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
