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
      <Typography className={styles.secondaryMarket__textCollection} gutterBottom component="h2">
        {nft?.issuer} {t('nft.sellNft.collection')}
      </Typography>
      <Typography className={styles.secondaryMarket__textTitle} gutterBottom component="h1">
        {nft?.series}
      </Typography>
      <Typography
        className={styles.secondaryMarket__textTitle}
        gutterBottom
        component="h3"
        variant="subtitle1"
      >
        {t('nft.sellNft.issuer')}
        {nft?.issuer}
      </Typography>
      <Typography className={styles.secondaryMarket__textDescription} gutterBottom component="p">
        {nft?.description}
      </Typography>

      <div className={styles.secondaryMarket__textInfo}>
        <div className={styles.secondaryMarket__textInfoContainer}>
          <Typography>
            {t('nft.sellNft.edition')}{' '}
            <span className={styles.secondaryMarket__textInfoData}>{nft?.number}</span>
          </Typography>
        </div>
        {nft?.totalQuantity && (
          <div className={styles.secondaryMarket__textInfoContainer}>
            <Typography>
              {t('nft.sellNft.totalEditions')}{' '}
              <span className={styles.secondaryMarket__textInfoData}>{nft?.totalQuantity}</span>
            </Typography>
          </div>
        )}
      </div>

      {sellError && (
        <Typography gutterBottom variant="subtitle1" className={styles.secondaryMarket__textError}>
          {sellError}
        </Typography>
      )}

      {nft?.offerPrice && (
        <Typography className={styles.secondaryMarket__textWarning} variant="h5">
          {t('nft.sellNft.price')}
          {nft?.quoteCurrency} {nft?.offerPrice}
        </Typography>
      )}
    </div>
  );
};
