import { Button, Grid, Typography } from '@material-ui/core';
import { SyntheticEvent } from 'react';
import { ReactComponent as RibbonIcon } from 'app/assets/ribbon.svg';
import useTranslation from 'app/hooks/useTranslation';
import styles from './HeroleteItem.module.scss';
import { Link } from 'react-router-dom';

export const HeroleteItem = ({
  animation,
  collection,
  currency,
  id,
  name,
  price,
  sport,
  tier,
}: HeroleteItemProps) => {
  const t = useTranslation();
  const onMouseEnter = (e: SyntheticEvent) => {
    (e.currentTarget as HTMLVideoElement).play();
  };

  const onMouseLeave = (e: SyntheticEvent) => {
    (e.currentTarget as HTMLVideoElement).pause();
  };

  return (
    <>
      <video
        className={styles.heroleteItem__video}
        muted
        controls={false}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <source src={animation} type="video/mp4" />
      </video>
      <div className={styles.heroleteItem__summary}>
        <Typography component="div" variant="h6" gutterBottom>
          {name} - {sport}
        </Typography>
        <div className={styles.heroleteItem__info}>
          <Typography component="span" variant="subtitle2" className={styles.heroleteItem__infoCollection}>
            Collection: {collection.split(' -').shift()}
          </Typography>
          <Typography component="span" variant="subtitle2" className={styles.heroleteItem__infoTier}>
            <RibbonIcon /> {tier}
          </Typography>
        </div>
        <div className={styles.heroleteItem__buyInfo}>
          <div>
            <Typography component="span" variant="h5">
              {currency}{' '}
            </Typography>
            <Typography component="span" variant="h5">
              {price?.toFixed(2)}
            </Typography>
          </div>
          <Link to={`/nft/${id}`}>
            <Button>{t('heroletes.marketplace.item.actionButton')}</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

interface HeroleteItemProps {
  animation: string;
  collection: string;
  currency: string;
  id: string;
  name: string;
  price: number;
  sport: string;
  tier: string;
}
