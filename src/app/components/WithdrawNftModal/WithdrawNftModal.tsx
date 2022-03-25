import { BaseModal } from 'app/components/Modal/Modal';
import { Button, Typography } from '@material-ui/core';
import { useWithdrawNftModal } from './useWithdrawNftModal';
import { FailedVerification } from '../CC/Verification/FailedVerification';
import { SuccessVerification } from '../CC/Verification/SuccessVerification';
import { helpLinks } from 'app/constants/constants';
import { InputText } from '../InputText/InputText';
import useTranslation from 'app/hooks/useTranslation';
import styles from './WithdrawNftModal.module.scss';

export const WithdrawNftModal = ({ handleClose, id, title, withdrawModalIsOpen }: WithdrawNftModalProps) => {
  const t = useTranslation();
  const { errors, handleSubmit, isError, isSuccess, mfa, onSubmit, register, sendSms, data } =
    useWithdrawNftModal(id);

  return (
    <BaseModal open={withdrawModalIsOpen} handleClose={handleClose}>
      {!data && (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.withdrawNftModal}>
          <Typography variant={'h5'} component={'h2'} gutterBottom>
            {title}
          </Typography>

          <InputText
            className={styles.withdrawNftModal__address}
            label={t('nft.withdrawNft.address')}
            register={register}
            name="address"
            type="text"
            error={errors.email}
          />

          <div className={styles.withdrawNftModal__code}>
            <InputText
              className={styles.withdrawNftModal__codeInput}
              label={t('nft.withdrawNft.code')}
              register={register}
              name="code"
              type="text"
              error={errors.email}
            />
            {mfa === 'sms' && (
              <div className={styles.withdrawNftModal__codeButton}>
                <Button onClick={sendSms} variant="text" fullWidth>
                  Send SMS
                </Button>
              </div>
            )}
          </div>

          <div className={styles.withdrawNftModal__msg}>
            <Button fullWidth type="submit" disabled={!mfa}>
              {t('nft.withdrawNft.withdraw')}
            </Button>
            {!mfa && (
              <>
                <Typography>You need 2FA set in order to withdraw.</Typography>
                <a href={helpLinks.mfaHelp} target="_blank">
                  <Typography>More info here.</Typography>
                </a>
              </>
            )}
          </div>
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
