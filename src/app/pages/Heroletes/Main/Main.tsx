import { Button, Grid, Link, Typography } from '@material-ui/core';
import { Link as RouteLink } from 'react-router-dom';
import { dolphinServiceLinks } from 'app/constants/constants';
import Remarkable1 from 'app/assets/remarkable1.png';
import Remarkable2 from 'app/assets/remarkable2.png';
import Remarkable3 from 'app/assets/remarkable3.png';
import { useResponsive } from 'app/hooks/useResponsive';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Main.module.scss';
import routesPaths from 'app/constants/routesPath';

export const Main = () => {
  const t = useTranslation();
  const { isSmallDeviceView, isMobileView, isTabletView } = useResponsive();

  return (
    <>
      <Grid container className={styles.mainContent__background}>
        <Grid item xs={12} sm={6} md={4}>
          <img alt="" src={Remarkable1} className={styles.mainContent__backgroundImg} />
        </Grid>
        {!isSmallDeviceView && (
          <Grid item sm={6} md={4}>
            <img alt="" src={Remarkable2} className={styles.mainContent__backgroundImg} />
          </Grid>
        )}
        {!isMobileView && !isTabletView && (
          <Grid item md={4}>
            <img alt="" src={Remarkable3} className={styles.mainContent__backgroundImg} />
          </Grid>
        )}

        <div className={styles.mainContent__header}>
          <Typography component="div" variant="h2" className={styles.mainContent__headerTitle}>
            {t('heroletes.title')}
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.mainContent__headerTeaser}>
            {t('heroletes.teaser')}
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.mainContent__headerTeaser}>
            {t('heroletes.secondTeaser')}
            <Link href={dolphinServiceLinks.sweepstakesRules} target="_blank" rel="noopener noreferrer">
              Official Rules
            </Link>
            {t('heroletes.thirdTeaser')}
          </Typography>
          <div className={styles.mainContent__headerButtons}>
            <Link href="#athelites" underline="none">
              <Button className={styles.mainContent__headerButton}> {t('verticals.actionButton')}</Button>
            </Link>
            <RouteLink to={routesPaths.heroletesMarketplace}>
              <Button className={styles.mainContent__headerButton}>
                {' '}
                {t('heroletes.marketplace.subtitle')}
              </Button>
            </RouteLink>
          </div>
        </div>
      </Grid>

      <img
        src="https://ad.ipredictive.com/d/track/cvt/pixel?acct_id=54103&cache_buster=[timestamp]"
        alt=""
        style={{ display: 'none' }}
        width="1"
        height="1"
      />
    </>
  );
};
