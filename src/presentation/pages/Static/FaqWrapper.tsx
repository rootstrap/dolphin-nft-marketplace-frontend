import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { FaqContent } from 'presentation/pages/Static/FaqContent';

const FaqWrapper = () => (
  <TopBarLayout
    pageComponent={
      <>
        <FaqContent />
      </>
    }
  />
);

export default FaqWrapper;
