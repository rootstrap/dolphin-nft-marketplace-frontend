import { useContext } from 'react';
import { ReactComponent as RibbonIcon } from 'app/assets/icons/ribbon.svg';
import { ReactComponent as BackgroundIcon } from 'app/assets/icons/background.svg';
import { Button, Typography } from '@material-ui/core';
import { colors } from 'app/constants/constants';
import { useAppSelector } from 'app/hooks/reduxHooks';
import { ModalContext } from '../../../context/ModalContext';
import useTranslation from 'app/hooks/useTranslation';
import styles from './HeroleteItem.module.scss';
import { NFTByIdContext } from '../NFTByIdPage';

export const HeroleteItem = () => {
  const t = useTranslation();
  const { isAuthenticated } = useAppSelector(state => state.user);
  const { setLoginModalIsOpen } = useContext(ModalContext);
  const { nft, priceInUsd } = useContext(NFTByIdContext);

  const handleOnClick = () => (isAuthenticated ? console.log('Click') : setLoginModalIsOpen(true));

  return (
    <>
      <div className={styles.heroleteItem}>
        <div>
          <RibbonIcon fill={colors.white} />
          <Typography component="div" variant="subtitle1">
            Tier
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__info}>
            {nft?.attributes.Tier}
          </Typography>
        </div>
        <div>
          <BackgroundIcon />
          <Typography component="div" variant="subtitle1">
            Background
          </Typography>
          <Typography component="div" variant="subtitle1" className={styles.heroleteItem__info}>
            {nft?.attributes.Background}
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
    </>
  );
};
