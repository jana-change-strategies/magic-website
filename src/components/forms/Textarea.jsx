import React from 'react';

/**
 * magic* Textarea — multi-line field matching Input. Georgia body type.
 */
export function Textarea({
  label,
  hint,
  rows = 4,
  value,
  defaultValue,
  placeholder,
  disabled = false,
  invalid = false,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `ta-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = invalid ? 'var(--magic-coral)' : focus ? 'var(--magic-turquoise)' : 'var(--border-hairline)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-headline)', fontSize: 'var(--text-2xs)',
          textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)',
          color: 'var(--text-secondary)',
        }}>{label}</label>
      )}
      <textarea
        id={fieldId}
        rows={rows}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          lineHeight: 'var(--leading-normal)',
          color: 'var(--text-primary)',
          background: disabled ? 'var(--grey-100)' : 'var(--surface-page)',
          border: `1.5px solid ${borderColor}`,
          borderRadius: 'var(--radius-sm)',
          padding: '11px 14px',
          outline: 'none',
          resize: 'vertical',
          boxShadow: focus && !invalid ? '0 0 0 3px rgba(61,191,191,0.18)' : 'none',
          transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
          width: '100%',
          boxSizing: 'border-box',
        }}
        {...rest}
      />
      {hint && (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
          color: invalid ? 'var(--magic-coral)' : 'var(--text-muted)',
        }}>{hint}</span>
      )}
    </div>
  );
}
