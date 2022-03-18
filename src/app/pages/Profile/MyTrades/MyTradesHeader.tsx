import { Grid, Typography } from '@material-ui/core';
import { useResponsive } from 'app/hooks/useResponsive';
import styles from './MyTrades.module.scss';

export const MyTradesHeader = () => {
  const { isMobileView, isTabletView } = useResponsive();

  return (
    <Grid container className={styles.myTrades__header}>
      {isMobileView && !isTabletView ? (
        <>
          <Grid item xs={6} sm={6} md={4} lg={4}>
            <Typography variant="h6">NFT</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={2} lg={2}>
            <Typography variant="h6">Price</Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2}>
            <Typography variant="h6">Side</Typography>
          </Grid>
        </>
      ) : (
        <>
          <Grid item sm={2} md={2} lg={2}>
            <Typography variant="h6">Time</Typography>
          </Grid>
          <Grid item sm={2} md={4} lg={4}>
            <Typography variant="h6">NFT</Typography>
          </Grid>
          <Grid item sm={2} md={2} lg={2}>
            <Typography variant="h6">Price</Typography>
          </Grid>
          <Grid item sm={2} md={2} lg={2}>
            <Typography variant="h6">Side</Typography>
          </Grid>
          <Grid item sm={2} md={2} lg={2}>
            <Typography variant="h6">Currency</Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};
