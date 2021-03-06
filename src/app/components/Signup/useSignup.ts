import { useSignupFTXMutation, useSignupMutation, authApi } from 'app/services/user/UserService';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { PASSWORD_REGEX, recaptchaActions } from 'app/constants/constants';
import * as z from 'zod';
import { useAppDispatch } from 'app/hooks/reduxHooks';
import { getToken } from 'app/helpers/GetToken';
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
  const dispatch = useAppDispatch();
  const { signupModalIsOpen, setSignupModalIsOpen, setLoginModalIsOpen, setCheckboxesModalIsOpen } =
    useContext(ModalContext);

  const [signupFTX, { error: signupError, isLoading, isSuccess, isError }] = useSignupFTXMutation();
  const [signup] = useSignupMutation();

  const [error, setError] = useState('');
  const [userInfo, setUserInfo] = useState<FormValues>();
  const [isTosAgree, setIsTosAgree] = useState<boolean>(false);

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
    await signupFTX({ ...data, recaptcha: token });
  };

  const resetErrors = useCallback(() => dispatch(authApi.util.resetApiState()), [dispatch]);

  const handleClose = useCallback(() => {
    clearErrors();
    reset();
    setError('');
    setSignupModalIsOpen(false);
    resetErrors();
  }, [clearErrors, setError, setSignupModalIsOpen, reset, resetErrors]);

  const handleOpenSigninModal = () => {
    handleClose();
    setLoginModalIsOpen(true);
  };

  useEffect(() => {
    if (isSuccess) {
      signup(userInfo);
      handleClose();
      setCheckboxesModalIsOpen(true);
    }
  }, [isSuccess, signup, setCheckboxesModalIsOpen, handleClose, userInfo]);

  useEffect(() => {
    if (isError) {
      const error = Object(signupError);
      setError(error.data.error);
    }
  }, [isError, signupError]);

  return {
    signupModalIsOpen,
    handleOpenSigninModal,
    handleClose,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
    setIsTosAgree,
    isTosAgree,
    errors,
    error,
    isSuccess,
  };
};
