import { Button, Link, Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Main.module.scss';
import { HowItWorks } from '../HowItWorks/HowItWorks';
import { BackgroundImageLayout } from 'infrastructure/components/BackgroundImageLayout/BackgroundImageLayout';
import { AthElitesCarousel } from 'presentation/components/AthElitesCarousel/AthElitesCarousel';
import { carouselItems } from 'app/constants/athletes/remarkablesCarousel';

export const Main = () => {
  const t = useTranslation();

  return (
    <>
      <BackgroundImageLayout>
        <div className={styles.mainContent__header}>
          <Typography component="div" variant="h2" className={styles.mainContent__headerTitle}>
            {t('remarkables.title')}
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.mainContent__headerTeaser}>
            {t('remarkables.teaser')}
          </Typography>
          <div>
            <Link href="#athelites" underline="none">
              <Button className={styles.mainContent__headerButton}> {t('verticals.actionButton')}</Button>
            </Link>
          </div>
        </div>
      </BackgroundImageLayout>
      <HowItWorks />
      <AthElitesCarousel carouselItems={carouselItems} />
    </>
  );
};
