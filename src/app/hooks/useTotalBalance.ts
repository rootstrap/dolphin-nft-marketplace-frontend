import { useAppSelector } from './reduxHooks';
import { useState } from 'react';
import { Balance, Currency } from 'app/interfaces/common/Balance';

export const useTotalBalance = (currency: Currency) => {
  const {
    deposit: { balances },
  } = useAppSelector(state => state);
  const [totalBalance] = useState<number>(
    () => balances.find((balance: Balance) => balance.coin === currency)?.total || 0
  );

  return {
    totalBalance,
  };
};
