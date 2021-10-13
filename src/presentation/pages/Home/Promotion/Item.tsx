import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import New from 'app/assets/New.png';
import useTranslation from 'app/hooks/useTranslation';

export const Item = ({ ftxId, name, totalQuantity, image, verticalId, styles }: ItemProps) => {
  const t = useTranslation();

  return (
    <div className={styles.promotionContent__itemContent}>
      <Link to={`${verticalId}/${ftxId}`}>
        <div className={styles.promotionContent__imgContainer}>
          <img src={New} alt="New" className={styles.promotionContent__imgContainerNew} />
          <img src={image} alt="Promotion" className={styles.promotionContent__imgContainerImg} />
        </div>
      </Link>
      <Typography className={styles.promotionContent__itemTitle} variant="h5" component="div">
        {name}
      </Typography>

      <div className={styles.promotionContent__favContainer}>
        <Typography>
          {totalQuantity ? `${t('verticals.item.totalEdition')} ${totalQuantity}` : 'Single Item'}
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
  styles: any;
}
