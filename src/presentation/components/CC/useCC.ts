import { useCcMutation } from 'infrastructure/services/user/UserService';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import useTranslation from 'app/hooks/useTranslation';

const initialFormValues = {
  name: '',
  ccNumber: '',
  cvv: '',
  expiryMonth: '',
  expiryYear: '',
  country: '',
  district: '',
  address1: '',
  address2: '',
  city: '',
  postalCode: '',
};

export const useCC = () => {
  const t = useTranslation();
  const [cc, { isLoading, isSuccess, isError }] = useCcMutation();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');
  const { ccModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnChangeCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked,
    });
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    await cc(formValues);
  };

  const handleClose = () => {
    setFormValues(initialFormValues);
    setError('');
    setCcModalIsOpen(false);
  };

  useEffect(() => {
    if (isSuccess) {
      setError(t('creditCard.invalidError'));
    }
  }, [isSuccess]);

  return {
    formValues,
    ccModalIsOpen,
    handleClose,
    handleOnSubmit,
    error,
    handleOnChange,
    handleOnChangeCheck,
  };
};
