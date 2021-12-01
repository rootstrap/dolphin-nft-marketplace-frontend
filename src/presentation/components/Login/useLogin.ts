import {
  useLoginMutation,
  useLoginFTXMutation,
  useLoginStatusMutation,
  authApi,
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
import { useAppDispatch, useAppSelector } from 'app/hooks/reduxHooks';
import useTranslation from 'app/hooks/useTranslation';

interface FormValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const t = useTranslation();
  const dispatch = useAppDispatch();
  const { defaultCreditCard } = useAppSelector(state => state.creditCard);

  const [isWalletReady, setIsWalletReady] = useState(false);
  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState<FormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const [isMfaRequired, setIsMfaRequired] = useState(false);

  const [login, { isSuccess: isLoginSuccess }] = useLoginMutation();
  const [loginFTX, { isSuccess: isLoginFTXSuccess, error: signinError, isError }] = useLoginFTXMutation();
  const [loginStatus, { isSuccess: isLoginStatusSuccess, data: loginStatusData }] = useLoginStatusMutation();
  const [getCreditCards, { isSuccess: isGetCreditCardsSuccess }] = useGetCreditCardsMutation();
  const [getBalance] = useGetBalanceMutation();
  const { loginModalIsOpen, setLoginModalIsOpen, setSignupModalIsOpen } = useContext(ModalContext);

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
    setIsLoading(true);
    setUserInfo(data);

    try {
      const token = await getToken(recaptchaActions.login);

      await loginFTX({ ...data, recaptcha: token });
      await loginStatus();
    } catch (e: any) {
      throw new Error(e);
    }
  };

  const handleClose = () => {
    reset();
    clearErrors();
    setError('');
    setLoginModalIsOpen(false);
    resetErrors();
  };

  const handleOpenSignupModal = () => {
    handleClose();
    setSignupModalIsOpen(true);
  };

  const loadUserData = async () => {
    setIsLoading(true);
    try {
      await getCreditCards();
      await getBalance();
    } catch (e: any) {
      throw new Error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isLoginFTXSuccess) {
      login(userInfo);
    }
  }, [isLoginFTXSuccess]);

  useEffect(() => {
    if (isLoginStatusSuccess) {
      const { mfaRequired } = loginStatusData;
      setIsMfaRequired(Boolean(mfaRequired));
    }
  }, [isLoginStatusSuccess]);

  useEffect(() => {
    if (isLoginSuccess) {
      loadUserData();
    }
  }, [isLoginSuccess]);

  useEffect(() => {
    if (isError) {
      const error = Object(signinError);
      setError(error.data.error);
    }
  }, [isError]);

  useEffect(() => {
    if (isGetCreditCardsSuccess) {
      setIsWalletReady(defaultCreditCard.status === 'approved');
    }
  }, [isGetCreditCardsSuccess]);

  useEffect(() => {
    if (isWalletReady) {
      handleClose();
    }
  }, [isWalletReady]);

  const resetErrors = () => dispatch(authApi.util.resetApiState());

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
    isGetCreditCardsSuccess,
    isMfaRequired,
    setIsMfaRequired,
  };
};
