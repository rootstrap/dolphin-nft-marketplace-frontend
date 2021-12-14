import { ThemeProvider } from '@material-ui/core';
import { creaturesTheme } from 'app/themes/CreaturesTheme';
import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { MainContent } from './Main/MainContent';

const CreaturesPage = () => {
  return (
    <ThemeProvider theme={creaturesTheme}>
      <TopBarLayout pageComponent={<MainContent />} isTopBarVisible={false} />
    </ThemeProvider>
  );
};

export default CreaturesPage;
