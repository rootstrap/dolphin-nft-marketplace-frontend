import { Button, Typography } from '@material-ui/core';
import { InputText } from '../../../infrastructure/components/InputText/InputText';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { useSignup } from './useSignup';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import routesPaths from 'app/constants/routesPath';
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
    errors,
    error,
  } = useSignup();

  return (
    <BaseModal open={signupModalIsOpen} handleClose={handleClose}>
      <form className={styles.signupForm} onSubmit={handleSubmit(onSubmit)}>
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
          <Grid item xs={12}>
            {isLoading ? (
              <CustomLoader />
            ) : (
              <div className={styles.signupForm__button}>
                <Button type="submit">{t('signup.button')}</Button>
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
