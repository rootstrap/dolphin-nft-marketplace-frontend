import { useLoginMutation } from 'infrastructure/services/user/UserService';
import { useEffect, useContext, useState, useCallback } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import useTranslation from 'app/hooks/useTranslation';

const initialFormValues = {
  email: '',
  password: '',
};

export const useLogin = () => {
  const t = useTranslation();
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();
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
    setError('');

    if (email.trim().length < 6 || password.trim().length < 8) {
      return setError(t('signup.inputError'));
    }
    login({ email, password });
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

  useEffect(() => {
    if (isSuccess) {
      handleClose();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setError(t('login.systemError'));
    }
  }, [isError]);

  return {
    formValues,
    loginModalIsOpen,
    handleOpenSignupModal,
    handleClose,
    handleOnSubmit,
    isLoading,
    error,
    handleOnChange,
  };
};
