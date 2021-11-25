import { FaqAccordion } from 'presentation/components/FAQAccordion/FaqAccordion';
import { Social } from '../Social/Social';
import { StartMap } from '../StartMap/StartMap';
import { Perks } from '../Perks/Perks';
import { KnowUs } from '../KnowUs/KnowUs';
import { MainContent } from './MainContent';
import useTranslation from 'app/hooks/useTranslation';
import { CreaturesCarousel } from '../Carousel/CreaturesCarousel';

export const Main = () => {
  const t = useTranslation();

  return (
    <>
      <MainContent />
      <CreaturesCarousel />
      <KnowUs />
      <Perks />
      <StartMap />
      <FaqAccordion />
      <Social />
    </>
  );
};
