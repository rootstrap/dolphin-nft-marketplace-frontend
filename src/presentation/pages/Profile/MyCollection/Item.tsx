import { useState } from 'react';
import { Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import styles from './MyCollection.module.scss';

export const Item = ({ id, name, totalQuantity, image, verticalId }: ItemProps) => {
  const t = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <div className={styles.list__itemContent} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <img src={image} alt="Promotion" className={styles.list__itemContentImg} />

      {isVisible && (
        <div className={styles.list__itemContentHidden}>
          <Typography className={styles.list__itemContentHiddenTitle} variant="h5" component="div">
            {name}
          </Typography>

          <div className={styles.list__favContainer}>
            <Typography>
              {totalQuantity ? `${t('verticals.item.totalEdition')} ${totalQuantity}` : 'Single Item'}
            </Typography>
          </div>
        </div>
      )}
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
