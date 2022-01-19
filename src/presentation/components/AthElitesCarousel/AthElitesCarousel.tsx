import { CarouselItem } from 'app/constants/athletes/remarkablesCarousel';
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
          title={carouselItems[index].title}
          date={carouselItems[index].date}
          text={carouselItems[index].text}
          collectiblesPerPack={carouselItems[index].collectiblesPerPack}
          costPerPack={carouselItems[index].costPerPack}
        />

        {/* TODO: Enable when requested <CarouselItemImage tier={carouselItems[index].tier} image={carouselItems[index].image} /> */}
      </div>

      {areButtonsVisible && <CarouselButtons handleOnClick={handleOnClick} />}
    </>
  );
};

interface CarouselProps {
  carouselItems: CarouselItem[];
}
