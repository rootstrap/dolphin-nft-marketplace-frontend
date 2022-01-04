import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { RouteElement } from '../interfaces/common/Route';

interface RouteFromPathProps extends RouteElement {
  authenticated?: boolean;
}

const RouteFromPath = ({ Component, ...props }: RouteFromPathProps) =>
  props.private ? (
    <PrivateRoute Component={Component} {...props} />
  ) : (
    <Route render={() => <Component />} {...props} />
  );

export default RouteFromPath;
