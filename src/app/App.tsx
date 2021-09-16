import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { routes } from './router';
import RouteFromPath from './router/RouteFromPath';
import { useAppSelector } from './hooks/reduxHooks';

export const App = () => {
	const { isAuthenticated } = useAppSelector((state) => state.user);

	return (
		<>
			<Helmet>
				<title>NFT Marketplace</title>
			</Helmet>
			<Router>
				<Switch>
					{routes.map((route) => (
						<RouteFromPath
							key={`route-${route.path}`}
							authenticated={isAuthenticated}
							{...route}
						/>
					))}
				</Switch>
			</Router>
		</>
	);
};
