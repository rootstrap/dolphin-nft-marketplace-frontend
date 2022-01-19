import { Grid } from '@material-ui/core';
import { MainImg } from './MainImg';
import Sports from 'app/assets/Sports.png';
import Creatures from 'app/assets/Creatures.png';
import Soon from 'app/assets/Soon.png';
import styles from './MainContent.module.scss';

export const MainContent = () => {
  return (
    <Grid container justifyContent="center" className={styles.mainContent}>
      <Grid
        item
        xs={3}
        md={2}
        lg={2}
        className={`${styles.mainContent__item} ${styles.mainContent__itemFiltered}`}
      >
        <MainImg src={Sports} alt="" styles={styles} link="Sports" />
      </Grid>

      <Grid item xs={3} md={2} lg={2} className={styles.mainContent__item}>
        <MainImg src={Sports} alt="" styles={styles} link="Remarkables" />
      </Grid>

      <Grid item xs={3} md={2} lg={2} className={styles.mainContent__item}>
        <MainImg src={Creatures} alt="" styles={styles} link="Creatures" disabled />
      </Grid>

      <Grid item xs={3} md={2} lg={2} className={styles.mainContent__item}>
        <MainImg src={Soon} alt="" styles={styles} link="More Soon" disabled />
      </Grid>
    </Grid>
  );
};
