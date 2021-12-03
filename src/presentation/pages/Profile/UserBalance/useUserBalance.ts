import { useGetBalanceMutation } from 'infrastructure/services/deposit/DepositService';
import { useEffect } from 'react';
import { useAppSelector } from 'app/hooks/reduxHooks';

export const useUserBalance = () => {
  const { balances } = useAppSelector(state => state.deposit);
  const [getBalance] = useGetBalanceMutation();

  useEffect(() => {
    getBalance();
  }, [getBalance]);

  return {
    balances,
  };
};
