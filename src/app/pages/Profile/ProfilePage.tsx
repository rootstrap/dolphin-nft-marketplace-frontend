import { createContext } from 'react';
import { TopBarLayout } from 'app/components/Layout/TopBarLayout';
import { TabPanel } from 'app/components/TabPanel/TabPanel';
import { Main } from './Main/Main';
import { MyGallery } from './MyGallery/MyGallery';
import { MyCollections } from './MyCollections/MyCollections';
import { UserBalance } from './UserBalance/UserBalance';
import { FormValues, useProfile } from './useProfile';
import { NFT, Attributes, FillsResult } from 'app/interfaces/NFT/NFT';
import { MyTrades } from './MyTrades/MyTrades';
import { EditProfile } from './EditProfile/EditProfile';
import {
  FieldValues,
  SubmitHandler,
  UseFormHandleSubmit,
  UseFormRegister,
  UseFormSetValue,
} from 'react-hook-form';
import { User } from 'app/store/features/userSlice';
import useTranslation from 'app/hooks/useTranslation';

export const ProfileContext = createContext({} as ProfileContextProps);
const { Provider } = ProfileContext;

const ProfilePage = () => {
  const t = useTranslation();
  const {
    errors,
    handleCloseEditProfile,
    handleOpenEditProfile,
    handlePageClick,
    handleSubmit,
    isEditProfileLoading,
    isEditProfileOpen,
    isLoading,
    nftAttributes,
    nfts,
    onSubmit,
    pageCount,
    pageOffset,
    register,
    setValue,
    user,
    userTrades,
  } = useProfile();

  const tabs = [
    { content: <MyGallery />, tabName: t('profile.tabs.gallery') },
    { content: <MyCollections />, tabName: t('profile.tabs.collection') },
    { content: <UserBalance />, tabName: t('profile.tabs.balances') },
    { content: <MyTrades />, tabName: 'My Trades' },
  ];

  return (
    <TopBarLayout
      pageComponent={
        <Provider
          value={{
            errors,
            handleCloseEditProfile,
            handleOpenEditProfile,
            handlePageClick,
            handleSubmit,
            isEditProfileLoading,
            isEditProfileOpen,
            isLoading,
            nftAttributes,
            nfts,
            onSubmit,
            pageCount,
            pageOffset,
            register,
            setValue,
            user,
            userTrades,
          }}
        >
          <Main />
          <EditProfile />
          <TabPanel tabs={tabs} />
        </Provider>
      }
    />
  );
};

interface ProfileContextProps {
  errors: { [x: string]: any };
  handleCloseEditProfile: () => void;
  handleOpenEditProfile: () => void;
  handlePageClick: (event: any) => void;
  handleSubmit: UseFormHandleSubmit<FieldValues>;
  isEditProfileLoading: boolean;
  isEditProfileOpen: boolean;
  isLoading: boolean;
  nftAttributes: Attributes[];
  nfts: NFT[];
  onSubmit: SubmitHandler<FormValues>;
  pageCount: number;
  pageOffset: number;
  register: UseFormRegister<FormValues>;
  setValue: UseFormSetValue<FormValues>;
  user: User;
  userTrades: FillsResult[];
}

export default ProfilePage;
