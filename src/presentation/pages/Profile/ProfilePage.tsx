import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { CreditCards } from './CreditCards/CreditCards';
import { Main } from './Main/Main';
import { MyCollectionNfts } from './MyCollectionNfts';

const ProfilePage = () => {
  return (
    <TopBarLayout
      pageComponent={
        <>
          <Main />
          <MyCollectionNfts />
          <CreditCards />
        </>
      }
    />
  );
};

export default ProfilePage;
