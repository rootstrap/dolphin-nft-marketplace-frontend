import { Grid } from '@material-ui/core';
import { MainText } from './MainText';
import { MainImg } from './MainImg';
import Athletes from '../../../../app/assets/Athletes.png';
import Culinary from '../../../../app/assets/Culinary.png';
import Music from '../../../../app/assets/Music.png';
import Ball from '../../../../app/assets/Ball.png';
import styles from './MainContent.module.scss';

export const MainContent = () => {
  return (
    <Grid container className={styles.mainContent}>
      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}>
        <MainText
          styles={styles}
          textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          textButton="Know How ↓"
        />
      </Grid>
      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}></Grid>

      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}>
        <MainImg src={Athletes} alt="Athletes" styles={styles} link="Athletes" />
      </Grid>

      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}>
        <MainImg src={Culinary} alt="Culinary" styles={styles} link="Culinary" />
      </Grid>

      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}>
        <MainImg src={Music} alt="Music" styles={styles} link="Music" />
      </Grid>

      <Grid item xs={6} md={4} lg={2} className={styles.mainContent__item}>
        <MainImg src={Ball} alt="More" styles={styles} link="More" disabled />
      </Grid>
    </Grid>
  );
};
