import { useCreateCreditCardMutation } from 'infrastructure/services/creditCard/CreditCardService';
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

export const useCreditCardForm = () => {
  const t = useTranslation();
  const [createCreditCard, { isLoading, isSuccess, isError }] = useCreateCreditCardMutation();
  const [error, setError] = useState('');

  const schema = z.object({
    name: z.string().min(3, { message: t('creditCard.error.requiredField') }),
    ccNumber: z.string().min(16, { message: t('creditCard.error.creditCardNumber') }),
    cvv: z.string().min(3, { message: t('creditCard.error.cvvNumber') }),
    expiryMonth: z.string().min(1, { message: t('creditCard.error.expiryMonth') }),
    expiryYear: z.string().length(4, { message: t('creditCard.error.expiryYear') }),
    country: z.string().length(3, { message: t('creditCard.error.country') }),
    district: z.string().length(2, { message: t('creditCard.error.district') }),
    address1: z.string().min(3, { message: t('creditCard.error.requiredField') }),
    address2: z.string(),
    city: z.string().min(2, { message: t('creditCard.error.requiredField') }),
    postalCode: z.string().min(3, { message: t('creditCard.error.requiredField') }),
  });

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = data => createCreditCard(data);

  const handleClose = () => {
    reset();
    clearErrors();
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
    isLoading,
    register,
    handleSubmit,
    onSubmit,
    errors,
    error,
    isSuccess,
  };
};
