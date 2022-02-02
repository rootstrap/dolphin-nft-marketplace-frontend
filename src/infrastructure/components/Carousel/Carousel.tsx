import { useCarousel } from './useCarousel';
import { Arrow } from '../Arrow/Arrow';
import styles from './carousel.module.scss';
import './carousel.css';

export const Carousel = ({ children, show, infiniteLoop }: CarouselProp) => {
  const {
    currentIndex,
    handleClickNext,
    handleClickPrev,
    handleTransitionEnd,
    isRepeating,
    length,
    renderNextItems,
    renderPrevItems,
    transitionEnabled,
  } = useCarousel(children, show, infiniteLoop);

  return (
    <div className={styles.carousel__container}>
      <div className={styles.carousel__wrapper}>
        {(isRepeating || currentIndex > 0) && (
          <Arrow direction="left" style={{ margin: '5px' }} handleOnClick={handleClickPrev} />
        )}
        <div className={styles.carousel__contentWrapper}>
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${currentIndex * (100 / show)}%)`,
              transition: !transitionEnabled ? 'none' : undefined,
            }}
            onTransitionEnd={() => handleTransitionEnd()}
          >
            {length > show && isRepeating && renderPrevItems()}
            {children}
            {length > show && isRepeating && renderNextItems()}
          </div>
        </div>
        {(isRepeating || currentIndex < length - show) && (
          <Arrow direction="right" style={{ margin: '5px' }} handleOnClick={handleClickNext} />
        )}
      </div>
    </div>
  );
};

interface CarouselProp {
  children: React.ReactElement[];
  show: number;
  infiniteLoop: boolean;
}
