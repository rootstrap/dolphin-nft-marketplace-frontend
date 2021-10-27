import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { KYC } from 'presentation/components/KYC/KYC';
import { CC } from 'presentation/components/CC/CC';
import { Main } from './Main/Main';

const NFTPage = () => (
  <TopBarLayout
    pageComponent={
      <>
        <Main />
        <KYC />
        <CC />
      </>
    }
  />
);

export default NFTPage;
