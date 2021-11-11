import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import New from 'app/assets/New.png';
import useTranslation from 'app/hooks/useTranslation';

export const Item = ({
  id,
  ftxId,
  name,
  series,
  totalQuantity,
  image,
  price,
  verticalId,
  styles,
}: ItemProps) => {
  const t = useTranslation();

  return (
    <div className={styles.mainContent__itemContent}>
      <Link to={`${verticalId}/${id}`}>
        <div className={styles.mainContent__imgContainer}>
          <img src={New} alt="New" className={styles.mainContent__imgContainerNew} />
          <img src={image} alt="Promotion" className={styles.mainContent__imgContainerImg} />
        </div>
      </Link>

      <Typography className={styles.mainContent__itemTitle} variant="h5" component="div">
        {series}
      </Typography>

      <div className={styles.mainContent__favContainer}>
        <Typography>
          {totalQuantity ? `${t('verticals.item.totalEdition')} ${totalQuantity}` : 'Single Item'}
        </Typography>
      </div>

      <div className={styles.mainContent__buyContainer}>
        <div>
          <Typography component="p">{t('verticals.item.price')}</Typography>
          <Typography variant="h5" component="p">
            {t('verticals.item.currency')} ${price}
          </Typography>
        </div>
        <div>
          <Button>
            <Link to={`${verticalId}/${id}`}>{t('verticals.item.button')}</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

interface ItemProps {
  id: string;
  ftxId: string;
  name: string;
  series: string;
  totalQuantity: number;
  price: number;
  image: string;
  verticalId?: string;
  styles: any;
}
