import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { Main } from './Main/Main';

const HomePage = () => <TopBarLayout pageComponent={<Main />} />;

export default HomePage;
