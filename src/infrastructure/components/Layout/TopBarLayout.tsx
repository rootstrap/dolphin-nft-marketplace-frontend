import { ReactElement, useCallback, useEffect } from 'react';
import { BottomBar } from 'presentation/components/BottomBar/BottomBar';
import { CreditCardModal } from 'presentation/components/CreditCardModal/CreditCardModal';
import { Login } from 'presentation/components/Login/Login';
import { Signup } from 'presentation/components/Signup/Signup';
import { TopBar } from 'presentation/components/TopBar/TopBar';
import { BackgroundLayout } from './BackgroundLayout';
import { CC } from 'presentation/components/CC/CC';
import { KYC } from 'presentation/components/KYC/KYC';
import { useLoginStatusMutation } from 'infrastructure/services/user/UserService';

interface TopBarLayoutProps {
  pageComponent: ReactElement;
}

export const TopBarLayout = ({ pageComponent }: TopBarLayoutProps) => {
  const [loginStatus] = useLoginStatusMutation();

  const verifyStatus = useCallback(async () => await loginStatus(), [loginStatus]);

  useEffect(() => {
    verifyStatus();
  }, [verifyStatus]);

  return (
    <>
      <BackgroundLayout />
      <TopBar />
      {pageComponent}
      <Login />
      <Signup />
      <CreditCardModal />
      <CC />
      <KYC />
      <BottomBar />
    </>
  );
};
