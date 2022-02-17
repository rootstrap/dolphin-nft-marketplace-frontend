import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import { Item } from './Item';
import { useNFT } from './useNFT';
import { useState } from 'react';
import { BuyNFT } from 'app/pages/NFT/BuyNFT/BuyNFT';
import { Peers } from 'app/components/Peers/Peers';
import { useAppSelector } from 'app/hooks/reduxHooks';
import styles from './Main.module.scss';
import { useResponsive } from 'app/hooks/useResponsive';

export const Main = ({ ftxId }: MainProps) => {
  const { nft, isLoading, isPriceInUsd, priceInUsd } = useNFT(ftxId);
  const [showItemDescription, setShowItemDescription] = useState<boolean>(true);
  const { nfts } = useAppSelector(state => state.nft);
  const [isPeersModalOpen, setIsPeersModalOpen] = useState<boolean>(false);
  const { isTabletView, isSmallDeviceView } = useResponsive();

  const handleShowDescription = () => setShowItemDescription(!showItemDescription);

  const handleClosePeersModal = () => setIsPeersModalOpen(false);
  const handleOpenPeersModal = () => setIsPeersModalOpen(true);

  if (isLoading) return <CustomLoader />;

  return (
    <>
      {showItemDescription ? (
        <div className={styles.mainContent}>
          <div>
            {nft?.videoUrl ? (
              <iframe
                height={isSmallDeviceView || isTabletView ? '300' : '540'}
                width={isSmallDeviceView || isTabletView ? '300' : '540'}
                allow="autoplay; encrypted-media;"
                src={`${nft?.videoUrl}?autoplay=true&muted=true&loop=true`}
                title={nft?.name}
              />
            ) : nft?.animationUrl ? (
              <video
                height={isSmallDeviceView || isTabletView ? '300' : '540'}
                width={isSmallDeviceView || isTabletView ? '300' : '540'}
                muted
                autoPlay
              >
                <source src={nft?.animationUrl} type="video/mp4" />
              </video>
            ) : (
              <img src={nft?.imageUrl} alt="Herolete" />
            )}
          </div>
          <Item
            isUsd={isPriceInUsd}
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
