import NFTPage from 'presentation/pages/NFT/NFTPage';
import HomePage from 'presentation/pages/Home/HomePage';
import MyCollection from 'presentation/pages/Profile/MyCollection';
import ProfilePage from 'presentation/pages/Profile/ProfilePage';
import CreaturesPage from 'presentation/pages/Categories/Creatures/CreaturesPage';
import VerticalPage from 'presentation/pages/Verticals/VerticalPage';
import NFTByIdPage from 'presentation/pages/NFTByFtxId/NFTByIdPage';
import routesPaths from '../constants/routesPath';

export const routes = {
  isCreatures: [
    {
      path: routesPaths.index,
      component: <CreaturesPage />,
      exact: true,
      private: false,
    },
    {
      path: routesPaths.profile,
      component: <ProfilePage />,
      private: true,
    },
  ],
  isNormalUser: [
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
      path: routesPaths.creatures,
      component: <CreaturesPage />,
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
      path: routesPaths.nftById,
      component: <NFTByIdPage />,
      exact: true,
      private: false,
    },
    {
      path: routesPaths.profile,
      component: <ProfilePage />,
      private: true,
    },
    {
      path: routesPaths.my_collection,
      component: <MyCollection />,
      private: true,
    },
  ],
};
