import { Button, CircularProgress, TextField, Typography } from '@material-ui/core';
import { BaseModal } from '../Modal/Modal';
import { useFundWallet } from './useFundWallet';
import { SuccessVerification } from '../CC/Verification/SuccessVerification';
import useTranslation from 'app/hooks/useTranslation';
import styles from './FundWalletModal.module.scss';

export const FundWalletModal = ({ open, handleClose }: FundWalletModalProps) => {
  const t = useTranslation();
  const { data, deposit, error, handleInputChange, handleOnClick, isLoading, isSuccess } =
    useFundWallet(open);

  const componentToRender =
    isSuccess && !error ? (
      <SuccessVerification successMsg="Your deposit was successful" />
    ) : (
      <>
        <div className={styles.fundWallet__title}>
          <Typography variant="h5">{t('profile.deposit.title')}</Typography>
        </div>

        <Typography className={styles.fundWallet__error}>{error}</Typography>

        <div className={styles.fundWallet__description}>
          <Typography variant="subtitle1">{t('profile.deposit.description')}</Typography>
        </div>

        <div className={styles.fundWallet__info}>
          <Typography variant="body1">{t('profile.deposit.info')}</Typography>
        </div>

        <div className={styles.fundWallet__card}>
          <Typography>Card: {`XXXX XXXX XXXX ${data?.mask}`}</Typography>

          <div className={styles.fundWallet__cardCvv}>
            <div className={styles.fundWallet__cardInput}>
              <TextField variant="outlined" label="cvv" name="cvv" onChange={handleInputChange} fullWidth />
              <small>{t('profile.deposit.smallCvv')}</small>
            </div>

            <div className={styles.fundWallet__cardInput}>
              <TextField
                variant="outlined"
                label="Amount"
                name="depositSize"
                onChange={handleInputChange}
                fullWidth
              />
              <small>{t('profile.deposit.smallAmount')}</small>
            </div>
          </div>
        </div>

        <div className={styles.fundWallet__button}>
          <Button onClick={handleOnClick} disabled={isLoading || !deposit.cvv}>
            {isLoading ? <CircularProgress /> : t('profile.deposit.button')}
          </Button>
        </div>
      </>
    );

  return (
    <BaseModal open={open} handleClose={handleClose}>
      <main className={styles.fundWallet}>{componentToRender}</main>
    </BaseModal>
  );
};

interface FundWalletModalProps {
  open: boolean;
  handleClose: () => void;
}
