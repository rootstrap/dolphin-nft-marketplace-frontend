import { useCcMutation } from 'infrastructure/services/user/UserService';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import useTranslation from 'app/hooks/useTranslation';

interface FormValues {
  fullName: string;
  ccNumber: number;
  cvv: number;
  expiryDate: Date;
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
    fullName: z.string().min(5, { message: 'Field Required' }),
    ccNumber: z.string().min(16, { message: 'Invalid Credit Card Number' }),
    cvv: z.string().min(3, { message: 'Invalid CVV Number' }),
    expiryDate: z.date(),
    country: z.string().min(3, { message: 'Field Required' }),
    district: z.string().min(2, { message: 'Field Required' }),
    address1: z.string().min(3, { message: 'Field Required' }),
    address2: z.string().min(3, { message: 'Field Required' }),
    city: z.string().min(3, { message: 'Field Required' }),
    postalCode: z.string().min(3, { message: 'Field Required' }),
  });

  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = data => cc(data);

  const handleClose = () => {
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

/* 

const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnChangeCheck = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.checked,
    });
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError('');

    await cc(formValues);
  };

  const handleClose = () => {
    setFormValues(initialFormValues);
    setError('');
    setCcModalIsOpen(false);
  };

  useEffect(() => {
    if (isSuccess) {
      setError(t('creditCard.invalidError'));
    }
  }, [isSuccess]);

*/
