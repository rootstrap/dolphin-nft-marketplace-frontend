import { lazy } from 'react';
import { Route } from 'app/interfaces/common/Route';
import routesPaths from '../constants/routesPath';

export const routes: Route = {
  isCreatures: [
    {
      path: routesPaths.index,
      Component: lazy(
        () => import(/* webpackChunkName: "CreaturesPage" */ 'presentation/pages/Creatures/CreaturesPage')
      ),
      exact: true,
      private: false,
    },
    {
      path: routesPaths.creaturesWhitelist,
      Component: lazy(
        () =>
          import(
            /* webpackChunkName: "CreaturesWhiteListPage" */ 'presentation/pages/CreaturesWhitelist/CreaturesWhiteListPage'
          )
      ),
      private: false,
    },
    {
      path: routesPaths.profile,
      Component: lazy(
        () => import(/* webpackChunkName: "ProfilePage" */ 'presentation/pages/Profile/ProfilePage')
      ),
      private: true,
    },
  ],
  isNormalUser: [
    {
      path: routesPaths.index,
      Component: lazy(() => import(/* webpackChunkName: "HomePage" */ 'presentation/pages/Home/HomePage')),
      exact: true,
      private: false,
    },
    {
      path: routesPaths.profile,
      Component: lazy(
        () => import(/* webpackChunkName: "ProfilePage" */ 'presentation/pages/Profile/ProfilePage')
      ),
      private: true,
      exact: true,
    },
    {
      path: routesPaths.winterSportsChampions,
      Component: lazy(
        () => import(/* webpackChunkName: "Remarkables" */ 'presentation/pages/Remarkables/RemarkablesPage')
      ),
      exact: true,
      private: false,
    },
    {
      path: routesPaths.halloffame,
      Component: lazy(
        () => import(/* webpackChunkName: "VerticalPage" */ 'presentation/pages/HallOfFame/HallOfFamePage')
      ),
      exact: true,
      private: false,
    },
    {
      path: routesPaths.secondaryMarket,
      Component: lazy(
        () =>
          import(
            /* webpackChunkName: "SecondaryMarketPage" */ 'presentation/pages/SecondaryMarket/SecondaryMarketPage'
          )
      ),
      exact: true,
      private: true,
    },
    {
      path: routesPaths.nftDetails,
      Component: lazy(() => import(/* webpackChunkName: "NFTPage" */ 'presentation/pages/NFT/NFTPage')),
      exact: true,
      private: false,
    },
    {
      path: routesPaths.nftById,
      Component: lazy(
        () => import(/* webpackChunkName: "NFTByIdPage" */ 'presentation/pages/NFTByFtxId/NFTByIdPage')
      ),
      exact: true,
      private: false,
    },
  ],
};
