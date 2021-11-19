import { Typography } from '@material-ui/core';
import FirstPerk from 'app/assets/FirstPerk.png';
import SecondPerk from 'app/assets/SecondPerk.png';
import ThirdPerk from 'app/assets/ThirdPerk.png';
import FourthPerk from 'app/assets/FourthPerk.png';
import styles from './Perks.module.scss';

export const Perks = () => {
  return (
    <div className={styles.perks}>
      <Typography gutterBottom variant="h5" className={styles.perks__title}>
        CREATURE PERKS
      </Typography>
      <Typography gutterBottom className={styles.perks__text}>
        Owning an avatar is mission critical to achieving full immersion into our expanding digital universe.
      </Typography>
      <img src={FirstPerk} alt="" />
      <Typography gutterBottom className={styles.perks__text}>
        Access to value-add NFT avatar creations and collaborations between Anthony Francisco and other master
        creators, celebrities, designers and visionaries.
      </Typography>
      <img src={SecondPerk} alt="" />
      <Typography gutterBottom className={styles.perks__text}>
        Invitations to contests designed to test skills and reward the righteous with real world experiences
        that allow you to visit the “stars.”
      </Typography>
      <img src={ThirdPerk} alt="" />
      <Typography gutterBottom className={styles.perks__text}>
        The story continues for future seasons with avatar holders receiving priority status for additional
        drops and token crafting opportunities.
      </Typography>
      <img src={FourthPerk} alt="" />
      <Typography className={styles.perks__text}>
        On Earth merchandise and experiences of all kinds will be developed for NFT holders only.
      </Typography>
    </div>
  );
};
