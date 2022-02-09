import { CarouselItem } from 'app/constants/heroletes/remarkablesCarousel';
import { dolphinServiceLinks, packIds } from 'app/constants/constants';
import { CarouselItemDescription } from './CarouselItemDescription';
import { CarouselItemImage } from './CarouselItemImage';
import { CarouselButtons } from './CarouselButtons';
import { useCarousel } from './useCarousel';
import { BuyNowButton } from '../BuyNowButton/BuyNowButton';
import { Checkbox, Typography } from '@material-ui/core';
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
          <div className={styles.carousel__buyCheckbox}>
            <Checkbox checked={isAgree} onChange={handleOnCheck} />
            <Typography variant="caption">
              To purchase I agree to the <a href={dolphinServiceLinks.privacyPolicy}>Privacy Policy</a> and{' '}
              <a href={dolphinServiceLinks.termOfService}>Terms of Service</a>
            </Typography>
          </div>

          <div className={styles.carousel__buyCheckbox}>
            <Checkbox checked={isEligible} onChange={handleAgreeSweepstakes} />
            <Typography variant="caption">
              I wish to enter the Heroletes Sweepstakes and agree to the{' '}
              <a href={dolphinServiceLinks.sweepstakesRules}>Official Rules</a>
            </Typography>
          </div>

          <BuyNowButton
            isUserAgree={isAgree}
            buttonText="Buy Now"
            className={styles.carousel__buyButton}
            nftsToBuy="common"
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
