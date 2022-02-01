import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { HowItWorks } from './HowItWorks/HowItWorks';
import { Main } from './Main/Main';
import { AthElitesCarousel } from 'presentation/components/AthElitesCarousel/AthElitesCarousel';
import { carouselItems } from 'app/constants/heroletes/remarkablesCarousel';
import { WinterGrid } from './WinterGrid/WinterGrid';
import { Rarity } from './Rarity/Rarity';

const RemarkablesPage = () => (
  <TopBarLayout
    pageComponent={
      <>
        <Main />
        <HowItWorks />
        <AthElitesCarousel carouselItems={carouselItems} />
        <Rarity />
        <WinterGrid />
      </>
    }
  />
);

export default RemarkablesPage;
