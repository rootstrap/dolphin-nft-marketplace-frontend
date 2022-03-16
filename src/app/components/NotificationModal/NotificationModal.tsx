import { BaseModal } from 'app/components/Modal/Modal';
import { FailedVerification } from '../CC/Verification/FailedVerification';
import { SuccessVerification } from '../CC/Verification/SuccessVerification';
import useTranslation from 'app/hooks/useTranslation';

export const NotificationModal = ({
  customMsg = '',
  handleClose,
  isOpen,
  isVerificationSuccess,
}: NotificationModalProps) => {
  const t = useTranslation();

  return (
    <BaseModal open={isOpen} handleClose={handleClose}>
      <div style={{ textAlign: 'center' }}>
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
