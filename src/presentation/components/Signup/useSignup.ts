import { useContext, useState } from 'react';
import { ModalContext } from '../../../app/context/ModalContext';
import useTranslation from '../../../app/hooks/useTranslation';

const initialFormValues = {
  email: '',
  password: '',
  passwordConfirmation: '',
};

export const useSignup = () => {
  const t = useTranslation();
  const { signupModalIsOpen, setSignupModalIsOpen, setLoginModalIsOpen } = useContext(ModalContext);
  const [error, setError] = useState('');
  const [formValues, setFormValues] = useState(initialFormValues);

  const { email, password, passwordConfirmation } = formValues;

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

    if (password.trim() !== passwordConfirmation.trim()) {
      return setError(t('signup.passwordError'));
    }
    handleClose();
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
