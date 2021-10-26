import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { KYC } from 'presentation/components/KYC/KYC';
import { CC } from 'presentation/components/CC/CC';
import { Main } from './Main/Main';
import { CCVerification } from 'presentation/components/CC/Verification/CCVerification';

const NFTPage = () => (
  <TopBarLayout
    pageComponent={
      <>
        <Main />
        <KYC />
        <CC />
        <CCVerification />
      </>
    }
  />
);

export default NFTPage;
