import { Button, Checkbox, Typography } from '@material-ui/core';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { useContext, useEffect } from 'react';
import { ModalContext } from 'app/context/ModalContext';
import { useLoginStatusMutation } from 'infrastructure/services/user/UserService';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Checkboxes.module.scss';

export const Checkboxes = ({ handleClose }: CheckboxesProps) => {
  const t = useTranslation();
  const { kyc1ed } = useAppSelector(state => state.user.user);
  const { defaultCreditCard } = useAppSelector(state => state.creditCard);
  const { setKycModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);

  const [loginStatus] = useLoginStatusMutation();

  const isWalletReady = defaultCreditCard.status === 'approved';

  const handleOnClick = () => {
    kyc1ed ? setCcModalIsOpen(true) : setKycModalIsOpen(true);
  };

  useEffect(() => {
    loginStatus();
  }, [kyc1ed]);

  return (
    <div className={styles.checkboxes}>
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

      <div className={styles.checkboxes__container}>
        <Checkbox checked />
        <Typography variant="h6" className={styles.checkboxes__containerText}>
          {t('walletSetup.firstCheck')}
        </Typography>
      </div>

      <div className={styles.checkboxes__container}>
        <Checkbox checked={Boolean(kyc1ed)} disabled />
        <Typography variant="h6" className={styles.checkboxes__containerText}>
          {t('walletSetup.secondCheck')}
        </Typography>
      </div>

      <div className={styles.checkboxes__container}>
        <Checkbox checked={isWalletReady} disabled />
        <Typography variant="h6" className={styles.checkboxes__containerText}>
          {t('walletSetup.thirdCheck')}
        </Typography>
      </div>

      <div className={styles.checkboxes__button}>
        <Button onClick={handleOnClick}>{t('walletSetup.activate')}</Button>
      </div>

      <Typography variant="h6" onClick={handleClose} className={styles.checkboxes__remind}>
        {t('walletSetup.remindMeLater')}
      </Typography>
    </div>
  );
};

interface CheckboxesProps {
  handleClose: () => void;
}
