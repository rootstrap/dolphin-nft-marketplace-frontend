import { NFT } from 'app/interfaces/NFT/NFT';
import {
  NftsHeroletesSecondaryParams,
  useGetNftsHeroletesSecondaryMutation,
} from 'app/services/nft/NftService';
import { useCallback, useEffect, useState } from 'react';

export const useHeroleteList = () => {
  const [queryParams, setQueryParams] = useState<NftsHeroletesSecondaryParams>({
    startInclusive: 0,
    endExclusive: 5,
  });
  const [heroletes, setHeroletes] = useState<NFT[]>([]);
  const [getHeroletesNfts] = useGetNftsHeroletesSecondaryMutation();

  const getHeroletes = useCallback(async () => {
    const data: any = await getHeroletesNfts(queryParams);

    setHeroletes(data.data.nfts);
  }, [queryParams, setHeroletes, getHeroletesNfts]);

  useEffect(() => {
    getHeroletes();
  }, [getHeroletes]);

  return {
    heroletes,
  };
};
