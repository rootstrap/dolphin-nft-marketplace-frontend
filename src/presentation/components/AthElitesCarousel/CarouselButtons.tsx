import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { carouselArrow } from './useCarousel';
import styles from './AthElitesCarousel.module.scss';

export const CarouselButtons = ({ handleOnClick }: CarouselButtonsProps) => {
  return (
    <div className={styles.carousel__buttons}>
      <ArrowBackIos
        fontSize="large"
        className={styles.carousel__buttonsArrow}
        onClick={() => handleOnClick('back')}
      />
      ....
      <ArrowForwardIos
        fontSize="large"
        className={styles.carousel__buttonsArrow}
        onClick={() => handleOnClick('forward')}
      />
    </div>
  );
};

interface CarouselButtonsProps {
  handleOnClick: (arrow: carouselArrow) => void;
}
