import { TopBarLayout } from 'app/components/Layout/TopBarLayout';
import { HowItWorks } from './HowItWorks/HowItWorks';
import { Main } from './Main/Main';
import { AthElitesCarousel } from 'app/components/AthElitesCarousel/AthElitesCarousel';
import { carouselItems } from 'app/constants/heroletes/remarkablesCarousel';
import { LegalDropDown } from './LegalDropdown/LegalDropDown';
import { WinterGrid } from './WinterGrid/WinterGrid';
import { Rarity } from './Rarity/Rarity';

const RemarkablesPage = () => (
  <TopBarLayout
    pageComponent={
      <>
        <Main />
        <HowItWorks />
        <AthElitesCarousel carouselItems={carouselItems} />
        <LegalDropDown />
        <WinterGrid />
        <Rarity />
      </>
    }
  />
);

export default RemarkablesPage;
