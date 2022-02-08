import { useContext, useCallback, useEffect } from 'react';
import {
  useDeleteCreditCardMutation,
  useGetCreditCardsMutation,
} from 'app/services/creditCard/CreditCardService';
import { ModalContext } from 'app/context/ModalContext';
import { useAppDispatch, useAppSelector } from 'app/hooks/reduxHooks';

export const useCreditCardModal = () => {
  const { setCcModalIsOpen, creditCardModalIsOpen, setCreditCardModalIsOpen } = useContext(ModalContext);
  const handleClose = () => setCreditCardModalIsOpen(false);

  const [deleteCreditCard] = useDeleteCreditCardMutation();
  const [getCreditCards] = useGetCreditCardsMutation();

  const { creditCards, defaultCreditCard } = useAppSelector(state => state.creditCard);
  const dispatch = useAppDispatch();

  const loadData = useCallback(async () => await getCreditCards(), [getCreditCards]);

  const handleAddCreditCard = () => {
    handleClose();
    setCcModalIsOpen(true);
  };

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    handleAddCreditCard,
    creditCardModalIsOpen,
    handleClose,
    creditCards,
    defaultCreditCard,
    dispatch,
    deleteCreditCard,
  };
};
