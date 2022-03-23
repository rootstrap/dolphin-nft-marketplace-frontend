import { createContext } from 'react';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useNftDetails } from './useNftDetails';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import styles from './NftDetails.module.scss';
import { INftTradesResult } from 'app/interfaces/NFT/NFTCommons';
import { WithdrawNftModal } from 'app/components/WithdrawNftModal/WithdrawNftModal';

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
    isWithdrawModalOpen,
    setIsWithdrawModalOpen,
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
        setIsWithdrawModalOpen,
      }}
    >
      <div className={styles.secondaryMarket}>
        {isLoading || isSellNftLoading ? (
          <CustomLoader />
        ) : (
          <>
            {children}
            <WithdrawNftModal
              handleClose={() => setIsWithdrawModalOpen(false)}
              id={nftId}
              title={nft?.name}
              withdrawModalIsOpen={isWithdrawModalOpen}
            />
          </>
        )}
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
  setIsWithdrawModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
