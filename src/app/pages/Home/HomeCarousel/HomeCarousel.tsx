import React from 'react';
import { colors } from 'app/constants/constants';
import { Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { homeCarouselItems } from 'app/constants/common/homeCarouselItems';
import { useHomeCarousel } from './useHomeCarousel';
import styles from './HomeCarousel.module.scss';

export const HomeCarousel = () => {
  const { index } = useHomeCarousel();

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel__description}>
        <div>
          <div className={styles.carousel__title}>
            <Typography variant="h4">{homeCarouselItems[index].title}</Typography>
          </div>
          <div className={styles.carousel__text}>
            <Typography>{homeCarouselItems[index].text}</Typography>
          </div>
        </div>

        <div>
          <div className={styles.carousel__button}>
            {homeCarouselItems[index].link === '/creatures' ? (
              <a href={process.env.REACT_APP_CREATURES_URL}>
                <Button>See more →</Button>
              </a>
            ) : (
              <Link to={homeCarouselItems[index].link}>
                <Button>See more →</Button>
              </Link>
            )}
          </div>

          <div className={styles.carousel__markers}>
            {React.Children.toArray(
              homeCarouselItems.map((item, indexItem) => (
                <div
                  className={styles.carousel__markersItem}
                  style={indexItem === index ? { backgroundColor: colors.primary } : {}}
                ></div>
              ))
            )}
          </div>
        </div>
      </div>

      <div className={styles.carousel__image}>
        <img src={homeCarouselItems[index].img} alt={homeCarouselItems[index].title} />
      </div>
    </div>
  );
};
