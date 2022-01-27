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
import { Checkboxes } from 'presentation/components/Checkboxes/Checkboxes';
import styles from './TopBarLayout.module.scss';

interface TopBarLayoutProps {
  pageComponent: ReactElement;
  isTopBarVisible?: boolean;
}

export const TopBarLayout = ({ pageComponent, isTopBarVisible = true }: TopBarLayoutProps) => {
  const [loginStatus] = useLoginStatusMutation();

  const verifyStatus = useCallback(async () => await loginStatus(), [loginStatus]);

  useEffect(() => {
    verifyStatus();
  }, [verifyStatus]);

  return (
    <>
      <BackgroundLayout />
      <div className={styles.topBarLayout}>
        {isTopBarVisible && <TopBar />}
        {pageComponent}
        <Login />
        <Signup />
        <Checkboxes />
        <CreditCardModal />
        <CC />
        <KYC />
        <BottomBar />
      </div>
    </>
  );
};
