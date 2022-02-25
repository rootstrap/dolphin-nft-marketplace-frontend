import { Button, Typography } from '@material-ui/core';
import { SyntheticEvent, useContext } from 'react';
import { ReactComponent as RibbonIcon } from 'app/assets/icons/ribbon.svg';
import { ReactComponent as BackgroundIcon } from 'app/assets/icons/background.svg';
import useTranslation from 'app/hooks/useTranslation';
import { Link } from 'react-router-dom';
import { colors } from 'app/constants/constants';
import { NFTDetailsContext } from '../Marketplace';
import styles from './HeroleteItem.module.scss';

export const HeroleteItem = ({
  animation,
  background,
  collection,
  currency,
  id,
  name,
  price,
  sport,
  tier,
}: HeroleteItemProps) => {
  const { nftAttributes, heroletes } = useContext(NFTDetailsContext);

  const t = useTranslation();
  const onMouseEnter = (e: SyntheticEvent) => {
    (e.currentTarget as HTMLVideoElement).play();
  };

  const onMouseLeave = (e: SyntheticEvent) => {
    (e.currentTarget as HTMLVideoElement).pause();
  };

  const nftById = heroletes.find(nft => nft.id === id);
  const nftByAttributes = nftById?.attributes;

  const nftWithImagePoster = nftAttributes.find(
    ({ Athlete, Background, Signed, Sport, Tier }) =>
      Athlete === nftByAttributes?.Athlete &&
      Background === nftByAttributes?.Background &&
      Signed === nftByAttributes?.Signed &&
      Sport === nftByAttributes?.Sport &&
      Tier === nftByAttributes?.Tier
  );

  return (
    <>
      <video
        className={styles.heroleteItem__video}
        muted
        controls={false}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        poster={nftWithImagePoster?.imageUrl}
      >
        <source src={animation} type="video/mp4" />
      </video>
      <div className={styles.heroleteItem__summary}>
        <Typography component="div" variant="h6" gutterBottom>
          {name}
          <br />
          {sport}
        </Typography>
        <div className={styles.heroleteItem__info}>
          <Typography component="span" variant="subtitle2" className={styles.heroleteItem__infoCollection}>
            Collection: {collection.split(' -').shift()}
          </Typography>
          <div className={styles.heroleteItem__infoAttributes}>
            <Typography component="div" variant="subtitle2">
              <RibbonIcon fill={colors.orange} /> {tier}
            </Typography>
            <Typography component="div" variant="subtitle2">
              <BackgroundIcon fill={colors.orange} /> {background}
            </Typography>
          </div>
        </div>
        <div className={styles.heroleteItem__buyInfo}>
          <div>
            <Typography component="span" variant="h6">
              {currency}{' '}
            </Typography>
            <Typography component="span" variant="h6">
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
  background: string;
  collection: string;
  currency: string;
  id: string;
  name: string;
  price: number;
  sport: string;
  tier: string;
}
