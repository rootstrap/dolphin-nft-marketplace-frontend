import { Button, Typography } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { nftPack } from 'app/interfaces/NFT/NFT';
import { BuyNowButton } from '../BuyNowButton/BuyNowButton';
import { carouselArrow } from './useCarousel';
import { CarouselMarker } from './CarouselMarker';
import styles from './AthElitesCarousel.module.scss';

export const CarouselItemImage = ({
  tier,
  image,
  index,
  isItemForSale,
  handleOnClick,
  lenght,
  isAgree,
  isEligible,
}: CarouselItemImageProps) => (
  <div className={styles.carousel__img}>
    <div className={styles.carousel__imgTitle}>
      <Typography variant="h4">{tier}</Typography>
    </div>

    <div className={styles.carousel__imgImage}>
      <Button
        size="large"
        variant="text"
        endIcon={<ArrowBackIos />}
        onClick={() => handleOnClick('back')}
        disabled={index === 0}
      ></Button>

      <img src={image} alt="" />

      <Button
        size="large"
        variant="text"
        endIcon={<ArrowForwardIos />}
        onClick={() => handleOnClick('forward')}
        disabled={index + 1 === lenght}
      ></Button>
    </div>

    <CarouselMarker lenght={lenght} index={index} />

    {isItemForSale && (
      <div className={styles.carousel__buy}>
        <BuyNowButton
          isUserAgree={isAgree}
          isUserEligible={isEligible}
          buttonText="Buy Now"
          className={styles.carousel__buyButton}
          nftsToBuy={tier}
        />
      </div>
    )}
  </div>
);

interface CarouselItemImageProps {
  tier: nftPack;
  image: string;
  index: number;
  isItemForSale: boolean;
  handleOnClick: (arrow: carouselArrow) => void;
  lenght: number;
  isAgree: boolean;
  isEligible: boolean;
}
