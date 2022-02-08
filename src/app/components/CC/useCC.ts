import { useContext } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { useGetCreditCardsMutation } from 'app/services/creditCard/CreditCardService';

export const useCC = () => {
  const { ccModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);
  const [getCreditCards] = useGetCreditCardsMutation();

  const loadData = async () => await getCreditCards();

  const handleClose = () => {
    loadData();
    setCcModalIsOpen(false);
  };

  return {
    ccModalIsOpen,
    handleClose,
  };
};
