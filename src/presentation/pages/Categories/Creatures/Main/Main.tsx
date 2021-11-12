import { Grid, Typography, Button } from '@material-ui/core';
import { useContext } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { socialMediaLinks } from 'app/constants/contants';
import { ReactComponent as Discord } from 'app/assets/Discord.svg';
import { ReactComponent as Instagram } from 'app/assets/Instagram.svg';
import { ReactComponent as Facebook } from 'app/assets/Facebook.svg';
import { ReactComponent as Twitter } from 'app/assets/Twitter.svg';
import First from 'app/assets/first_small.png';
import Second from 'app/assets/second_small.png';
import Third from 'app/assets/third_small.png';
import CreaturesTeaser from 'app/assets/creatures_teaser.jpg';
import styles from './MainContent.module.scss';
import useTranslation from 'app/hooks/useTranslation';

export const MainContent = () => {
  const t = useTranslation();
  const { setSignupModalIsOpen } = useContext(ModalContext);
  const { isAuthenticated } = useAppSelector(state => state.user);

  return (
    <Grid container className={styles.mainContent} justify="center">
      <Grid item xs={12} className={styles.mainContent__hero}>
        <Grid container className={styles.mainContent__hero__info}></Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h4" className={styles.mainContent__hero__comingSoon}>
          {t('creatures.comingsoon')}
        </Typography>
      </Grid>
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
                <a href={socialMediaLinks.discord} target="_blank">
                  <Button fullWidth>{t('creatures.discord')}</Button>
                </a>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={11} md={3}>
            <img alt="teaser" src={CreaturesTeaser} className={styles.mainContent__teaser} />
          </Grid>
        </Grid>
      </Grid>

      <Grid container className={styles.mainContent__social}>
        <Grid item lg={2} className={styles.mainContent__socialItem}></Grid>
        <Grid item lg={2} className={styles.mainContent__socialItem}>
          <a href={socialMediaLinks.facebook} target="_blank">
            <Facebook />
          </a>
        </Grid>
        <Grid item lg={2} className={styles.mainContent__socialItem}>
          <a href={socialMediaLinks.twitter} target="_blank">
            <Twitter />
          </a>
        </Grid>
        <Grid item lg={2} className={styles.mainContent__socialItem}>
          <a href={socialMediaLinks.instagram} target="_blank">
            <Instagram />
          </a>
        </Grid>
        <Grid item lg={2} className={styles.mainContent__socialItem}>
          <a href={socialMediaLinks.discord} target="_blank">
            <Discord />
          </a>
        </Grid>
        <Grid item lg={2} className={styles.mainContent__socialItem}></Grid>
      </Grid>
    </Grid>
  );
};
