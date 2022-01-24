import { Button, Grid, Link, Typography } from '@material-ui/core';
import Remarkable1 from 'app/assets/remarkable1.png';
import Remarkable2 from 'app/assets/remarkable2.png';
import Remarkable3 from 'app/assets/remarkable3.png';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Main.module.scss';

export const Main = () => {
  const t = useTranslation();

  return (
    <>
      <div className={styles.mainContent__header}>
        <Typography component="div" variant="h2" className={styles.mainContent__headerTitle}>
          {t('remarkables.title')}
        </Typography>
        <Typography component="div" variant="subtitle1" className={styles.mainContent__headerTeaser}>
          {t('remarkables.teaser')}
        </Typography>
        <div>
          <Link href="#athelites" underline="none">
            <Button className={styles.mainContent__headerButton}> {t('verticals.actionButton')}</Button>
          </Link>
        </div>
      </div>
      <Grid container className={styles.mainContent__background}>
        <Grid item md={4}>
          <img alt="" src={Remarkable1} className={styles.mainContent__backgroundImg} />
        </Grid>
        <Grid item md={4}>
          <img alt="" src={Remarkable2} className={styles.mainContent__backgroundImg} />
        </Grid>
        <Grid item md={4}>
          <img alt="" src={Remarkable3} className={styles.mainContent__backgroundImg} />
        </Grid>
      </Grid>
    </>
  );
};
