import { useContext } from 'react';
import { Button, Grid } from '@material-ui/core';
import { ModalContext } from 'app/context/ModalContext';
import { Step } from './Step';
import First from 'app/assets/First.png';
import Second from 'app/assets/Second.png';
import Third from 'app/assets/Third.png';
import useTranslation from 'app/hooks/useTranslation';
import styles from './KnowHow.module.scss';
import { useAppSelector } from 'app/hooks/reduxHooks';

export const KnowHowContent = () => {
  const { setSignupModalIsOpen } = useContext(ModalContext);
  const { isAuthenticated } = useAppSelector(state => state.user);
  const t = useTranslation();
  return (
    <>
      <Grid className={styles.knowHowContent} container id="knowHow">
        <Grid className={styles.knowHowContent__item} item xs={6} md={4} lg={4}>
          <Step styles={styles} textContent={t('home.knowHow.first')} src={First} alt="First" />
        </Grid>
        <Grid className={styles.knowHowContent__item} item xs={6} md={4} lg={4}>
          <Step styles={styles} textContent={t('home.knowHow.second')} src={Second} alt="Second" />
        </Grid>
        <Grid className={styles.knowHowContent__item} item xs={12} md={4} lg={4}>
          <Step styles={styles} textContent={t('home.knowHow.third')} src={Third} alt="Third" />
        </Grid>
      </Grid>

      <Grid container justifyContent="center">
        <Grid item lg={5}></Grid>
        <Grid item lg={2}>
          {!isAuthenticated && (
            <Button fullWidth onClick={() => setSignupModalIsOpen(true)}>
              {t('home.knowHow.button')}
            </Button>
          )}
        </Grid>
        <Grid item lg={5}></Grid>
      </Grid>
    </>
  );
};
