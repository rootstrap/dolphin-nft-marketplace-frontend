import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { Main } from './Main/Main';
import { MyCollectionNfts } from './MyCollectionNfts';
import { UserBalance } from './UserBalance/UserBalance';

const ProfilePage = () => {
  return (
    <TopBarLayout
      pageComponent={
        <>
          <Main />
          <MyCollectionNfts />
          <UserBalance />
        </>
      }
    />
  );
};

export default ProfilePage;
