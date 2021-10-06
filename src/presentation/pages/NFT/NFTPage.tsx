import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { Main } from './Main/Main';

const NFTPage = () => (
  <TopBarLayout
    pageComponent={
      <>
        <Main />
      </>
    }
  />
);

export default NFTPage;
