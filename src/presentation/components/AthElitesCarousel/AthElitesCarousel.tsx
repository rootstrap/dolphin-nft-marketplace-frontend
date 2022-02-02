import { Button } from '@material-ui/core';
import { CarouselItem } from 'app/constants/heroletes/remarkablesCarousel';
import { CarouselItemDescription } from './CarouselItemDescription';
import { CarouselItemImage } from './CarouselItemImage';
import { CarouselButtons } from './CarouselButtons';
import { useCarousel } from './useCarousel';
import styles from './AthElitesCarousel.module.scss';

export const AthElitesCarousel = ({ carouselItems }: CarouselProps) => {
  const { index, handleOnClick, areButtonsVisible } = useCarousel(carouselItems);

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

      {areButtonsVisible ? (
        <CarouselButtons handleOnClick={handleOnClick} />
      ) : (
        <div className={styles.carousel__buttons}>
          <Button variant="contained" size="large" fullWidth>
            Buy Now
          </Button>
        </div>
      )}
    </>
  );
};

interface CarouselProps {
  carouselItems: CarouselItem[];
}
