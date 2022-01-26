import { useEffect, useState } from 'react';

export const useResponsive = () => {
  const [isSmallDeviceView, setIsSmallDeviceView] = useState<boolean>(window.innerWidth < 450);
  const [isMobileView, setIsMobileView] = useState<boolean>(window.innerWidth < 950);
  const [isTabletView, setIsTabletView] = useState<boolean>(
    window.innerWidth > 950 && window.innerWidth < 1024
  );

  useEffect(() => {
    const setResponsiveness = () => {
      setIsSmallDeviceView(window.innerWidth < 450);
      setIsMobileView(window.innerWidth < 950);
      setIsTabletView(window.innerWidth > 950 && window.innerWidth < 1024);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  return { isSmallDeviceView, isMobileView, isTabletView };
};
