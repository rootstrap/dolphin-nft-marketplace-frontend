import { Button, Typography } from '@material-ui/core';
import { ReactComponent as SmallDiscord } from 'app/assets/SmallDiscord.svg';
import { socialMediaLinks } from 'app/constants/contants';
import CreaturesBackground from 'app/assets/CreaturesBackground.png';
import routesPaths from 'app/constants/routesPath';
import styles from './MainContent.module.scss';

export const MainContent = () => {
  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.mainContent__background}>
          <img src={CreaturesBackground} alt="" />
        </div>
        <div className={styles.mainContent__backgroundButton}>
          <Button size="large" variant="outlined" color="inherit">
            Explore Collection
          </Button>
        </div>
      </div>

      <div className={styles.legend}>
        <Typography variant="h5" className={styles.legend__header}>
          THE CREATURE CHRONICLES IS A MULTI-SEASON GRAPHIC EVENT, WOVEN THROUGH THE UNIVERSE, BUILT IN THE
          METAVERSE AND READY FOR EXPLORATION BY OUR COMMUNITY.
        </Typography>
        <br />
        <Typography variant="h5" className={styles.legend__header}>
          EXILED ALIENS IS THE FIRST CHAPTER ON THIS GALACTIC JOYRIDE.
        </Typography>
      </div>
    </>
  );
};
