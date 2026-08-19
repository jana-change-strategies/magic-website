import React from 'react';
import { Button } from '../components/core/Button';

const IMAGES = [
  { src: '/images/IMG_0761.jpg', alt: 'surfers gathering on the beach in Popoyo at sunset' },
  { src: '/images/DSC05947-2.jpg', alt: 'shore break moving over dark sand in Popoyo' },
  { src: '/images/Gemini_Generated_Image_no9bugno9bugno9b.jpg', alt: 'surfer holding a dark grey magic wax box', correct: true },
  { src: '/images/DSC05933.jpg', alt: 'shore break moving over dark sand in Popoyo' },
  { src: '/images/DSC05965-2.jpg', alt: 'shore break moving over dark sand in Popoyo at sunset' },
  { src: '/images/ElevenLabs_image_gpt-image-2_Close-up of sur_2026-06-27T08_11_01.png', alt: 'surfer applying wax to a surfboard' },
];

export function InstagramGallery() {
  return (
    <section className="section section--tight">
      <div className="container">
        <div className="section-head section-head--center">
          <h2 style={{ fontSize: 'var(--text-2xl)' }}>from popoyo, lately.</h2>
          <p className="body-copy" style={{ margin: '0 auto' }}>Wax, waves, people and the small moments in between.</p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-3)',
            maxWidth: 640,
            margin: '0 auto var(--space-10)',
          }}
        >
          {IMAGES.map((img) => (
            <a
              key={img.src}
              href="https://www.instagram.com/magicsurf.co/"
              target="_blank"
              rel="noreferrer"
              style={{ display: 'block', borderRadius: 'var(--radius-lg)', overflow: 'hidden' }}
            >
              <img
                className={img.correct ? 'photo-correct' : undefined}
                src={img.src}
                alt={img.alt}
                style={{ width: '100%', aspectRatio: '1 / 1', objectFit: 'cover' }}
              />
            </a>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Button href="https://www.instagram.com/magicsurf.co/" target="_blank" rel="noreferrer" variant="outline">follow @magicsurf.co</Button>
        </div>
      </div>
    </section>
  );
}
