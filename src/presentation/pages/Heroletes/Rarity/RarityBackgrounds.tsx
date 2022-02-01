import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { rarityBrackgrounds } from 'app/constants/heroletes/rarityBackgrounds';
import styles from './Rarity.module.scss';

export const RarityBackgrounds = () => {
  return (
    <div className={styles.rarity__backgrounds}>
      <div className={styles.rarity__backgroundsTitle}>
        <Typography variant="h6">Backgrounds</Typography>
      </div>

      <Grid container>
        <Grid item md={2} lg={2}></Grid>
        {React.Children.toArray(
          rarityBrackgrounds.map(({ name, percentage, img }) => (
            <Grid item xs={12} sm={6} md={2} lg={2}>
              <div className={styles.rarity__backgroundsFrame}>
                <img alt="" src={img} />
                <div className={styles.rarity__backgroundsFrameText}>
                  <Typography>{name}</Typography>
                  <Typography>{percentage}</Typography>
                </div>
              </div>
            </Grid>
          ))
        )}
        <Grid item md={2} lg={2}></Grid>
      </Grid>
    </div>
  );
};
