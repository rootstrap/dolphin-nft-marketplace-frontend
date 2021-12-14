import { useCallback, useEffect, useState } from 'react';
import { ConnectWalletButton } from '@gokiprotocol/walletkit';
import { useConnectedWallet, useSolana } from '@saberhq/use-solana';
import { Button } from '@material-ui/core';

export const WalletKit = () => {
  const { disconnect, providerMut } = useSolana();
  const wallet = useConnectedWallet();
  const [balance, setBalance] = useState<number | null>(null);

  const refetchSOL = useCallback(async () => {
    if (wallet && providerMut) {
      setBalance(await providerMut.connection.getBalance(wallet.publicKey));
    }
  }, [providerMut, wallet]);

  useEffect(() => {
    void refetchSOL();
  }, [refetchSOL]);

  return (
    <>
      {wallet ? (
        <Button onClick={disconnect}>Disconnect</Button>
      ) : (
        <ConnectWalletButton style={WalletButtonStyle} />
      )}
    </>
  );
};

const WalletButtonStyle = {
  backgroundColor: 'black',
  color: 'white',
  justifyContent: 'center',
  padding: '1.5rem',
  width: '15rem',
};
