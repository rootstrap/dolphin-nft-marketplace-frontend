import { useEffect, useState } from 'react';
import { useGetHeroletesAttributesMutation, useGetNftsByUserMutation } from 'app/services/nft/NftService';
import { NFT, Attributes } from 'app/interfaces/NFT/NFT';

export const useProfile = () => {
  const [getNftsByUser, { isLoading }] = useGetNftsByUserMutation();
  const [getHeroletesAttributes] = useGetHeroletesAttributesMutation();
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [nftAttributes, setNftAttributes] = useState<Attributes[]>([]);
  const [NftsCount, setNftsCount] = useState<number>(0);
  const [pageCount, setPageCount] = useState<number>(0);
  const [pageOffset, setPageOffset] = useState<number>(0);
  const itemsPerPage = 6;

  useEffect(() => {
    getHeroletesAttributes().then((response: any) => setNftAttributes(response.data));
    getNftsByUser({ start: 0, end: itemsPerPage }).then((response: any) => {
      setNfts(response.data.nfts);
      setNftsCount(response.data.count);
    });
  }, [getHeroletesAttributes, getNftsByUser]);

  useEffect(() => {
    setPageCount(Math.ceil(NftsCount / itemsPerPage));
  }, [NftsCount, pageOffset]);

  const handlePageClick = (event: any) => {
    setPageOffset(event.selected);
    getNftsByUser({
      start: event.selected * itemsPerPage,
      end: event.selected * itemsPerPage + itemsPerPage,
    }).then((response: any) => setNfts(response.data.nfts));
  };

  return {
    nfts,
    nftAttributes,
    isLoading,
    handlePageClick,
    pageCount,
    pageOffset,
  };
};
