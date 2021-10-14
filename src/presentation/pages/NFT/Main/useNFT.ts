import { useEffect, useState } from 'react';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useGetNftDetailsMutation } from 'infrastructure/services/nft/NftService';

export const useNFT = (nftId: string) => {
  const [nft, setNft] = useState<NFT>();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [getNftDetails, { isLoading, isError, isSuccess }] = useGetNftDetailsMutation();

  const loadData = async () => {
    const data: any = await getNftDetails(nftId);
    setNft(data.data[0]);
    setNfts(data.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    nft,
    nfts,
    isLoading,
  };
};
