import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { carouselArrow } from './useCarousel';
import { Button } from '@material-ui/core';
import styles from './AthElitesCarousel.module.scss';

export const CarouselButtons = ({ handleOnClick, index, lenght }: CarouselButtonsProps) => {
  return (
    <div className={styles.carousel__buttons}>
      <Button
        size="medium"
        variant="text"
        endIcon={<ArrowBackIos />}
        onClick={() => handleOnClick('back')}
        disabled={index === 0}
      ></Button>
      ....
      <Button
        size="medium"
        variant="text"
        endIcon={<ArrowForwardIos />}
        onClick={() => handleOnClick('forward')}
        disabled={index + 1 === lenght}
      ></Button>
    </div>
  );
};

interface CarouselButtonsProps {
  handleOnClick: (arrow: carouselArrow) => void;
  index: number;
  lenght: number;
}
