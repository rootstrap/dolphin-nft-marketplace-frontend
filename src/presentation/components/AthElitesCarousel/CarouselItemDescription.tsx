import { Button, Link, Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import styles from './AthElitesCarousel.module.scss';

export const CarouselItemDescription = ({
  title,
  date,
  text,
  collectiblesPerPack,
  costPerPack,
}: CarouselItemDescriptionProps) => {
  const t = useTranslation();

  return (
    <div className={styles.carousel__description}>
      <div className={styles.carousel__descriptionFeatured}>
        <Typography variant="h6">{t('heroletes.carousel.featured')}</Typography>
      </div>
      <div className={styles.carousel__descriptionTitle}>
        <Typography variant="h3">{title}</Typography>
      </div>

      <div className={styles.carousel__descriptionDate}>
        <Typography variant="h6">{date}</Typography>
      </div>
      <div className={styles.carousel__descriptionText}>
        <Typography variant="body1">{text}</Typography>
      </div>

      {/*
      <div className={styles.carousel__descriptionCheckout}>
        <Typography variant="body1">
          <Link>{t('heroletes.carousel.link')}</Link>
        </Typography>
      </div>

       <div className={styles.carousel__descriptionPack}>
        <div className={styles.carousel__descriptionPackInfo}>
          <Typography variant="h6">{t('heroletes.carousel.collectibles')}</Typography>
          <p>{collectiblesPerPack}</p>
        </div>
        <div className={styles.carousel__descriptionPackInfo}>
          <Typography variant="h6">{t('heroletes.carousel.cost')}</Typography>
          <p>${costPerPack}</p>
        </div>
      </div>

      <div className={styles.carousel__descriptionButton}>
        <Button variant="contained" fullWidth>
          {t('heroletes.carousel.button')}
        </Button>
      </div> */}
    </div>
  );
};

interface CarouselItemDescriptionProps {
  title: string;
  date: string;
  text: string;
  collectiblesPerPack: number;
  costPerPack: number;
}
