import { NFT } from 'app/interfaces/NFT/NFT';
import {
  NftsHeroletesSecondaryParams,
  useGetNftsHeroletesSecondaryMutation,
} from 'app/services/nft/NftService';
import { useCallback, useEffect, useState } from 'react';

export const useMarketplace = () => {
  const [queryParams, setQueryParams] = useState<NftsHeroletesSecondaryParams>({
    startInclusive: 0,
    endExclusive: 6,
    filters: null,
  });
  const [heroletes, setHeroletes] = useState<NFT[]>([]);
  const [heroletesCount, setHeroletesCount] = useState<number>(0);

  const [getHeroletesNfts, { isLoading }] = useGetNftsHeroletesSecondaryMutation();

  const getHeroletes = useCallback(async () => {
    const data: any = await getHeroletesNfts(queryParams);

    setHeroletes(data.data.nfts);
    setHeroletesCount(data.data.total);
  }, [queryParams, setHeroletes, getHeroletesNfts]);

  useEffect(() => {
    getHeroletes();
  }, [getHeroletes]);

  return {
    heroletes,
    heroletesCount,
    setHeroletes,
    isLoading,
    setQueryParams,
  };
};
