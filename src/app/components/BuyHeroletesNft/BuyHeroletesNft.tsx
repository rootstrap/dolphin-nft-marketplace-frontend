import { BaseModal } from '../Modal/Modal';
import { ShoppingCartOutlined } from '@material-ui/icons';
import { Button, CircularProgress, Typography } from '@material-ui/core';
import { useBuyHeroletesNft } from './useBuyHerolesNft';
import { SuccessVerification } from '../CC/Verification/SuccessVerification';
import { FailedVerification } from '../CC/Verification/FailedVerification';
import useTranslation from 'app/hooks/useTranslation';
import styles from './BuyHeroletesNft.module.scss';

export const BuyHeroletesNft = ({ isOpen, handleClose }: BuyHeroletesNftProps) => {
  const t = useTranslation();
  const { error, isError, handleOnClick, isLoading, isSuccess } = useBuyHeroletesNft(isOpen);

  return (
    <BaseModal open={isOpen} handleClose={handleClose}>
      <div className={styles.buyHeroletes}>
        <div className={styles.buyHeroletes__title}>
          <ShoppingCartOutlined fontSize="large" />
          <Typography variant="h5">Confirm your purchase</Typography>
        </div>

        <div className={styles.buyHeroletes__button}>
          {error ? (
            <>
              <Typography>{error}</Typography>
              <Typography>
                To fund your SOLANA wallet go to{' '}
                <a href="https://ftx.us/" target="_blank" rel="noreferrer">
                  FTX
                </a>
              </Typography>
            </>
          ) : (
            <Button disabled={isLoading} onClick={handleOnClick} endIcon={isLoading && <CircularProgress />}>
              Buy Now!
            </Button>
          )}
        </div>
      </div>

      <div className={styles.buyHeroletes__verification}>
        {isSuccess && <SuccessVerification successMsg={t('nft.buyNft.successMsg')} />}

        {isError && <FailedVerification errorMsg={t('creatures.buyCreatures.errorMsg')} />}
      </div>
    </BaseModal>
  );
};

interface BuyHeroletesNftProps {
  isOpen: boolean;
  handleClose: () => void;
}
