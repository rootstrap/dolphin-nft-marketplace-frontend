/* eslint-disable jsx-a11y/media-has-caption */
import { useContext } from 'react';
import { NFTDetailsContext } from './NFTDetails';
import styles from './NftDetails.module.scss';

export const Image = () => {
  const { nft } = useContext(NFTDetailsContext);

  return (
    <div className={styles.secondaryMarket__nft}>
      <span className={styles.secondaryMarket__nftEditionContainer}>
        {nft?.number && <span className={styles.secondaryMarket__nftEdition}>#{nft?.number}</span>}
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
          src={`${nft?.videoUrl}?autoplay=true&muted=true&loop=true`}
          title={nft?.name}
        />
      ) : nft?.animationUrl ? (
        <video className={styles.list__itemContentImg} height="544" width="544" muted autoPlay>
          <source src={nft?.animationUrl} type="video/mp4" />
        </video>
      ) : (
        <img className={styles.secondaryMarket__nftImg} src={nft?.imageUrl} alt="" />
      )}
    </div>
  );
};
