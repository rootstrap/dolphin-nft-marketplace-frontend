import { Grid } from '@material-ui/core';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import { ReactComponent as Discord } from 'app/assets/Discord.svg';
import useTranslation from 'app/hooks/useTranslation';
import styles from './BottomBar.module.scss';

export const BottomBar = () => {
  const t = useTranslation();
  return (
    <Grid container className={styles.bottomBar}>
      <Grid item lg={3} className={styles.bottomBar__social}>
        <Instagram />
        <Twitter />
        <Facebook />
        <Discord />
      </Grid>
      <Grid item lg={2}>
        {t('bottomBar.terms')}
      </Grid>
      <Grid item lg={2}>
        {t('bottomBar.policy')}
      </Grid>
      <Grid item lg={3}></Grid>
      <Grid item lg={2} className={styles.bottomBar__brand}>
        {t('bottomBar.brand')}
      </Grid>
    </Grid>
  );
};
