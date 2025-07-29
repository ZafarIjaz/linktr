import { useState, useEffect } from 'react';

type ScreenSize = 'mobile' | 'tablet' | 'desktop';

export const useResponsive = () => {
  const [screenSize, setScreenSize] = useState<ScreenSize>('mobile');

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setScreenSize('mobile');
      } else if (width < 1024) {
        setScreenSize('tablet');
      } else {
        setScreenSize('desktop');
      }
    };

    // Set initial size
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getResponsiveValue = <T,>(values: { mobile: T; tablet: T; desktop: T }): T => {
    return values[screenSize];
  };

  return {
    screenSize,
    getResponsiveValue,
    isMobile: screenSize === 'mobile',
    isTablet: screenSize === 'tablet',
    isDesktop: screenSize === 'desktop'
  };
};