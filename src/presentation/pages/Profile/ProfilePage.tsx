import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { Main } from './Main/Main';
import { MyCollectionNfts } from './MyCollection/MyCollectionNfts';

const ProfilePage = () => {
  return (
    <TopBarLayout
      pageComponent={
        <>
          <Main />
          <MyCollectionNfts />
        </>
      }
    />
  );
};

export default ProfilePage;
