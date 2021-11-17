import { Checkbox, Typography } from '@material-ui/core';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useContext } from 'react';
import { ModalContext } from '../../../../app/context/ModalContext';
import styles from './Checkboxes.module.scss';

export const Checkboxes = () => {
  const { kyc1ed } = useAppSelector(state => state.user.user);
  const { defaultCreditCard } = useAppSelector(state => state.creditCard);
  const { setKycModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);

  const isWalletReady = defaultCreditCard.status === 'approved';
  const isFlowComplete = kyc1ed && isWalletReady;

  return (
    <>
      {!isFlowComplete && (
        <>
          <div className={styles.checkboxes}>
            <div className={styles.checkboxes__container}>
              <Checkbox checked />
              <Typography variant="h6" className={styles.checkboxes__containerText}>
                Create Account
              </Typography>
            </div>

            <div className={styles.checkboxes__container}>
              <Checkbox checked={kyc1ed} />
              <Typography
                variant="h6"
                onClick={() => setKycModalIsOpen(!kyc1ed)}
                className={styles.checkboxes__containerText}
              >
                Tell us about yourself
              </Typography>
            </div>

            {kyc1ed && (
              <div className={styles.checkboxes__container}>
                <Checkbox checked={isWalletReady} />
                <Typography
                  variant="h6"
                  onClick={() => setCcModalIsOpen(!isWalletReady)}
                  className={styles.checkboxes__containerText}
                >
                  Activate your wallet
                </Typography>
              </div>
            )}
          </div>

          <Typography variant="h6">
            You’re almost ready! You must activate your wallet before you start collecting. We recommend doing
            this ahead of time -- don’t worry, you won’t be charged until you decide to purchase.
          </Typography>
        </>
      )}
    </>
  );
};
