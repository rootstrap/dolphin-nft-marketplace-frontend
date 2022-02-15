import styles from './AthElitesCarousel.module.scss';

export const CarouselMarker = ({ index, lenght }: CarouselMarkerProps) => {
  const dotsToRender = Array.from(Array(lenght).keys());

  return (
    <div className={styles.carousel__imgMarker}>
      {dotsToRender.map(dot => (
        <div
          className={styles.carousel__imgMarkerDot}
          style={
            dot === index
              ? {
                  backgroundColor: 'black',
                }
              : {}
          }
        ></div>
      ))}
    </div>
  );
};

interface CarouselMarkerProps {
  index: number;
  lenght: number;
}
