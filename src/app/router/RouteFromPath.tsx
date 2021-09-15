import { ReactNode } from 'react';
import { Route } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';

interface RouteFromPathProps {
	path: string;
	component: ReactNode;
	authenticated?: boolean;
	exact?: boolean;
	private?: boolean;
}

const RouteFromPath = ({ component, ...route }: RouteFromPathProps) =>
	route.private ? (
		<PrivateRoute {...route}>{component}</PrivateRoute>
	) : (
		<Route {...route}>{component}</Route>
	);

export default RouteFromPath;
