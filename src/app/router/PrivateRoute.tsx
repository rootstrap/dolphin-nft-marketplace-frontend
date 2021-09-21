import { ReactNode } from 'react';
import { Route, Redirect, useLocation } from 'react-router-dom';
import routesPaths from '../constants/routesPath';

export interface PrivateRouteProps {
  children: ReactNode;
  path: string;
  authenticated?: boolean;
  exact?: boolean;
}

const PrivateRoute = ({ children, exact = false, path, authenticated }: PrivateRouteProps) => {
  const location = useLocation();

  return authenticated ? (
    <Route exact={exact} path={path}>
      {children}
    </Route>
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
