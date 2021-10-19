import { Grid } from '@material-ui/core';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import { ReactComponent as Discord } from 'app/assets/Discord.svg';
import styles from './BottomBar.module.scss';

export const BottomBar = () => {
  return (
    <Grid container className={styles.bottomBar}>
      <Grid item lg={3} className={styles.bottomBar__social}>
        <Instagram />
        <Twitter />
        <Facebook />
        <Discord />
      </Grid>
      <Grid item lg={2}>
        Terms of Use
      </Grid>
      <Grid item lg={2}>
        Privacy Policy
      </Grid>
      <Grid item lg={3}></Grid>
      <Grid item lg={2} className={styles.bottomBar__brand}>
        © Dolphin Entertainment 2021
      </Grid>
    </Grid>
  );
};
