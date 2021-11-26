import { useEffect, useState } from 'react';
import { useCreateCreditCardMutation } from 'infrastructure/services/creditCard/CreditCardService';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useGetCountriesMutation } from 'infrastructure/services/user/UserService';
import { Country } from 'app/interfaces/common/Country';
import useTranslation from 'app/hooks/useTranslation';
import { encryptData } from 'app/helpers/encryptData';
import { ICreditCardError } from 'app/interfaces/creditCard/creditCard';

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
  const [createCreditCard, { error: creditCardError, isLoading, isSuccess, isError }] =
    useCreateCreditCardMutation();
  const [getCountries] = useGetCountriesMutation();
  const [error, setError] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const publicKey = process.env.REACT_APP_CC_PUBLIC_KEY;
  const keyId = process.env.REACT_APP_CC_KEY_ID;

  const schema = z.object({
    name: z.string().min(3, { message: t('creditCard.error.requiredField') }),
    ccNumber: z.string().min(16, { message: t('creditCard.error.creditCardNumber') }),
    cvv: z.string().min(3, { message: t('creditCard.error.cvvNumber') }),
    expiryMonth: z.string().min(1, { message: t('creditCard.error.expiryMonth') }),
    expiryYear: z.string().length(4, { message: t('creditCard.error.expiryYear') }),
    country: z.string().length(2, { message: t('creditCard.error.country') }),
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

  const onSubmit: SubmitHandler<FormValues> = async form => {
    console.log('publicKey', publicKey);

    const data = await encryptData(publicKey, keyId, {
      number: form.ccNumber,
      cvv: form.cvv,
    });

    createCreditCard({
      ...form,
      publicKey: publicKey,
      keyId: keyId,
      encryptedData: data.encryptedData,
    });
  };

  const handleClose = () => {
    reset();
    clearErrors();
  };

  const loadData = async () => {
    const data: any = await getCountries('');
    setCountries(data.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (isSuccess) {
      handleClose();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      const creationError = creditCardError as ICreditCardError;

      setError(creationError.data.error || 'Invalid Credit Card Information');
    }
  }, [isError, creditCardError]);

  return {
    isLoading,
    register,
    handleSubmit,
    onSubmit,
    errors,
    error,
    creditCardError,
    isSuccess,
    countries,
  };
};
