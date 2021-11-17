import { useEffect, useState } from 'react';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useInitiateDepositMutation } from 'infrastructure/services/deposit/DepositService';

export const useDepositModal = (depositSize: number) => {
  const [cvv, setCvv] = useState<CreditCard>({
    focus: 'number',
    cvc: 0,
  });

  const [error, setError] = useState('');
  const { id, name, data } = useAppSelector(state => state.creditCard.defaultCreditCard);

  const [initiateDeposit, { isLoading, isSuccess, isError }] = useInitiateDepositMutation();

  const handleOnClick = async () => {
    await initiateDeposit({
      cvv: cvv.cvc,
      cardId: Number(id),
      size: depositSize,
    });
  };

  useEffect(() => {
    if (isError) {
      setError('An Error has ocurred');
    }
  }, [isError]);

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
