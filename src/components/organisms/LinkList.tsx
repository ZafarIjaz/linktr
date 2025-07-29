'use client';

import React from 'react';
import { LinkCard } from '../molecules/LinkCard';
import { useResponsive } from '../../hooks/useResponsive';
import { Link } from '../../types';

interface LinkListProps {
  links: Link[];
  onThreeDotsClick: (link: Link) => void;
}

export const LinkList: React.FC<LinkListProps> = ({ links, onThreeDotsClick }) => {
  const { getResponsiveValue } = useResponsive();

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: getResponsiveValue({ mobile: '12px', tablet: '16px', desktop: '20px' }),
      marginBottom: getResponsiveValue({ mobile: '32px', tablet: '40px', desktop: '48px' })
    }}>
      {links.map((link, index) => (
        <div
          key={link.id}
          style={{
            animation: `fadeIn 0.5s ease-out ${index * 0.1}s both`
          }}
        >
          <LinkCard
            link={link}
            onThreeDotsClick={onThreeDotsClick}
          />
        </div>
      ))}
    </div>
  );
};