import { useCarousel } from './useCarousel';
import { Arrow } from '../Arrow/Arrow';
import styles from './Carousel.module.scss';
import './Carousel.css';

export const Carousel = ({ children, show, infiniteLoop = false }: CarouselProp) => {
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
  } = useCarousel({ children, show, infiniteLoop });

  return (
    <div className={styles.carousel}>
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
  show: 1 | 2 | 3 | 4;
  infiniteLoop?: boolean;
}
