import React, { useRef } from 'react';
import { Icon } from '../atoms/Icon';
import { useResponsive } from '../../hooks/useResponsive';
import { useTheme } from '../../contexts/ThemeContext';
import { STYLES } from '../../constants/data';
import { Link } from '../../types';

interface LinkCardProps {
  link: Link;
  onThreeDotsClick: (link: Link) => void;
}

export const LinkCard: React.FC<LinkCardProps> = ({ link, onThreeDotsClick }) => {
  const { getResponsiveValue } = useResponsive();
  const { theme } = useTheme();
  const colors = STYLES.colors[theme];
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (buttonRef.current) {
      buttonRef.current.style.transform = 'scale(0.95)';
      buttonRef.current.style.width = 'calc(100% + 20px)';
      buttonRef.current.style.marginLeft = '-10px';
      buttonRef.current.style.backgroundColor = colors.accentHover;

      setTimeout(() => {
        if (buttonRef.current) {
          buttonRef.current.style.transform = 'scale(1)';
          buttonRef.current.style.width = '100%';
          buttonRef.current.style.marginLeft = '0';
          buttonRef.current.style.backgroundColor = colors.card;
        }
      }, 150);
    }

    window.open(link.url, '_blank', 'noopener,noreferrer');
  };

  const handleThreeDotsClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onThreeDotsClick(link);
  };

  return (
    <div style={{
      position: 'relative',
      animation: 'fadeIn 0.5s ease-out'
    }}>
      <button
        ref={buttonRef}
        onClick={handleClick}
        style={{
          width: '100%',
          backgroundColor: colors.card,
          color: colors.text,
          borderRadius: '16px',
          padding: getResponsiveValue({ mobile: '16px', tablet: '20px', desktop: '20px' }),
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          fontSize: getResponsiveValue({ mobile: '16px', tablet: '18px', desktop: '18px' }),
          fontWeight: '600',
          boxShadow: `0 4px 12px ${colors.shadow}`,
          transition: 'all 0.3s ease-in-out',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-2px) scale(1.02)';
          e.currentTarget.style.boxShadow = `0 8px 25px ${colors.shadow}`;
          e.currentTarget.style.backgroundColor = colors.glassmorphism;
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0) scale(1)';
          e.currentTarget.style.boxShadow = `0 4px 12px ${colors.shadow}`;
          e.currentTarget.style.backgroundColor = colors.card;
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: getResponsiveValue({ mobile: '12px', tablet: '16px', desktop: '16px' }),
          flex: 1
        }}>
          <div style={{
            width: getResponsiveValue({ mobile: '32px', tablet: '40px', desktop: '40px' }),
            height: getResponsiveValue({ mobile: '32px', tablet: '40px', desktop: '40px' }),
            borderRadius: '50%',
            backgroundColor: link.color || colors.accent,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: getResponsiveValue({ mobile: '16px', tablet: '20px', desktop: '20px' }),
            flexShrink: 0
          }}>
            <Icon
              icon={link.icon}
              size={getResponsiveValue({ mobile: 16, tablet: 20, desktop: 20 })}
            />
          </div>

          <span style={{
            color: colors.text,
            fontWeight: '600',
            textAlign: 'left',
            lineHeight: '1.4'
          }}>
            {link.title}
          </span>
        </div>

        <button
          onClick={handleThreeDotsClick}
          style={{
            background: 'none',
            border: 'none',
            color: colors.textSecondary,
            cursor: 'pointer',
            fontSize: getResponsiveValue({ mobile: '18px', tablet: '20px', desktop: '20px' }),
            padding: '4px',
            borderRadius: '50%',
            width: getResponsiveValue({ mobile: '32px', tablet: '36px', desktop: '36px' }),
            height: getResponsiveValue({ mobile: '32px', tablet: '36px', desktop: '36px' }),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease-in-out',
            flexShrink: 0
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = colors.glassmorphism;
            e.currentTarget.style.color = colors.text;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.color = colors.textSecondary;
          }}
        >
          ⋯
        </button>
      </button>
    </div>
  );
};