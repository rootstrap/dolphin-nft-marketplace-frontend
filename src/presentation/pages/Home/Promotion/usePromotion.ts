import { useEffect, useState } from 'react';
import { useGetNftsFeaturedMutation } from 'infrastructure/services/nft/NftService';
import { NFT } from 'app/interfaces/NFT/NFT';

export const usePromotion = () => {
  const [getNftsFeatured, { isError, isLoading, isSuccess }] = useGetNftsFeaturedMutation();
  const [primaryIndex, setPrimaryIndex] = useState(0);
  const [secondaryIndex, setSecondaryIndex] = useState(1);
  const [nfts, setNfts] = useState<NFT[]>([]);

  const carouselContent = nfts.filter((nft, index) => index === primaryIndex || index === secondaryIndex);

  const handleOnClick = (direction: 'right' | 'left') => {
    const increment = direction === 'right' ? 1 : -1;

    const numOfItems = nfts.length;

    const newPrimaryIndex = (primaryIndex + increment + numOfItems) % numOfItems;
    const newSecondaryIndex = newPrimaryIndex === numOfItems - 1 ? 0 : newPrimaryIndex + 1;

    setPrimaryIndex(newPrimaryIndex);
    setSecondaryIndex(newSecondaryIndex);
  };

  const loadData = async () => {
    const data: any = await getNftsFeatured();
    setNfts(data.data);
  };

  useEffect(() => {
    loadData();

    return () => {
      window.scrollTo(0, 0);
    };
  }, []);

  return {
    nfts,
    isLoading,
    isError,
    isSuccess,
    carouselContent,
    handleOnClick,
  };
};
