import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { KnowHowContent } from './KnowHow/KnowHow';
import { Footer } from './Footer/Footer';
import { PromotionContent } from './Promotion/Promotion';
import { PromotionCarousel } from './Promotion/PromotionCarousel';

const HomePage = () => (
  <>
    <TopBarLayout
      pageComponent={
        <>
          <PromotionContent />
          <KnowHowContent />
          <PromotionCarousel />
          <Footer />
        </>
      }
    />
  </>
);

export default HomePage;
