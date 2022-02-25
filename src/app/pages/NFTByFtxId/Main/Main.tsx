import { useContext } from 'react';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import { Item } from './Item';
import { BuyNFT } from 'app/pages/NFTByFtxId/BuyNFT/BuyNFT';
import { Peers } from 'app/components/Peers/Peers';
import { MainContent } from './MainContent';
import { NFTByIdContext } from '../NFTByIdPage';
import styles from './Main.module.scss';

export const Main = () => {
  const {
    isLoading,
    showItemDescription,
    nft,
    handleShowDescription,
    nfts,
    isPeersModalOpen,
    handleClosePeersModal,
  } = useContext(NFTByIdContext);

  if (isLoading) return <CustomLoader />;

  return (
    <div className={styles.mainContent}>
      {showItemDescription ? (
        <>
          <MainContent />
          <Item />
        </>
      ) : (
        <BuyNFT nft={nft} handleShowDescription={handleShowDescription} />
      )}

      <Peers nfts={nfts} open={isPeersModalOpen} handleClose={handleClosePeersModal} />
    </div>
  );
};
