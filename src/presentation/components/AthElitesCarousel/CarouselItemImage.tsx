import { Typography } from '@material-ui/core';
import styles from './AthElitesCarousel.module.scss';

export const CarouselItemImage = ({ tier, image }: CarouselItemImageProps) => (
  <div className={styles.carousel__img}>
    <div className={styles.carousel__imgTitle}>
      <Typography variant="h4">{tier}</Typography>
    </div>
    <div className={styles.carousel__imgImage}>
      <img src={image} alt="" />
    </div>
  </div>
);
interface CarouselItemImageProps {
  tier: string;
  image: string;
}
