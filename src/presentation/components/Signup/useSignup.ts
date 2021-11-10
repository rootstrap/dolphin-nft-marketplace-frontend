import { useSignupFTXMutation, useSignupMutation } from 'infrastructure/services/user/UserService';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PASSWORD_REGEX, recaptchaActions } from 'app/constants/contants';
import * as z from 'zod';
import useTranslation from 'app/hooks/useTranslation';
import { useReCaptcha } from 'app/hooks/useReCaptcha';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  passwordConfirmation: string;
}

export const useSignup = () => {
  const t = useTranslation();
  const { getToken } = useReCaptcha();
  const [signupFTX, { isLoading, isSuccess, isError }] = useSignupFTXMutation();
  const [signup] = useSignupMutation();
  const { signupModalIsOpen, setSignupModalIsOpen, setLoginModalIsOpen } = useContext(ModalContext);
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState<FormValues>();

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
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const token = await getToken(recaptchaActions.register);

    setUserInfo(data);
    signupFTX({ ...data, recaptcha: token });
  };

  const handleClose = () => {
    clearErrors();
    reset();
    setSignupModalIsOpen(false);
  };

  const handleOpenSigninModal = () => {
    handleClose();
    setLoginModalIsOpen(true);
  };

  useEffect(() => {
    if (isSuccess) {
      signup(userInfo);
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
