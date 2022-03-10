import { Grid, Typography } from '@material-ui/core';
import ChrisMazdzer from 'app/assets/IRL/ChrisMazdzer.png';
import GusKenworthy from 'app/assets/IRL/GusKenworthy.png';
import JohnShuster from 'app/assets/IRL/JohnShuster.png';
import KendallCoyne from 'app/assets/IRL/KendallCoyne.png';
import TinaMaze from 'app/assets/IRL/TinaMaze.png';
import { dolphinServiceLinks } from 'app/constants/constants';
import useTranslation from 'app/hooks/useTranslation';
import styles from './IRLCollectibles.module.scss';

export const IRLCollectibles = () => {
  const t = useTranslation();

  return (
    <div className={styles.IRLCollectibles}>
      <Typography component="h2" variant="h2" gutterBottom>
        {t('heroletes.IRLCollectibles.title')}
      </Typography>
      <Typography variant="subtitle1" gutterBottom className={styles.IRLCollectibles__subtitle}>
        {t('heroletes.IRLCollectibles.teaser')}
      </Typography>
      <Grid container justifyContent="space-around" wrap="wrap">
        <Grid item xs={12} md={3} className={styles.IRLCollectibles__item}>
          <img src={ChrisMazdzer} alt="Chris Mazdzer" />
          <Typography>{t('heroletes.IRLCollectibles.chrisMazdzerTeaser')}</Typography>
          <Typography className={styles.IRLCollectibles__itemName}>Chris Mazdzer</Typography>
        </Grid>
        <Grid item xs={12} md={3} className={styles.IRLCollectibles__item}>
          <img src={JohnShuster} alt="John Shuster" />
          <Typography>
            <Typography>{t('heroletes.IRLCollectibles.johnShusterTeaser')}</Typography>
          </Typography>
          <Typography className={styles.IRLCollectibles__itemName}>John Shuster</Typography>
        </Grid>
        <Grid item xs={12} md={3} className={styles.IRLCollectibles__item}>
          <img src={KendallCoyne} alt="Kendall Coyne" />
          <Typography>{t('heroletes.IRLCollectibles.kendallCoyneTeaser')}</Typography>
          <Typography className={styles.IRLCollectibles__itemName}>Kendall Coyne Schofield</Typography>
        </Grid>
        <Grid item xs={12} md={3} className={styles.IRLCollectibles__item}>
          <img src={TinaMaze} alt="Tina Maze" />
          <Typography>{t('heroletes.IRLCollectibles.tinaMazeTeaser')}</Typography>
          <Typography className={styles.IRLCollectibles__itemName}>Tina Maze</Typography>
        </Grid>
        <Grid item xs={12} md={3} className={styles.IRLCollectibles__item}>
          <img src={GusKenworthy} alt="Gus Kenworthy" />
          <Typography>{t('heroletes.IRLCollectibles.gusKenworthyTeaser')}</Typography>
          <Typography className={styles.IRLCollectibles__itemName}>Gus Kenworthy</Typography>
        </Grid>
      </Grid>
      <Typography variant="subtitle1" className={styles.IRLCollectibles__rules}>
        {t('heroletes.IRLCollectibles.firstLegal')}
        <a href={dolphinServiceLinks.sweepstakesRules}>Official Rules</a>
        {t('heroletes.IRLCollectibles.secondLegal')}
      </Typography>
    </div>
  );
};
