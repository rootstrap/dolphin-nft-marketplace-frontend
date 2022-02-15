import { CarouselItem } from 'app/constants/heroletes/remarkablesCarousel';
import { CarouselItemDescription } from './CarouselItemDescription';
import { CarouselItemImage } from './CarouselItemImage';
import { useCarousel } from './useCarousel';
import { CarouselCheckboxes } from './CarouselCheckboxes';
import useTranslation from 'app/hooks/useTranslation';
import styles from './AthElitesCarousel.module.scss';

export const AthElitesCarousel = ({ carouselItems }: CarouselProps) => {
  const {
    handleAgreeSweepstakes,
    handleOnCheck,
    handleOnClick,
    index,
    isAgree,
    isCheckboxesOpen,
    isEligible,
    handleCloseCheckboxes,
    handleOpenCheckboxes,
  } = useCarousel(carouselItems);

  const t = useTranslation();

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

        <CarouselItemImage
          tier={carouselItems[index].tier}
          image={carouselItems[index].image}
          index={index}
          handleOnClick={handleOnClick}
          length={carouselItems.length}
          handleOpenCheckboxes={handleOpenCheckboxes}
          isItemForSale={carouselItems[index].isPackForSale}
        />

        <CarouselCheckboxes
          handleAgreeSweepstakes={handleAgreeSweepstakes}
          handleClose={handleCloseCheckboxes}
          handleOnCheck={handleOnCheck}
          isAgree={isAgree}
          isEligible={isEligible}
          isOpen={isCheckboxesOpen}
          isItemForSale={carouselItems[index].isPackForSale}
          tier={carouselItems[index].tier}
        />
      </div>
    </>
  );
};

interface CarouselProps {
  carouselItems: CarouselItem[];
}
