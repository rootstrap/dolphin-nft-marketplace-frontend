import { useResponsive } from '../../../app/hooks/useResponsive';
import { DesktopTopBar } from './DesktopTopBar';
import { MobileTopBar } from './MobileTopBar';
import styles from './TopBar.module.scss';

export const TopBar = () => {
  const { isMobileView } = useResponsive();

  return <nav className={styles.topBar}>{isMobileView ? <MobileTopBar /> : <DesktopTopBar />}</nav>;
};
