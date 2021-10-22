import { useLoginMutation } from 'infrastructure/services/user/UserService';
import { useEffect, useContext, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import useTranslation from 'app/hooks/useTranslation';

interface FormValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const t = useTranslation();
  const [login, { isLoading, isSuccess, isError }] = useLoginMutation();
  const { loginModalIsOpen, setLoginModalIsOpen, setSignupModalIsOpen } = useContext(ModalContext);
  const [error, setError] = useState('');

  const schema = z.object({
    email: z.string().email({ message: t('login.error.invalidEmail') }),
    password: z.string().min(1, { message: t('login.error.requiredPassword') }),
  });

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = data => login(data);

  const handleClose = () => {
    reset();
    clearErrors();
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
      setError(t('login.error.systemError'));
    }
  }, [isError]);

  return {
    loginModalIsOpen,
    handleOpenSignupModal,
    handleClose,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
    errors,
    error,
  };
};
