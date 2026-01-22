import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    glass?: boolean;
    padding?: 'none' | 'sm' | 'md' | 'lg';
}

const Card: React.FC<CardProps> = ({
    children,
    className = '',
    style = {},
    glass = false,
    padding = 'md',
    ...props
}) => {
    const paddingStyles = {
        none: '0',
        sm: 'var(--spacing-sm)',
        md: 'var(--spacing-md)',
        lg: 'var(--spacing-lg)',
    };

    const baseStyle: React.CSSProperties = {
        backgroundColor: glass ? 'rgba(255, 255, 255, 0.8)' : 'var(--color-surface)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-md)',
        backdropFilter: glass ? 'blur(10px)' : 'none',
        border: '1px solid var(--color-border)',
        padding: paddingStyles[padding],
        ...style,
    };

    return (
        <div className={`card ${className}`} style={baseStyle} {...props}>
            {children}
        </div>
    );
};

export default Card;
