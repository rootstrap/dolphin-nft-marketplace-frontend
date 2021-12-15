import { Switch, BrowserRouter as Router, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { routes } from './router';
import { useAppSelector } from './hooks/reduxHooks';
import { CssBaseline } from '@material-ui/core';
import RouteFromPath from './router/RouteFromPath';
import useRedirection from './hooks/useRedirection';
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

      <Router>
        <Switch>
          {routes[user].map(route => (
            <RouteFromPath key={`route-${route.path}`} authenticated={isAuthenticated} {...route} />
          ))}
          <Redirect to={routes[user][0].path} />
        </Switch>
      </Router>
      <CssBaseline />
    </>
  );
};
