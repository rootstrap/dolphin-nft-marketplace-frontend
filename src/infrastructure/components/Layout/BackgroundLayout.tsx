import { Grid } from '@material-ui/core';
import styles from './BackgroundLayout.module.scss';

export const BackgroundLayout = () => {
  return (
    <Grid className={styles.layout} container>
      <Grid className={styles.layout__item} item xs={6} md={4} lg={2}></Grid>
      <Grid className={styles.layout__item} item xs={6} md={4} lg={2}></Grid>
      <Grid className={styles.layout__item} item xs={6} md={4} lg={2}></Grid>
      <Grid className={styles.layout__item} item xs={6} md={4} lg={2}></Grid>
      <Grid className={styles.layout__item} item xs={6} md={4} lg={2}></Grid>
      <Grid className={styles.layout__item} item xs={6} md={4} lg={2}></Grid>
    </Grid>
  );
};
