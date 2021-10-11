import { Button, Typography } from '@material-ui/core';
import { InputText } from 'infrastructure/components/InputText/InputText';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { useSignup } from './useSignup';
import { Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useTranslation from 'app/hooks/useTranslation';
import routesPaths from 'app/constants/routesPath';
import styles from './Signup.module.scss';
import dolphinBall from 'app/assets/blue_ball.png';

export const Signup = () => {
  const t = useTranslation();
  const {
    formValues: { email, firstName, lastName, password, passwordConfirmation },
    signupModalIsOpen,
    handleOpenSigninModal,
    handleClose,
    handleOnSubmit,
    error,
    handleOnChange,
  } = useSignup();

  return (
    <BaseModal open={signupModalIsOpen} handleClose={handleClose}>
      <img src={dolphinBall} alt="dolphin ball" className={styles.signupForm__img} />
      <form className={styles.signupForm} onSubmit={handleOnSubmit}>
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
              type="text"
              value={firstName}
              error={!!error}
              onChange={handleOnChange}
              size="small"
            />
          </Grid>
          <Grid item md={6} xs={12}>
            <InputText
              className={styles.signupForm__input}
              label={t('signup.lastName')}
              name="lastName"
              type="text"
              value={lastName}
              error={!!error}
              onChange={handleOnChange}
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.signupForm__input}
              label={t('signup.email')}
              name="email"
              type="email"
              value={email}
              error={!!error}
              onChange={handleOnChange}
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.signupForm__input}
              label={t('signup.password')}
              name="password"
              type="password"
              value={password}
              error={!!error}
              onChange={handleOnChange}
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.signupForm__input}
              label={t('signup.passwordConfirmation')}
              name="passwordConfirmation"
              type="password"
              value={passwordConfirmation}
              error={!!error}
              onChange={handleOnChange}
              size="small"
            />
          </Grid>
          <Grid item xs={12}>
            <div className={styles.signupForm__button}>
              <Button fullWidth type="submit">
                {t('signup.button')}
              </Button>
            </div>
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
