import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { NFTDetailsContext } from './NFTDetails';
import styles from './NftDetails.module.scss';

export const Title = () => {
  const { title, subtitle, sellError, nft } = useContext(NFTDetailsContext);

  return (
    <div className={styles.secondaryMarket__text}>
      <Typography gutterBottom variant="h5">
        {title}
      </Typography>
      <Typography gutterBottom variant="subtitle1">
        {nft?.collection}: {nft?.name}
      </Typography>

      <Typography gutterBottom variant="subtitle2">
        {subtitle}
      </Typography>

      {sellError && (
        <Typography gutterBottom variant="subtitle1" className={styles.secondaryMarket__textError}>
          {sellError}
        </Typography>
      )}

      {nft?.offerPrice && (
        <Typography className={styles.secondaryMarket__textWarning} variant="h5">
          This nft is for sale at ${nft?.offerPrice}
        </Typography>
      )}
    </div>
  );
};
