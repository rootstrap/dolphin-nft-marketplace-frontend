import { createContext } from 'react';
import { TopBarLayout } from 'app/components/Layout/TopBarLayout';
import { useParams } from 'react-router-dom';
import { Main } from './Main/Main';
import { TradeHistory } from './Main/TradeHistory';
import { useNFT } from './Main/useNFT';
import { NFT } from '../../interfaces/NFT/NFT';

export const NFTByIdContext = createContext({} as NFTByIdContextProps);
const { Provider } = NFTByIdContext;

const NFTByIdPage = () => {
  const { ftxId } = useParams<{ ftxId: string }>();

  const {
    handleClosePeersModal,
    handleOpenPeersModal,
    handleShowDescription,
    isLoading,
    isPeersModalOpen,
    nft,
    nfts,
    priceInUsd,
    showItemDescription,
  } = useNFT(ftxId);

  return (
    <TopBarLayout
      pageComponent={
        <Provider
          value={{
            handleClosePeersModal,
            handleOpenPeersModal,
            handleShowDescription,
            isLoading,
            isPeersModalOpen,
            nft,
            nfts,
            priceInUsd,
            showItemDescription,
          }}
        >
          <Main />
          <TradeHistory ftxId={ftxId} />
        </Provider>
      }
    />
  );
};

export default NFTByIdPage;

interface NFTByIdContextProps {
  handleClosePeersModal: () => void;
  handleOpenPeersModal: () => void;
  handleShowDescription: () => void;
  isLoading: boolean;
  isPeersModalOpen: boolean;
  nft: NFT;
  nfts: NFT[];
  priceInUsd: number;
  showItemDescription: boolean;
}
