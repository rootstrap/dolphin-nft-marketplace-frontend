import HomePage from '../../presentation/pages/Home/HomePage';
import ProfilePage from '../../presentation/pages/Profile/ProfilePage';
import routesPaths from '../constants/routesPath';
import { Route } from '../interfaces/common/Route';

export const routes: Route[] = [
	{
		path: routesPaths.index,
		component: <HomePage />,
		exact: true,
		private: false,
	},
	{
		path: routesPaths.profile,
		component: <ProfilePage />,
		private: true,
	},
];
