import { Grid } from '@material-ui/core';
import { MainImg } from './MainImg';
import Athletes from 'app/assets/Athletes.png';
import Culinary from 'app/assets/Culinary.png';
import Music from 'app/assets/Music.png';
import Ball from 'app/assets/Ball.png';
import styles from './MainContent.module.scss';

export const MainContent = () => {
  return (
    <Grid container className={styles.mainContent}>
      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}></Grid>

      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}>
        <MainImg src={Athletes} alt="" styles={styles} link="Sports" />
      </Grid>

      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}>
        <MainImg src={Culinary} alt="" styles={styles} link="Culinary" disabled />
      </Grid>

      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}>
        <MainImg src={Music} alt="" styles={styles} link="Music" disabled />
      </Grid>

      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}>
        <MainImg src={Ball} alt="" styles={styles} link="More Soon" disabled />
      </Grid>
      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}></Grid>
    </Grid>
  );
};
