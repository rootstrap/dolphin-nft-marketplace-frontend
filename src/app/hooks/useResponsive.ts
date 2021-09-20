import { useEffect, useState } from 'react';

export const useResponsive = () => {
  const [isMobileView, setIsMobileView] = useState<boolean>(window.innerWidth < 950 ? true : false);
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 950 ? setIsMobileView(true) : setIsMobileView(false);
    };

    setResponsiveness();

    window.addEventListener('resize', () => setResponsiveness());

    return () => {
      window.removeEventListener('resize', () => setResponsiveness());
    };
  }, []);

  return { isMobileView };
};
