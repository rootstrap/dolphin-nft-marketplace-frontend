import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { Main } from './Main/Main';
import { MyCollectionNfts } from './MyCollection/MyCollectionNfts';
import { UserBalance } from './UserBalance/UserBalance';
import { TabPanel } from 'infrastructure/components/TabPanel/TabPanel';
import useTranslation from 'app/hooks/useTranslation';

const ProfilePage = () => {
  const t = useTranslation();
  return (
    <TopBarLayout
      pageComponent={
        <>
          <Main />
          <TabPanel
            tabs={[
              { content: <MyCollectionNfts />, tabName: t('profile.tabs.gallery') },
              { content: <UserBalance />, tabName: t('profile.tabs.balances') },
            ]}
          />
        </>
      }
    />
  );
};

export default ProfilePage;
