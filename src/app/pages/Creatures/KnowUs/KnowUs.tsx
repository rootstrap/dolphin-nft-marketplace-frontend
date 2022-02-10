import { Typography } from '@material-ui/core';
import { ReactComponent as Jeroglificos } from 'app/assets/Jeroglificos.svg';
import styles from './KnowUs.module.scss';

export const KnowUs = () => {
  return (
    <div className={styles.knowUs}>
      <Typography variant="h5" className={styles.knowUs__textTitle}>
        WHO ARE
      </Typography>
      <Jeroglificos />
      <Typography className={styles.knowUs__textDescription}>
        From the mind and pen of former Marvel visionary concept artist Anthony Francisco, Creature
        Chronicles: Exiled Aliens begins with 10,000 hand drawn avatars representing an ancient race of rare
        beings. Divided between a pre-sale and public sale, these NFT avatars are broken into an alien
        hierarchy, assigned traits, randomly generated, and revealed to the world sometime after the Geminids
        Meteor Shower.
      </Typography>
    </div>
  );
};
