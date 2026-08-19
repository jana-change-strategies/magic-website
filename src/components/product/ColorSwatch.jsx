import React from 'react';

/**
 * magic* ColorSwatch — a single palette chip with name + hex.
 * Used in palette displays, product pickers, and brand specimens.
 */
export function ColorSwatch({
  color,            // CSS colour or var()
  name,
  hex,
  selected = false,
  size = 'md',      // sm | md | lg
  onClick,
  style,
  ...rest
}) {
  const sizes = { sm: 28, md: 44, lg: 64 };
  const dim = sizes[size] || sizes.md;
  const interactive = typeof onClick === 'function';

  return (
    <div
      onClick={onClick}
      style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', cursor: interactive ? 'pointer' : 'default', ...style }}
      {...rest}
    >
      <span style={{
        width: dim, height: dim, flex: '0 0 auto',
        background: color,
        borderRadius: 'var(--radius-sm)',
        border: selected ? '2px solid var(--magic-black)' : '1px solid rgba(17,17,17,0.10)',
        boxShadow: selected ? '0 0 0 2px var(--surface-page), 0 0 0 3px var(--magic-black)' : 'none',
        transition: 'box-shadow var(--dur-fast) var(--ease-standard)',
      }} />
      {(name || hex) && (
        <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {name && <span style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{name}</span>}
          {hex && <span style={{ fontFamily: 'var(--font-headline)', fontSize: 'var(--text-2xs)', textTransform: 'uppercase', letterSpacing: '0.04em', color: 'var(--text-muted)' }}>{hex}</span>}
        </span>
      )}
    </div>
  );
}
