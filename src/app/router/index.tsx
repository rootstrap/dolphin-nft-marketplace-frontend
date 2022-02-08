import { lazy } from 'react';
import { Route } from 'app/interfaces/common/Route';
import routesPaths from '../constants/routesPath';

export const routes: Route = {
  isCreatures: [
    {
      path: routesPaths.index,
      Component: lazy(
        () => import(/* webpackChunkName: "CreaturesPage" */ 'app/pages/Creatures/CreaturesPage')
      ),
      exact: true,
      private: false,
    },
    {
      path: routesPaths.creaturesWhitelist,
      Component: lazy(
        () =>
          import(
            /* webpackChunkName: "CreaturesWhiteListPage" */ 'app/pages/CreaturesWhitelist/CreaturesWhiteListPage'
          )
      ),
      private: false,
    },
    {
      path: routesPaths.profile,
      Component: lazy(() => import(/* webpackChunkName: "ProfilePage" */ 'app/pages/Profile/ProfilePage')),
      private: true,
    },
  ],
  isNormalUser: [
    {
      path: routesPaths.index,
      Component: lazy(() => import(/* webpackChunkName: "HomePage" */ 'app/pages/Home/HomePage')),
      exact: true,
      private: false,
    },
    {
      path: routesPaths.profile,
      Component: lazy(() => import(/* webpackChunkName: "ProfilePage" */ 'app/pages/Profile/ProfilePage')),
      private: true,
      exact: true,
    },
    {
      path: routesPaths.heroletes,
      Component: lazy(
        () => import(/* webpackChunkName: "Remarkables" */ 'app/pages/Heroletes/RemarkablesPage')
      ),
      exact: true,
      private: false,
    },
    {
      path: routesPaths.halloffame,
      Component: lazy(
        () => import(/* webpackChunkName: "VerticalPage" */ 'app/pages/HallOfFame/HallOfFamePage')
      ),
      exact: true,
      private: false,
    },
    {
      path: routesPaths.secondaryMarket,
      Component: lazy(
        () =>
          import(
            /* webpackChunkName: "SecondaryMarketPage" */ 'app/pages/SecondaryMarket/SecondaryMarketPage'
          )
      ),
      exact: true,
      private: true,
    },
    {
      path: routesPaths.nftDetails,
      Component: lazy(() => import(/* webpackChunkName: "NFTPage" */ 'app/pages/NFT/NFTPage')),
      exact: true,
      private: false,
    },
    {
      path: routesPaths.nftById,
      Component: lazy(() => import(/* webpackChunkName: "NFTByIdPage" */ 'app/pages/NFTByFtxId/NFTByIdPage')),
      exact: true,
      private: false,
    },
  ],
};
