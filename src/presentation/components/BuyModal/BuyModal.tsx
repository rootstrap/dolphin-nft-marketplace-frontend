import { Button, Typography } from '@material-ui/core';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { useBuyNftMutation } from 'infrastructure/services/nft/NftService';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { SuccessVerification } from '../CC/Verification/SuccessVerification';
import useTranslation from 'app/hooks/useTranslation';
import styles from './BuyModal.module.scss';

export const BuyModal = ({ isOpen, handleClose, nftId, price }: BuyModalProps) => {
  const t = useTranslation();
  const [buyNft, { isLoading, isSuccess }] = useBuyNftMutation();

  const handleOnClick = () => {
    buyNft({
      nftId,
      price,
    });
  };

  const componentToRender = isSuccess ? (
    <SuccessVerification successMsg={t('nft.buyNft.successMsg')} />
  ) : (
    <>
      <Typography gutterBottom variant="h5">
        {t('nft.buyNft.buyModalTitle')}
      </Typography>
      <Typography gutterBottom variant="h5">
        Price: ${price}
      </Typography>
      <Button onClick={handleOnClick}>{t('nft.buyNft.confirmButton')}</Button>
    </>
  );

  return (
    <BaseModal open={isOpen} handleClose={handleClose}>
      <div className={styles.buyModal}>
        {isLoading ? <CustomLoader msg="Please Wait..." /> : componentToRender}
      </div>
    </BaseModal>
  );
};

interface BuyModalProps {
  isOpen: boolean;
  handleClose: () => void;
  nftId: string;
  price: number;
}
