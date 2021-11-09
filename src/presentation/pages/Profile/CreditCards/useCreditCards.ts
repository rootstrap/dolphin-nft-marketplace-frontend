import { useCallback, useEffect } from 'react';
import {
  useDeleteCreditCardMutation,
  useGetCreditCardsMutation,
} from 'infrastructure/services/creditCard/CreditCardService';
import { useAppDispatch, useAppSelector } from 'app/hooks/reduxHooks';

export const useCreditCards = () => {
  const [deleteCreditCard] = useDeleteCreditCardMutation();
  const [getCreditCards] = useGetCreditCardsMutation();

  const { creditCards, defaultCreditCard } = useAppSelector(state => state.creditCard);
  const dispatch = useAppDispatch();

  const loadData = useCallback(async () => await getCreditCards(), [getCreditCards]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return {
    creditCards,
    defaultCreditCard,
    dispatch,
    deleteCreditCard,
  };
};
