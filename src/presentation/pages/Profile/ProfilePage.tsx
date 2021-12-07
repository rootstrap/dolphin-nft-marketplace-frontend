import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { Main } from './Main/Main';
import { MyCollectionNfts } from './MyCollection/MyCollectionNfts';
import { UserBalance } from './UserBalance/UserBalance';
import { TabPanel } from 'infrastructure/components/TabPanel/TabPanel';

const ProfilePage = () => {
  return (
    <TopBarLayout
      pageComponent={
        <>
          <Main />
          <TabPanel
            tabs={[
              { content: <MyCollectionNfts />, tabName: 'My Gallery' },
              { content: <UserBalance />, tabName: 'My Balances' },
            ]}
          />
        </>
      }
    />
  );
};

export default ProfilePage;
