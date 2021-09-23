import { Button, Grid, Typography } from '@material-ui/core';
import { ReactComponent as DolphinLogo } from '../../../app/assets/Dolphin_Ball.svg';
import { FavoriteBorderOutlined, PermIdentityOutlined } from '@material-ui/icons';
import { useAppSelector } from '../../../app/hooks/reduxHooks';
import useTranslation from '../../../app/hooks/useTranslation';
import styles from './TopBar.module.scss';
import { useContext } from 'react';
import { ModalContext } from '../../../app/context/ModalContext';

export const DesktopTopBar = () => {
  const t = useTranslation();

  const { setLoginModalIsOpen, setSignupModalIsOpen } = useContext(ModalContext);
  const { isAuthenticated } = useAppSelector(state => state.user);

  return (
    <Grid container spacing={2}>
      <Grid item md={2} lg={2}>
        <DolphinLogo className={styles.logo} />
      </Grid>
      <Grid item md={1} lg={1} className={styles.topBar__item}>
        <Typography>{t('navBar.drops')}</Typography>
      </Grid>
      <Grid item md={2} lg={1} className={styles.topBar__item}>
        <Typography>{t('navBar.marketplace')}</Typography>
      </Grid>
      <Grid item md={2} lg={1} className={styles.topBar__item}>
        <Typography>{t('navBar.promotions')}</Typography>
      </Grid>
      <Grid item md={1} lg={5} className={styles.topBar__item}>
        <Typography>{t('navBar.faq')}</Typography>
      </Grid>

      {isAuthenticated ? (
        <>
          <Grid item md={2} lg={1} className={styles.topBar__item}>
            <PermIdentityOutlined />
          </Grid>
          <Grid item md={2} lg={1} className={styles.topBar__item}>
            <FavoriteBorderOutlined />
          </Grid>
        </>
      ) : (
        <>
          <Grid item md={2} lg={1} className={styles.topBar__item}>
            <Button onClick={() => setLoginModalIsOpen(true)}>{t('global.login')}</Button>
          </Grid>
          <Grid item md={2} lg={1} className={styles.topBar__item}>
            <Button onClick={() => setSignupModalIsOpen(true)}>{t('global.signup')}</Button>
          </Grid>
        </>
      )}
    </Grid>
  );
};
