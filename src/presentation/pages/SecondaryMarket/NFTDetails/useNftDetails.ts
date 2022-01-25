import { useCallback, useEffect, useState } from 'react';
import {
  useGetNftByIdMutation,
  useGetNftTradeHistoryMutation,
  useSellNftMutation,
} from 'infrastructure/services/nft/NftService';
import { NFT } from 'app/interfaces/NFT/NFT';
import { IError } from 'app/interfaces/common/Error';
import { INftTradesResult } from 'app/interfaces/NFT/NFTCommons';

export const useNftDetails = (nftId: string) => {
  const [nftPrice, setNftPrice] = useState('');
  const [nft, setNft] = useState<NFT>();
  const [nftTradeHistory, setNftTradeHistory] = useState<INftTradesResult[]>([]);
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [sellError, setSellError] = useState('');

  const [getNftById, { isLoading }] = useGetNftByIdMutation();
  const [getNftTrades, { isLoading: isTradeHistoryLoading }] = useGetNftTradeHistoryMutation();
  const [sellNft, { isLoading: isSellNftLoading, isSuccess, isError, error }] = useSellNftMutation();

  const handleSellNft = () => {
    setSellError('');

    sellNft({
      nftId: nft?.id,
      price: Number(nftPrice),
      quoteCurrency: nft?.quoteCurrency,
    });
  };

  const cancelOfferNft = () => {
    sellNft({ nftId: nft?.id, price: null, quoteCurrency: nft?.quoteCurrency });
  };

  const loadData = useCallback(async () => {
    const nftById: any = await getNftById(nftId);
    const nftTrades: any = await getNftTrades(nftId);

    setNft(nftById.data.result);
    setNftTradeHistory(nftTrades.data.result.slice(0, 5));
  }, [getNftById, nftId, getNftTrades]);

  useEffect(() => {
    loadData();
  }, [loadData, nftId]);

  useEffect(() => {
    if (isSuccess) {
      loadData();
      setIsInputVisible(false);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      const errorMsg = error as IError;
      setIsInputVisible(false);
      setSellError(errorMsg.data.error);
    }
  }, [isError]);

  return {
    nft,
    isLoading,
    isInputVisible,
    setIsInputVisible,
    isSellNftLoading,
    nftPrice,
    setNftPrice,
    handleSellNft,
    cancelOfferNft,
    sellError,
    isTradeHistoryLoading,
    nftTradeHistory,
  };
};
