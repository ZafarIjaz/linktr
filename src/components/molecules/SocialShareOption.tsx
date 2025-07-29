import React from 'react';
import { SocialShareOption as SocialShareOptionType } from '../../types';
import { useResponsive } from '../../hooks/useResponsive';

interface SocialShareOptionProps {
  option: SocialShareOptionType;
}

export const SocialShareOption: React.FC<SocialShareOptionProps> = ({ option }) => {
  const { getResponsiveValue, isMobile } = useResponsive();

  return (
    <div style={{
      textAlign: 'center',
      flex: isMobile ? '0 0 calc(33.333% - 8px)' : '1',
      minWidth: isMobile ? '80px' : 'auto'
    }}>
      <div style={{
        width: getResponsiveValue({ mobile: '40px', tablet: '50px', desktop: '50px' }),
        height: getResponsiveValue({ mobile: '40px', tablet: '50px', desktop: '50px' }),
        borderRadius: '50%',
        backgroundColor: option.bgColor,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: getResponsiveValue({ mobile: '16px', tablet: '20px', desktop: '20px' }),
        marginBottom: getResponsiveValue({ mobile: '6px', tablet: '8px', desktop: '8px' }),
        margin: `0 auto ${getResponsiveValue({ mobile: '6px', tablet: '8px', desktop: '8px' })} auto`
      }}>
        {option.icon}
      </div>
      <span style={{
        fontSize: getResponsiveValue({ mobile: '10px', tablet: '12px', desktop: '12px' }),
        color: '#6b7280',
        fontWeight: '500'
      }}>
        {option.label}
      </span>
    </div>
  );
};