import { useKycMutation } from 'infrastructure/services/user/UserService';
import { useContext, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import useTranslation from 'app/hooks/useTranslation';

const initialFormValues = {
  fullName: '',
  country: '',
  province: '',
  notCriminalRecord: true,
  notExposedPerson: true,
};

export const useKYC = () => {
  const t = useTranslation();
  const [kyc, { isLoading, isSuccess, isError }] = useKycMutation();
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState('');
  const { kycModalIsOpen, setKycModalIsOpen } = useContext(ModalContext);
  const { fullName, country, province, notCriminalRecord, notExposedPerson } = formValues;

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
    kyc({ fullName, country, province });
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
    handleOnSubmit,
    error,
    handleOnChange,
    handleOnChangeCheck,
  };
};
