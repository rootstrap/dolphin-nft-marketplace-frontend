import { useEffect, useState } from 'react';
import { useGetNftDetailsMutation } from 'infrastructure/services/nft/NftService';
import { NFT } from 'app/interfaces/NFT/NFT';

export const usePeers = (id: string) => {
  const [getNftDetails, { isError, isLoading, isSuccess }] = useGetNftDetailsMutation();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const loadData = async () => {
    const data: any = await getNftDetails(id);
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
