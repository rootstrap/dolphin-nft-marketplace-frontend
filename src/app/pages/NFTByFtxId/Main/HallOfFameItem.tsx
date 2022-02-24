import { Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';

export const HallOfFameItem = ({ offerPrice, number, styles, totalQuantity }: HallOfFameItemProps) => {
  const t = useTranslation();

  return (
    <div className={styles.mainContent__priceContainer}>
      <div className={styles.mainContent__priceItem}>
        <div>
          <Typography component="div" variant="h6">
            {t('nft.price')}
          </Typography>
          <Typography component="span">${offerPrice}</Typography>
        </div>
      </div>
      <div className={styles.mainContent__priceItem}>
        <Typography component="div" variant="h6">
          {t('nft.editionNumber')}
        </Typography>
        <Typography component="span">#{number}</Typography>
      </div>
      <div className={styles.mainContent__priceItem}>
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
  styles: any;
}
