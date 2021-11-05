import { useContext, useEffect, useState } from 'react';
import { Button, Grid, Typography } from '@material-ui/core';
import { ModalContext } from 'app/context/ModalContext';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useGetCreditCardFeesMutation } from 'infrastructure/services/creditCard/CreditCardService';
import useTranslation from 'app/hooks/useTranslation';
import buyStyles from './Buy.module.scss';

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
    <Grid container>
      <Grid item lg={1}></Grid>

      <Grid item xs={12} lg={3} className={buyStyles.buyContent__item}>
        <div className={buyStyles.buyContent__itemImg}>
          <img src={nft?.imageUrl} alt="" />
        </div>
        <div className={buyStyles.buyContent__itemDescription}>
          <Typography variant="h4">Purchase Details</Typography>
          <Typography>{nft?.name}</Typography>
        </div>
      </Grid>
      <Grid item lg={1}></Grid>
      <Grid item xs={12} lg={5}>
        <div className={buyStyles.buyContent__itemFund}>
          <div className={buyStyles.buyContent__walletContainer}>
            <Typography component="div">{t('nft.buyNft.activateWallet')}</Typography>

            <Button variant="text" onClick={handleOnClick}>
              {t('nft.buyNft.activateButton')}
            </Button>
          </div>
          <div className={buyStyles.buyContent__buttonContainer}>
            <div className={buyStyles.buyContent__priceContainer}>
              <Typography variant="h5" className={buyStyles.buyContent__priceContainer__label}>
                {t('nft.buyNft.price')}
              </Typography>
              <Typography variant="h4" className={buyStyles.buyContent__priceContainer__price}>
                {nft?.quoteCurrency} ${nft?.offerPrice}
              </Typography>
            </div>

            <div className={buyStyles.buyContent__priceContainer}>
              <Typography variant="h6" className={buyStyles.buyContent__priceContainer__label}>
                Fee:
              </Typography>
              <Typography variant="h6" className={buyStyles.buyContent__priceContainer__price}>
                ${fee}
              </Typography>
            </div>

            <Button fullWidth className={buyStyles.buyContent__btn} disabled>
              {t('nft.buyNft.continueButton')}
            </Button>
            <Button fullWidth size="large" onClick={handleShowDescription}>
              {t('nft.buyNft.cancelButton')}
            </Button>
          </div>
        </div>
      </Grid>
      <Grid item lg={1}></Grid>
    </Grid>
  );
};

interface BuyNFTProps {
  nft?: NFT;
  handleShowDescription: () => void;
}
