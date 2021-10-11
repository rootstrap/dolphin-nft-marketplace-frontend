import { useSignupMutation } from 'infrastructure/services/user/UserService';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import useTranslation from 'app/hooks/useTranslation';

const initialFormValues = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: '',
};

export const useSignup = () => {
  const t = useTranslation();
  const [signup, { isLoading, isSuccess, isError }] = useSignupMutation();
  const { signupModalIsOpen, setSignupModalIsOpen, setLoginModalIsOpen } = useContext(ModalContext);
  const [error, setError] = useState('');
  const [formValues, setFormValues] = useState(initialFormValues);

  const { firstName, lastName, email, password, passwordConfirmation } = formValues;

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (
      firstName.trim().length < 4 ||
      lastName.trim().length < 4 ||
      email.trim().length < 6 ||
      password.trim().length < 8
    ) {
      return setError(t('signup.inputError'));
    }

    if (password.trim() !== passwordConfirmation.trim()) {
      return setError(t('signup.passwordError'));
    }

    signup({ firstName, lastName, email, password });
  };

  const handleClose = () => {
    setFormValues(initialFormValues);
    setError('');
    setSignupModalIsOpen(false);
  };

  const handleOpenSigninModal = () => {
    handleClose();
    setLoginModalIsOpen(true);
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
    handleOpenSigninModal,
    signupModalIsOpen,
    handleClose,
    handleOnSubmit,
    error,
    handleOnChange,
  };
};
