import { useParams } from 'react-router-dom';
import { TopBarLayout } from 'infrastructure/components/Layout/TopBarLayout';
import { NFTDetails } from './NFTDetails/NFTDetails';
import { Title } from './NFTDetails/Title';
import { Image } from './NFTDetails/Image';
import { Buttons } from './NFTDetails/Buttons';

const SecondaryMarketPage = () => {
  const { nftId } = useParams<{ nftId: string }>();

  return (
    <TopBarLayout
      pageComponent={
        <NFTDetails nftId={nftId}>
          <Image />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              padding: '0 2%',
            }}
          >
            <Title />
            <Buttons />
          </div>
        </NFTDetails>
      }
    />
  );
};

export default SecondaryMarketPage;
