import React from 'react';

/**
 * magic* ProductCard — a wax box presented like a design object.
 * Renders the matte box in its physical colour with a tonal embossed wordmark
 * (embossing matches the box colour — no ink), then name / scent / price.
 */
export function ProductCard({
  name = 'magic*',
  variantName,            // e.g. "wax bar · turquoise"
  scent,                  // e.g. "lavender · cedarwood"
  price,                  // e.g. "$14"
  color = 'turquoise',    // turquoise | pink | grey
  logoSrc,                // wordmark image (white or box-colour) for the emboss
  image,                  // optional real product photo (overrides the box render)
  onAdd,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [addHover, setAddHover] = React.useState(false);
  const boxColors = {
    turquoise: 'var(--magic-turquoise)',
    pink: 'var(--magic-pink)',
    grey: 'var(--magic-grey)',
  };
  const bg = boxColors[color] || boxColors.turquoise;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', flexDirection: 'column',
        background: 'var(--surface-card)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {/* product visual */}
      <div style={{
        position: 'relative',
        aspectRatio: '4 / 3',
        background: image ? `center/cover no-repeat url(${image})` : bg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {!image && logoSrc && (
          <img
            src={logoSrc}
            alt={name}
            style={{
              width: '52%',
              filter: 'brightness(0.82) drop-shadow(0 1px 0 rgba(255,255,255,0.35))',
              opacity: 0.9,
            }}
          />
        )}
      </div>
      {/* meta */}
      <div style={{ padding: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: '12px' }}>
          <span style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-md)', fontWeight: 'var(--weight-bold)' }}>{name}</span>
          {price && <span style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-md)' }}>{price}</span>}
        </div>
        {variantName && (
          <span style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-2xs)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)', color: 'var(--text-muted)' }}>{variantName}</span>
        )}
        {scent && (
          <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-secondary)', marginTop: '2px' }}>{scent}</span>
        )}
        {onAdd && (
          <button
            onClick={onAdd}
            onMouseEnter={() => setAddHover(true)}
            onMouseLeave={() => setAddHover(false)}
            style={{
              marginTop: 'var(--space-3)',
              fontFamily: 'var(--font-headline)', fontWeight: 'var(--weight-bold)', fontSize: 'var(--text-sm)',
              color: addHover ? 'var(--magic-wax-white)' : 'var(--magic-black)',
              background: addHover ? 'var(--magic-black)' : 'transparent',
              border: '1.5px solid var(--magic-black)', borderRadius: 'var(--radius-sm)',
              padding: '9px 0', cursor: 'pointer', width: '100%',
              transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-base) var(--ease-standard)',
            }}
          >add to cart</button>
        )}
      </div>
    </div>
  );
}
