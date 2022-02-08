import { useCallback, useEffect, useState } from 'react';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useGetNftDetailsMutation } from 'app/services/nft/NftService';

export const useNFT = (nftId: string) => {
  const [nft, setNft] = useState<NFT>();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [getNftDetails, { isLoading }] = useGetNftDetailsMutation();

  const loadData = useCallback(async () => {
    const data: any = await getNftDetails(nftId);
    setNft(data.data[0]);
    setNfts(data.data);
  }, [getNftDetails, nftId]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    nft,
    nfts,
    isLoading,
  };
};
