import { ReactElement } from 'react';
import { BottomBar } from 'presentation/components/BottomBar/BottomBar';
import { CreditCardModal } from 'presentation/components/CreditCardModal/CreditCardModal';
import { Login } from 'presentation/components/Login/Login';
import { Signup } from 'presentation/components/Signup/Signup';
import { TopBar } from 'presentation/components/TopBar/TopBar';
import { BackgroundLayout } from './BackgroundLayout';

interface TopBarLayoutProps {
  pageComponent: ReactElement;
  isTopBarDisabled?: boolean;
}

export const TopBarLayout = ({ pageComponent, isTopBarDisabled = false }: TopBarLayoutProps) => {
  return (
    <>
      <BackgroundLayout />
      <TopBar isTopBarDisabled={isTopBarDisabled} />
      {pageComponent}
      <Login />
      <Signup />
      <CreditCardModal />
      <BottomBar />
    </>
  );
};
