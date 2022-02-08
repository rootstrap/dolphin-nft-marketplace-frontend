import { useResponsive } from 'app/hooks/useResponsive';
import { DesktopTopBar } from './DesktopTopBar';
import { MobileTopBar } from './MobileTopBar';

export const TopBar = () => {
  const { isMobileView } = useResponsive();

  return isMobileView ? <MobileTopBar /> : <DesktopTopBar />;
};
