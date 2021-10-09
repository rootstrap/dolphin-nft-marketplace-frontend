import { Grid } from '@material-ui/core';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { useParams } from 'react-router';
import { Item } from './Item';
import { useNFT } from './useNFT';
import { useState } from 'react';
import { BuyNFT } from '../BuyNFT/BuyNFT';
import styles from './Main.module.scss';
import { Peers } from 'presentation/components/Peers/Peers';

export const Main = () => {
  const { nftId } = useParams<{ nftId: string }>();
  const [showItemDescription, setShowItemDescription] = useState<boolean>(true);
  const { nft, isLoading } = useNFT(nftId);
  const [isPeersModalOpen, setIsPeersModalOpen] = useState<boolean>(false);

  const handleShowDescription = () => setShowItemDescription(!showItemDescription);

  const handleClosePeersModal = () => setIsPeersModalOpen(false);
  const handleOpenPeersModal = () => setIsPeersModalOpen(true);

  const componentToRender = showItemDescription ? (
    <>
      <Grid container spacing={0}>
        <Grid item className={styles.mainContent__item} xs={1}></Grid>
        <Grid item className={styles.mainContent__item} xs={9} lg={4}>
          <iframe className={styles.mainContent__itemVideo} src={nft?.videoUrl} title={nft?.name} />
        </Grid>
        <Grid item className={styles.mainContent__item} xs={1}></Grid>
        <Grid item className={styles.mainContent__item} xs={9} lg={5}>
          <Item
            nft={nft}
            styles={styles}
            handleOpenPeersModal={handleOpenPeersModal}
            handleShowDescription={handleShowDescription}
          />
        </Grid>
        <Grid item className={styles.mainContent__item} xs={1}></Grid>
      </Grid>
    </>
  ) : (
    <BuyNFT nft={nft} handleShowDescription={handleShowDescription} styles={styles} />
  );

  return (
    <div className={styles.mainContent}>
      {isLoading ? (
        <CustomLoader />
      ) : (
        <Grid container className={styles.mainContent__container}>
          {componentToRender}
        </Grid>
      )}
      <Peers open={isPeersModalOpen} handleClose={handleClosePeersModal} />
    </div>
  );
};
