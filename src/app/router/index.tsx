import { Route } from '../interfaces/common/Route';
import NFTPage from 'presentation/pages/NFT/NFTPage';
import HomePage from 'presentation/pages/Home/HomePage';
import ProfilePage from 'presentation/pages/Profile/ProfilePage';
import CreaturesPage from 'presentation/pages/Creatures/CreaturesPage';
import CreaturesWhiteListPage from 'presentation/pages/CreaturesWhitelist/CreaturesWhiteListPage';
import VerticalPage from 'presentation/pages/Verticals/VerticalPage';
import NFTByIdPage from 'presentation/pages/NFTByFtxId/NFTByIdPage';
import routesPaths from '../constants/routesPath';

export const routes: Route = {
  isCreatures: [
    {
      path: routesPaths.index,
      Component: CreaturesPage,
      exact: true,
      private: false,
    },
    {
      path: routesPaths.creaturesWhitelist,
      Component: CreaturesWhiteListPage,
      private: false,
    },
    {
      path: routesPaths.profile,
      Component: ProfilePage,
      private: true,
    },
  ],
  isNormalUser: [
    {
      path: routesPaths.index,
      Component: HomePage,
      exact: true,
      private: false,
    },
    {
      path: routesPaths.verticals,
      Component: VerticalPage,
      exact: true,
      private: false,
    },
    {
      path: routesPaths.creatures,
      Component: CreaturesPage,
      exact: true,
      private: false,
    },
    {
      path: routesPaths.nftDetails,
      Component: NFTPage,
      exact: true,
      private: false,
    },
    {
      path: routesPaths.nftById,
      Component: NFTByIdPage,
      exact: true,
      private: false,
    },
    {
      path: routesPaths.profile,
      Component: ProfilePage,
      private: true,
    },
  ],
};
