import { useEffect, useState } from 'react';
import { DesktopTopBar } from './DesktopTopBar';
import { MobileTopBar } from './MobileTopBar';
import styles from './TopBar.module.scss';

export const TopBar = () => {
	const [isMobileView, setIsMobileView] = useState(false);

	useEffect(() => {
		const setResponsiveness = () => {
			return window.innerWidth < 950
				? setIsMobileView(true)
				: setIsMobileView(false);
		};

		setResponsiveness();

		window.addEventListener('resize', () => setResponsiveness());

		return () => {
			window.removeEventListener('resize', () => setResponsiveness());
		};
	}, []);

	return (
		<nav className={styles.topBar}>
			{isMobileView ? <MobileTopBar /> : <DesktopTopBar />}
		</nav>
	);
};
