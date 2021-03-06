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
        <Grid item xs={12} md={4} lg={4}>
          <div className={styles.knowHowContent__item}>
            <img src={Second} alt="Second" />
            <p className={styles.knowHowContent__itemText}>{t('home.knowHow.second')}</p>
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <div className={styles.knowHowContent__item}>
            <img src={Third} alt="Third" />
            <p className={styles.knowHowContent__itemText}>{t('home.knowHow.third')}</p>
          </div>
        </Grid>
      </Grid>

      {!isAuthenticated && (
        <div className={styles.button}>
          <Button fullWidth onClick={() => setSignupModalIsOpen(true)}>
            {t('home.knowHow.button')}
          </Button>
        </div>
      )}

      <div className={styles.video}>
        <iframe
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className={styles.video__content}
          frameBorder={0}
          src="https://player.vimeo.com/video/671987120?h=b47abf0dec&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;title=0&amp;byline=0&amp;portrait=0"
          title="dolphinMarketplace"
        ></iframe>
      </div>
    </>
  );
};
