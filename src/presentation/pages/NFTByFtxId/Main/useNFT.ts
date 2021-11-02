import { useCallback, useEffect, useState } from 'react';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useGetNftByIdMutation } from 'infrastructure/services/nft/NftService';

export const useNFT = (ftxId: string) => {
  const [nft, setNft] = useState<NFT>();
  const [getNftById, { isLoading }] = useGetNftByIdMutation();

  const loadData = useCallback(async () => {
    const nftById: any = await getNftById(ftxId);

    setNft(nftById.data.result);
  }, [getNftById, ftxId]);

  useEffect(() => {
    loadData();
  }, [loadData, ftxId]);

  return {
    nft,
    isLoading,
  };
};
