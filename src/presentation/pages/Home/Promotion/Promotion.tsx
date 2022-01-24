import { Grid } from '@material-ui/core';
import { PromotionText } from './PromotionText';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Promotion.module.scss';
import { MainContent } from '../Main/Main';

export const PromotionContent = () => {
  const t = useTranslation();

  return (
    <Grid container className={styles.promotionContent} alignItems="center">
      <Grid item xs={12} lg={4} className={styles.promotionContent__item}>
        <PromotionText
          textContent={t('home.promotion.mainText')}
          textButton={t('home.promotion.button')}
          styles={styles}
        />
      </Grid>
      <Grid lg={2} />
      <Grid item xs={12} lg={6}>
        <MainContent />
      </Grid>
    </Grid>
  );
};
