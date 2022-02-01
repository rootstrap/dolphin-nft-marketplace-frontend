import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { HowItWorks } from './HowItWorks/HowItWorks';
import { Main } from './Main/Main';
import { AthElitesCarousel } from 'presentation/components/AthElitesCarousel/AthElitesCarousel';
import { carouselItems } from 'app/constants/athletes/remarkablesCarousel';
import { WinterGrid } from './WinterGrid/WinterGrid';

const RemarkablesPage = () => (
  <TopBarLayout
    pageComponent={
      <>
        <Main />
        <HowItWorks />
        <AthElitesCarousel carouselItems={carouselItems} />
        <WinterGrid />
      </>
    }
  />
);

export default RemarkablesPage;
