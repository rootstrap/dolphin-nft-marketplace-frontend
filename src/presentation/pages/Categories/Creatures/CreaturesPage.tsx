import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { MainContent } from './Main/Main';

const CreaturesPage = () => {
  return <TopBarLayout pageComponent={<MainContent />} />;
};

export default CreaturesPage;
