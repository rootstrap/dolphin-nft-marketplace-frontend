import { useContext } from 'react';
import { Button, Grid } from '@material-ui/core';
import { ModalContext } from 'app/context/ModalContext';
import { useAppSelector } from 'app/hooks/reduxHooks';
import First from 'app/assets/First.png';
import Second from 'app/assets/Second.png';
import Third from 'app/assets/Third.png';
import useTranslation from 'app/hooks/useTranslation';
import styles from './KnowHow.module.scss';

export const KnowHowContent = () => {
  const { setSignupModalIsOpen } = useContext(ModalContext);
  const { isAuthenticated } = useAppSelector(state => state.user);
  const t = useTranslation();
  return (
    <>
      <Grid className={styles.knowHowContent} container id="knowHow">
        <Grid item xs={12} md={4} lg={4}>
          <div className={styles.knowHowContent__item}>
            <img src={First} alt="First" />
            <p className={styles.knowHowContent__itemText}>{t('home.knowHow.first')}</p>
          </div>
        </Grid>
        <Grid className={styles.knowHowContent__item} item xs={12} md={4} lg={4}>
          <img src={Second} alt="Second" />
          <p className={styles.knowHowContent__itemText}>{t('home.knowHow.second')}</p>
        </Grid>
        <Grid className={styles.knowHowContent__item} item xs={12} md={4} lg={4}>
          <img src={Third} alt="Third" />
          <p className={styles.knowHowContent__itemText}>{t('home.knowHow.third')}</p>
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
