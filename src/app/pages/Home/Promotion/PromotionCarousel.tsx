import { Grid } from '@material-ui/core';
import { Item } from './Item';
import { usePromotion } from './usePromotion';
import { Carousel } from 'app/components/Carousel/Carousel';
import styles from './Promotion.module.scss';
import { useResponsive } from 'app/hooks/useResponsive';

export const PromotionCarousel = () => {
  const { isMobileView, isSmallDeviceView } = useResponsive();
  const { nfts } = usePromotion();
  const itemsToShow = isMobileView || isSmallDeviceView ? 1 : 3;

  return (
    <Grid container justifyContent="center" className={styles.promotionContent__carouselItems}>
      {nfts && (
        <Carousel show={itemsToShow}>
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
