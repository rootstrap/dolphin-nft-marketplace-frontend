import { zodResolver } from '@hookform/resolvers/zod';
import { useContext, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { z } from 'zod';
import { useLocation } from 'react-router-dom';
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
  const search = useLocation().search;
  const athlete = new URLSearchParams(search).get('athlete');
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

  useEffect(() => {
    if (athlete) {
      setQueryParams(currentValue => ({ ...currentValue, filters: { athlete } }));
    }
  }, [setQueryParams, athlete]);

  const onSubmit: SubmitHandler<FormValues> = async form => {
    setQueryParams({ startInclusive: 0, endExclusive: 6, filters: form });
  };

  const clearForm = () => {
    reset();
    setQueryParams({ startInclusive: 0, endExclusive: 6, filters: null });
  };

  return {
    onSubmit,
    register,
    handleSubmit,
    clearForm,
    control,
  };
};
