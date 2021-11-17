import { ReactElement } from 'react';
import { BottomBar } from 'presentation/components/BottomBar/BottomBar';
import { CreditCardModal } from 'presentation/components/CreditCardModal/CreditCardModal';
import { Login } from 'presentation/components/Login/Login';
import { Signup } from 'presentation/components/Signup/Signup';
import { TopBar } from 'presentation/components/TopBar/TopBar';
import { BackgroundLayout } from './BackgroundLayout';
import { CC } from 'presentation/components/CC/CC';

interface TopBarLayoutProps {
  pageComponent: ReactElement;
}

export const TopBarLayout = ({ pageComponent }: TopBarLayoutProps) => {
  return (
    <>
      <BackgroundLayout />
      <TopBar />
      {pageComponent}
      <Login />
      <Signup />
      <CreditCardModal />
      <CC />
      <BottomBar />
    </>
  );
};
