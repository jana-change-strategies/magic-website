import React from 'react';
import { ChevronDown } from 'lucide-react';

/**
 * magic* Select — matches Input's field chrome (hairline border, wax-white
 * fill, turquoise focus ring, uppercase label). Native <select> under the hood.
 */
export function Select({
  label,
  hint,
  value,
  defaultValue,
  disabled = false,
  invalid = false,
  onChange,
  id,
  name,
  required = false,
  placeholder,
  options = [], // [{ value, label }] or plain strings
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const fieldId = id || (label ? `sel-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined);
  const borderColor = invalid ? 'var(--magic-coral)' : focus ? 'var(--magic-turquoise)' : 'var(--border-hairline)';

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', ...style }}>
      {label && (
        <label htmlFor={fieldId} style={{
          fontFamily: 'var(--font-headline)', fontSize: 'var(--text-2xs)',
          textTransform: 'uppercase', letterSpacing: 'var(--tracking-label)',
          color: 'var(--text-secondary)',
        }}>{label}{required ? ' *' : ''}</label>
      )}
      <div style={{ position: 'relative' }}>
        <select
          id={fieldId}
          name={name}
          value={value}
          defaultValue={value === undefined ? (defaultValue ?? (placeholder ? '' : undefined)) : undefined}
          disabled={disabled}
          required={required}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'var(--text-base)',
            color: 'var(--text-primary)',
            background: disabled ? 'var(--grey-100)' : 'var(--surface-page)',
            border: `1.5px solid ${borderColor}`,
            borderRadius: 'var(--radius-sm)',
            padding: '11px 40px 11px 14px',
            outline: 'none',
            boxShadow: focus && !invalid ? '0 0 0 3px rgba(61,191,191,0.18)' : 'none',
            transition: 'border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)',
            width: '100%',
            boxSizing: 'border-box',
            appearance: 'none',
            cursor: disabled ? 'not-allowed' : 'pointer',
          }}
          {...rest}
        >
          {placeholder && <option value="" disabled hidden>{placeholder}</option>}
          {options.map((opt) => {
            const optValue = typeof opt === 'string' ? opt : opt.value;
            const optLabel = typeof opt === 'string' ? opt : opt.label;
            return <option key={optValue} value={optValue}>{optLabel}</option>;
          })}
        </select>
        <ChevronDown
          size={18}
          style={{
            position: 'absolute',
            right: 14,
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--text-muted)',
            pointerEvents: 'none',
          }}
        />
      </div>
      {hint && (
        <span style={{
          fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
          color: invalid ? 'var(--magic-coral)' : 'var(--text-muted)',
        }}>{hint}</span>
      )}
    </div>
  );
}
