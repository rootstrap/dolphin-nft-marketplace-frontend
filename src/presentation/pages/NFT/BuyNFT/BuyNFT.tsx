import { Button, Grid, Typography } from '@material-ui/core';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useBuyNft } from './useBuyNft';
import { DepositModal } from 'presentation/components/DepositModal/DepositModal';
import { BuyModal } from 'presentation/components/BuyModal/BuyModal';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Buy.module.scss';

export const BuyNFT = ({ nft, handleShowDescription }: BuyNFTProps) => {
  const t = useTranslation();
  const {
    defaultCreditCard,
    handleOnClick,
    totalBalance,
    enoughBalance,
    depositModalIsOpen,
    handleCloseDepositModal,
    handleOpenBuyNftModal,
    handleCloseBuyNftModal,
    buyModalIsOpen,
    fee,
    depositSize,
  } = useBuyNft(nft);

  return (
    <Grid container spacing={2}>
      <Grid item md={2} lg={1}></Grid>

      <Grid item xs={12} md={8} lg={4} className={styles.buyContent__item}>
        <div className={styles.buyContent__itemImg}>
          <img src={nft?.imageUrl} alt="" />
        </div>
        <div className={styles.buyContent__itemDescription}>
          <Typography variant="h4">Purchase Details</Typography>
          <Typography>{nft?.name}</Typography>
        </div>
      </Grid>
      <Grid item xs={2} md={2} lg={1}></Grid>
      <Grid item xs={8} md={12} lg={5}>
        <div className={styles.buyContent__itemFund}>
          {depositSize && (
            <Grid container className={styles.buyContent__walletContainer}>
              <Grid item xs={12} lg={8}>
                <Typography component="div">
                  {defaultCreditCard.status === 'approved'
                    ? t('nft.buyNft.fundWallet')
                    : t('nft.buyNft.activateWallet')}
                </Typography>
              </Grid>

              <Grid item xs={12} lg={4}>
                <Button fullWidth onClick={handleOnClick} variant="text">
                  {defaultCreditCard.status === 'approved'
                    ? t('nft.buyNft.fundButton')
                    : t('nft.buyNft.activateButton')}
                </Button>
              </Grid>
            </Grid>
          )}

          <div className={styles.buyContent__buttonContainer}>
            <div className={styles.buyContent__priceContainer}>
              <Typography variant="h5" className={styles.buyContent__priceContainer__label}>
                {t('nft.buyNft.price')}
              </Typography>
              <Typography variant="h4" className={styles.buyContent__priceContainer__price}>
                {nft?.quoteCurrency} ${nft?.offerPrice}
              </Typography>
            </div>

            <div className={styles.buyContent__priceContainer}>
              <Typography variant="h6" className={styles.buyContent__priceContainer__label}>
                Your Balance:
              </Typography>
              <Typography variant="h6" className={styles.buyContent__priceContainer__price}>
                ${totalBalance}
              </Typography>
            </div>

            <Button
              fullWidth
              className={styles.buyContent__btn}
              variant="contained"
              disabled={!enoughBalance}
              onClick={handleOpenBuyNftModal}
            >
              {t('nft.buyButton')}
            </Button>
            <Button fullWidth size="large" onClick={handleShowDescription}>
              {t('nft.buyNft.cancelButton')}
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={2} lg={1}></Grid>

      <DepositModal
        isOpen={depositModalIsOpen}
        handleClose={handleCloseDepositModal}
        fee={fee}
        depositSize={depositSize}
      />

      <BuyModal
        isOpen={buyModalIsOpen}
        handleClose={handleCloseBuyNftModal}
        nftId={nft.id}
        price={nft.offerPrice}
      />
    </Grid>
  );
};

interface BuyNFTProps {
  nft?: NFT;
  handleShowDescription: () => void;
}
