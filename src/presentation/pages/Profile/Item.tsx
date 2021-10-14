import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useTranslation from 'app/hooks/useTranslation';

export const Item = ({ id, ftxId, name, totalQuantity, image, verticalId, styles }: ItemProps) => {
  const t = useTranslation();

  return (
    <div className={styles.myCollectionContent__itemContent}>
      <div className={styles.myCollectionContent__imgContainer}>
        <img src={image} alt="Promotion" className={styles.myCollectionContent__imgContainerImg} />
      </div>

      <Typography className={styles.myCollectionContent__itemTitle} variant="h5" component="div">
        {name}
      </Typography>

      <div className={styles.myCollectionContent__favContainer}>
        <Typography>
          {totalQuantity ? `${t('verticals.item.totalEdition')} ${totalQuantity}` : 'Single Item'}
        </Typography>
      </div>

      <div className={styles.promotionContent__buyContainer}>
        <div>
          <Button>
            <Link to={`${verticalId}/${ftxId}`}>{t('verticals.item.view')}</Link>
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
  image: string;
  verticalId?: string;
  styles: any;
}
