import { useContext, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import useTranslation from 'app/hooks/useTranslation';

const initialFormValues = {
  fullName: '',
  country: '',
  state: '',
  notCriminalRecord: true,
  notExposedPerson: true,
};

export const useKYC = () => {
  const t = useTranslation();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');
  const { kycModalIsOpen, setKycModalIsOpen } = useContext(ModalContext);
  const { fullName, country, state, notCriminalRecord, notExposedPerson } = formValues;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    if (fullName.trim().length < 6 || country.trim().length < 8 || state.trim().length < 8) {
      return setError(t('signup.inputError'));
    }
    console.log(formValues);
  };

  const handleClose = () => {
    setFormValues(initialFormValues);
    setError('');
    setKycModalIsOpen(false);
  };

  return {
    formValues,
    kycModalIsOpen,
    handleClose,
    error,
    handleOnChange,
    handleOnSubmit,
  };
};
