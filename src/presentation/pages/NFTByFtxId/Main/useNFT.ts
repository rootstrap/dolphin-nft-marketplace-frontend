import { useEffect, useState } from 'react';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useGetNftByIdMutation, useGetNftDetailsMutation } from 'infrastructure/services/nft/NftService';

export const useNFT = (ftxId: string) => {
  const [nft, setNft] = useState<NFT>();
  const [getNftById, { isLoading, isError, isSuccess }] = useGetNftByIdMutation();

  const loadData = async () => {
    const nftById: any = await getNftById(ftxId);

    setNft(nftById.data.result);
  };

  useEffect(() => {
    loadData();
  }, [ftxId]);

  return {
    nft,
    isLoading,
  };
};
