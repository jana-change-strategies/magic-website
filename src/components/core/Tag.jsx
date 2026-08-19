import React from 'react';

/**
 * magic* Tag — uppercase, tracked, pill. For content pillars and metadata.
 * Quiet by default; accent variants for emphasis.
 */
export function Tag({
  children,
  variant = 'default',  // default | turquoise | pink | dark
  solid = false,
  style,
  ...rest
}) {
  const palettes = {
    default:   { bg: 'var(--grey-100)',      fg: 'var(--grey-700)',          border: 'var(--grey-300)' },
    turquoise: { bg: 'var(--turquoise-wash)', fg: 'var(--magic-turquoise-deep)', border: 'transparent' },
    pink:      { bg: 'var(--pink-wash)',      fg: 'var(--magic-coral)',       border: 'transparent' },
    dark:      { bg: 'transparent',           fg: 'var(--magic-black)',       border: 'var(--magic-black)' },
  };
  const solids = {
    default:   { bg: 'var(--grey-700)',     fg: 'var(--magic-wax-white)' },
    turquoise: { bg: 'var(--magic-turquoise)', fg: 'var(--magic-white)' },
    pink:      { bg: 'var(--magic-pink)',   fg: 'var(--magic-white)' },
    dark:      { bg: 'var(--magic-black)',  fg: 'var(--magic-wax-white)' },
  };
  const p = solid ? solids[variant] : palettes[variant];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        fontFamily: 'var(--font-headline)',
        fontSize: 'var(--text-2xs)',
        textTransform: 'uppercase',
        letterSpacing: 'var(--tracking-label)',
        lineHeight: 1,
        padding: '6px 12px',
        borderRadius: 'var(--radius-pill)',
        background: p.bg,
        color: p.fg,
        border: `1px solid ${p.border || 'transparent'}`,
        whiteSpace: 'nowrap',
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
