import { BaseModal } from 'app/components/Modal/Modal';
import { InputText } from 'app/components/InputText/InputText';
import { Button, Grid, Typography } from '@material-ui/core';
import { useForgotPasswordModal } from './useForgotPasswordModal';
import { ReactComponent as FTXLogo } from 'app/assets/ftxus_logo.svg';
import useTranslation from 'app/hooks/useTranslation';
import styles from './ForgotPassword.module.scss';

export const ForgotPasswordModal = () => {
  const t = useTranslation();
  const { errors, forgotPasswordModalIsOpen, handleClose, handleSubmit, isSuccess, onSubmit, register } =
    useForgotPasswordModal();

  return (
    <BaseModal open={forgotPasswordModalIsOpen} handleClose={handleClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container justifyContent="center" className={styles.forgotPassword}>
          <FTXLogo />
          <Grid item xs={12}>
            <InputText
              className={styles.forgotPassword__email}
              label={t('login.email')}
              register={register}
              name="email"
              type="email"
              error={errors.email}
            />
          </Grid>
          {isSuccess && <Typography gutterBottom>{t('login.forgotPassword.successfulSentEmail')}</Typography>}
          <Grid item xs={12}>
            <Button fullWidth type="submit">
              {t('login.forgotPassword.sendPasswordEmail')}
            </Button>
          </Grid>
        </Grid>
      </form>
    </BaseModal>
  );
};
