import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { KYC } from 'presentation/components/KYC/KYC';
import { Main } from './Main/Main';

const NFTPage = () => (
  <TopBarLayout
    pageComponent={
      <>
        <Main />
        <KYC />
      </>
    }
  />
);

export default NFTPage;
