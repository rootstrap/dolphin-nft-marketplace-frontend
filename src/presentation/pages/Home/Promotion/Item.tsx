import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import routesPaths from 'app/constants/routesPath';
import useTranslation from 'app/hooks/useTranslation';
import New from 'app/assets/New.png';

export const Item = ({ id, ftxId, name, totalQuantity, image, price, verticalId, styles }: ItemProps) => {
  const t = useTranslation();

  return (
    <div className={styles.promotionContent__itemContent}>
      <div className={styles.promotionContent__imgContainer}>
        <img src={New} alt="New" className={styles.promotionContent__imgContainerNew} />
        <img src={image} alt="Promotion" className={styles.promotionContent__imgContainerImg} />
      </div>

      <Typography className={styles.promotionContent__itemTitle} variant="h5" component="div">
        {name}
      </Typography>

      <div className={styles.promotionContent__favContainer}>
        <Typography>
          {totalQuantity ? `${t('verticals.item.totalEdition')} ${totalQuantity}` : 'Single Item'}
        </Typography>
      </div>

      <div className={styles.promotionContent__buyContainer}>
        <div>
          <Typography component="p">{t('verticals.item.price')}</Typography>
          <Typography variant="h5" component="p">
            {t('verticals.item.currency')} ${price}
          </Typography>
        </div>
        <div>
          <Button>
            <Link to={`${verticalId}/${ftxId}`}>{t('verticals.item.button')}</Link>
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
  totalQuantity: number;
  price: number;
  image: string;
  verticalId?: string;
  styles: any;
}
