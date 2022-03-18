import { useContext } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { ModalContext } from 'app/context/ModalContext';
import useTranslation from 'app/hooks/useTranslation';
import { SubmitHandler, useForm } from 'react-hook-form';
import { recaptchaActions } from 'app/constants/constants';
import { getToken } from 'app/helpers/GetToken';
import { uuid } from 'uuidv4';
import { useChangePasswordMutation } from 'app/services/user/UserService';
import * as z from 'zod';

interface FormValues {
  email: string;
}

export const useForgotPasswordModal = () => {
  const t = useTranslation();
  const { forgotPasswordModalIsOpen, setForgotPasswordModalIsOpen, setLoginModalIsOpen } =
    useContext(ModalContext);
  const [changePassword, { isSuccess }] = useChangePasswordMutation();
  const schema = z.object({
    email: z.string().email({ message: t('login.error.emailRequired') }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const token = await getToken(recaptchaActions.changePassword);

    await changePassword({ email: data.email, recaptcha: token, deviceId: uuid() });
  };

  const handleClose = () => {
    setForgotPasswordModalIsOpen(false);
    setLoginModalIsOpen(true);
    reset();
  };

  return {
    errors,
    forgotPasswordModalIsOpen,
    handleClose,
    handleSubmit,
    isSuccess,
    onSubmit,
    register,
  };
};
