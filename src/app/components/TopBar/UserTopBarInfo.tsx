import { CreditCard, PersonOutlined } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { useTopBar } from './useTopBar';
import { Button } from '@material-ui/core';
import useRedirection from 'app/hooks/useRedirection';
import routesPaths from 'app/constants/routesPath';
import useTranslation from 'app/hooks/useTranslation';
import styles from './TopBar.module.scss';

export const UserTopBarInfo = () => {
  const t = useTranslation();
  const location = useLocation();
  const { isCreaturesUser } = useRedirection();
  const {
    isAuthenticated,
    setCreditCardModalIsOpen,
    setLoginModalIsOpen,
    handleLogout,
    setSignupModalIsOpen,
  } = useTopBar();

  return (
    <div>
      {isAuthenticated ? (
        <div className={styles.topBar__itemButton}>
          <>
            <div className={styles.topBar__itemButtonProfile}>
              <Link to={routesPaths.profile}>
                <PersonOutlined />
              </Link>
            </div>

            <div className={styles.topBar__itemButtonCards}>
              <CreditCard onClick={() => setCreditCardModalIsOpen(true)} />
            </div>
          </>

          <Link to={routesPaths.index} onClick={handleLogout}>
            {t('global.logout')}
          </Link>
        </div>
      ) : (
        <div className={styles.topBar__itemButton}>
          <Button onClick={() => setSignupModalIsOpen(true)}>{t('global.signup')} </Button>
          {isCreaturesUser ? (
            <>
              <Button variant="text" color="secondary" onClick={() => setLoginModalIsOpen(true)}>
                {t('global.login')}{' '}
              </Button>
            </>
          ) : (
            <div className={styles.topBar__itemButtonLink}>
              <Link to={location.pathname} onClick={() => setLoginModalIsOpen(true)}>
                {t('global.signinLink')}
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
