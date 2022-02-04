import { useCallback, useEffect, useState } from 'react';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useGetNftByIdMutation, useGetNftTradeHistoryMutation } from 'infrastructure/services/nft/NftService';
import { INftTradesResult } from 'app/interfaces/NFT/NFTCommons';

export const useNFT = (ftxId: string) => {
  const [nft, setNft] = useState<NFT>();
  const [nftTradeHistory, setNftTradeHistory] = useState<INftTradesResult[]>([]);
  const [getNftById, { isLoading }] = useGetNftByIdMutation();
  const [getNftTrades, { isLoading: isTradeHistoryLoading }] = useGetNftTradeHistoryMutation();

  const loadData = useCallback(async () => {
    const nftById: any = await getNftById(ftxId);
    const nftTrades: any = await getNftTrades(ftxId);

    setNft(nftById.data.result);
    setNftTradeHistory(nftTrades.data.result);
  }, [getNftById, setNftTradeHistory, getNftTrades, ftxId]);

  useEffect(() => {
    loadData();
  }, [loadData, ftxId]);

  return {
    nft,
    isLoading,
    isTradeHistoryLoading,
    nftTradeHistory,
  };
};
