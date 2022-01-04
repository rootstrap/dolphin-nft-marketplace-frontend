import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { RouteElement } from '../interfaces/common/Route';

interface RouteFromPathProps extends RouteElement {
  authenticated?: boolean;
}

const RouteFromPath = ({ Component, ...route }: RouteFromPathProps) =>
  route.private ? <PrivateRoute {...route}>{Component}</PrivateRoute> : <Route {...route}>{Component}</Route>;

export default RouteFromPath;
