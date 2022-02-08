import { TopBarLayout } from 'app/components/Layout/TopBarLayout';
import { KnowHowContent } from './KnowHow/KnowHow';
import { PromotionContent } from './Promotion/PromotionContent';
import { PromotionCarousel } from './Promotion/PromotionCarousel';

const HomePage = () => (
  <>
    <TopBarLayout
      pageComponent={
        <>
          <PromotionContent />
          <KnowHowContent />
          <PromotionCarousel />
        </>
      }
    />
  </>
);

export default HomePage;
