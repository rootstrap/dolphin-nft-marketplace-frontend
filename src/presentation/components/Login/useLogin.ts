import {
  useLoginMutation,
  useLoginFTXMutation,
  useLoginStatusMutation,
} from 'infrastructure/services/user/UserService';
import { useEffect, useContext, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { recaptchaActions } from 'app/constants/contants';
import { useGetCreditCardsMutation } from 'infrastructure/services/creditCard/CreditCardService';
import { useGetBalanceMutation } from 'infrastructure/services/deposit/DepositService';
import { getToken } from 'app/helpers/GetToken';
import useTranslation from 'app/hooks/useTranslation';

interface FormValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const t = useTranslation();
  const [login, { isLoading, isSuccess: loginSuccess }] = useLoginMutation();
  const [loginFTX, { error: signinError, isSuccess, isError }] = useLoginFTXMutation();
  const [loginStatus] = useLoginStatusMutation();
  const [getCreditCards] = useGetCreditCardsMutation();
  const [getBalance] = useGetBalanceMutation();
  const { loginModalIsOpen, setLoginModalIsOpen, setSignupModalIsOpen } = useContext(ModalContext);
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState<FormValues>();

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

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const token = await getToken(recaptchaActions.login);

    setUserInfo(data);
    await loginFTX({ ...data, recaptcha: token });
    await loginStatus();
  };

  const handleClose = () => {
    reset();
    clearErrors();
    setError('');
    setLoginModalIsOpen(false);
  };

  const handleOpenSignupModal = () => {
    handleClose();
    setSignupModalIsOpen(true);
  };

  const loadUserData = async () => {
    await getCreditCards();
    await getBalance();
  };

  useEffect(() => {
    if (isSuccess) {
      login(userInfo);
    }
  }, [isSuccess]);

  useEffect(() => {
    if (loginSuccess) {
      loadUserData();
      handleClose();
    }
  }, [loginSuccess]);

  useEffect(() => {
    if (isError) {
      const error = Object(signinError);
      setError(error.data.error);
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
