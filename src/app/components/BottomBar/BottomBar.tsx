import { Grid, Link } from '@material-ui/core';
import { dolphinServiceLinks } from 'app/constants/constants';
import useTranslation from 'app/hooks/useTranslation';
import styles from './BottomBar.module.scss';

export const BottomBar = () => {
  const t = useTranslation();
  return (
    <Grid container className={styles.bottomBar}>
      <Grid item xs={6} sm={4} md={2} lg={2}>
        <Link href={dolphinServiceLinks.termOfService} target="_blank" rel="noopener noreferrer">
          {t('bottomBar.terms')}
        </Link>
      </Grid>
      <Grid item xs={6} sm={4} md={2} lg={2}>
        <Link href={dolphinServiceLinks.privacyPolicy} target="_blank" rel="noopener noreferrer">
          {t('bottomBar.policy')}
        </Link>
      </Grid>
      <Grid item md={6} lg={6}></Grid>
      <Grid item xs={12} sm={4} md={2} lg={2} className={styles.bottomBar__brand}>
        {t('bottomBar.brand')}
      </Grid>
    </Grid>
  );
};
