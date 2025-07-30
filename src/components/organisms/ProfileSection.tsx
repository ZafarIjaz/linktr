import React from 'react';
import { Logo } from '../atoms/Logo';
import { useResponsive } from '../../hooks/useResponsive';
import { useTheme } from '../../contexts/ThemeContext';
import { STYLES } from '../../constants/data';
import { Profile } from '../../types';

interface ProfileSectionProps {
  profile: Profile;
}

export const ProfileSection: React.FC<ProfileSectionProps> = ({ profile }) => {
  const { getResponsiveValue } = useResponsive();
  const { theme } = useTheme();
  const colors = STYLES.colors[theme];

  return (
    <div style={{
      textAlign: 'center',
      marginBottom: getResponsiveValue({ mobile: '32px', tablet: '40px', desktop: '48px' }),
      animation: 'fadeIn 1s ease-out'
    }}>
      <div style={{
        marginBottom: getResponsiveValue({ mobile: '16px', tablet: '20px', desktop: '24px' }),
        animation: 'slideUp 0.6s ease-out'
      }}>
        <Logo
          size="profile"
          animated={true}
        />
      </div>

      <h1 style={{
        fontSize: getResponsiveValue({ mobile: '24px', tablet: '28px', desktop: '32px' }),
        fontWeight: '700',
        margin: '0 0 8px 0',
        color: colors.text,
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        animation: 'slideUp 0.8s ease-out'
      }}>
        {profile.name}
      </h1>

      <p style={{
        fontSize: getResponsiveValue({ mobile: '16px', tablet: '18px', desktop: '20px' }),
        margin: '0 0 12px 0',
        color: colors.textSecondary,
        fontWeight: '500',
        animation: 'slideUp 1s ease-out'
      }}>
        {profile.username}
      </p>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: getResponsiveValue({ mobile: '12px', tablet: '16px', desktop: '20px' }),
        flexWrap: 'wrap',
        marginBottom: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '28px' }),
        animation: 'slideUp 1.2s ease-out'
      }}>
        <span style={{
          backgroundColor: colors.glassmorphism,
          color: colors.text,
          padding: getResponsiveValue({ mobile: '6px 12px', tablet: '8px 16px', desktop: '10px 20px' }),
          borderRadius: '20px',
          fontSize: getResponsiveValue({ mobile: '12px', tablet: '14px', desktop: '16px' }),
          fontWeight: '500',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          📍 {profile.location}
        </span>

        <span style={{
          backgroundColor: colors.accent,
          color: theme === 'dark' ? '#000000' : '#FFFFFF',
          padding: getResponsiveValue({ mobile: '6px 12px', tablet: '8px 16px', desktop: '10px 20px' }),
          borderRadius: '20px',
          fontSize: getResponsiveValue({ mobile: '12px', tablet: '14px', desktop: '16px' }),
          fontWeight: '600'
        }}>
          ✓ {profile.status}
        </span>
      </div>

      {/* Mission Statement Section */}
      <div style={{
        backgroundColor: colors.glassmorphism,
        borderRadius: '16px',
        padding: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '28px' }),
        marginBottom: getResponsiveValue({ mobile: '24px', tablet: '28px', desktop: '32px' }),
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        animation: 'slideUp 1.4s ease-out'
      }}>
        <h2 style={{
          fontSize: getResponsiveValue({ mobile: '18px', tablet: '20px', desktop: '22px' }),
          fontWeight: '600',
          margin: '0 0 12px 0',
          color: colors.text,
          textAlign: 'center'
        }}>
          Giving with Purpose, Serving with Heart
        </h2>

        <p style={{
          fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '18px' }),
          lineHeight: '1.6',
          margin: '0 0 16px 0',
          color: colors.textSecondary,
          textAlign: 'left'
        }}>
          A registered non-profit organization dedicated to transforming lives through purposeful giving and community-driven service. Rooted in the timeless value of Infaq — giving purely for the sake of Allah.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '12px',
          marginTop: '16px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: getResponsiveValue({ mobile: '12px', tablet: '14px', desktop: '16px' }),
            color: colors.textSecondary
          }}>
            <span>💧</span>
            <span>Clean Water</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: getResponsiveValue({ mobile: '12px', tablet: '14px', desktop: '16px' }),
            color: colors.textSecondary
          }}>
            <span>🍽️</span>
            <span>Food Aid</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: getResponsiveValue({ mobile: '12px', tablet: '14px', desktop: '16px' }),
            color: colors.textSecondary
          }}>
            <span>📚</span>
            <span>Education</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: getResponsiveValue({ mobile: '12px', tablet: '14px', desktop: '16px' }),
            color: colors.textSecondary
          }}>
            <span>🏥</span>
            <span>Medical Aid</span>
          </div>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: getResponsiveValue({ mobile: '12px', tablet: '14px', desktop: '16px' }),
            color: colors.textSecondary
          }}>
            <span>🚨</span>
            <span>Emergency Relief</span>
          </div>
        </div>
      </div>
    </div>
  );
};