import { useEffect, useState } from 'react';

export const useResponsive = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(window.innerWidth < 950);

  useEffect(() => {
    const setResponsiveness = () => setIsMobileView(window.innerWidth < 950);

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  return { isMobileView };
};
