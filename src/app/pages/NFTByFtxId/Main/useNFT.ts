import { useCallback, useEffect, useState } from 'react';
import { NFT } from 'app/interfaces/NFT/NFT';
import { useGetNftByIdMutation, useGetNftTradeHistoryMutation } from 'app/services/nft/NftService';
import { INftTradesResult } from 'app/interfaces/NFT/NFTCommons';
import { currency } from 'app/constants/constants';
import { useGetMarketMutation } from 'app/services/deposit/DepositService';

export const useNFT = (ftxId: string) => {
  const [nft, setNft] = useState<NFT>();
  const [isPriceInUsd, setIsPriceInUsd] = useState(true);
  const [nftTradeHistory, setNftTradeHistory] = useState<INftTradesResult[]>([]);
  const [getNftById, { isLoading }] = useGetNftByIdMutation();
  const [getNftTrades, { isLoading: isTradeHistoryLoading }] = useGetNftTradeHistoryMutation();
  const [getMarket, { data: priceInUsd }] = useGetMarketMutation();

  const loadData = useCallback(async () => {
    const nftById: any = await getNftById(ftxId);
    const nftTrades: any = await getNftTrades(ftxId);

    setNft(nftById.data.result);
    setIsPriceInUsd(nftById.data.result?.quoteCurrency === currency.usd);
    setNftTradeHistory(nftTrades.data.result);
  }, [getNftById, setNftTradeHistory, getNftTrades, ftxId]);

  useEffect(() => {
    loadData();
  }, [loadData, ftxId]);

  useEffect(() => {
    if (!isPriceInUsd) {
      getMarket(`${nft?.quoteCurrency}/${currency.usd}`);
    }
  }, [nft, isPriceInUsd, getMarket]);

  return {
    nft,
    isLoading,
    isTradeHistoryLoading,
    nftTradeHistory,
    isPriceInUsd,
    priceInUsd,
  };
};
