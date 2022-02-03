import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { FailedVerification } from '../CC/Verification/FailedVerification';
import { SuccessVerification } from '../CC/Verification/SuccessVerification';
import useTranslation from 'app/hooks/useTranslation';

export const NotificationModal = ({ handleClose, isOpen, isVerificationSuccess }: NotificationModalProps) => {
  const t = useTranslation();

  return (
    <BaseModal open={isOpen} handleClose={handleClose}>
      <div style={{ textAlign: 'center' }}>
        {isVerificationSuccess ? (
          <SuccessVerification successMsg={t('creatures.buyCreatures.successMsg')} />
        ) : (
          <FailedVerification errorMsg={t('creatures.buyCreatures.errorMsg')} />
        )}
      </div>
    </BaseModal>
  );
};

interface NotificationModalProps {
  handleClose: () => void;
  isOpen: boolean;
  isVerificationSuccess: boolean;
}
