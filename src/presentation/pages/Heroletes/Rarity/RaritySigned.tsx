import { Grid, Typography } from '@material-ui/core';
import SignedHerolete from 'app/assets/winterRarity/SignedHerolete.png';
import useTranslation from '../../../../app/hooks/useTranslation';
import styles from './Rarity.module.scss';

export const RaritySigned = () => {
  const t = useTranslation();

  return (
    <div className={styles.rarity__signed}>
      <div className={styles.rarity__signedTitle}>
        <Typography variant="h6">{t('heroletes.signedTitle')}</Typography>
      </div>

      <Grid container>
        <Grid item md={2} lg={2}></Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <div className={styles.rarity__signedText}>
            <Typography variant="h5">{t('heroletes.signedPercentage')}</Typography>
            <Typography variant="h5">{t('heroletes.signedDescription')}</Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <img src={SignedHerolete} alt="" />
        </Grid>
        <Grid item md={2} lg={2}></Grid>
      </Grid>
    </div>
  );
};
