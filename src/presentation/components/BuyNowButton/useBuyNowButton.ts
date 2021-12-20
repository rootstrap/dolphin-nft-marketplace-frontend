import { ModalContext } from 'app/context/ModalContext';
import { useBuyNftByPackMutation } from 'infrastructure/services/nft/NftService';
import { useContext, useEffect, useState } from 'react';

export const useBuyNowButton = () => {
  const [buyNft, { isLoading, isSuccess, isError, error: buyError }] = useBuyNftByPackMutation();
  const { creaturesBuyNowModalIsOpen, setCreaturesBuyNowModalIsOpen } = useContext(ModalContext);

  const [error, setError] = useState<string>('');

  const handleClose = () => {
    setError('');
    setCreaturesBuyNowModalIsOpen(false);
  };

  useEffect(() => {
    if (isError) {
      const error = Object(buyError);
      setError(error.data.error);
      setCreaturesBuyNowModalIsOpen(true);
    }
  }, [isError]);

  return {
    buyNft,
    isLoading,
    isSuccess,
    isError,
    error,
    handleClose,
    creaturesBuyNowModalIsOpen,
  };
};
