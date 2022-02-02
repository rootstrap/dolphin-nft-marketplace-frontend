import { useCallback, useEffect, useState } from 'react';
import { useGetNftsFeaturedMutation } from 'infrastructure/services/nft/NftService';
import { NFT } from 'app/interfaces/NFT/NFT';

export const usePromotion = () => {
  const [getNftsFeatured, { isError, isLoading, isSuccess }] = useGetNftsFeaturedMutation();
  const [nfts, setNfts] = useState<NFT[]>([]);

  const loadData = useCallback(async () => {
    const data: any = await getNftsFeatured();
    setNfts(data.data);
  }, [getNftsFeatured, setNfts]);

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
