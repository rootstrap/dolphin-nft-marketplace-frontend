import { Button, Typography } from '@material-ui/core';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useContext } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { HallOfFameItem } from '../HallOfFameItem/HallOfFameItem';
import { HeroleteItem } from '../HeroleteItem/HeroleteItem';
import useTranslation from 'app/hooks/useTranslation';

export const Item = ({ styles, nft, handleOpenPeersModal, handleShowDescription, priceInUsd }: ItemProps) => {
  const t = useTranslation();
  const { setLoginModalIsOpen } = useContext(ModalContext);
  const { isAuthenticated } = useAppSelector(state => state.user);

  const handleOnClick = () => {
    isAuthenticated ? handleShowDescription() : setLoginModalIsOpen(true);
  };

  return (
    <div className={styles.mainContent__itemDescription}>
      <Typography className={styles.mainContent__itemDescriptionTitle} component="div">
        {nft?.collection}
      </Typography>
      <Typography variant="h5" component="div">
        {nft?.name}
      </Typography>
      <Typography className={styles.mainContent__itemDescriptionText} component="div">
        {nft?.description}
      </Typography>

      {nft?.issuer.includes('Heroletes') ? (
        <HeroleteItem
          background={nft?.attributes.Background}
          offerPrice={nft?.offerPrice}
          priceInUsd={priceInUsd}
          quoteCurrency={nft?.quoteCurrency}
          tier={nft?.attributes.Tier}
        />
      ) : (
        <HallOfFameItem
          number={nft?.number}
          offerPrice={nft?.offerPrice}
          totalQuantity={nft?.totalQuantity}
        />
      )}

      {!nft?.issuer.includes('Heroletes') && (
        <div className={styles.mainContent__buttonContainer}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={handleOnClick}
            className={styles.mainContent__buttonContainerBuy}
          >
            {t('nft.buyButton')}
          </Button>

          <Button fullWidth size="large" onClick={handleOpenPeersModal}>
            {t('nft.peersButton')}
          </Button>
        </div>
      )}
    </div>
  );
};

interface ItemProps {
  handleOpenPeersModal: () => void;
  handleShowDescription: () => void;
  nft?: NFT;
  priceInUsd: number;
  styles: any;
}
