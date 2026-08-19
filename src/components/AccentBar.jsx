import React from 'react';

/**
 * Small turquoise -> hot pink gradient line (design system's screen-only
 * --grad-magic token). Sits between an eyebrow label and its H2/H3,
 * applied consistently on every section that has an eyebrow.
 */
export function AccentBar({ style }) {
  return (
    <div style={{ width: 48, height: 3, borderRadius: 2, background: 'var(--grad-magic)', ...style }} />
  );
}
