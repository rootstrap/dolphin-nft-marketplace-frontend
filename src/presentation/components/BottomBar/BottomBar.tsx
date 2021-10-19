import { Grid } from '@material-ui/core';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';
import { ReactComponent as Discord } from 'app/assets/Discord.svg';
import { socialMediaLinks } from 'app/constants/contants';
import useTranslation from 'app/hooks/useTranslation';
import styles from './BottomBar.module.scss';

export const BottomBar = () => {
  const t = useTranslation();
  return (
    <Grid container className={styles.bottomBar}>
      <Grid item lg={3} className={styles.bottomBar__social}>
        <a href={socialMediaLinks.instagram} target="_blank">
          <Instagram />
        </a>
        <a href={socialMediaLinks.twitter} target="_blank">
          <Twitter />
        </a>
        <a href={socialMediaLinks.facebook} target="_blank">
          <Facebook />
        </a>
        <a href={socialMediaLinks.discord} target="_blank">
          <Discord />
        </a>
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
