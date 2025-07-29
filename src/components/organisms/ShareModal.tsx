import React from 'react';
import { SocialShareOption, Link } from '../../types';
import { Logo } from '../atoms/Logo';
import { useResponsive } from '../../hooks/useResponsive';

interface ShareModalProps {
  isOpen: boolean;
  selectedLink: Link | null;
  socialShareOptions: SocialShareOption[];
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  selectedLink,
  socialShareOptions,
  onClose
}) => {
  const { getResponsiveValue } = useResponsive();

  const handleSocialShare = (option: SocialShareOption) => {
    const url = selectedLink?.url || window.location.href;
    const title = selectedLink?.title || 'Fatih Foundation';

    switch (option.label.toLowerCase()) {
      case 'copy link':
        navigator.clipboard.writeText(url).then(() => {
          alert('Link copied to clipboard!');
        }).catch(() => {
          const textArea = document.createElement('textarea');
          textArea.value = url;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          alert('Link copied to clipboard!');
        });
        break;
      case 'x':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank', 'noopener,noreferrer');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank', 'noopener,noreferrer');
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank', 'noopener,noreferrer');
        break;
      case 'messenger':
        window.open(`https://www.facebook.com/dialog/send?link=${encodeURIComponent(url)}&app_id=YOUR_APP_ID`, '_blank', 'noopener,noreferrer');
        break;
      case 'snap':
        window.open('https://www.snapchat.com/', '_blank', 'noopener,noreferrer');
        break;
      default:
        console.log('Unknown share option:', option.label);
    }
  };

  const handleMoreClick = () => {
    if (selectedLink?.url) {
      window.open(selectedLink.url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSignUpFree = () => {
    window.open('https://linktr.ee/signup', '_blank', 'noopener,noreferrer');
  };

  const handleFindOutMore = () => {
    window.open('https://linktr.ee/about', '_blank', 'noopener,noreferrer');
  };

  const handleReportLink = () => {
    window.open('mailto:support@linktr.ee?subject=Report Link&body=Please report this link for review.', '_blank', 'noopener,noreferrer');
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      padding: getResponsiveValue({ mobile: '16px', tablet: '20px', desktop: '20px' })
    }}>
      <div style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '16px',
        maxWidth: getResponsiveValue({ mobile: '400px', tablet: '500px', desktop: '500px' }),
        width: '100%',
        maxHeight: '90vh',
        overflow: 'auto',
        position: 'relative'
      }}>
        <div style={{
          padding: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '24px' }),
          borderBottom: '1px solid #E5E7EB',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <h3 style={{
            margin: 0,
            fontSize: getResponsiveValue({ mobile: '18px', tablet: '20px', desktop: '20px' }),
            fontWeight: '600',
            color: '#000000'
          }}>
            Share link
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#000000',
              fontSize: '24px',
              cursor: 'pointer',
              padding: '4px',
              width: '32px',
              height: '32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            ×
          </button>
        </div>

        <div style={{
          padding: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '24px' })
        }}>
          <div style={{
            backgroundColor: '#374151',
            borderRadius: '16px',
            padding: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '24px' }),
            marginBottom: '24px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <Logo size="linkCard" src="/1122.webp" />
              <span style={{
                fontSize: getResponsiveValue({ mobile: '16px', tablet: '18px', desktop: '18px' }),
                fontWeight: '600',
                color: '#000000'
              }}>
                Fatih Foundation
              </span>
            </div>

            <h4 style={{
              margin: '0 0 8px 0',
              fontSize: getResponsiveValue({ mobile: '18px', tablet: '20px', desktop: '20px' }),
              fontWeight: '600',
              color: '#FFFFFF'
            }}>
              {selectedLink?.title || 'Fatih Foundation | WhatsApp Channel'}
            </h4>

            <p
              style={{
                margin: '0 0 12px 0',
                fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '16px' }),
                color: '#FFFFFF',
                opacity: 0.8,
                cursor: 'pointer',
                textDecoration: 'underline'
              }}
              onClick={() => {
                if (selectedLink?.url) {
                  window.open(selectedLink.url, '_blank', 'noopener,noreferrer');
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = '1';
                e.currentTarget.style.color = '#10B981';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = '0.8';
                e.currentTarget.style.color = '#FFFFFF';
              }}
            >
              {selectedLink?.url ? selectedLink.url.replace(/^https?:\/\//, '') : 'whatsapp.com/cha...'}
            </p>

            <p style={{
              margin: '0 0 20px 0',
              fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '16px' }),
              color: '#FFFFFF',
              opacity: 0.7,
              lineHeight: '1.4'
            }}>
              Fatih Foundation WhatsApp Channel. *Facebook* https://www.facebook.com/FatihFoundation/...
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <button
                onClick={handleMoreClick}
                style={{
                  backgroundColor: '#4B5563',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: getResponsiveValue({ mobile: '10px 20px', tablet: '12px 24px', desktop: '12px 24px' }),
                  fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '16px' }),
                  fontWeight: '500',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#6B7280';
                  e.currentTarget.style.transform = 'scale(1.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#4B5563';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                More
              </button>
            </div>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(7, 1fr)',
              gap: getResponsiveValue({ mobile: '8px', tablet: '12px', desktop: '12px' }),
              maxWidth: '100%',
              margin: '0 auto'
            }}>
              {socialShareOptions.map((option, index) => (
                <div key={index} style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '6px',
                  width: '100%'
                }}>
                  <button
                    onClick={() => handleSocialShare(option)}
                    style={{
                      width: getResponsiveValue({ mobile: '44px', tablet: '52px', desktop: '52px' }),
                      height: getResponsiveValue({ mobile: '44px', tablet: '52px', desktop: '52px' }),
                      borderRadius: '50%',
                      border: 'none',
                      backgroundColor: option.bgColor,
                      color: option.bgColor === '#000000' ? '#FFFFFF' : '#000000',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: getResponsiveValue({ mobile: '18px', tablet: '22px', desktop: '22px' }),
                      transition: 'all 0.2s ease-in-out',
                      margin: '0 auto'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  >
                    {option.icon}
                  </button>
                  <span style={{
                    fontSize: getResponsiveValue({ mobile: '10px', tablet: '11px', desktop: '11px' }),
                    color: '#6B7280',
                    textAlign: 'center',
                    fontWeight: '500',
                    lineHeight: '1.2',
                    width: '100%'
                  }}>
                    {option.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            backgroundColor: '#F9FAFB',
            borderRadius: '12px',
            padding: getResponsiveValue({ mobile: '20px', tablet: '24px', desktop: '24px' }),
            marginBottom: '20px'
          }}>
            <h4 style={{
              margin: '0 0 8px 0',
              fontSize: getResponsiveValue({ mobile: '16px', tablet: '18px', desktop: '18px' }),
              fontWeight: '600',
              color: '#000000'
            }}>
              Join fatihfoundationpk on Linktree
            </h4>
            <p style={{
              margin: '0 0 16px 0',
              fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '16px' }),
              color: '#6B7280',
              lineHeight: '1.4'
            }}>
              Get your own free Linktree. The only link in bio trusted by 70M+ people.
            </p>
            <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap'
            }}>
              <button
                onClick={handleSignUpFree}
                style={{
                  backgroundColor: '#000000',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  padding: getResponsiveValue({ mobile: '10px 16px', tablet: '12px 20px', desktop: '12px 20px' }),
                  fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '16px' }),
                  fontWeight: '500',
                  cursor: 'pointer',
                  flex: 1,
                  minWidth: '120px',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#374151';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#000000';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Sign up free
              </button>
              <button
                onClick={handleFindOutMore}
                style={{
                  backgroundColor: '#FFFFFF',
                  color: '#000000',
                  border: '1px solid #D1D5DB',
                  borderRadius: '8px',
                  padding: getResponsiveValue({ mobile: '10px 16px', tablet: '12px 20px', desktop: '12px 20px' }),
                  fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '16px' }),
                  fontWeight: '500',
                  cursor: 'pointer',
                  flex: 1,
                  minWidth: '120px',
                  transition: 'all 0.2s ease-in-out'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#F3F4F6';
                  e.currentTarget.style.transform = 'scale(1.02)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#FFFFFF';
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                Find out more
              </button>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: '12px 0'
          }}>
            <span style={{ fontSize: '16px' }}>🚩</span>
            <button
              onClick={handleReportLink}
              style={{
                background: 'none',
                border: 'none',
                color: '#6B7280',
                fontSize: getResponsiveValue({ mobile: '14px', tablet: '16px', desktop: '16px' }),
                cursor: 'pointer',
                textDecoration: 'underline',
                transition: 'color 0.2s ease-in-out'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#EF4444';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#6B7280';
              }}
            >
              Report link
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};