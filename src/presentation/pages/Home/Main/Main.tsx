import { Grid } from '@material-ui/core';
import { MainImg } from './MainImg';
import Sports from 'app/assets/Sports.png';
import Creatures from 'app/assets/Creatures.png';
import Remarkables from 'app/assets/remarkable_comingSoon.png';
import styles from './MainContent.module.scss';

export const MainContent = () => {
  return (
    <Grid container justifyContent="center" className={styles.mainContent}>
      <Grid item xs={3} md={2} lg={2} className={styles.mainContent__item} />
      <Grid item xs={3} md={2} lg={2} className={styles.mainContent__item}>
        <MainImg src={Sports} title="Hall of Fame Village Media" link="halloffame" />
      </Grid>

      <Grid item xs={3} md={2} lg={2} className={styles.mainContent__item}>
        <MainImg src={Remarkables} title="Remarkables" link="remarkables" />
      </Grid>

      <Grid item xs={3} md={2} lg={2} className={styles.mainContent__item}>
        <MainImg src={Creatures} title="Creatures" link={process.env.REACT_APP_CREATURES_URL} isHyperlink />
      </Grid>
    </Grid>
  );
};
