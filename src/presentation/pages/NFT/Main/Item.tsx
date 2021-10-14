import { Button, Typography } from '@material-ui/core';
import { NFT } from 'app/interfaces/NFT/NFT';
import useTranslation from 'app/hooks/useTranslation';
import { useAppSelector } from 'app/hooks/reduxHooks';

export const Item = ({ styles, nft, handleOpenPeersModal, handleShowDescription }: ItemProps) => {
  const t = useTranslation();
  const { isAuthenticated } = useAppSelector(state => state.user);

  const handleOnClick = () => {
    isAuthenticated ? handleShowDescription() : console.log('openLogin');
  };

  return (
    <div className={styles.mainContent__itemDescription}>
      <Typography className={styles.mainContent__itemDescriptionTitle} component="div">
        {nft?.collection}
      </Typography>

      <Typography variant="h5" component="div">
        {nft?.series}
      </Typography>
      <Typography className={styles.mainContent__itemDescriptionText} component="div">
        {nft?.description}
      </Typography>
      <div className={styles.mainContent__priceContainer}>
        <div className={styles.mainContent__priceItem}>
          <Typography component="div" variant="h6">
            {t('nft.floorPrice')}
          </Typography>
          <Typography component="p">${nft?.offerPrice}</Typography>
        </div>
        <div className={styles.mainContent__priceItem}>
          {nft?.totalQuantity && (
            <>
              <Typography component="div" variant="h6">
                {t('nft.totalReleased')}
              </Typography>
              <Typography component="p">{nft?.totalQuantity}</Typography>
            </>
          )}
        </div>
      </div>

      <div className={styles.mainContent__buttonContainer}>
        <Button variant="contained" fullWidth size="large" onClick={handleOnClick}>
          {t('nft.buyButton')}
        </Button>
        <Button fullWidth size="large" onClick={handleOpenPeersModal}>
          {t('nft.peersButton')}
        </Button>
      </div>
    </div>
  );
};

interface ItemProps {
  styles: any;
  nft?: NFT;
  handleOpenPeersModal: () => void;
  handleShowDescription: () => void;
}
