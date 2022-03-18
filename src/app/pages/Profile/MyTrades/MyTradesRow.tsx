import { Grid, Typography } from '@material-ui/core';
import { useResponsive } from 'app/hooks/useResponsive';
import { FillsResult } from 'app/interfaces/NFT/NFT';
import styles from './MyTrades.module.scss';

export const MyTradesRow = ({ trade }: MyTradesRowProps) => {
  const { isMobileView, isTabletView } = useResponsive();

  return (
    <Grid container className={styles.myTrades__content}>
      {isMobileView && !isTabletView ? (
        <>
          <Grid item xs={6} sm={6} md={4} lg={4} className={styles.myTrades__contentRow}>
            <Typography variant="body1">{trade.nft.name}</Typography>
          </Grid>
          <Grid item xs={4} sm={4} md={2} lg={2} className={styles.myTrades__contentRow}>
            <Typography variant="body1">{trade.price}</Typography>
          </Grid>
          <Grid item xs={2} sm={2} md={2} lg={2} className={styles.myTrades__contentRow}>
            <Typography variant="body1">{trade.side}</Typography>
          </Grid>
        </>
      ) : (
        <>
          <Grid item sm={2} md={2} lg={2} className={styles.myTrades__contentRow}>
            <Typography variant="body1">{new Date(Date.parse(trade.time)).toDateString()}</Typography>
          </Grid>
          <Grid item sm={4} md={4} lg={4} className={styles.myTrades__contentRow}>
            <Typography variant="body1">{trade.nft.name}</Typography>
          </Grid>
          <Grid item sm={2} md={2} lg={2} className={styles.myTrades__contentRow}>
            <Typography variant="body1">{trade.price}</Typography>
          </Grid>
          <Grid item sm={2} md={2} lg={2} className={styles.myTrades__contentRow}>
            <Typography variant="body1">{trade.side}</Typography>
          </Grid>
          <Grid item sm={2} md={2} lg={2} className={styles.myTrades__contentRow}>
            <Typography variant="body1">{trade.quoteCurrency}</Typography>
          </Grid>
        </>
      )}
    </Grid>
  );
};

interface MyTradesRowProps {
  trade: FillsResult;
}
