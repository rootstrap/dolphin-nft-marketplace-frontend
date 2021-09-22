import { Button, Typography } from '@material-ui/core';
import { Modal } from '../../../infrastructure/components/Modal/Modal';
import { InputText } from '../../../infrastructure/components/InputText/InputText';
import { useLogin } from './useLogin';
import useTranslation from '../../../app/hooks/useTranslation';
import { Link } from 'react-router-dom';
import styles from './Login.module.scss';

export const Login = () => {
  const t = useTranslation();
  const {
    formValues,
    loginModalIsOpen,
    handleOpenSignupModal,
    handleClose,
    handleOnSubmit,
    error,
    handleOnChange,
  } = useLogin();

  const { email, password } = formValues;

  return (
    <Modal isOpen={loginModalIsOpen} handleClose={handleClose}>
      <form className={styles.loginForm} onSubmit={handleOnSubmit}>
        <div className={styles.loginForm__title}>
          <Typography variant="h5">{t('login.title')}</Typography>
        </div>

        {error && (
          <div className={styles.loginForm__error}>
            <Typography variant="h6">{error}</Typography>
          </div>
        )}

        <hr />

        <InputText
          className={styles.loginForm__input}
          label={t('login.email')}
          name="email"
          type="email"
          value={email}
          error={error ? true : false}
          onChange={handleOnChange}
        />

        <InputText
          className={styles.loginForm__input}
          label={t('login.password')}
          name="password"
          type="password"
          value={password}
          error={error ? true : false}
          onChange={handleOnChange}
        />

        <div className={styles.loginForm__button}>
          <Button fullWidth type="submit">
            {t('login.button')}
          </Button>
        </div>

        <div>
          <Typography>{t('login.signupMsg')}</Typography>

          <Link to="/" onClick={handleOpenSignupModal}>
            <Typography>{t('login.signupLink')}</Typography>
          </Link>
        </div>
      </form>
    </Modal>
  );
};
