import { Typography } from '@material-ui/core';
import { useContext } from 'react';
import { NFTDetailsContext } from './NFTDetails';
import useTranslation from 'app/hooks/useTranslation';
import styles from './NftDetails.module.scss';

export const Title = () => {
  const { sellError, nft } = useContext(NFTDetailsContext);
  const t = useTranslation();

  return (
    <div className={styles.secondaryMarket__text}>
      <Typography gutterBottom variant="h5">
        {t('nft.sellNft.title')}
      </Typography>
      <Typography gutterBottom variant="subtitle1">
        {nft?.collection}: {nft?.name}
      </Typography>

      <Typography gutterBottom variant="subtitle2">
        {t('nft.sellNft.subtitle')}
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
