import { useEffect, useState } from 'react';
import { NFT } from 'app/interfaces/NFT/NFT';

export const usePeers = (nfts: NFT[]) => {
  const [items, setItems] = useState<NFT[]>([]);
  const [isAscendentNumber, setIsAscendentNumber] = useState<boolean>(true);
  const [isAscendentPrice, setIsAscendentPrice] = useState<boolean>(true);

  useEffect(() => {
    setItems(nfts);
  }, [setItems, nfts]);

  const handleSortByNumber = () => {
    let sortedNfts = [...items];

    sortedNfts.sort((a, b) => {
      if (a.number < b.number) {
        return isAscendentNumber ? -1 : 1;
      }

      if (a.number > b.number) {
        return isAscendentNumber ? 1 : -1;
      }

      return 0;
    });

    setIsAscendentNumber(!isAscendentNumber);
    setItems(sortedNfts);
  };

  const handleSortByPrice = () => {
    let sortedNfts = [...items];

    sortedNfts.sort((a, b) => {
      if (a.offerPrice < b.offerPrice) {
        return isAscendentPrice ? -1 : 1;
      }

      if (a.offerPrice > b.offerPrice) {
        return isAscendentPrice ? 1 : -1;
      }

      return 0;
    });

    setIsAscendentPrice(!isAscendentPrice);
    setItems(sortedNfts);
  };

  return {
    items,
    handleSortByNumber,
    handleSortByPrice,
  };
};
