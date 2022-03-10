import { useContext, useState } from 'react';
import { ReactComponent as RibbonIcon } from 'app/assets/icons/ribbon.svg';
import { ReactComponent as BackgroundIcon } from 'app/assets/icons/background.svg';
import { ReactComponent as SignatureIcon } from 'app/assets/icons/signature.svg';
import { Button, Typography } from '@material-ui/core';
import { colors } from 'app/constants/constants';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { ModalContext } from '../../../context/ModalContext';
import { NFTByIdContext } from '../NFTByIdPage';
import { BuyHeroletesNft } from 'app/components/BuyHeroletesNft/BuyHeroletesNft';
import useTranslation from 'app/hooks/useTranslation';
import styles from './HeroleteItem.module.scss';

export const HeroleteItem = () => {
  const t = useTranslation();
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false);
  const { isAuthenticated } = useAppSelector(state => state.user);
  const { setLoginModalIsOpen } = useContext(ModalContext);
  const { nft, priceInUsd } = useContext(NFTByIdContext);

  const handleOnClick = () => (isAuthenticated ? setIsBuyModalOpen(true) : setLoginModalIsOpen(true));
  const handleClose = () => setIsBuyModalOpen(false);

  return (
    <>
      <div className={styles.heroleteItem}>
        <div>
          <RibbonIcon fill={colors.white} />
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__category}>
            Tier:
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__info}>
            {nft?.attributes.Tier}
          </Typography>
        </div>
        <div>
          <BackgroundIcon fill={colors.white} />
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__category}>
            Background:
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__info}>
            {nft?.attributes.Background}
          </Typography>
        </div>
        <div>
          <RibbonIcon fill={colors.white} />
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__category}>
            Athlete:
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__info}>
            {nft?.attributes.Athlete}
          </Typography>
        </div>
        <div>
          <RibbonIcon fill={colors.white} />
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__category}>
            Sport:
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__info}>
            {nft?.attributes.Sport}
          </Typography>
        </div>
        <div>
          <SignatureIcon fill={colors.white} />
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__category}>
            Signed:
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__info}>
            {nft?.attributes.Signed}
          </Typography>
        </div>
      </div>
      <div className={styles.heroleteItem__price}>
        <Typography component="div" variant="h6">
          {t('nft.price')}:
        </Typography>
        <div>
          <Typography component="span">
            {nft?.quoteCurrency} {nft?.offerPrice}{' '}
          </Typography>
          <small>{`($${(priceInUsd * nft?.offerPrice).toFixed(2)})`}</small>
        </div>
      </div>
      <div className={styles.heroleteItem__button}>
        <Button fullWidth variant="contained" onClick={handleOnClick}>
          {t('nft.buyButton')}
        </Button>
      </div>

      <BuyHeroletesNft isOpen={isBuyModalOpen} handleClose={handleClose} />
    </>
  );
};
