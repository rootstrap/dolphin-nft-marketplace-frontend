import { useEffect, useState } from 'react';
import { Button, CircularProgress, Typography } from '@material-ui/core';

import * as anchor from '@project-serum/anchor';

import { LAMPORTS_PER_SOL } from '@solana/web3.js';

import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
  shortenAddress,
} from 'app/helpers/candyMachine';
import useTranslation from 'app/hooks/useTranslation';

export interface HomeProps {
  candyMachineId: anchor.web3.PublicKey;
  config: anchor.web3.PublicKey;
  connection: anchor.web3.Connection;
  startDate: number;
  treasury: anchor.web3.PublicKey;
  txTimeout: number;
  wallet: any;
  isValidAddress: boolean;
}

export const MintCandyMachine = ({
  candyMachineId,
  config,
  connection,
  startDate: startDateProps,
  treasury,
  txTimeout,
  wallet,
  isValidAddress,
}: HomeProps) => {
  const t = useTranslation();
  const [error, setError] = useState('');
  const [balance, setBalance] = useState<number>();
  const [isActive, setIsActive] = useState(false); // true when countdown completes
  const [isSoldOut, setIsSoldOut] = useState(false); // true when items remaining is zero
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [itemsAvailable, setItemsAvailable] = useState(0);
  const [itemsRedeemed, setItemsRedeemed] = useState(0);
  const [itemsRemaining, setItemsRemaining] = useState(0);

  const [startDate, setStartDate] = useState(new Date(startDateProps));

  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const { candyMachine, goLiveDate, itemsAvailable, itemsRemaining, itemsRedeemed } =
        await getCandyMachineState(wallet as anchor.Wallet, candyMachineId, connection);

      setItemsAvailable(itemsAvailable);
      setItemsRemaining(itemsRemaining);
      setItemsRedeemed(itemsRedeemed);

      setIsSoldOut(itemsRemaining === 0);
      setStartDate(goLiveDate);
      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    setError('');
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(candyMachine, config, wallet.publicKey, treasury);

        const status = await awaitTransactionSignatureConfirmation(
          mintTxId,
          txTimeout,
          connection,
          'singleGossip',
          false
        );
      }
    } catch (error: any) {
      const mintError: MintError = JSON.parse(JSON.stringify(error, null, 2));
      setError(mintError.msg);
    } finally {
      if (wallet) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(() => {
    (async () => {
      if (wallet) {
        const balance = await connection.getBalance(wallet.publicKey);
        setBalance(balance / LAMPORTS_PER_SOL);
      }
    })();
  }, [wallet, connection]);

  useEffect(refreshCandyMachineState, [wallet, candyMachineId, connection]);

  return (
    <>
      <div>
        {isValidAddress ? (
          <Button onClick={onMint} variant="outlined" disabled={!isValidAddress} size="large">
            {t('creatures.whitelist.mint')}
          </Button>
        ) : (
          <Typography variant="h6">{t('creatures.whitelist.walletInvalid')}</Typography>
        )}
      </div>
      <div>
        <Typography variant="h6">{error}</Typography>
      </div>
    </>
  );
};

interface MintError {
  code: number;
  msg: string;
}
