import { Button, Grid, Typography } from '@material-ui/core';
import { ModalContext } from 'app/context/ModalContext';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useContext } from 'react';
import buyStyles from './Buy.module.scss';

export const BuyNFT = ({ nft, handleShowDescription }: BuyNFTProps) => {
  const { kycModalIsOpen, setKycModalIsOpen } = useContext(ModalContext);

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
            <Typography component="div">Please activate your wallet to perform your fist purchase</Typography>
            <Button variant="text" onClick={() => setKycModalIsOpen(true)}>
              Activate wallet{' '}
            </Button>
          </div>
          <div className={buyStyles.buyContent__buttonContainer}>
            <div className={buyStyles.buyContent__priceContainer}>
              <Typography variant="h5" className={buyStyles.buyContent__priceContainer__label}>
                Price:
              </Typography>
              <Typography variant="h4" className={buyStyles.buyContent__priceContainer__price}>
                {nft?.quoteCurrency} ${nft?.offerPrice}
              </Typography>
            </div>

            <Button fullWidth className={buyStyles.buyContent__btn} disabled>
              Activate your wallet to continue
            </Button>
            <Button fullWidth size="large" onClick={handleShowDescription}>
              Cancel
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
