import { Grid } from '@material-ui/core';
import { Item } from './Item';
import { usePromotion } from './usePromotion';
import { Carousel } from 'infrastructure/components/Carousel/Carousel';
import styles from './Promotion.module.scss';

export const PromotionCarousel = () => {
  const { nfts } = usePromotion();

  return (
    <Grid container justifyContent="center" className={styles.promotionContent__carouselItems}>
      {nfts && (
        <Carousel show={2} infiniteLoop>
          {nfts.map(nft => (
            <Item
              id={nft.id}
              name={nft.name}
              totalQuantity={nft.totalQuantity}
              image={nft.imageUrl}
              price={nft.offerPrice}
              ftxId={nft.ftx_id}
              styles={styles}
            />
          ))}
        </Carousel>
      )}
    </Grid>
  );
};
