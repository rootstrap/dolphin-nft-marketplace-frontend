import { Grid, Link, Typography } from '@material-ui/core';
import { Legends } from 'app/interfaces/HallOfFame/HallOfFame';
import styles from '../HallOfFame.module.scss';

export const ItemBanner = ({ setLegend, legend, image, selectedLegend }: ItemBannerProps) => (
  <Grid item>
    <Link
      component="button"
      onClick={() => setLegend((currentLegend: Legends) => (currentLegend !== legend ? legend : ''))}
    >
      <div className={styles.hallOfFame__itemImgContainer}>
        <div className={`${styles.hallOfFame__imgContainer}${selectedLegend === legend ? 'Selected' : ''}`}>
          <img src={image} alt={legend} className={styles.hallOfFame__imgContainerImg} />
          <Typography className={styles.hallOfFame__imgContainerText}>{legend}</Typography>
        </div>
      </div>
    </Link>
  </Grid>
);

interface ItemBannerProps {
  setLegend: React.Dispatch<React.SetStateAction<Legends>>;
  legend: Legends;
  image: string;
  selectedLegend: Legends;
}
