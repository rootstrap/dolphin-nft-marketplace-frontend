import { ThemeProvider } from '@material-ui/core';
import { creaturesTheme } from 'app/themes/CreaturesTheme';
import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { FaqAccordion } from 'presentation/components/FAQAccordion/FaqAccordion';
import { CreaturesCarousel, KnowUs, Main, Perks, Social, StartMap } from '../Creatures';

const CreaturesPage = () => {
  return (
    <ThemeProvider theme={creaturesTheme}>
      <TopBarLayout
        pageComponent={
          <>
            <Main />
            <CreaturesCarousel />
            <KnowUs />
            <Perks />
            <StartMap />
            <FaqAccordion />
            <Social />
          </>
        }
      />
    </ThemeProvider>
  );
};

export default CreaturesPage;
