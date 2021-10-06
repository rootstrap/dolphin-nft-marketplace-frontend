import { Button, Typography } from '@material-ui/core';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import New from 'app/assets/New.png';
import useTranslation from 'app/hooks/useTranslation';

export const Item = ({ id, name, number, image, price, verticalId, styles }: ItemProps) => {
  const t = useTranslation();

  return (
    <div className={styles.mainContent__itemContent}>
      <div className={styles.mainContent__imgContainer}>
        <img src={New} alt="New" className={styles.mainContent__imgContainerNew} />
        <img src={image} alt="Promotion" className={styles.mainContent__imgContainerImg} />
      </div>

      <Typography className={styles.mainContent__itemTitle} variant="h5" component="div">
        {name}
      </Typography>

      <div className={styles.mainContent__favContainer}>
        <Typography>#{number}</Typography>
        <FavoriteBorderOutlined color="secondary" />
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
  name: string;
  number: number;
  price: number;
  image: string;
  verticalId?: string;
  styles: any;
}
