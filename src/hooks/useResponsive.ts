import { useState, useEffect } from 'react';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop' | 'large';

export interface ResponsiveConfig {
  breakpoint: Breakpoint;
  width: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLarge: boolean;
}

const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1024,
  large: 1440,
};

export const useResponsive = (): ResponsiveConfig => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== 'undefined' ? window.innerWidth : 1024,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getBreakpoint = (width: number): Breakpoint => {
    if (width < breakpoints.tablet) return 'mobile';
    if (width < breakpoints.desktop) return 'tablet';
    if (width < breakpoints.large) return 'desktop';
    return 'large';
  };

  const breakpoint = getBreakpoint(windowSize.width);

  return {
    breakpoint,
    width: windowSize.width,
    isMobile: breakpoint === 'mobile',
    isTablet: breakpoint === 'tablet',
    isDesktop: breakpoint === 'desktop',
    isLarge: breakpoint === 'large',
  };
};

export default useResponsive;
