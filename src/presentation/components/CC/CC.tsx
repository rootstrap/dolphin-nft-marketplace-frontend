import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { useCC } from './useCC';
import { CreditCardForm } from './Form/CreditCardForm';

export const CC = () => {
  const { ccModalIsOpen, handleClose } = useCC();

  return (
    <BaseModal open={ccModalIsOpen} handleClose={handleClose}>
      <CreditCardForm />
    </BaseModal>
  );
};
