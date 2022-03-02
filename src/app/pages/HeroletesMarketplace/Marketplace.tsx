import { Attributes, NFT } from 'app/interfaces/NFT/NFT';
import { NftsHeroletesSecondaryParams } from 'app/services/nft/NftService';
import { createContext } from 'react';
import { useMarketplace } from './useMarketplace';

export const MarketplaceContext = createContext({} as MarketplaceContextProps);
const { Provider } = MarketplaceContext;

export const Marketplace = ({ children }: MarketplaceProps) => {
  const { heroletes, heroletesCount, isLoading, nftAttributes, setHeroletes, setQueryParams } =
    useMarketplace();

  return (
    <Provider
      value={{
        heroletes,
        heroletesCount,
        isLoading,
        nftAttributes,
        setHeroletes,
        setQueryParams,
      }}
    >
      {children}
    </Provider>
  );
};

interface MarketplaceProps {
  children?: JSX.Element | JSX.Element[];
}

interface MarketplaceContextProps {
  heroletes: NFT[];
  heroletesCount: number;
  isLoading: boolean;
  nftAttributes: Attributes[];
  setHeroletes: React.Dispatch<React.SetStateAction<NFT[]>>;
  setQueryParams: React.Dispatch<React.SetStateAction<NftsHeroletesSecondaryParams>>;
}
