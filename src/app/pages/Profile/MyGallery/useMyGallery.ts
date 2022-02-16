import { useEffect, useState } from 'react';
import { useGetNftsByUserMutation } from 'app/services/nft/NftService';
import { NFT } from 'app/interfaces/NFT/NFT';

export const useMyGallery = () => {
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
