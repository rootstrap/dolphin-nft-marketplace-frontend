import { useEffect, useState } from 'react';
import { Button, CircularProgress, Typography } from '@material-ui/core';
import * as anchor from '@project-serum/anchor';
import {
  CandyMachine,
  awaitTransactionSignatureConfirmation,
  getCandyMachineState,
  mintOneToken,
} from 'app/helpers/candyMachine';
import useTranslation from 'app/hooks/useTranslation';
import styles from './MintCandyMachine.module.scss';

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
  const [isMinting, setIsMinting] = useState(false); // true when user got to press MINT

  const [candyMachine, setCandyMachine] = useState<CandyMachine>();

  const refreshCandyMachineState = () => {
    (async () => {
      if (!wallet) return;

      const { candyMachine } = await getCandyMachineState(
        wallet as anchor.Wallet,
        candyMachineId,
        connection
      );

      setCandyMachine(candyMachine);
    })();
  };

  const onMint = async () => {
    setError('');
    try {
      setIsMinting(true);
      if (wallet && candyMachine?.program) {
        const mintTxId = await mintOneToken(candyMachine, config, wallet.publicKey, treasury);

        await awaitTransactionSignatureConfirmation(mintTxId, txTimeout, connection, 'singleGossip', false);
      }
    } catch (error: any) {
      const mintError: MintError = JSON.parse(JSON.stringify(error, null, 2));
      setError(mintError.msg);
    } finally {
      setIsMinting(false);
      refreshCandyMachineState();
    }
  };

  useEffect(refreshCandyMachineState, [wallet, candyMachineId, connection]);

  return (
    <>
      <div className={styles.candyMachine}>
        {isValidAddress ? (
          <Button
            className={styles.candyMachine__button}
            onClick={onMint}
            variant="outlined"
            disabled={isMinting}
            size="large"
          >
            {isMinting ? (
              <CircularProgress />
            ) : (
              <Typography className={styles.candyMachine__buttonText} variant="h5">
                {t('creatures.buyCreatures.mintButton')}
              </Typography>
            )}
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
