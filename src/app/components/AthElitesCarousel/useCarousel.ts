import { useAppSelector } from 'app/hooks/reduxHooks';
import { useState, useEffect } from 'react';

export type carouselArrow = 'back' | 'forward';

export const useCarousel = (carouselItems: any[]) => {
  const [index, setIndex] = useState(0);
  const [isAgree, setIsAgree] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [areButtonsVisible, setAreButtonsVisible] = useState(false);

  const { irlEligible } = useAppSelector(state => state.user.user);

  const handleOnClick = (arrow: carouselArrow) => {
    if (arrow === 'forward') {
      setIndex(prevIndex => Math.min(prevIndex + 1, carouselItems.length - 1));
    }

    if (arrow === 'back') {
      setIndex(prevIndex => Math.max(prevIndex - 1, 0));
    }
  };

  const handleOnCheck = () => setIsAgree(!isAgree);

  const handleAgreeSweepstakes = () => {
    setIsEligible(!isEligible);
  };

  useEffect(() => {
    if (carouselItems.length > 1) {
      setAreButtonsVisible(true);
    }
  }, [carouselItems]);

  useEffect(() => {
    setIsEligible(irlEligible);
  }, [irlEligible]);

  return {
    areButtonsVisible,
    handleAgreeSweepstakes,
    handleOnCheck,
    handleOnClick,
    index,
    isAgree,
    isEligible,
  };
};