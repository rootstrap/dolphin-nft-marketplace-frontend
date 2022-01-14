import { useEffect, useState } from 'react';
import { useGetNftsByUserMutation } from 'infrastructure/services/nft/NftService';
import { NFT } from 'app/interfaces/NFT/NFT';

export const useMyCollection = () => {
  const [getNftsByUser, { isLoading }] = useGetNftsByUserMutation();
  const [nfts, setNfts] = useState<NFT[]>([]);

  const loadData = async () => {
    const response: any = await getNftsByUser();
    setNfts(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    nfts,
    isLoading,
  };
};
