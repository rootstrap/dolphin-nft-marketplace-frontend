import { Button, Grid, Typography } from '@material-ui/core';
import { ModalContext } from 'app/context/ModalContext';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useContext } from 'react';

export const BuyNFT = ({ styles, nft, handleShowDescription }: BuyNFTProps) => {
  const { kycModalIsOpen, setKycModalIsOpen } = useContext(ModalContext);

  return (
    <Grid container>
      <Grid item lg={4} className={styles.mainContent__item}>
        <div className={styles.mainContent__itemImg}>
          <img src={nft?.imageUrl} alt="" />
        </div>
        <div className={styles.mainContent__itemDescription}>
          <Typography variant="h5">Purchase Details</Typography>
          <Typography>{nft?.name}</Typography>
        </div>
      </Grid>

      <Grid item lg={8}>
        <div className={styles.mainContent__itemFund}>
          <div className={styles.mainContent__walletContainer}>
            <Typography component="div">Please activate your wallet to perform your fist purchase</Typography>
            <Button variant="text" onClick={() => setKycModalIsOpen(true)}>
              Activate wallet{' '}
            </Button>
          </div>
          <div className={styles.mainContent__buttonContainer}>
            <div className={styles.mainContent__priceContainer}>
              <Typography component="div">Price: </Typography>
              <Typography component="div">${nft?.offerPrice}</Typography>
            </div>

            <Button variant="contained" fullWidth size="large" disabled>
              Activate your wallet to continue
            </Button>
            <Button fullWidth size="large" onClick={handleShowDescription}>
              Cancel
            </Button>
          </div>
        </div>
      </Grid>
    </Grid>
  );
};

interface BuyNFTProps {
  styles: any;
  nft?: NFT;
  handleShowDescription: () => void;
}
