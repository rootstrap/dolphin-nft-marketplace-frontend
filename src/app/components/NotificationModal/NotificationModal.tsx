import { BaseModal } from 'app/components/Modal/Modal';
import { FailedVerification } from '../CC/Verification/FailedVerification';
import { SuccessVerification } from '../CC/Verification/SuccessVerification';
import useTranslation from 'app/hooks/useTranslation';
import styles from './Notification.module.scss';

export const NotificationModal = ({
  customMsg = '',
  handleClose,
  isOpen,
  isVerificationSuccess,
}: NotificationModalProps) => {
  const t = useTranslation();

  return (
    <BaseModal open={isOpen} handleClose={handleClose}>
      <div className={styles.notification}>
        {isVerificationSuccess ? (
          <SuccessVerification successMsg={customMsg || t('creatures.buyCreatures.successMsg')} />
        ) : (
          <FailedVerification errorMsg={customMsg || t('creatures.buyCreatures.errorMsg')} />
        )}
      </div>
    </BaseModal>
  );
};

interface NotificationModalProps {
  customMsg?: string;
  handleClose: () => void;
  isOpen: boolean;
  isVerificationSuccess: boolean;
}
