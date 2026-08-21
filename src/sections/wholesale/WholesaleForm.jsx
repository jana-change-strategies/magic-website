import React from 'react';
import { useForm } from '@formspree/react';
import { Input } from '../../components/forms/Input';
import { Textarea } from '../../components/forms/Textarea';
import { Select } from '../../components/forms/Select';
import { CheckboxGroup } from '../../components/forms/CheckboxGroup';
import { RadioGroup } from '../../components/forms/RadioGroup';
import { Button } from '../../components/core/Button';
import { AccentBar } from '../../components/AccentBar';
import '../../styles/forms.css';

const FORMSPREE_WHOLESALE_FORM_ID = 'xjybljke';

export function WholesaleForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_WHOLESALE_FORM_ID);

  return (
    <section id="wholesale-enquiry" className="section" style={{ background: 'var(--surface-page)' }}>
      <div className="container split" style={{ alignItems: 'flex-start' }}>
        <div className="split__copy">
          <span className="eyebrow">LET'S TALK</span>
          <AccentBar />
          <h2 style={{ fontSize: 'var(--text-2xl)' }}>let’s talk wholesale.</h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--text-secondary)' }}>
            Tell us a little about your business and what you would like to stock. We will get back to you with current availability, wholesale pricing and order details.
          </p>
        </div>

        {state.succeeded ? (
          <div className="contact-form">
            <div className="contact-form__success">
              <span className="contact-form__success-title">enquiry sent.</span>
              <p className="contact-form__success-body">
                thanks — we'll get back to you with current availability, wholesale pricing and order details.
              </p>
            </div>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <Input label="business name" name="business_name" required />
            <Input label="your name" name="your_name" required />
            <Input label="email" name="email" type="email" required />
            <Input label="Instagram or website" name="instagram_or_website" />
            <Input label="business location" name="business_location" required />
            <Select
              label="type of business"
              name="business_type"
              required
              placeholder="select one"
              options={['Surf shop', 'Surf camp or school', 'Café or lifestyle store', 'Hotel or hostel', 'Other']}
            />
            <CheckboxGroup
              label="products you are interested in"
              name="products_interested"
              required
              options={['Surf wax', 'Wax boxes', 'Custom-logo wax boxes', 'Emergency Wax Keychains', 'Refill cube packs', 'Bundles']}
            />
            <Input label="estimated quantity" name="estimated_quantity" type="number" min="1" />
            <RadioGroup
              label="I am interested in custom branding"
              name="custom_branding"
              required
              options={['yes', 'no']}
            />
            <Textarea label="message" name="message" rows={4} />
            {state.errors && state.errors.getFormErrors().length > 0 && (
              <p className="contact-form__error">
                something went wrong sending your enquiry — please try again, or email us directly.
              </p>
            )}
            <Button type="submit" full disabled={state.submitting}>
              {state.submitting ? 'sending…' : 'send wholesale enquiry'}
            </Button>
            <p className="contact-form__note">
              or email <a href="mailto:hello@magicsurf.co">hello@magicsurf.co</a>.
            </p>
          </form>
        )}
      </div>
    </section>
  );
}
