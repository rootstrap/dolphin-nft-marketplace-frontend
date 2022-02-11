import { CarouselItem } from 'app/constants/heroletes/remarkablesCarousel';
import { dolphinServiceLinks, packIds } from 'app/constants/constants';
import { CarouselItemDescription } from './CarouselItemDescription';
import { CarouselItemImage } from './CarouselItemImage';
import { CarouselButtons } from './CarouselButtons';
import { CarouselCheckboxes } from './CarouselCheckboxes';
import { useCarousel } from './useCarousel';
import { BuyNowButton } from '../BuyNowButton/BuyNowButton';
import { Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import styles from './AthElitesCarousel.module.scss';

export const AthElitesCarousel = ({ carouselItems }: CarouselProps) => {
  const {
    areButtonsVisible,
    handleAgreeSweepstakes,
    handleOnCheck,
    handleOnClick,
    index,
    isAgree,
    isEligible,
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

        <CarouselItemImage tier={carouselItems[index].tier} image={carouselItems[index].image} />
      </div>

      {areButtonsVisible && (
        <CarouselButtons handleOnClick={handleOnClick} index={index} lenght={carouselItems.length} />
      )}

      {carouselItems[index].isPackForSale && (
        <div className={styles.carousel__buy}>
          <CarouselCheckboxes
            handleAgreeSweepstakes={handleAgreeSweepstakes}
            handleOnCheck={handleOnCheck}
            isAgree={isAgree}
            isEligible={isEligible}
          />
          <BuyNowButton
            isUserAgree={isAgree}
            isUserEligible={isEligible}
            buttonText="Buy Now"
            className={styles.carousel__buyButton}
            nftsToBuy={carouselItems[index].tier}
            packId={packIds.common}
          />
        </div>
      )}
      <div className={styles.carousel__article}>
        <Typography variant="body2">
          {t('heroletes.carousel.firstArticle')}
          <a href={dolphinServiceLinks.winterSportsRules}> Sweepstakes-Official-Rules</a>.{' '}
          {t('heroletes.carousel.secondArticle')}
        </Typography>
      </div>
    </>
  );
};

interface CarouselProps {
  carouselItems: CarouselItem[];
}
