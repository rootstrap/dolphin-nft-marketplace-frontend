import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import { Item } from './Item';
import { useNFT } from './useNFT';
import { BuyNFT } from 'app/pages/NFT/BuyNFT/BuyNFT';
import { Peers } from 'app/components/Peers/Peers';
import { MainContent } from './MainContent';
import styles from './Main.module.scss';

export const Main = ({ ftxId }: MainProps) => {
  const {
    handleClosePeersModal,
    handleOpenPeersModal,
    handleShowDescription,
    isLoading,
    isPeersModalOpen,
    nft,
    nfts,
    priceInUsd,
    showItemDescription,
  } = useNFT(ftxId);

  if (isLoading) return <CustomLoader />;

  return (
    <>
      {showItemDescription ? (
        <div className={styles.mainContent}>
          <MainContent nft={nft} />
          <Item
            priceInUsd={priceInUsd}
            nft={nft}
            styles={styles}
            handleOpenPeersModal={handleOpenPeersModal}
            handleShowDescription={handleShowDescription}
          />
        </div>
      ) : (
        <BuyNFT nft={nft} handleShowDescription={handleShowDescription} />
      )}
      <Peers nfts={nfts} open={isPeersModalOpen} handleClose={handleClosePeersModal} />
    </>
  );
};

interface MainProps {
  ftxId: string;
}
