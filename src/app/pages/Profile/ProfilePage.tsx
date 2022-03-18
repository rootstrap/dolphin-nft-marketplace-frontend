import { createContext } from 'react';
import { TopBarLayout } from 'app/components/Layout/TopBarLayout';
import { TabPanel } from 'app/components/TabPanel/TabPanel';
import { Main } from './Main/Main';
import { MyGallery } from './MyGallery/MyGallery';
import { MyCollections } from './MyCollections/MyCollections';
import { UserBalance } from './UserBalance/UserBalance';
import { useProfile } from './useProfile';
import { NFT, Attributes } from '../../interfaces/NFT/NFT';
import useTranslation from 'app/hooks/useTranslation';

export const ProfileContext = createContext({} as ProfileContextProps);
const { Provider } = ProfileContext;

const ProfilePage = () => {
  const t = useTranslation();
  const { nfts, nftAttributes, isLoading, handlePageClick, pageCount, pageOffset, userTrades } = useProfile();

  const tabs = [
    { content: <MyGallery />, tabName: t('profile.tabs.gallery') },
    { content: <MyCollections />, tabName: t('profile.tabs.collection') },
    { content: <UserBalance />, tabName: t('profile.tabs.balances') },
  ];

  return (
    <TopBarLayout
      pageComponent={
        <Provider
          value={{
            nfts,
            nftAttributes,
            isLoading,
            handlePageClick,
            pageCount,
            pageOffset,
          }}
        >
          <Main />
          <TabPanel tabs={tabs} />
        </Provider>
      }
    />
  );
};

interface ProfileContextProps {
  nfts: NFT[];
  nftAttributes: Attributes[];
  isLoading: boolean;
  handlePageClick: (event: any) => void;
  pageCount: number;
  pageOffset: number;
}

export default ProfilePage;
