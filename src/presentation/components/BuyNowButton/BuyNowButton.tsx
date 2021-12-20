import { Button } from '@material-ui/core';
import { useBuyNowButton } from './useBuyNowButton';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { Checkboxes } from '../Checkboxes/Checkboxes';
import { useContext } from 'react';
import { ModalContext } from 'app/context/ModalContext';

export const BuyNowButton = () => {
  const { buyNft, isError, isLoading, isSuccess, error, handleClose, creaturesBuyNowModalIsOpen } =
    useBuyNowButton();

  return (
    <>
      <Button size="large" variant="outlined" color="inherit" onClick={buyNft}>
        Buy Now
      </Button>
      {isError && (
        <BaseModal open={creaturesBuyNowModalIsOpen} handleClose={handleClose}>
          <Checkboxes error={error} handleClose={handleClose} />
        </BaseModal>
      )}
    </>
  );
};
