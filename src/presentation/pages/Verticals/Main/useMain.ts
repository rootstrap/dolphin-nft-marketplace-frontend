import { NFT } from 'app/interfaces/NFT/NFT';
import { useGetNftsPrimaryMutation } from 'infrastructure/services/nft/NftService';
import { useCallback, useEffect, useState } from 'react';

export const useMain = () => {
  const [getNfts] = useGetNftsPrimaryMutation();
  const [nfts, setNfts] = useState<NFT[]>([]);

  const loadData = useCallback(async () => {
    const data: any = await getNfts();
    setNfts(data.data);
  }, [getNfts]);

  useEffect(() => {
    loadData();

    return () => {
      window.scrollTo(0, 0);
    };
  }, [loadData]);

  return {
    nfts,
  };
};
