import { createContext } from 'react';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useNftDetails } from './useNftDetails';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import styles from './NftDetails.module.scss';
import { INftTradesResult } from 'app/interfaces/NFT/NFTCommons';

export const NFTDetailsContext = createContext({} as NftDetailsContextProps);
const { Provider } = NFTDetailsContext;

export const NFTDetails = ({ children, nftId }: NFTDetailsProps) => {
  const {
    nft,
    isLoading,
    isInputVisible,
    setIsInputVisible,
    isSellNftLoading,
    nftPrice,
    setNftPrice,
    handleSellNft,
    cancelOfferNft,
    sellError,
    isTradeHistoryLoading,
    nftTradeHistory,
    isPriceInUsd,
    priceInUsd,
  } = useNftDetails(nftId);

  return (
    <Provider
      value={{
        nft,
        isLoading,
        isInputVisible,
        setIsInputVisible,
        isSellNftLoading,
        nftPrice,
        setNftPrice,
        handleSellNft,
        cancelOfferNft,
        sellError,
        isTradeHistoryLoading,
        nftTradeHistory,
        isPriceInUsd,
        priceInUsd,
      }}
    >
      <div className={styles.secondaryMarket}>
        {isLoading || isSellNftLoading ? <CustomLoader /> : children}
      </div>
    </Provider>
  );
};

interface NFTDetailsProps {
  children?: JSX.Element | JSX.Element[];
  nftId: string;
}

interface NftDetailsContextProps {
  nft: NFT;
  isLoading: boolean;
  isInputVisible: boolean;
  setIsInputVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isSellNftLoading: boolean;
  nftPrice: string;
  setNftPrice: React.Dispatch<React.SetStateAction<string>>;
  handleSellNft: () => void;
  cancelOfferNft: () => void;
  sellError: string;
  isTradeHistoryLoading: boolean;
  nftTradeHistory: INftTradesResult[];
  isPriceInUsd: boolean;
  priceInUsd: number | null;
}
