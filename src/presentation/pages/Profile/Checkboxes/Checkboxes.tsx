import { Checkbox, Typography } from '@material-ui/core';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useContext } from 'react';
import { ModalContext } from '../../../../app/context/ModalContext';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Checkboxes.module.scss';

export const Checkboxes = () => {
  const t = useTranslation();
  const { kyc1ed } = useAppSelector(state => state.user.user);
  const { defaultCreditCard } = useAppSelector(state => state.creditCard);
  const { setKycModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);

  const isWalletReady = defaultCreditCard.status === 'approved';
  const isFlowComplete = kyc1ed && isWalletReady;

  return (
    <>
      {!isFlowComplete && (
        <>
          <div className={styles.checkboxes}>
            <div className={styles.checkboxes__container}>
              <Checkbox checked />
              <Typography variant="h6" className={styles.checkboxes__containerText}>
                {t('profile.checkboxes.firstCheck')}
              </Typography>
            </div>

            <div className={styles.checkboxes__container}>
              <Checkbox checked={kyc1ed} />
              <Typography
                variant="h6"
                onClick={() => setKycModalIsOpen(!kyc1ed)}
                className={styles.checkboxes__containerText}
              >
                {t('profile.checkboxes.secondCheck')}
              </Typography>
            </div>

            {kyc1ed && (
              <div className={styles.checkboxes__container}>
                <Checkbox checked={isWalletReady} />
                <Typography
                  variant="h6"
                  onClick={() => setCcModalIsOpen(!isWalletReady)}
                  className={styles.checkboxes__containerText}
                >
                  {t('profile.checkboxes.thirdCheck')}
                </Typography>
              </div>
            )}
          </div>

          <Typography variant="h6">{t('profile.checkboxes.description')}</Typography>
        </>
      )}
    </>
  );
};
