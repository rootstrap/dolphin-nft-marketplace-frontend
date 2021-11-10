import { useEffect, useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { ReactComponent as Card } from 'app/assets/CardPicture.svg';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { useAppSelector } from 'app/hooks/reduxHooks';
import {
  useGetBalanceMutation,
  useInitiateDepositMutation,
} from 'infrastructure/services/deposit/DepositService';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { SuccessVerification } from '../CC/Verification/SuccessVerification';
import styles from './DepositModal.module.scss';

export const DepositModal = ({ isOpen, handleClose, depositSize, fee }: DepositModalProps) => {
  const [cvv, setCvv] = useState<number>(0);
  const [error, setError] = useState('');

  const { defaultCreditCard } = useAppSelector(state => state.creditCard);
  const [initiateDeposit, { isLoading, isSuccess, isError }] = useInitiateDepositMutation();
  const [getBalance] = useGetBalanceMutation();

  const handleOnClick = async () => {
    const response = await initiateDeposit({
      cvv: cvv,
      cardId: Number(defaultCreditCard.id),
      size: depositSize,
    });
    console.log('response: ', response);
    setTimeout(() => {
      getBalance();
    }, 30000);
  };

  useEffect(() => {
    if (isError) {
      setError('An Error has ocurred');
    }
  }, [isError]);

  const componentToRender = isSuccess ? (
    <div className={styles.depositModal}>
      <SuccessVerification successMsg="Your deposit was successful" />
    </div>
  ) : (
    <div className={styles.depositModal}>
      {isLoading ? (
        <CustomLoader msg="Waiting for your deposit" />
      ) : (
        <>
          <Card />

          <div className={styles.depositModal__text}>
            <Typography variant="h5">Please Introduce your CVV</Typography>
            <Typography variant="h6">Deposit: ${depositSize}</Typography>
            <Typography variant="subtitle1">Fee: ${fee}</Typography>
          </div>

          <div className={styles.depositModal__input}>
            <TextField
              label="CVV"
              type="number"
              value={cvv || ''}
              onChange={e => setCvv(Number(e.target.value))}
            />
          </div>

          <div className={styles.depositModal__button}>
            <Button onClick={handleOnClick}>Make Deposit</Button>
          </div>
        </>
      )}
      <Typography className={styles.depositModal__error}>{error}</Typography>
    </div>
  );

  return (
    <BaseModal open={isOpen} handleClose={handleClose}>
      {componentToRender}
    </BaseModal>
  );
};

interface DepositModalProps {
  isOpen: boolean;
  handleClose: () => void;
  depositSize: number;
  fee: number;
}
