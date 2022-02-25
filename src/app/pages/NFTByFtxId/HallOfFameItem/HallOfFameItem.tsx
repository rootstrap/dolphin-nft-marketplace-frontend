import { useContext } from 'react';
import { Typography } from '@material-ui/core';
import { NFTByIdContext } from '../NFTByIdPage';
import useTranslation from 'app/hooks/useTranslation';
import styles from './HallOfFameItem.module.scss';

export const HallOfFameItem = () => {
  const t = useTranslation();
  const { nft } = useContext(NFTByIdContext);

  return (
    <div className={styles.hallOfFameItem__price}>
      <div className={styles.hallOfFameItem__priceItem}>
        {nft?.offerPrice && (
          <div>
            <Typography component="div" variant="h6">
              {t('nft.price')}
            </Typography>
            <Typography component="span">${nft?.offerPrice}</Typography>
          </div>
        )}
      </div>
      <div className={styles.hallOfFameItem__priceItem}>
        <Typography component="div" variant="h6">
          {t('nft.editionNumber')}
        </Typography>
        <Typography component="span">#{nft?.number}</Typography>
      </div>
      <div className={styles.hallOfFameItem__priceItem}>
        <Typography component="div" variant="h6">
          {t('nft.totalReleased')}
        </Typography>
        <Typography component="span">{nft?.totalQuantity}</Typography>
      </div>
    </div>
  );
};
