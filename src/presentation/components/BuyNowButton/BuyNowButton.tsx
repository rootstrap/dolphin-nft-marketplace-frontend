import { Button, Grid, Typography } from '@material-ui/core';
import { useBuyNowButton } from './useBuyNowButton';
import useTranslation from 'app/hooks/useTranslation';
import { DepositModal } from '../DepositModal/DepositModal';
import { creditCardStatus } from 'app/constants/contants';
import { CustomLoader } from 'infrastructure/components/CustomLoader/CustomLoader';
import { colors } from 'app/constants/contants';
import { BaseModal } from 'infrastructure/components/Modal/Modal';
import { SuccessVerification } from '../CC/Verification/SuccessVerification';
import styles from './BuyNowButton.module.scss';

export const BuyNowButton = () => {
  const t = useTranslation();
  const {
    buyNft,
    depositSize,
    defaultCreditCard,
    handleOnClick,
    enoughBalance,
    fee,
    isOpen,
    isLoadingData,
    depositModalIsOpen,
    handleClose,
    handleCloseDepositModal,
  } = useBuyNowButton();

  return (
    <>
      <Grid container direction="column" alignItems="center" spacing={2}>
        {!isLoadingData ? (
          <>
            {enoughBalance ? (
              <Grid item xs={12} lg={12}>
                <Button
                  className={styles.buyNowButton}
                  size="large"
                  onClick={buyNft}
                  variant="outlined"
                  color="secondary"
                >
                  <Typography variant="h5" className={styles.buyNowButton__typography}>
                    {t('creatures.buyCreatures.buyButton')}
                  </Typography>
                </Button>
              </Grid>
            ) : (
              <>
                <Grid item xs={12} lg={12}>
                  <Typography component="div">
                    {defaultCreditCard.status === creditCardStatus.approved
                      ? t('creatures.buyCreatures.fundWallet')
                      : t('creatures.buyCreatures.activateWallet')}
                  </Typography>
                </Grid>
                <Grid item xs={12} lg={12}>
                  <Button fullWidth onClick={handleOnClick} variant="text" color="secondary">
                    {defaultCreditCard.status === creditCardStatus.approved
                      ? t('creatures.buyCreatures.fundButton')
                      : t('creatures.buyCreatures.activateButton')}
                  </Button>
                </Grid>
              </>
            )}
            <Typography component="div">{t('creatures.buyCreatures.creditDebitCard')}</Typography>
          </>
        ) : (
          <CustomLoader color={colors.orangeCreatures} />
        )}
      </Grid>

      <DepositModal
        isOpen={depositModalIsOpen}
        handleClose={handleCloseDepositModal}
        fee={fee}
        depositSize={depositSize}
      />
      <BaseModal open={isOpen} handleClose={handleClose}>
        <div style={{ textAlign: 'center' }}>
          <SuccessVerification successMsg={t('creatures.buyCreatures.successMsg')} />
        </div>
      </BaseModal>
    </>
  );
};
