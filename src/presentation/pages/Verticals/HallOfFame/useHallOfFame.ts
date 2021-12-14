import { useCallback, useEffect, useState } from 'react';
import { useGetNftsPrimaryMutation } from 'infrastructure/services/nft/NftService';
import { NFT } from 'app/interfaces/NFT/NFT';
import MarcusAllen from 'app/assets/Athlete-MarcusAllen.png';
import DoakWalker from 'app/assets/Athlete-DoakWalker.png';
import EarlCampbell from 'app/assets/Athlete-EarlCampbell.png';
import JoeTheismann from 'app/assets/Athlete-JoeTheissmann.png';
import ShannonSharpe from 'app/assets/Athlete-ShannonSharpe.png';
import TimBrown from 'app/assets/Athlete-TimBrown.png';
import { Tiers, Legends, IItemBanner } from 'app/interfaces/HallOfFame/HallOfFame';

const itemBanners: IItemBanner[] = [
  { image: MarcusAllen, legend: 'Marcus Allen' },
  { image: DoakWalker, legend: 'Doak Walker' },
  { image: EarlCampbell, legend: 'Earl Campbell' },
  { image: JoeTheismann, legend: 'Joe Theismann' },
  { image: ShannonSharpe, legend: 'Shannon Sharpe' },
  { image: TimBrown, legend: 'Tim Brown' },
];
const tiers: Tiers[] = ['Legend', 'Icon', 'Phenom', 'Star'];

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
      setNfts(
        data
          .filter(nft => nft.collection.includes(legend))
          .filter(nft => nft.tier.includes(tier.toLowerCase()))
      );
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
    itemBanners,
    tiers,
  };
};
