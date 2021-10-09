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
          <PromotionContent />
          <KnowHowContent />
          <MainContent />
          <Footer />
        </>
      }
    />
  </>
);

export default HomePage;
