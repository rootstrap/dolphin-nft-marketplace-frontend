import { useState } from 'react';
import { Button, TextField, Typography } from '@material-ui/core';
import { useCCVerification } from './useCCVerification';
import { CIRCLE_FAILURE_CODES } from 'app/constants/contants';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import styles from './CreditCardVerification.module.scss';

export const CreditCardVerification = () => {
  const { isLoading, creditCardStatus, errorMsg, handleCheckStatus } = useCCVerification();
  const [creditCardAmount, setCreditCardAmount] = useState<number>();

  return (
    <div>
      <div className={styles.creditCardVerification}>
        <Typography gutterBottom variant="h5">{`Credit Card Status: ${creditCardStatus}`}</Typography>

        {errorMsg && (
          <Typography
            gutterBottom
            variant="subtitle1"
          >{`Description: ${CIRCLE_FAILURE_CODES[errorMsg]}`}</Typography>
        )}
        <div className={styles.creditCardVerification__input}>
          <Typography gutterBottom variant="subtitle2">
            Introduce the charge in your credit card
          </Typography>
          <TextField
            type="number"
            value={creditCardAmount}
            onChange={e => setCreditCardAmount(Number(e.target.value))}
            variant="outlined"
            fullWidth
          />
        </div>
        <div>
          {isLoading ? (
            <CustomLoader />
          ) : (
            <Button onClick={() => handleCheckStatus(creditCardAmount)}>Verify</Button>
          )}
        </div>
      </div>
    </div>
  );
};
