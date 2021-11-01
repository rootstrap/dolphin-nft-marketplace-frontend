import { Grid } from '@material-ui/core';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import { socialMediaLinks } from 'app/constants/contants';
import useTranslation from 'app/hooks/useTranslation';
import styles from './BottomBar.module.scss';

export const BottomBar = () => {
  const t = useTranslation();
  return (
    <Grid container className={styles.bottomBar}>
      <Grid item xs={4} md={3} lg={3} className={styles.bottomBar__social}>
        <a href={socialMediaLinks.instagram} target="_blank" rel="noreferrer">
          <Instagram />
        </a>
        <a href={socialMediaLinks.twitter} target="_blank" rel="noreferrer">
          <Twitter />
        </a>
        <a href={socialMediaLinks.facebook} target="_blank" rel="noreferrer">
          <Facebook />
        </a>
      </Grid>
      <Grid item xs={4} md={2} lg={2}>
        {t('bottomBar.terms')}
      </Grid>
      <Grid item xs={4} md={3} lg={2}>
        {t('bottomBar.policy')}
      </Grid>
      <Grid item lg={2}></Grid>
      <Grid item xs={12} md={4} lg={3} className={styles.bottomBar__brand}>
        {t('bottomBar.brand')}
      </Grid>
    </Grid>
  );
};
