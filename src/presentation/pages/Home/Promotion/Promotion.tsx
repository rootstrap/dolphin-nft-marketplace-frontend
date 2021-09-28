import { Grid, Typography } from '@material-ui/core';
import { Item } from './Item';
import styles from './Promotion.module.scss';

export const PromotionContent = () => {
  return (
    <div className={styles.promotionContent}>
      <Typography variant="h4">Promotion Section</Typography>
      <Grid container className={styles.promotionContent}>
        <Grid className={styles.promotionContent__item} item xs={12} md={6} lg={4}>
          <Item styles={styles} />
        </Grid>
        <Grid className={styles.promotionContent__item} item xs={12} md={6} lg={4}>
          <Item styles={styles} />
        </Grid>
        <Grid className={styles.promotionContent__item} item xs={12} md={12} lg={4}>
          <Item styles={styles} />
        </Grid>
      </Grid>
    </div>
  );
};
