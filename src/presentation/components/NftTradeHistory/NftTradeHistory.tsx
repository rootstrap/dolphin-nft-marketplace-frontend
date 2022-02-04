import { Grid, Typography } from '@material-ui/core';
import { INftTradesResult } from 'app/interfaces/NFT/NFTCommons';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { transformDate } from 'app/helpers/transformDate';
import useTranslation from 'app/hooks/useTranslation';
import styles from './NftTradeHistory.module.scss';

export const NftTradeHistory = ({ tradeHistoryRecords, isLoading }: NftTradeHistoryProps) => {
  const t = useTranslation();

  return isLoading ? (
    <CustomLoader height={50} width={50} />
  ) : (
    <>
      <div className={styles.nftTradeHistory}>
        <Typography component="h3" variant="h5" gutterBottom>
          {t('nft.tradeHistory.title')}
        </Typography>
        <div>
          <Grid container xs={12} className={styles.nftTradeHistory__heading}>
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
          {tradeHistoryRecords.slice(0, 6).map(row => (
            <Grid container xs={12} className={styles.nftTradeHistory__content}>
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
    </>
  );
};

interface NftTradeHistoryProps {
  tradeHistoryRecords: INftTradesResult[];
  isLoading: boolean;
}
