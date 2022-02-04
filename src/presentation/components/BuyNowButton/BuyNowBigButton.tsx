import { useContext } from 'react';
import { Button, Typography } from '@material-ui/core';
import { ModalContext } from 'app/context/ModalContext';
import { useAppSelector } from 'app/hooks/reduxHooks';
import useTranslation from 'app/hooks/useTranslation';
import styles from './BuyNowButton.module.scss';

export const BuyNowBigButton = ({ buttonText = '', className = '', onClick }: BuyNowBigButtonProps) => {
  const t = useTranslation();
  const { setLoginModalIsOpen } = useContext(ModalContext);
  const { isAuthenticated } = useAppSelector(state => state.user);

  const handleOnClick = () => (isAuthenticated ? onClick() : setLoginModalIsOpen(true));

  return (
    <div className={styles.buyNowButton}>
      <Button className={className} onClick={handleOnClick} variant="outlined">
        <Typography variant="h6" component="p">
          {buttonText ? buttonText : t('creatures.buyCreatures.buyButton')}
        </Typography>
      </Button>
    </div>
  );
};

interface BuyNowBigButtonProps {
  buttonText?: string;
  className?: string;
  onClick: () => void;
}
