import { Grid, Typography } from '@material-ui/core';
import routesPaths from 'app/constants/routesPath';
import { useResponsive } from 'app/hooks/useResponsive';
import { FillsResult } from 'app/interfaces/NFT/NFT';
import { Link } from 'react-router-dom';
import styles from './MyTrades.module.scss';

export const MyTradesRow = ({ trade }: MyTradesRowProps) => {
  const { isMobileView, isTabletView } = useResponsive();

  return (
    <Link to={`nft/${trade.nft.id}`}>
      <Grid container className={styles.myTrades__content}>
        {isMobileView && !isTabletView ? (
          <>
            <Grid item xs={7} sm={6} md={4} lg={4} className={styles.myTrades__contentRow}>
              <Typography variant="body1">{trade.nft.name}</Typography>
            </Grid>
            <Grid item xs={3} sm={4} md={2} lg={2} className={styles.myTrades__contentRow}>
              <Typography variant="body1">{`${trade.price} ${trade.quoteCurrency}`}</Typography>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} className={styles.myTrades__contentRow}>
              <Typography variant="body1">{trade.side}</Typography>
            </Grid>
          </>
        ) : (
          <>
            <Grid item sm={2} md={2} lg={3} className={styles.myTrades__contentRow}>
              <Typography variant="body1">{new Date(Date.parse(trade.time)).toDateString()}</Typography>
            </Grid>
            <Grid item sm={4} md={4} lg={5} className={styles.myTrades__contentRow}>
              <Typography variant="body1">{trade.nft.name}</Typography>
            </Grid>
            <Grid item sm={2} md={2} lg={2} className={styles.myTrades__contentRow}>
              <Typography variant="body1">{`${trade.price} ${trade.quoteCurrency}`}</Typography>
            </Grid>
            <Grid item sm={2} md={2} lg={2} className={styles.myTrades__contentRow}>
              <Typography variant="body1">{trade.side}</Typography>
            </Grid>
          </>
        )}
      </Grid>
    </Link>
  );
};

interface MyTradesRowProps {
  trade: FillsResult;
}
