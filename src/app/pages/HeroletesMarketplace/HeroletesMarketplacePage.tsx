import { TopBarLayout } from 'app/components/Layout/TopBarLayout';
import { HeroletesList } from './HeroletesList/HeroletesList';
import { Main } from './Main/Main';

const HeroletesMarketplacePage = () => (
  <TopBarLayout
    pageComponent={
      <>
        <Main />
        <HeroletesList />
      </>
    }
  />
);

export default HeroletesMarketplacePage;
