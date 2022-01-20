import { useContext } from 'react';
import { NFTDetailsContext } from './NFTDetails';
import styles from './NftDetails.module.scss';

export const Image = () => {
  const { nft } = useContext(NFTDetailsContext);

  return (
    <div className={styles.secondaryMarket__nft}>
      <iframe
        style={{ border: 'none' }}
        height="320"
        width="320"
        allow="autoplay; encrypted-media;"
        allowFullScreen={true}
        src={`${nft?.videoUrl}?autoplay=true&muted=true`}
        title={nft?.name}
      />
    </div>
  );
};
