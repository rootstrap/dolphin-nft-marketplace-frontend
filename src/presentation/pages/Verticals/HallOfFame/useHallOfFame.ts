import { useCallback, useEffect, useState } from 'react';
import { useGetNftsPrimaryMutation } from 'infrastructure/services/nft/NftService';
import { NFT } from 'app/interfaces/NFT/NFT';

export const useHallOfFame = () => {
  const [getNftsPrimary, { isError, isLoading, isSuccess }] = useGetNftsPrimaryMutation();
  const [nfts, setNfts] = useState<NFT[]>([]);

  const loadData = useCallback(async () => {
    const data: any = await getNftsPrimary();
    setNfts(data.data);
  }, [getNftsPrimary]);

  useEffect(() => {
    loadData();

    return () => {
      window.scrollTo(0, 0);
    };
  }, [loadData]);

  return {
    nfts,
    isLoading,
    isError,
    isSuccess,
  };
};
