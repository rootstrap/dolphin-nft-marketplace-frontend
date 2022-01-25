import { Grid, Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import { useContext } from 'react';
import { NFTDetailsContext } from './NFTDetails';
import { transformDate } from 'app/helpers/transformDate';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import styles from './NftDetails.module.scss';

export const TradeHistory = () => {
  const { nftTradeHistory, isTradeHistoryLoading } = useContext(NFTDetailsContext);
  const t = useTranslation();

  return isTradeHistoryLoading ? (
    <CustomLoader height={50} width={50} />
  ) : (
    <div className={styles.secondaryMarket__history}>
      <Typography component="h3" variant="h5" gutterBottom>
        {t('nft.tradeHistory.title')}
      </Typography>
      <div>
        <Grid container xs={12} className={styles.secondaryMarket__historyHeading}>
          <Grid xs={4} item container justifyContent="center">
            <Typography variant="subtitle1">{t('nft.tradeHistory.date')}</Typography>
          </Grid>
          <Grid xs={4} item container justifyContent="center">
            <Typography variant="subtitle1">{t('nft.tradeHistory.currency')}</Typography>
          </Grid>
          <Grid xs={4} item container justifyContent="center">
            <Typography variant="subtitle1">{t('nft.tradeHistory.price')}</Typography>
          </Grid>
        </Grid>
        {nftTradeHistory.map(row => (
          <Grid container xs={12} className={styles.secondaryMarket__historyContent}>
            <Grid item xs={4} container justifyContent="center">
              {transformDate(new Date(row.time))}
            </Grid>
            <Grid item xs={4} container justifyContent="center">
              {row.quoteCurrency}
            </Grid>
            <Grid item xs={4} container justifyContent="center">
              {row.price}
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
};
