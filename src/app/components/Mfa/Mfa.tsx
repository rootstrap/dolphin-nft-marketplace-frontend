import { useEffect } from 'react';
import { Typography, Button, Link } from '@material-ui/core';
import { PhoneAndroidOutlined } from '@material-ui/icons';
import { useMfa } from './useMfa';
import { InputText } from 'app/components/InputText/InputText';
import { CustomLoader } from 'app/components/CustomLoader/CustomLoader';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Mfa.module.scss';

export const Mfa = ({ setIsMfaRequired }: MfaProps) => {
  const t = useTranslation();
  const { register, handleSubmit, onSubmit, isLoading, isSuccess, errors, error } = useMfa();

  useEffect(() => {
    if (isSuccess) {
      setIsMfaRequired(false);
    }
  }, [setIsMfaRequired, isSuccess]);

  return (
    <form className={styles.mfa} onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <div className={styles.mfa__spinner}>
          <CustomLoader />
        </div>
      ) : (
        <>
          <PhoneAndroidOutlined />
          <Typography gutterBottom variant="h5">
            {t('login.mfa.title')}
          </Typography>
          <Typography gutterBottom variant="h6">
            {t('login.mfa.subtitle')}
          </Typography>
          <Typography gutterBottom variant="h6" className={styles.mfa__subtitle}>
            {t('login.mfa.subtitle2')}
          </Typography>

          {error && (
            <div className={styles.mfa__error}>
              <Typography variant="h6">{error}</Typography>
            </div>
          )}

          <div className={styles.mfa__input}>
            <InputText
              className={styles.mfa__inputText}
              register={register}
              name="securityCode"
              type="number"
              error={errors.securityCode}
            />
          </div>

          <div className={styles.mfa__button}>
            <Button type="submit">{t('login.mfa.button')}</Button>
          </div>
          <Typography variant="body1">
            {t('login.mfa.faqText')}
            <Link href={process.env.REACT_APP_ZENDESK_URL} target="_blank" rel="noopener noreferrer">
              {t('login.mfa.faq')}
            </Link>
          </Typography>
        </>
      )}
    </form>
  );
};

interface MfaProps {
  setIsMfaRequired: React.Dispatch<React.SetStateAction<boolean>>;
}
