import { Grid } from '@material-ui/core';
import AthletesFirst from 'app/assets/Athletes-1.png';
import AthletesSecond from 'app/assets/Athletes-2.png';
import AthletesThird from 'app/assets/Athletes-3.png';
import AthletesFourth from 'app/assets/Athletes-4.png';
import AthletesFifth from 'app/assets/Athletes-5.png';
import AthletesSixth from 'app/assets/Athletes-6.png';
import { useResponsive } from 'app/hooks/useResponsive';
import styles from './BackgroundImageLayout.module.scss';

export const BackgroundImageLayout = ({ children }: BackgroundImageLayoutProps) => {
  const { isMobileView, isTabletView } = useResponsive();

  return (
    <>
      {children}
      <Grid container className={styles.backgroundImageLayout}>
        <Grid item xs={6} md={2}>
          <img alt="" src={AthletesFirst} className={styles.backgroundImageLayout__img} />
        </Grid>
        <Grid item xs={6} md={2}>
          <img alt="" src={AthletesSecond} className={styles.backgroundImageLayout__img} />
        </Grid>
        {!isMobileView && !isTabletView && (
          <Grid item md={2}>
            <img alt="" src={AthletesThird} className={styles.backgroundImageLayout__img} />
          </Grid>
        )}
        {!isMobileView && !isTabletView && (
          <Grid item md={2}>
            <img alt="" src={AthletesFourth} className={styles.backgroundImageLayout__img} />
          </Grid>
        )}
        {!isMobileView && !isTabletView && (
          <Grid item md={2}>
            <img alt="" src={AthletesFifth} className={styles.backgroundImageLayout__img} />
          </Grid>
        )}
        {!isMobileView && !isTabletView && (
          <Grid item md={2}>
            <img alt="" src={AthletesSixth} className={styles.backgroundImageLayout__img} />
          </Grid>
        )}
      </Grid>
    </>
  );
};

interface BackgroundImageLayoutProps {
  children?: JSX.Element | JSX.Element[];
}
