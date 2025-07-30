import React from 'react';
import { useResponsive } from '../../hooks/useResponsive';
import { useTheme } from '../../contexts/ThemeContext';
import { STYLES } from '../../constants/data';
import { SocialMediaIcon } from '../../types';

interface FooterProps {
  socialMediaIcons: SocialMediaIcon[];
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
      {/* Contact Information Section */}
      <div style={{
        backgroundColor: colors.glassmorphism,
        borderRadius: '16px',
        padding: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '28px' }),
        marginBottom: getResponsiveValue({ mobile: '24px', tablet: '32px', desktop: '40px' }),
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <h3 style={{
          fontSize: getResponsiveValue({ mobile: '16px', tablet: '18px', desktop: '20px' }),
          fontWeight: '600',
          margin: '0 0 16px 0',
          color: colors.text
        }}>
          📍 Contact Information
        </h3>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: getResponsiveValue({ mobile: '16px', tablet: '20px', desktop: '24px' }),
          textAlign: 'left'
        }}>
          <div>
            <h4 style={{
              fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '18px' }),
              fontWeight: '600',
              margin: '0 0 8px 0',
              color: colors.text
            }}>
              🏢 Office Address
            </h4>
            <p style={{
              fontSize: getResponsiveValue({ mobile: '12px', tablet: '14px', desktop: '16px' }),
              margin: '0',
              color: colors.textSecondary,
              lineHeight: '1.5'
            }}>
              2120 E Fire Tower Rd<br />
              Suite 107 - 1063<br />
              Greenville, NC 27858-8013<br />
              United States
            </p>
          </div>

          <div>
            <h4 style={{
              fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '18px' }),
              fontWeight: '600',
              margin: '0 0 8px 0',
              color: colors.text
            }}>
              💳 Payment Methods
            </h4>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px'
            }}>
              <p style={{
                fontSize: getResponsiveValue({ mobile: '12px', tablet: '14px', desktop: '16px' }),
                margin: '0',
                color: colors.textSecondary
              }}>
                <strong>PayPal:</strong><br />
                @infaqfoundationncusa
              </p>
              <p style={{
                fontSize: getResponsiveValue({ mobile: '12px', tablet: '14px', desktop: '16px' }),
                margin: '0',
                color: colors.textSecondary
              }}>
                <strong>Zelle:</strong><br />
                infaqfoundation.nc.usa@gmail.com
              </p>
              <p style={{
                fontSize: getResponsiveValue({ mobile: '12px', tablet: '14px', desktop: '16px' }),
                margin: '0',
                color: colors.textSecondary
              }}>
                <strong>WhatsApp Business:</strong><br />
                +1 (343) 307-5825
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Social Media Icons */}
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

      {/* Mission Statement */}
      <div style={{
        backgroundColor: colors.glassmorphism,
        borderRadius: '12px',
        padding: getResponsiveValue({ mobile: '16px', tablet: '20px', desktop: '24px' }),
        marginBottom: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '32px' }),
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <p style={{
          fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '18px' }),
          margin: '0',
          color: colors.textSecondary,
          fontStyle: 'italic',
          textAlign: 'center',
          lineHeight: '1.6'
        }}>
          &ldquo;Because true giving never ends.&rdquo; — Infaq Foundation
        </p>
      </div>

      {/* Copyright */}
      <div style={{
        color: colors.textSecondary,
        fontSize: getResponsiveValue({ mobile: '12px', tablet: '14px', desktop: '14px' }),
        opacity: 0.8
      }}>
        © 2024 Infaq Foundation. All rights reserved.
      </div>
    </footer>
  );
};