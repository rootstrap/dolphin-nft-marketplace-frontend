import ReactModal from 'react-modal';
import styles from './Modal.module.scss';

ReactModal.setAppElement('#root');

export const Modal = ({ children, isOpen, handleClose }: ModalProviderProps) => (
  <ReactModal
    style={{
      overlay: {
        backgroundColor: '#00000090',
      },
      content: {
        width: '30rem',
        height: '40rem',
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
      },
    }}
    isOpen={isOpen}
    onRequestClose={() => handleClose()}
  >
    <button className={styles.modal__close} onClick={handleClose} type="button">
      X
    </button>
    {children}
  </ReactModal>
);

export interface ModalProviderProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
}
