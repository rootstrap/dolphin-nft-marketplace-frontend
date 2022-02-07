import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { Item } from './Item';
import { useNFT } from './useNFT';
import { useState } from 'react';
import { BuyNFT } from 'presentation/pages/NFT/BuyNFT/BuyNFT';
import { Peers } from 'presentation/components/Peers/Peers';
import { useAppSelector } from 'app/hooks/reduxHooks';
import styles from './Main.module.scss';
import { useResponsive } from 'app/hooks/useResponsive';

export const Main = ({ ftxId }: MainProps) => {
  const [showItemDescription, setShowItemDescription] = useState<boolean>(true);
  const { nft, isLoading } = useNFT(ftxId);
  const { nfts } = useAppSelector(state => state.nft);
  const [isPeersModalOpen, setIsPeersModalOpen] = useState<boolean>(false);
  const { isTabletView, isSmallDeviceView } = useResponsive();

  const handleShowDescription = () => setShowItemDescription(!showItemDescription);

  const handleClosePeersModal = () => setIsPeersModalOpen(false);
  const handleOpenPeersModal = () => setIsPeersModalOpen(true);

  const componentToRender = showItemDescription ? (
    <div className={styles.mainContent}>
      <div>
        <iframe
          height={isSmallDeviceView || isTabletView ? '300' : '540'}
          width={isSmallDeviceView || isTabletView ? '300' : '540'}
          allow="autoplay; encrypted-media;"
          src={`${nft?.videoUrl}?autoplay=true&muted=true&loop=true`}
          title={nft?.name}
        />
      </div>
      <Item
        nft={nft}
        styles={styles}
        handleOpenPeersModal={handleOpenPeersModal}
        handleShowDescription={handleShowDescription}
      />
    </div>
  ) : (
    <BuyNFT nft={nft} handleShowDescription={handleShowDescription} />
  );

  return (
    <>
      {isLoading ? <CustomLoader /> : componentToRender}
      <Peers nfts={nfts} open={isPeersModalOpen} handleClose={handleClosePeersModal} />
    </>
  );
};

interface MainProps {
  ftxId: string;
}
