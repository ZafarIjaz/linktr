import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import { useResponsive } from '../../hooks/useResponsive';

export const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { getResponsiveValue } = useResponsive();

  return (
    <button
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        top: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '24px' }),
        right: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '24px' }),
        width: getResponsiveValue({ mobile: '48px', tablet: '56px', desktop: '56px' }),
        height: getResponsiveValue({ mobile: '48px', tablet: '56px', desktop: '56px' }),
        borderRadius: '50%',
        border: 'none',
        backgroundColor: theme === 'dark' ? '#FFFFFF' : '#1F2937',
        color: theme === 'dark' ? '#1F2937' : '#FFFFFF',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '24px' }),
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
        zIndex: 1000,
        transition: 'all 0.3s ease-in-out',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.1)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.25)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
      }}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};