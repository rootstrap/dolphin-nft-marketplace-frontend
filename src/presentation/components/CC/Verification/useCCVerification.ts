import { useEffect, useState } from 'react';
import { CIRCLE_FAILURE_CODES } from 'app/constants/contants';
import { useGetCreditCardMutation } from 'infrastructure/services/creditCard/CreditCardService';

export const useCCVerification = () => {
  const [getCreditCard, { isSuccess, isLoading }] = useGetCreditCardMutation();
  const [creditCardStatus, setCreditCardStatus] = useState<CreditCardStatus>('pending');
  const [errorMsg, setErrorMsg] = useState<ErrorMsg>('no_error');

  const loadData = async () => {
    const data: any = await getCreditCard();

    if (isSuccess) {
      setCreditCardStatus(data.data.status);
      setErrorMsg(data.data.depositVerificationErrorCode);
    }
  };

  const handleCheckStatus = () => loadData();

  useEffect(() => {
    loadData();
  }, []);

  return {
    isLoading,
    creditCardStatus,
    errorMsg,
    handleCheckStatus,
  };
};

type CreditCardStatus = 'approved' | 'pending' | 'rejected' | 'needsDepositVerification';

type ErrorMsg = keyof typeof CIRCLE_FAILURE_CODES;
