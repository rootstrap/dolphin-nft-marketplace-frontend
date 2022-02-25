import { Attributes, NFT } from 'app/interfaces/NFT/NFT';
import {
  NftsHeroletesSecondaryParams,
  useGetHeroletesAttributesMutation,
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
  const [nftAttributes, setNftAttributes] = useState<Attributes[]>([]);

  const [getHeroletesNfts, { isLoading }] = useGetNftsHeroletesSecondaryMutation();
  const [getHeroletesAttributes] = useGetHeroletesAttributesMutation();

  const getHeroletes = useCallback(async () => {
    const data: any = await getHeroletesNfts(queryParams);

    setHeroletes(data.data.nfts);
    setHeroletesCount(data.data.total);
    getHeroletesAttributes().then((response: any) => setNftAttributes(response.data));
  }, [queryParams, setHeroletes, getHeroletesNfts, getHeroletesAttributes]);

  useEffect(() => {
    getHeroletes();
  }, [getHeroletes]);

  return {
    heroletes,
    heroletesCount,
    setHeroletes,
    isLoading,
    setQueryParams,
    nftAttributes,
  };
};
