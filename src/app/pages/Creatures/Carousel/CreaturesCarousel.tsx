import { useState } from 'react';
import { Typography, Grid } from '@material-ui/core';
import { carouselItems } from 'app/constants/creatures/carouselItems';
import styles from './CreaturesCarousel.module.scss';

export const CreaturesCarousel = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <div className={styles.carousel} id="carousel">
      <div className={styles.carousel__background}>
        <Typography component="div" variant="h4" className={styles.carousel__title}>
          {carouselItems[selectedItem].name}
        </Typography>
        <Typography className={styles.carousel__title}>{carouselItems[selectedItem].banner}</Typography>

        <div className={styles.carousel__info}>
          <div className={styles.carousel__infoImg}>
            <img src={carouselItems[selectedItem].src} alt="" />
          </div>

          <div className={styles.carousel__infoTextContainer}>
            <Typography gutterBottom className={styles.carousel__infoTextDescription}>
              {carouselItems[selectedItem].description}
            </Typography>
            <Typography className={styles.carousel__infoTextTitle}>DEFINING CHARACTERISTICS: </Typography>
            <Typography>{carouselItems[selectedItem].characteristics}</Typography>
            <Typography className={styles.carousel__infoTextTitle}>RARITY: </Typography>
            <Typography>{carouselItems[selectedItem].rarity}</Typography>
          </div>
        </div>

        <Grid container>
          {carouselItems.map(item => (
            <Grid
              item
              key={item.id}
              xs={12}
              sm={6}
              md={2}
              lg={2}
              className={
                item.id === selectedItem ? styles.carousel__listImg : styles.carousel__listImgOpacity
              }
            >
              <button onClick={() => setSelectedItem(item.id)}>
                <img src={item.src} alt="" />
              </button>
              <Typography gutterBottom>{item.name}</Typography>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
