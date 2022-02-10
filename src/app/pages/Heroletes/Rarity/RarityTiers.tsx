import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { rarityTiers } from 'app/constants/heroletes/rarityTiers';
import styles from './Rarity.module.scss';

export const RarityTiers = () => {
  return (
    <div className={styles.rarity__tiers}>
      <div className={styles.rarity__tiersTitle}>
        <Typography variant="h6">Tiers</Typography>
      </div>

      <Grid container>
        <Grid item md={2} lg={2}></Grid>
        {React.Children.toArray(
          rarityTiers.map(({ name, percentage, img }) => (
            <Grid item xs={12} sm={6} md={2} lg={2} className={styles.rarity__tiersFrame}>
              <img alt="" src={img} />
              <Typography>{name}</Typography>
              <Typography>{percentage}</Typography>
            </Grid>
          ))
        )}
        <Grid item md={2} lg={2}></Grid>
      </Grid>
    </div>
  );
};
