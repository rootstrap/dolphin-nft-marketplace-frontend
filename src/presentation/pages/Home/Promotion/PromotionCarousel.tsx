import { Grid } from '@material-ui/core';
import { Item } from './Item';
import { usePromotion } from './usePromotion';
import { NFT } from 'app/interfaces/NFT/NFT';
import { Arrow } from 'infrastructure/components/Arrow/Arrow';
import styles from './Promotion.module.scss';

export const PromotionCarousel = () => {
  const { carouselContent, handleOnClick } = usePromotion();

  return (
    <Grid container justifyContent="center" className={styles.promotionContent__carouselItems}>
      {carouselContent && (
        <>
          <Arrow handleOnClick={() => handleOnClick('left')} direction="left" />
          {carouselContent.map((item: NFT) => (
            <Grid item xs={12} md={5} lg={5} key={item.id}>
              <Item
                styles={styles}
                id={item.id}
                name={item.name}
                totalQuantity={item.totalQuantity}
                image={item.imageUrl}
                price={item.offerPrice}
                ftxId={item.ftx_id}
              />
            </Grid>
          ))}
          <Arrow handleOnClick={() => handleOnClick('right')} direction="right" />
        </>
      )}
    </Grid>
  );
};
