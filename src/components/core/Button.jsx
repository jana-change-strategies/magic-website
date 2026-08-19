import React from 'react';

/**
 * magic* Button — typewriter CTA. Brand language, usually lowercase.
 * Matte, architectural; accents deepen to their gradient-end on hover.
 */
export function Button({
  children,
  variant = 'primary',   // primary | secondary | outline | ghost
  size = 'md',           // sm | md | lg
  pill = false,
  full = false,
  disabled = false,
  type = 'button',
  href,                  // when set, renders an <a> styled identically (for scroll-to-anchor CTAs)
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  const sizes = {
    sm: { padding: '8px 16px', fontSize: 'var(--text-sm)' },
    md: { padding: '12px 22px', fontSize: 'var(--text-base)' },
    lg: { padding: '15px 30px', fontSize: 'var(--text-md)' },
  };

  const palettes = {
    primary: { bg: 'var(--magic-turquoise)', bgHover: 'var(--magic-turquoise-deep)', fg: 'var(--magic-white)', border: 'transparent' },
    secondary: { bg: 'var(--magic-pink)', bgHover: 'var(--magic-coral)', fg: 'var(--magic-white)', border: 'transparent' },
    outline: { bg: 'transparent', bgHover: 'var(--magic-black)', fg: 'var(--magic-black)', fgHover: 'var(--magic-wax-white)', border: 'var(--magic-black)' },
    ghost: { bg: 'transparent', bgHover: 'var(--grey-100)', fg: 'var(--magic-black)', border: 'transparent' },
  };
  const p = palettes[variant] || palettes.primary;

  const base = {
    display: full ? 'flex' : 'inline-flex',
    width: full ? '100%' : undefined,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    fontFamily: 'var(--font-headline)',
    fontWeight: 'var(--weight-bold)',
    lineHeight: 1,
    letterSpacing: '0.01em',
    textTransform: 'none',
    border: `1.5px solid ${p.border}`,
    borderRadius: pill ? 'var(--radius-pill)' : 'var(--radius-sm)',
    background: hover && !disabled ? (p.bgHover) : p.bg,
    color: hover && !disabled && p.fgHover ? p.fgHover : p.fg,
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    transform: active && !disabled ? 'translateY(1px)' : 'translateY(0)',
    transition: 'background var(--dur-base) var(--ease-standard), color var(--dur-fast) var(--ease-standard), transform var(--dur-fast) var(--ease-standard)',
    ...sizes[size],
    ...style,
  };

  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setActive(false); },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
  };

  if (href && !disabled) {
    return (
      <a href={href} onClick={onClick} style={{ textDecoration: 'none', ...base }} {...handlers} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={base}
      {...handlers}
      {...rest}
    >
      {children}
    </button>
  );
}
