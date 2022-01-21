import { useContext } from 'react';
import { NFTDetailsContext } from './NFTDetails';
import styles from './NftDetails.module.scss';

export const Image = () => {
  const { nft } = useContext(NFTDetailsContext);
  return (
    <div className={styles.secondaryMarket__nft}>
      <span className={styles.secondaryMarket__nftEditionContainer}>
        <span className={styles.secondaryMarket__nftEdition}>#{nft?.number}</span>
        {nft?.totalQuantity && (
          <span
            className={`${styles.secondaryMarket__nftEdition} ${styles.secondaryMarket__nftTotalEditions}`}
          >
            {' '}
            / {nft?.totalQuantity}
          </span>
        )}
      </span>

      {nft?.videoUrl ? (
        <iframe
          style={{ border: 'none' }}
          height="544"
          width="544"
          allow="autoplay; encrypted-media;"
          allowFullScreen={true}
          src={`${nft?.videoUrl}?autoplay=true&muted=true`}
          title={nft?.name}
        />
      ) : (
        <img className={styles.secondaryMarket__nftImg} src={nft?.imageUrl} alt="" />
      )}
    </div>
  );
};
