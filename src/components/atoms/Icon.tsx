import React from 'react';

interface IconProps {
  icon: string;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

export const Icon: React.FC<IconProps> = ({
  icon,
  size = 24,
  color = '#FFFFFF',
  style = {}
}) => {
  return (
    <span style={{
      fontSize: `${size}px`,
      color,
      transition: 'transform 0.3s ease-in-out',
      ...style
    }}>
      {icon}
    </span>
  );
};