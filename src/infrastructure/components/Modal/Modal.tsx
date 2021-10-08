import { Modal } from '@material-ui/core';
import styles from './Modal.module.scss';

export const BaseModal = ({ open, handleClose, children, bigModal = false }: ModalProps) => (
  <Modal open={open} onClose={handleClose} style={{}}>
    <div className={styles.modal} style={bigModal ? { width: '75%' } : {}}>
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
  bigModal?: boolean;
  handleClose: () => void;
}
