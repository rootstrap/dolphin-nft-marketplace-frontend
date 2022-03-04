import { Grid, Typography } from '@material-ui/core';
import Remarkable1 from 'app/assets/remarkable1.png';
import Remarkable2 from 'app/assets/remarkable2.png';
import Remarkable3 from 'app/assets/remarkable3.png';
import { useResponsive } from 'app/hooks/useResponsive';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Main.module.scss';

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
          <Typography component="h1" variant="h2" className={styles.mainContent__headerTitle}>
            {t('heroletes.marketplace.title')}
          </Typography>
          <Typography component="h2" variant="h5" gutterBottom className={styles.mainContent__headerSubtitle}>
            {t('heroletes.marketplace.subtitle')}
          </Typography>
          <Typography component="span" variant="subtitle1" className={styles.mainContent__headerTeaser}>
            {t('heroletes.marketplace.teaser')}
          </Typography>
        </div>
      </Grid>
    </>
  );
};
