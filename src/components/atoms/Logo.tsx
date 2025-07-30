import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';

interface LogoProps {
  size?: 'small' | 'medium' | 'large' | 'profile';
  animated?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  size = 'medium',
  animated = false
}) => {
  const { getResponsiveValue } = useResponsive();

  const sizeMap = {
    small: getResponsiveValue({ mobile: '32px', tablet: '40px', desktop: '48px' }),
    medium: getResponsiveValue({ mobile: '48px', tablet: '64px', desktop: '80px' }),
    large: getResponsiveValue({ mobile: '80px', tablet: '120px', desktop: '160px' }),
    profile: getResponsiveValue({ mobile: '80px', tablet: '100px', desktop: '120px' })
  };

  const logoSize = sizeMap[size];

  return (
    <div style={{
      width: logoSize,
      height: logoSize,
      borderRadius: '50%',
      backgroundColor: '#000000',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
      border: '3px solid #D4AF37',
      animation: animated ? 'pulse 2s ease-in-out infinite' : 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease-in-out'
    }}
    onMouseEnter={(e) => {
      if (animated) {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.4)';
      }
    }}
    onMouseLeave={(e) => {
      if (animated) {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
      }
    }}
    >
      {/* Infaq Foundation Logo SVG */}
      <svg
        width="85%"
        height="85%"
        viewBox="0 0 200 200"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)'
        }}
      >
        {/* Background Circle */}
        <circle cx="100" cy="100" r="95" fill="#000000" stroke="#D4AF37" strokeWidth="2"/>

        {/* Top Arabic Text - Quranic Verse */}
        <text
          x="100"
          y="25"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="12"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          وَأَنفِقُواْ مِمَّا رَزَقْنَاكُم
        </text>

        {/* Central Arabic Calligraphy - INFAQ */}
        <text
          x="100"
          y="85"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="24"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
        >
          انفقوا
        </text>

        {/* Central English Text - INFAQ */}
        <text
          x="100"
          y="105"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="16"
          fontFamily="Arial, sans-serif"
          fontWeight="bold"
          letterSpacing="2"
        >
          INFAQ
        </text>

        {/* Left Wheat Stalk */}
        <path
          d="M 30 60 Q 40 40 50 60 Q 45 80 35 90"
          stroke="#FFD700"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="35" cy="85" r="2" fill="#FFD700"/>
        <circle cx="40" cy="75" r="2" fill="#FFD700"/>
        <circle cx="45" cy="65" r="2" fill="#FFD700"/>

        {/* Right Wheat Stalk */}
        <path
          d="M 170 60 Q 160 40 150 60 Q 155 80 165 90"
          stroke="#FFD700"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="165" cy="85" r="2" fill="#FFD700"/>
        <circle cx="160" cy="75" r="2" fill="#FFD700"/>
        <circle cx="155" cy="65" r="2" fill="#FFD700"/>

        {/* Bottom Wheat Stalks */}
        <path
          d="M 80 140 Q 90 150 100 140 Q 110 150 120 140"
          stroke="#FFD700"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="85" cy="145" r="1.5" fill="#FFD700"/>
        <circle cx="95" cy="135" r="1.5" fill="#FFD700"/>
        <circle cx="105" cy="145" r="1.5" fill="#FFD700"/>
        <circle cx="115" cy="135" r="1.5" fill="#FFD700"/>

        {/* Bottom English Text */}
        <text
          x="100"
          y="175"
          textAnchor="middle"
          fill="#D4AF37"
          fontSize="10"
          fontFamily="Arial, sans-serif"
          fontWeight="normal"
        >
          And spend from what We have provided for you
        </text>
      </svg>
    </div>
  );
};