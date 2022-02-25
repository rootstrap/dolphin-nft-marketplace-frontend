import { ReactComponent as RibbonIcon } from 'app/assets/icons/ribbon.svg';
import { ReactComponent as BackgroundIcon } from 'app/assets/icons/background.svg';
import { Button, Typography } from '@material-ui/core';
import { colors } from 'app/constants/constants';
import useTranslation from 'app/hooks/useTranslation';
import styles from './HeroleteItem.module.scss';

export const HeroleteItem = ({
  background,
  offerPrice,
  priceInUsd,
  quoteCurrency,
  tier,
}: HeroleteItemProps) => {
  const t = useTranslation();

  return (
    <>
      <div className={styles.heroleteItem}>
        <div>
          <RibbonIcon fill={colors.white} />
          <Typography component="div" variant="subtitle1">
            Tier
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__info}>
            {tier}
          </Typography>
        </div>
        <div>
          <BackgroundIcon />
          <Typography component="div" variant="subtitle1">
            Background
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__info}>
            {background}
          </Typography>
        </div>
      </div>
      <div className={styles.heroleteItem__price}>
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
      <div className={styles.heroleteItem__button}>
        <Button fullWidth variant="contained">
          {t('nft.buyButton')}
        </Button>
      </div>
    </>
  );
};

interface HeroleteItemProps {
  background: string;
  offerPrice: number;
  priceInUsd: number;
  quoteCurrency: string;
  tier: string;
}
