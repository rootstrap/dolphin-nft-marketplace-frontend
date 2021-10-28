import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import New from 'app/assets/New.png';
import useTranslation from 'app/hooks/useTranslation';
import { useState } from 'react';

export const Item = ({ id, name, totalQuantity, image, verticalId, styles }: ItemProps) => {
  const t = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const handleMouseEnter = () => setIsVisible(true);
  const handleMouseLeave = () => setIsVisible(false);

  return (
    <Link to={`${verticalId}/${id}`}>
      <div
        className={styles.promotionContent__itemContent}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src={image} alt="Promotion" className={styles.promotionContent__itemContentImg} />

        {isVisible && (
          <div className={styles.promotionContent__itemContentHidden}>
            <Typography
              className={styles.promotionContent__itemContentHiddenTitle}
              variant="h5"
              component="div"
            >
              {name}
            </Typography>

            <div className={styles.promotionContent__favContainer}>
              <Typography>
                {totalQuantity ? `${t('verticals.item.totalEdition')} ${totalQuantity}` : 'Single Item'}
              </Typography>
            </div>
          </div>
        )}
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
  styles: any;
}
