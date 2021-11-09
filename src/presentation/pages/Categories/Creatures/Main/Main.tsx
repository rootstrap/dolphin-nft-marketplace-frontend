import { Grid, Typography, Button } from '@material-ui/core';
import { useContext } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import styles from './MainContent.module.scss';
import CreaturesDesc from 'app/assets/creatures_desc.png';
import useTranslation from 'app/hooks/useTranslation';
import First from 'app/assets/first_small.png';
import Second from 'app/assets/second_small.png';
import Third from 'app/assets/third_small.png';
import Fourth from 'app/assets/fourth_small.png';
import Calendar from 'app/assets/calendar.png';
import CreaturesTeaser from 'app/assets/creatures_teaser.png';
import { useAppSelector } from 'app/hooks/reduxHooks';

export const MainContent = () => {
  const t = useTranslation();
  const { setSignupModalIsOpen } = useContext(ModalContext);
  const { isAuthenticated } = useAppSelector(state => state.user);
  return (
    <Grid container className={styles.mainContent}>
      <Grid item xs={12} className={styles.mainContent__hero}>
        <Grid container className={styles.mainContent__hero__info}>
          <Grid item xs={1} md={4}></Grid>
          <Grid item xs={11} md={4}>
            <Typography className={styles.mainContent__hero__mainTitle} variant="h5" component="div">
              {t('creatures.mainTitle')}
            </Typography>
            <Typography variant="h2" className={styles.mainContent__hero__title}>
              {t('creatures.title')}
            </Typography>
            <img src={Calendar} alt="calendar" />
            <Typography variant="subtitle1" className={styles.mainContent__hero__dropDate}>
              {t('creatures.dropDate')}
            </Typography>
          </Grid>
          <Grid item xs={1} md={4}></Grid>
          <Grid item xs={12}>
            <Typography variant="h4" className={styles.mainContent__hero__comingSoon}>
              {t('creatures.comingsoon')}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={styles.mainContent__descContent} spacing={4}>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={4} alignItems="center">
            <img alt="creatures" src={CreaturesDesc} className={styles.mainContent__descContent__img} />
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1">{t('creatures.description1')}</Typography>
          </Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="subtitle1">{t('creatures.description2')}</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container className={styles.mainContent__stepsContent}>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h4" className={styles.mainContent__stepsContent__stepsDesc}>
              {t('creatures.stepsDesc')}
            </Typography>
            <Grid container>
              <Grid item xs={1}>
                <img src={First} alt={First} />
              </Grid>
              <Grid item xs={11}>
                <Typography className={styles.mainContent__stepsContent__stepsDesc__text}>
                  {t('creatures.steps1')}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <img src={Second} alt={Second} />
              </Grid>
              <Grid item xs={11}>
                <Typography className={styles.mainContent__stepsContent__stepsDesc__text}>
                  {t('creatures.steps2')}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <img src={Third} alt={Third} />
              </Grid>
              <Grid item xs={11}>
                <Typography className={styles.mainContent__stepsContent__stepsDesc__text}>
                  {t('creatures.steps3')}
                </Typography>
              </Grid>
              <Grid item xs={1}>
                <img src={Fourth} alt={Fourth} />
              </Grid>
              <Grid item xs={11}>
                <Typography className={styles.mainContent__stepsContent__stepsDesc__text}>
                  {t('creatures.steps4')}
                </Typography>
              </Grid>
              <Grid item xs={12} md={10}>
                {!isAuthenticated && (
                  <Button
                    fullWidth
                    className={styles.mainContent__stepsContent__stepsCTA}
                    onClick={() => setSignupModalIsOpen(true)}
                  >
                    {t('creatures.sign_up')}
                  </Button>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11} md={4}>
            <img alt="teaser" src={CreaturesTeaser} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
