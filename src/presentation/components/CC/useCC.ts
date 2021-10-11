import { useCcMutation } from 'infrastructure/services/user/UserService';
import { useContext, useState } from 'react';
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
  const {
    name,
    ccNumber,
    cvv,
    expiryMonth,
    expiryYear,
    country,
    district,
    address1,
    address2,
    city,
    postalCode,
  } = formValues;

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

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');
    cc(formValues);
    // setCcModalIsOpen(false);
  };

  const handleClose = () => {
    setFormValues(initialFormValues);
    setError('');
    setCcModalIsOpen(false);
  };

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
