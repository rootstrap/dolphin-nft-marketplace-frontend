import { Typography } from '@material-ui/core';
import { FavoriteBorderOutlined } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import routesPaths from 'app/constants/routesPath';
import PromotionItem from 'app/assets/Promotion.png';
import New from 'app/assets/New.png';

export const Item = ({ styles }: ItemProps) => {
  return (
    <div className={styles.promotionContent__itemContent}>
      <div className={styles.promotionContent__itemImg}>
        <img src={New} alt="New" className={styles.promotionContent__itemNew} />
        <img src={PromotionItem} alt="Promotion" />
      </div>
      <div className={styles.promotionContent__itemTitle}>
        <Typography variant="h5">NFT Name here</Typography>
        <FavoriteBorderOutlined color="secondary" />
      </div>

      <div>
        {/* TODO: Placeholders to be replaced in the future  */}
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...
        </Typography>
      </div>
      <Link to={routesPaths.index}>{'See more >>'}</Link>
    </div>
  );
};

interface ItemProps {
  styles: any;
}
