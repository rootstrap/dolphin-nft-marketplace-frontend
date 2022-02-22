import { useEffect, useState } from 'react';
import { useConnectedWallet, useSolana } from '@saberhq/use-solana';
import { useVerifyWalletMutation } from 'app/services/wallet/WalletService';

export const useWalletKit = () => {
  const [isValidAddress, setIsValidAddress] = useState(false);
  const { disconnect } = useSolana();
  const wallet = useConnectedWallet();

  const [verifyWallet, { isSuccess, data }] = useVerifyWalletMutation();

  useEffect(() => {
    if (wallet) {
      verifyWallet(wallet.publicKey.toString());
    }
  }, [verifyWallet, wallet]);

  useEffect(() => {
    if (isSuccess) {
      setIsValidAddress(data.authorized);
    }
  }, [data.authorized, isSuccess]);

  return {
    wallet,
    isValidAddress,
    disconnect,
  };
};
