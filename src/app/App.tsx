import { Suspense } from 'react';
import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { routes } from './router';
import { useAppSelector } from './hooks/reduxHooks';
import { CssBaseline } from '@material-ui/core';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import RouteFromPath from './router/RouteFromPath';
import { useRedirection } from './hooks/useRedirection';
import useTranslation from './hooks/useTranslation';

export const App = () => {
  const { isAuthenticated } = useAppSelector(state => state.user);
  const { isCreaturesUser } = useRedirection();
  const t = useTranslation();

  const user = isCreaturesUser ? 'isCreatures' : 'isNormalUser';
  return (
    <>
      <Helmet>
        <title>{t('global.pageTitle')}</title>
      </Helmet>

      <Suspense fallback={<CustomLoader height={50} width={50} type="ThreeDots" />}>
        <Router>
          <Switch>
            {routes[user].map(route => (
              <RouteFromPath key={`route-${route.path}`} authenticated={isAuthenticated} {...route} />
            ))}
          </Switch>
        </Router>
      </Suspense>

      <CssBaseline />
    </>
  );
};
