import { useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useLoginMfaMutation, useRequestCodeMutation } from 'infrastructure/services/mfa/MfaService';

interface FormValues {
  securityCode: string;
}

export const useMfa = () => {
  const [requestCode] = useRequestCodeMutation();
  const [loginMfa, { isLoading, isError, error: loginMfaError, isSuccess }] = useLoginMfaMutation();
  const [error, setError] = useState('');

  const schema = z.object({
    securityCode: z.string().length(6, { message: 'Code should be 6 chars long' }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    const { securityCode } = data;

    loginMfa(securityCode);
  };

  useEffect(() => {
    requestCode('');
  }, []);

  useEffect(() => {
    if (isError) {
      const errorMsg = Object(loginMfaError);
      setError(errorMsg.data.error);
    }
  }, [isError]);

  return {
    register,
    handleSubmit,
    onSubmit,
    errors,
    error,
    isSuccess,
    isLoading,
  };
};
