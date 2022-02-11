/* eslint-disable jsx-a11y/media-has-caption */
import { SyntheticEvent } from 'react';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useTranslation from 'app/hooks/useTranslation';
import styles from './MyCollection.module.scss';

export const Item = ({ id, name, image, animation, video, offerPrice, issuer }: ItemProps) => {
  const t = useTranslation();

  const onMouseEnter = (e: SyntheticEvent) => {
    (e.currentTarget as HTMLVideoElement).play();
  };

  const onMouseLeave = (e: SyntheticEvent) => {
    (e.currentTarget as HTMLVideoElement).pause();
  };

  return (
    <Link to={`secondary/${id}`}>
      <div className={styles.list__itemContent}>
        {offerPrice && (
          <div className={styles.list__itemContentSale}>
            {' '}
            <Typography variant="body1">{t('nft.sellNft.indicator')}</Typography>
          </div>
        )}

        {animation ? (
          <video
            className={styles.list__itemContentVideo}
            muted
            controls={false}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <source src={animation} type="video/mp4" />
          </video>
        ) : (
          <img className={styles.list__itemContentImg} src={image} alt="" />
        )}

        <div className={styles.list__itemContentHidden}>
          <Typography className={styles.list__itemContentHiddenTitle} variant="h5" component="div">
            {name}
          </Typography>
        </div>
      </div>
    </Link>
  );
};

interface ItemProps {
  animation: string;
  id: string;
  image: string;
  issuer: string;
  name: string;
  offerPrice: number;
  video: string;
}
