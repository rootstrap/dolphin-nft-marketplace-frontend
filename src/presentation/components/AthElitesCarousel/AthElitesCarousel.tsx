import { CarouselItem, packIds } from 'app/constants/heroletes/remarkablesCarousel';
import { CarouselItemDescription } from './CarouselItemDescription';
import { CarouselItemImage } from './CarouselItemImage';
import { CarouselButtons } from './CarouselButtons';
import { useCarousel } from './useCarousel';
import { BuyNowButton } from '../BuyNowButton/BuyNowButton';
import { useAppSelector } from 'app/hooks/reduxHooks';
import styles from './AthElitesCarousel.module.scss';

export const AthElitesCarousel = ({ carouselItems }: CarouselProps) => {
  const { index, handleOnClick, areButtonsVisible } = useCarousel(carouselItems);
  const { isAuthenticated } = useAppSelector(state => state.user);

  return (
    <>
      <div className={styles.carousel} id="athelites">
        <CarouselItemDescription
          collectiblesPerPack={carouselItems[index].collectiblesPerPack}
          costPerPack={carouselItems[index].costPerPack}
          date={carouselItems[index].date}
          price={carouselItems[index].price}
          text={carouselItems[index].text}
          title={carouselItems[index].title}
        />

        <CarouselItemImage tier={carouselItems[index].tier} image={carouselItems[index].image} />
      </div>

      {areButtonsVisible && <CarouselButtons handleOnClick={handleOnClick} />}

      {isAuthenticated && (
        <div className={styles.carousel__buy}>
          <BuyNowButton
            buttonText="Buy Now"
            className={styles.carousel__buyButton}
            nftsToBuy="common"
            packId={packIds.common}
          />
        </div>
      )}
    </>
  );
};

interface CarouselProps {
  carouselItems: CarouselItem[];
}
