import { RouteElement } from 'app/interfaces/common/Route';
import { Route, Redirect, useLocation } from 'react-router-dom';
import routesPaths from '../constants/routesPath';

export interface PrivateRouteProps extends RouteElement {
  authenticated?: boolean;
}

const PrivateRoute = ({ Component, exact = false, path, authenticated }: PrivateRouteProps) => {
  const location = useLocation();

  return authenticated ? (
    <Route exact={exact} path={path} render={() => <Component />} />
  ) : (
    <Redirect
      to={{
        pathname: routesPaths.index,
        state: { from: location },
      }}
    />
  );
};

export default PrivateRoute;
