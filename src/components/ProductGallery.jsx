import React from 'react';
import './ProductGallery.css';

/**
 * Big main photo with a thumbnail row underneath — click a thumbnail and
 * it becomes the main photo. Degrades to a single plain image when there's
 * only one shot (no thumbnail row rendered).
 */
export function ProductGallery({ images, className, style }) {
  const [active, setActive] = React.useState(0);

  if (!images || images.length === 0) return null;

  const current = images[Math.min(active, images.length - 1)];

  return (
    <div className={`product-gallery ${className || ''}`} style={style}>
      <img
        key={current.src}
        className={`product-gallery__main${current.className ? ` ${current.className}` : ''}`}
        src={current.src}
        alt={current.alt}
        style={current.style}
      />
      {images.length > 1 && (
        <div className="product-gallery__thumbs">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              className={`product-gallery__thumb${i === active ? ' product-gallery__thumb--active' : ''}`}
              onClick={() => setActive(i)}
              aria-label={`show photo ${i + 1} of ${images.length}`}
              aria-pressed={i === active}
            >
              <img src={img.src} alt="" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
