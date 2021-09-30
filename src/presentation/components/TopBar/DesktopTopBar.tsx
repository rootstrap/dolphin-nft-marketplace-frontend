import { Button, Grid, Typography } from '@material-ui/core';
import { ReactComponent as DolphinLogo } from '../../../app/assets/Dolphin_Ball.svg';
import { FavoriteBorderOutlined, PermIdentityOutlined } from '@material-ui/icons';
import { useAppSelector } from '../../../app/hooks/reduxHooks';
import useTranslation from '../../../app/hooks/useTranslation';
import styles from './TopBar.module.scss';
import { useContext } from 'react';
import { ModalContext } from '../../../app/context/ModalContext';
import routesPaths from '../../../app/constants/routesPath';
import { Link } from 'react-router-dom';

export const DesktopTopBar = () => {
  const t = useTranslation();

  const { setLoginModalIsOpen, setSignupModalIsOpen } = useContext(ModalContext);
  const { isAuthenticated } = useAppSelector(state => state.user);

  return (
    <Grid container spacing={2}>
      <Grid item md={3} lg={2} className={styles.topBar__item}>
        <DolphinLogo className={styles.logo} />
      </Grid>
      <Grid item md={3} lg={2} className={styles.topBar__item}>
        <div className={styles.topBar__itemTextCollection}>
          <Typography variant="h6">{t('navBar.collections')}</Typography>
        </div>
      </Grid>
      <Grid item md={3} lg={4} className={styles.topBar__item}>
        <div className={styles.topBar__itemTextFAQ}>
          <Typography variant="h6">{t('navBar.faq')}</Typography>
        </div>
      </Grid>
      <Grid item md={3} lg={4} className={styles.topBar__item}>
        {isAuthenticated ? (
          <div className={styles.topBar__itemProfile}>
            <PermIdentityOutlined className={styles.topBar__itemProfileItem} />
            <FavoriteBorderOutlined className={styles.topBar__itemProfileItem} />
          </div>
        ) : (
          <div className={styles.topBar__itemButton}>
            <Button onClick={() => setSignupModalIsOpen(true)}>{t('global.signup')} </Button>
            <span className={styles.topBar__itemLink}>{t('global.signinMsg')}</span>
            <Link to={routesPaths.index} onClick={() => setLoginModalIsOpen(true)}>
              {t('global.signinLink')}
            </Link>
          </div>
        )}
      </Grid>
    </Grid>
  );
};
