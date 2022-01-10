import {
  useLoginMutation,
  useLoginFTXMutation,
  useLoginStatusMutation,
  authApi,
} from 'infrastructure/services/user/UserService';
import { useEffect, useContext, useState, useCallback } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { recaptchaActions } from 'app/constants/contants';
import { getToken } from 'app/helpers/GetToken';
import { useAppDispatch } from 'app/hooks/reduxHooks';
import useTranslation from 'app/hooks/useTranslation';

interface FormValues {
  email: string;
  password: string;
}

export const useLogin = () => {
  const t = useTranslation();
  const dispatch = useAppDispatch();

  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState<FormValues>();
  const [isLoading, setIsLoading] = useState(false);
  const [isMfaRequired, setIsMfaRequired] = useState(false);

  const [login] = useLoginMutation();
  const [loginFTX, { isSuccess: isLoginFTXSuccess, error: signinError, isError }] = useLoginFTXMutation();
  const [loginStatus, { isSuccess: isLoginStatusSuccess, data: loginStatusData }] = useLoginStatusMutation();
  const { loginModalIsOpen, setLoginModalIsOpen, setSignupModalIsOpen, setCheckboxesModalIsOpen } =
    useContext(ModalContext);

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

  const resetErrors = useCallback(() => dispatch(authApi.util.resetApiState()), [dispatch]);

  const handleClose = useCallback(() => {
    reset();
    clearErrors();
    setError('');
    setLoginModalIsOpen(false);
    setIsMfaRequired(false);
    resetErrors();
  }, [clearErrors, reset, resetErrors, setLoginModalIsOpen]);

  const handleOpenSignupModal = () => {
    handleClose();
    setSignupModalIsOpen(true);
  };

  useEffect(() => {
    if (isLoginFTXSuccess) {
      login(userInfo);
    }
  }, [isLoginFTXSuccess, login, userInfo]);

  useEffect(() => {
    if (isLoginStatusSuccess) {
      const { mfaRequired } = loginStatusData;

      if (mfaRequired) {
        setIsMfaRequired(Boolean(mfaRequired));
      } else {
        setCheckboxesModalIsOpen(true);
        handleClose();
      }

      setIsLoading(false);
    }
  }, [isLoginStatusSuccess, handleClose, loginStatusData, setCheckboxesModalIsOpen]);

  useEffect(() => {
    if (isError) {
      const error = Object(signinError);
      setError(error.data.error);

      setIsLoading(false);
    }
  }, [isError, signinError]);

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
    isMfaRequired,
    setIsMfaRequired,
  };
};
