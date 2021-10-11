import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { MyCollectionNfts } from 'presentation/pages/Profile/MyCollectionNfts';

const MyCollection = () => (
  <TopBarLayout
    pageComponent={
      <>
        <MyCollectionNfts />
      </>
    }
  />
);

export default MyCollection;
