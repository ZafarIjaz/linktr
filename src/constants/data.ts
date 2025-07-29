import { LinktreeData, SocialShareOption, SocialMediaIcon } from '../types';

export const LINKTREE_DATA: LinktreeData = {
  profile: {
    name: 'Fatih Foundation',
    username: '@fatihfoundationpk',
    location: 'Pakistan',
    status: 'Verified',
    avatar: '/image.jpeg'
  },
  links: [
    {
      id: 1,
      title: 'WhatsApp Channel',
      url: 'https://www.whatsapp.com/channel/0029Va8IILA11ulWpV9UiB3r',
      icon: '💬',
      color: '#25D366'
    },
    {
      id: 2,
      title: 'WhatsApp Business',
      url: 'https://api.whatsapp.com/send/?phone=923018483791&text&type=phone_number&app_absent=0',
      icon: '📱',
      color: '#25D366'
    },
    {
      id: 3,
      title: 'WhatsApp Group',
      url: 'https://chat.whatsapp.com/JNWq6X5gMG9EIz5TxU0bvk',
      icon: '👥',
      color: '#25D366'
    },
    {
      id: 4,
      title: 'Foundation Introduction',
      url: 'https://ugc.production.linktr.ee/4315e7a4-7277-46d3-8a9c-19bdb61c29b8_FATIH-FOUNDATION-INTRODUCTION--2-.pdf',
      icon: '📄',
      color: '#FF6B6B'
    },
    {
      id: 5,
      title: 'Instagram',
      url: 'https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Ffatihfoundationpk%2F&is_from_rle',
      icon: '📸',
      color: '#E4405F'
    },
    {
      id: 6,
      title: 'Official Website',
      url: 'https://fatihfoundation.com/',
      icon: '🌐',
      color: '#3B82F6'
    },
    {
      id: 7,
      title: 'Facebook',
      url: 'https://www.facebook.com/FatihFoundation',
      icon: '📘',
      color: '#1877F2'
    },
    {
      id: 8,
      title: 'X (Twitter)',
      url: 'https://x.com/FatihFoundation',
      icon: '🐦',
      color: '#000000'
    },
    {
      id: 9,
      title: 'Google Maps - Main Office',
      url: 'https://maps.app.goo.gl/dGQaDePQzjmpKMaz5',
      icon: '📍',
      color: '#4285F4'
    },
    {
      id: 10,
      title: 'LinkedIn',
      url: 'http://linkedin.com/company/fatih-foundation-pakistan/',
      icon: '💼',
      color: '#0A66C2'
    },
    {
      id: 11,
      title: 'YouTube - House of Fatih',
      url: 'https://www.youtube.com/@fatihfoundation',
      icon: '📺',
      color: '#FF0000'
    },
    {
      id: 12,
      title: 'Google Maps - House of Fatih',
      url: 'https://maps.app.goo.gl/5CnyCL36RG3bpL6BA',
      icon: '🏠',
      color: '#4285F4'
    },
    {
      id: 13,
      title: 'Google Maps - Islamabad',
      url: 'https://maps.app.goo.gl/bSuXUfdezo2yd2DA6',
      icon: '🏛️',
      color: '#4285F4'
    },
    {
      id: 14,
      title: 'Ways of Donation',
      url: 'https://ugc.production.linktr.ee/1524f1d8-aec8-4aed-b307-1aa6a2983474_ways-of-donation.pdf',
      icon: '💝',
      color: '#10B981'
    },
    {
      id: 15,
      title: 'Donate Now',
      url: 'https://fatihfoundation.com/donate/',
      icon: '❤️',
      color: '#EF4444'
    }
  ],
  socialMediaIcons: [
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/fatihfoundationpk/',
      icon: '📸'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/FatihFoundation',
      icon: '📘'
    },
    {
      name: 'Twitter',
      url: 'https://x.com/FatihFoundation',
      icon: '🐦'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@fatihfoundation',
      icon: '📺'
    }
  ],
  socialShareOptions: [
    { label: 'Copy link', icon: '🔗', bgColor: '#6B7280' },
    { label: 'X', icon: '🐦', bgColor: '#000000' },
    { label: 'Facebook', icon: '📘', bgColor: '#1877F2' },
    { label: 'WhatsApp', icon: '💬', bgColor: '#25D366' },
    { label: 'LinkedIn', icon: '💼', bgColor: '#0A66C2' },
    { label: 'Messenger', icon: '💭', bgColor: '#0084FF' },
    { label: 'Snap', icon: '👻', bgColor: '#FFFC00' }
  ]
};

export const STYLES = {
  colors: {
    light: {
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      card: '#FFFFFF',
      text: '#1F2937',
      textSecondary: '#6B7280',
      accent: '#3B82F6',
      accentHover: '#2563EB',
      border: '#E5E7EB',
      shadow: 'rgba(0, 0, 0, 0.1)',
      glassmorphism: 'rgba(255, 255, 255, 0.25)',
      neumorphism: '#F3F4F6'
    },
    dark: {
      background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 50%, #334155 100%)',
      card: '#1F2937',
      text: '#F9FAFB',
      textSecondary: '#D1D5DB',
      accent: '#10B981',
      accentHover: '#059669',
      border: '#374151',
      shadow: 'rgba(0, 0, 0, 0.3)',
      glassmorphism: 'rgba(31, 41, 55, 0.25)',
      neumorphism: '#374151'
    }
  },
  spacing: {
    mobile: {
      padding: '16px',
      gap: '12px',
      margin: '8px'
    },
    tablet: {
      padding: '20px',
      gap: '16px',
      margin: '12px'
    },
    desktop: {
      padding: '24px',
      gap: '20px',
      margin: '16px'
    }
  },
  typography: {
    mobile: {
      h1: '24px',
      h2: '20px',
      h3: '18px',
      body: '16px',
      small: '14px'
    },
    tablet: {
      h1: '28px',
      h2: '24px',
      h3: '20px',
      body: '18px',
      small: '16px'
    },
    desktop: {
      h1: '32px',
      h2: '28px',
      h3: '24px',
      body: '20px',
      small: '18px'
    }
  },
  logo: {
    mobile: {
      width: '60px',
      height: '60px'
    },
    tablet: {
      width: '80px',
      height: '80px'
    },
    desktop: {
      width: '100px',
      height: '100px'
    }
  },
  animations: {
    duration: '0.3s',
    easing: 'ease-in-out',
    hover: {
      scale: 1.05,
      shadow: '0 8px 25px rgba(0, 0, 0, 0.15)'
    },
    click: {
      scale: 0.95
    }
  },
  effects: {
    glassmorphism: {
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)'
    },
    neumorphism: {
      boxShadow: 'inset 2px 2px 5px rgba(0, 0, 0, 0.1), inset -2px -2px 5px rgba(255, 255, 255, 0.1)'
    }
  },
  breakpoints: {
    mobile: 768,
    tablet: 1024,
    desktop: 1200
  }
};