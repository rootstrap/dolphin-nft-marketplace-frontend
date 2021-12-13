import { useCallback, useEffect, useState } from 'react';
import { useGetNftsPrimaryMutation } from 'infrastructure/services/nft/NftService';
import { NFT } from 'app/interfaces/NFT/NFT';
import { Tiers, Legends } from 'app/interfaces/HallOfFame/HallOfFame';

export const useHallOfFame = () => {
  const [getNftsPrimary, { isError, isLoading, isSuccess, data }] = useGetNftsPrimaryMutation();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [tier, setTier] = useState<Tiers>('');
  const [legend, setLegend] = useState<Legends>('');

  const loadData = useCallback(async () => {
    const data: any = await getNftsPrimary();
    setNfts(data.data);
  }, [getNftsPrimary]);

  useEffect(() => {
    loadData();

    return () => {
      window.scrollTo(0, 0);
    };
  }, [loadData]);

  useEffect(() => {
    if (data) {
      setNfts(data.filter(nft => nft.collection.includes(legend)).filter(nft => nft.tier.includes(tier)));
    }
  }, [tier, legend, data]);

  return {
    nfts,
    isLoading,
    isError,
    isSuccess,
    tier,
    legend,
    setTier,
    setLegend,
  };
};
