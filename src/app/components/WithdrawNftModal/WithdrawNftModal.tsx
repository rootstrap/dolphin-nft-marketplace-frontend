import { BaseModal } from 'app/components/Modal/Modal';
import { Button, Grid, Typography } from '@material-ui/core';
import useTranslation from 'app/hooks/useTranslation';
import { InputText } from '../InputText/InputText';
import { useWithdrawNftModal } from './useWithdrawNftModal';
import styles from './WithdrawNftModal.module.scss';
import { FailedVerification } from '../CC/Verification/FailedVerification';
import { SuccessVerification } from '../CC/Verification/SuccessVerification';

export const WithdrawNftModal = ({ handleClose, id, title, withdrawModalIsOpen }: WithdrawNftModalProps) => {
  const t = useTranslation();
  const { errors, handleSubmit, isError, isSuccess, mfaRequired, onSubmit, register, sendSms, data } =
    useWithdrawNftModal(id);

  return (
    <BaseModal open={withdrawModalIsOpen} handleClose={handleClose}>
      {!data && (
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container className={styles.withdrawNftModal}>
            <Typography variant={'h5'} component={'h2'} gutterBottom>
              {title}
            </Typography>
            <Grid item xs={12}>
              <InputText
                className={styles.withdrawNftModal__address}
                label={t('nft.withdrawNft.address')}
                register={register}
                name="address"
                type="text"
                error={errors.email}
              />
            </Grid>
            <Grid item xs={12}>
              <div className={styles.withdrawNftModal__code}>
                <InputText
                  className={styles.withdrawNftModal__codeInput}
                  label={t('nft.withdrawNft.code')}
                  register={register}
                  name="code"
                  type="text"
                  error={errors.email}
                />
                {mfaRequired === 'sms' && (
                  <div className={styles.withdrawNftModal__codeButton}>
                    <Button onClick={sendSms}>Send SMS</Button>
                  </div>
                )}
              </div>
            </Grid>
            <Grid item xs={12}>
              <Button fullWidth type="submit">
                {t('nft.withdrawNft.withdraw')}
              </Button>
            </Grid>
          </Grid>
        </form>
      )}
      {isSuccess && <SuccessVerification successMsg={t('nft.withdrawNft.successWithdraw')} />}
      {isError && <FailedVerification errorMsg={t('nft.withdrawNft.failedWithdraw')} />}
    </BaseModal>
  );
};

interface WithdrawNftModalProps {
  handleClose: any;
  id: string;
  title: string;
  withdrawModalIsOpen: any;
}
