import NFTPage from 'presentation/pages/NFT/NFTPage';
import HomePage from '../../presentation/pages/Home/HomePage';
import ProfilePage from '../../presentation/pages/Profile/ProfilePage';
import VerticalPage from '../../presentation/pages/Verticals/VerticalPage';
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
    path: routesPaths.verticals,
    component: <VerticalPage />,
    exact: true,
    private: false,
  },
  {
    path: routesPaths.nftDetails,
    component: <NFTPage />,
    exact: true,
    private: false,
  },
  {
    path: routesPaths.profile,
    component: <ProfilePage />,
    private: true,
  },
];
