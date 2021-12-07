import { Button, Typography } from '@material-ui/core';
import { BaseModal } from '../../../infrastructure/components/Modal/Modal';
import { InputText } from '../../../infrastructure/components/InputText/InputText';
import { useLogin } from './useLogin';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { ReactComponent as FTXLogo } from 'app/assets/ftxus_logo.svg';
import { Checkboxes } from '../Checkboxes/Checkboxes';
import { Mfa } from '../Mfa/Mfa';
import useTranslation from '../../../app/hooks/useTranslation';
import routesPaths from '../../../app/constants/routesPath';
import styles from './Login.module.scss';

export const Login = () => {
  const t = useTranslation();
  const {
    loginModalIsOpen,
    handleOpenSignupModal,
    handleClose,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
    errors,
    error,
    isGetCreditCardsSuccess,
    isMfaRequired,
    setIsMfaRequired,
  } = useLogin();

  const formToRender = isGetCreditCardsSuccess ? (
    isMfaRequired ? (
      <Mfa setIsMfaRequired={setIsMfaRequired} />
    ) : (
      <Checkboxes handleClose={handleClose} />
    )
  ) : (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.loginForm__logo}>
        <FTXLogo />
      </div>
      <div className={styles.loginForm__title}>
        <Typography gutterBottom variant="h5">
          {t('login.title')}
        </Typography>
      </div>

      {error && (
        <div className={styles.loginForm__error}>
          <Typography variant="h6">{error}</Typography>
        </div>
      )}

      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item xs={12}>
          <InputText
            className={styles.loginForm__input}
            label={t('login.email')}
            register={register}
            name="email"
            type="email"
            error={errors.email}
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            className={styles.loginForm__input}
            label={t('login.password')}
            register={register}
            name="password"
            type="password"
            error={errors.password}
          />
        </Grid>
        <Grid item xs={12}>
          <div className={styles.loginForm__button}>
            <Button fullWidth type="submit">
              {t('login.button')}
            </Button>
          </div>

          <div>
            <Typography>{t('login.signupMsg')}</Typography>

            <Link to={routesPaths.index} onClick={handleOpenSignupModal}>
              <Typography>{t('login.signupLink')}</Typography>
            </Link>
          </div>
        </Grid>
      </Grid>
    </form>
  );

  return (
    <BaseModal open={loginModalIsOpen} handleClose={handleClose}>
      {isLoading ? (
        <div className={styles.loginForm__spinner}>
          <CustomLoader />
        </div>
      ) : (
        formToRender
      )}
    </BaseModal>
  );
};
