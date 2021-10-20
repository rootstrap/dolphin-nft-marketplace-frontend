import { Grid, Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import styles from './MyCollection.module.scss';

export const MyCollectionNfts = () => {
  const t = useTranslation();

  return (
    <Grid container className={styles.myCollectionContent}>
      <Grid container className={styles.myCollectionContent__title}>
        <Grid item xs={1}></Grid>
        <Grid item xs={10}>
          <Typography variant="h4">{t('profile.collectionTitle')}</Typography>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>

      <Grid container className={styles.myCollectionContent__items}>
        <Grid item xs={2}></Grid>
        <Grid item xs={8}>
          <Typography variant="h4" gutterBottom className={styles.myCollectionContent__itemsMsg}>
            You don’t have any collectibles in your gallery yet
          </Typography>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </Grid>
  );
};
