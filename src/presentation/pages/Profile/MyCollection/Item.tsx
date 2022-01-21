import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useTranslation from 'app/hooks/useTranslation';
import styles from './MyCollection.module.scss';

export const Item = ({ id, name, image, offerPrice }: ItemProps) => {
  const t = useTranslation();

  return (
    <Link to={`secondary/${id}`}>
      <div className={styles.list__itemContent}>
        {offerPrice && (
          <div className={styles.list__itemContentSale}>
            {' '}
            <Typography variant="body1">{t('nft.sellNft.indicator')}</Typography>
          </div>
        )}
        <img src={image} alt="Promotion" className={styles.list__itemContentImg} />

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
  id: string;
  image: string;
  name: string;
  offerPrice: number;
}
