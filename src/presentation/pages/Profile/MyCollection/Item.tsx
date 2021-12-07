import { Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import styles from './MyCollection.module.scss';

export const Item = ({ id, name, totalQuantity, image, verticalId }: ItemProps) => {
  const t = useTranslation();

  return (
    <div className={styles.list__itemContent}>
      <img src={image} alt="Promotion" className={styles.list__itemContentImg} />

      <div className={styles.list__itemContentHidden}>
        <Typography className={styles.list__itemContentHiddenTitle} variant="h5" component="div">
          {name}
        </Typography>
      </div>
    </div>
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
