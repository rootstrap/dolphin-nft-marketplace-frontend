import BackgroundCarousel from 'app/assets/BackgroundCarousel.png';
import { FaqAccordion } from 'presentation/components/FAQAccordion/FaqAccordion';
import { Social } from '../Social/Social';
import { StartMap } from '../StartMap/StartMap';
import { Perks } from '../Perks/Perks';
import { KnowUs } from '../KnowUs/KnowUs';
import { MainContent } from './MainContent';
import useTranslation from 'app/hooks/useTranslation';
import styles from './MainContent.module.scss';

export const Main = () => {
  const t = useTranslation();

  return (
    <>
      <MainContent />

      <div className={styles.carousel} id="carousel">
        <div className={styles.carousel__background}>
          <img src={BackgroundCarousel} alt="" />
        </div>
      </div>

      <KnowUs />
      <Perks />
      <StartMap />
      <FaqAccordion />
      <Social />
    </>
  );
};
