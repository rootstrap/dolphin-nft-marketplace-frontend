import { zodResolver } from '@hookform/resolvers/zod';
import { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { NFTDetailsContext } from '../Marketplace';

interface FormValues {
  athlete: string;
  sport: string;
  tier: string;
  background: string;
  signed: string;
}

export const useAttributesFilter = () => {
  const { setQueryParams } = useContext(NFTDetailsContext);

  const schema = z.object({
    athlete: z.string(),
    sport: z.string(),
    tier: z.string(),
    background: z.string(),
    signed: z.string(),
  });

  const { register, handleSubmit, reset } = useForm({ resolver: zodResolver(schema), mode: 'onTouched' });

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
  };
};
