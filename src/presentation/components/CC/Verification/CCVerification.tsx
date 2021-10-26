import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { Button, Typography } from '@material-ui/core';
import { useCC } from '../useCC';
import { useCCVerification } from './useCCVerification';
import { CIRCLE_FAILURE_CODES } from 'app/constants/contants';
import styles from './CCVerification.module.scss';

export const CCVerification = () => {
  const { ccStatusModalIsOpen, setCcStatusModalIsOpen } = useCC();
  const { isLoading, creditCardStatus, errorMsg, handleCheckStatus } = useCCVerification();

  return (
    <BaseModal open={ccStatusModalIsOpen} handleClose={() => setCcStatusModalIsOpen(false)}>
      <div className={styles.ccVerification}>
        <Typography gutterBottom variant="h5">{`Credit Card Status: ${creditCardStatus}`}</Typography>

        {errorMsg && (
          <Typography
            gutterBottom
            variant="subtitle1"
          >{`Description: ${CIRCLE_FAILURE_CODES[errorMsg]}`}</Typography>
        )}

        <Button onClick={handleCheckStatus} disabled={isLoading}>
          Check Status
        </Button>
      </div>
    </BaseModal>
  );
};
