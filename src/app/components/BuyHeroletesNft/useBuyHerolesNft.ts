import { useContext, useEffect, useState } from 'react';
import { useBuyNftMutation, nftApi } from 'app/services/nft/NftService';
import { NFTByIdContext } from 'app/pages/NFTByFtxId/NFTByIdPage';
import { useAppDispatch } from '../../hooks/reduxHooks';

export const useBuyHeroletesNft = (isOpen: boolean) => {
  const [error, setIsError] = useState('');
  const [buyNft, { isLoading, isSuccess, isError, error: errorRequest }] = useBuyNftMutation();
  const dispatch = useAppDispatch();

  const { nft } = useContext(NFTByIdContext);

  useEffect(() => {
    return () => {
      dispatch(nftApi.util.resetApiState());
      setIsError('');
    };
  }, [isOpen]);

  useEffect(() => {
    if (isError) {
      const { data } = errorRequest as any;
      setIsError(data.error);
    }
  }, [isError]);

  const handleOnClick = () =>
    buyNft({
      nftId: nft?.id,
      price: nft?.offerPrice,
      quoteCurrency: nft?.quoteCurrency,
    });

  return {
    error,
    handleOnClick,
    isError,
    isLoading,
    isSuccess,
  };
};
