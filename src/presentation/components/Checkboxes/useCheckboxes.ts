import { useContext, useEffect, useState } from 'react';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useLoginStatusMutation } from 'infrastructure/services/user/UserService';
import { ModalContext } from 'app/context/ModalContext';
import { useGetBalanceMutation } from 'infrastructure/services/deposit/DepositService';
import { useGetCreditCardsMutation } from 'infrastructure/services/creditCard/CreditCardService';

export const useCheckboxes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { kyc1ed } = useAppSelector(state => state.user.user);
  const { defaultCreditCard } = useAppSelector(state => state.creditCard);
  const { setKycModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);
  const [getCreditCards] = useGetCreditCardsMutation();
  const [getBalance] = useGetBalanceMutation();
  const [loginStatus] = useLoginStatusMutation();

  const isWalletReady = defaultCreditCard.status === 'approved';

  const handleOnClick = () => {
    kyc1ed ? setCcModalIsOpen(true) : setKycModalIsOpen(true);
  };

  const loadUserData = async () => {
    setIsLoading(true);
    try {
      await getCreditCards();
      await getBalance();
    } catch (e: any) {
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loginStatus();
  }, [kyc1ed]);

  useEffect(() => {
    loadUserData();
  }, []);

  return {
    kyc1ed,
    isWalletReady,
    handleOnClick,
    isLoading,
  };
};
