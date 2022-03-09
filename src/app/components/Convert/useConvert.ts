import { useEffect, useRef, useState } from 'react';
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
import { clearInterval, setInterval } from 'timers';

interface FormValues {
  fromCoin: string;
  toCoin: string;
  size: string;
}

export const useConvert = () => {
  const secondInMillisecond = 1000;
  const [expiryTime, setExpiryTime] = useState(0);
  const [isConvertExpired, setIsConvertExpired] = useState(true);
  const [isFirstConversion, setIsFirstConversion] = useState(true);
  const [currencies, setCurrencies] = useState<string[]>([]);
  const [error, setError] = useState('');

  const intervalRef = useRef(null);
  const timeoutRef = useRef(null);

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
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormValues> = async data => {
    await convertBalance(data);
  };

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    getCoins();
  }, [getCoins]);

  useEffect(() => {
    if (isConvertBalanceSuccess) {
      setError('');
      getConvertBalance(data.result.quoteId);
    }
  }, [isConvertBalanceSuccess, getConvertBalance, data]);

  useEffect(() => {
    if (isGetCoinSuccess) {
      const currencies = getCoinsData.result.map(coin => coin.id);
      setCurrencies(currencies);
    }
  }, [isGetCoinSuccess, getCoinsData]);

  useEffect(() => {
    if (isGetConvertBalanceSuccess) {
      const expiryTimeInSeconds = Math.trunc(
        (getConvertData.expiry * secondInMillisecond - new Date().getTime()) / secondInMillisecond
      );

      setIsFirstConversion(false);
      setExpiryTime(expiryTimeInSeconds);
      setIsConvertExpired(false);

      intervalRef.current = setInterval(() => {
        setExpiryTime(currentValue => currentValue - 1);
      }, secondInMillisecond);

      timeoutRef.current = setTimeout(() => {
        setIsConvertExpired(true);
        resetInterval();
        setExpiryTime(0);
      }, expiryTimeInSeconds * secondInMillisecond);
    }

    return () => {
      clearInterval(intervalRef.current);
      clearTimeout(timeoutRef.current);
    };
  }, [isGetConvertBalanceSuccess, getConvertData]);

  useEffect(() => {
    if (isConfirmConvertBalanceSuccess) {
      getBalance();
      clearTimeout(timeoutRef.current);
      resetInterval();
      setExpiryTime(0);
      reset();
      setIsConvertExpired(true);
      setIsFirstConversion(true);
    }
  }, [isConfirmConvertBalanceSuccess, getBalance, reset]);

  useEffect(() => {
    if (isConvertBalanceError) {
      const error: any = Object(convertBalanceError);
      setError(error.data.error);
    }
  }, [isConvertBalanceError, setError, convertBalanceError]);

  const handleConfirm = () => confirmConvertBalance(data.result.quoteId);

  return {
    currencies,
    error,
    errors,
    expiryTime,
    getConvertData,
    handleConfirm,
    handleSubmit,
    isConfirmConvertBalanceSuccess,
    isConvertBalanceSuccess,
    isConvertExpired,
    isFirstConversion,
    isLoading,
    onSubmit,
    register,
  };
};
