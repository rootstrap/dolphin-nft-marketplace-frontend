import { Button, Typography } from '@material-ui/core';
import { InputText } from '../../../infrastructure/components/InputText/InputText';
import { Modal } from '../../../infrastructure/components/Modal/Modal';
import { useSignup } from './useSignup';
import useTranslation from '../../../app/hooks/useTranslation';
import { Link } from 'react-router-dom';
import styles from './Signup.module.scss';

export const Signup = () => {
  const t = useTranslation();
  const {
    formValues,
    signupModalIsOpen,
    handleOpenSigninModal,
    handleClose,
    handleOnSubmit,
    error,
    handleOnChange,
  } = useSignup();
  const { email, password, passwordConfirmation } = formValues;

  return (
    <Modal isOpen={signupModalIsOpen} handleClose={handleClose}>
      <form className={styles.signupForm} onSubmit={handleOnSubmit}>
        <div className={styles.signupForm__title}>
          <Typography variant="h5">{t('signup.title')}</Typography>
        </div>

        {error && (
          <div className={styles.signupForm__error}>
            <Typography variant="h6">{error}</Typography>
          </div>
        )}

        <hr />

        <InputText
          className={styles.signupForm__input}
          label={t('signup.email')}
          name="email"
          type="email"
          value={email}
          error={!!error}
          onChange={handleOnChange}
        />

        <InputText
          className={styles.signupForm__input}
          label={t('signup.password')}
          name="password"
          type="password"
          value={password}
          error={!!error}
          onChange={handleOnChange}
        />

        <InputText
          className={styles.signupForm__input}
          label={t('signup.passwordConfirmation')}
          name="passwordConfirmation"
          type="password"
          value={passwordConfirmation}
          error={!!error}
          onChange={handleOnChange}
        />

        <div className={styles.signupForm__button}>
          <Button fullWidth type="submit">
            {t('signup.button')}
          </Button>
        </div>

        <div>
          <Typography>{t('signup.signinMsg')}</Typography>
          <Link to="/" onClick={handleOpenSigninModal}>
            <Typography>{t('signup.signinLink')}</Typography>
          </Link>
        </div>
      </form>
    </Modal>
  );
};
