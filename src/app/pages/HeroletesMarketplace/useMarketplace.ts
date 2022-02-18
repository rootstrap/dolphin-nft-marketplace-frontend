import { NFT } from 'app/interfaces/NFT/NFT';
import {
  NftsHeroletesSecondaryParams,
  useGetNftsHeroletesSecondaryMutation,
} from 'app/services/nft/NftService';
import { useCallback, useEffect, useState } from 'react';

export const useMarketplace = () => {
  const [queryParams, setQueryParams] = useState<NftsHeroletesSecondaryParams>({
    startInclusive: 0,
    endExclusive: 5,
    filters: null,
  });
  const [heroletes, setHeroletes] = useState<NFT[]>([]);

  const [getHeroletesNfts, { isLoading }] = useGetNftsHeroletesSecondaryMutation();

  const getHeroletes = useCallback(async () => {
    const data: any = await getHeroletesNfts(queryParams);

    setHeroletes(data.data.nfts);
  }, [queryParams, setHeroletes, getHeroletesNfts]);

  useEffect(() => {
    getHeroletes();
  }, [getHeroletes]);

  return {
    heroletes,
    setHeroletes,
    isLoading,
    setQueryParams,
    getHeroletes,
  };
};
