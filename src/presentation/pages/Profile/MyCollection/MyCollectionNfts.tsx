import { Button, Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import routesPaths from 'app/constants/routesPath';
import useTranslation from 'app/hooks/useTranslation';
import styles from './MyCollection.module.scss';

export const MyCollectionNfts = () => {
  const t = useTranslation();

  return (
    <Grid container className={styles.myCollectionContent}>
      <Grid container className={styles.myCollectionContent__title}>
        <Grid item md={1} lg={1}></Grid>
        <Grid item xs={12} md={10} lg={10}>
          <Typography variant="h4">{t('profile.collectionTitle')}</Typography>
        </Grid>
        <Grid item md={1} lg={1}></Grid>
      </Grid>

      <Grid container className={styles.myCollectionContent__items}>
        <Grid item md={2} lg={2}></Grid>
        <Grid item xs={12} md={8} lg={8} className={styles.myCollectionContent__collection}>
          <Typography variant="h4" gutterBottom className={styles.myCollectionContent__collectionText}>
            {t('profile.emptyList')}
          </Typography>
        </Grid>
        <Grid item md={2} lg={2}></Grid>
        <Grid item xs={4} md={4} lg={4}></Grid>
        <Grid item xs={5} md={4} lg={4} className={styles.myCollectionContent__collectionBtn}>
          <Link to={routesPaths.index}>
            <Button>Get Started</Button>
          </Link>
        </Grid>
        <Grid item xs={5} md={4} lg={4}></Grid>
      </Grid>
    </Grid>
  );
};
