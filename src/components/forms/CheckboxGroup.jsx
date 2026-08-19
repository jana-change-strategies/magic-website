import React from 'react';

/**
 * magic* CheckboxGroup — uppercase group label matching Input, native
 * checkboxes tinted turquoise, Georgia option labels.
 */
export function CheckboxGroup({
  label,
  hint,
  name,
  options = [], // [{ value, label }] or plain strings
  required = false,
  style,
}) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', ...style }}>
      {label && (
        <span style={{
          fontFamily: 'var(--font-headline)', fontSize: 'var(--text-2xs)',
          textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)',
          color: 'var(--text-secondary)',
        }}>{label}{required ? ' *' : ''}</span>
      )}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {options.map((opt) => {
          const optValue = typeof opt === 'string' ? opt : opt.value;
          const optLabel = typeof opt === 'string' ? opt : opt.label;
          const id = `${name}-${optValue.replace(/\s+/g, '-').toLowerCase()}`;
          return (
            <label key={optValue} htmlFor={id} style={{
              display: 'flex', alignItems: 'center', gap: '10px',
              fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
              color: 'var(--text-primary)', cursor: 'pointer',
            }}>
              <input
                id={id}
                type="checkbox"
                name={name}
                value={optValue}
                style={{
                  width: 18, height: 18, accentColor: 'var(--magic-turquoise)',
                  cursor: 'pointer', flex: '0 0 auto',
                }}
              />
              {optLabel}
            </label>
          );
        })}
      </div>
      {hint && (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--text-muted)',
        }}>{hint}</span>
      )}
    </div>
  );
}
