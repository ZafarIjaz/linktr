import { LinktreeData } from '../types';

export const LINKTREE_DATA: LinktreeData = {
  profile: {
    name: 'Infaq Foundation',
    username: '@infaqfoundation',
    location: 'Greenville, NC, United States',
    status: 'Verified',
    avatar: '/image.jpeg'
  },
  links: [
    {
      id: 1,
      title: 'WhatsApp Business',
      url: 'https://api.whatsapp.com/send/?phone=13433075825&text&type=phone_number&app_absent=0',
      icon: '📱',
      color: '#25D366'
    },
    {
      id: 2,
      title: 'PayPal Donations',
      url: 'https://www.paypal.com/paypalme/infaqfoundationncusa',
      icon: '💳',
      color: '#00457C'
    },
    {
      id: 3,
      title: 'Zelle Donations',
      url: 'mailto:infaqfoundation.nc.usa@gmail.com?subject=Zelle%20Donation%20Inquiry',
      icon: '🏦',
      color: '#6B46C1'
    },
    {
      id: 4,
      title: 'YouTube Channel',
      url: 'https://youtube.com/@islam_deen143?si=MkcFYvXUs92tUBKf',
      icon: '📺',
      color: '#FF0000'
    },
    {
      id: 5,
      title: 'Our Mission & Programs',
      url: '#',
      icon: '🎯',
      color: '#10B981'
    },
    {
      id: 6,
      title: 'Clean Water Initiatives',
      url: '#',
      icon: '💧',
      color: '#3B82F6'
    },
    {
      id: 7,
      title: 'Food Distribution',
      url: '#',
      icon: '🍽️',
      color: '#F59E0B'
    },
    {
      id: 8,
      title: 'Educational Support',
      url: '#',
      icon: '📚',
      color: '#8B5CF6'
    },
    {
      id: 9,
      title: 'Medical Aid',
      url: '#',
      icon: '🏥',
      color: '#EF4444'
    }
  ],
  socialMediaIcons: [
    {
      name: 'YouTube',
      url: 'https://youtube.com/@islam_deen143?si=MkcFYvXUs92tUBKf',
      icon: '📺'
    },
    {
      name: 'WhatsApp',
      url: 'https://api.whatsapp.com/send/?phone=13433075825&text&type=phone_number&app_absent=0',
      icon: '📱'
    },
    {
      name: 'Email',
      url: 'mailto:infaqfoundation.nc.usa@gmail.com',
      icon: '✉️'
    }
  ],
  socialShareOptions: [
    { label: 'Copy link', icon: '🔗', bgColor: '#6B7280' },
    { label: 'X', icon: '🐦', bgColor: '#000000' },
    { label: 'Facebook', icon: '📘', bgColor: '#1877F2' },
    { label: 'WhatsApp', icon: '💬', bgColor: '#25D366' },
    { label: 'LinkedIn', icon: '💼', bgColor: '#0A66C2' },
    { label: 'Messenger', icon: '💭', bgColor: '#0084FF' },
    { label: 'Email', icon: '✉️', bgColor: '#EA4335' }
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