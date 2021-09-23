import { useContext, useState } from 'react';
import { ModalContext } from '../../../app/context/ModalContext';
import useTranslation from '../../../app/hooks/useTranslation';

const initialFormValues = {
  email: '',
  password: '',
};

export const useLogin = () => {
  const t = useTranslation();
  const { loginModalIsOpen, setLoginModalIsOpen, setSignupModalIsOpen } = useContext(ModalContext);
  const [error, setError] = useState('');
  const [formValues, setFormValues] = useState(initialFormValues);

  const { email, password } = formValues;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (email.trim().length < 6 || password.trim().length < 8) {
      return setError(t('signup.inputError'));
    }
    handleClose();
  };

  const handleClose = () => {
    setFormValues(initialFormValues);
    setError('');
    setLoginModalIsOpen(false);
  };

  const handleOpenSignupModal = () => {
    handleClose();
    setSignupModalIsOpen(true);
  };

  return {
    formValues,
    loginModalIsOpen,
    handleOpenSignupModal,
    handleClose,
    handleOnSubmit,
    error,
    handleOnChange,
  };
};
