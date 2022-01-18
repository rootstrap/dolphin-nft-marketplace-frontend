import { useEffect, useState } from 'react';

export const useResponsive = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(window.innerWidth < 950);
  const [isTabletView, setIsTabletView] = useState<boolean>(
    window.innerWidth > 950 && window.innerWidth < 1200
  );

  useEffect(() => {
    const setResponsiveness = () => {
      setIsMobileView(window.innerWidth < 950);
      setIsTabletView(window.innerWidth > 950 && window.innerWidth < 1200);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  return { isMobileView, isTabletView };
};
