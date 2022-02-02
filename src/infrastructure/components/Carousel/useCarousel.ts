import React, { useEffect, useState } from 'react';

export const useCarousel = (children: React.ReactElement[], show: number, infiniteLoop: boolean) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [isRepeating, setIsRepeating] = useState(infiniteLoop && children.length > show);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  useEffect(() => {
    setLength(children.length);
    setIsRepeating(infiniteLoop && children.length > show);
  }, [children, infiniteLoop, show]);

  useEffect(() => {
    if (isRepeating) {
      if (currentIndex === show || currentIndex === length) {
        setTransitionEnabled(true);
      }
    }
  }, [currentIndex, isRepeating, show, length]);

  const handleClickNext = () => {
    if (isRepeating || currentIndex < length - show) {
      setCurrentIndex(prevState => prevState + 1);
    }
  };

  const handleClickPrev = () => {
    if (isRepeating || currentIndex > 0) {
      setCurrentIndex(prevState => prevState - 1);
    }
  };

  const handleTransitionEnd = () => {
    if (isRepeating) {
      if (currentIndex === 0) {
        setTransitionEnabled(false);
        setCurrentIndex(length);
      } else if (currentIndex === length + show) {
        setTransitionEnabled(false);
        setCurrentIndex(show);
      }
    }
  };

  const renderPrevItems = () => {
    let output = [];

    for (let index = 0; index < show; index++) {
      output.push(children[length - 1 - index]);
    }

    output.reverse();

    return output;
  };

  const renderNextItems = () => {
    let output = [];

    for (let index = 0; index < show; index++) {
      output.push(children[index]);
    }

    return output;
  };

  return {
    currentIndex,
    handleClickNext,
    handleClickPrev,
    handleTransitionEnd,
    isRepeating,
    length,
    renderNextItems,
    renderPrevItems,
    transitionEnabled,
  };
};
