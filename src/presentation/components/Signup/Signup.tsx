import { Button, Checkbox, Typography } from '@material-ui/core';
import { InputText } from '../../../infrastructure/components/InputText/InputText';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { useSignup } from './useSignup';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { ReactComponent as FTXLogo } from 'app/assets/ftxus_logo.svg';
import routesPaths from 'app/constants/routesPath';
import { dolphinServiceLinks } from 'app/constants/contants';
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

  return (
    <BaseModal open={signupModalIsOpen} handleClose={handleClose}>
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
          <Grid item xs={12} className={styles.signupForm__checkbox}>
            <Checkbox checked={isTosAgree} onChange={() => setIsTosAgree(currentValue => !currentValue)} />
            <Typography>
              {t('signup.TOS.agrees')}
              <a href={dolphinServiceLinks.termOfService} target="_blank">
                {t('signup.TOS.terms')}
              </a>
              {t('signup.TOS.and')}
              <a href={dolphinServiceLinks.privacyPolicy} target="_blank">
                {t('signup.TOS.privacyPolicy')}
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {isLoading ? (
              <CustomLoader />
            ) : (
              <div className={styles.signupForm__button}>
                <Button disabled={!isTosAgree} type="submit">
                  {t('signup.button')}
                </Button>
              </div>
            )}
          </Grid>
          <Grid item xs={12}>
            <div>
              <Typography>{t('signup.signinMsg')}</Typography>
              <Link to={routesPaths.index} onClick={handleOpenSigninModal}>
                <Typography>{t('signup.signinLink')}</Typography>
              </Link>
            </div>
          </Grid>
        </Grid>
      </form>
    </BaseModal>
  );
};
