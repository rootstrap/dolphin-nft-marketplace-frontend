import { Grid } from '@material-ui/core';
import { MainImg } from './MainImg';
import Sports from 'app/assets/Sports.png';
import Soon from 'app/assets/Soon.png';
import styles from './MainContent.module.scss';

export const MainContent = () => {
  return (
    <Grid container className={styles.mainContent}>
      <Grid item xs={6} md={4} lg={4} className={styles.mainContent__item}></Grid>

      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}>
        <MainImg src={Sports} alt="" styles={styles} link="Sports" />
      </Grid>

      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}>
        <MainImg src={Soon} alt="" styles={styles} link="More Soon" disabled />
      </Grid>
      <Grid item xs={6} md={4} lg={4} className={styles.mainContent__item}></Grid>
    </Grid>
  );
};
