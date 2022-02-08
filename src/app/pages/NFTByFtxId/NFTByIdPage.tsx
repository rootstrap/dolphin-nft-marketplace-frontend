import { TopBarLayout } from 'app/components/Layout/TopBarLayout';
import { useParams } from 'react-router-dom';
import { Main } from './Main/Main';
import { TradeHistory } from './Main/TradeHistory';

const NFTByIdPage = () => {
  const { ftxId } = useParams<{ ftxId: string }>();

  return (
    <TopBarLayout
      pageComponent={
        <>
          <Main ftxId={ftxId} />
          <TradeHistory ftxId={ftxId} />
        </>
      }
    />
  );
};

export default NFTByIdPage;
