import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import routesPaths from 'app/constants/routesPath';
import useTranslation from 'app/hooks/useTranslation';
import styles from './MyCollection.module.scss';

export const EmptyCollection = () => {
  const t = useTranslation();
  return (
    <>
      <Grid container className={styles.myCollection__items}>
        <Grid item md={2} lg={2}></Grid>
        <Grid item xs={12} md={8} lg={8} className={styles.myCollection__collection}>
          <Typography variant="h4" gutterBottom className={styles.myCollection__collectionText}>
            {t('profile.emptyList')}
          </Typography>
        </Grid>
        <Grid item md={2} lg={2}></Grid>
        <Grid item xs={4} md={4} lg={4}></Grid>
        <Grid item xs={5} md={4} lg={4} className={styles.myCollection__button}>
          <Link to={routesPaths.index}>
            <Button>Get Started</Button>
          </Link>
        </Grid>
        <Grid item xs={5} md={4} lg={4}></Grid>
      </Grid>
    </>
  );
};
