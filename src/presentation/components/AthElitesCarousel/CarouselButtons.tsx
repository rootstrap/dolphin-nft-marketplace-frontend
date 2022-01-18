import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { carouselArrow } from './useCarousel';
import styles from './AthElitesCarousel.module.scss';

export const CarouselButtons = ({ handleOnClick }: CarouselButtonsProps) => {
  return (
    <div className={styles.carousel__buttons}>
      <ArrowBackIos className={styles.carousel__buttonsArrow} onClick={() => handleOnClick('back')} />
      ......
      <ArrowForwardIos className={styles.carousel__buttonsArrow} onClick={() => handleOnClick('forward')} />
    </div>
  );
};

interface CarouselButtonsProps {
  handleOnClick: (arrow: carouselArrow) => void;
}
