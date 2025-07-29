import React from 'react';
import { ProfileSection } from '../organisms/ProfileSection';
import { LinkList } from '../organisms/LinkList';
import { Footer } from '../organisms/Footer';
import { ShareModal } from '../organisms/ShareModal';
import { useResponsive } from '../../hooks/useResponsive';
import { useTheme } from '../../contexts/ThemeContext';
import { STYLES } from '../../constants/data';
import { Profile, Link, SocialMediaIcon, SocialShareOption } from '../../types';

interface LinktreeTemplateProps {
  profile: Profile;
  links: Link[];
  socialMediaIcons: SocialMediaIcon[];
  socialShareOptions: SocialShareOption[];
  showModal: boolean;
  selectedLink: Link | null;
  onThreeDotsClick: (link: Link) => void;
  onCloseModal: () => void;
}

export const LinktreeTemplate: React.FC<LinktreeTemplateProps> = ({
  profile,
  links,
  socialMediaIcons,
  socialShareOptions,
  showModal,
  selectedLink,
  onThreeDotsClick,
  onCloseModal
}) => {
  const { getResponsiveValue } = useResponsive();
  const { theme } = useTheme();
  const colors = STYLES.colors[theme];

  return (
    <div style={{
      minHeight: '100vh',
      background: colors.background,
      padding: getResponsiveValue({ mobile: '16px', tablet: '20px', desktop: '20px' }),
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '200px',
        height: '200px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 70%, transparent 100%)',
        borderRadius: '50%',
        animation: 'float 6s ease-in-out infinite',
        zIndex: 0
      }} />

      <div style={{
        position: 'absolute',
        bottom: '20%',
        right: '15%',
        width: '150px',
        height: '150px',
        background: 'radial-gradient(circle, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 70%, transparent 100%)',
        borderRadius: '50%',
        animation: 'float 8s ease-in-out infinite reverse',
        zIndex: 0
      }} />

      <div style={{
        maxWidth: getResponsiveValue({ mobile: '100%', tablet: '600px', desktop: '700px' }),
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <ProfileSection profile={profile} />
        <LinkList
          links={links}
          onThreeDotsClick={onThreeDotsClick}
        />
        <Footer socialMediaIcons={socialMediaIcons} />
      </div>

      <ShareModal
        isOpen={showModal}
        selectedLink={selectedLink}
        socialShareOptions={socialShareOptions}
        onClose={onCloseModal}
      />
    </div>
  );
};