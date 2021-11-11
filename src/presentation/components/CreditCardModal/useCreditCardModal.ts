import { useContext, useCallback, useEffect } from 'react';
import {
  useDeleteCreditCardMutation,
  useGetCreditCardsMutation,
} from 'infrastructure/services/creditCard/CreditCardService';
import { ModalContext } from 'app/context/ModalContext';
import { useAppDispatch, useAppSelector } from 'app/hooks/reduxHooks';

export const useCreditCardModal = () => {
  const { creditCardModalIsOpen, setCreditCardModalIsOpen } = useContext(ModalContext);
  const handleClose = () => setCreditCardModalIsOpen(false);

  const [deleteCreditCard] = useDeleteCreditCardMutation();
  const [getCreditCards] = useGetCreditCardsMutation();

  const { creditCards, defaultCreditCard } = useAppSelector(state => state.creditCard);
  const dispatch = useAppDispatch();

  const loadData = useCallback(async () => await getCreditCards(), [getCreditCards]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return { creditCardModalIsOpen, handleClose, creditCards, defaultCreditCard, dispatch, deleteCreditCard };
};
