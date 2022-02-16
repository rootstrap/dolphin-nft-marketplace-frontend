import { TopBarLayout } from 'app/components/Layout/TopBarLayout';
import { Main } from './Main/Main';
import { MyGallery } from './MyGallery/MyGallery';
import { UserBalance } from './UserBalance/UserBalance';
import { TabPanel } from 'app/components/TabPanel/TabPanel';
import useTranslation from 'app/hooks/useTranslation';

const ProfilePage = () => {
  const t = useTranslation();

  const tabs = [
    { content: <MyGallery />, tabName: t('profile.tabs.gallery') },
    { content: <div>My Collection</div>, tabName: t('profile.tabs.collection') },
    { content: <UserBalance />, tabName: t('profile.tabs.balances') },
  ];

  return (
    <TopBarLayout
      pageComponent={
        <>
          <Main />
          <TabPanel tabs={tabs} />
        </>
      }
    />
  );
};

export default ProfilePage;
