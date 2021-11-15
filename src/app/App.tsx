import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { routes } from './router';
import { useAppSelector } from './hooks/reduxHooks';
import { CssBaseline } from '@material-ui/core';
import RouteFromPath from './router/RouteFromPath';
import useRedirection from './hooks/useRedirection';
import useTranslation from './hooks/useTranslation';

export const App = () => {
  const { isAuthenticated } = useAppSelector(state => state.user);
  const { redirect } = useRedirection();
  const t = useTranslation();

  redirect && window.location.replace('/creatures');

  return (
    <>
      <Helmet>
        <title>{t('global.pageTitle')}</title>
      </Helmet>

      <Router>
        <Switch>
          {routes.map(route => (
            <RouteFromPath key={`route-${route.path}`} authenticated={isAuthenticated} {...route} />
          ))}
        </Switch>
        <CssBaseline />
      </Router>
    </>
  );
};
