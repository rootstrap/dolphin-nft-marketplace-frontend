import { useContext } from 'react';
import { NFTDetailsContext } from './NFTDetails';
import styles from './NftDetails.module.scss';

export const Image = () => {
  const { nft } = useContext(NFTDetailsContext);

  return (
    <div className={styles.secondaryMarket__nft}>
      <img className={styles.secondaryMarket__nftImg} src={nft?.imageUrl} alt="" />
    </div>
  );
};
