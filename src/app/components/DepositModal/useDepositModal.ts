import { useEffect, useState } from 'react';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useInitiateDepositMutation } from 'app/services/deposit/DepositService';
import { encryptData } from 'app/helpers/encryptData';
import { keyId, publicKey } from 'app/constants/constants';

export const useDepositModal = (depositSize: number) => {
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
      redirectionUrl: window.location.href,
    });
  };

  const handleRedirection = () => {
    if (isSuccess && depositData.result?.redirectUrl3ds && depositData.result?.paymentId) {
      const { redirectUrl3ds, paymentId } = depositData.result;

      window.location.replace(`${redirectUrl3ds}?paymentId=${paymentId}`);
    }
  };

  useEffect(() => {
    if ((isSuccess && depositData.result?.errorCode) || isError) {
      setError('An Error has ocurred');
    }
  }, [isError, isSuccess, depositData]);

  useEffect(() => {
    handleRedirection();
  }, [isSuccess]);

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
