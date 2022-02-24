import { ReactComponent as RibbonIcon } from 'app/assets/icons/ribbon.svg';
import { ReactComponent as BackgroundIcon } from 'app/assets/icons/background.svg';
import { Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';

export const HeroleteItem = ({
  background,
  offerPrice,
  priceInUsd,
  quoteCurrency,
  styles,
  tier,
}: HeroleteItemProps) => {
  const t = useTranslation();

  return (
    <>
      <div className={styles.mainContent__heroleteItem}>
        <div>
          <RibbonIcon fill="#fff" />
          <Typography component="div" variant="subtitle1">
            Tier
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.mainContent__heroleteItemInfo}>
            {tier}
          </Typography>
        </div>
        <div>
          <BackgroundIcon />
          <Typography component="div" variant="subtitle1">
            Background
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.mainContent__heroleteItemInfo}>
            {background}
          </Typography>
        </div>
      </div>
      <div className={styles.mainContent__heroleteItemPrice}>
        <Typography component="div" variant="h6">
          {t('nft.price')}:
        </Typography>
        <div>
          <Typography component="span">
            {quoteCurrency} {offerPrice}{' '}
          </Typography>
          <small>{`($${(priceInUsd * offerPrice).toFixed(2)})`}</small>
        </div>
      </div>
    </>
  );
};

interface HeroleteItemProps {
  background: string;
  offerPrice: number;
  priceInUsd: number;
  quoteCurrency: string;
  styles: any;
  tier: string;
}
