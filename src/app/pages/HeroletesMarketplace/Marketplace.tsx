import { NFT } from 'app/interfaces/NFT/NFT';
import { NftsHeroletesSecondaryParams } from 'app/services/nft/NftService';
import { createContext } from 'react';
import { useMarketplace } from './useMarketplace';

export const NFTDetailsContext = createContext({} as MarketplaceContextProps);
const { Provider } = NFTDetailsContext;

export const Marketplace = ({ children }: MarketplaceProps) => {
  const { heroletes, setHeroletes, heroletesCount, isLoading, setQueryParams } = useMarketplace();

  return (
    <Provider
      value={{
        heroletes,
        setHeroletes,
        heroletesCount,
        isLoading,
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
  setHeroletes: React.Dispatch<React.SetStateAction<NFT[]>>;
  heroletesCount: number;
  isLoading: boolean;
  setQueryParams: React.Dispatch<React.SetStateAction<NftsHeroletesSecondaryParams>>;
}
