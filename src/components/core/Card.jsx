import React from 'react';

/**
 * magic* Card — white surface on the wax-white page. Hairline border,
 * soft neutral shadow, 12px radius. Restrained — the content does the talking.
 */
export function Card({
  children,
  padded = true,
  interactive = false,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        background: 'var(--surface-card)',
        border: '1px solid var(--border-hairline)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: hover ? 'var(--shadow-md)' : 'var(--shadow-sm)',
        padding: padded ? 'var(--space-6)' : 0,
        overflow: 'hidden',
        cursor: interactive ? 'pointer' : 'default',
        transform: hover ? 'translateY(-2px)' : 'translateY(0)',
        transition: 'box-shadow var(--dur-base) var(--ease-standard), transform var(--dur-base) var(--ease-standard)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
