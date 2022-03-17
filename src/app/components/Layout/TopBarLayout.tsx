import { ReactElement, useCallback, useEffect, useState } from 'react';
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
import { ForgotPasswordModal } from 'app/components/ForgotPasswordModal/ForgotPasswordModal';
import { useLocation } from 'react-router-dom';
import { NotificationModal } from '../NotificationModal/NotificationModal';
import styles from './TopBarLayout.module.scss';

interface TopBarLayoutProps {
  pageComponent: ReactElement;
  isTopBarVisible?: boolean;
}

export const TopBarLayout = ({ pageComponent, isTopBarVisible = true }: TopBarLayoutProps) => {
  const [loginStatus] = useLoginStatusMutation();
  const location = useLocation();
  const [isVerificationSuccess, setIsVerificationSuccess] = useState(false);
  const [isNotificationModalOpen, setIsNotificationModalOpen] = useState(false);

  const customMsg = isVerificationSuccess ? 'You deposit was successful' : 'An error has ocurred';

  const verifyStatus = useCallback(async () => await loginStatus(), [loginStatus]);

  const handleCloseNotificationModal = () => {
    setIsNotificationModalOpen(false);
    window.location.replace(window.location.origin);
  };

  const handleRedirection = () => {
    if (location.search === '?failure') {
      setIsVerificationSuccess(false);
      setIsNotificationModalOpen(true);
    }

    if (location.search === '?success') {
      setIsVerificationSuccess(true);
      setIsNotificationModalOpen(true);
    }
  };

  useEffect(() => {
    verifyStatus();
  }, [verifyStatus]);

  useEffect(() => {
    handleRedirection();
  }, [location]);

  return (
    <>
      <BackgroundLayout />
      <div className={styles.topBarLayout}>
        {isTopBarVisible && <TopBar />}
        {pageComponent}
        <Login />
        <Signup />
        <ForgotPasswordModal />
        <Checkboxes />
        <CreditCardModal />
        <CC />
        <KYC />

        <NotificationModal
          isOpen={isNotificationModalOpen}
          isVerificationSuccess={isVerificationSuccess}
          handleClose={handleCloseNotificationModal}
          customMsg={customMsg}
        />
      </div>
      <BottomBar />
    </>
  );
};
