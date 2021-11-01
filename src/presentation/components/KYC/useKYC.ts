import { useGetCountriesMutation, useKycMutation } from 'infrastructure/services/user/UserService';
import { useContext, useEffect, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Country } from 'app/interfaces/common/Country';
import useTranslation from 'app/hooks/useTranslation';

interface FormValues {
  fullName: string;
  country: string;
  state: string;
  dateOfBirth: Date;
  postalCode: string;
  streetAddress: string;
  notCriminalRecord: boolean;
  notExposedPerson: boolean;
}

export const useKYC = () => {
  const t = useTranslation();
  const [kyc, { isLoading, isSuccess, isError }] = useKycMutation();
  const [getCountries] = useGetCountriesMutation();

  const [error, setError] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const { kycModalIsOpen, setKycModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);

  const schema = z.object({
    fullName: z.string().min(2, { message: 'Field Required' }),
    country: z.string().min(2, { message: 'Field Required' }),
    state: z.string().min(2, { message: 'Field Required' }),
    dateOfBirth: z.string().min(7, { message: 'Field Required' }),
    postalCode: z.string().min(2, { message: 'Field Required' }),
    streetAddress: z.string().min(2, { message: 'Field Required' }),
  });

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = data => kyc(data);

  const handleClose = () => {
    reset();
    clearErrors();
    setKycModalIsOpen(false);
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
      setCcModalIsOpen(true);
      handleClose();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      setError(t('login.error.systemError'));
    }
  }, [isError]);

  return {
    kycModalIsOpen,
    handleClose,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
    errors,
    error,
    countries,
  };
};
