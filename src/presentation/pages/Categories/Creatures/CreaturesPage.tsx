import { ThemeProvider } from '@material-ui/core';
import { creaturesTheme } from 'app/themes/CreaturesTheme';
import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { Main } from './Main/Main';

const CreaturesPage = () => {
  return (
    <ThemeProvider theme={creaturesTheme}>
      <TopBarLayout pageComponent={<Main />} />
    </ThemeProvider>
  );
};

export default CreaturesPage;
