import { Button, Grid, Typography } from '@material-ui/core';
import { useAppSelector } from '../../../app/hooks/reduxHooks';
import { useContext } from 'react';
import { ModalContext } from '../../../app/context/ModalContext';
import { Link } from 'react-router-dom';
import logoImg from 'app/assets/dolphin_logo.png';
import { RootState } from '../../../app/store/store';
import routesPaths from '../../../app/constants/routesPath';
import useTranslation from '../../../app/hooks/useTranslation';
import { useLogoutMutation } from 'infrastructure/services/user/UserService';
import { PersonOutlined } from '@material-ui/icons';
import styles from './TopBar.module.scss';

export const DesktopTopBar = () => {
  const t = useTranslation();
  const [logout] = useLogoutMutation();

  const { setLoginModalIsOpen, setSignupModalIsOpen } = useContext(ModalContext);
  const { email, isAuthenticated, user } = useAppSelector(state => state.user);

  const handleLogout = () => {
    logout({ email: email });
  };

  return (
    <Grid container spacing={0} alignItems="center" justifyContent="center">
      <Grid item md={2} lg={2} className={styles.topBar__item}>
        <Link to={routesPaths.index}>
          <img src={logoImg} alt="logo" className={styles.topBar__logo} />
        </Link>
      </Grid>

      <Grid item md={2} lg={2} className={styles.topBar__item}>
        <Link to={routesPaths.index}>
          <div className={styles.topBar__itemTextCollection}>
            <Typography variant="h6">{t('navBar.categories')}</Typography>
          </div>
        </Link>
      </Grid>

      <Grid item md={2} lg={2} className={styles.topBar__item}>
        <Link to={routesPaths.faq}>
          <div className={styles.topBar__itemTextCollection}>
            <Typography variant="h6">{t('navBar.faq')}</Typography>
          </div>
        </Link>
      </Grid>
      <Grid item md={2} lg={2} />

      <Grid item md={4} lg={3} className={styles.topBar__item}>
        {isAuthenticated ? (
          <div className={styles.topBar__itemButton}>
            <div className={styles.topBar__itemButtonProfile}>
              <Link to={routesPaths.profile}>
                <PersonOutlined />
              </Link>
            </div>

            <Link to={routesPaths.index} onClick={handleLogout}>
              &nbsp;{t('global.logout')}
            </Link>
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
