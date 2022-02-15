import { Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import styles from './AthElitesCarousel.module.scss';

export const CarouselItemDescription = ({
  collectiblesPerPack,
  date,
  title,
  text,
  price,
}: CarouselItemDescriptionProps) => {
  const t = useTranslation();

  return (
    <div className={styles.carousel__description}>
      <div>
        <div className={styles.carousel__descriptionFeatured}>
          <Typography variant="h6">{t('heroletes.carousel.featured')}</Typography>
        </div>
        <div className={styles.carousel__descriptionTitle}>
          <Typography variant="h3">{title}</Typography>
        </div>
      </div>

      <div className={styles.carousel__descriptionText}>
        <Typography variant="body1">{text}</Typography>
      </div>

      <div className={styles.carousel__descriptionCollectibles}>
        <Typography variant="body1">{t('heroletes.carousel.nftPerPack')}</Typography>
        <Typography className={styles.carousel__descriptionCollectiblesInfo} variant="body1">
          {collectiblesPerPack}
        </Typography>
      </div>

      <div className={styles.carousel__descriptionPack}>
        <div className={styles.carousel__descriptionPackInfo}>
          <Typography variant="subtitle2">{t('heroletes.carousel.collectibles')}</Typography>
          <Typography variant="body2">{date}</Typography>
        </div>
        <div className={styles.carousel__descriptionPackInfo}>
          <Typography variant="subtitle2">{t('heroletes.carousel.cost')}</Typography>
          <Typography variant="body2">${price} USD</Typography>
        </div>
      </div>
    </div>
  );
};

interface CarouselItemDescriptionProps {
  collectiblesPerPack: string;
  costPerPack: number;
  date: string;
  price: number;
  text: string;
  title: string;
}
