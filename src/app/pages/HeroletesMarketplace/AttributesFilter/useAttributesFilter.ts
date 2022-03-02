import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { MarketplaceContext } from '../Marketplace';

interface FormValues {
  athlete: string;
  sport: string;
  tier: string;
  background: string;
  signed: string;
}

const defaultValues = {
  athlete: '',
  sport: '',
  tier: '',
  background: '',
  signed: '',
};

export const useAttributesFilter = () => {
  const { setQueryParams } = useContext(MarketplaceContext);

  const schema = z.object({
    athlete: z.string(),
    sport: z.string(),
    tier: z.string(),
    background: z.string(),
    signed: z.string(),
  });

  const { register, handleSubmit, reset, control } = useForm({
    defaultValues,
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async form => {
    setQueryParams(currentValue => ({ ...currentValue, filters: form }));
  };

  const clearForm = () => {
    reset();
    setQueryParams(currentValue => ({ ...currentValue, filters: null }));
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    clearForm,
    control,
  };
};
