import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { useCC } from './useCC';
import { CreditCardForm } from './Form/CreditCardForm';
import useTranslation from 'app/hooks/useTranslation';

export const CC = () => {
  const t = useTranslation();
  const { ccModalIsOpen, handleClose } = useCC();

  return (
    <BaseModal open={ccModalIsOpen} handleClose={handleClose}>
      <CreditCardForm />
    </BaseModal>
  );
};
