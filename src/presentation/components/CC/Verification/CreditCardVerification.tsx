import { Button, Typography } from '@material-ui/core';
import { useCCVerification } from './useCCVerification';
import { CIRCLE_FAILURE_CODES } from 'app/constants/contants';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import styles from './CCVerification.module.scss';

export const CreditCardVerification = () => {
  const { isLoading, creditCardStatus, errorMsg, handleCheckStatus } = useCCVerification();

  return (
    <div>
      <div className={styles.ccVerification}>
        <Typography gutterBottom variant="h5">{`Credit Card Status: ${creditCardStatus}`}</Typography>

        {errorMsg && (
          <Typography
            gutterBottom
            variant="subtitle1"
          >{`Description: ${CIRCLE_FAILURE_CODES[errorMsg]}`}</Typography>
        )}

        {isLoading ? <CustomLoader /> : <Button onClick={handleCheckStatus}>Check Status</Button>}
      </div>
    </div>
  );
};
