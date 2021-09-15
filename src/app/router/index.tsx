import routesPaths from '../constants/routesPath';
import { Route } from '../interfaces/common/Route';

export const routes: Route[] = [
	{
		path: routesPaths.index,
		component: <h1>Home Page</h1>,
		exact: true,
		private: false,
	},
	{
		path: routesPaths.profile,
		component: <h1>Profile Page</h1>,
		private: true,
	},
];
