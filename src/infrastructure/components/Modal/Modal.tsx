import { Modal } from '@material-ui/core';
import styles from './Modal.module.scss';

export const BaseModal = ({ open, handleClose, children }: ModalProps) => (
  <Modal open={open} onClose={handleClose}>
    <div className={styles.modal}>
      <button className={styles.modal__close} onClick={handleClose} type="button">
        X
      </button>
      {children}
    </div>
  </Modal>
);

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}
