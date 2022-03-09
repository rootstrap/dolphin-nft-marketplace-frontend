import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'app/hooks/reduxHooks';
import { depositApi, useInitiateDepositMutation } from 'app/services/deposit/DepositService';
import { encryptData } from 'app/helpers/encryptData';
import { keyId, publicKey } from 'app/constants/constants';

export const useFundWallet = (open: boolean) => {
  const [deposit, setDeposit] = useState({
    cvv: 0,
    depositSize: 0,
  });
  const [error, setError] = useState('');

  const dispatch = useAppDispatch();
  const { id, data } = useAppSelector(state => state.creditCard.defaultCreditCard);
  const [initiateDeposit, { isLoading, isSuccess, isError, data: depositData }] =
    useInitiateDepositMutation();

  const handleOnClick = async () => {
    const data = await encryptData(publicKey, keyId, {
      cvv: deposit.cvv,
    });

    await initiateDeposit({
      keyId: keyId,
      encryptedData: data.encryptedData,
      cardId: id,
      size: deposit.depositSize,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setDeposit({ ...deposit, [name]: value });
  };

  useEffect(() => {
    return () => {
      dispatch(depositApi.util.resetApiState());
      setError('');
    };
  }, [open]);

  useEffect(() => {
    if ((isSuccess && depositData.result?.errorCode) || isError) {
      setError('An Error has ocurred');
    }
  }, [isError, isSuccess, depositData]);

  return {
    data,
    deposit,
    error,
    handleInputChange,
    handleOnClick,
    isLoading,
    isSuccess,
  };
};
