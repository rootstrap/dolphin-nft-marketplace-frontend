import { ReactElement } from 'react';
import { TopBar } from '../../../presentation/components/TopBar/TopBar';

interface TopBarLayoutProps {
  pageComponent: ReactElement;
}

export const TopBarLayout = ({ pageComponent }: TopBarLayoutProps) => {
  return (
    <>
      <TopBar />
      <div>{pageComponent}</div>
    </>
  );
};
