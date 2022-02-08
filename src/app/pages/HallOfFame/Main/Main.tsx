import { Button, Typography, Link } from '@material-ui/core';
import { BackgroundImageLayout } from 'app/components/BackgroundImageLayout/BackgroundImageLayout';
import { HallOfFame } from '../HallOfFame/HallOfFame';
import { Promotion } from '../Promotion/Promotion';
import { useMain } from './useMain';
import FantasyLeague from 'app/assets/VerticalPromotionFantasyLeague.png';
import styles from './Main.module.scss';
import useTranslation from 'app/hooks/useTranslation';

export const Main = () => {
  const { nfts } = useMain();
  const t = useTranslation();

  return (
    <>
      <BackgroundImageLayout>
        <div className={styles.mainContent__title}>
          <Typography component="div" variant="h5" className={styles.mainContent__titleFeatured}>
            {t('verticals.preTitle')}
          </Typography>
          <Typography component="div" variant="h2" className={styles.mainContent__titleIssuer}>
            {t('verticals.title')}
          </Typography>
          <div>
            <Link href="#hallOfFame" underline="none">
              <Button className={styles.mainContent__titleButton}> {t('verticals.actionButton')}</Button>
            </Link>
          </div>
        </div>
      </BackgroundImageLayout>

      <HallOfFame />

      <div className={styles.mainContent__fantasyLeague}>
        <Promotion
          imgSrc={FantasyLeague}
          subtitle={t('verticals.fantasyLeague.title')}
          primaryText={t('verticals.fantasyLeague.primaryText')}
          secondaryText={t('verticals.fantasyLeague.secondaryText')}
          buttonText={t('verticals.fantasyLeague.actionButton')}
          link={`/${nfts[nfts.length - 1]?.id}`}
        />
      </div>
    </>
  );
};
