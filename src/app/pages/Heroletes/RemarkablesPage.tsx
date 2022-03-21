import { TopBarLayout } from 'app/components/Layout/TopBarLayout';
import { HowItWorks } from './HowItWorks/HowItWorks';
import { Main } from './Main/Main';
import { AthElitesCarousel } from 'app/components/AthElitesCarousel/AthElitesCarousel';
import { carouselItems } from 'app/constants/heroletes/remarkablesCarousel';
import { IRLCollectibles } from 'app/components/IRLCollectibles/IRLCollectibles';
import { WinterGrid } from './WinterGrid/WinterGrid';
import { Rarity } from './Rarity/Rarity';

const RemarkablesPage = () => (
  <TopBarLayout
    pageComponent={
      <>
        <Main />
        <IRLCollectibles />
        <HowItWorks />
        <AthElitesCarousel carouselItems={carouselItems} />
        <WinterGrid />
        <Rarity />
      </>
    }
  />
);

export default RemarkablesPage;
