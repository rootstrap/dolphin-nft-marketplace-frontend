import { Button, Typography } from '@material-ui/core';
import { BaseModal } from '../../../infrastructure/components/Modal/Modal';
import { InputText } from '../../../infrastructure/components/InputText/InputText';
import { useLogin } from './useLogin';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import useTranslation from '../../../app/hooks/useTranslation';
import routesPaths from '../../../app/constants/routesPath';
import styles from './Login.module.scss';
import dolphinBall from 'app/assets/blue_ball.svg';

export const Login = () => {
  const t = useTranslation();
  const {
    formValues: { email, password },
    loginModalIsOpen,
    handleOpenSignupModal,
    handleClose,
    handleOnSubmit,
    isLoading,
    error,
    handleOnChange,
  } = useLogin();

  return (
    <BaseModal open={loginModalIsOpen} handleClose={handleClose}>
      <img src={dolphinBall} alt="dolphin ball" className={styles.loginForm__img} />
      <form className={styles.loginForm} onSubmit={handleOnSubmit}>
        <div className={styles.loginForm__title}>
          <Typography variant="h5">{t('login.title')}</Typography>
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
              name="email"
              type="email"
              value={email}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <InputText
              className={styles.loginForm__input}
              label={t('login.password')}
              name="password"
              type="password"
              value={password}
              error={!!error}
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            {isLoading ? (
              <CustomLoader />
            ) : (
              <>
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
              </>
            )}
          </Grid>
        </Grid>
      </form>
    </BaseModal>
  );
};
