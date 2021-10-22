import { useCcMutation } from 'infrastructure/services/user/UserService';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import useTranslation from 'app/hooks/useTranslation';

interface FormValues {
  name: string;
  ccNumber: number;
  cvv: number;
  expiryMonth: number;
  expiryYear: number;
  country: string;
  district: string;
  address1: string;
  address2: string;
  city: string;
  postalCode: string;
}

export const useCC = () => {
  const t = useTranslation();
  const [cc, { isLoading, isSuccess, isError }] = useCcMutation();
  const [error, setError] = useState('');
  const { ccModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);

  const schema = z.object({
    name: z.string().min(3, { message: 'Field Required' }),
    ccNumber: z.string().min(16, { message: 'Invalid Credit Card Number' }),
    cvv: z.string().min(3, { message: 'Invalid CVV Number' }),
    expiryMonth: z.string().length(2, { message: 'Month should be formatted as MM' }),
    expiryYear: z.string().length(4, { message: 'Year should be formatted as YYYY' }),
    country: z.string().length(3, { message: 'Country should be formatted as XXX' }),
    district: z.string().length(2, { message: 'Country should be formatted as XX' }),
    address1: z.string().min(3, { message: 'Field Required' }),
    address2: z.string(),
    city: z.string().min(2, { message: 'Field Required' }),
    postalCode: z.string().min(3, { message: 'Field Required' }),
  });

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = data => cc(data);

  const handleClose = () => {
    reset();
    clearErrors();
    setCcModalIsOpen(false);
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
    ccModalIsOpen,
    handleClose,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
    errors,
    error,
  };
};
