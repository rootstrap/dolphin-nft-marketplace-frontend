import { TopBarLayout } from 'app/components/Layout/TopBarLayout';
import { HomeCarousel, KnowHowContent, PromotionContent } from './';

const HomePage = () => (
  <>
    <TopBarLayout
      pageComponent={
        <>
          <HomeCarousel />
          <KnowHowContent />
          <PromotionContent />
        </>
      }
    />
  </>
);

export default HomePage;
