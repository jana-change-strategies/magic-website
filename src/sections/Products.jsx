import React from 'react';
import { Button } from '../components/core/Button';
import { AccentBar } from '../components/AccentBar';
import { ProductGallery } from '../components/ProductGallery';
import './Products.css';

function PriceBadge({ label, price }) {
  return (
    <div className="product-price">
      {label && <span className="product-price__label">{label}</span>}
      <span className="product-price__value">{price}</span>
    </div>
  );
}

function ProductBlock({ mediaLeft = true, eyebrow, media, children, facts }) {
  return (
    <div className={`product-block ${mediaLeft ? 'product-block--media-left' : 'product-block--media-right'}`}>
      <div className="product-block__eyebrow">
        <span className="eyebrow">{eyebrow}</span>
        <AccentBar />
      </div>
      <div className="product-block__media">
        {media}
        <ul className="fact-list fact-card product-block__facts">{facts}</ul>
      </div>
      <div className="product-block__copy">{children}</div>
    </div>
  );
}

export function Products() {
  return (
    <section id="products" className="section">
      <div className="container">
        <div className="section-head section-head--center">
          <span className="eyebrow">CURRENT COLLECTION</span>
          <AccentBar style={{ margin: '0 auto' }} />
          <h2 style={{ fontSize: 'var(--text-2xl)' }}>what we make.</h2>
          <p className="body-copy" style={{ margin: '0 auto' }}>
            One wax bar. One box that keeps it clean. One emergency backup that goes wherever your keys go.
          </p>
        </div>

        <img
          className="photo-correct"
          src="/images/Gemini_Generated_Image_1a3nq31a3nq31a3n.jpg"
          alt="turquoise dark grey and hot pink magic wax boxes on the beach in Popoyo"
          style={{ width: '100%', borderRadius: 'var(--radius-lg)', marginBottom: 'var(--space-20)', aspectRatio: '2 / 1', objectFit: 'cover', objectPosition: 'center 62%' }}
        />

        {/* Product 1: magic* surf wax — image left, copy right */}
        <ProductBlock
          mediaLeft
          eyebrow="THE WAX"
          media={
            <ProductGallery
              images={[
                {
                  src: '/images/Gemini_Generated_Image_hgd3zahgd3zahgd3.jpg',
                  alt: 'two white magic surf wax bars held at the beach in Popoyo',
                  className: 'photo-correct',
                },
              ]}
            />
          }
          facts={
            <>
              <li>developed and tested in Popoyo</li>
              <li>tropical and warm-water wax</li>
              <li>strong fresh grip</li>
              <li>easy application</li>
              <li>lightly scented</li>
              <li>wax white</li>
              <li>67 × 67 × 20 mm</li>
            </>
          }
        >
          <h3 style={{ fontSize: 'var(--text-xl)' }}>magic* surf wax</h3>
          <div className="body-copy">
            <p>Good surf wax was difficult to find locally, and expensive when we did find it. So more than five years ago, we started experimenting with making our own.</p>
            <p>What began with a simple question, “Can we actually do this?”, turned into years of testing, adjusting and trying again. The formula we use today was developed and tested in Popoyo for warm, tropical water. It is easy to apply and gives you strong grip when freshly waxed.</p>
            <p>Every bar is poured by hand in Popoyo. The wax is naturally wax white and lightly scented, because your face gets closer to your wax than almost anything else in your surf bag. Current scents vary between batches while we continue developing them.</p>
          </div>
          <div className="product-block__price">
            <PriceBadge label="price" price="$6.50" />
          </div>
          <Button href="/#order" style={{ alignSelf: 'flex-start' }}>order yours</Button>
        </ProductBlock>

        {/* Product 2: magic* wax box — copy left, image right (narrower image
            column so it doesn't outweigh the other two products) */}
        <ProductBlock
          mediaLeft={false}
          eyebrow="THE BOX"
          media={
            <ProductGallery
              images={[
                {
                  src: '/images/2.jpg',
                  alt: 'coral magic wax box open on the beach in Popoyo',
                  style: { objectPosition: 'center' },
                },
              ]}
            />
          }
          facts={
            <>
              <li>designed and 3D printed in Popoyo</li>
              <li>magnetic closure</li>
              <li>integrated wax comb</li>
              <li>reusable</li>
              <li>available in turquoise, hot pink and dark grey</li>
              <li>wax sold separately or as a bundle</li>
            </>
          }
        >
          <h3 style={{ fontSize: 'var(--text-xl)' }}>magic* wax box</h3>
          <div className="body-copy">
            <p>A loose wax bar rarely stays clean for long. It collects sand in your bag, disappears underneath the seats or softens in the car until it leaves a permanent reminder in the door pocket.</p>
            <p>The magic* wax box gives it a proper place.</p>
            <p>Designed and 3D printed by us in Popoyo, the box closes securely with a magnet and keeps the mess contained. A wax comb is integrated into the design, so it is always there when you need it.</p>
            <p>Choose from turquoise, hot pink or dark grey. The box is made to be used again and again, from one wax bar to the next.</p>
          </div>
          <div className="product-block__price product-price-row">
            <PriceBadge label="wax box" price="$13" />
            <PriceBadge label="wax box + wax bar" price="$18" />
          </div>
          <Button href="/#order" style={{ alignSelf: 'flex-start' }}>order yours</Button>
        </ProductBlock>

        {/* Product 3: emergency wax keychain — image left, copy right */}
        <ProductBlock
          mediaLeft
          eyebrow="THE BACKUP"
          media={
            <ProductGallery
              images={[
                {
                  src: '/images/65AF037B-D85C-4478-8E60-D94A77938F10.jpeg',
                  alt: 'hot pink emergency wax keychain attached to a belt loop',
                },
              ]}
            />
          }
          facts={
            <>
              <li>reusable keychain case</li>
              <li>includes one removable wax cube</li>
              <li>integrated fin key</li>
              <li>refillable</li>
              <li>attach to keys, backpack or board bag</li>
              <li>available in turquoise, hot pink and dark grey</li>
              <li>cube size: 34 × 34 × 20 mm</li>
            </>
          }
        >
          <h3 style={{ fontSize: 'var(--text-xl)' }}>emergency wax keychain</h3>
          <p style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-base)', color: 'var(--text-secondary)' }}>
            for the morning when the waves are good and nobody brought wax.
          </p>
          <div className="body-copy">
            <p>The Emergency Wax Keychain carries a quarter-size wax cube in a small reusable case. Attach it to your keys, backpack or board bag and you will always have enough wax for a quick top coat.</p>
            <p>The cube comes out of the case when you need it and can be replaced when it runs out. There is also a fin key built into the case, because that is another small thing you never seem to have when you need one.</p>
            <p>Useful, refillable and a pretty good little gift for anyone who regularly forgets their wax.</p>
          </div>
          <div className="product-block__price">
            <div className="product-price-row">
              <PriceBadge label="incl. one cube" price="$15" />
              <PriceBadge label="refill pack, four cubes" price="$6.50*" />
            </div>
            <p className="product-price__footnote">
              * four refill cubes contain the same total amount of wax as one full-size bar.
            </p>
          </div>
          <Button href="/#order" style={{ alignSelf: 'flex-start' }}>order yours</Button>
        </ProductBlock>
      </div>
    </section>
  );
}
