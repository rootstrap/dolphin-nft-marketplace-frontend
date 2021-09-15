import { Switch, BrowserRouter as Router } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { routes } from './router';
import RouteFromPath from './router/RouteFromPath';

export const App = () => {
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
							authenticated={false}
							{...route}
						/>
					))}
				</Switch>
			</Router>
		</>
	);
};
