import { useCallback, useEffect, useState } from 'react';
import { useGetNftsPrimaryMutation } from 'infrastructure/services/nft/NftService';
import { NFT } from 'app/interfaces/NFT/NFT';

export const useHallOfFame = () => {
  const [getNftsPrimary, { isError, isLoading, isSuccess, data }] = useGetNftsPrimaryMutation();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [tier, setTier] = useState<string>('');
  const [legend, setLegend] = useState<string>('');

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
