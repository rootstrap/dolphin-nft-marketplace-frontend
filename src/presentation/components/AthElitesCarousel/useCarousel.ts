import { useState } from 'react';

export type carouselArrow = 'back' | 'forward';

export const useCarousel = (carouselItems: any[]) => {
  const [index, setIndex] = useState(0);

  const handleOnClick = (arrow: carouselArrow) => {
    if (arrow === 'forward') {
      setIndex(prevIndex => Math.min(prevIndex + 1, carouselItems.length - 1));
    }

    if (arrow === 'back') {
      setIndex(prevIndex => Math.max(prevIndex - 1, 0));
    }
  };

  return {
    index,
    handleOnClick,
  };
};
