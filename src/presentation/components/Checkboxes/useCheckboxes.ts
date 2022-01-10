import { useCallback, useContext, useEffect, useState } from 'react';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { ModalContext } from 'app/context/ModalContext';
import { useGetBalanceMutation } from 'infrastructure/services/deposit/DepositService';
import { useGetCreditCardsMutation } from 'infrastructure/services/creditCard/CreditCardService';

export const useCheckboxes = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isWalletReady, setIsWalletReady] = useState(false);

  const { kyc1ed } = useAppSelector(state => state.user.user);
  const { defaultCreditCard } = useAppSelector(state => state.creditCard);

  const { checkboxesModalIsOpen, setCheckboxesModalIsOpen } = useContext(ModalContext);
  const { setKycModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);

  const [getCreditCards] = useGetCreditCardsMutation();
  const [getBalance] = useGetBalanceMutation();

  const handleOnClick = () => {
    kyc1ed ? setCcModalIsOpen(true) : setKycModalIsOpen(true);
  };

  const handleClose = () => {
    setCheckboxesModalIsOpen(false);
  };

  const loadUserData = useCallback(async () => {
    setIsLoading(true);
    try {
      await getCreditCards();
      await getBalance();
    } catch (e: any) {
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  }, [getCreditCards, getBalance]);

  useEffect(() => {
    loadUserData();
  }, [loadUserData]);

  useEffect(() => {
    setIsWalletReady(defaultCreditCard.status === 'approved');
  }, [defaultCreditCard]);

  return {
    kyc1ed,
    isWalletReady,
    handleOnClick,
    isLoading,
    handleClose,
    checkboxesModalIsOpen,
  };
};
