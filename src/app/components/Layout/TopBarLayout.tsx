import { ReactElement, useCallback, useEffect } from 'react';
import { BottomBar } from 'app/components/BottomBar/BottomBar';
import { CreditCardModal } from 'app/components/CreditCardModal/CreditCardModal';
import { Login } from 'app/components/Login/Login';
import { Signup } from 'app/components/Signup/Signup';
import { TopBar } from 'app/components/TopBar/TopBar';
import { BackgroundLayout } from './BackgroundLayout';
import { CC } from 'app/components/CC/CC';
import { KYC } from 'app/components/KYC/KYC';
import { useLoginStatusMutation } from 'app/services/user/UserService';
import { Checkboxes } from 'app/components/Checkboxes/Checkboxes';
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
      </div>
      <BottomBar />
    </>
  );
};
