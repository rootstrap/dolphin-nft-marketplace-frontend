import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Categories } from '../Categories/Categories';
import { useTopBar } from './useTopBar';
import { UserTopBarInfo } from './UserTopBarInfo';
import { useRedirection } from 'app/hooks/useRedirection';
import logoImg from 'app/assets/dolphin_logo.png';
import routesPaths from 'app/constants/routesPath';
import useTranslation from 'app/hooks/useTranslation';
import styles from './TopBar.module.scss';

export const DesktopTopBar = () => {
  const { handleCategories, anchorEl, handleClose } = useTopBar();
  const { isCreaturesUser } = useRedirection();
  const t = useTranslation();

  return (
    <nav className={styles.topBar}>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={4} sm={3} md={2} lg={2} className={styles.topBar__item}>
          <Link to={routesPaths.index}>
            <img src={logoImg} alt="logo" className={styles.topBar__logo} />
          </Link>
        </Grid>

        {!isCreaturesUser && (
          <>
            <Grid item xs={4} sm={2} md={2} lg={2} className={styles.topBar__item}>
              <div className={styles.topBar__itemTextCollection} data-cy="categories">
                <Typography
                  variant="h6"
                  onClick={handleCategories}
                  aria-expanded={anchorEl ? 'true' : undefined}
                >
                  {t('navBar.categories')}
                </Typography>
              </div>
              <Categories anchorEl={anchorEl} handleClose={handleClose} />
            </Grid>

            <Grid item xs={4} sm={2} md={2} lg={2} className={styles.topBar__item}>
              <a href={process.env.REACT_APP_ZENDESK_URL} target="_blank" rel="noopener noreferrer">
                <div className={styles.topBar__itemTextCollection}>
                  <Typography variant="h6">{t('navBar.faq')}</Typography>
                </div>
              </a>
            </Grid>
          </>
        )}

        <Grid item xs={isCreaturesUser ? 4 : 1} md={isCreaturesUser ? 6 : 2} lg={isCreaturesUser ? 7 : 3} />

        <Grid item xs={12} sm={4} md={4} lg={3} className={styles.topBar__item}>
          <UserTopBarInfo />
        </Grid>
      </Grid>
    </nav>
  );
};
