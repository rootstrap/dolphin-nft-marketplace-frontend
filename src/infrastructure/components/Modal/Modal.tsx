import { Modal } from '@material-ui/core';
import closeBtn from 'app/assets/close.svg';
import styles from './Modal.module.scss';

export const BaseModal = ({ open, handleClose, children, bigModal = false }: ModalProps) => (
  <Modal open={open} onClose={handleClose} style={{}} disableScrollLock>
    <div className={styles.modal} style={bigModal ? { width: '70%' } : {}}>
      <button className={styles.modal__close} onClick={handleClose} type="button">
        <img src={closeBtn} alt="close" />
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
