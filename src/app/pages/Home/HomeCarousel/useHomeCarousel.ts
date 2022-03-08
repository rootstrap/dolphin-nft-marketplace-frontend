import { useEffect, useRef, useState } from 'react';
import { homeCarouselItems } from 'app/constants/common/homeCarouselItems';

const delay = 3000;

export const useHomeCarousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();

    timeoutRef.current = setTimeout(() => {
      setIndex(prevIndex => (prevIndex === homeCarouselItems.length - 1 ? 0 : prevIndex + 1));
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);

  return {
    index,
  };
};
