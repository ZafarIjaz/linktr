import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useTheme } from '../../contexts/ThemeContext';
import { STYLES } from '../../constants/data';

interface LogoProps {
  size?: 'profile' | 'linkCard' | number;
  src: string;
  alt?: string;
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'profile',
  src,
  alt = "Fatih Foundation Logo",
  animated = true
}) => {
  const { getResponsiveValue } = useResponsive();
  const { theme } = useTheme();
  const colors = STYLES.colors[theme];

  let logoSize: number;

  if (typeof size === 'number') {
    logoSize = size;
  } else if (size === 'profile') {
    const logoDimensions = getResponsiveValue({
      mobile: STYLES.logo.mobile,
      tablet: STYLES.logo.tablet,
      desktop: STYLES.logo.desktop
    });
    logoSize = parseInt(logoDimensions.width);
  } else {
    // For linkCard size, use a smaller size
    logoSize = getResponsiveValue({ mobile: 32, tablet: 40, desktop: 40 });
  }

  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: `${logoSize}px`,
      height: `${logoSize}px`,
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: '50%',
      overflow: 'hidden',
      position: 'relative',
      animation: animated ? 'float 3s ease-in-out infinite' : 'none',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      border: '2px solid rgba(255, 255, 255, 0.2)',
      transition: 'all 0.3s ease-in-out'
    }}
    onMouseEnter={(e) => {
      if (animated) {
        e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
        e.currentTarget.style.boxShadow = '0 0 30px rgba(102, 126, 234, 0.6)';
      }
    }}
    onMouseLeave={(e) => {
      if (animated) {
        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
      }
    }}
    >
      {/* Glow Effect */}
      <div style={{
        position: 'absolute',
        top: '-2px',
        left: '-2px',
        right: '-2px',
        bottom: '-2px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        borderRadius: '50%',
        filter: 'blur(8px)',
        opacity: 0.3,
        zIndex: -1,
        animation: animated ? 'glow 2s ease-in-out infinite alternate' : 'none'
      }} />

      {/* Main Logo Container */}
      <div style={{
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        overflow: 'hidden',
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(5px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img
          src={src}
          alt={alt}
          style={{
            width: '85%',
            height: '85%',
            objectFit: 'cover',
            borderRadius: '50%',
            transition: 'all 0.3s ease-in-out',
            filter: 'drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3))'
          }}
        />
      </div>
    </div>
  );
};