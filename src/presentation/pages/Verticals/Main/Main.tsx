import { Button, Grid, Typography } from '@material-ui/core';
import AthletesFirst from 'app/assets/Athletes-1.png';
import AthletesSecond from 'app/assets/Athletes-2.png';
import AthletesThird from 'app/assets/Athletes-3.png';
import AthletesFourth from 'app/assets/Athletes-4.png';
import AthletesFifth from 'app/assets/Athletes-5.png';
import AthletesSixth from 'app/assets/Athletes-6.png';
import FantasyLeague from 'app/assets/VerticalPromotionFantasyLeague.png';
import { HallOfFame } from '../HallOfFame/HallOfFame';
import { Promotion } from '../Promotion/Promotion';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Main.module.scss';

export const Main = () => {
  const t = useTranslation();

  return (
    <>
      <div className={styles.mainContent__title}>
        <Typography component="div" variant="h5" className={styles.mainContent__titleFeatured}>
          {t('verticals.preTitle')}
        </Typography>
        <Typography component="div" variant="h2" className={styles.mainContent__titleIssuer}>
          {t('verticals.title')}
        </Typography>
        <div>
          <Button className={styles.mainContent__titleButton}>Explore Collection</Button>
        </div>
      </div>
      <Grid container className={styles.mainContent}>
        <Grid item md={2}>
          <img alt="" src={AthletesFirst} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2}>
          <img alt="" src={AthletesSecond} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2}>
          <img alt="" src={AthletesThird} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2}>
          <img alt="" src={AthletesFourth} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2}>
          <img alt="" src={AthletesFifth} className={styles.mainContent__img} />
        </Grid>
        <Grid item md={2}>
          <img alt="" src={AthletesSixth} className={styles.mainContent__img} />
        </Grid>
      </Grid>

      <HallOfFame />

      <div className={styles.mainContent__fantasyLeague}>
        <Promotion
          imgSrc={FantasyLeague}
          subtitle={t('verticals.fantasyLeague.title')}
          primaryText={t('verticals.fantasyLeague.primaryText')}
          secondaryText={t('verticals.fantasyLeague.secondaryText')}
          buttonText={t('verticals.fantasyLeague.actionButton')}
        />
      </div>
    </>
  );
};
