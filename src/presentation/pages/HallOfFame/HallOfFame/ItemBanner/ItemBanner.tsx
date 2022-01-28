import { Link, Typography } from '@material-ui/core';
import { Legends } from 'app/interfaces/HallOfFame/HallOfFame';
import styles from '../HallOfFame.module.scss';

export const ItemBanner = ({ setLegend, legend, image, selectedLegend }: ItemBannerProps) => (
  <div
    className={`${styles.hallOfFame__imgContainer} ${
      selectedLegend === legend ? styles.hallOfFame__selected : ''
    }`}
  >
    <Link
      component="button"
      onClick={() => setLegend((currentLegend: Legends) => (currentLegend !== legend ? legend : ''))}
    >
      <img src={image} alt={legend} className={styles.hallOfFame__imgContainerImg} />
      <Typography variant="h5" className={styles.hallOfFame__imgContainerText}>
        {legend}
      </Typography>
    </Link>
  </div>
);

interface ItemBannerProps {
  setLegend: React.Dispatch<React.SetStateAction<Legends>>;
  legend: Legends;
  image: string;
  selectedLegend: Legends;
}
