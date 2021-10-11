import { useEffect, useState } from 'react';
import { useGetNftsFeaturedMutation } from 'infrastructure/services/nft/NftService';
import { NFT } from 'app/interfaces/NFT/NFT';

export const useMyCollection = () => {
  const [getNftsFeatured, { isError, isLoading, isSuccess }] = useGetNftsFeaturedMutation();
  const [nfts, setNfts] = useState<NFT[]>([]);

  const loadData = async () => {
    const data: any = await getNftsFeatured();
    setNfts(data.data);
  };

  useEffect(() => {
    loadData();

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return {
    nfts,
    isLoading,
    isError,
    isSuccess,
  };
};
