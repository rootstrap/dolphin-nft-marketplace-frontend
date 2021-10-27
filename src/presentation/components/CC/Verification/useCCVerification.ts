import { useEffect, useState } from 'react';
import { CIRCLE_FAILURE_CODES } from 'app/constants/contants';
import { useGetCreditCardMutation } from 'infrastructure/services/creditCard/CreditCardService';
import { useCreateDepositMutation } from 'infrastructure/services/deposit/DepositService';
import { useAppSelector } from 'app/hooks/reduxHooks';

export const useCCVerification = () => {
  const [getCreditCard, { isSuccess, isLoading }] = useGetCreditCardMutation();
  const [creditCardStatus, setCreditCardStatus] = useState<CreditCardStatus>('pending');
  const [errorMsg, setErrorMsg] = useState<ErrorMsg>('no_error');
  const [createDeposit, { isLoading: isDepositLoading }] = useCreateDepositMutation();
  const { creditCardId } = useAppSelector(state => state.user.user);

  const loadData = async () => {
    const data: any = await getCreditCard();

    if (isSuccess) {
      setCreditCardStatus(data.data.status);
      setErrorMsg(data.data.depositVerificationErrorCode);
    }
  };

  const loadDeposit = async (creditCardAmount: number) => {
    const data: any = await createDeposit({
      amount: creditCardAmount,
      cardId: creditCardId,
    });
    console.log(data);
  };

  const handleCheckStatus = (creditCardAmount: number) => {
    loadData();
    loadDeposit(creditCardAmount);
  };

  useEffect(() => {
    loadData();
  }, []);

  return {
    isLoading,
    isDepositLoading,
    creditCardStatus,
    errorMsg,
    handleCheckStatus,
  };
};

type CreditCardStatus = 'approved' | 'pending' | 'rejected' | 'needsDepositVerification';

type ErrorMsg = keyof typeof CIRCLE_FAILURE_CODES;
