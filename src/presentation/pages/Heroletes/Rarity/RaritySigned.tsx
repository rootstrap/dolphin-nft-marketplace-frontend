import { Grid, Typography } from '@material-ui/core';
import SignedHerolete from 'app/assets/winterRarity/SignedHerolete.png';
import styles from './Rarity.module.scss';

export const RaritySigned = () => {
  return (
    <div className={styles.rarity__signed}>
      <div className={styles.rarity__signedTitle}>
        <Typography variant="h6">Signed</Typography>
      </div>

      <Grid container>
        <Grid item lg={2}></Grid>
        <Grid item lg={4}>
          <div className={styles.rarity__signedText}>
            <Typography variant="h4">10%</Typography>
            <Typography variant="h4">of all collectibles are signed by the athlete</Typography>
          </div>
        </Grid>
        <Grid item lg={4}>
          <img src={SignedHerolete} alt="" />
        </Grid>
        <Grid item lg={2}></Grid>
      </Grid>
    </div>
  );
};
