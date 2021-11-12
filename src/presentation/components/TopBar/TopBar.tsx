import { Button, Grid, Typography } from '@material-ui/core';
import { CreditCard, PersonOutlined } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { Categories } from '../Categories/Categories';
import { useTopBar } from './useTopBar';
import logoImg from 'app/assets/dolphin_logo.png';
import routesPaths from 'app/constants/routesPath';
import useTranslation from 'app/hooks/useTranslation';
import styles from './TopBar.module.scss';

export const TopBar = ({ isTopBarDisabled }: TopBarProps) => {
  const t = useTranslation();
  const location = useLocation();
  const {
    handleCategories,
    anchorEl,
    handleClose,
    isAuthenticated,
    setCreditCardModalIsOpen,
    setSignupModalIsOpen,
    setLoginModalIsOpen,
    handleLogout,
  } = useTopBar();

  return (
    <nav className={styles.topBar}>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={4} sm={3} md={2} lg={2} className={styles.topBar__item}>
          <Link to={routesPaths.index}>
            <img src={logoImg} alt="logo" className={styles.topBar__logo} />
          </Link>
        </Grid>

        <Grid item xs={4} sm={2} md={2} lg={2} className={styles.topBar__item}>
          <div className={styles.topBar__itemTextCollection}>
            <Typography variant="h6" onClick={handleCategories} aria-expanded={anchorEl ? 'true' : undefined}>
              {t('navBar.categories')}
            </Typography>
          </div>

          {!isTopBarDisabled && <Categories anchorEl={anchorEl} handleClose={handleClose} />}
        </Grid>

        <Grid item xs={4} sm={2} md={2} lg={2} className={styles.topBar__item}>
          <a href={process.env.REACT_APP_ZENDESK_URL} target="_blank">
            <div className={styles.topBar__itemTextCollection}>
              <Typography variant="h6">{t('navBar.faq')}</Typography>
            </div>
          </a>
        </Grid>
        <Grid item md={2} lg={3} />

        <Grid item xs={12} sm={4} md={4} lg={3} className={styles.topBar__item} alignItems="flex-start">
          {isAuthenticated ? (
            <div className={styles.topBar__itemButton}>
              <div className={styles.topBar__itemButtonProfile}>
                <Link to={routesPaths.profile}>
                  <PersonOutlined />
                </Link>
              </div>

              <div className={styles.topBar__itemButtonCards}>
                <CreditCard onClick={() => setCreditCardModalIsOpen(true)} />
              </div>

              <Link to={routesPaths.index} onClick={handleLogout}>
                {t('global.logout')}
              </Link>
            </div>
          ) : (
            <div className={styles.topBar__itemButton}>
              <Button onClick={() => setSignupModalIsOpen(true)}>{t('global.signup')} </Button>
              <span className={styles.topBar__itemLink}>{t('global.signinMsg')}</span>
              <Link to={location.pathname} onClick={() => setLoginModalIsOpen(true)}>
                &nbsp;{t('global.signinLink')}
              </Link>
            </div>
          )}
        </Grid>
      </Grid>
    </nav>
  );
};

interface TopBarProps {
  isTopBarDisabled: boolean;
}
