import { useEffect, useState } from 'react';
import { useGetNftsSecondaryMutation } from 'infrastructure/services/nft/NftService';
import { NFT } from 'app/interfaces/NFT/NFT';

export const usePeers = () => {
  const [getNftsSecondary, { isError, isLoading, isSuccess }] = useGetNftsSecondaryMutation();
  const [nfts, setNfts] = useState<NFT[]>([]);

  const loadData = async () => {
    const data: any = await getNftsSecondary();
    setNfts(data.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    nfts,
    isLoading,
    isError,
    isSuccess,
  };
};
