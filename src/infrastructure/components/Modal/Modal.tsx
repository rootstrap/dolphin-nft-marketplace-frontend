import { Box, Modal } from '@material-ui/core';
import styles from './Modal.module.scss';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30rem',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export const BaseModal = ({ open, handleClose, children }: ModalProps) => (
  <Modal open={open} onClose={handleClose}>
    <Box sx={style}>
      <button className={styles.modal__close} onClick={handleClose} type="button">
        X
      </button>
      {children}
    </Box>
  </Modal>
);

interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  handleClose: () => void;
}
