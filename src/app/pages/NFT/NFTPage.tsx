import { TopBarLayout } from 'app/components/Layout/TopBarLayout';
import { KYC } from 'app/components/KYC/KYC';
import { CC } from 'app/components/CC/CC';
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
