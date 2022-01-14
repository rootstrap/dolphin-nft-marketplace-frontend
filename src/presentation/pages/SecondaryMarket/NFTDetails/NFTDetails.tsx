import { createContext } from 'react';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useNftDetails } from './useNftDetails';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import styles from './NftDetails.module.scss';

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
    cancelSellNft,
    sellError,
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
        cancelSellNft,
        sellError,
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
  cancelSellNft: () => void;
  sellError: string;
}
