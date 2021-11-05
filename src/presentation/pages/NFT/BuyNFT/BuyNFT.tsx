import { useContext, useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { ModalContext } from 'app/context/ModalContext';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useGetCreditCardFeesMutation } from 'infrastructure/services/creditCard/CreditCardService';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Buy.module.scss';

export const BuyNFT = ({ nft, handleShowDescription }: BuyNFTProps) => {
  const t = useTranslation();
  const [fee, setFee] = useState<number>(0);
  const { setKycModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);
  const { user } = useAppSelector(state => state.user);

  const [getCreditCardFees] = useGetCreditCardFeesMutation();
  const handleOnClick = () => {
    user.kyc1ed ? setCcModalIsOpen(true) : setKycModalIsOpen(true);
  };

  const loadData = async () => {
    const data: any = await getCreditCardFees();
    const { fixed, variable } = data.data;
    const fees = (nft.offerPrice * variable + fixed).toFixed(2);

    setFee(fees);
  };

  useEffect(() => {
    loadData();
  }, []);

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
          <Grid container className={styles.buyContent__walletContainer}>
            <Grid item xs={12} lg={8}>
              <Typography component="div">{t('nft.buyNft.activateWallet')}</Typography>
            </Grid>

            <Grid item xs={12} lg={4}>
              <Button fullWidth onClick={handleOnClick}>
                {t('nft.buyNft.activateButton')}
              </Button>
            </Grid>
          </Grid>
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
                Fee:
              </Typography>
              <Typography variant="h6" className={styles.buyContent__priceContainer__price}>
                ${fee}
              </Typography>
            </div>

            <Button fullWidth className={styles.buyContent__btn} variant="contained" disabled>
              {t('nft.buyNft.continueButton')}
            </Button>
            <Button fullWidth size="large" onClick={handleShowDescription}>
              {t('nft.buyNft.cancelButton')}
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item xs={2} lg={1}></Grid>
    </Grid>
  );
};

interface BuyNFTProps {
  nft?: NFT;
  handleShowDescription: () => void;
}
