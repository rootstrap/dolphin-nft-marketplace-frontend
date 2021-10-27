import { useContext } from 'react';
import { ModalContext } from 'app/context/ModalContext';

export const useCC = () => {
  const { ccModalIsOpen, setCcModalIsOpen } = useContext(ModalContext);

  const handleClose = () => setCcModalIsOpen(false);

  return {
    ccModalIsOpen,
    handleClose,
  };
};
