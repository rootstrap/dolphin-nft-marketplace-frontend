import { Button, Grid, Typography } from '@material-ui/core';
import { PromotionImages } from './PromotionImages';
import routesPaths from 'app/constants/routesPath';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Promotion.module.scss';

export const PromotionContent = () => {
  const t = useTranslation();

  return (
    <Grid container className={styles.promotionContent}>
      <Grid item xs={12} md={6} lg={6}>
        <div className={styles.promotionContent__item}>
          <div className={styles.promotionContent__itemText}>
            <Typography variant="h3">{t('home.promotion.mainText')}</Typography>
          </div>
          <div className={styles.promotionContent__itemButton}>
            <a href={routesPaths.knowHow}>
              <Button>{t('home.promotion.button')}</Button>
            </a>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} md={6} lg={6}>
        <PromotionImages />
      </Grid>
    </Grid>
  );
};
