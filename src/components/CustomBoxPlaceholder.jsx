import React from 'react';

/**
 * Stand-in for Fabian's custom Kooks Café wax box photograph — the one
 * launch asset still pending. Never substitute a generated image here
 * (per the content spec); swap this block for a real <img> as soon as
 * the photo lands.
 */
export function CustomBoxPlaceholder({ aspectRatio = '4 / 3', style }) {
  return (
    <div
      className="placeholder-block"
      style={{
        aspectRatio,
        background: 'var(--grey-200)',
        border: '1px dashed var(--grey-400)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-headline)',
          fontSize: 'var(--text-2xs)',
          textTransform: 'uppercase',
          letterSpacing: 'var(--tracking-label)',
          color: 'var(--grey-500)',
        }}
      >
        photo coming soon
      </span>
    </div>
  );
}
