import React from 'react';

/**
 * magic* Badge — tiny status / count marker. Smaller and rounder than a Tag;
 * can be a bare dot.
 */
export function Badge({
  children,
  variant = 'turquoise', // turquoise | pink | dark | neutral
  dot = false,
  style,
  ...rest
}) {
  const colors = {
    turquoise: 'var(--magic-turquoise)',
    pink: 'var(--magic-pink)',
    dark: 'var(--magic-black)',
    neutral: 'var(--grey-500)',
  };
  const bg = colors[variant] || colors.turquoise;

  if (dot) {
    return (
      <span
        style={{ display: 'inline-block', width: '8px', height: '8px', borderRadius: 'var(--radius-pill)', background: bg, ...style }}
        {...rest}
      />
    );
  }

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '20px',
        height: '20px',
        padding: '0 7px',
        fontFamily: 'var(--font-headline)',
        fontSize: 'var(--text-2xs)',
        fontWeight: 'var(--weight-bold)',
        lineHeight: 1,
        textTransform: 'lowercase',
        color: 'var(--magic-white)',
        background: bg,
        borderRadius: 'var(--radius-pill)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
