import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    icon?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ label, error, icon, className = '', style, ...props }) => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '1rem' }}>
            {label && <label style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--color-text-secondary)' }}>{label}</label>}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
                {icon && (
                    <div style={{ position: 'absolute', left: '0.75rem', color: 'var(--color-text-secondary)', display: 'flex' }}>
                        {icon}
                    </div>
                )}
                <input
                    style={{
                        padding: '0.5rem 0.75rem',
                        paddingLeft: icon ? '2.5rem' : '0.75rem',
                        borderRadius: 'var(--radius-md)',
                        border: `1px solid ${error ? 'var(--color-accent)' : 'var(--color-border)'}`,
                        fontSize: '1rem',
                        outline: 'none',
                        transition: 'border-color 0.2s',
                        width: '100%',
                        ...style
                    }}
                    className={className}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = error ? 'var(--color-accent)' : 'var(--color-border)'}
                    {...props}
                />
            </div>
            {error && <span style={{ fontSize: '0.75rem', color: 'var(--color-accent)' }}>{error}</span>}
        </div>
    );
};

export default Input;
