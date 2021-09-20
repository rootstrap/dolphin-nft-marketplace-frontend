import { Button, Grid, Typography } from '@material-ui/core';
import { ReactComponent as DolphinLogo } from '../../../app/assets/Dolphin_Ball.svg';
import styles from './TopBar.module.scss';

export const DesktopTopBar = () => {
  return (
    <Grid container spacing={2}>
      <Grid item md={2} lg={2}>
        <DolphinLogo className={styles.logo} />
      </Grid>
      <Grid item md={1} lg={1} className={styles.topBar__item}>
        <Typography>Drops</Typography>
      </Grid>
      <Grid item md={2} lg={1} className={styles.topBar__item}>
        <Typography>Marketplace</Typography>
      </Grid>
      <Grid item md={2} lg={1} className={styles.topBar__item}>
        <Typography>Promotions</Typography>
      </Grid>
      <Grid item md={1} lg={5} className={styles.topBar__item}>
        <Typography>FAQ</Typography>
      </Grid>

      <Grid item md={2} lg={1} className={styles.topBar__item}>
        <Button className={styles.topBar__button} variant="outlined">
          Sign in
        </Button>
      </Grid>
      <Grid item md={2} lg={1} className={styles.topBar__item}>
        <Button className={styles.topBar__button} variant="outlined">
          Sign up
        </Button>
      </Grid>
    </Grid>
  );
};
