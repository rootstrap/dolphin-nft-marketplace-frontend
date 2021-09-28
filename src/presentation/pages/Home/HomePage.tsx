import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { KnowHowContent } from './KnowHow/KnowHow';
import { MainContent } from './Main/Main';
import { Footer } from './Footer/Footer';
import { PromotionContent } from './Promotion/Promotion';

const HomePage = () => (
  <>
    <TopBarLayout
      pageComponent={
        <>
          <MainContent />
          <KnowHowContent />
          <PromotionContent />
          <Footer />
        </>
      }
    />
  </>
);

export default HomePage;
