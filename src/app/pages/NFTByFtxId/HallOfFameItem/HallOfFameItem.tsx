import { Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import styles from './HallOfFameItem.module.scss';

export const HallOfFameItem = ({ offerPrice, number, totalQuantity }: HallOfFameItemProps) => {
  const t = useTranslation();

  return (
    <div className={styles.hallOfFameItem__price}>
      <div className={styles.hallOfFameItem__priceItem}>
        <div>
          <Typography component="div" variant="h6">
            {t('nft.price')}
          </Typography>
          <Typography component="span">${offerPrice}</Typography>
        </div>
      </div>
      <div className={styles.hallOfFameItem__priceItem}>
        <Typography component="div" variant="h6">
          {t('nft.editionNumber')}
        </Typography>
        <Typography component="span">#{number}</Typography>
      </div>
      <div className={styles.hallOfFameItem__priceItem}>
        <Typography component="div" variant="h6">
          {t('nft.totalReleased')}
        </Typography>
        <Typography component="span">{totalQuantity}</Typography>
      </div>
    </div>
  );
};

interface HallOfFameItemProps {
  offerPrice: number;
  number: number;
  totalQuantity: number;
}
