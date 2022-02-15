import { CarouselItem } from 'app/constants/heroletes/remarkablesCarousel';
import { dolphinServiceLinks, packIds } from 'app/constants/constants';
import { CarouselItemDescription } from './CarouselItemDescription';
import { CarouselItemImage } from './CarouselItemImage';
import { useCarousel } from './useCarousel';
import { Typography } from '@material-ui/core';
import { CarouselCheckboxes } from './CarouselCheckboxes';
import useTranslation from 'app/hooks/useTranslation';
import styles from './AthElitesCarousel.module.scss';

export const AthElitesCarousel = ({ carouselItems }: CarouselProps) => {
  const { handleAgreeSweepstakes, handleOnCheck, handleOnClick, index, isAgree, isEligible } =
    useCarousel(carouselItems);

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
          isItemForSale={carouselItems[index].isPackForSale}
          handleOnClick={handleOnClick}
          lenght={carouselItems.length}
          isAgree={isAgree}
          isEligible={isEligible}
        />
      </div>

      <CarouselCheckboxes
        handleAgreeSweepstakes={handleAgreeSweepstakes}
        handleOnCheck={handleOnCheck}
        isAgree={isAgree}
        isEligible={isEligible}
      />

      <div className={styles.carousel__article}>
        <Typography variant="body2">
          {t('heroletes.carousel.firstArticle')}
          <a href={dolphinServiceLinks.winterSportsRules} target="_blank">
            {' '}
            Sweepstakes-Official-Rules
          </a>
          . {t('heroletes.carousel.secondArticle')}
        </Typography>
      </div>
    </>
  );
};

interface CarouselProps {
  carouselItems: CarouselItem[];
}
