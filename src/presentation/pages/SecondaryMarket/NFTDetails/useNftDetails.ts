import { useCallback, useEffect, useState } from 'react';
import { useGetNftByIdMutation, useSellNftMutation } from 'infrastructure/services/nft/NftService';
import { NFT } from 'app/interfaces/NFT/NFT';
import { IError } from 'app/interfaces/common/Error';

export const useNftDetails = (nftId: string) => {
  const [nftPrice, setNftPrice] = useState('');
  const [nft, setNft] = useState<NFT>();
  const [isInputVisible, setIsInputVisible] = useState(false);
  const [sellError, setSellError] = useState('');

  const [getNftById, { isLoading }] = useGetNftByIdMutation();
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

    setNft(nftById.data.result);
  }, [getNftById, nftId]);

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
  };
};
