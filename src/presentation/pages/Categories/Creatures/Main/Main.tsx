import { Grid, Typography, Button } from '@material-ui/core';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ModalContext } from 'app/context/ModalContext';
import { socialMediaLinks } from 'app/constants/contants';
import styles from './MainContent.module.scss';
import CreaturesDesc from 'app/assets/creatures_desc.png';
import useTranslation from 'app/hooks/useTranslation';
import First from 'app/assets/first_small.png';
import Second from 'app/assets/second_small.png';
import Third from 'app/assets/third_small.png';
import Fourth from 'app/assets/fourth_small.png';
import Calendar from 'app/assets/calendar.png';
import CreaturesTeaser from 'app/assets/creatures_teaser.jpg';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { withRouter } from 'react-router';

export const MainContent = () => {
  const t = useTranslation();
  const { setSignupModalIsOpen } = useContext(ModalContext);
  const { isAuthenticated } = useAppSelector(state => state.user);
  const history = useHistory();

  const redirectDiscord = () => {
    history.push(socialMediaLinks.discord);
  };

  return (
    <Grid container className={styles.mainContent} justify="center">
      <Grid item xs={12} className={styles.mainContent__hero}>
        <Grid container className={styles.mainContent__hero__info}>
          {/*<Typography className={styles.mainContent__hero__mainTitle} variant="h5" component="div">
            {t('creatures.mainTitle')}
          </Typography>
          <Typography variant="h2" className={styles.mainContent__hero__title}>
            {t('creatures.title')}
          </Typography>
          <img src={Calendar} alt="calendar" />
          <Typography variant="subtitle1" className={styles.mainContent__hero__dropDate}>
            {t('creatures.dropDate')}
          </Typography>*/}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={styles.mainContent__hero__comingSoon}>
          {t('creatures.comingsoon')}
        </Typography>
      </Grid>
      {/*
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
      */}
      <Grid item xs={12}>
        <Grid container className={styles.mainContent__stepsContent}>
          <Grid item xs={12} md={1}></Grid>
          <Grid item xs={12} md={5} className={styles.mainContent__stepsContent__stepsDesc}>
            <Grid container>
              <Grid item xs={12} className={styles.mainContent__stepsContent__stepsDesc__title}>
                <Typography variant="h4">{t('creatures.stepsDesc')}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={1}>
                    <img src={First} alt={First} />
                  </Grid>
                  <Grid item xs={11} className={styles.mainContent__stepsContent__stepsDesc__text}>
                    <Typography>{t('creatures.steps1')}</Typography>
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
                </Grid>
              </Grid>
              <Grid item xs={12} md={6} className={styles.mainContent__stepsContent__stepsCTA}>
                {!isAuthenticated && (
                  <Button fullWidth onClick={() => setSignupModalIsOpen(true)}>
                    {t('creatures.sign_up')}
                  </Button>
                )}
                <Button fullWidth onClick={redirectDiscord}>
                  {t('creatures.discord')}
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11} md={3}>
            <img alt="teaser" src={CreaturesTeaser} className={styles.mainContent__teaser} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
