import { Button, Grid, Typography } from '@material-ui/core';
import { ReactComponent as DolphinLogo } from '../../../app/assets/Dolphin_Ball.svg';
import { FavoriteBorderOutlined, PermIdentityOutlined } from '@material-ui/icons';
import { useAppSelector } from '../../../app/hooks/reduxHooks';
import { useContext } from 'react';
import { ModalContext } from '../../../app/context/ModalContext';
import { Link } from 'react-router-dom';
import logoImg from 'app/assets/dolphin_logo.png';
import routesPaths from '../../../app/constants/routesPath';
import useTranslation from '../../../app/hooks/useTranslation';
import styles from './TopBar.module.scss';

export const DesktopTopBar = () => {
  const t = useTranslation();

  const { setLoginModalIsOpen, setSignupModalIsOpen } = useContext(ModalContext);
  const { isAuthenticated } = useAppSelector(state => state.user);

  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      <Grid item md={2} lg={2} className={styles.topBar__item}>
        <Link to={routesPaths.index}>
          <img src={logoImg} alt="logo" className={styles.topBar__logo} />
        </Link>
      </Grid>

      <Grid item md={2} lg={1} className={styles.topBar__item}>
        <div className={styles.topBar__itemTextCollection}>
          <Typography variant="h6">{t('navBar.collections')}</Typography>
        </div>
      </Grid>
      <Grid item md={2} lg={1} className={styles.topBar__item}>
        <div className={styles.topBar__itemTextCollection}>
          <Typography variant="h6">{t('navBar.faq')}</Typography>
        </div>
      </Grid>

      <Grid item md={2} lg={5} />

      <Grid item md={4} lg={3} className={styles.topBar__item}>
        {isAuthenticated ? (
          <div className={styles.topBar__itemButton}>
            <PermIdentityOutlined className={styles.topBar__itemProfileItem} />
          </div>
        ) : (
          <div className={styles.topBar__itemButton}>
            <Button onClick={() => setSignupModalIsOpen(true)}>{t('global.signup')} </Button>
            <span className={styles.topBar__itemLink}>{t('global.signinMsg')}</span>
            <Link to={routesPaths.index} onClick={() => setLoginModalIsOpen(true)}>
              &nbsp;{t('global.signinLink')}
            </Link>
          </div>
        )}
      </Grid>
    </Grid>
  );
};
