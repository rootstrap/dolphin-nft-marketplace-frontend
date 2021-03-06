import { useEffect, useState } from 'react';
import { CIRCLE_FAILURE_CODES } from 'app/constants/constants';
import { useGetCreditCardByIdMutation } from 'app/services/creditCard/CreditCardService';
import { useCreateDepositMutation } from 'app/services/deposit/DepositService';
import { useAppSelector } from 'app/hooks/reduxHooks';

export const useCCVerification = () => {
  const [getCreditCardById, { isSuccess, isLoading }] = useGetCreditCardByIdMutation();
  const [creditCardStatus, setCreditCardStatus] = useState<CreditCardStatus>('pending');
  const [errorMsg, setErrorMsg] = useState<ErrorMsg>('no_error');
  const [
    createDeposit,
    { isLoading: isDepositLoading, isSuccess: isDepositSuccess, isError: isDepositError },
  ] = useCreateDepositMutation();
  const { creditCardId } = useAppSelector(state => state.user.user);

  const loadData = async () => {
    const data: any = await getCreditCardById(String(creditCardId));

    if (isSuccess) {
      setCreditCardStatus(data.data.status);
      setErrorMsg(data.data.depositVerificationErrorCode);
    }
  };

  const loadDeposit = async (creditCardAmount: number) => {
    await createDeposit({
      size: creditCardAmount,
      cardId: creditCardId,
    });
  };

  const handleCheckStatus = (creditCardAmount: number) => {
    loadDeposit(creditCardAmount);
    loadData();
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
    isDepositSuccess,
    isDepositError,
  };
};

type CreditCardStatus = 'approved' | 'pending' | 'rejected' | 'needsDepositVerification';

type ErrorMsg = keyof typeof CIRCLE_FAILURE_CODES;
