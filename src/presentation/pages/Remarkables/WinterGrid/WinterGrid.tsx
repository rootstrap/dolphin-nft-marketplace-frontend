import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { winterGridItems } from 'app/constants/athletes/winterGridItems';
import styles from './WinterGrid.module.scss';

export const WinterGrid = () => {
  return (
    <>
      <div className={styles.winterGrid__title}>
        <Typography variant="h3">Winter Sports Athletes</Typography>
      </div>

      <Grid container className={styles.winterGrid__container}>
        {React.Children.toArray(
          winterGridItems.map(item => (
            <Grid item lg={4} md={4} sm={6} xs={12} className={styles.winterGrid__item}>
              <div className={styles.winterGrid__itemImg}>
                <img src={item.image} alt="" />
                <div className={styles.winterGrid__itemImgText}>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography>{item.sport}</Typography>
                </div>
              </div>
            </Grid>
          ))
        )}
      </Grid>
    </>
  );
};
