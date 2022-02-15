import { Button, Typography } from '@material-ui/core';
import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons';
import { carouselArrow } from './useCarousel';
import { CarouselMarker } from './CarouselMarker';
import { nftPack } from 'app/interfaces/NFT/NFT';
import styles from './AthElitesCarousel.module.scss';

export const CarouselItemImage = ({
  tier,
  image,
  index,
  handleOnClick,
  handleOpenCheckboxes,
  length,
  isItemForSale,
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
        disabled={index + 1 === length}
      ></Button>
    </div>

    <CarouselMarker lenght={length} index={index} />

    {isItemForSale && (
      <Button fullWidth variant="contained" onClick={handleOpenCheckboxes}>
        Buy Now
      </Button>
    )}
  </div>
);

interface CarouselItemImageProps {
  image: string;
  index: number;
  handleOnClick: (arrow: carouselArrow) => void;
  handleOpenCheckboxes: () => void;
  length: number;
  tier: nftPack;
  isItemForSale: boolean;
}
