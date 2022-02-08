import { Button, Grid, Typography } from '@material-ui/core';
import { INftTradesResult } from 'app/interfaces/NFT/NFTCommons';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import { transformDate } from 'app/helpers/transformDate';
import useTranslation from 'app/hooks/useTranslation';
import styles from './NftTradeHistory.module.scss';
import { BaseModal } from 'app/components/Modal/Modal';
import { useState } from 'react';

export const NftTradeHistory = ({ tradeHistoryRecords, isLoading }: NftTradeHistoryProps) => {
  const t = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const componentToRender = (limit: number | undefined) => (
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
      {tradeHistoryRecords.slice(0, limit).map(row => (
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
  );

  return isLoading ? (
    <CustomLoader height={50} width={50} />
  ) : (
    <>
      <div className={styles.nftTradeHistory}>
        <div className={styles.nftTradeHistory__title}>
          <Typography component="h3" variant="h5" gutterBottom>
            {t('nft.tradeHistory.title')}
          </Typography>
          <Button size="small" variant="text" onClick={() => setIsModalOpen(true)}>
            See all
          </Button>
        </div>
        {componentToRender(6)}
        <BaseModal
          handleClose={() => setIsModalOpen(false)}
          bigModal
          open={isModalOpen}
          showCloseButton={false}
        >
          <div className={styles.nftTradeHistory__title}>
            <Typography component="h3" variant="h5" gutterBottom style={{ marginLeft: '0.5rem' }}>
              {t('nft.tradeHistory.title')}
            </Typography>
          </div>
          {componentToRender(undefined)}
        </BaseModal>
      </div>
    </>
  );
};

interface NftTradeHistoryProps {
  tradeHistoryRecords: INftTradesResult[];
  isLoading: boolean;
}
