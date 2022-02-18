import { useEffect, useState } from 'react';
import { useGetHeroletesAttributesMutation, useGetNftsByUserMutation } from 'app/services/nft/NftService';
import { NFT, Attributes } from 'app/interfaces/NFT/NFT';

export const useProfile = () => {
  const [getNftsByUser, { isLoading }] = useGetNftsByUserMutation();
  const [getHeroletesAttributes] = useGetHeroletesAttributesMutation();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [nftAttributes, setNftAttributes] = useState<Attributes[]>([]);

  useEffect(() => {
    getHeroletesAttributes().then((response: any) => setNftAttributes(response.data));
    getNftsByUser({ start: 0, end: NaN }).then((response: any) => setNfts(response.data));
  }, []);

  return {
    nfts,
    nftAttributes,
    isLoading,
  };
};
