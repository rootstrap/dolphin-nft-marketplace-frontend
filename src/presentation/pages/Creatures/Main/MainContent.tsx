import { Button, Typography, Link } from '@material-ui/core';
import { ReactComponent as SmallDiscord } from 'app/assets/SmallDiscord.svg';
import { socialMediaLinks, whitelist } from 'app/constants/contants';
import CreaturesBackground from 'app/assets/CreaturesBackground.png';
import routesPaths from 'app/constants/routesPath';
import { BuyNowButton } from 'presentation/components/BuyNowButton/BuyNowButton';
import { useAppSelector } from 'app/hooks/reduxHooks';
import styles from './MainContent.module.scss';
import useTranslation from 'app/hooks/useTranslation';

export const MainContent = () => {
  const t = useTranslation();
  const { isAuthenticated, user } = useAppSelector(state => state.user);

  return (
    <>
      <div className={styles.mainContent}>
        <div className={styles.mainContent__background}>
          <img src={CreaturesBackground} alt="" />
        </div>
        <div className={styles.mainContent__backgroundButton}>
          {isAuthenticated && whitelist.find(email => email === user.email) ? (
            <BuyNowButton />
          ) : (
            <Link className={styles.mainContent__link} href={routesPaths.creaturesWhitelist}>
              <Button size="large" variant="outlined" color="inherit">
                {t('creatures.exploreCollectionBtn')}
              </Button>
            </Link>
          )}
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
      <div className={styles.video}>
        <iframe
          className={styles.video__content}
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          src="https://player.vimeo.com/video/659708054?h=36212d5d68&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0"
          title="CreatureChronicles"
        />
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
          <a href={socialMediaLinks.discord} target="_blank">
            <Button size="large" variant="outlined" color="inherit">
              <div className={styles.discord__buttonContent}>
                Join now
                <div>
                  <SmallDiscord />
                </div>
              </div>
            </Button>
          </a>
        </div>
      </div>
    </>
  );
};
