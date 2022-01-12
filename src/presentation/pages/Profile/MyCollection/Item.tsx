import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useTranslation from 'app/hooks/useTranslation';
import styles from './MyCollection.module.scss';

export const Item = ({ id, name, image }: ItemProps) => {
  const t = useTranslation();

  return (
    <Link to={`secondary/${id}`}>
      <div className={styles.list__itemContent}>
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
  ftxId: string;
  name: string;
  totalQuantity: number;
  price: number;
  image: string;
  verticalId?: string;
}
