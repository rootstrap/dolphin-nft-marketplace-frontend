import { Button, Checkbox, Typography, Link } from '@material-ui/core';
import { InputText } from '../../../app/components/InputText/InputText';
import { BaseModal } from 'app/components/Modal/Modal';
import { useSignup } from './useSignup';
import { Grid } from '@material-ui/core';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import { ReactComponent as FTXLogo } from 'app/assets/ftxus_logo.svg';
import { dolphinServiceLinks } from 'app/constants/constants';
import styles from './Signup.module.scss';
import useTranslation from 'app/hooks/useTranslation';

export const Signup = () => {
  const t = useTranslation();
  const {
    signupModalIsOpen,
    handleOpenSigninModal,
    handleClose,
    isLoading,
    register,
    handleSubmit,
    onSubmit,
    setIsTosAgree,
    isTosAgree,
    errors,
    error,
  } = useSignup();

  const formToRender = (
    <form className={styles.signupForm} onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.signupForm__logo}>
        <FTXLogo />
      </div>
      <div className={styles.signupForm__title}>
        <Typography variant="h5">{t('signup.title')}</Typography>
      </div>

      {error && (
        <div className={styles.signupForm__error}>
          <Typography variant="h6">{error}</Typography>
        </div>
      )}

      <Grid container spacing={3} alignItems="center" justifyContent="center">
        <Grid item md={6} xs={12}>
          <InputText
            className={styles.signupForm__input}
            label={t('signup.firstName')}
            name="firstName"
            register={register}
            type="text"
            error={errors.firstName}
            size="small"
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <InputText
            className={styles.signupForm__input}
            label={t('signup.lastName')}
            name="lastName"
            register={register}
            type="text"
            error={errors.lastName}
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            className={styles.signupForm__input}
            label={t('signup.email')}
            name="email"
            register={register}
            type="email"
            error={errors.email}
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            className={styles.signupForm__input}
            label={t('signup.password')}
            name="password"
            register={register}
            type="password"
            error={errors.password}
            size="small"
          />
        </Grid>
        <Grid item xs={12}>
          <InputText
            className={styles.signupForm__input}
            label={t('signup.passwordConfirmation')}
            name="passwordConfirmation"
            register={register}
            type="password"
            error={errors.passwordConfirmation}
            size="small"
          />
        </Grid>
        <Grid item xs={12} style={{ fontSize: '0.7rem' }}>
          This site is protected by reCAPTCHA and the Google
          <a href="https://policies.google.com/privacy"> Privacy Policy</a> and
          <a href="https://policies.google.com/terms"> Terms of Service</a> apply.
        </Grid>
        <Grid item xs={12} className={styles.signupForm__checkbox}>
          <Checkbox checked={isTosAgree} onChange={() => setIsTosAgree(!isTosAgree)} />
          <Typography>
            {t('signup.TOS.agrees')}
            <Link href={dolphinServiceLinks.termOfService} target="_blank">
              {t('signup.TOS.terms')}
            </Link>
            {t('signup.TOS.and')}
            <Link href={dolphinServiceLinks.privacyPolicy} target="_blank">
              {t('signup.TOS.privacyPolicy')}
            </Link>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={styles.signupForm__button}>
            <Button disabled={!isTosAgree} type="submit">
              {t('signup.button')}
            </Button>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div>
            <Typography>{t('signup.signinMsg')}</Typography>
            <Link onClick={handleOpenSigninModal}>
              <Typography>{t('signup.signinLink')}</Typography>
            </Link>
          </div>
        </Grid>
      </Grid>
    </form>
  );

  return (
    <BaseModal open={signupModalIsOpen} handleClose={handleClose}>
      {isLoading ? (
        <div className={styles.signupForm__spinner}>
          <CustomLoader />
        </div>
      ) : (
        formToRender
      )}
    </BaseModal>
  );
};
