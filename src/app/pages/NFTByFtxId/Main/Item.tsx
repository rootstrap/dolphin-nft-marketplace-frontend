import { Button, Typography } from '@material-ui/core';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useContext } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { HallOfFameItem } from '../HallOfFameItem/HallOfFameItem';
import { HeroleteItem } from '../HeroleteItem/HeroleteItem';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Main.module.scss';
import { NFTByIdContext } from '../NFTByIdPage';

export const Item = () => {
  const t = useTranslation();
  const { handleShowDescription, nft, handleOpenPeersModal } = useContext(NFTByIdContext);
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

      {nft?.issuer.includes('Heroletes') ? <HeroleteItem /> : <HallOfFameItem />}

      {!nft?.issuer.includes('Heroletes') && (
        <div className={styles.mainContent__buttonContainer}>
          <Button
            variant="contained"
            disabled={!nft?.offerPrice}
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
