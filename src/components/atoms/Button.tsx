import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  style?: React.CSSProperties;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  style = {}
}) => {
  const baseStyle: React.CSSProperties = {
    border: 'none',
    borderRadius: '8px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease-in-out',
    ...style
  };

  const variantStyles = {
    primary: {
      backgroundColor: '#000000',
      color: '#FFFFFF',
      border: 'none'
    },
    secondary: {
      backgroundColor: '#FFFFFF',
      color: '#000000',
      border: '2px solid #d1d5db'
    },
    ghost: {
      backgroundColor: 'transparent',
      color: '#FFFFFF',
      border: 'none'
    }
  };

  const sizeStyles = {
    small: {
      padding: '8px 16px',
      fontSize: '14px'
    },
    medium: {
      padding: '12px 20px',
      fontSize: '14px'
    },
    large: {
      padding: '16px 24px',
      fontSize: '16px'
    }
  };

  const buttonStyle = {
    ...baseStyle,
    ...variantStyles[variant],
    ...sizeStyles[size],
    opacity: disabled ? 0.6 : 1
  };

  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};