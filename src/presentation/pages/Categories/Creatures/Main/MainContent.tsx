import { Button, Typography } from '@material-ui/core';
import { ReactComponent as SmallDiscord } from 'app/assets/SmallDiscord.svg';
import { socialMediaLinks } from '../../../../../app/constants/contants';
import CreaturesBackground from 'app/assets/CreaturesBackground.png';
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

      <div className={styles.description}>
        <Typography gutterBottom variant="subtitle1" className={styles.description__text}>
          By 2051, space exploration has become a quadrillion SOL industry. Governments and the elite
          recklessly race towards the edge of our universe yearning for the stars to speak their secrets.
        </Typography>
        <br />
        <Typography gutterBottom variant="subtitle1" className={styles.description__text}>
          {' '}
          A ship of tourists has disappeared. The passengers ripped from our world by an event horizon and
          sling shot through an eternal storm that obliterated their vessel.
        </Typography>
        <br />
        <Typography gutterBottom variant="subtitle1" className={styles.description__text}>
          They awake aboard an unknown station, surrounded by an unknown presence.
        </Typography>
        <br />
        <Typography gutterBottom variant="subtitle1" className={styles.description__text}>
          The question, the one they whispered to themselves all those years ago before rocketing off Earth,
          finally has an answer. We were never alone.
        </Typography>
      </div>

      <div className={styles.discord}>
        <Typography variant="h5" className={styles.discord__text}>
          TRANSMISSIONS BEING RELAYED TO DISCORD
        </Typography>

        <div className={styles.discord__button}>
          <Button size="large" variant="outlined" color="inherit">
            <div className={styles.discord__buttonContent}>
              <a href={socialMediaLinks.discord} target="_blank">
                Join now
              </a>
              <div>
                <SmallDiscord />
              </div>
            </div>
          </Button>
        </div>
      </div>
    </>
  );
};
