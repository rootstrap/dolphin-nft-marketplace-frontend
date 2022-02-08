import { useEffect, useState } from 'react';
import {
  useConfirmConvertBalanceMutation,
  useConvertBalanceMutation,
  useGetBalanceMutation,
  useGetCoinsMutation,
  useGetConvertBalanceMutation,
} from 'app/services/deposit/DepositService';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

interface FormValues {
  fromCoin: string;
  toCoin: string;
  size: string;
}

export const useConvert = () => {
  const [showResume, setShowResume] = useState(false);
  const [isConvertExpired, setIsConvertExpired] = useState(true);
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [error, setError] = useState('');

  const [getCoins, { data: getCoinsData, isSuccess: isGetCoinSuccess }] = useGetCoinsMutation();
  const [getBalance] = useGetBalanceMutation();
  const [
    convertBalance,
    { isSuccess: isConvertBalanceSuccess, isError: isConvertBalanceError, data, error: convertBalanceError },
  ] = useConvertBalanceMutation();
  const [confirmConvertBalance, { isSuccess: isConfirmConvertBalanceSuccess, isLoading }] =
    useConfirmConvertBalanceMutation();
  const [getConvertBalance, { isSuccess: isGetConvertBalanceSuccess, data: getConvertData }] =
    useGetConvertBalanceMutation();

  const schema = z
    .object({
      fromCoin: z.string().min(3, { message: 'Field Required' }),
      toCoin: z.string().min(3, { message: 'Field Required' }),
      size: z.string().min(1, { message: 'Field Required' }),
    })
    .refine(data => data.fromCoin !== data.toCoin, {
      message: 'Coins must be different',
      path: ['fromCoin', 'toCoin'],
    });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    await convertBalance(data);
  };

  useEffect(() => {
    getCoins();
  }, [getCoins]);

  useEffect(() => {
    if (isConvertBalanceSuccess) {
      setError('');
      getConvertBalance(data.result.quoteId);
    }
  }, [isConvertBalanceSuccess]);

  useEffect(() => {
    if (isGetCoinSuccess) {
      const currencies = getCoinsData.result.map(coin => coin.id);
      setCurrencies(currencies);
    }
  }, [isGetCoinSuccess]);

  useEffect(() => {
    if (isGetConvertBalanceSuccess) {
      setIsConvertExpired(false);
      setShowResume(true);

      setTimeout(() => {
        setShowResume(false);

        setIsConvertExpired(true);
      }, 4000);
    }
  }, [isGetConvertBalanceSuccess]);

  useEffect(() => {
    if (isConfirmConvertBalanceSuccess) {
      getBalance();
    }
  }, [isConfirmConvertBalanceSuccess, getBalance]);

  useEffect(() => {
    if (isConvertBalanceError) {
      const error: any = Object(convertBalanceError);
      setError(error.data.error);
    }
  }, [isConvertBalanceError]);

  const handleConfirm = () => confirmConvertBalance(data.result.quoteId);

  return {
    showResume,
    currencies,
    handleSubmit,
    onSubmit,
    register,
    errors,
    getConvertData,
    isConvertExpired,
    handleConfirm,
    isLoading,
    error,
  };
};
