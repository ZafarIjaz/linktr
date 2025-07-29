import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useTheme } from '../../contexts/ThemeContext';
import { STYLES } from '../../constants/data';

interface FooterProps {
  socialMediaIcons: any[];
}

export const Footer: React.FC<FooterProps> = ({ socialMediaIcons }) => {
  const { getResponsiveValue } = useResponsive();
  const { theme } = useTheme();
  const colors = STYLES.colors[theme];

  return (
    <footer style={{
      marginTop: getResponsiveValue({ mobile: '32px', tablet: '40px', desktop: '48px' }),
      textAlign: 'center',
      animation: 'fadeIn 1s ease-out'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: getResponsiveValue({ mobile: '16px', tablet: '20px', desktop: '24px' }),
        marginBottom: getResponsiveValue({ mobile: '24px', tablet: '32px', desktop: '40px' }),
        flexWrap: 'wrap'
      }}>
        {socialMediaIcons.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              width: getResponsiveValue({ mobile: '48px', tablet: '56px', desktop: '56px' }),
              height: getResponsiveValue({ mobile: '48px', tablet: '56px', desktop: '56px' }),
              borderRadius: '50%',
              backgroundColor: colors.glassmorphism,
              color: colors.text,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '24px' }),
              textDecoration: 'none',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              transition: 'all 0.3s ease-in-out',
              boxShadow: `0 4px 12px ${colors.shadow}`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1) translateY(-2px)';
              e.currentTarget.style.boxShadow = `0 8px 25px ${colors.shadow}`;
              e.currentTarget.style.backgroundColor = colors.accent;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1) translateY(0)';
              e.currentTarget.style.boxShadow = `0 4px 12px ${colors.shadow}`;
              e.currentTarget.style.backgroundColor = colors.glassmorphism;
            }}
          >
            {social.icon}
          </a>
        ))}
      </div>

      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: getResponsiveValue({ mobile: '16px', tablet: '24px', desktop: '32px' }),
        marginBottom: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '32px' }),
        flexWrap: 'wrap'
      }}>
        <a
          href="https://linktr.ee/help"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: colors.textSecondary,
            textDecoration: 'none',
            fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '16px' }),
            transition: 'color 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = colors.text;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = colors.textSecondary;
          }}
        >
          Help
        </a>
        <a
          href="https://linktr.ee/privacy"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: colors.textSecondary,
            textDecoration: 'none',
            fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '16px' }),
            transition: 'color 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = colors.text;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = colors.textSecondary;
          }}
        >
          Privacy
        </a>
        <a
          href="https://linktr.ee/terms"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: colors.textSecondary,
            textDecoration: 'none',
            fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '16px' }),
            transition: 'color 0.2s ease-in-out'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = colors.text;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = colors.textSecondary;
          }}
        >
          Terms
        </a>
      </div>

      <div style={{
        marginBottom: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '32px' })
      }}>
        <a
          href="https://linktr.ee/signup"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            backgroundColor: colors.accent,
            color: theme === 'dark' ? '#000000' : '#FFFFFF',
            padding: getResponsiveValue({ mobile: '12px 24px', tablet: '16px 32px', desktop: '16px 32px' }),
            borderRadius: '12px',
            textDecoration: 'none',
            fontSize: getResponsiveValue({ mobile: '16px', tablet: '18px', desktop: '18px' }),
            fontWeight: '600',
            transition: 'all 0.3s ease-in-out',
            boxShadow: `0 4px 12px ${colors.shadow}`
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.05) translateY(-2px)';
            e.currentTarget.style.boxShadow = `0 8px 25px ${colors.shadow}`;
            e.currentTarget.style.backgroundColor = colors.accentHover;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1) translateY(0)';
            e.currentTarget.style.boxShadow = `0 4px 12px ${colors.shadow}`;
            e.currentTarget.style.backgroundColor = colors.accent;
          }}
        >
          Create your Linktree
        </a>
      </div>

      <div style={{
        color: colors.textSecondary,
        fontSize: getResponsiveValue({ mobile: '12px', tablet: '14px', desktop: '14px' }),
        opacity: 0.8
      }}>
        Powered by{' '}
        <a
          href="https://linktr.ee"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: colors.accent,
            textDecoration: 'none',
            fontWeight: '600'
          }}
        >
          Linktree
        </a>
      </div>
    </footer>
  );
};