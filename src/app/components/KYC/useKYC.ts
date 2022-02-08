import {
  useGetCountriesMutation,
  useGetSubregionsMutation,
  useKycMutation,
} from 'app/services/user/UserService';
import { useCallback, useContext, useEffect, useState } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Country, Subregion } from 'app/interfaces/common/Country';

interface FormValues {
  fullLegalName: string;
  country: string;
  stateProvinceRegion: string;
  dateOfBirth: Date;
  postalCode: string;
  streetAddress: string;
  notCriminalRecord: boolean;
  notExposedPerson: boolean;
}

export const useKYC = () => {
  const [kyc, { isLoading, isSuccess, isError, error: kycError }] = useKycMutation();
  const [getCountries] = useGetCountriesMutation();
  const [getSubregions] = useGetSubregionsMutation();

  const [error, setError] = useState('');
  const [countries, setCountries] = useState<Country[]>([]);
  const [subregions, setSubregions] = useState<Subregion[]>([]);
  const { kycModalIsOpen, setKycModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);

  const schema = z.object({
    fullLegalName: z.string().min(2, { message: 'Field Required' }),
    country: z.string().min(2, { message: 'Field Required' }),
    stateProvinceRegion: z.string().min(1, { message: 'Field Required' }),
    dateOfBirth: z.string().min(7, { message: 'Field Required' }),
    postalCode: z.string().min(2, { message: 'Field Required' }),
    streetAddress: z.string().min(2, { message: 'Field Required' }),
  });

  const {
    register,
    handleSubmit,
    clearErrors,
    reset,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = data => kyc(data);

  const handleClose = () => {
    reset();
    clearErrors();
    setKycModalIsOpen(false);
  };

  const loadData = useCallback(async () => {
    const data: any = await getCountries('');
    setCountries(data.data);
  }, [setCountries, getCountries]);

  const getStates = useCallback(
    async (country: string) => {
      const data: any = await getSubregions(country);
      setSubregions(data.data);
    },
    [getSubregions]
  );

  useEffect(() => {
    loadData();
  }, [loadData]);

  useEffect(() => {
    getStates(watch('country'));
  }, [getStates, watch('country')]);

  useEffect(() => {
    if (isSuccess) {
      setCcModalIsOpen(true);
      handleClose();
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isError) {
      const error = Object(kycError);
      setError(error.data.error);
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
    getStates,
    subregions,
  };
};
