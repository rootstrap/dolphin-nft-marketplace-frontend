import { useEffect, useState } from 'react';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useInitiateDepositMutation } from 'infrastructure/services/deposit/DepositService';
import { encryptData } from 'app/helpers/encryptData';

export const useDepositModal = (depositSize: number) => {
  const publicKey = process.env.REACT_APP_CC_PUBLIC_KEY;
  const keyId = process.env.REACT_APP_CC_KEY_ID;
  const [cvv, setCvv] = useState<CreditCard>({
    focus: 'number',
    cvc: 0,
  });

  const [error, setError] = useState('');
  const { id, name, data } = useAppSelector(state => state.creditCard.defaultCreditCard);

  const [initiateDeposit, { isLoading, isSuccess, isError, data: depositData }] =
    useInitiateDepositMutation();

  const handleOnClick = async () => {
    const data = await encryptData(publicKey, keyId, {
      cvv: cvv.cvc,
    });

    await initiateDeposit({
      keyId: keyId,
      encryptedData: data.encryptedData,
      cardId: id,
      size: depositSize,
    });
  };

  useEffect(() => {
    if ((isSuccess && depositData.result?.errorCode) || isError) {
      setError('An Error has ocurred');
    }
  }, [isError, isSuccess, depositData]);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;
    setCvv({ ...cvv, [name]: value });
  };

  const handleInputFocus = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    setCvv({ ...cvv, focus: 'cvc' });
  };

  return {
    isSuccess,
    isLoading,
    data,
    name,
    cvv,
    error,
    handleOnClick,
    handleInputChange,
    handleInputFocus,
  };
};

interface CreditCard {
  cvc: number;
  focus: 'number' | 'name' | 'cvc' | 'expiry';
}
