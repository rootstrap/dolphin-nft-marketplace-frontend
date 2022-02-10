import { useParams } from 'react-router-dom';
import { TopBarLayout } from 'app/components/Layout/TopBarLayout';
import { NFTDetails } from './NFTDetails/NFTDetails';
import { Title } from './NFTDetails/Title';
import { Image } from './NFTDetails/Image';
import { Buttons } from './NFTDetails/Buttons';
import { SecondaryMarketTradeHistory } from './NFTDetails/SecondaryMarketTradeHistory';
import styles from './NFTDetails/NftDetails.module.scss';

const SecondaryMarketPage = () => {
  const { nftId } = useParams<{ nftId: string }>();

  return (
    <TopBarLayout
      pageComponent={
        <NFTDetails nftId={nftId}>
          <div className={styles.secondaryMarketWrapper}>
            <div className={styles.secondaryMarketWrapper__main}>
              <Image />
              <div className={styles.secondaryMarketWrapper__description}>
                <Title />
                <Buttons />
              </div>
            </div>
            <SecondaryMarketTradeHistory />
          </div>
        </NFTDetails>
      }
    />
  );
};

export default SecondaryMarketPage;
