import { ReactElement } from 'react';
import { Login } from '../../../presentation/components/Login/Login';
import { Signup } from '../../../presentation/components/Signup/Signup';
import { TopBar } from '../../../presentation/components/TopBar/TopBar';

interface TopBarLayoutProps {
  pageComponent: ReactElement;
}

export const TopBarLayout = ({ pageComponent }: TopBarLayoutProps) => {
  return (
    <>
      <TopBar />
      <div>{pageComponent}</div>
      <Login />
      <Signup />
    </>
  );
};
