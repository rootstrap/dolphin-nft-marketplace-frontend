import { Button, Grid, Typography } from '@material-ui/core';
import styles from './Promotion.module.scss';

export const Promotion = ({
  imgSrc,
  title,
  subtitle,
  primaryText,
  secondaryText,
  buttonText,
}: PromotionProps) => {
  return (
    <Grid container className={styles.promotion}>
      <Grid item xs={12} md={6} lg={3}>
        <div className={styles.promotion__imgContainer}>
          <img className={styles.promotion__imgContainerImg} src={imgSrc} alt="" />
        </div>
      </Grid>
      <Grid item xs={12} md={6} lg={9}>
        <Grid container>
          <Grid item lg={12}>
            {title && (
              <Typography className={styles.promotion__title} variant="h6">
                {title}
              </Typography>
            )}
            <Typography className={styles.promotion__subtitle} gutterBottom variant="h5">
              {subtitle}
            </Typography>
          </Grid>
          <Grid item lg={5}>
            {primaryText}
          </Grid>
          <Grid item lg={1}></Grid>
          <Grid item lg={5}>
            {secondaryText}
          </Grid>
          {buttonText && (
            <Grid item lg={6} className={styles.promotion__row}>
              <Button
                size="large"
                variant="outlined"
                color="secondary"
                className={styles.promotion__actionButton}
              >
                {buttonText}
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </Grid>
  );
};

interface PromotionProps {
  imgSrc: string;
  title?: string;
  subtitle: string;
  primaryText: string;
  secondaryText: string;
  buttonText?: string;
}
