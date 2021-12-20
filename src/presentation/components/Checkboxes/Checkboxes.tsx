import { useEffect } from 'react';
import { Button, Checkbox, Typography } from '@material-ui/core';
import { useCheckboxes } from './useCheckboxes';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Checkboxes.module.scss';

export const Checkboxes = ({ handleClose, error }: CheckboxesProps) => {
  const t = useTranslation();
  const { kyc1ed, isWalletReady, handleOnClick, isLoading } = useCheckboxes();

  useEffect(() => {
    if (isWalletReady) {
      handleClose();
    }
  }, [isWalletReady]);

  return (
    <div className={styles.checkboxes}>
      {isLoading ? (
        <div className={styles.checkboxes__spinner}>
          <CustomLoader />
        </div>
      ) : (
        <>
          <div className={styles.checkboxes__title}>
            <Typography gutterBottom variant="h4">
              {t('walletSetup.title')}
            </Typography>
            <Typography gutterBottom variant="h5">
              {t('walletSetup.subtitle')}
            </Typography>
            <Typography gutterBottom variant="h6">
              {t('walletSetup.description')}
            </Typography>
          </div>

          {error && <div>{error}</div>}

          <div className={styles.checkboxes__container}>
            <Checkbox checked />
            <Typography variant="h6" className={styles.checkboxes__containerText}>
              {t('walletSetup.firstCheck')}
            </Typography>
          </div>

          <div className={styles.checkboxes__container}>
            <Checkbox checked={Boolean(kyc1ed)} />
            <Typography variant="h6" className={styles.checkboxes__containerText}>
              {t('walletSetup.secondCheck')}
            </Typography>
          </div>

          <div className={styles.checkboxes__container}>
            <Checkbox checked={isWalletReady} />
            <Typography variant="h6" className={styles.checkboxes__containerText}>
              {t('walletSetup.thirdCheck')}
            </Typography>
          </div>

          <div className={styles.checkboxes__button}>
            <Button onClick={handleOnClick}>{t('walletSetup.activate')}</Button>
          </div>

          <Typography variant="body1" onClick={handleClose} className={styles.checkboxes__remind}>
            {t('walletSetup.remindMeLater')}
          </Typography>
        </>
      )}
    </div>
  );
};

interface CheckboxesProps {
  handleClose: () => void;
  error?: string;
}
