import { Modal } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import styles from './Modal.module.scss';

export const BaseModal = ({ open, handleClose, children, bigModal = false }: ModalProps) => (
  <Modal open={open} onClose={handleClose} disableScrollLock>
    <div className={styles.modal} style={bigModal ? { width: '70%' } : {}}>
      <button className={styles.modal__close} onClick={handleClose}>
        <CloseIcon color="primary" fontSize="large" />
      </button>
      {children}
    </div>
  </Modal>
);

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  bigModal?: boolean;
  handleClose: () => void;
}
