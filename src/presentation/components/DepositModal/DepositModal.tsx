import { Button, TextField, Typography } from '@material-ui/core';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { SuccessVerification } from '../CC/Verification/SuccessVerification';
import { useDepositModal } from './useDepositModal';
import Cards from 'react-credit-cards';
import styles from './DepositModal.module.scss';
import 'react-credit-cards/es/styles-compiled.css';

export const DepositModal = ({ isOpen, handleClose, depositSize, fee }: DepositModalProps) => {
  const { isSuccess, isLoading, data, cvv, name, handleInputChange, handleInputFocus, handleOnClick, error } =
    useDepositModal(depositSize);

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
          <Cards
            preview
            cvc={cvv.cvc}
            name={name}
            number={`************${data.mask}`}
            expiry={''}
            focused={cvv.focus}
          />

          <div className={styles.depositModal__text}>
            <Typography variant="h5">Please Introduce your CVV</Typography>
            <Typography variant="h6">Deposit: ${depositSize}</Typography>
            <Typography variant="subtitle1">Fee: ${fee}</Typography>
          </div>

          <div className={styles.depositModal__input}>
            <TextField
              label="CVV"
              name="cvc"
              type="number"
              value={cvv.cvc || ''}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
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
