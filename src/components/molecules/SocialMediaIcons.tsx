import React from 'react';
import { SocialMediaIcon } from '../../types';
import { Icon } from '../atoms/Icon';
import { useResponsive } from '../../hooks/useResponsive';

interface SocialMediaIconsProps {
  socialMediaIcons: SocialMediaIcon[];
}

export const SocialMediaIcons: React.FC<SocialMediaIconsProps> = ({ socialMediaIcons }) => {
  const { getResponsiveValue, isMobile } = useResponsive();

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      gap: getResponsiveValue({ mobile: '16px', tablet: '20px', desktop: '20px' }),
      marginTop: getResponsiveValue({ mobile: '24px', tablet: '32px', desktop: '32px' }),
      marginBottom: getResponsiveValue({ mobile: '24px', tablet: '32px', desktop: '32px' }),
      flexWrap: 'wrap'
    }}>
      {socialMediaIcons.map((socialIcon, index) => (
        <button
          key={index}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: getResponsiveValue({ mobile: '8px', tablet: '12px', desktop: '12px' }),
            borderRadius: '50%',
            transition: 'all 0.3s ease-in-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            e.currentTarget.style.transform = 'scale(1.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.transform = 'scale(1)';
          }}
          onClick={() => {
            // Handle social media icon click
            console.log(`Clicked ${socialIcon.label}`);
          }}
        >
          <Icon
            icon={socialIcon.icon}
            size={getResponsiveValue({ mobile: 20, tablet: 24, desktop: 24 })}
            color="#FFFFFF"
          />
        </button>
      ))}
    </div>
  );
};