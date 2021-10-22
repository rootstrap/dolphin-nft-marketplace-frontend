import { useSignupMutation } from 'infrastructure/services/user/UserService';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PASSWORD_REGEX } from 'app/constants/contants';
import * as z from 'zod';
import useTranslation from 'app/hooks/useTranslation';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const useSignup = () => {
  const t = useTranslation();
  const [signup, { isLoading, isSuccess, isError }] = useSignupMutation();
  const { signupModalIsOpen, setSignupModalIsOpen, setLoginModalIsOpen } = useContext(ModalContext);
  const [error, setError] = useState('');

  const schema = z
    .object({
      firstName: z.string().min(3, { message: t('signup.error.firstNameError') }),
      lastName: z.string().min(3, { message: t('signup.error.lastNameError') }),
      email: z.string().email({ message: t('signup.error.emailError') }),
      password: z.string().regex(PASSWORD_REGEX, { message: t('signup.error.passwordError') }),
      passwordConfirmation: z.string().regex(PASSWORD_REGEX, { message: t('signup.error.passwordError') }),
    })
    .refine(data => data.password === data.passwordConfirmation, {
      message: t('signup.error.passwordConfirmationError'),
      path: ['passwordConfirmation'],
    });

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = data => signup(data);

  const handleClose = () => {
    clearErrors();
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
      setError(t('signup.error.systemError'));
    }
  }, [isError]);

  return {
    signupModalIsOpen,
    handleOpenSigninModal,
    handleClose,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
    errors,
    error,
  };
};
