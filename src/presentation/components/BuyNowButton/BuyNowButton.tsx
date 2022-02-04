import { BuyNowBigButton, BuyNowWallet } from './';
import { Typography } from '@material-ui/core';
import { DepositModal } from '../DepositModal/DepositModal';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { colors } from 'app/constants/contants';
import { useResponsive } from 'app/hooks/useResponsive';
import { nftPack } from 'app/interfaces/NFT/NFT';
import { NotificationModal } from '../NotificationModal/NotificationModal';
import { useBuyNowButton } from './useBuyNowButton';
import useTranslation from 'app/hooks/useTranslation';
import styles from './BuyNowButton.module.scss';

export const BuyNowButton = ({ buttonText = '', className = '', nftsToBuy, packId }: BuyNowButtonProps) => {
  const t = useTranslation();
  const {
    handleBuyNft,
    isSuccess,
    depositSize,
    handleFundModal,
    enoughBalance,
    fee,
    isOpen,
    isLoadingData,
    isLoadingBuyNFT,
    depositModalIsOpen,
    handleClose,
    handleCloseDepositModal,
  } = useBuyNowButton({ packId, nftsToBuy });

  const { isMobileView } = useResponsive();

  if (isLoadingData || isLoadingBuyNFT)
    return (
      <BuyNowBigButton buttonText={buttonText} className={className} onClick={() => {}} disabled={true} />
    );

  const handleOnClick = enoughBalance ? handleBuyNft : handleFundModal;

  return (
    <>
      <BuyNowBigButton buttonText={buttonText} className={className} onClick={handleOnClick} />

      {!isMobileView && (
        <div className={styles.buyNowButton__typography}>
          <Typography variant="body1"> {t('creatures.buyCreatures.creditDebitCard')}</Typography>
        </div>
      )}

      <DepositModal
        isOpen={depositModalIsOpen}
        handleClose={handleCloseDepositModal}
        fee={fee}
        depositSize={depositSize}
      />

      <NotificationModal handleClose={handleClose} isOpen={isOpen} isVerificationSuccess={isSuccess} />
    </>
  );
};

interface BuyNowButtonProps {
  buttonText?: string;
  className?: string;
  nftsToBuy?: nftPack;
  packId: string;
}
