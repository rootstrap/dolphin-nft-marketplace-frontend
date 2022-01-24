import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { HowItWorks } from './HowItWorks/HowItWorks';
import { Main } from './Main/Main';
import { AthElitesCarousel } from 'presentation/components/AthElitesCarousel/AthElitesCarousel';
import { carouselItems } from 'app/constants/athletes/remarkablesCarousel';

const RemarkablesPage = () => (
  <TopBarLayout
    pageComponent={
      <>
        <Main />
        <HowItWorks />
        <AthElitesCarousel carouselItems={carouselItems} />
      </>
    }
  />
);

export default RemarkablesPage;
