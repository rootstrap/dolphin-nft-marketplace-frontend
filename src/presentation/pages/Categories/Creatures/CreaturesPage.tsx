import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { MainContent } from './Main/Main';

const CreaturesPage = () => {
  return <TopBarLayout isTopBarDisabled pageComponent={<MainContent />} />;
};

export default CreaturesPage;
